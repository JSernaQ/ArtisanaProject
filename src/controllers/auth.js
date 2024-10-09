const { User } = require("../models/user.model.js");
const { generateJWT } = require("../middlewares/generateJWT");
const { encrypt, decrypt } = require("../middlewares/bcrypt.js");

const loginGet = (req, res) => {
    const msg = req.query.msg || undefined
    const error = req.query.error || undefined

    try {
        return res.render("auth/login", { msg, error });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener la vista de login"
        })
    };
};

const loginPost = async (req, res) => {

    try {      
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user || !user.status) {
            return res.status(404).redirect('/auth/login?error=Usuario no encontrado');
        };

        passwordMatch = await (decrypt(password, user.password));
        
        if (!passwordMatch) {
            return res.status(401).redirect('/auth/login?error=Contraseña invalida');
        };

        const generatedToken = generateJWT(user);
        
        return res.status(200)
            .cookie('token', generatedToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict'
            })
            .render('dashboard', {
                success: true,
                message: "User logged in successfully",
                username: user.username,
                email: user.email
            });


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    };

};

const registerPost = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const hashedPassword = encrypt(password);

        const userExist = await User.findOne({ username });
        const emailExist = await User.findOne({ email });

        if (userExist || emailExist) {
            return res.status(400).json({
                success: false,
                message: "Username or Email already exists"
            });
        }

        const newUser = new User({ username, password: hashedPassword, email });
        await newUser.save();

        return res.status(201)
            .cookie('token', generatedToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict'
            })
            .render('dashboard', {
                success: true,
                message: "User logged in successfully",
                username: user.username
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            err: error
        });
    }
};

const logout = (req, res) => {
    clearCookie("token");
    return res.status(200)
        .render()
}

module.exports = {
    loginGet,
    loginPost,
    registerPost,
    logout
}