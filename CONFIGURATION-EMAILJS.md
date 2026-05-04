# ✅ CONFIGURATION EMAILJS - IDS INSTALLÉS

## 🎯 VOS TEMPLATE EMAILJS SONT CONFIGURÉS !

---

## 📧 CONFIGURATION EMAILJS

### ✅ **Formulaire Contact** (Contact.tsx)

```typescript
Service ID:   service_nojllzi
Template ID:  template_fb2wrar
Public Key:   (à configurer dans .env)
```

**Utilisation** : Formulaire de contact principal sur la page d'accueil

---

### ✅ **Popup Estimation** (EstimationModal.tsx)

```typescript
Service ID:   service_nojllzi
Template ID:  template_mpotxla
Public Key:   (à configurer dans .env)
```

**Utilisation** : Formulaire d'estimation de revenus (popup jaune "Estimer mes revenus")

---

## 🔧 CODE INSTALLÉ

### 1️⃣ **Formulaire Contact** (`/src/app/components/Contact.tsx`)

```typescript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_nojllzi';
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT || 'template_fb2wrar';
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

await emailjs.sendForm(
  serviceId,
  templateId,
  formRef.current,
  publicKey
);
```

**Champs du formulaire** :
- `name` : Nom complet
- `email` : Email
- `phone` : Téléphone
- `city` : Ville du bien
- `message` : Message complémentaire

---

### 2️⃣ **Popup Estimation** (`/src/app/components/EstimationModal.tsx`)

```typescript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_nojllzi';
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ESTIMATION || 'template_mpotxla';
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

await emailjs.send(
  serviceId,
  templateId,
  templateParams,
  publicKey
);
```

**Champs du formulaire** :
- `first_name`, `last_name`, `email`, `phone`
- `address`, `postal_code`, `city`
- `property_type`, `surface`, `bedrooms`, `guest_capacity`
- `pool`, `garden`, `aircon`, `parking`, `sea_view`, `beach_distance`
- `availability`, `project_message`

---

## ⚙️ VARIABLES D'ENVIRONNEMENT

### Créez un fichier `.env` à la racine du projet :

```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_nojllzi
VITE_EMAILJS_TEMPLATE_CONTACT=template_fb2wrar
VITE_EMAILJS_TEMPLATE_ESTIMATION=template_mpotxla
VITE_EMAILJS_PUBLIC_KEY=VOTRE_CLE_PUBLIQUE_ICI
```

**Note** : Remplacez `VOTRE_CLE_PUBLIQUE_ICI` par votre clé publique EmailJS

---

## 🔐 OÙ TROUVER VOTRE CLÉ PUBLIQUE ?

1. **Connectez-vous à EmailJS** : https://dashboard.emailjs.com/
2. **Allez dans "Account"** (en haut à droite)
3. **Copiez votre "Public Key"** (ex: `user_abc123xyz`)
4. **Collez-la dans `.env`**

---

## 📋 TEMPLATE EMAILJS À CRÉER

### **Template Contact** (`template_fb2wrar`)

```
Subject: Nouveau contact - {{name}}

Nouveau message de contact :

Nom : {{name}}
Email : {{email}}
Téléphone : {{phone}}
Ville : {{city}}

Message :
{{message}}
```

---

### **Template Estimation** (`template_mpotxla`)

```
Subject: Nouvelle demande d'estimation - {{first_name}} {{last_name}}

Informations client :
Prénom : {{first_name}}
Nom : {{last_name}}
Email : {{email}}
Téléphone : {{phone}}

Bien :
Adresse : {{address}}
Code postal : {{postal_code}}
Ville : {{city}}
Type de bien : {{property_type}}
Surface : {{surface}}
Nombre de chambres : {{bedrooms}}
Capacité de couchage : {{guest_capacity}}

Équipements :
Piscine : {{pool}}
Jardin / Terrasse : {{garden}}
Climatisation : {{aircon}}
Parking privé : {{parking}}
Vue mer : {{sea_view}}
Distance de la plage : {{beach_distance}}

Projet :
Période de disponibilité : {{availability}}
Message complémentaire : {{project_message}}
```

---

## ✅ FONCTIONNEMENT

### **Formulaire Contact** :
1. ✅ Utilisateur remplit le formulaire sur la page d'accueil
2. ✅ Clic sur "Envoyer le message"
3. ✅ EmailJS envoie via `service_nojllzi` + `template_fb2wrar`
4. ✅ Vous recevez l'email sur `contact@les-cles-du-cabanon.com`

### **Popup Estimation** :
1. ✅ Utilisateur clique sur "Estimer mes revenus" (bouton jaune)
2. ✅ Popup avec formulaire détaillé (17 champs)
3. ✅ Clic sur "Recevoir mon estimation"
4. ✅ EmailJS envoie via `service_nojllzi` + `template_mpotxla`
5. ✅ Vous recevez l'email avec toutes les infos du bien

---

## 🚀 FALLBACK

Si les variables d'environnement ne sont pas configurées, **les IDs par défaut sont utilisés** :

- ✅ Service ID : `service_nojllzi` (déjà configuré)
- ✅ Template Contact : `template_fb2wrar` (déjà configuré)
- ✅ Template Estimation : `template_mpotxla` (déjà configuré)
- ⚠️ Public Key : **À CONFIGURER OBLIGATOIREMENT**

---

## 🎯 RÉCAPITULATIF

| Formulaire | Service ID | Template ID | Fichier |
|-----------|-----------|-------------|---------|
| **Contact** | `service_nojllzi` | `template_fb2wrar` | `/src/app/components/Contact.tsx` |
| **Estimation** | `service_nojllzi` | `template_mpotxla` | `/src/app/components/EstimationModal.tsx` |

---

## ⚠️ IMPORTANT

### Pour que les formulaires fonctionnent :

1. ✅ Les Service ID et Template ID sont déjà configurés dans le code
2. ⚠️ Vous devez ajouter votre **Public Key** dans `.env`
3. ✅ Vérifiez que vos templates EmailJS existent bien sur votre compte
4. ✅ Vérifiez que l'email de destination est bien configuré dans EmailJS

---

## 🔍 TEST

Pour tester les formulaires :

1. **Créez le fichier `.env`** avec votre Public Key
2. **Redémarrez le serveur de développement**
3. **Testez le formulaire Contact** (page d'accueil)
4. **Testez le formulaire Estimation** (cliquez sur "Estimer mes revenus")
5. **Vérifiez votre boîte email** : `contact@les-cles-du-cabanon.com`

---

## 📧 EMAIL DE RÉCEPTION

Les emails seront envoyés à :
**contact@les-cles-du-cabanon.com**

*(configuré dans EmailJS, pas dans le code)*

---

**Tout est configuré ! Il ne vous reste plus qu'à ajouter votre Public Key dans `.env` !** 🎉

---

**Contact : contact@les-cles-du-cabanon.com | 📞 06 25 40 14 80**
