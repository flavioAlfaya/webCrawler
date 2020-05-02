const getItens = require("../library/crawler");

// inicia o processo de captura dos dados dos produtos
const pegarProdutos = async (req, res) => {
    const { search, limit } = req.body;
    try {
        const data = await getItens(search,limit);
        res.send(data)
    } catch (err) {
        return res.status(500).send(err);
    }
};

module.exports = pegarProdutos ;