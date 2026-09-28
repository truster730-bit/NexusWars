const { Server } = require('socket.io');

const PORT = process.env.PORT || 3000;
const io = new Server(PORT, {
  cors: {
    origin: '*'
  }
});

const players = new Map();
const rooms = new Map();

function createPlayerState(id, username) {
  return {
    id,
    username,
    x: 0,
    y: 0,
    z: 0,
    health: 100,
    isAlive: true,
    roomId: 'lobby'
  };
}

function getOrCreateRoom(roomId) {
  if (!rooms.has(roomId)) {
    rooms.set(roomId, new Set());
  }
  return rooms.get(roomId);
}

io.on('connection', (socket) => {
  console.log('Player connected:', socket.id);

  socket.on('join-game', ({ username, roomId = 'lobby' }) => {
    const player = createPlayerState(socket.id, username || 'Player');
    player.roomId = roomId;
    players.set(socket.id, player);

    const room = getOrCreateRoom(roomId);
    room.add(socket.id);
    socket.join(roomId);

    socket.emit('welcome', {
      id: socket.id,
      roomId,
      player
    });

    io.to(roomId).emit('player-joined', {
      id: socket.id,
      username: player.username,
      roomId
    });
  });

  socket.on('player-move', ({ x, y, z }) => {
    const player = players.get(socket.id);
    if (!player) return;

    player.x = x;
    player.y = y;
    player.z = z;

    socket.to(player.roomId).emit('player-position', {
      id: socket.id,
      x,
      y,
      z
    });
  });

  socket.on('attack', ({ targetId }) => {
    const attacker = players.get(socket.id);
    if (!attacker) return;

    const target = players.get(targetId);
    if (!target || target.roomId !== attacker.roomId) return;

    const damage = 10;
    target.health = Math.max(0, target.health - damage);

    io.to(target.roomId).emit('damage', {
      targetId,
      attackerId: socket.id,
      damage,
      remainingHealth: target.health
    });
  });

  socket.on('disconnect', () => {
    const player = players.get(socket.id);
    if (!player) return;

    const room = rooms.get(player.roomId);
    if (room) {
      room.delete(socket.id);
    }

    players.delete(socket.id);

    io.to(player.roomId).emit('player-left', {
      id: socket.id,
      roomId: player.roomId
    });

    console.log('Player disconnected:', socket.id);
  });
});

console.log(`Nexus Wars server started on port ${PORT}`);
