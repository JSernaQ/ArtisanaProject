const { Router } = require('express');
const router = Router();
const { getMain } = require('../controllers/main');

router.get('/', 
    getMain
);

module.exports = router;
