
# WebCrawler

WebCrawler feito em **Node.js**  para capturar dados do Mercado Livre.

## Pacotes usados

 - [Node.js](https://nodejs.org/en/) 
 - [Docker-cli](https://docs.docker.com/)
 - [Express.js](https://expressjs.com/)
 - [Cheerio.js](https://www.npmjs.com/package/cheerio)
 - [Dotenv](https://www.npmjs.com/package/dotenv)
 - [Node-fetch](https://www.npmjs.com/package/node-fetch)

## Instalação

Ter Docker-cli e Nodejs instalado na maquina 

Rodar:
> npm install

## Configurar as variaveis de ambiente

As variaveis se encontram do docker-compose na área de **environment**

## Rodar o backEnd

Basta  rodar:
> docker-compose up


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

# FrontEnd

Foi criado uma branch Frontend que contempla uma tela basica de pesquisa mostrando a resposta tirando a necessidade do postman.
