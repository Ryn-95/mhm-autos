Je vais reconstruire le projet **MHM Autos** de zéro, avec une architecture Next.js 14 (App Router) ultra-moderne, un design système "Apple/Tesla" (Bento grids, Glassmorphism, Full Radius), et une stack technique optimisée pour le SEO et la performance.

Voici le plan d'exécution détaillé :

### Phase 1 : Initialisation & Architecture (Fondations)
1.  **Scaffolding :** Création du projet Next.js propre (TypeScript, Tailwind, ESLint).
2.  **Configuration Design System :**
    *   Définition des couleurs : Noir Profond (`#0a0a0a`), Blanc Pur, Or Premium (`#D4AF37` inspiré du logo).
    *   Typographie : Intégration de la police **Outfit** (moderne, géométrique) ou **Inter**.
    *   Configuration Tailwind : Extension des `borderRadius` (xl, 2xl, 3xl, full) et des animations.
3.  **Installation des librairies :** `lucide-react` (icônes), `framer-motion` (animations fluides), `clsx/tailwind-merge` (gestion des classes).

### Phase 2 : Composants UI "Atomiques" (Design 2026)
Création de composants réutilisables et stylisés :
1.  **`ui/Button`** : Forme pilule (`rounded-full`), effets de hover subtils, variants (Primary Gold, Secondary Glass).
2.  **`ui/Container` & `ui/Section`** : Pour gérer les espacements et le responsive de manière uniforme.
3.  **`ui/Card`** : Style "Bento", fond sombre avec bordures subtiles (`border-white/10`), effet de flou (backdrop-blur).
4.  **`ui/Input` & `ui/Label`** : Champs de formulaire épurés, sans bordures agressives.

### Phase 3 : Structure & Navigation (Layout)
1.  **Smart Navbar :**
    *   Comportement : Large au sommet, se transforme en "pilule" flottante au scroll.
    *   Contenu : Logo à gauche, Onglets centrés (Accueil, Services, Contact), CTA "Prendre RDV" à droite.
    *   Mobile : Menu burger animé full screen.
2.  **Footer Premium :**
    *   Grille complète avec Infos (Adresse, Tél, Mail), Liens rapides, Horaires, et Réseaux (Snapchat).

### Phase 4 : Fonctionnalité WhatsApp Booking
1.  **Formulaire Intelligent :**
    *   Champs : Nom, Modèle Véhicule, Type de problème/Service, Date souhaitée.
2.  **Logique de Redirection :**
    *   Construction d'un message pré-rempli.
    *   Redirection automatique vers l'API WhatsApp (`wa.me`) pour envoyer la demande directement au garage.

### Phase 5 : Construction des Pages (Contenu & SEO)
1.  **Page d'Accueil (`/`) :**
    *   **Hero Section :** Vidéo ou Image haute qualité (Voiture allemande/Luxe) + Titre accrocheur + CTA.
    *   **Bento Grid Services :** Mise en avant visuelle des spécialités (Boîte DSG, Diagnostic, Import/Export).
    *   **Marques :** Bandeau des logos (VW, Audi, Skoda).
2.  **Page Services (`/services`) :**
    *   Détail des prestations avec icônes et descriptions claires.
3.  **Page Contact (`/contact`) :**
    *   Intégration du formulaire WhatsApp.
    *   Carte (Map design sombre) et Coordonnées.

### Phase 6 : Vérification & Optimisation
1.  **Audit Mobile :** Vérification que tout est tactile et fluide sur mobile.
2.  **SEO Check :** Métadonnées (Titre, Description) pour chaque page.
3.  **Tests :** Validation du formulaire et de la navigation.

Je commencerai par l'initialisation du projet et la configuration du design system. Confirmez-vous ce plan ?