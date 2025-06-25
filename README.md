# TechSphere Digital Forge

A modern, responsive website for a digital agency specializing in web design, development, and software engineering services. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Engaging UI components with Framer Motion animations
- **Professional Services Showcase**: Dedicated sections for services, portfolio, and testimonials
- **Contact Integration**: Built-in contact forms and call-to-action elements
- **SEO Optimized**: Structured for search engine optimization
- **Performance Focused**: Optimized for fast loading and smooth user experience

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Charts**: Recharts
- **Notifications**: Sonner toast notifications

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd techsphere-digital-forge
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application.

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   ├── Hero.tsx        # Hero section component
│   ├── About.tsx       # About section component
│   ├── Services.tsx    # Services showcase component
│   ├── Portfolio.tsx   # Portfolio section component
│   ├── Testimonials.tsx # Testimonials component
│   ├── Contact.tsx     # Contact form component
│   ├── Footer.tsx      # Footer component
│   └── ...             # Other page sections
├── pages/              # Page components
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
└── main.tsx           # Application entry point
```

## 🎨 Design System

The project uses a custom design system built on top of Tailwind CSS with:

- **Color Palette**: Primary blue (#1A237E), accent cyan (#00B8D9), and neutral grays
- **Typography**: Custom font stack with proper hierarchy
- **Components**: Consistent component patterns using shadcn/ui
- **Animations**: Smooth transitions and micro-interactions with Framer Motion

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Vite Configuration
The project uses Vite with the following configuration:
- React SWC plugin for fast refresh
- Path aliases for clean imports (`@/` points to `src/`)
- Development server on port 8080
- Component tagging in development mode

### Tailwind Configuration
Custom Tailwind configuration with:
- Extended color palette
- Custom font families
- Animation utilities
- Responsive breakpoints

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting Platforms
- **Vercel**: Optimized for React applications
- **Netlify**: Great for static sites with form handling
- **GitHub Pages**: Free hosting for open source projects
- **AWS S3 + CloudFront**: Enterprise-grade hosting

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Updates

Stay updated with the latest changes by:
- Watching the repository
- Following the release notes
- Checking the changelog

---

**TechSphere Digital Forge** - Transforming businesses through innovative digital solutions.
