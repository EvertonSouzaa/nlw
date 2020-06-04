const express = require("express")
const server = express()


//configurar pasta pública


//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


server.use(express.static("public"))
//configurar caminhos na minha aplicação
//página inicial
//req: Requisição
//res: Resposta
server.get("/", (req, res) => {
   return res.render("index.html", {title: "Um título"})
})


server.get("/create-point", (req, res) => {
  return  res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return  res.render("search-results.html")
  })
  




// ligar o servidor
server.listen(3000)