# Nexus Wars

Nexus Wars est un jeu de type MMORPG d'exploration 3D en monde ouvert, centré sur le combat, la récolte, la construction de bases et la personnalisation d'équipement. 

Le projet vise à créer une expérience jouable sur mobile en premier, puis à étendre son support sur PC et consoles. La priorité est de livrer un MVP fonctionnel et jouable avant d'ajouter des fonctionnalités plus ambitieuses.

## Vision du jeu

- Grand monde ouvert avec zones de combat, ressources et structures à contrôler.
- Système de combat 3D orienté action.
- Construction de bases et placement de pièges.
- Personnalisation du personnage et des équipements.
- PvE et PvP en ligne.
- Multijoueur avec sessions de 4 à 8 joueurs au départ, évolutif vers plus.
- Expérience mobile d'abord, ensuite adaptation PC/console.

## Objectif du projet

Créer un MVP jouable qui démontre les mécanismes essentiels :

- exploration 3D
- combat satisfaisant
- construction de base
- personnalisation
- réseau multijoueur de base

## Stack recommandée

- Moteur : Godot 4.x
- Langage : GDScript
- Serveur : Node.js + WebSocket / Socket.IO
- Données : JSON léger pour les prototypes, puis base de données pour la production
- Plateforme cible initiale : mobile Android / iOS
- Extension : PC et console

## Structure du dépôt

- `docs/` : documents de conception et planification
- `project/` : projet Godot à venir
- `server/` : code serveur multijoueur à venir
- `art/` : référence visuelle, concept art et assets
- `tools/` : scripts d'aide, utilitaires et génération de contenu

## Roadmap courte

1. Prototype local de mouvement et de combat
2. Déploiement d'un serveur multijoueur basique
3. Synchronisation des joueurs et des états de combat
4. Système de base et de pièges
5. Personnalisation et progression
6. Optimisation pour mobile
7. Test, équilibrage et extension du monde

## Points importants

Ce projet est ambitieux. Pour rester réaliste, la version initiale ne doit pas viser immédiatement des centaines de joueurs en simultané. Le bon point de départ est un prototype jouable avec :

- 1 zone de test
- 1 type d'ennemi
- 1 type de base
- 1 système de combat
- 1 système de progression
- 1 serveur de test

## Prochaine étape

La prochaine étape consiste à préparer un premier document de conception détaillé et une roadmap de développement clé en main.

Ce dépôt servira de base de travail pour les premiers prototypes de gameplay, puis pour l'évolution du projet.

## Liens utiles

- `docs/GDD.md` : conception du jeu
- `docs/roadmap.md` : plan de développement
- `docs/architecture.md` : architecture technique

