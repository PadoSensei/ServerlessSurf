const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors')
const {getCorals, getHavaizinho, getPontal, getJeribucacu, getTirica, getItacarezinho, checkCache} = require('./middleware')

const app = express();
app.use(cors());
app.use(checkCache())

const router = express.Router();
const BASE_ROUTE = '/.netlify/functions/index'

router.get('/pontal', getPontal,() => {
});

router.get('/corals', getCorals,() => { 
});

router.get('/havaizinho', getHavaizinho,() => {
});

router.get('/itacarezinho', getItacarezinho,() => {
});

router.get('/jeribucacu', getJeribucacu,() => {
});

router.get('/tiririca', getTirica,() => {
});

router.get('/test', (req, res) => {
  res.json({
    "hello": "world"
  })
})

app.use(BASE_ROUTE, router);


module.exports.handler = serverless(app);
