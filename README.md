# Shane's Portfolio - UI/UX Designer & Developer

A modern, responsive portfolio website showcasing UI/UX design projects and case studies. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Project Case Studies**: Detailed case study pages for each project with:
  - Project overview and problem statement
  - Research and discovery process
  - Design and ideation artifacts
  - Outcomes and key learnings
- **Image Lightbox**: Full-screen image viewer for project artifacts
- **Performance Optimized**: Fast loading with Next.js App Router and static generation
- **SEO Friendly**: Proper metadata and structured content

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI + shadcn/ui
- **Image Lightbox**: yet-another-react-lightbox
- **Deployment**: Vercel (recommended)

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── projects/          # Project case studies
│       └── [slug]/        # Dynamic project pages
│           └── page.tsx
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── AppContainer.tsx  # Main layout wrapper
│   └── Footer.tsx        # Footer component
├── lib/                  # Utilities and data
│   ├── data.ts          # Project data and types
│   └── utils.ts         # Utility functions
└── styles/              # Global styles
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Adding New Projects

1. **Update the data file** (`src/lib/data.ts`):
   - Add a new project object to the `projects` array
   - Include all required fields: title, description, client, role, timeline, tools, etc.
   - Add image paths for cover, hero, and artifact images

2. **Add project images**:
   - Place images in `public/assets/`
   - Update image paths in the project data
   - Use the placeholder generator script for testing:
     ```bash
     node scripts/generate-placeholders.ts
     ```

3. **Project structure**:
   Each project should include:
   - **Overview**: Problem statement and project goals
   - **Challenge**: Key constraints and objectives
   - **Research**: User research and discovery process
   - **Design**: Design process and artifacts
   - **Outcome**: Results, metrics, and learnings

## Customization

### Content
- Update personal information in `src/app/page.tsx`
- Modify project data in `src/lib/data.ts`
- Update metadata in `src/app/layout.tsx`

### Styling
- Modify Tailwind classes in components
- Update color scheme in `tailwind.config.ts`
- Customize animations in Framer Motion components

### Images
- Replace placeholder SVGs with actual project images
- Optimize images for web (recommended: WebP format)
- Update image paths in project data

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **SEO**: Full metadata and structured data
- **Accessibility**: WCAG 2.1 AA compliant

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Email**: contact@shane.technology
- **Website**: [shane.technology](https://shane.technology)
- **LinkedIn**: [Your LinkedIn]
- **Dribbble**: [Your Dribbble]

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
