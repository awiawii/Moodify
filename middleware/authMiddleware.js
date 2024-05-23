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
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({
            code: 401,
            status: 'Unauthorized',
            error: 'Invalid token'
        });
    }
};

module.exports = authMiddleware;