import { 
  Code2, Paintbrush, Zap, Cloud, TestTube, Container,
  Brain, Network, BarChart, Table, Hash, Scan, Blocks
} from 'lucide-react';

// Using lucide-react as an alternative since react-icons is having installation issues
// Mapping lucide icons to the skills that need component-based icons

const iconMap = {
  'Tailwind CSS': Paintbrush,
  'Next.js': Code2,
  'Framer Motion': Zap,
  'AWS': Cloud,
  'TensorFlow': Brain,
  'PyTorch': Network,
  'Scikit-Learn': BarChart,
  'Pandas': Table,
  'NumPy': Hash,
  'OpenCV': Scan,
  'Keras': Blocks,
  'Jest': TestTube,
};

export const SKILLS_DATA = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces.',
    skills: [
      { name: 'React', iconType: 'image', src: '/React.png', color: '#61DAFB' },
      { name: 'TypeScript', iconType: 'image', src: '/Typescript.png', color: '#3178C6' },
      { name: 'JavaScript', iconType: 'image', src: '/Javascript.png', color: '#F7DF1E' },
      { name: 'HTML', iconType: 'image', src: '/HTML.png', color: '#E34F26' },
      { name: 'CSS', iconType: 'image', src: '/CSS.png', color: '#1572B6' },
      { name: 'Tailwind CSS', iconType: 'component', component: iconMap['Tailwind CSS'], color: '#38B2AC' },
      { name: 'Next.js', iconType: 'component', component: iconMap['Next.js'], color: '#000000' },
      { name: 'Framer Motion', iconType: 'component', component: iconMap['Framer Motion'], color: '#0055FF' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Infrastructure',
    description: 'Creating robust server-side applications and APIs.',
    skills: [
      { name: 'Node.js', iconType: 'image', src: '/Nodejs.png', color: '#339933' },
      { name: 'Python', iconType: 'image', src: '/Python.png', color: '#3776AB' },
      { name: 'PostgreSQL', iconType: 'image', src: '/PostgreSQL.png', color: '#336791' },
      { name: 'MongoDB', iconType: 'image', src: '/MongoDB.png', color: '#47A248' },
      { name: 'Docker', iconType: 'image', src: '/Docker.png', color: '#2496ED' },
      { name: 'AWS', iconType: 'component', component: iconMap['AWS'], color: '#FF9900' },
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Developing intelligent models and data-driven solutions.',
    skills: [
      { name: 'TensorFlow', iconType: 'component', component: iconMap['TensorFlow'], color: '#FF6F00' },
      { name: 'PyTorch', iconType: 'component', component: iconMap['PyTorch'], color: '#EE4C2C' },
      { name: 'Scikit-Learn', iconType: 'component', component: iconMap['Scikit-Learn'], color: '#F7931E' },
      { name: 'Pandas', iconType: 'component', component: iconMap['Pandas'], color: '#150458' },
      { name: 'NumPy', iconType: 'component', component: iconMap['NumPy'], color: '#013243' },
      { name: 'OpenCV', iconType: 'component', component: iconMap['OpenCV'], color: '#5C3EE8' },
      { name: 'Keras', iconType: 'component', component: iconMap['Keras'], color: '#D00000' },
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Methods',
    description: 'Optimizing workflow and ensuring code quality.',
    skills: [
      { name: 'Git', iconType: 'image', src: '/Git.png', color: '#F05032' },
      { name: 'GitHub', iconType: 'image', src: '/Github.png', color: '#181717' },
      { name: 'Figma', iconType: 'image', src: '/Figma.png', color: '#F24E1E' },
      { name: 'Jest', iconType: 'component', component: iconMap['Jest'], color: '#C21325' },
    ]
  }
];
