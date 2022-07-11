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
