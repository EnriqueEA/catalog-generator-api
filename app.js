const http = require('http');
const pdf = require('html-pdf');
const fs = require('fs');

const PORT = process.env.PORT || 5000;
console.clear();
const server = http.createServer(async (req, res) => {
  
  const { method, url } = req;
  
  switch ( url ) {
    case "/":
      if (method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>${ url }</h1>`);
        break;
      }
      
      res.statusCode = 404;
      res.end('<h1>Ruta no existente!</h1>');
      break;
    case "/generate-pdf":
      if (method === 'POST') {

        const buffers = [];

        for await (const chunk of req) {
          buffers.push(chunk);
        }

        const bodyHtml = Buffer.concat(buffers).toString();

        const html = fs.readFileSync('./templates/1.html', 'utf8');

        console.log(html);
        
        pdf.create(html, { format: 'A4', paginationOffset: 1 }).toFile('./pdf/catalogo.pdf', (err, res) => {
          if (err) {
            console.log(err);
          } else {
            console.log(res);
          }
        });
        res.writeHead(200, { 'Content-Type': 'application/pdf' });
        res.end();
        break;
      }
      
      res.statusCode = 404;
      res.end('<h1>Ruta no existente!</h1>');
      break;
    default:
      break;
  }
  
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});