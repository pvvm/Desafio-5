const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")
const methodOverride = require('method-override')

const server = express()

server.use(express.urlencoded({extended: true}))
server.use('/static', express.static(__dirname + "/../public"))
server.use(methodOverride('_method'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("src/app/views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function(){
    console.log("Server is running")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});