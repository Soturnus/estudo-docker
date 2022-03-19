const http = require('http')
const port = 3000

const server = http.createServer((_, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write(`Hello Node from Soturnera\nDocker on!!!`)
    res.end()
})

server.listen(port, () => console.log(`Node server running on port: ${port}`))