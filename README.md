# MHM Autos - Site Web Premium (2026 Edition)

Site web ultra-moderne développé pour le garage MHM Autos à Bagnolet.
Design inspiré de l'industrie automobile premium (Tesla, Mercedes) et de la tech (Apple, Airbnb).

## 🛠 Stack Technique

- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Styling** : TailwindCSS v4 + CSS Variables
- **UI Kit** : ShadCN UI (composants réutilisables)
- **Animations** : Framer Motion
- **Icons** : Lucide React

## 📂 Structure du Projet

```
mhm-autos/
├── app/                  # Pages et Layout (App Router)
│   ├── globals.css       # Design System (Couleurs, Fonts)
│   ├── layout.tsx        # Layout Principal (SEO, Font, Navbar)
│   ├── page.tsx          # Page d'Accueil
│   ├── services/         # Page Services
│   ├── contact/          # Page Contact
│   └── about/            # Page À Propos
├── components/
│   ├── ui/               # Composants de base (Button, Card, Input...)
│   └── layout/           # Navbar, Footer
├── lib/                  # Utilitaires (cn, etc.)
└── public/               # Images et Assets
```

## 🚀 Installation & Démarrage

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

3. **Ouvrir le navigateur**
   Rendez-vous sur [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

Le design repose sur un thème "Ultra Dark" premium :
- **Background** : Noir profond (#0A0A0A)
- **Foreground** : Blanc pur (#FFFFFF)
- **Accent** : Bleu électrique (pour les actions)
- **Typography** : Inter (similaire à SF Pro)

## 🔮 Suggestions d'Améliorations (Futur)

- **Prise de RDV en ligne** : Intégration de Calendly ou d'un système sur mesure connecté à l'agenda de l'atelier.
- **Espace Client** : Suivi des réparations en temps réel (photos avant/après).
- **IA Assistant** : Chatbot pour pré-diagnostiquer les pannes simples.
- **Blog Auto** : Conseils d'entretien pour le SEO local.

---

Développé avec passion pour MHM Autos.
