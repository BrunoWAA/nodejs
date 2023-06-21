import http from 'http'

http.createServer((req, res) => {
    res.end('Olá Mundo')
}).listen(3033)