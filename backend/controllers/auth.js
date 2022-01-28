const login = (req, res, next) => {
    res.json({
        ok: true,
        message: "at login page!"
    });
};

const register = (req, res, next) => {
    res.json({
        ok: true,
        message: "at register page!"
    });
};

module.exports = {
    login,
    register
}