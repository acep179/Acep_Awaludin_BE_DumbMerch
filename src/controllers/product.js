const { user, product } = require("../../models");

exports.addProduct = async (req, res) => {
    try {

        const {name, desc, price, image, qty} = req.body

        await product.create(req.body);

        const dataUser = await user.findAll({
            where:{
                id:req.body.idUser,
            },
            attributes: {
                exclude: ["createdAt", "updatedAt", "password"],
            },
        })

        const data = {
            name,
            desc,
            price,
            image,
            qty,
            dataUser
        }

        res.send({
            status: "success",
            data: {product: data},
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};


exports.getProducts = async (req, res) => {
    try {

        const dataProduct = await product.findAll({
            attributes: {
                exclude: ["createdAt","updatedAt","idUser"]
            }
        });

        res.send({
            status: "success",
            data: {products: dataProduct},
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.getProduct = async (req, res) => {
    try {

        const {id} = req.params

        const dataProduct = await product.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ["createdAt","updatedAt","idUser"]
            }
        });

        res.send({
            status: "success",
            data: {product: dataProduct},
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.updateProduct = async (req, res) => {
    try {

        const {id} = req.params

        await product.update(req.body,{
            where: {
                id
            }
        });

        res.send({
            status: "success",
            data: {product: req.body},
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.deleteProduct = async (req, res) => {
    try {

        const {id} = req.params

        await product.destroy({
            where: {
                id
            }
        });

        res.send({
            status: "success",
            data: {id},
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};
