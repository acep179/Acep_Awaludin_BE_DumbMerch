const { transaction } = require("../../models");

exports.addTransaction = async (req, res) => {
    try {
        await transaction.create(req.body);

        res.send({
            status: "success",
            data: {transaction: req.body},
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};
