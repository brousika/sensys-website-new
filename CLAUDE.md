# SenSys Aéro — Site vitrine · charte pour Claude Code

Ce fichier est lu automatiquement par Claude Code. Il définit le contexte du projet
et les règles à respecter à chaque modification.

## Le projet
Site vitrine statique pour **SenSys Aéro**, jeune entreprise deeptech québécoise
(région de Québec). Technologie de **surveillance et de qualification structurelle
des matériaux composites** (fibre de carbone). Entreprise **sœur de Bluzetech**
(bluzetech.com) — le site doit visiblement appartenir à la même famille de marque.

## Objectif no 1
Faire en sorte que les visiteurs **nous écrivent** pour parler des incertitudes qu'ils
vivent avec les composites. **Tout converge vers le formulaire.**
Appel à l'action principal, répété : **« Parlez-nous de votre défi composite »**.

## Mission (accroche)
« Réduire les incertitudes qui freinent l'adoption des composites, pour que l'industrie
en exploite le plein potentiel : plus léger, plus durable, moins de gaspillage. »

## Pages
- `index.html` — landing : hero (mission + CTA) → section « Parlons-en » (formulaire, fond clair) → pied de page.
- `contact.html` — coordonnées + formulaire complet.
- `apropos.html` — qui nous sommes, lien de marque sœur Bluzetech, valeurs, bande CTA.
Rester **général** : pas de détails techniques propriétaires.

## Identité visuelle (reprise de Bluzetech)
- Logo : famille Bluzetech. Placeholder SVG en place → remplacer par le vrai logo (`bluzetech.com/images/Icon.png`).
- Typo : **Inter** (ou system-ui).
- Style : fond bleu nuit, accents bleu électrique, **boutons à contour bleuté lumineux**
  (contour translucide + fond légèrement teinté + lueur), beaucoup d'espace, texture
  fibre de carbone subtile. Sobre, technique, crédible — jamais surchargé.

### Palette (variables CSS dans styles.css)
| Rôle | Hex |
|---|---|
| Fond sombre principal | `#05101A` |
| Fonds sombres | `#071A2B`, `#061225` |
| Fonds clairs | `#FFFFFF`, `#F1F5F9` |
| Bleu accent | `#3B82F6` |
| Bleu vif / lueur | `#1A8CFF` |
| Bleus clairs | `#60A5FA`, `#93C5FD` |
| Bleu profond | `#1E40AF` |
| Texte clair | `#F8FAFC` · atténué `#94A3B8` |
| Texte foncé | `#0A0A0A` |

## Règles techniques
- **Mobile d'abord**, responsive, léger et rapide. Pas de framework lourd : HTML/CSS/JS simple.
- **Français d'abord**, structure prête pour l'anglais plus tard.
- Formulaire : Nom, Courriel, Organisation, grand champ « Décrivez l'incertitude… »,
  **acheminé par courriel**, avec **protection anti-pourriel** (honeypot + service de formulaire).
- Accessibilité : `<label>` réels, contrastes suffisants, cibles ≥ 44px.
- Réutiliser les variables CSS et les composants existants (`.btn`, `.card`, `.eyebrow`,
  `.weave`, `.info-card`) — ne pas réinventer de styles.

## À fournir par le client
Domaine, textes finaux, photos de structures composites/carbone, vrai logo.
