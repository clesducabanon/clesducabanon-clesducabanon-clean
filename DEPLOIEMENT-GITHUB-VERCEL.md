# 🚀 GUIDE COMPLET : DÉPLOIEMENT GITHUB + VERCEL

## ✅ MODIFICATIONS RÉCENTES

### 1️⃣ **Bouton "Estimation" dans la Navigation**
- ✅ Desktop : "Estimation" (au lieu de "Estimer mes revenus")
- ✅ Mobile : "Estimation" (au lieu de "Estimer mes revenus")
- ✅ Plus compact, ne déborde plus

### 2️⃣ **EmailJS configuré et fonctionnel**
- ✅ Initialisation dans `/src/app/App.tsx`
- ✅ Formulaire Contact opérationnel
- ✅ Popup Estimation opérationnelle

---

## 📦 DÉPLOIEMENT SUR VERCEL VIA GITHUB

### ⚠️ **OUI, VOUS DEVEZ REDÉPLOYER !**

Pour que vos changements soient visibles en ligne, vous devez :
1. **Envoyer le code sur GitHub** (push)
2. **Vercel redéploiera automatiquement** votre site

---

## 🔧 ÉTAPE 1 : PRÉPARER LE FICHIER `.gitignore`

Vérifiez que votre `.gitignore` contient bien :

```gitignore
# Dependencies
node_modules
.pnp
.pnp.js

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Production
dist
build

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Cache
.cache
.parcel-cache

# Editor
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
```

⚠️ **IMPORTANT** : Le fichier `.env` ne sera **PAS envoyé sur GitHub** (c'est normal, il contient vos clés secrètes).

---

## 🔐 ÉTAPE 2 : CONFIGURER LES VARIABLES D'ENVIRONNEMENT SUR VERCEL

### Sur le dashboard Vercel :

1. **Allez sur votre projet** : `clesducabanon.fr`
2. **Cliquez sur "Settings"** (en haut)
3. **Dans le menu de gauche, cliquez sur "Environment Variables"**
4. **Ajoutez les 4 variables** :

| Nom de la variable | Valeur |
|-------------------|--------|
| `VITE_EMAILJS_SERVICE_ID` | `service_nojllzi` |
| `VITE_EMAILJS_TEMPLATE_CONTACT` | `template_fb2wrar` |
| `VITE_EMAILJS_TEMPLATE_ESTIMATION` | `template_mpotxla` |
| `VITE_EMAILJS_PUBLIC_KEY` | `8Hd8vWA0ZQZAe9VTF` |

5. **Pour chaque variable** :
   - Cliquez sur "Add New"
   - Entrez le nom (ex: `VITE_EMAILJS_SERVICE_ID`)
   - Entrez la valeur (ex: `service_nojllzi`)
   - Cochez "Production", "Preview", et "Development"
   - Cliquez sur "Save"

---

## 📤 ÉTAPE 3 : ENVOYER LE CODE SUR GITHUB

### 🔍 **Vérifier les modifications** :

```bash
git status
```

Vous verrez tous les fichiers modifiés.

---

### ➕ **Ajouter tous les fichiers** :

```bash
git add .
```

---

### 💬 **Créer un commit** :

```bash
git commit -m "✅ EmailJS configuré + Bouton Estimation compact"
```

---

### 🚀 **Envoyer sur GitHub** :

```bash
git push origin main
```

**OU** si votre branche principale s'appelle `master` :

```bash
git push origin master
```

---

## 🎯 ÉTAPE 4 : VERCEL REDÉPLOIERA AUTOMATIQUEMENT

### Ce qui se passe automatiquement :

1. ✅ **GitHub** reçoit votre code
2. ✅ **Vercel** détecte le changement
3. ✅ **Vercel** lance un nouveau build
4. ✅ **Vercel** déploie automatiquement

### Temps de déploiement :
- ⏱️ **~2-5 minutes** pour que tout soit en ligne

---

## 🔍 VÉRIFIER LE DÉPLOIEMENT

### 1. **Sur le dashboard Vercel** :
- Allez sur `vercel.com`
- Cliquez sur votre projet
- Vous verrez un nouveau déploiement en cours dans l'onglet "Deployments"
- Attendez qu'il soit "Ready" (vert ✅)

### 2. **Tester sur votre site** :
1. Allez sur `https://clesducabanon.fr`
2. Vérifiez que le bouton affiche maintenant **"Estimation"**
3. Testez le formulaire Contact
4. Testez le popup Estimation

---

## 📋 COMMANDES COMPLÈTES (COPIER-COLLER)

```bash
# 1. Vérifier les modifications
git status

# 2. Ajouter tous les fichiers
git add .

# 3. Créer un commit
git commit -m "✅ EmailJS configuré + Bouton Estimation compact"

# 4. Envoyer sur GitHub
git push origin main

# Si erreur "main" n'existe pas, essayez :
git push origin master
```

---

## ⚠️ PROBLÈMES COURANTS

### ❌ **Erreur : "Please configure your email and name"**

```bash
git config --global user.email "votre-email@exemple.com"
git config --global user.name "Votre Nom"
```

Puis réessayez :
```bash
git commit -m "✅ EmailJS configuré + Bouton Estimation compact"
git push origin main
```

---

### ❌ **Erreur : "Permission denied (publickey)"**

Vous devez configurer votre clé SSH GitHub :
1. Suivez ce guide : https://docs.github.com/fr/authentication/connecting-to-github-with-ssh

OU utilisez HTTPS :
```bash
git remote set-url origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
git push origin main
```

---

### ❌ **Les formulaires ne fonctionnent pas après le déploiement**

Vérifiez que vous avez bien ajouté les variables d'environnement sur Vercel (Étape 2).

**Solution** :
1. Allez sur Vercel > Settings > Environment Variables
2. Ajoutez les 4 variables
3. Allez dans l'onglet "Deployments"
4. Cliquez sur les "..." du dernier déploiement
5. Cliquez sur "Redeploy"

---

## 🎯 RÉCAPITULATIF

### ✅ **Ce qui a été modifié localement** :
1. Bouton "Estimation" dans la Navigation (desktop + mobile)
2. EmailJS initialisé dans `/src/app/App.tsx`
3. Formulaire Contact corrigé
4. Popup Estimation corrigée
5. Fichier `.env` créé (ne sera pas sur GitHub)

### 🚀 **Ce que vous devez faire** :
1. ✅ Configurer les variables d'environnement sur Vercel (Étape 2)
2. ✅ Envoyer le code sur GitHub (Étape 3)
3. ✅ Attendre que Vercel redéploie (Étape 4)
4. ✅ Tester sur votre site en ligne

---

## 📧 VARIABLES D'ENVIRONNEMENT À AJOUTER SUR VERCEL

```bash
VITE_EMAILJS_SERVICE_ID=service_nojllzi
VITE_EMAILJS_TEMPLATE_CONTACT=template_fb2wrar
VITE_EMAILJS_TEMPLATE_ESTIMATION=template_mpotxla
VITE_EMAILJS_PUBLIC_KEY=8Hd8vWA0ZQZAe9VTF
```

---

## 🔥 RÉSULTAT ATTENDU

Après le déploiement :

1. ✅ **Bouton Navigation** : Affiche "Estimation" (plus compact)
2. ✅ **Formulaire Contact** : Fonctionne et envoie les emails
3. ✅ **Popup Estimation** : Fonctionne et envoie les emails
4. ✅ **Emails reçus sur** : `contact@les-cles-du-cabanon.com`

---

## 🆘 BESOIN D'AIDE ?

Si vous rencontrez un problème :

1. Vérifiez que les variables d'environnement sont bien sur Vercel
2. Vérifiez que le déploiement est "Ready" (vert ✅)
3. Videz le cache de votre navigateur (Ctrl + F5)
4. Testez en navigation privée

---

**Tout est prêt pour le déploiement !** 🚀✨

---

**Contact : contact@les-cles-du-cabanon.com | 📞 06 25 40 14 80**
