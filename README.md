
# Mohammed Ateeq - Interactive Portfolio

A cutting-edge, interactive portfolio website showcasing modern web development skills through immersive 3D elements, advanced animations, and creative visual effects. This project demonstrates expertise in AI engineering and full-stack development with a focus on innovative user experiences.

## ✨ Features

- **3D Interactive Elements**: Dynamic WebGL canvas with floating geometries and particle systems
- **Advanced Animations**: Smooth scroll effects, micro-interactions, and page transitions
- **Custom Cursor**: Magnetic cursor with trail effects for enhanced interactivity
- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Loading Experience**: Animated loading screen with progress indicators
- **Contact Form**: Functional contact form with real-time validation

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Framer Motion** - Advanced animation library

### 3D Graphics & Visualization
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber

### State Management & Utilities
- **React Query** - Data fetching and caching
- **React Hook Form** - Form handling
- **React Router** - Client-side routing
- **React Intersection Observer** - Scroll-based animations

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── AboutSection.tsx # About section with skills
│   ├── ContactSection.tsx # Contact form and info
│   ├── CustomCursor.tsx # Animated cursor component
│   ├── HeroSection.tsx  # Landing section with 3D elements
│   ├── LoadingScreen.tsx # Initial loading animation
│   ├── Navigation.tsx   # Main navigation bar
│   ├── ProjectsSection.tsx # Portfolio projects showcase
│   └── SkillsSection.tsx # Technical skills display
├── pages/               # Page components
│   ├── Index.tsx        # Main portfolio page
│   └── NotFound.tsx     # 404 error page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── App.tsx              # Root application component
└── main.tsx             # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Design Features

### Visual Effects
- Gradient text animations
- Glassmorphism UI elements
- Particle systems and floating objects
- Smooth scroll with parallax effects
- Dynamic lighting in 3D scenes

### Interactive Elements
- Hover animations on all clickable elements
- Custom cursor that responds to interactive elements
- Form validation with real-time feedback
- Smooth section transitions

### Performance Optimizations
- Code splitting with React.lazy
- Optimized 3D rendering with LOD
- Compressed assets and images
- Minimal bundle size with tree shaking

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🔧 Customization

### Modifying Content
- Update personal information in component files
- Replace project data in `ProjectsSection.tsx`
- Modify skills in `SkillsSection.tsx`
- Update contact information in `ContactSection.tsx`

### Styling Changes
- Modify Tailwind classes for quick styling updates
- Update theme colors in `tailwind.config.ts`
- Customize animations in component files

### 3D Elements
- Modify geometries and materials in `HeroSection.tsx`
- Adjust lighting and camera positions
- Add new 3D objects or animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Mohammed Ateeq - AI Engineer & Full-Stack Developer

- Email: mohammed.ateeq@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]
