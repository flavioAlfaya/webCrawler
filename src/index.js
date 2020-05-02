const express = require('express'); // express framework
const {PORT} = require('./config/configs')
const bodyParser = require('body-parser')


const app = express(); // aplicando ela ao APP

// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//rotas
var produto = require('./routes/produto');
app.use('/produto', produto);


app.listen(PORT || 3000, console.log(`Server listen on port ${PORT}`));