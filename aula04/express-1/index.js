import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Bem vindo!'))

app.listen(3033, () => console.log('Executando servidor web...'))
