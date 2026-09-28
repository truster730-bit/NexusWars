# Nexus Wars — Game Server

This folder contains the prototype multiplayer server.

## Planned structure

```text
server/
├── package.json
├── server.js
├── src/
│   ├── config.js
│   ├── gameState.js
│   ├── network.js
│   └── player.js
├── README.md
└── .env.example
```

## Initial server concept

The server should handle:

- player connections
- player position synchronization
- simple player state updates
- room / lobby tracking
- combat validation
- base state sync for early prototypes

## MVP targets

- connect multiple clients
- keep a minimal world state
- broadcast player positions
- allow a simple attack event to be validated by the server
- support basic room creation / joining

## Tools

- Node.js
- Socket.IO
- optional `express` for health check endpoints and basic admin tools

