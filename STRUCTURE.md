# Consultech - Project Structure Guide

## 📁 Folder Structure

```
src/
├── components/               # All Astro components organized by category
│   ├── common/              # Reusable components (Header, Footer, etc.)
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   └── WhatsAppButton.astro
│   ├── sections/            # Full-page section components
│   │   ├── Hero.astro
│   │   ├── Portfolio.astro
│   │   ├── WhyUs.astro
│   │   ├── AlurPengerjaan.astro
│   │   ├── Harga.astro
│   │   ├── Testimonials.astro
│   │   ├── SocialProof.astro
│   │   └── CTA.astro
│   └── modals/              # Modal and popup components
│       └── ExitPopup.astro
├── layouts/                 # Layout templates
│   └── MainLayout.astro
├── pages/                   # Astro pages (routes)
│   └── index.astro
├── styles/                  # Global styles
│   └── global.css
├── utils/                   # Shared utilities and constants
│   ├── constants.ts         # App-wide constants and configuration
│   └── helpers.ts           # Reusable utility functions
├── types/                   # TypeScript type definitions
│   └── index.ts
└── ...
```

## 🗂️ Directory Guidelines

### `/components/common/`
- **Purpose**: Reusable components used across multiple pages
- **Examples**: Navigation bars, footers, buttons, headers
- **When to add**: Components that appear on every page or multiple pages

### `/components/sections/`
- **Purpose**: Large, full-width section components
- **Examples**: Hero sections, pricing tables, testimonials, portfolios
- **When to add**: Major page sections that form part of the landing page

### `/components/modals/`
- **Purpose**: Modal dialogs and popup components
- **Examples**: Exit popups, contact modals, alerts
- **When to add**: Components that overlay on top of page content

### `/layouts/`
- **Purpose**: Layout wrappers for pages
- **Examples**: Main layout with header/footer structure
- **When to add**: New page layout variations needed

### `/pages/`
- **Purpose**: Astro page files (automatically creates routes)
- **Examples**: index.astro, about.astro, contact.astro
- **When to add**: New pages or routes in the application

### `/utils/`
- **Purpose**: Shared TypeScript/JavaScript utilities
- **Files**:
  - `constants.ts`: App configuration, brand info, links
  - `helpers.ts`: Reusable functions (formatting, utilities)
- **When to add**: Logic needed across multiple components

### `/types/`
- **Purpose**: TypeScript type definitions
- **When to add**: Common types or interfaces used across the app

## 💡 Best Practices

### 1. **Component Organization**
- Keep components small and focused on a single responsibility
- Use clear, descriptive names
- Group related components together

### 2. **Imports**
```astro
---
// ✅ Good: Organized by category
import Navbar from '../components/common/Navbar.astro';
import Hero from '../components/sections/Hero.astro';
import { WHATSAPP_LINK } from '../utils/constants';
import { formatCurrency } from '../utils/helpers';

// ❌ Avoid: Scattered imports
import Navbar from '../components/Navbar.astro';
import Hero from '../Hero.astro';
```

### 3. **Props & Types**
```astro
---
interface Props {
  whatsappLink: string;
  title?: string;
}

const { whatsappLink, title = 'Default' } = Astro.props;
---
```

### 4. **Constants**
- Store all app configuration in `/utils/constants.ts`
- Never hardcode URLs, colors, or copy
- Use constants for consistency

### 5. **Scaling**
When the project grows:
- Split sections into smaller sub-components: `sections/Hero/` folder
- Add feature-specific utils: `utils/seo/`, `utils/validation/`
- Organize types by domain: `types/product.ts`, `types/user.ts`

## 🚀 Adding New Features

### Adding a new section:
1. Create file in `/components/sections/`
2. Import it in `/pages/index.astro`
3. Place in the correct page order

### Adding a new page:
1. Create file in `/pages/yourpage.astro`
2. Import layout and components
3. Use existing layout or create new one

### Adding a utility function:
1. Add to `/utils/helpers.ts`
2. Export it
3. Import where needed: `import { functionName } from '../utils/helpers'`

## 📦 Export Organization

Example of how to structure component exports:

```astro
---
// Import core dependencies first
import MainLayout from '../layouts/MainLayout.astro';

// Then import components, organized by category
import { Navbar, Footer, WhatsAppButton } from '../components/common/';
import { Hero, Portfolio, Harga } from '../components/sections/';
import { ExitPopup } from '../components/modals/';

// Finally, import utilities
import { WHATSAPP_LINK } from '../utils/constants';
import { formatCurrency } from '../utils/helpers';
---
```

## 🔄 Migration Guide

If moving from old flat structure:
- Components in old root → Categorize by function
- Common components → `/components/common/`
- Page sections → `/components/sections/`
- Overlays/modals → `/components/modals/`
- Update all imports in `/pages/` files

---

**Last Updated**: 2024
**Structure Type**: Feature-based, Scalable
