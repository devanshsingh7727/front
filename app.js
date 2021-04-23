var express =require('express')
var app=express()
var dotenv=require('dotenv')
app.use(express.json())

dotenv.config({path:'./.env'});
require('./Database/connection')
app.use(require('./Router/Route'))
app.listen(4000)