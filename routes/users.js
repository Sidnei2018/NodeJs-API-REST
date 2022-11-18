const userRoutes = (app, fs) => {

    // variáveis
    const dataPath = './data/users.json';

    // métodos auxiliares
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // READ
    app.get('/users', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    // CREATE
    app.post('/users', (req, res) => {

        readFile(data => {

                //Não ideal para uso em produção!
                const newUserId = Date.now().toString();

                // adiciona novo usuário
                data[newUserId.toString()] = req.body;

                writeFile(JSON.stringify(data, null, 2), () => {
                    res.status(200).send('new user added');
                });
            },
            true);
    });


    // UPDATE
    app.put('/users/:id', (req, res) => {

        readFile(data => {

                // adiciona novo usuário
                const userId = req.params["id"];
                data[userId] = req.body;

                writeFile(JSON.stringify(data, null, 2), () => {
                    res.status(200).send(`users id:${userId} updated`);
                });
            },
            true);
    });


    // DELETE
    app.delete('/users/:id', (req, res) => {

        readFile(data => {

                // deleta um usuário
                const userId = req.params["id"];
                delete data[userId];

                writeFile(JSON.stringify(data, null, 2), () => {
                    res.status(200).send(`users id:${userId} removed`);
                });
            },
            true);
    });
};

module.exports = userRoutes;