# 🚀 GUIDE DE DÉPLOIEMENT SUR VERCEL

## ✅ OUI, VOUS DEVEZ DÉPLOYER SUR VERCEL/GITHUB !

Pour que les modifications EmailJS soient visibles en production, vous devez :
1. **Pousser le code sur GitHub**
2. **Configurer les variables d'environnement sur Vercel**
3. **Vercel va automatiquement redéployer**

---

## ⚠️ ATTENTION : NE PAS POUSSER LE FICHIER `.env` !

Le fichier `.env` est déjà dans `.gitignore`, donc il **ne sera PAS envoyé sur GitHub** (c'est normal et sécurisé).

**Ce qui sera poussé sur GitHub** :
- ✅ Tout le code source
- ✅ Fichier `.gitignore`
- ❌ **PAS** le fichier `.env` (pour la sécurité)

---

## 📋 ÉTAPE 1 : POUSSER LE CODE SUR GITHUB

### 1️⃣ **Vérifiez que `.gitignore` existe** :
```bash
cat .gitignore
```

Vous devriez voir `.env` dans la liste.

### 2️⃣ **Ajoutez les fichiers modifiés** :
```bash
git add .
```

### 3️⃣ **Créez un commit** :
```bash
git commit -m "Fix EmailJS configuration + raccourcir bouton Estimation"
```

### 4️⃣ **Poussez sur GitHub** :
```bash
git push origin main
```

*(Remplacez `main` par `master` si votre branche principale s'appelle `master`)*

---

## ⚙️ ÉTAPE 2 : CONFIGURER LES VARIABLES D'ENVIRONNEMENT SUR VERCEL

### 🔐 **Pourquoi faire ça ?**

Le fichier `.env` n'est **pas envoyé sur GitHub** (pour la sécurité), donc Vercel ne le voit pas. Il faut configurer les variables d'environnement **directement dans Vercel**.

---

### 📝 **Comment faire ?**

1. **Allez sur Vercel** : https://vercel.com/dashboard
2. **Sélectionnez votre projet** : `clesducabanon` (ou le nom de votre projet)
3. **Cliquez sur "Settings"** (en haut)
4. **Cliquez sur "Environment Variables"** (dans le menu de gauche)
5. **Ajoutez les 4 variables suivantes** :

---

### ✅ **Variables à ajouter** :

| Name | Value | Environment |
|------|-------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | `service_nojllzi` | Production, Preview, Development |
| `VITE_EMAILJS_TEMPLATE_CONTACT` | `template_fb2wrar` | Production, Preview, Development |
| `VITE_EMAILJS_TEMPLATE_ESTIMATION` | `template_mpotxla` | Production, Preview, Development |
| `VITE_EMAILJS_PUBLIC_KEY` | `8Hd8vWA0ZQZAe9VTF` | Production, Preview, Development |

---

### 📸 **DÉTAILS : Comment ajouter une variable** :

1. Cliquez sur **"Add New Variable"**
2. **Name** : `VITE_EMAILJS_SERVICE_ID`
3. **Value** : `service_nojllzi`
4. **Environment** : Cochez **Production, Preview, Development** (toutes les 3)
5. Cliquez sur **"Save"**

Répétez pour les 3 autres variables.

---

## 🔄 ÉTAPE 3 : REDÉPLOIEMENT AUTOMATIQUE

Une fois les variables ajoutées, **Vercel va automatiquement redéployer** votre site.

### ⏱️ **Temps de déploiement** : 2-3 minutes

---

## 🧪 ÉTAPE 4 : TESTER EN PRODUCTION

### 1️⃣ **Attendez que le déploiement soit terminé** :
- Allez dans l'onglet **"Deployments"** sur Vercel
- Attendez que le statut soit **"Ready"** (vert)

### 2️⃣ **Visitez votre site en production** :
```
https://clesducabanon.fr
```
*(ou votre domaine Vercel)*

### 3️⃣ **Testez les formulaires** :
1. **Formulaire Contact** : Scrollez en bas de la page d'accueil
2. **Popup Estimation** : Cliquez sur le bouton "Estimation" (bouton jaune en haut à droite)

### 4️⃣ **Vérifiez la console** :
- Ouvrez les DevTools (F12)
- Onglet "Console"
- Vous devriez voir : `✅ EmailJS initialisé avec la clé publique`

---

## 🎯 RÉCAPITULATIF COMPLET

### ✅ **Ce qui a été fait dans le code** :

1. **Initialisation EmailJS** dans `/src/app/App.tsx`
2. **Correction des appels EmailJS** dans `Contact.tsx` et `EstimationModal.tsx`
3. **Bouton "Estimation"** raccourci (au lieu de "Estimer mes revenus")

### ✅ **Ce que vous devez faire** :

1. **Pousser le code sur GitHub** :
   ```bash
   git add .
   git commit -m "Fix EmailJS + bouton Estimation"
   git push origin main
   ```

2. **Configurer les 4 variables sur Vercel** :
   - `VITE_EMAILJS_SERVICE_ID` = `service_nojllzi`
   - `VITE_EMAILJS_TEMPLATE_CONTACT` = `template_fb2wrar`
   - `VITE_EMAILJS_TEMPLATE_ESTIMATION` = `template_mpotxla`
   - `VITE_EMAILJS_PUBLIC_KEY` = `8Hd8vWA0ZQZAe9VTF`

3. **Attendre le redéploiement** (automatique)

4. **Tester en production** : https://clesducabanon.fr

---

## 🔍 VÉRIFICATION : TOUT EST-IL PRÊT ?

### ✅ **Checklist avant de déployer** :

- [x] Fichier `.env` créé en local (pour le développement)
- [x] Fichier `.gitignore` contient `.env` (pour la sécurité)
- [x] EmailJS initialisé dans `App.tsx`
- [x] Bouton "Estimation" raccourci
- [ ] **Code poussé sur GitHub**
- [ ] **Variables configurées sur Vercel**
- [ ] **Site redéployé sur Vercel**
- [ ] **Formulaires testés en production**

---

## ⚠️ SI ÇA NE FONCTIONNE PAS SUR VERCEL

### 1️⃣ **Vérifiez les variables d'environnement** :
- Allez sur Vercel > Settings > Environment Variables
- Vérifiez que les 4 variables sont bien configurées
- Vérifiez qu'elles sont activées pour **Production**

### 2️⃣ **Vérifiez le build** :
- Allez sur Vercel > Deployments
- Cliquez sur le dernier déploiement
- Vérifiez qu'il n'y a pas d'erreur dans les logs

### 3️⃣ **Vérifiez la console du navigateur** :
- Ouvrez votre site en production
- F12 > Console
- Cherchez des erreurs EmailJS

### 4️⃣ **Redéploiement manuel** :
Si les variables ne sont pas prises en compte :
1. Allez sur Vercel > Deployments
2. Cliquez sur le dernier déploiement
3. Cliquez sur "Redeploy" (les 3 points)
4. Sélectionnez "Redeploy"

---

## 📊 COMMANDES GIT RÉSUMÉES

### **Première fois** (si vous n'avez jamais pushé) :
```bash
git init
git add .
git commit -m "Initial commit - EmailJS configuré"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/clesducabanon.git
git push -u origin main
```

### **Mise à jour** (si le repo existe déjà) :
```bash
git add .
git commit -m "Fix EmailJS + bouton Estimation"
git push origin main
```

---

## 🎉 RÉSULTAT ATTENDU

### **En développement (local)** :
- ✅ Formulaires fonctionnent avec les clés du `.env` local
- ✅ Bouton "Estimation" visible en haut à droite

### **En production (Vercel)** :
- ✅ Formulaires fonctionnent avec les clés configurées sur Vercel
- ✅ Bouton "Estimation" visible en haut à droite
- ✅ Emails reçus sur `contact@les-cles-du-cabanon.com`

---

## 📧 TEMPLATES EMAILJS À VÉRIFIER

Avant de tester en production, vérifiez sur https://dashboard.emailjs.com/ que :

1. ✅ Le template `template_fb2wrar` existe (Contact)
2. ✅ Le template `template_mpotxla` existe (Estimation)
3. ✅ L'email de destination est configuré : `contact@les-cles-du-cabanon.com`

---

## 🚀 COMMANDES COMPLÈTES

```bash
# 1. Vérifier que .gitignore existe et contient .env
cat .gitignore | grep .env

# 2. Ajouter tous les fichiers modifiés
git add .

# 3. Créer un commit avec un message clair
git commit -m "Fix: EmailJS configuration + raccourcir bouton Estimation"

# 4. Pousser sur GitHub (branche main)
git push origin main

# Si votre branche s'appelle "master" :
# git push origin master
```

---

## ✅ CHANGEMENTS VISUELS

### **Bouton dans la Navigation** (en haut à droite) :

**AVANT** :
```
[📈 Estimer mes revenus]  ← Trop long, déborde
```

**APRÈS** :
```
[📈 Estimation]  ← Plus court, propre
```

**MOBILE** : Le bouton garde le texte complet "Estimer mes revenus" car il y a plus d'espace.

---

## 📝 NOTES IMPORTANTES

1. **Le fichier `.env` reste en local** : Il ne sera jamais envoyé sur GitHub (sécurité)
2. **Les variables Vercel remplacent `.env`** : En production, Vercel utilise ses propres variables
3. **Le déploiement est automatique** : Dès que vous pushez sur GitHub, Vercel redéploie
4. **Les variables doivent être configurées UNE SEULE FOIS** : Après, elles restent sauvegardées

---

**Tout est prêt ! Il ne vous reste plus qu'à pousser sur GitHub et configurer les variables sur Vercel !** 🚀✨

---

**Contact : contact@les-cles-du-cabanon.com | 📞 06 25 40 14 80**
