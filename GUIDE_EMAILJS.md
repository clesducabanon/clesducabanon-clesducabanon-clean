# 📧 GUIDE CONFIGURATION EMAILJS - CLÉS DU CABANON

## ✅ CE QUI A ÉTÉ FAIT

Votre formulaire de contact a été **RÉPARÉ** et utilise maintenant **EmailJS** pour envoyer les emails directement depuis le navigateur.

**Avant** : Les formulaires étaient perdus (juste `console.log`) ❌  
**Maintenant** : Les formulaires sont **vraiment envoyés par email** ✅

---

## 🚀 CONFIGURATION EMAILJS (5 MINUTES)

### ÉTAPE 1 : Créer un compte EmailJS

1. Allez sur **https://www.emailjs.com**
2. Cliquez sur **"Sign Up"** (Inscription)
3. Inscrivez-vous avec votre email professionnel : `contact@les-cles-du-cabanon.com`
4. Vérifiez votre email et activez le compte

---

### ÉTAPE 2 : Connecter votre email Gmail/Outlook

1. Une fois connecté, cliquez sur **"Email Services"** dans le menu de gauche
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur d'email :
   - **Gmail** (recommandé si vous avez Gmail)
   - **Outlook** (si vous utilisez Outlook/Hotmail)
   - **Autre** (Yahoo, etc.)

#### Si vous choisissez Gmail :
4. Cliquez sur **"Connect Account"**
5. Connectez-vous avec votre compte Gmail : `contact@les-cles-du-cabanon.com`
6. Autorisez EmailJS à envoyer des emails
7. Notez votre **Service ID** (exemple : `service_abc1234`)

#### Si vous choisissez Outlook :
4. Entrez votre email : `contact@les-cles-du-cabanon.com`
5. Entrez votre mot de passe
6. Notez votre **Service ID**

---

### ÉTAPE 3 : Créer un template d'email

1. Cliquez sur **"Email Templates"** dans le menu de gauche
2. Cliquez sur **"Create New Template"**
3. Donnez un nom : `contact_form_clesducabanon`
4. Configurez le template comme ceci :

**Subject (Sujet)** :
```
🏖️ Nouveau contact depuis clesducabanon.fr - {{name}}
```

**Content (Corps du message)** :
```
Nouveau message depuis le formulaire de contact :

Nom : {{name}}
Email : {{email}}
Téléphone : {{phone}}
Ville du bien : {{city}}

Message :
{{message}}

---
Envoyé depuis www.clesducabanon.fr
```

**From Name (Nom de l'expéditeur)** :
```
Clés du Cabanon - Site Web
```

**From Email** :
```
noreply@emailjs.com
```

**To Email** :
```
contact@les-cles-du-cabanon.com
```

5. Cliquez sur **"Save"**
6. Notez votre **Template ID** (exemple : `template_xyz5678`)

---

### ÉTAPE 4 : Récupérer votre Public Key

1. Cliquez sur **"Account"** dans le menu de gauche
2. Allez dans l'onglet **"General"**
3. Trouvez **"Public Key"** (exemple : `abcDEF123ghiJKL456`)
4. Notez cette clé

---

### ÉTAPE 5 : Configurer les clés dans votre projet

Vous avez maintenant **3 clés** :
- **Service ID** : `service_abc1234`
- **Template ID** : `template_xyz5678`
- **Public Key** : `abcDEF123ghiJKL456`

#### Option 1 : En local (sur votre ordinateur)

1. Ouvrez le fichier `/.env.local`
2. Remplacez les valeurs par vos vraies clés :

```env
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
VITE_EMAILJS_PUBLIC_KEY=abcDEF123ghiJKL456
```

3. Sauvegardez le fichier
4. Redémarrez votre serveur local :
```bash
npm run dev
```

#### Option 2 : Sur Vercel (production)

1. Allez sur **https://vercel.com**
2. Sélectionnez votre projet **"les-cles-du-cabanon"**
3. Cliquez sur **"Settings"**
4. Dans le menu de gauche, cliquez sur **"Environment Variables"**
5. Ajoutez **3 variables** :

| Name | Value |
|------|-------|
| `VITE_EMAILJS_SERVICE_ID` | `service_abc1234` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_xyz5678` |
| `VITE_EMAILJS_PUBLIC_KEY` | `abcDEF123ghiJKL456` |

6. Cliquez sur **"Save"** pour chaque variable
7. Redéployez votre site :
   - Allez dans l'onglet **"Deployments"**
   - Cliquez sur **"Redeploy"** sur le dernier déploiement

---

## ✅ TESTER LE FORMULAIRE

1. Allez sur **www.clesducabanon.fr**
2. Scrollez jusqu'au formulaire de contact
3. Remplissez tous les champs
4. Cliquez sur **"Envoyer le message"**
5. Vous devriez voir **"Message envoyé !"**
6. Vérifiez votre email `contact@les-cles-du-cabanon.com` : vous devriez avoir reçu le message !

---

## 🔍 DÉPANNAGE

### Problème : "Erreur lors de l'envoi"

**Cause possible 1** : Les clés EmailJS ne sont pas configurées
- Vérifiez que les 3 variables d'environnement sont bien renseignées dans Vercel
- Vérifiez que vous avez redéployé le site après avoir ajouté les variables

**Cause possible 2** : Le Service ID est incorrect
- Retournez sur EmailJS → Email Services
- Vérifiez que votre Service ID correspond bien

**Cause possible 3** : Le Template ID est incorrect
- Retournez sur EmailJS → Email Templates
- Vérifiez que votre Template ID correspond bien

**Cause possible 4** : Votre compte EmailJS n'est pas activé
- Vérifiez votre email de confirmation EmailJS
- Cliquez sur le lien d'activation

### Problème : Je ne reçois pas les emails

**Cause possible 1** : L'email de destination est incorrect
- Retournez sur EmailJS → Email Templates
- Vérifiez que **"To Email"** est bien `contact@les-cles-du-cabanon.com`

**Cause possible 2** : Les emails arrivent dans les SPAM
- Vérifiez votre dossier SPAM/Indésirables
- Ajoutez `noreply@emailjs.com` à vos contacts

**Cause possible 3** : Quota EmailJS dépassé
- Plan gratuit = 200 emails/mois
- Allez sur EmailJS → Account → Usage
- Vérifiez combien d'emails vous avez envoyé ce mois-ci

---

## 📊 LIMITES DU PLAN GRATUIT EMAILJS

- ✅ **200 emails/mois gratuits**
- ✅ Support de base
- ✅ Toutes les fonctionnalités

Si vous dépassez 200 emails/mois :
- Plan **Personal** : 7$/mois → 1000 emails/mois
- Plan **Pro** : 19$/mois → 5000 emails/mois

---

## 🔐 SÉCURITÉ

Les clés EmailJS sont **publiques** (visibles dans le code source du navigateur), c'est normal.

EmailJS empêche les abus grâce à :
- **Rate limiting** : Maximum 1 email toutes les 5 secondes par IP
- **CAPTCHA automatique** : Si spam détecté
- **Whitelist domaines** : Vous pouvez restreindre à `clesducabanon.fr` uniquement

Pour activer la whitelist (recommandé) :
1. EmailJS → Account → Security
2. Cochez **"Restrict domains"**
3. Ajoutez : `clesducabanon.fr`, `www.clesducabanon.fr`, `localhost`

---

## 📞 BESOIN D'AIDE ?

- **Documentation EmailJS** : https://www.emailjs.com/docs
- **Support EmailJS** : support@emailjs.com
- **Tutoriels vidéo** : https://www.youtube.com/c/EmailJS

---

## ✅ RÉCAPITULATIF

| Étape | Action | Statut |
|-------|--------|--------|
| 1 | Créer compte EmailJS | ⏳ À faire |
| 2 | Connecter Gmail/Outlook | ⏳ À faire |
| 3 | Créer template email | ⏳ À faire |
| 4 | Récupérer les 3 clés | ⏳ À faire |
| 5 | Configurer Vercel | ⏳ À faire |
| 6 | Redéployer le site | ⏳ À faire |
| 7 | Tester le formulaire | ⏳ À faire |

---

**Une fois terminé, votre formulaire fonctionnera 100% et vous recevrez TOUS les messages de contact !**