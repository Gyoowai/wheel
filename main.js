var express=require('express') //เรียกใช้ module 'express'
var server=express() //ใช้งาน express เป็น server
server.listen(2000)
var readBody = express.urlencoded({extended: false})
var ejs=require('ejs')
server.engine('html',ejs.renderFile)
server.use( express.static('public'))
//var mysql=require(mysql)
//var source={host: localhost, database: , user: , password: }
//var pool=mysql.createPool(source)



server.get('/',showHome)
server.use( showError )

function showHome(req,res){
    res.render('index.html')
}
function showError(req,res,next){
    res.render('error.html')
}