# Build Your Own TCP Protocol

This project implements a simple **TCP Client-Server** architecture using **Node.js**.  
It allows multiple clients to connect to a TCP server, exchange messages, and gracefully disconnect.

---

## 📚 Project Structure

```
protocol/
├── client.js      # TCP client that connects and sends messages
├── server.js      # TCP server that handles multiple clients
├── package.json   # Project metadata and dependencies
├── pnpm-lock.yaml # Lock file for dependencies (auto-generated)
└── node_modules/  # Installed dependencies (ignored by Git)
```

---

## 🚀 How It Works

- **Server** (`server.js`) listens on TCP port `9001`.
- Each **client** (`client.js`) connects to the server.
- Server assigns a **unique client ID** for each connection.
- Clients can **send multiple messages** interactively.
- Server **echoes** back each message to the client.
- Clients can **exit** by typing `exit`.

---

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/AaryanSahu/Build-your-own-protocol.git
cd Build-your-own-protocol
```

### 2. Install dependencies

```bash
pnpm install
```

or

```bash
npm install
```

_(Project only uses built-in Node.js libraries, so this step is optional unless you want to add more features.)_

---

## 🛠️ How to Run

### 1. Start the TCP Server

```bash
pnpm start
```
or

```bash
node server.js
```

You should see:

```bash
🚀 Server listening on port 9001
```

---

### 2. Connect a TCP Client

In a **separate terminal**:

```bash
node client.js
```

You should see:

```bash
✅ Connected to server
📥 Server says: Welcome Client 1 🎉
✏️ Enter message (type "exit" to quit):
```

✅ Now you can type messages and communicate interactively!

---

## 🧠 Features

- Support for **multiple clients** simultaneously.
- **Unique IDs** for each connected client.
- **Server Echo**: server responds back with your sent message.
- **Interactive CLI** for sending dynamic messages.
- **Graceful disconnection** by typing `exit`.
- **Error handling** for failed connections.

---

## 🎯 Future Enhancements

- [ ] Broadcast messages to **all clients** (group chat style).
- [ ] Add **heartbeat pings** to detect dead connections.
- [ ] Support **JSON-based** structured messaging.
- [ ] Create a **GUI** interface for clients (using Electron.js).
- [ ] Add **unit tests** for socket behavior.

---

## 🛡️ Requirements

- Node.js >= 18.x
- pnpm (preferred) or npm

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

