const { user } = require("../../models");

exports.addUsers = async (req, res) => {
    try {
        await user.create(req.body);

        res.send({
            status: "success",
            data: {user: req.body},
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.getUser = async (req, res) => {
    try {

        const {email, password} = req.body

        const dataUser = await user.findOne({
            where: {
                email,
                password,
            },
            attributes: {
                exclude: ["createdAt","updatedAt"]
            }
        });

        res.send({
            status: "success",
            data: {user: dataUser},
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

