# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features dark mode, smooth animations, and a clean design inspired by modern portfolio standards.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Automatic theme detection with manual toggle option
- **Smooth Navigation**: Anchor links with smooth scrolling between sections
- **Expandable Experience Cards**: Interactive experience section with detailed information
- **Project Showcase**: Grid layout displaying your best work
- **Skills Section**: Organized by category with visual progress indicators
- **Contact Section**: Multiple ways to get in touch with social links

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Modern CSS** - Flexbox, Grid, and CSS Variables

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gh-portfolio-website.git
cd gh-portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Your Information

1. **Hero Section** ([src/components/Hero.tsx](src/components/Hero.tsx)):
   - Update your name, title, and description

2. **About Section** ([src/components/About.tsx](src/components/About.tsx)):
   - Add your bio, education, and location

3. **Experience Section** ([src/components/Experience.tsx](src/components/Experience.tsx)):
   - Add your work experience with descriptions and technologies

4. **Projects Section** ([src/components/Projects.tsx](src/components/Projects.tsx)):
   - Showcase your projects with descriptions, technologies, and links

5. **Skills Section** ([src/components/Skills.tsx](src/components/Skills.tsx)):
   - Update your skills organized by categories

6. **Contact Section** ([src/components/Contact.tsx](src/components/Contact.tsx)):
   - Add your email and social media links

### Customize Colors

Edit [tailwind.config.js](tailwind.config.js) to change the color scheme:

```javascript
colors: {
  primary: {
    light: '#ffffff',  // Light mode background
    dark: '#1e1e2e',   // Dark mode background
  },
  accent: {
    light: '#3b82f6',  // Light mode accent
    dark: '#89b4fa',   // Dark mode accent
  },
  // ... more colors
}
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Import your repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`

## Project Structure

```
gh-portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation bar with theme toggle
│   │   ├── Hero.tsx        # Hero/landing section
│   │   ├── About.tsx       # About me section
│   │   ├── Experience.tsx  # Work experience with expandable cards
│   │   ├── Projects.tsx    # Project showcase grid
│   │   ├── Skills.tsx      # Skills organized by category
│   │   └── Contact.tsx     # Contact information and footer
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [Heroicons](https://heroicons.com/)
- Color scheme inspired by Catppuccin theme