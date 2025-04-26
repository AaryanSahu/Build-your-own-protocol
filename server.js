import { createServer } from "node:net";

let clientCounter = 0; // To assign unique IDs

const server = createServer((socket) => {
    const clientId = ++clientCounter;
    console.log(`🟢 Client ${clientId} connected`);

    // Greet the client
    socket.write(`Welcome Client ${clientId} 🎉\n`);

    socket.on('data', (data) => {
        const message = data.toString().trim();
        console.log(`Received from Client ${clientId}: ${message}`);

        // Echo the message back with a prefix
        socket.write(`Server Echo to Client ${clientId}: ${message}\n`);
    });

    socket.on('end', () => {
        console.log(`Client ${clientId} disconnected`);
    });

    socket.on('error', (err) => {
        console.error(`Error with Client ${clientId}:`, err.message);
    });
});

server.listen(9001, () => {
    console.log('Server listening on port 9001');
});
