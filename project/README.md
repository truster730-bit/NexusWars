# Nexus Wars — Godot Project

This folder will contain the Godot 4.x project for the playable client.

## Planned structure

```text
project/
├── project.godot
├── scenes/
│   ├── Main.tscn
│   ├── Player.tscn
│   └── World.tscn
├── scripts/
│   ├── CharacterController.gd
│   ├── Combat.gd
│   ├── BaseBuilder.gd
│   ├── NetworkClient.gd
│   └── GameManager.gd
├── assets/
│   ├── models/
│   ├── textures/
│   └── ui/
├── resources/
│   └── player_stats.tres
└── README.md
```

## First milestones

1. Create `project.godot` and the main scene.
2. Add a simple 3D player controller.
3. Add movement, sprint, camera follow, and collision.
4. Add simple combat and hit detection.
5. Add resource nodes and collection logic.
6. Add a prototype base-building system.
7. Hook the client to the multiplayer server.

## Recommended Godot setup

- Godot 4.x
- GDScript
- 3D project with a simple test world
- Use nodes for `CharacterBody3D`, `Node3D`, `Camera3D`, `MeshInstance3D`, and `Area3D`

## MVP goals

- walk and run in a 3D world
- basic attack / hit detection
- resource pickup
- place a simple structure
- connect to a test multiplayer server

