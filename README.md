# Portfolio Backend Créatif - Version Conteneurisée

Un portfolio interactif et moderne pour développeur backend, avec une interface créative utilisant des animations et des éléments visuels engageants.

## 🚀 Démarrage Rapide

### Prérequis
- Docker et Docker Compose installés
- Node.js 20+ (pour le développement local)
- pnpm (gestionnaire de paquets)

### Lancement avec Docker Compose (Recommandé)

\`\`\`bash
# Construire et lancer l'application
npm run docker:compose:build

# Ou simplement lancer si déjà construit
npm run docker:compose

# Voir les logs
npm run docker:logs

# Arrêter l'application
npm run docker:compose:down
\`\`\`

L'application sera accessible sur :
- **Application principale** : http://localhost:3000
- **Avec Nginx** : http://localhost (port 80)

### Lancement avec Docker uniquement

\`\`\`bash
# Construire l'image
npm run docker:build

# Lancer le conteneur
npm run docker:run

# Arrêter et supprimer le conteneur
npm run docker:stop
\`\`\`

### Développement Local

\`\`\`bash
# Installer les dépendances
pnpm install

# Lancer en mode développement
pnpm dev
\`\`\`

## 🏗️ Architecture

### Structure Docker
- **Multi-stage build** : Optimisation de la taille de l'image finale
- **Node.js 20 Alpine** : Image légère et sécurisée
- **pnpm** : Gestionnaire de paquets rapide
- **Utilisateur non-root** : Sécurité renforcée

### Services
- **portfolio** : Application Next.js principale
- **nginx** : Reverse proxy avec optimisations (optionnel)

### Fonctionnalités
- ✅ Health checks automatiques
- ✅ Restart automatique en cas d'erreur
- ✅ Optimisations de performance (gzip, cache)
- ✅ Headers de sécurité
- ✅ Logs structurés

## 🎨 Fonctionnalités du Portfolio

- **Interface créative** avec animations fluides
- **Sections interactives** : compétences, projets, expérience
- **Design responsive** adapté à tous les écrans
- **Optimisations de performance** pour un chargement rapide
- **Accessibilité** respectant les standards WCAG

## 🔧 Scripts Disponibles

\`\`\`bash
# Développement
pnpm dev              # Mode développement
pnpm build            # Construction pour production
pnpm start            # Lancement en production

# Docker - Application seule
npm run docker:build  # Construire l'image
npm run docker:run    # Lancer le conteneur
npm run docker:stop   # Arrêter le conteneur

# Docker Compose - Stack complète
npm run docker:compose:build  # Construire et lancer
npm run docker:compose        # Lancer les services
npm run docker:compose:down   # Arrêter les services
npm run docker:logs           # Voir les logs

# Maintenance
npm run docker:clean  # Nettoyer les images inutilisées
\`\`\`

## 🌐 Configuration Nginx

Le reverse proxy Nginx inclut :
- **Compression gzip** pour tous les assets
- **Cache optimisé** pour les fichiers statiques
- **Headers de sécurité** (XSS, CSRF, etc.)
- **Health checks** intégrés

## 📊 Monitoring

- **Health checks** : `/health` et vérifications Docker
- **Logs** : Accessibles via `docker-compose logs`
- **Métriques** : Prêt pour intégration Prometheus/Grafana

## 🚀 Déploiement

### Production
1. Cloner le repository
2. Configurer les variables d'environnement si nécessaire
3. Lancer avec `docker-compose up -d`
4. Configurer un reverse proxy (Traefik, Nginx) pour HTTPS

### Variables d'environnement
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`
- `PORT=3000`
- `HOSTNAME=0.0.0.0`

---

**Développé avec ❤️ par Backend Alchemist**
