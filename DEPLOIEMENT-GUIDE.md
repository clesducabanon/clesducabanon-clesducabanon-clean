# 🚀 Guide de Déploiement : GitHub → Vercel

## ✅ Fichiers préparés pour le déploiement

- ✅ `.gitignore` (fichiers à ignorer)
- ✅ `README.md` (documentation)
- ✅ `vercel.json` (configuration Vercel)
- ✅ `package.json` (mis à jour avec scripts)

---

## 📝 ÉTAPE 1 : Créer ton compte GitHub (5 min)

### 1.1 Inscription
1. Va sur : **https://github.com/signup**
2. Remplis :
   - **Email** : `contact@les-cles-du-cabanon.com`
   - **Mot de passe** : (choisis-en un sécurisé)
   - **Username** : `les-cles-du-cabanon` (ou autre)
3. Clique sur **"Create account"**
4. **Vérifie ton email** (code de confirmation)

### 1.2 Configuration initiale
- Skip les questions (ou réponds rapidement)
- Choisis le plan **FREE** (gratuit)

✅ **Compte GitHub créé !**

---

## 📦 ÉTAPE 2 : Créer le repository (3 min)

### 2.1 Sur GitHub.com
1. Clique sur le **bouton vert "New"** (en haut à droite)
2. Remplis :
   - **Repository name** : `les-cles-du-cabanon`
   - **Description** : "Site web de la conciergerie Les Clés du Cabanon"
   - **Visibilité** : ✅ **Public** (ou Private si tu préfères)
   - **NE COCHE PAS** "Initialize with README" (on a déjà un README)
3. Clique sur **"Create repository"**

✅ **Repository créé !**

### 2.2 Note les commandes Git affichées
GitHub va t'afficher des commandes comme :
```bash
git remote add origin https://github.com/TON-USERNAME/les-cles-du-cabanon.git
git branch -M main
git push -u origin main
```

**⚠️ GARDE CETTE PAGE OUVERTE** (tu en auras besoin à l'étape 3)

---

## 💻 ÉTAPE 3 : Télécharger ton code depuis Figma Make

### 3.1 Télécharger le projet
Dans **Figma Make** (ici) :
1. Clique sur le bouton **"Export"** (en haut à droite)
2. Choisis **"Download as ZIP"**
3. **Dézippe le fichier** sur ton ordinateur

### 3.2 Ouvrir le Terminal
**Sur Mac** :
- Ouvre **Terminal** (dans Applications > Utilitaires)
- Tape : `cd ` (avec un espace)
- **Glisse-dépose** le dossier dézippé dans le Terminal
- Appuie sur **Entrée**

**Sur Windows** :
- Ouvre le dossier dézippé
- Clique sur la barre d'adresse (en haut)
- Tape `cmd` et appuie sur **Entrée**

### 3.3 Vérifier que tu es dans le bon dossier
Tape :
```bash
ls
```
(ou `dir` sur Windows)

Tu dois voir : `package.json`, `README.md`, `src/`, etc.

✅ **Tu es dans le bon dossier !**

---

## 🔧 ÉTAPE 4 : Envoyer ton code sur GitHub (5 min)

### 4.1 Installer Git (si pas déjà fait)
**Mac** : Git est déjà installé normalement  
**Windows** : Télécharge sur https://git-scm.com/download/win

### 4.2 Configurer Git (première fois seulement)
```bash
git config --global user.name "Les Clés du Cabanon"
git config --global user.email "contact@les-cles-du-cabanon.com"
```

### 4.3 Initialiser Git et envoyer le code
Copie-colle **une par une** ces commandes (appuie sur Entrée après chaque ligne) :

```bash
git init
```
```bash
git add .
```
```bash
git commit -m "Premier commit - Site Les Clés du Cabanon"
```
```bash
git branch -M main
```
```bash
git remote add origin https://github.com/TON-USERNAME/les-cles-du-cabanon.git
```
**⚠️ REMPLACE** `TON-USERNAME` par ton vrai username GitHub !

```bash
git push -u origin main
```

**Si demandé** :
- Username : ton username GitHub
- Password : **PAS ton mot de passe**, mais un **Personal Access Token** (voir ci-dessous)

### 4.4 Créer un Personal Access Token (si demandé)
1. Va sur : https://github.com/settings/tokens
2. Clique sur **"Generate new token (classic)"**
3. Donne un nom : `vercel-deploy`
4. Coche : ✅ **repo** (toutes les sous-cases)
5. Clique sur **"Generate token"**
6. **COPIE LE TOKEN** (tu ne le reverras plus !)
7. **Colle-le** comme mot de passe dans le Terminal

✅ **Code envoyé sur GitHub !**

Vérifie sur **github.com/TON-USERNAME/les-cles-du-cabanon** → tu dois voir tous tes fichiers 🎉

---

## 🚀 ÉTAPE 5 : Déployer sur Vercel (3 min)

### 5.1 Créer un compte Vercel
1. Va sur : **https://vercel.com/signup**
2. Clique sur **"Continue with GitHub"**
3. Autorise Vercel à accéder à GitHub
4. Choisis le plan **FREE** (gratuit)

✅ **Compte Vercel créé !**

### 5.2 Importer le projet
1. Clique sur **"Add New..."** → **"Project"**
2. **Cherche** ton repository `les-cles-du-cabanon`
3. Clique sur **"Import"**

### 5.3 Configuration (laisse tout par défaut)
- **Framework Preset** : Vite (détecté automatiquement)
- **Build Command** : `npm run build` (déjà rempli)
- **Output Directory** : `dist` (déjà rempli)

Clique sur **"Deploy"** ⚡

### 5.4 Attendre le déploiement (1-2 min)
Vercel va :
1. ✅ Installer les dépendances
2. ✅ Builder le site
3. ✅ Le déployer sur un CDN mondial

**🎉 SITE EN LIGNE !**

Tu verras une URL comme : `https://les-cles-du-cabanon.vercel.app`

---

## 🌐 ÉTAPE 6 : Connecter ton domaine (optionnel)

### 6.1 Dans Vercel
1. Va dans ton projet → **"Settings"** → **"Domains"**
2. Ajoute : `les-cles-du-cabanon.com`
3. Vercel te donnera des **DNS records** à configurer

### 6.2 Chez ton registrar (OVH, Gandi, etc.)
1. Va dans la gestion DNS
2. Ajoute un enregistrement **A** :
   - Type : `A`
   - Name : `@`
   - Value : `76.76.21.21` (IP Vercel)
3. Ajoute un enregistrement **CNAME** :
   - Type : `CNAME`
   - Name : `www`
   - Value : `cname.vercel-dns.com`

**Attends 24-48h** pour la propagation DNS

✅ **Site accessible sur ton domaine !**

---

## 🔄 Mises à jour futures

### Pour modifier le site :
1. Fais tes modifications dans Figma Make
2. Télécharge le nouveau ZIP
3. Copie les fichiers modifiés dans ton dossier local
4. Dans le Terminal :
```bash
git add .
git commit -m "Description de la modification"
git push
```

**Vercel redéploiera automatiquement** en 1-2 min ! 🚀

---

## 📊 Résultat Final

✅ **Code source** : https://github.com/TON-USERNAME/les-cles-du-cabanon  
✅ **Site en ligne** : https://les-cles-du-cabanon.vercel.app  
✅ **SSL gratuit** (HTTPS automatique)  
✅ **CDN mondial** (chargement ultra-rapide)  
✅ **Déploiement automatique** à chaque push Git  

**Coût total : 0€** 💰

---

## ❓ Problèmes fréquents

### "git command not found"
➡️ Installe Git : https://git-scm.com/downloads

### "Permission denied (publickey)"
➡️ Utilise un Personal Access Token au lieu du mot de passe

### Le site ne s'affiche pas
➡️ Vérifie les logs de build sur Vercel → "Deployments"

### Problème avec npm install
➡️ Assure-toi d'avoir **Node.js 18+** installé : https://nodejs.org

---

## 🆘 Besoin d'aide ?

- **Documentation Vercel** : https://vercel.com/docs
- **Support GitHub** : https://docs.github.com
- **Contact** : contact@les-cles-du-cabanon.com
