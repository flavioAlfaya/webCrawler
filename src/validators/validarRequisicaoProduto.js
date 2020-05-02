const validarRequisicaoProduto = fn => async (req, res, next) => {
    const {search,limit} = req.body
    let error = {
        status: false
    }
    if(!search || search.length < 2){
        error.status = true
        error.search = "Poucos caracteres para a busca."
    }
    if(limit){
        if(limit<=0){
            error.status = true
            error.limit = "Limite com valor igual a zero ou inferior."
        }
    }
    if(error.status){
        return res.status(400).send({ error });
    }
    return next();

}
module.exports = validarRequisicaoProduto
