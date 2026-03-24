# ✅ VÉRIFICATION TEMPLATE EMAILJS - FORMULAIRE ESTIMATION

## 🎯 CORRESPONDANCE PARFAITE AVEC VOTRE TEMPLATE EMAILJS

---

## ✅ MAPPING COMPLET DES CHAMPS

### 📋 **Informations client**

| Template EmailJS | Code Formulaire | Valeur exemple |
|-----------------|-----------------|----------------|
| `{{first_name}}` | `first_name: formData.prenom` | "Jean" |
| `{{last_name}}` | `last_name: formData.nom` | "Dupont" |
| `{{email}}` | `email: formData.email` | "jean.dupont@email.com" |
| `{{phone}}` | `phone: formData.telephone` | "06 12 34 56 78" |

---

### 🏠 **Bien**

| Template EmailJS | Code Formulaire | Valeur exemple |
|-----------------|-----------------|----------------|
| `{{address}}` | `address: formData.adresse` | "123 Avenue de la Mer" |
| `{{postal_code}}` | `postal_code: formData.codePostal` | "83110" |
| `{{city}}` | `city: formData.ville` | "Sanary-sur-Mer" |
| `{{property_type}}` | `property_type: formData.typeBien` | "Villa" |
| `{{surface}}` | `surface: formData.surface` | "120" |
| `{{bedrooms}}` | `bedrooms: formData.nombreChambres` | "3 chambres" |
| `{{guest_capacity}}` | `guest_capacity: formData.capaciteCouchage` | "6 personnes" |

---

### ⚡ **Équipements**

| Template EmailJS | Code Formulaire | Valeur exemple |
|-----------------|-----------------|----------------|
| `{{pool}}` | `pool: formData.piscine` | "Oui - Privée" |
| `{{garden}}` | `garden: formData.jardin` | "Oui - Jardin et Terrasse" |
| `{{aircon}}` | `aircon: formData.climatisation` | "Oui" |
| `{{parking}}` | `parking: formData.parkingPrive` | "Oui - Garage" |
| `{{sea_view}}` | `sea_view: formData.vueMer` | "Oui - Vue mer directe" |
| `{{beach_distance}}` | `beach_distance: formData.distancePlage` | "50-100 mètres" |

---

### 📅 **Projet**

| Template EmailJS | Code Formulaire | Valeur exemple |
|-----------------|-----------------|----------------|
| `{{availability}}` | `availability: formData.disponibilite` | "Toute l'année" |
| `{{project_message}}` | `project_message: formData.message` | "Villa avec piscine..." |

---

## 💻 CODE FINAL (templateParams)

```typescript
const templateParams = {
  // Informations client
  first_name: formData.prenom,
  last_name: formData.nom,
  email: formData.email,
  phone: formData.telephone,
  
  // Bien
  address: formData.adresse,
  postal_code: formData.codePostal,
  city: formData.ville,
  property_type: formData.typeBien,
  surface: formData.surface,
  bedrooms: formData.nombreChambres,
  guest_capacity: formData.capaciteCouchage,
  
  // Équipements
  pool: formData.piscine,
  garden: formData.jardin,
  aircon: formData.climatisation,
  parking: formData.parkingPrive,
  sea_view: formData.vueMer,
  beach_distance: formData.distancePlage,
  
  // Projet
  availability: formData.disponibilite,
  project_message: formData.message || 'Aucun message complémentaire'
};
```

---

## ✅ CE QUI A ÉTÉ CORRIGÉ

### ❌ **AVANT** (noms incorrects) :
```typescript
{
  type_demande: 'Estimation de revenus',
  nom_complet: `${formData.prenom} ${formData.nom}`,
  adresse_complete: `${formData.adresse}, ${formData.codePostal} ${formData.ville}`,
  type_bien: formData.typeBien,
  nombre_chambres: formData.nombreChambres,
  // ...
}
```

### ✅ **MAINTENANT** (noms corrects) :
```typescript
{
  first_name: formData.prenom,
  last_name: formData.nom,
  address: formData.adresse,
  postal_code: formData.codePostal,
  city: formData.ville,
  property_type: formData.typeBien,
  bedrooms: formData.nombreChambres,
  // ...
}
```

---

## 🎯 CORRESPONDANCE EXACTE

### Les noms de champs correspondent maintenant **EXACTEMENT** à votre template EmailJS :

✅ `first_name` au lieu de `prenom`  
✅ `last_name` au lieu de `nom`  
✅ `phone` au lieu de `telephone`  
✅ `address` au lieu de `adresse`  
✅ `postal_code` au lieu de `codePostal`  
✅ `city` au lieu de `ville`  
✅ `property_type` au lieu de `typeBien`  
✅ `bedrooms` au lieu de `nombreChambres`  
✅ `guest_capacity` au lieu de `capaciteCouchage`  
✅ `pool` au lieu de `piscine`  
✅ `garden` au lieu de `jardin`  
✅ `aircon` au lieu de `climatisation`  
✅ `parking` au lieu de `parkingPrive`  
✅ `sea_view` au lieu de `vueMer`  
✅ `beach_distance` au lieu de `distancePlage`  
✅ `availability` au lieu de `disponibilite`  
✅ `project_message` au lieu de `message`

---

## 📧 EXEMPLE D'EMAIL REÇU

Quand un utilisateur soumet le formulaire, vous recevrez un email sur `contact@les-cles-du-cabanon.com` avec ce format :

```
Informations client :
Prénom : Jean
Nom : Dupont
Email : jean.dupont@email.com
Téléphone : 06 12 34 56 78

Bien :
Adresse : 123 Avenue de la Mer
Code postal : 83110
Ville : Sanary-sur-Mer
Type de bien : Villa
Surface : 120
Nombre de chambres : 3 chambres
Capacité de couchage : 6 personnes

Équipements :
Piscine : Oui - Privée
Jardin / Terrasse : Oui - Jardin et Terrasse
Climatisation : Oui
Parking privé : Oui - Garage
Vue mer : Oui - Vue mer directe
Distance de la plage : 50-100 mètres

Projet :
Période de disponibilité : Toute l'année
Message complémentaire : Villa avec piscine, idéalement située...
```

---

## 🔧 CONFIGURATION EMAILJS

### Variables d'environnement requises dans `.env` :

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Template EmailJS à créer avec ces champs :

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

## ✅ RÉSULTAT

**Les noms de champs correspondent désormais EXACTEMENT à votre template EmailJS !**

Vous recevrez maintenant des emails parfaitement formatés avec toutes les informations du formulaire d'estimation. 🎉

---

**Contact : contact@les-cles-du-cabanon.com | 📞 06 25 40 14 80**
