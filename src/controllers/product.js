const { user, product, category, category_product } = require("../../models");
``
exports.addProduct = async (req, res) => {
    try {

        const data = req.body

        let newProduct = await product.create({
            ...data,
            image: req.file.filename,
            idUser: req.user.id 
        })
    
        newProduct = JSON.parse(JSON.stringify(newProduct))
    
        newProduct = {
            ...newProduct,
            image: process.env.PATH_FILE + newProduct.image
        }
    
        res.send({
            status: "success",
            data: {newProduct}
        })
    
    
    
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "Server Error",
        });
    }
};


exports.getProducts = async (req, res) => {
    try {

        const dataProduct = await product.findAll({
            include: [
                {
                    model: user,
                    as: "user",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password"],
                    },
                },
                {
                    model: category,
                    as: "categories",
                    through: {
                        model: category_product,
                        as: "bridge",
                        attributes: [],
                    },
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                },
            ],
            attributes: {
                exclude: ["createdAt","updatedAt","idUser"]
            },
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
            include: [
                {
                    model: user,
                    as: "user",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password"],
                    },
                },
                {
                    model: category,
                    as: "categories",
                    through: {
                        model: productCategory,
                        as: "bridge",
                        attributes: [],
                    },
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                },
            ],
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
