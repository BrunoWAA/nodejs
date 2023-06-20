import http from 'http'

createServer((req, res) => {
    res.end('Olá Mundo')
}).listen(3033)