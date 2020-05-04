const fetch = require('node-fetch');
const cheerio = require('cheerio');

const {URL} = require('../config/configs');
const perPage = 50;

const getItens =  async(search,limit) => {
    console.log(URL)

    let lista = []
    let produtos = await requisicao(search,limit,0)
    if(!produtos.messsage){
        produtos.map(function(produto){
            lista.push(produto)
        })
        if(lista.length>0){
            let temProduto = true;
            let contador = 1
            do{
                let next = produtos.length>perPage?(perPage*contador)+1:produtos.length+1
                produtos = await requisicao(search,limit,next)
                if(produtos.length>0){
                    if(lista.length>=limit){
                        temProduto= false
                    }
                    contador++
                }else{
                    temProduto= false
                }
            }while(temProduto)
            return lista
        }else{
            return 'Não existem items associados a essa busca'
        }
    }else{
        return 'Não existem items associados a essa busca'
    }
    
}

const requisicao = async(search,limit,next) =>{
    return new Promise((resolve, reject) => {
        let urlFinal = URL+search+(next>0?"_Desde_" + next:'')
        console.log("Crawling produtos... na url " + urlFinal)
        fetch(urlFinal)
        .then(res => res.text())
        .then(async html => {
            let data = await captura(html,limit)
            resolve(data)
        })
        .catch(
            err => {
                console.log(err)
                return reject({ messsage: 'Não existem produtos nesta página.' })
            }
        );
    })
}


const captura = (html,limit)=>{
    try {
        const $ = cheerio.load(html);
        const produtos = $('.results-item');
        let data = []
        let count = 0
        produtos.each(function() {
    
            let name = $(this).find('.main-title').text().trim();
            let link = $(this).find('.item__js-link').attr('href').trim();
            let priceFr = $(this).find('.price__fraction').text().trim();
            let priceDe = $(this).find('.price__decimals').text().trim();
            let price = priceFr.replace('.', '')+'.'+ (priceDe.length>0?priceDe:'00')
            let coinSymbol = $(this).find('.price__symbol').text().trim();
            let store = $(this).find('.item__brand-title-tos').text().replace('por','').trim();
            let state = formatState($(this).find('.stack_column_item.status'));
    
            let produto = {
                name,
                link,
                price,
                coinSymbol,
                store,
                state
            }
            data.push(produto)
            count++
            if(count >= limit){
                return false;
            }
        });
        return data
    } catch (error) {
        console.log(error)
    }
}

const formatState = (state)=>{
    state = state.find('.item__condition').text().trim()
    if(state === undefined || state == null || state == ''){
        return "Null"
    }else{
        if( state.toLowerCase().includes("novo") || state.toLowerCase().includes("usado") ){
            if(state.toLowerCase().includes("novo")){
                return "Novo"
            }else{
                return "Usado"
            }
        }else{
            return "Null"
        }
    }
}

module.exports = getItens