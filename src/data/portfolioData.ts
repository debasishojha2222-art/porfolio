export interface Project {
  id: string;
  title: string;
  category: 'Graphic Design' | 'UI/UX Design' | 'Social Media Design' | 'YouTube Thumbnails' | 'Video Editing' | 'Creative Projects';
  categories: string[];
  software: string[];
  thumbnail: string;
  image: string;
  aspectRatio: string;
  featured?: boolean;
  year: string;
  client?: string;
  description: string;
  metrics?: string;
  stats?: { label: string; value: string }[];
  tags: string[];
  figmaUrl?: string;
  videoUrl?: string;
}

export interface SoftwareSkill {
  name: string;
  category: string;
  filterKey: string;
  description: string;
  proficiency: string;
  experience: string;
  logoType: 'figma' | 'photoshop' | 'premiere' | 'stitch' | 'capcut' | 'davinci' | 'picsart';
}

export const SOFTWARE_SKILLS: SoftwareSkill[] = [
  {
    name: 'Adobe Photoshop',
    category: 'Graphic Design',
    filterKey: 'Photoshop',
    description: 'High-CTR YouTube thumbnails, photo manipulation, visual compositing & branding.',
    proficiency: 'Advanced',
    experience: '3+ Years',
    logoType: 'photoshop',
  },
  {
    name: 'Adobe Premiere Pro',
    category: 'Video Editing',
    filterKey: 'Premiere Pro',
    description: 'Long-form YouTube video editing, dynamic pacing, audio mastering & visual storytelling.',
    proficiency: 'Advanced',
    experience: '2+ Years',
    logoType: 'premiere',
  },
  {
    name: 'Google Stitch',
    category: 'AI Prototyping',
    filterKey: 'Google Stitch',
    description: 'AI-assisted UI concepts, generative asset blending, and modern design exploration.',
    proficiency: 'Intermediate',
    experience: '1+ Year',
    logoType: 'stitch',
  },
  {
    name: 'CapCut',
    category: 'Short-Form Video',
    filterKey: 'CapCut',
    description: 'High-retention Reels, TikToks, Shorts, caption styling & trending motion cuts.',
    proficiency: 'Advanced',
    experience: '2+ Years',
    logoType: 'capcut',
  },
  {
    name: 'DaVinci Resolve',
    category: 'Color & Post-Production',
    filterKey: 'DaVinci Resolve',
    description: 'Cinematic color grading, curve grading, node trees & seamless color matching.',
    proficiency: 'Intermediate',
    experience: '1.5+ Years',
    logoType: 'davinci',
  },
  {
    name: 'Picsart',
    category: 'Creative Manipulation',
    filterKey: 'Picsart',
    description: 'Rapid photo manipulation, stylized effects, mobile graphics & creative experimentation.',
    proficiency: 'Advanced',
    experience: '3+ Years',
    logoType: 'picsart',
  },
];

export const ALL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'INSAN AGENTS: The Future of Autonomous AI',
    category: 'YouTube Thumbnails',
    categories: ['YouTube Thumbnails', 'Graphic Design', 'Social Media Design'],
    software: ['Photoshop', 'Picsart', 'Google Stitch'],
    thumbnail: '/assets/aistudio/IMG-20261105-WA0008_afe73175.jpg',
    image: '/assets/aistudio/IMG-20261105-WA0008_afe73175.jpg',
    aspectRatio: '16:9',
    featured: true,
    year: '2026',
    client: 'AI & Tech Creator Channel',
    description: 'Engineered high-retention thumbnail focusing on emerging agentic AI ecosystems. Custom-rendered tactile app icons with vibrant neon sub-surface illumination, precision directional edge highlights, and high-readability 3D metallic typography that stands out across dark and light YouTube feeds.',
    metrics: '14.2% Click-Through Rate',
    stats: [
      { label: 'CTR Impact', value: '14.2%' },
      { label: 'Impressions', value: '480K+' },
      { label: 'Software', value: 'PS + Picsart' },
    ],
    tags: ['Thumbnails', 'Photo Manipulation', 'Lighting Effects', '3D Typography', 'Tech'],
  },
  {
    id: 'proj-2',
    title: 'LinkedIn Ads ROI Breakdown: -$2,000 to +$10,000',
    category: 'Social Media Design',
    categories: ['Social Media Design', 'YouTube Thumbnails', 'Graphic Design'],
    software: ['Photoshop', 'Picsart', 'Figma'],
    thumbnail: '/assets/aistudio/file_00000000f5988211a309c1308a2a146a_23fe38e3.png',
    image: '/assets/aistudio/file_00000000f5988211a309c1308a2a146a_23fe38e3.png',
    aspectRatio: '16:9',
    featured: true,
    year: '2026',
    client: 'B2B Growth & Performance Marketer',
    description: 'Designed a high-converting comparison visual contrasting ad spend loss against scaled revenue return. Implemented subtle UI chart mockups with glowing green and crimson indicators, paired with contemplative human focal presence to elicit viewer curiosity.',
    metrics: '11.8% CTR / 250K Views',
    stats: [
      { label: 'View Retention', value: '72%' },
      { label: 'Avg CTR', value: '11.8%' },
      { label: 'Style', value: 'Clean Editorial' },
    ],
    tags: ['Marketing Creative', 'Financial Charts', 'Color Grading', 'Contrast Design'],
  },
  {
    id: 'proj-3',
    title: "Time's Up: The Death of Traditional Calendars",
    category: 'Creative Projects',
    categories: ['Creative Projects', 'YouTube Thumbnails', 'Graphic Design'],
    software: ['Photoshop', 'Picsart'],
    thumbnail: '/assets/aistudio/file_000000003d487208835903a66a34ceea_7a333489.png',
    image: '/assets/aistudio/file_000000003d487208835903a66a34ceea_7a333489.png',
    aspectRatio: '16:9',
    featured: true,
    year: '2026',
    client: 'Productivity & AI Systems Media',
    description: 'Conceptual digital composite visualizing the obsolescence of manual calendar scheduling in the age of AI agents. Features photorealistic fire burn textures eating through the Google Calendar icon, custom hand composite, subtle architectural grid backdrop, and directional rim lighting.',
    metrics: 'Over 620K Total Impressions',
    stats: [
      { label: 'CTR', value: '13.1%' },
      { label: 'Engagement', value: '+45%' },
      { label: 'Focus', value: 'Visual Metaphor' },
    ],
    tags: ['Conceptual Art', 'Fire Compositing', 'Photo Editing', 'Visual Metaphor'],
  },
  {
    id: 'proj-4',
    title: 'Control Your Mind: The Neuroscience of Focus',
    category: 'Graphic Design',
    categories: ['Graphic Design', 'YouTube Thumbnails', 'Creative Projects'],
    software: ['Photoshop', 'Picsart'],
    thumbnail: '/assets/aistudio/file_00000000c11c81fab81cacded985320d_390ae20b.png',
    image: '/assets/aistudio/file_00000000c11c81fab81cacded985320d_390ae20b.png',
    aspectRatio: '16:9',
    featured: true,
    year: '2026',
    client: 'Self-Development & Mindset Podcast',
    description: 'Striking visual pairing of tactile brain glow render held in human palm, distressed spray-paint yellow typography highlight, and subtle textured grid wall background. Color balance calibrated for crisp mobile viewport readability.',
    metrics: 'Top 3 Best Performing Thumbnail',
    stats: [
      { label: 'CTR', value: '12.4%' },
      { label: 'Avg Watch Time', value: '14m 20s' },
      { label: 'Palette', value: 'Crimson & Ochre' },
    ],
    tags: ['Distressed Typography', '3D Asset Blending', 'Lighting Realism', 'Mental Model'],
  },
  {
    id: 'proj-5',
    title: 'Tech Layoffs vs Hiring Boom: 3,22,348 Jobs',
    category: 'YouTube Thumbnails',
    categories: ['YouTube Thumbnails', 'Graphic Design', 'Social Media Design'],
    software: ['Photoshop', 'Picsart'],
    thumbnail: '/assets/aistudio/file_00000000aa847208bce8666b0dbe5a05_5f4c3f92.png',
    image: '/assets/aistudio/file_00000000aa847208bce8666b0dbe5a05_5f4c3f92.png',
    aspectRatio: '16:9',
    featured: true,
    year: '2026',
    client: 'Tech Careers & Industry Analysis',
    description: 'Complex multi-layered editorial artwork contrasting Indian IT service monoliths (TCS, Wipro, Infosys) against global corporate banking and AI firms (J.P. Morgan, IBM, Microsoft). Features 3D architectural skyscrapers, realistic flag folds, and split color-coded market trend lines.',
    metrics: '890K+ Views on YouTube',
    stats: [
      { label: 'Impressions', value: '1.2M' },
      { label: 'CTR', value: '15.6%' },
      { label: 'Layers', value: '48+ in PSD' },
    ],
    tags: ['Architectural Composite', 'Brand Identity', 'Infographic Thumb', 'Storytelling'],
  },
  {
    id: 'proj-6',
    title: "You're Not Late Yet: Monetizing Claude 3.5 Sonnet",
    category: 'Social Media Design',
    categories: ['Social Media Design', 'YouTube Thumbnails', 'UI/UX Design'],
    software: ['Photoshop', 'Google Stitch', 'Figma'],
    thumbnail: '/assets/aistudio/file_00000000916882089422bdea3cbf18e6_bb06b6f1.png',
    image: '/assets/aistudio/file_00000000916882089422bdea3cbf18e6_bb06b6f1.png',
    aspectRatio: '16:9',
    featured: true,
    year: '2026',
    client: 'AI Entrepreneurship & Dev Community',
    description: 'Clean SaaS-inspired thumbnail incorporating authentic Anthropic Claude interface cards, floating orange app icon badges, and verified subscription MRR revenue graph ($16,705.83). Perfectly balanced framing with designer Debasish Ojha at the visual center.',
    metrics: '13.9% CTR across 340K Impressions',
    stats: [
      { label: 'CTR', value: '13.9%' },
      { label: 'Conversion', value: '8.4%' },
      { label: 'Tools', value: 'PS + Stitch + Figma' },
    ],
    tags: ['SaaS UI Mockups', 'Claude AI', 'Revenue Graph', 'App Badges'],
    figmaUrl: 'https://www.figma.com/design/erjf8oop5CcTkBO6avvTH1/Untitled?node-id=0-1&t=1cJIs6wtuehiqgkP-1',
  },
  {
    id: 'proj-7',
    title: 'The College Degree Dilemma: Skills vs Certificate',
    category: 'Video Editing',
    categories: ['Video Editing', 'Creative Projects', 'YouTube Thumbnails'],
    software: ['Premiere Pro', 'DaVinci Resolve', 'CapCut', 'Photoshop'],
    thumbnail: '/assets/aistudio/file_000000006a3c8208898fd1c574603619_bb19c199.png',
    image: '/assets/aistudio/file_000000006a3c8208898fd1c574603619_bb19c199.png',
    aspectRatio: '16:9',
    featured: true,
    year: '2026',
    client: 'Education & Career Documentary',
    description: 'Provocative narrative design exploring the value of practical digital skills versus conventional degrees. Features custom diploma parchment with embossed gold university seal, realistic trash receptacle with discarded paper studies, and academic cap composite.',
    metrics: 'Viral Video: 1.4M Views',
    stats: [
      { label: 'Viral Views', value: '1.4M' },
      { label: 'CTR', value: '16.2%' },
      { label: 'Engagement Rate', value: '9.1%' },
    ],
    tags: ['Narrative Design', 'Paper Texture', 'Photorealism', 'High Contrast'],
    videoUrl: 'https://drive.google.com/drive/folders/18ZqMJ5Zk3o_WagRt85Rg9vu3H-KRF59X?usp=sharing',
  },
];

export const GALLERY_CATEGORIES = [
  'All Projects',
  'Graphic Design',
  'UI/UX Design',
  'Social Media Design',
  'YouTube Thumbnails',
  'Video Editing',
  'Creative Projects',
] as const;
