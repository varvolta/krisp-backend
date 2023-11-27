import { Server } from 'socket.io'

class SocketService {
    static instance
    io

    constructor(server) {
        if (SocketService.instance) throw new Error('Only one instance is allowed')

        const io = new Server(server)

        io.on('connection', (socket) => {
            console.log('user connected', socket.id)

            socket.on('disconnect', () => {
                console.log('user disconnected', socket.id)
            })
        })

        this.io = io
        SocketService.instance = this
    }
}

export default SocketService