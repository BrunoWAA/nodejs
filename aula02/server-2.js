import http from 'http'
import currentDate from './currentDate.js'

http.createServer((req, res) => {
    res.writeHead(200 , { 'Content-type': 'text/html; charset=utf-8' })    
    const total = (25 + 36) / 2
    const frutas = ['banana', 'laranja', 'uva', 'melão']
    let texto = ''
    
    frutas.map(f => {
      texto += `<p>${f} ${total}</p>`
    })
  
    res.end(`<p>Ola mundo - aula 02! ${currentDate()}</p><hr/> ${texto}`)
}).listen(3033)