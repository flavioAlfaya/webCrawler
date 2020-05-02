
# WebCrawler

WebCrawler feito em **Node.js**  para capturar dados do Mercado Livre.

## Pacotes usados

 - [Node.js](https://nodejs.org/en/)
 - [Express.js](https://expressjs.com/)
 - [Cheerio.js](https://www.npmjs.com/package/cheerio)
 - [Dotenv](https://www.npmjs.com/package/dotenv)
 - [Node-fetch](https://www.npmjs.com/package/node-fetch)

## Instalação

Basta Rodar:
> npm install

## Rodar o backEnd

Basta  rodar:
> node srs/index.js


## Requisição ao BackEnd

> POST /produtos

Enviar um JSON na seguinte estrutura:

	{
	  "search": string,
	  "limit": int
	}
 
Retorno:

	[{
	  "name": string,
	  "link": string,
	  "price": string,
	  "coinSymbol": string,
	  "store": string,
	  "state": string,
	}]

## Ferramenta usada para fazer a requisição ao BackEnd

Foi usado para desenvolvimento a ferramenta **Postman**
