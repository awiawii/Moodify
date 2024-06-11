const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signOut, sendEmailVerification } = require('firebase/auth');
const admin = require('../config/firebaseAdmin');
const { OAuth2Client } = require('google-auth-library');
const axios = require('axios');
const models = require('../models');

const client = new OAuth2Client('643160831565-9q86k9e9metjf16r2t6266kela9ac720.apps.googleusercontent.com');

exports.signin = (req, res) => {
    const { email, password } = req.body;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const status = user.emailVerified;

            if (status) {
                res.status(200).json({
                    message: 'Login successful!',
                    user: user
                });
            } else {
                res.status(403).json({
                    code: 403,
                    status: 'Forbidden',
                    error: 'Email is not verified!'
                });
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            res.status(401).json({
                code: 401,
                status: 'Unauthorized',
                error: errorMessage,
                errorCode: errorCode
            });
        });
};

exports.register = async (req, res) => {
    const { email, password } = req.body;
    const auth = getAuth();

    try {
        const signInMethods = await fetchSignInMethodsForEmail(auth, email);
        if (signInMethods.length > 0) {
            return res.status(400).json({
                code: 400,
                status: 'Bad Request',
                error: 'Email is already registered. Please use another email.'
            });
        }

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        sendEmailVerification(auth.currentUser).then(() => {
            const user = userCredential.user;

            models.User_Info.findOne({where:{uid:user.uid}}).then(async result => {
                if(!result){
                    const user_info = {
                        uid:user.uid,
                        name:req.body.name
                    }        
                    await models.User_Info.create(user_info).then(user_info=>{
                        res.status(201).json({
                            message: 'Email Verification sent!',
                            user: {user,user_info}
                        });
                    }).catch(error=>{
                        return res.status(500).json({
                            message: "Something went wrong",
                            error:error
                        });
                    });
                }
            });
        });
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.status(400).json({
            code: 400,
            status: 'Bad Request',
            error: errorMessage,
            errorCode: errorCode
        });
    }
};

exports.signinWithGoogle = async (req, res) => {
    const { idToken } = req.body;

    try {
        // Verifikasi token ID Google
        const ticket = await client.verifyIdToken({
            idToken: idToken,
            audience: '643160831565-9q86k9e9metjf16r2t6266kela9ac720.apps.googleusercontent.com'
        });
        const payload = ticket.getPayload();

        // Menggunakan Firebase Admin SDK untuk membuat atau mendapatkan pengguna
        const userRecord = await admin.auth().getUserByEmail(payload.email).catch(async (error) => {
            if (error.code === 'auth/user-not-found') {
                return await admin.auth().createUser({
                    email: payload.email,
                    displayName: payload.name,
                    photoURL: payload.picture
                });
            }
            throw error;
        });


        if (!userRecord.emailVerified) {
            await admin.auth().updateUser(userRecord.uid, {
                emailVerified: true
            });
            userRecord = await admin.auth().getUser(userRecord.uid);
        }

        models.User_Info.findOne({where:{uid:userRecord.uid}}).then(async result => {
            if(!result){
                const user_info = {
                    uid:userRecord.uid,
                }        
                await models.User_Info.create(user_info);
            }
        });

        const firebaseToken = await admin.auth().createCustomToken(userRecord.uid);
        
        const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBaaRRy-CDpf2vOAXKnZRTMuaYlBGZp3Hc`, {
            token: firebaseToken,
            returnSecureToken: true
        });

        const idTokenData = response.data;

        res.status(200).json({
            message: 'Google Sign-In successful',
            user: userRecord,
            stsTokenManager: {
                refreshToken: idTokenData.refreshToken,
                accessToken: idTokenData.idToken,
                expirationTime: Date.now() + parseInt(idTokenData.expiresIn, 10) * 1000
            }
        });
    } catch (error) {
        res.status(401).json({
            code: 401,
            status: 'Unauthorized',
            error: error.message,
        });
    }
};

exports.logout = async (req, res) => {
    const uid = req.user.uid;

    try {
        await admin.auth().revokeRefreshTokens(uid);

        const userRecord = await admin.auth().getUser(uid);
        const timestamp = new Date(userRecord.tokensValidAfterTime).getTime() / 1000;
        
        res.status(200).json({
            message: 'Logout successful',
            uid: uid,
            tokensValidAfter: timestamp
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'Internal Server Error',
            error: error.message,
        });
    }
};

exports.protectedExample = (req, res) => {
    res.status(200).json({
        message: 'You have accessed a protected route',
        user: req.user.uid
    });
}
