// importa outras rotas
const userRoutes = require('./users');

const appRouter = (app, fs) => {

    // rota padrão
    app.get('/', (req, res) => {
        res.send('Analista de testes - Teste API REST com NodeJs!');
    });

    // // outras rotas
    userRoutes(app, fs);

};

module.exports = appRouter;