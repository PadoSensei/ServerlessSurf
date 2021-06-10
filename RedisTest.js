const redis = require('redis');
require("dotenv").config();
const { scrapeData } = require('./src/cache_utils')

// Repopulate Redis Server

// For Emergency manipulation of Redis Cloud

const test = redis.createClient({
  host: process.env.REDIS_HOSTNAME,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
});

test.on('connect', ( )=> {
  console.log('connected')
})

scrapeData(test)
test.get('Pontal', function(err, reply){
 if(reply){
   console.log('Run it')
 }
})

test.keys('*', (err, reply) => {
  if (err) return console.log(err);
  for(let i = 0, len = reply.length; i < len; i++){
    console.log(reply[i])
  }
})
