const { user, profile, chat } = require("../../models")

const socketIo = (io) => {
    io.on('connection', (socket) => {
        console.log('client connect:', socket.id);

        socket.on("load admin contact", async () => {
            try {
                const adminContact = await user.findOne({
                    where: {
                        status: "admin"
                    },
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password"],
                    },
                });

                // emit event to send admin data on event “admin contact”
                socket.emit("admin contact", adminContact)
            } catch (err) {
                console.log(err)
            }
        })


        socket.on("load customer contacts", async () => {
            try {
                let customerContacts = await user.findAll({
                    include: [
                        {
                            model: profile,
                            as: "profile",
                            attributes: {
                                exclude: ["createdAt", "updatedAt"],
                            },
                        },
                        {
                            model: chat,
                            as: "recipientMessage",
                            attributes: {
                                exclude: ["createdAt", "updatedAt"],
                            },
                        },
                        {
                            model: chat,
                            as: "senderMessage",
                            attributes: {
                                exclude: ["createdAt", "updatedAt"],
                            },
                        },
                    ],
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password"],
                    },
                });

                customerContacts = JSON.parse(JSON.stringify(customerContacts))

                customerContacts = customerContacts.map((item) => {
                    return {
                        ...item,
                        image: item.image ? process.env.PATH_FILE + item.image : null
                    }
                })

                // emit event to send admin data on event “admin contact”
                socket.emit("customer contacts", customerContacts)

            } catch (err) {
                console.log(err)
            }
        })


        socket.on('disconnect', () => {
            console.log('client disconnect');
        })
    })
}

module.exports = socketIo