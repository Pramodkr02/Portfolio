export const PROJECTS_DATA = [
  {
    id: 'project-1',
    title: 'AI-Powered Analytics Dashboard',
    slug: 'ai-analytics-dashboard',
    summary: 'A real-time analytics dashboard with predictive modeling.',
    description: 'Built a comprehensive analytics dashboard that visualizes complex data sets and provides AI-driven insights. Features include real-time data streaming, customizable widgets, and predictive trend analysis.',
    images: [
      { src: '/assets/project-1-main.jpg', alt: 'Dashboard Overview' },
      { src: '/assets/project-1-detail.jpg', alt: 'Analytics Detail' }
    ],
    techTags: ['React', 'TypeScript', 'D3.js', 'Python', 'TensorFlow'],
    metrics: { stars: 120, forks: 35 },
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    date: '2024',
    type: 'Fullstack',
    featured: true
  },
  {
    id: 'project-2',
    title: 'E-Commerce Platform',
    slug: 'ecommerce-platform',
    summary: 'A modern, headless e-commerce solution.',
    description: 'Developed a scalable e-commerce platform using a headless architecture. Integrated with Stripe for payments and Contentful for CMS. Features include a fully responsive design, cart management, and user authentication.',
    images: [
      { src: '/assets/project-2-main.jpg', alt: 'Storefront' },
      { src: '/assets/project-2-cart.jpg', alt: 'Shopping Cart' }
    ],
    techTags: ['Next.js', 'Tailwind CSS', 'Stripe', 'Redux'],
    metrics: { stars: 85, forks: 12 },
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    date: '2023',
    type: 'Frontend',
    featured: true
  },
  {
    id: 'project-3',
    title: 'Task Management App',
    slug: 'task-manager',
    summary: 'Collaborative task management tool for teams.',
    description: 'A Trello-like task management application with real-time updates using WebSockets. Supports drag-and-drop, team workspaces, and activity logs.',
    images: [
      { src: '/assets/project-3-main.jpg', alt: 'Kanban Board' }
    ],
    techTags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    metrics: { stars: 200, forks: 45 },
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    date: '2023',
    type: 'Fullstack',
    featured: false
  },
  {
    id: 'project-4',
    title: 'Portfolio Website',
    slug: 'portfolio-v1',
    summary: 'My previous portfolio website.',
    description: 'A clean and minimalist portfolio website to showcase my early work. Built with HTML, CSS, and vanilla JavaScript.',
    images: [
      { src: '/assets/project-4-main.jpg', alt: 'Portfolio Home' }
    ],
    techTags: ['HTML', 'CSS', 'JavaScript'],
    metrics: { stars: 10, forks: 2 },
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    date: '2022',
    type: 'Frontend',
    featured: false
  }
];
