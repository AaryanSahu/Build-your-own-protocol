import { createConnection } from "node:net";
import readline from "node:readline";  // for interactive input

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const client = createConnection({ port: 9001, host: 'localhost' }, () => {
    console.log(' Connected to server');
    rl.setPrompt('✏️ Enter message (type "exit" to quit): ');
    rl.prompt();
});

client.on('data', (data) => {
    console.log(` Server says: ${data.toString().trim()}`);
    rl.prompt();
});

client.on('end', () => {
    console.log(' Disconnected from server');
    rl.close();
});

client.on('error', (err) => {
    console.error(' Connection error:', err.message);
    rl.close();
});

// Handle user input and send to server
rl.on('line', (line) => {
    if (line.trim().toLowerCase() === 'exit') {
        client.end();
    } else {
        client.write(line.trim());
    }
});
