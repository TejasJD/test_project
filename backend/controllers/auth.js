const login = (req, res) => {
    res.json({
        ok: true,
        message: "at login page!"
    });
};

const register = (req, res) => {
    res.json({
        ok: true,
        message: "at register page!"
    });
};

module.exports = {
    login,
    register
}