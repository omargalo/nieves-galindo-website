# 🍦 Nieves Galindo | Zicatela

Sitio web oficial de **Nieves Galindo**, un legado de tres generaciones de tradición en la elaboración de nieves de garrafa artesanales en Puerto Escondido, Oaxaca.

🌐 **[nievesgalindo.com](https://nievesgalindo.com)**

## 📍 Ubicación

Nos encontramos frente al mar en **Playa Zicatela**, Puerto Escondido, Oaxaca, México.

- Coordenadas: `15.857667, -97.059112`
- [Ver ubicación en Google Maps](https://www.google.com/maps/search/?api=1&query=15.857667,-97.059112)

## 🌟 Sobre Nosotros

Nieves Galindo es una empresa familiar con más de tres generaciones de experiencia en la elaboración de nieves de garrafa tradicionales. Fundada en San Juan Cacahuatepec, la familia Galindo trajo su conocimiento de la naturaleza a Puerto Escondido en los 80s para deleitarnos con exquisitos sabores elaborados con frutas naturales y técnicas artesanales.

## 🛠️ Tech Stack

| Tecnología | Uso |
|:-----------|:----|
| [Astro 6](https://astro.build) | Framework — static site generation |
| [GSAP](https://gsap.com) + ScrollTrigger | Animaciones y scroll reveals |
| [Google Fonts](https://fonts.google.com) | Tipografías (Outfit + Inter) |
| [Font Awesome 6](https://fontawesome.com) | Iconos |
| Vanilla CSS | Diseño responsive con glassmorphism y efectos |

## 📁 Estructura del Proyecto

```
nieves-galindo-astro/
├── public/
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── assets/
│   │   ├── icons/           # Favicons y manifest
│   │   └── img/
│   │       ├── flavors/     # Imágenes de sabores (10)
│   │       ├── hero-zicatela.webp
│   │       ├── footer.webp
│   │       └── logo.png
│   ├── components/
│   │   ├── Navbar.astro     # Navbar glassmórfica + toggle idioma
│   │   ├── Hero.astro       # Hero full-viewport con partículas
│   │   ├── Historia.astro   # Timeline de tres generaciones
│   │   ├── Sabores.astro    # Carousel de 10 sabores con GSAP transitions
│   │   ├── Ubicacion.astro  # Card con Google Maps + WhatsApp
│   │   └── Footer.astro     # Footer con redes sociales
│   ├── layouts/
│   │   └── Layout.astro     # Shell HTML con SEO + meta tags
│   ├── pages/
│   │   └── index.astro      # Página principal
│   ├── scripts/
│   │   └── animations.ts    # GSAP ScrollTrigger orchestration
│   └── styles/
│       └── global.css       # Design system + tokens + utilidades
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|:------|:----|:----|
| Warm White | `#FEFCF9` | Fondo principal |
| Magenta | `#FF00FF` | Acento primario / sparkle |
| Cyan | `#9DF9FF` | Acento secundario / sparkle |
| Deep Navy | `#1A1A2E` | Texto principal |
| Ocean Blue | `#0077B6` | Detalles complementarios |

## ✨ Características

- ✅ Diseño responsive y moderno con estética de playa
- ✅ Animaciones GSAP (scroll reveals, entrada hero, partículas sparkle)
- ✅ Carousel de sabores con transiciones GSAP, auto-play, swipe táctil y navegación por puntos
- ✅ Glassmorphism en navbar, tarjetas y paneles
- ✅ Bilingüe (Español / Inglés) con selector de idioma
- ✅ SEO optimizado (JSON-LD, Open Graph, Twitter Card, sitemap, robots.txt)
- ✅ Schema.org structured data (`IceCreamShop`)
- ✅ Geo meta tags para SEO local
- ✅ Accesibilidad (aria-labels, prefers-reduced-motion, alt text)
- ✅ Favicon completo (SVG, ICO, Apple Touch, Web Manifest)

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependencias                             |
| `npm run dev`             | Inicia servidor local en `localhost:4321`         |
| `npm run build`           | Genera sitio de producción en `./dist/`           |
| `npm run preview`         | Vista previa del build antes de deploy            |

## 📱 Redes Sociales

- Instagram: [@nievesgalindo](https://www.instagram.com)
- Facebook: [Nieves Galindo](https://www.facebook.com/nieves.galindo.9)
- WhatsApp: [+52 954 110 2817](https://wa.me/529541102817)

## 📞 Contacto

**WhatsApp:** +52 954 110 2817
Para más información sobre nuestros sabores o para hacer pedidos especiales, ¡no dudes en contactarnos!

---

© 2026 Nieves Galindo, Puerto Escondido, Oaxaca. Todos los derechos reservados.

Hecho con 💜 en Puerto Escondido, Oaxaca, México.
