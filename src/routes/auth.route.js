const { Router } = require("express");
const router = Router();

const {
    authLoginGet
} = require('../controllers/auth.controller')

router.get("/", 
    authLoginGet
);



module.exports = router;