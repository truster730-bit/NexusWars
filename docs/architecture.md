# Architecture technique

## Vue d'ensemble

Le projet repose sur deux couches principales :

- client : gameplay et rendu 3D
- serveur : synchronisation, logique du monde, sessions multijoueurs

## Côté client

### Technologies
- Godot 4.x
- GDScript
- système de scènes et de nodes
- moteur de rendu 3D

### Responsabilités
- déplacement du personnage
- combat et animations
- interactions avec le monde
- interface joueur
- affichage de la carte, des ressources et des structures

## Côté serveur

### Technologies recommandées
- Node.js
- Socket.IO ou WebSocket dédié
- logique de synchronisation des joueurs
- état central du monde

### Responsabilités
- gestion des joueurs connectés
- validation des actions
- synchro de position et d'états
- combat centralisé
- stockage de l'état des bases et des ressources

## Structure recommandée

```text
NexusWars/
├── README.md
├── docs/
│   ├── GDD.md
│   ├── roadmap.md
│   └── architecture.md
├── project/
│   └── README.md
├── server/
│   └── README.md
├── art/
│   └── README.md
├── tools/
│   └── README.md
└── .gitignore
```

## Recommandation de conception

- séparer le gameplay d'un client de la logique réseau
- empêcher le client de décider des résultats critiques du combat
- garder la logique de base sous le contrôle du serveur
- faire des prototypes légers avant les systèmes complexes

## Étape de base

Avant d'implémenter le multi-joueur complet, il faut d'abord valider :

- un personnage se déplace
- combat / dégâts fonctionnent
- ressources ont un état stable
- bases peuvent être construites et détruites
- la simulation est cohérente entre client et serveur

