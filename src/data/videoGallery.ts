export interface VideoItem {
  id: string;
  title: string;
  category: string;
  tools: string[];
  description: string;
  embedUrl: string;
  aspectRatio: "horizontal" | "vertical";
}

export const videoGalleryData: VideoItem[] = [
  // Product Marketing
  {
    id: "air-fryer",
    title: "Air Fryer Marketing Campaign",
    category: "Product Marketing Videos",
    tools: ["Clipchamp", "Product Demo"],
    description: "Dynamic product showcase highlighting key features, cooking demonstrations, and lifestyle benefits of modern air fryer technology.",
    embedUrl: "https://www.youtube.com/embed/BQ9MjpzaObs?si=zUck3lrt29SW37R2",
    aspectRatio: "horizontal"
  },
  {
    id: "smart-ring",
    title: "Smart Ring Tech Showcase",
    category: "Product Marketing Videos",
    tools: ["Tech Marketing", "Wearables"],
    description: "Sleek presentation of wearable technology features, health tracking capabilities, and seamless smartphone integration.",
    embedUrl: "https://www.youtube.com/embed/qamVWFMroF8?si=z2HQN8ZNS1ipDtaS",
    aspectRatio: "horizontal"
  },
  {
    id: "fashion-bags",
    title: "Fashion Bags Collection",
    category: "Product Marketing Videos",
    tools: ["Fashion", "Product Marketing"],
    description: "Stylish promotional video showcasing bag designs, materials, and versatility for different occasions and lifestyles.",
    embedUrl: "https://www.youtube.com/embed/oFYtqqGLsH4?si=xm7E-nQ4WVq3_9bH",
    aspectRatio: "horizontal"
  },
  // Talking Head
  {
    id: "ai-avatar",
    title: "AI Avatar Introduction",
    category: "Talking Head Videos",
    tools: ["Vidnoz", "Clipchamp"],
    description: "Professional talking-head video featuring AI-generated presenter for brand introductions and customer engagement.",
    embedUrl: "https://www.youtube.com/embed/vh_5T4O5sa8?si=iKyalQyMH7R8y5Cz",
    aspectRatio: "horizontal"
  },
  {
    id: "product-launch",
    title: "Product Launch Presentation",
    category: "Talking Head Videos",
    tools: ["Vidnoz", "AI Avatar"],
    description: "Enthusiastic AI presenter announcing new product features and company updates in a modern, professional setting.",
    embedUrl: "https://www.youtube.com/embed/DbYwvc2_-aU?si=rhQU1p73HF1m-QcL",
    aspectRatio: "horizontal"
  },
  // Short Form / Mascot
  {
    id: "cat-intro",
    title: "Cat Character Introduction",
    category: "Social Media Shorts",
    tools: ["Character Animation", "Brand Mascot"],
    description: "Adorable animated cat character making their debut appearance with charming personality and expressive animations.",
    embedUrl: "https://www.youtube.com/embed/bljEguc3a_E?si=4qIhH4ZvIF7WJJX-",
    aspectRatio: "vertical"
  },
  {
    id: "cat-adventures",
    title: "Cat's Daily Adventures",
    category: "Social Media Shorts",
    tools: ["Instagram Stories", "Cute Content"],
    description: "Follow our loveable cat character through everyday scenarios, perfect for building audience connection and brand mascot recognition.",
    embedUrl: "https://www.youtube.com/embed/P8yz-k_eVqE",
    aspectRatio: "vertical"
  },
  {
    id: "cat-reactions",
    title: "Cat Character Reactions",
    category: "Social Media Shorts",
    tools: ["TikTok", "Viral Content"],
    description: "Expressive cat animations showcasing different emotions and reactions, ideal for social media engagement and meme-worthy content.",
    embedUrl: "https://www.youtube.com/embed/IV9zZY90ff0",
    aspectRatio: "vertical"
  },
  // Storytelling / Docs
  {
    id: "customer-journey",
    title: "Customer Journey Documentary",
    category: "Storytelling / Documentary",
    tools: ["Clipchamp", "Storytelling"],
    description: "Cinematic storytelling video following a customer's experience from initial discovery to successful outcome, featuring real testimonials.",
    embedUrl: "https://www.youtube.com/embed/_daRcs1WxoY?si=Wz6OMGc7BWXv3CFm",
    aspectRatio: "horizontal"
  },
  {
    id: "brand-story",
    title: "Brand Story: Behind Our Mission",
    category: "Storytelling / Documentary",
    tools: ["Clipchamp", "Brand Story"],
    description: "Emotional documentary-style video revealing the company's founding story, values, and commitment to customer success.",
    embedUrl: "https://www.youtube.com/embed/H2xQtNWjR1g?si=4WY24YPRuCVpCayD",
    aspectRatio: "horizontal"
  },
  {
    id: "innovation-journey",
    title: "Innovation Journey",
    category: "Storytelling / Documentary",
    tools: ["Innovation", "Documentary"],
    description: "Inspiring narrative showcasing the evolution of ideas into breakthrough solutions, combining interviews and visual storytelling.",
    embedUrl: "https://www.youtube.com/embed/I7JV5V_6ce4",
    aspectRatio: "horizontal"
  },
  // Emotion Adaptive / Personalized
  {
    id: "personalized-welcome",
    title: "Personalized Welcome Experience",
    category: "Personalized AI Videos",
    tools: ["Clipchamp", "Personalization"],
    description: "Interactive greeting video that adapts tone and content based on viewer's time zone, location, and browsing behavior.",
    embedUrl: "https://www.youtube.com/embed/0QZP0Z4GsHc?si=FuPxfQdxBaDFFrUF",
    aspectRatio: "vertical"
  },
  {
    id: "dynamic-recommendations",
    title: "Dynamic Product Recommendations",
    category: "Personalized AI Videos",
    tools: ["AI Adaptive", "Smart Content"],
    description: "AI-powered video that showcases different products based on viewer preferences and previous interactions with the brand.",
    embedUrl: "https://www.youtube.com/embed/qjEUMHWpxcw?si=f9Ex1u2NdtcAiYS1",
    aspectRatio: "vertical"
  },
  // Business Ads
  {
    id: "business-promo",
    title: "Small Business Promo",
    category: "Business Ads",
    tools: ["Canva", "Ad Campaign"],
    description: "Engaging short advertisement showcasing services and offers for small businesses, tailored for social media.",
    embedUrl: "https://www.youtube.com/embed/tbkQKPoM9Bs?si=QexLVLgMesyuQa8d",
    aspectRatio: "horizontal"
  },
  {
    id: "corporate-ad",
    title: "Corporate Ad",
    category: "Business Ads",
    tools: ["InVideo", "Brand Awareness"],
    description: "Corporate-style business advertisement designed to boost brand awareness and professional image.",
    embedUrl: "https://www.youtube.com/embed/0wpiv5vHDsM?si=2WG2sq2G1u7hcPkN",
    aspectRatio: "horizontal"
  },
  // YouTube Content
  {
    id: "rain-cabin",
    title: "Cozy Rain Cabin",
    category: "YouTube Content",
    tools: ["Vlogging", "Entertainment"],
    description: "Creative vlog content optimized for YouTube, blending storytelling, lifestyle, and audience interaction.",
    embedUrl: "https://www.youtube.com/embed/rtX7JNkCDEA?si=3FbJynTx23LqyN96",
    aspectRatio: "horizontal"
  },
  {
    id: "sleeping-rain",
    title: "Sleeping ASMR Rain Sound At Mountains",
    category: "YouTube Content",
    tools: ["Tutorial", "Education"],
    description: "Step-by-step tutorial content created for YouTube, delivering value and engaging the audience effectively.",
    embedUrl: "https://www.youtube.com/embed/uJ0haBLKB18?si=iSpDr68QOTBnE9o_",
    aspectRatio: "horizontal"
  }
];

export const galleryCategories = [
  "All",
  "Product Marketing Videos",
  "Talking Head Videos",
  "Social Media Shorts",
  "Storytelling / Documentary",
  "Personalized AI Videos",
  "Business Ads",
  "YouTube Content"
];
