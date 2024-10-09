const { Router } = require('express');
const router = Router();

const {
    loginGet,
    loginPost,
    registerGet,
    registerPost,
} = require('../controllers/auth')

router.get('/login', 
    loginGet
);

router.post('/login',
    loginPost
);

router.post('/register',
    registerPost
);

module.exports = router;
