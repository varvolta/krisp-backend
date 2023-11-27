import { Server } from 'socket.io'

const createIo = (server) => {
    const io = new Server(server)

    io.on('connection', (socket) => {
        console.log('user connected', socket.id)

        socket.on('disconnect', () => {
            console.log('user disconnected', socket.id)
        })
    })

    return io
}

export default createIo