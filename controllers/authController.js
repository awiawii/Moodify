const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signOut } = require('firebase/auth');
const admin = require('../config/firebaseAdmin');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client('643160831565-9q86k9e9metjf16r2t6266kela9ac720.apps.googleusercontent.com');

exports.signin = (req, res) => {
    const { email, password } = req.body;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            res.status(200).json({
                message: 'Login successful',
                user: user
            });
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
        const user = userCredential.user;

        res.status(201).json({
            message: 'Registration successful',
            user: user
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

        // Membuat token khusus Firebase untuk pengguna
        const firebaseToken = await admin.auth().createCustomToken(userRecord.uid);

        res.status(200).json({
            message: 'Google Sign-In successful',
            token: firebaseToken,
            user: userRecord
        });
    } catch (error) {
        res.status(401).json({
            code: 401,
            status: 'Unauthorized',
            error: error.message,
        });
    }
};

exports.logout = (req, res) => {
    const auth = getAuth();
    
    signOut(auth).then(() => {
        res.status(200).json({
            message: 'Logout successful'
        });
    }).catch((error) => {
        res.status(500).json({
            error: 'Unable to logout'
        });
    });
};