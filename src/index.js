const express = require('express'); // express framework
const {PORT} = require('./config/configs')
const bodyParser = require('body-parser')


const app = express(); // aplicando ela ao APP

// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//rotas
var produto = require('./routes/produtos');
app.use('/produtos', produto);
var home = require('./routes/home');
app.use('/', home);

//inicica controle do fontend
app.set('view engine', 'pug');

app.listen(PORT || 3000, console.log(`Server listen on port ${PORT}`));