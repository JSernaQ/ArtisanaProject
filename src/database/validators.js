const { User } = require('../models/user.model');
const bcriptjs = require('bcryptjs');

class DBValidators {
    async emailExist(email) {
        const user = await User.findOne({ email });
        return !!user
    }

    async userExist(userName) {
        const user = await User.findOne({ userName });
        return !!user
    }

    async passwordValidator(password, hashPassword) {
        return await bcriptjs.compare(password, hashPassword);
    }

    async loginValidator(email, password) {
        const user = await User.findOne({ email });
        const passwordCompare = await this.passwordValidator(password, user.password);

        if (!user || user.isActive == false || passwordCompare == false) { return !!user };

        return user

    }

    async userRegister(res, userName, email, password) {
        const emailExist = await this.emailExist(email);
        const userExist = await this.userExist(userName);

        if (!emailExist && !userExist) {
            try {

                const salt = bcriptjs.genSaltSync(8);
                const pass = bcriptjs.hashSync(password, salt);

                const user = await User.create({ userName, email, password: pass });
                await user.save();

                return res.status(201).redirect('/?msg=Usuario registrado');

            } catch (error) {
                return res.status(400).redirect(`/auth/register?msg=${error}`);
            }
        }

        return res.status(400).redirect('/auth/register?msg=Los datos ya existen')

    }


}

module.exports = { DBValidators }