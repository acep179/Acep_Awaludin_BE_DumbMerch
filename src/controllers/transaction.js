const { transaction, product, user } = require("../../models");

exports.addTransaction = async (req, res) => {
    try {
        let data = req.body;

        data = {
            ...data,
            idBuyer: req.user.id,
        };

        await transaction.create(data);

        res.send({
            status: "success",
            message: "Add transaction finished",
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.getTransactions = async (req, res) => {
    try {

        let data = await transaction.findAll({
            attributes: {
                exclude: [ 'updatedAt', 'idBuyer', 'idSeller', 'idProduct', 'status']
            },
            include: [
                {
                    model: product,
                    as: 'product',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'idUser', 'qty', 'price']
                    }
                },
                {
                    model: user,
                    as: 'buyer',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'password', 'status']
                    }
                },
                {
                    model: user,
                    as: 'seller',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'password', 'status']
                    }
                },
            ]
        });

        data = JSON.parse(JSON.stringify(data));

        data = data.map((item) => {
            return {
                ...item,
                product: {
                    ...item.product,
                    image: process.env.PATH_FILE + item.product.image,
                },
            };
        });

        res.send({
            status: "success",
            data: { transaction: data },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};
