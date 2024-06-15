//authMiddleware.js

const admin = require('../config/firebaseAdmin');

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            code: 401,
            status: 'Unauthorized',
            error: 'No token provided'
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        // Set checkRevoked to true to ensure the token has not been revoked
        const decodedToken = await admin.auth().verifyIdToken(token, true);
        req.user = decodedToken;
        next();
    } catch (error) {
        if (error.code === 'auth/id-token-revoked') {
            // Token has been revoked
            return res.status(401).json({
                code: 401,
                status: 'Unauthorized',
                error: 'Token has been revoked'
            });
        } else if (error.code === 'auth/argument-error') {
            // Invalid token
            return res.status(401).json({
                code: 401,
                status: 'Unauthorized',
                error: 'Invalid token'
            });
        } else {
            // Other errors
            return res.status(401).json({
                code: 401,
                status: 'Unauthorized',
                error: 'Authentication error'
            });
        }
    }
};

module.exports = authMiddleware;