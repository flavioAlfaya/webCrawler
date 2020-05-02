require('dotenv').config() // carregar configurações do .env

const { PORT: PORT } = process.env; // trazer o valor do PORT do env para uma constante
const { URL: URL } = process.env; // trazer o valor do PORT do env para uma constante


module.exports = { PORT,URL };