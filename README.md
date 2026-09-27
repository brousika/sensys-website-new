# SenSys Aéro — site vitrine (dossier de départ)

Site statique en HTML/CSS/JS simple. Point de départ pour développer avec **Claude Code**.

## Fichiers
```
index.html      Landing (hero + « Parlons-en » + pied de page)
contact.html    Page Contact (coordonnées + formulaire)
apropos.html    Page À propos (mission, valeurs, CTA)
styles.css      Feuille de style partagée (palette dans :root)
script.js       Menu mobile + hook du formulaire
CLAUDE.md       Charte du projet, lue automatiquement par Claude Code
```

## Prévisualiser en local
Ouvrir `index.html` dans un navigateur suffit. Pour un vrai serveur local :
```
python3 -m http.server 8000
# puis http://localhost:8000
```
(Ou demande à Claude Code : « démarre un serveur local pour prévisualiser le site ».)

## Utiliser avec Claude Code
1. Place ce dossier comme dossier du projet, puis lance `claude` dedans.
2. `CLAUDE.md` est lu automatiquement : la charte de marque est déjà chargée.
3. Itère en langage naturel, p. ex. :
   - « Ajoute la version anglaise dans /en. »
   - « Remplace le schéma du hero par la photo `hero.jpg`. »
   - « Passe le logo placeholder par le vrai logo. »

## Formulaire (acheminement par courriel + anti-pourriel)
Le formulaire est branché sur **Web3Forms** (`action="https://api.web3forms.com/submit"`,
clé `access_key` dans les deux `<form>`). L'envoi se fait en AJAX (`script.js`) : le
visiteur reste sur la page et voit un message de confirmation, sans rechargement.

Anti-pourriel : champ honeypot caché (`name="botcheck"`), invisible pour un humain
(voir `.hp-field` dans `styles.css`) — s'il est rempli, le JS abandonne l'envoi.
Pour renforcer davantage : active le reCAPTCHA de Web3Forms depuis leur tableau de bord.

Pour changer la clé `access_key` ou l'adresse de réception, gère-les depuis
[web3forms.com](https://web3forms.com).

## Mettre en ligne
Hébergement statique recommandé : **Netlify**, **Vercel** ou **Cloudflare Pages**.
Glisser-déposer le dossier, ou connecter un dépôt Git. Puis pointer ton domaine dessus.

## À remplacer avant la mise en ligne
- Logo placeholder → vrai logo Bluzetech/SenSys.
- `info@sensysaero.com` → adresse réelle.
- Schémas SVG du hero / À propos → photos de structures composites.
- Pages « Mentions légales » et « Confidentialité » (liens en pied de page).
