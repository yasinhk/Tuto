export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'Mobil' | 'UI/UX' | 'Donanım / 3D';
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number; iconName?: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export const USER_INFO = {
  name: "Hakan Yasin",
  title: "Senior Full-Stack Developer & Product Designer",
  status: "Yeni Projelere Açık 🟢",
  bio: "Modern web teknolojileri, yüksek performanslı mimariler ve etkileyici kullanıcı arayüzleri geliştirme konusunda 5 yılı aşkın deneyime sahip tutkulu bir yazılımcıyım. Fikirleri estetik ve ölçeklenebilir dijital ürünlere dönüştürüyorum.",
  location: "İstanbul, Türkiye",
  email: "hakan.yasin@example.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    dribbble: "https://dribbble.com",
  },
  stats: [
    { label: "Yıl Deneyim", value: "5+" },
    { label: "Tamamlanan Proje", value: "35+" },
    { label: "Mutlu Müşteri", value: "28+" },
    { label: "Kod Satırı", value: "250K+" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "nexus-analytics",
    title: "Nexus SaaS Analiz Platformu",
    category: "Web",
    shortDesc: "Karanlık mod odaklı, gerçek zamanlı veri görselleştirme ve analitik paneli.",
    fullDesc: "Nexus, büyük ölçekli işletmeler için yüksek performanslı ve düşük gecikmeli veri akışı sunan yeni nesil bir analitik platformudur. Recharts ve WebSocket entegrasyonu ile mikro saniyelik güncellemeler sağlar.",
    image: "/images/projects/project1.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "WebSockets"],
    liveUrl: "https://example.com/nexus",
    githubUrl: "https://github.com/example/nexus",
    featured: true,
    aspectRatio: "wide"
  },
  {
    id: "aura-fintech",
    title: "Aura Mobil Bankacılık & Kripto",
    category: "Mobil",
    shortDesc: "Sezgisel arayüze ve ultra güvenli altyapıya sahip mobil finans uygulaması.",
    fullDesc: "Aura, geleneksel bankacılık işlemleri ile Web3 dijital varlık yönetimini tek bir modern mobil arayüzde birleştirir. Biometrik doğrulama ve anlık bildirim sistemi içerir.",
    image: "/images/projects/project2.png",
    tags: ["React Native", "TypeScript", "TailwindCSS", "Redux Toolkit", "Framer Motion"],
    liveUrl: "https://example.com/aura",
    githubUrl: "https://github.com/example/aura",
    featured: true,
    aspectRatio: "tall"
  },
  {
    id: "synapse-ai-studio",
    title: "Synapse AI Çalışma Alanı",
    category: "UI/UX",
    shortDesc: "Yapay zeka modellerini bağlayan visual node-based akış editörü UI/UX tasarımı.",
    fullDesc: "Karmaşık yapay zeka akışlarını sürükle-bırak yöntemiyle görselleştiren ve modüler ajanlar oluşturmayı sağlayan profesyonel arayüz konsepti ve tasarım sistemi.",
    image: "/images/projects/project3.png",
    tags: ["Figma", "Design System", "UI/UX", "Glassmorphic UI", "Node Architecture"],
    liveUrl: "https://example.com/synapse",
    featured: true,
    aspectRatio: "square"
  },
  {
    id: "pulse-synth-3d",
    title: "Pulse-01 Smart Synthesizer",
    category: "Donanım / 3D",
    shortDesc: "Futuristik masaüstü ses sentezleyici 3D ürün tasarımı ve konsepti.",
    fullDesc: "Minimalist mat siyah metal gövde, neon LED göstergeler ve dokunsal buton arayüzü ile donatılmış yeni nesil dijital ses sentezleyici cihaz tasarımı.",
    image: "/images/projects/project4.png",
    tags: ["3D Product Design", "Blender", "Industrial Design", "Concept Art"],
    liveUrl: "https://example.com/pulse3d",
    featured: true,
    aspectRatio: "tall"
  },
  {
    id: "lux-ecommerce",
    title: "Vogue & Lux Lüks Mağaza",
    category: "Web",
    shortDesc: "Yüksek kontrastlı, tipografi odaklı lüks e-ticaret deneyimi.",
    fullDesc: "Hızlı sayfa yüklenmesi (SSG), dinamik ürün filtreleme ve pürüzsüz sepet yönetimi sunan modern headless e-ticaret uygulaması.",
    image: "/images/projects/project5.png",
    tags: ["Next.js 14", "Stripe API", "GraphQL", "Tailwind CSS", "Zustand"],
    liveUrl: "https://example.com/lux",
    githubUrl: "https://github.com/example/lux",
    featured: false,
    aspectRatio: "wide"
  },
  {
    id: "zenith-crypto-wallet",
    title: "Zenith Web3 Cüzdanı",
    category: "Mobil",
    shortDesc: "Merkeziyetsiz finans ve NFT varlıkları için mobil cüzdan uygulaması.",
    fullDesc: "Zincirler arası (cross-chain) transferleri kolaylaştıran, zümrüt yeşili neon detaylara sahip kullanıcı dostu kripto cüzdanı arayüzü.",
    image: "/images/projects/project6.png",
    tags: ["Flutter", "Web3.js", "Solidity", "Dark Theme", "Tailwind"],
    liveUrl: "https://example.com/zenith",
    githubUrl: "https://github.com/example/zenith",
    featured: false,
    aspectRatio: "square"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend Teknolojileri",
    skills: [
      { name: "React / Next.js 14", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 98 },
      { name: "Framer Motion", level: 88 },
      { name: "Vue.js / Nuxt", level: 80 }
    ]
  },
  {
    name: "Backend & Mimari",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "PostgreSQL / Prisma", level: 85 },
      { name: "GraphQL & REST API", level: 90 },
      { name: "Redis & WebSockets", level: 82 },
      { name: "Docker & AWS", level: 75 }
    ]
  },
  {
    name: "Tasarım & UI/UX",
    skills: [
      { name: "Figma & Design Systems", level: 92 },
      { name: "Kullanıcı Deneyimi (UX)", level: 88 },
      { name: "Prototipleme", level: 90 },
      { name: "Mikro Animasyonlar", level: 85 }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2023 - Günümüz",
    role: "Kıdemli Full-Stack Geliştirici",
    company: "TechNova Studio",
    description: "Ölçeklenebilir SaaS uygulamaları, Next.js mikro ön yüz mimarileri ve yüksek performanslı tasarım sistemleri liderliği.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "AWS"]
  },
  {
    period: "2021 - 2023",
    role: "Frontend & UI/UX Uzmanı",
    company: "PixelCraft Creative Agency",
    description: "Karanlık mod öncelikli marka web siteleri, etkileşimli galeri uygulamaları ve özel ürün tasarımları geliştirdim.",
    technologies: ["React", "Vue.js", "Figma", "Framer Motion", "Tailwind"]
  },
  {
    period: "2019 - 2021",
    role: "Arayüz Geliştirici (Junior)",
    company: "InnoCode Labs",
    description: "Müşteri odaklı web panelleri ve mobil uyumlu responsive arayüzlerin kodlanması.",
    technologies: ["JavaScript", "HTML5/CSS3", "Bootstrap", "Git"]
  }
];
