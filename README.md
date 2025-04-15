# Vue 3 + Vite + TypeScript + Tailwind CSS Multi-Layout Template

A modern Vue.js template featuring multiple layout designs with Tailwind CSS styling. This template provides a solid foundation for building scalable Vue 3 applications with TypeScript support.

## Features

- **Vue 3** - The latest version of Vue.js with Composition API
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Multiple Layouts**:
  - Default Layout - Clean and simple design
  - Admin Layout - Dashboard with sidebar navigation
  - Merchant Layout - E-commerce focused interface
- **Dynamic Routing** - Automatic route registration
- **TypeScript** - Full type safety
- **Responsive Design** - Mobile-friendly layouts

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── default/      # Default layout components
│   ├── admin/        # Admin layout components
│   └── merchant/     # Merchant layout components
├── layouts/          # Layout templates
│   ├── DefaultLayout.vue
│   ├── AdminLayout.vue
│   └── MerchantLayout.vue
├── views/            # Page components
│   ├── default/      # Default layout pages
│   ├── admin/        # Admin layout pages
│   └── merchant/     # Merchant layout pages
└── router/           # Route configuration
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Routes

- `/` - Landing page with navigation cards
- `/home` - Default layout home page
- `/admin` - Admin dashboard
- `/merchant` - Merchant products page

## Development

### Adding New Pages

1. Create a new `.vue` file in the appropriate views directory
2. The router will automatically register the route based on the file path
3. Access the new page using the corresponding URL path

### Customizing Layouts

Each layout (`DefaultLayout.vue`, `AdminLayout.vue`, `MerchantLayout.vue`) can be customized to match your needs:

- Modify the navigation structure
- Update the styling using Tailwind CSS classes
- Add new layout-specific components

## Technologies

- [Vue 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vue Router](https://router.vuejs.org/)

## TypeScript Support

The template includes full TypeScript support with:
- Vue 3 type definitions
- Router type safety
- Component type checking
- Strict type checking enabled

## Contributing

Feel free to submit issues and enhancement requests!
