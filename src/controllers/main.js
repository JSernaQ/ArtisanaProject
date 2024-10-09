const getMain = (req, res) => {    
    return res.status(200)
        .render('auth/login', { title: 'Iniciar Sesión' });
};

module.exports = {
    getMain
}