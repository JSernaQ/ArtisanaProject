// const { generateJWT } = require('../helpers/generate-jwt');
// const User = require('../models/users.model');
// const { DBValidators } = require('../database/validators');
// const DBValidator = new DBValidators;

const authLoginGet = (req, res) => {
    try {
        res.status(200).render('main')  
    } catch (error) {
        
    } 
};

// const authLoginPost = async (req, res) => {

//     const { email, password } = req.body;

//     try {
//         const access = await DBValidator.loginValidator(email, password);

//         if (!access) {
//             return res.status(400).redirect('/auth/login?error=Verifica los datos de acceso');
//         }

//         const token = generateJWT(access._id, access.userName, access.rol);

//         res.status(200).cookie('token', token, {
//             httpOnly: true,
//             secure: true,
//             sameSite: 'strict'
//         });

//         res.redirect('/?msg=Bienvenido')

//     } catch (error) {
//         res.status(400).redirect(`/auth/login?error=${error.message}`)
//         console.log('error');
//     }

// };

// const authRegisterGet = (req, res) => {
//     return res.status(200).json({
//         ok: true,
//         msg: 'register-get modify this'
//     })
// };

// const authRegisterPost = async (req, res) => {
//     const { username, email, password1, password2 } = req.body;
//     if (password1 == password2) {
//         return await DBValidator.userRegister(res, username, email, password1)
//     }

//     return res.status(400).redirect('/auth/register?error=Contraseñas no coinciden')
// }

// const logout = (req, res) => {
//     try {
//         res.clearCookie("token");
//         return res.status(200).redirect('/?msg=Adiós')
//     } catch (error) {
//         console.log(error.message);
//     }
// }

module.exports = {
    authLoginGet,
    // authLoginPost,
    // authRegisterGet,
    // authRegisterPost,
    // logout
};
