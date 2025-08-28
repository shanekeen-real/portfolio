import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of placeholder images to create
const placeholderImages = [
  // Hero images
  'unqueue-hero.jpg',
  'infinitevps-hero.jpg',
  'translatebot-hero.jpg',
  'wrona-hero.jpg',
  
  // Research artifacts
  'unqueue-persona.jpg',
  'unqueue-competitive-analysis.jpg',
  'infinitevps-user-journey.jpg',
  'infinitevps-pain-points.jpg',
  'translatebot-user-research.jpg',
  'translatebot-command-analysis.jpg',
  'wrona-stakeholder-interviews.jpg',
  'wrona-competitor-analysis.jpg',
  
  // Design artifacts
  'unqueue-wireframes.jpg',
  'unqueue-user-flow.jpg',
  'unqueue-final-ui.jpg',
  'infinitevps-dashboard-wireframes.jpg',
  'infinitevps-monitoring-ui.jpg',
  'infinitevps-final-dashboard.jpg',
  'translatebot-command-flow.jpg',
  'translatebot-dashboard-wireframes.jpg',
  'translatebot-final-ui.jpg',
  'wrona-design-system.jpg',
  'wrona-3d-mockups.jpg',
  'wrona-final-website.jpg'
];

// Create a simple SVG placeholder
function createSVGPlaceholder(filename: string, width = 800, height = 600) {
  const title = filename.replace('.jpg', '').replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());
  
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f3f4f6"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#6b7280" text-anchor="middle" dominant-baseline="middle">
      ${title}
    </text>
    <text x="50%" y="70%" font-family="Arial, sans-serif" font-size="16" fill="#9ca3af" text-anchor="middle" dominant-baseline="middle">
      Placeholder Image
    </text>
  </svg>`;
}

// Ensure the public/assets directory exists
const assetsDir = path.join(__dirname, '../public/assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Generate placeholder images
placeholderImages.forEach(filename => {
  const filepath = path.join(assetsDir, filename);
  
  // Create SVG placeholder
  const svgContent = createSVGPlaceholder(filename);
  fs.writeFileSync(filepath.replace('.jpg', '.svg'), svgContent);
  
  console.log(`Created placeholder: ${filename.replace('.jpg', '.svg')}`);
});

console.log('\nPlaceholder images generated successfully!');
console.log('Note: These are SVG placeholders. Replace with actual images when available.');
