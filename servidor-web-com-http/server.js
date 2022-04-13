console.log("SERVIDOR WEB - SEM FRAMEWORKS");

// importar o módulo de rede (http)
const http = require('http'); // CommonJS

// criar a instância do servidor web
const server = http.createServer(function(req, res) {
  console.log(`Servidor respondendo...`);
  const userAgent = req.headers["user-agent"];
  res.statusCode = 200;

  if (userAgent.match(/Chrome/)) {
    res.end("<h1>Aqui eh o Google Chrome!</h1>");  
  } else {
    res.end("<h1>Aqui eh outro browser!</h1>");  
  }
});

// escutando o hostname e a porta - 127.0.0.1 - localhost
server.listen(5000, '127.0.0.1', function() {
  console.log(`Server running at http://127.0.0.1:5000`);
});
