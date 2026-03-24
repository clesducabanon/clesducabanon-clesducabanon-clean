# 🚨 CORRECTION DU DOMAINE - À FAIRE AVANT DÉPLOIEMENT

## ⚠️ CRITIQUE : Ton domaine est **www.clesducabanon.fr** (SANS "les")

J'ai trouvé **122 occurrences** du mauvais domaine dans 24 fichiers.

## 🔧 Solution Rapide (5 min)

### Méthode 1 : Rechercher-Remplacer dans VS Code (RECOMMANDÉ)

1. **Ouvre le projet** dans VS Code
2. **Appuie sur** `Ctrl+Shift+H` (Windows) ou `Cmd+Shift+H` (Mac)
3. **Rechercher** : `lesclesducabanon.fr`
4. **Remplacer par** : `clesducabanon.fr`
5. **Clique sur** "Replace All" (Tout remplacer)
6. **Répète** pour l'email :
   - Rechercher : `contact@lesclesducabanon.fr`
   - Remplacer par : `contact@clesducabanon.fr`
7. **Répète** pour la réservation :
   - Rechercher : `reservation.lesclesducabanon.fr`
   - Remplacer par : `reservation.clesducabanon.fr`

✅ **FAIT ! Tous les fichiers sont corrigés en 30 secondes** ⚡

---

### Méthode 2 : Script Find & Replace (Terminal)

Si tu es sur Mac/Linux, ouvre le Terminal dans ton dossier projet :

```bash
# Corriger le domaine principal
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.md" -o -name "*.html" -o -name "*.xml" -o -name "*.txt" \) -exec sed -i '' 's/lesclesducabanon\.fr/clesducabanon.fr/g' {} +

# Corriger l'email
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.md" -o -name "*.html" -o -name "*.xml" -o -name "*.txt" \) -exec sed -i '' 's/contact@lesclesducabanon\.fr/contact@clesducabanon.fr/g' {} +

# Corriger la réservation
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.md" -o -name "*.html" -o -name "*.xml" -o -name "*.txt" \) -exec sed -i '' 's/reservation\.lesclesducabanon\.fr/reservation.clesducabanon.fr/g' {} +
```

Sur Windows (PowerShell) :

```powershell
Get-ChildItem -Recurse -Include *.tsx,*.ts,*.md,*.html,*.xml,*.txt | ForEach-Object {
    (Get-Content $_.FullName) -replace 'lesclesducabanon\.fr', 'clesducabanon.fr' | Set-Content $_.FullName
}
```

---

## 📋 Fichiers Concernés (24 fichiers)

### Fichiers critiques (SEO) :
1. ✅ `/public/sitemap.xml` - **DÉJÀ CORRIGÉ**
2. `/public/robots.txt`
3. `/index.html`

### Composants React :
4. `/src/app/components/Contact.tsx`
5. `/src/app/components/Footer.tsx`
6. `/src/app/components/SEOHead.tsx`
7. `/src/app/components/SearchBar.tsx`
8. `/src/app/components/SearchWidget.tsx`
9. `/src/app/components/pages/ConciergerieSanary.tsx`
10. `/src/app/components/pages/VillaBordDeMer.tsx`
11. `/src/app/components/pages/NosLogements.tsx`
12. `/src/app/components/pages/NosServices.tsx`
13. `/src/app/components/pages/blog/GestionDigitaleVillesFrance.tsx`

### Pages :
14. `/src/app/pages/HomePage.tsx`
15. `/src/app/pages/ProprietairePage.tsx`
16. `/src/app/pages/VoyageursPage.tsx`
17. `/src/app/pages/ContactPage.tsx`
18. `/src/app/pages/TarifsPage.tsx`
19. `/src/app/pages/NotFoundPage.tsx`

### Documentation (non critique) :
20. `/SEO-STRATEGY.md`
21. `/SEO-OPTIMIZATIONS-COMPLETED.md`
22. `/OPTIMISATIONS-SEO-RESUME.md`
23. `/SEO-OPTIMIZATIONS-100-SCORE.md`
24. `/SEO-REACT-ROUTER-MIGRATION.md`

---

## ✅ Vérification Après Correction

Après avoir fait le remplacement, vérifie :

```bash
# Chercher s'il reste des occurrences (doit retourner 0)
grep -r "lesclesducabanon.fr" src/ public/ index.html
```

Si la commande ne retourne rien → ✅ **Parfait !**

---

## 📞 Informations Correctes

✅ **Domaine** : `www.clesducabanon.fr`  
✅ **Email** : `contact@clesducabanon.fr`  
✅ **Réservation** : `reservation.clesducabanon.fr`  
✅ **Téléphone** : `+33 6 25 40 14 80`  

---

## ⚠️ IMPORTANT

**FAIS CETTE CORRECTION AVANT DE DÉPLOYER SUR VERCEL !**

Sinon, Google va indexer le mauvais domaine et ça va créer des problèmes SEO.

---

## 🎉 Une Fois Corrigé

Tu peux déployer sur Vercel en toute sérénité ! 🚀
