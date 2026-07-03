# RetroBonCoin

Projet réalisé dans le cadre du module Architecture Applicative (M1SI).

## Présentation

RetroBonCoin est une plateforme d'annonces dédiée à la vente de jeux vidéo et de consoles.

L'application permet :

- Consulter des annonces
- Consulter les détails d'une annonce
- Gérer des utilisateurs
- Ajouter des annonces en favoris
- Simuler une authentification (connexion / inscription)
- Filtrer les annonces selon différents critères

## Architecture

Le backend suit une architecture N-Tiers :

```text
Controller
    ↓
Service
    ↓
Repository (Interface)
    ↓
Repository InMemory
    ↓
Data Mock
```

### Layers

#### Controllers

Responsables des requêtes HTTP et des réponses JSON.

Exemples :

- AnnouncementController
- UserController
- FavoriteController
- AuthController

#### Services

Contiennent la logique métier.

Exemples :

- Recherche d'annonces
- Filtrage
- Gestion des favoris
- Authentification

#### Repositories

Responsables de l'accès aux données.

Chaque service dépend d'une interface et non d'une implémentation concrète.

#### Data

Données mockées utilisées durant le développement.

## Structure du projet

```text
backend/
└── src/
    ├── controllers/
    ├── services/
    ├── repositories/
    │   ├── interfaces/
    │   └── memory/
    ├── models/
    ├── data/
    ├── routes/
    ├── tests/
    ├── app.ts
    └── server.ts
```

## Technologies

- Node.js
- Express
- TypeScript

## Routes codées

### Annonces :

```http
GET /announcements
GET /announcements/:id
```

Filtres :

```http
GET /announcements?platform=PS5
GET /announcements?type=Console
GET /announcements?maxPrice=100
```

### Utilisateurs :

```http
GET /users
GET /users/:id
```

### Favoris :

```http
GET /favorites
POST /favorites
DELETE /favorites/:id
```

### Authentification :

```http
POST /auth/login
POST /auth/register
```

## Installation

Installation des dépendances :

```bash
npm install
```

Lancement du projet :

```bash
npm run dev
```

Le serveur démarre sur :

```text
http://localhost:3000
```

## Données utilisées

Le projet utilise actuellement des données en mémoire :

- annonces
- utilisateurs
- favoris
