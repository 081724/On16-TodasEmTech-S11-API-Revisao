const app = require('./src/app')

const PORT =1980;

app.listen(PORT, () => {
    console.log(`Servidor tá rodando na porta ${PORT}`);
    })
