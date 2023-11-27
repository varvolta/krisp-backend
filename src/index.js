import { createServer } from 'http'
import serverConfig from './configs/server.config.js'
import SocketService from './services/socket.service.js'
import app from './services/express.service.js'
import connectDatabase from './services/database.service.js'

try {
    await connectDatabase()
    console.log('Database connection established')

    const server = createServer(app)
    new SocketService(server)

    server.listen(serverConfig.port, () => {
        console.log('Listening http and socket on *:3000')
    })
} catch (error) {
    console.error(error)
}