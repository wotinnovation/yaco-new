export interface Product {
  name: string;
  style: string;
  slug: string;
  description: string;
  longDescription: string;
  features: string[];
  specifications: { label: string; value: string }[];
  image: string;
  gallery: string[];
  category: string;
}

export interface SubCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  products: string[]; // Slugs
}

export interface Category {
  id: string;
  label: string;
  title: string;
  href: string;
  image: string;
  pillars: {
    label: string;
    title: string;
    desc: string;
    icon: string; // Simplified for data, will map to icons in component
  }[];
  products: string[]; // Slugs of products in this category
  subCategories?: SubCategory[];
  comingSoon?: boolean;
}

export const PRODUCTS: Product[] = [
  // Seat Covers - Seatx Standard Collection
  {
    name: "Cloth EM",
    style: "Seatx Standard Collection",
    slug: "cloth-em-seat-covers",
    category: "seat-covers",
    description: "High-quality technical cloth fabric designed for maximum breathability.",
    longDescription: "Our Cloth EM series features advanced technical fabrics that are cool to the touch and incredibly resistant to pilling and abrasion. Perfect for daily use in warm climates.",
    features: ["Breathable Material", "Stain Resistant", "Durable Weave", "Easy Maintenance"],
    specifications: [
      { label: "Material", value: "Technical Cloth" },
      { label: "Fit", value: "Precision Tailored" }
    ],
    image: "/images/products/SEAT%20COVER/SEATX%20STANDARD%20COLLECTION/CLOTH%20EM/DSC01804.JPG",
    gallery: [
      "/images/products/SEAT%20COVER/SEATX%20STANDARD%20COLLECTION/CLOTH%20EM/DSC01804.JPG",
      "/images/products/SEAT%20COVER/SEATX%20STANDARD%20COLLECTION/CLOTH%20EM/DSC01807.JPG",
      "/images/products/SEAT%20COVER/SEATX%20STANDARD%20COLLECTION/CLOTH%20EM/DSC01808.JPG",
      "/images/products/SEAT%20COVER/SEATX%20STANDARD%20COLLECTION/CLOTH%20EM/DSC01810.JPG",
      "/images/products/SEAT%20COVER/SEATX%20STANDARD%20COLLECTION/CLOTH%20EM/DSC01813.JPG"
    ]
  },
  {
    name: "Rexin EM",
    style: "Seatx Standard Collection",
    slug: "rexin-em-seat-covers",
    category: "seat-covers",
    description: "Durable synthetic leather offering a clean look and water resistance.",
    longDescription: "Rexin EM provides the classic look of leather with the practical benefits of high-grade synthetic materials. It is fully waterproof and easy to wipe clean.",
    features: ["Waterproof", "Scuff Resistant", "OEM Finish", "UV Protected"],
    specifications: [
      { label: "Material", value: "Premium Rexin" },
      { label: "Finish", value: "Matte / Semi-Gloss" }
    ],
    image: "/images/products/SEAT%20COVER/SEATX%20STANDARD%20COLLECTION/rexin%20em/_MG_5587.jpg",
    gallery: [
      "/images/products/SEAT%20COVER/SEATX%20STANDARD%20COLLECTION/rexin%20em/_MG_5587.jpg",
      "/images/products/SEAT%20COVER/SEATX%20STANDARD%20COLLECTION/rexin%20em/DSC01329-Copy.JPG",
      "/images/products/SEAT%20COVER/SEATX%20STANDARD%20COLLECTION/rexin%20em/IMG_0975.jpg",
      "/images/products/SEAT%20COVER/SEATX%20STANDARD%20COLLECTION/rexin%20em/IMG_978703.jpg"
    ]
  },
  {
    name: "Micro fibre seat covers",
    style: "Yaco Plus",
    slug: "yaco-plus-seat-covers",
    category: "seat-covers",
    description: "Our exclusive upgraded standard material for enhanced comfort.",
    longDescription: "Yaco Plus is an upgraded version of our standard range, featuring thicker padding and a softer surface texture for those who want extra comfort without moving to premium ranges.",
    features: ["Extra Padding", "Soft Touch", "Reinforced Seams", "Premium Feel"],
    specifications: [
      { label: "Material", value: "Enhanced Synthetic" },
      { label: "Padding", value: "10mm High-Density" }
    ],
    image: "/images/products/SEAT%20COVER/YACO%20PLUS/_MG_6126.JPG",
    gallery: [
      "/images/products/SEAT%20COVER/YACO%20PLUS/_MG_6126.JPG",
      "/images/products/SEAT%20COVER/YACO%20PLUS/_MG_6128.JPG",
      "/images/products/SEAT%20COVER/YACO%20PLUS/_MG_6129.JPG"
    ]
  },

  // Seat Covers - Yaco Prime
  {
    name: "Custom Made GT",
    style: "Yaco Prime",
    slug: "custom-made-gt-seat-covers",
    category: "seat-covers",
    description: "Bespoke GT-inspired design for a high-performance cockpit feel.",
    longDescription: "Our Custom Made GT series is the pinnacle of seat design. Inspired by grand touring sports cars, it features aggressive bolsters and signature stitching patterns.",
    features: ["GT Styling", "Contrast Stitching", "Lateral Support", "Custom Branding"],
    specifications: [
      { label: "Style", value: "GT Performance" },
      { label: "Customization", value: "Full Bespoke" }
    ],
    image: "/images/products/SEAT%20COVER/YACO%20PRIME/DSC00037.JPG",
    gallery: [
      "/images/products/SEAT%20COVER/YACO%20PRIME/DSC00037.JPG",
      "/images/products/SEAT%20COVER/YACO%20PRIME/DSC00038.JPG",
      "/images/products/SEAT%20COVER/YACO%20PRIME/DSC00039.JPG",
      "/images/products/SEAT%20COVER/YACO%20PRIME/_MG_4954.JPG",
      "/images/products/SEAT%20COVER/YACO%20PRIME/_MG_4955.JPG"
    ]
  },



  // Floor Mats
  {
    name: "Super Soft",
    style: "2D Mat OEM Carpet",
    slug: "super-soft-2d-mat",
    category: "floor-mats",
    description: "Ultra-soft premium carpet mats providing maximum comfort and a luxury feel.",
    longDescription: "Our Super Soft 2D mats are crafted from the finest high-pile carpet fibers, designed to give your vehicle's interior an exceptionally plush and comfortable atmosphere. Precision laser-cut for a perfect fit.",
    features: [
      "High-Pile Softness",
      "Anti-Slip Backing",
      "Precision Laser Cut",
      "Luxury Texture",
      "Easy to Vacuum"
    ],
    specifications: [
      { label: "Type", value: "2D Super Soft Carpet" },
      { label: "Material", value: "Premium High-Density Polypropylene" },
      { label: "Comfort", value: "Ultra-Plush" }
    ],
    image: "/images/products/2D%20MAT%20OEM%20CARPET/beige-p-01.jpg",
    gallery: [
      "/images/products/2D%20MAT%20OEM%20CARPET/beige-p-01.jpg",
      "/images/products/2D%20MAT%20OEM%20CARPET/Untitled-3.jpg",
      "/images/products/2D%20MAT%20OEM%20CARPET/_MG_4748.JPG",
      "/images/products/2D%20MAT%20OEM%20CARPET/red-p-01.jpg"
    ]
  },
  {
    name: "Normal Carpet",
    style: "2D Mat OEM Carpet",
    slug: "normal-carpet-2d-mat",
    category: "floor-mats",
    description: "Durable and practical OEM-style carpet mats for everyday protection.",
    longDescription: "The Normal Carpet series offers a balanced weave that is both durable and easy to maintain. It provides reliable protection for your vehicle's original flooring while maintaining a clean, professional look.",
    features: [
      "Durable Weave",
      "Anti-Slip Backing",
      "Precision Laser Cut",
      "OEM Finish",
      "Daily Traffic Rated"
    ],
    specifications: [
      { label: "Type", value: "2D Standard Carpet" },
      { label: "Material", value: "Durable Polypropylene" },
      { label: "Fit", value: "Custom OEM Fit" }
    ],
    image: "/images/products/2D%20MAT%20OEM%20CARPET/_MG_4748.JPG",
    gallery: [
      "/images/products/2D%20MAT%20OEM%20CARPET/_MG_4748.JPG",
      "/images/products/2D%20MAT%20OEM%20CARPET/Untitled-3.jpg",
      "/images/products/2D%20MAT%20OEM%20CARPET/beige-p-01.jpg",
      "/images/products/2D%20MAT%20OEM%20CARPET/red-p-01.jpg"
    ]
  },
  {
    name: "5D Floor Mats",
    style: "Full Coverage",
    slug: "5d-floor-mats",
    category: "floor-mats",
    description: "Deep-dish 5D mats offering excellent coverage and 4 unique design patterns.",
    longDescription: "Elevate your floor protection with our 5D Floor Mats. These deep-dish mats are designed to cover not just the floor, but also the sides of the footwell, ensuring no dirt or spills reach your carpet. Choose from 4 distinct design patterns to match your interior's personality.",
    features: [
      "4 Unique Design Patterns",
      "High-Wall Protection",
      "Waterproof Material",
      "Custom Molded Fit",
      "Scuff-Resistant Surface"
    ],
    specifications: [
      { label: "Designs", value: "4 Distinct Patterns" },
      { label: "Coverage", value: "5D Side-Wall Protection" }
    ],
    image: "/images/products/5D%20Floor%20Mats/WhatsApp%20Image%202023-05-29%20at%2016.15.29.jpeg",
    gallery: [
      "/images/products/5D%20Floor%20Mats/WhatsApp%20Image%202023-05-29%20at%2016.15.29.jpeg",
      "/images/products/5D%20Floor%20Mats/IMG_2661phot.jpeg",
      "/images/products/5D%20Floor%20Mats/IMG_2668phot.jpeg",
      "/images/products/5D%20Floor%20Mats/IMG-20230302-WA0010.jpg.jpeg",
      "/images/products/5D%20Floor%20Mats/IMG-20230302-WA0011.jpg.jpeg",
      "/images/products/5D%20Floor%20Mats/IMG-20230302-WA0008.jpg.jpeg",
      "/images/products/5D%20Floor%20Mats/IMG_2657~photo.png",
      "/images/products/5D%20Floor%20Mats/WhatsApp%20Image%202023-05-29%20at%2016.15.30.jpeg"
    ]
  },
  {
    name: "7D Floor Mats",
    style: "Ultimate Premium",
    slug: "7d-floor-mats",
    category: "floor-mats",
    description: "The pinnacle of floor protection featuring 3 sophisticated designs and multi-layer construction.",
    longDescription: "Our 7D Floor Mats represent the ultimate in automotive floor luxury. Featuring a multi-layer construction with a removable top grass mat for easy cleaning, these mats offer unparalleled protection and a premium look. Available in 3 sophisticated designs that complement any high-end interior.",
    features: [
      "3 Sophisticated Designs",
      "Removable Upper Layer",
      "Ultimate Edge-to-Edge Coverage",
      "Sound-Dampening Core",
      "Premium Diamond Stitching"
    ],
    specifications: [
      { label: "Designs", value: "3 Premium Styles" },
      { label: "Layers", value: "7-Layer Composite" }
    ],
    image: "/images/products/7D%20FLOOR%20MATS/0002.jpg",
    gallery: [
      "/images/products/7D%20FLOOR%20MATS/0002.jpg",
      "/images/products/7D%20FLOOR%20MATS/IMG_2291.JPG",
      "/images/products/7D%20FLOOR%20MATS/patrol-PN.jpeg",
      "/images/products/7D%20FLOOR%20MATS/0941.jpg"
    ]
  },

  // Upholstery
  {
    name: "Seat Upholstery",
    style: "Interior Base",
    slug: "seat-upholstery",
    category: "upholstery",
    description: "Complete professional seat re-upholstery services using premium materials.",
    longDescription: "Beyond seat covers, we offer full professional re-upholstery services. We strip your seats down to the frame and rebuild them with new foam and premium materials of your choice, ensuring a perfect, permanent finish that looks and feels better than factory.",
    features: [
      "Full Foam Restoration",
      "Custom Stitching Patterns",
      "Premium Leather & Alcantara Options",
      "Heated Seat Compatibility",
      "OEM+ Finish Quality"
    ],
    specifications: [
      { label: "Service", value: "Full Re-Upholstery" },
      { label: "Duration", value: "3-5 Working Days" }
    ],
    image: "/images/products/UPHOLSTERY/SEAT%20UP/IMG_2313.jpg",
    gallery: [
      "/images/products/UPHOLSTERY/SEAT%20UP/IMG_2313.jpg",
      "/images/products/UPHOLSTERY/SEAT%20UP/IMG_9203-0.jpg",
      "/images/products/UPHOLSTERY/SEAT%20UP/_MG_2484.jpg",
      "/images/products/UPHOLSTERY/SEAT%20UP/_MG_4920-1.jpg"
    ]
  },
  {
    name: "Door Panel Upholstery",
    style: "Side Trim",
    slug: "door-panel-upholstery",
    category: "upholstery",
    description: "Expert wrapping of door panels to match your new interior theme.",
    longDescription: "Coordinate your entire cabin by upholstering your door panels. We use matching materials and stitching patterns to ensure a cohesive look throughout the vehicle. From soft-touch inserts to full panel wraps, we handle every detail.",
    features: [
      "Matching Material Inserts",
      "Contrast Stitching",
      "Soft-Touch Padding",
      "Integrated Trim Accents",
      "Durable Edge Finishing"
    ],
    specifications: [
      { label: "Application", value: "Door Cards & Armrests" },
      { label: "Materials", value: "Nappa / Alcantara / Vinyl" }
    ],
    image: "/images/products/UPHOLSTERY/DOOR%20PANNEL/IMG_9320.jpg",
    gallery: [
      "/images/products/UPHOLSTERY/DOOR%20PANNEL/IMG_9320.jpg",
      "/images/products/UPHOLSTERY/DOOR%20PANNEL/_MG_2961.jpg",
      "/images/products/UPHOLSTERY/DOOR%20PANNEL/_MG_4067.jpg",
      "/images/products/UPHOLSTERY/DOOR%20PANNEL/_MG_4932-1copy.jpg"
    ]
  },
  {
    name: "Roof Upholstery",
    style: "Headliner Service",
    slug: "roof-upholstery",
    category: "upholstery",
    description: "Premium headliner restoration and custom color changes.",
    longDescription: "Refresh your vehicle's ceiling with our Roof Upholstery service. Whether you're fixing a sagging headliner or upgrading to a premium black Alcantara finish, we provide a smooth, wrinkle-free installation that transforms the overhead atmosphere of your car.",
    features: [
      "Sagging Headliner Repair",
      "Alcantara & Suede Options",
      "Pillar Wrapping Included",
      "Sun Visor Color Matching",
      "Acoustic Insulation Upgrade"
    ],
    specifications: [
      { label: "Material", value: "Automotive Suede / Fabric" },
      { label: "Components", value: "Main Roof + A/B/C Pillars" }
    ],
    image: "/images/products/UPHOLSTERY/ROOF/_MG_2484.jpg",
    gallery: [
      "/images/products/UPHOLSTERY/ROOF/_MG_2484.jpg",
      "/images/products/UPHOLSTERY/ROOF/civic-red-after.jpg",
      "/images/products/UPHOLSTERY/ROOF/civic-red-before.jpg",
      "/images/products/UPHOLSTERY/ROOF/_MG_3227copy.jpg.jpeg"
    ]
  },
  {
    name: "Dash Board Upholstery",
    style: "Cockpit Wrap",
    slug: "dash-board-upholstery",
    category: "upholstery",
    description: "Surgical precision dashboard wrapping for a glare-free, luxury finish.",
    longDescription: "The dashboard is the centerpiece of your interior. Our upholstery service provides a hand-stitched, precision-wrapped finish that eliminates sun glare and adds a touch of class. We ensure all airbag seams and vent openings remain fully functional and beautifully integrated.",
    features: [
      "Anti-Glare Matte Finish",
      "Hand-Stitched Accents",
      "Heat-Resistant Bonding",
      "Airbag Safety Compliant",
      "Precision Vent Cutouts"
    ],
    specifications: [
      { label: "Material", value: "Premium Nappa / Alcantara" },
      { label: "Complexity", value: "High-Precision Manual Craft" }
    ],
    image: "/images/products/UPHOLSTERY/DASH%20BOARD/DSC01785copy.jpg",
    gallery: [
      "/images/products/UPHOLSTERY/DASH%20BOARD/DSC01785copy.jpg",
      "/images/products/UPHOLSTERY/DASH%20BOARD/DSC01782.JPG",
      "/images/products/UPHOLSTERY/DASH%20BOARD/DSC01783.JPG",
      "/images/products/UPHOLSTERY/DASH%20BOARD/DSC01784.JPG"
    ]
  },
  {
    name: "Steering Wheel Upholstery",
    style: "Grip Upgrade",
    slug: "steering-wheel-upholstery",
    category: "upholstery",
    description: "Hand-stitched steering wheel wraps for ultimate tactile feedback and style.",
    longDescription: "Enhance your driving experience with a custom steering wheel wrap. Using the finest Nappa leather or Alcantara, we hand-stitch the cover directly onto your wheel, providing a thicker, more comfortable grip and a personalized look with your choice of stitching colors.",
    features: [
      "Hand-Stitched Precision",
      "Perforated Leather Options",
      "12 O'Clock Marker Strips",
      "Increased Rim Thickness",
      "M-Sport / RS Style Stitching"
    ],
    specifications: [
      { label: "Material", value: "Top-Grain Nappa Leather" },
      { label: "Stitching", value: "Traditional Cross-Stitch" }
    ],
    image: "/images/products/UPHOLSTERY/STEETING%20WHEEL/DSC01762.JPG",
    gallery: [
      "/images/products/UPHOLSTERY/STEETING%20WHEEL/DSC01762.JPG",
      "/images/products/UPHOLSTERY/STEETING%20WHEEL/IMG_1912-0.jpg",
      "/images/products/UPHOLSTERY/STEETING%20WHEEL/IMG_8575.JPG",
      "/images/products/UPHOLSTERY/STEETING%20WHEEL/_MG_3310.JPG"
    ]
  },
  {
    name: "Seat Belt Upholstery",
    style: "Accent Detail",
    slug: "seat-belt-upholstery",
    category: "upholstery",
    description: "Custom color seat belt webbing for a subtle yet striking interior accent.",
    longDescription: "Small details make the biggest difference. Replace your standard black seat belts with custom colored webbing. From vibrant reds to subtle blues, our seat belt upholstery service uses certified high-strength materials to ensure safety while adding a unique pop of color to your cabin.",
    features: [
      "Certified High-Strength Webbing",
      "Multiple Color Options",
      "Factory Mechanism Retention",
      "UV-Resistant Dyes",
      "Precision Sewing"
    ],
    specifications: [
      { label: "Material", value: "Industrial Polyester Webbing" },
      { label: "Safety", value: "Exceeds OEM Load Ratings" }
    ],
    image: "/images/products/UPHOLSTERY/SEAT%20BEALT/DSC01847.JPG",
    gallery: [
      "/images/products/UPHOLSTERY/SEAT%20BEALT/DSC01847.JPG",
      "/images/products/UPHOLSTERY/SEAT%20BEALT/DSC01849.JPG",
      "/images/products/UPHOLSTERY/SEAT%20BEALT/DSC01851.JPG",
      "/images/products/UPHOLSTERY/SEAT%20BEALT/DSC01853.JPG"
    ]
  },

  // Deep Cleaning
  {
    name: "Deep Cleaning",
    style: "Full Restoration",
    slug: "deep-cleaning-service",
    category: "deep-cleaning",
    description: "Comprehensive interior deep cleaning and sanitization service.",
    longDescription: "Our Deep Cleaning service is a complete restorative process for your vehicle's interior. We use hot water extraction for carpets, steam sanitization for vents, and specialized leather conditioners to bring every surface back to like-new condition. It's more than a wash—it's a decontamination.",
    features: [
      "Hot Water Carpet Extraction",
      "Steam Vent Sanitization",
      "Leather Deep Condition",
      "Ozone Odor Removal",
      "Antibacterial Protection"
    ],
    specifications: [
      { label: "Service Level", value: "Professional / Restorative" },
      { label: "Duration", value: "4-6 Hours" }
    ],
    image: "/images/seat/clean1.jpg",
    gallery: ["/images/seat/clean1.jpg", "/images/seat/clean2.jpg", "/images/seat/clean3.jpg"]
  }
];

export const CATEGORIES: Category[] = [
  {
    id: "seat-covers",
    label: "01. Seat Covers",
    title: "Precision Tailored Seat Covers",
    href: "/products/seat-covers",
    image: "/images/products/SEAT%20COVER/SEATX%20STANDARD%20COLLECTION/CLOTH%20EM/DSC01804.JPG",
    products: [
      "cloth-em-seat-covers",
      "rexin-em-seat-covers",
      "yaco-plus-seat-covers",
      "custom-made-gt-seat-covers"
    ],
    subCategories: [
      {
        id: "seatx-standard",
        name: "Seatx Standard Collection",
        description: "Reliable daily protection in Cloth EM and Rexin EM.",
        image: "/images/products/SEAT%20COVER/SEATX%20STANDARD%20COLLECTION/CLOTH%20EM/DSC01804.JPG",
        products: ["cloth-em-seat-covers", "rexin-em-seat-covers"]
      },
      {
        id: "micro-fibre",
        name: "Micro Fibre Seat Covers",
        description: "Elevated materials and luxury feel for a sophisticated interior.",
        image: "/images/products/SEAT%20COVER/YACO%20PLUS/_MG_6126.JPG",
        products: ["yaco-plus-seat-covers"]
      },
      {
        id: "yaco-prime",
        name: "Yaco Prime",
        description: "Custom made GT seat covers with upgraded high-performance materials.",
        image: "/images/products/SEAT%20COVER/YACO%20PRIME/DSC00037.JPG",
        products: ["custom-made-gt-seat-covers"]
      }
    ],
    pillars: [
      {
        label: "Seatx Standard",
        title: "Cloth & Rexin EM",
        desc: "Featuring Cloth EM and Rexin EM materials for reliable daily protection.",
        icon: "fabric"
      },
      {
        label: "Micro Fibre",
        title: "Luxury Feel",
        desc: "Elevated materials providing a soft tactile experience and superior interior comfort.",
        icon: "shield"
      },
      {
        label: "Yaco Prime",
        title: "Custom GT Series",
        desc: "Custom made GT seat covers with upgraded materials for a high-performance look.",
        icon: "leather"
      }
    ]
  },
  {
    id: "floor-mats",
    label: "02. Floor Mats",
    title: "Precision Molded Floor Mats",
    href: "/products/floor-mats",
    image: "/images/products/7D%20FLOOR%20MATS/0002.jpg",
    products: [
      "super-soft-2d-mat",
      "normal-carpet-2d-mat",
      "5d-floor-mats",
      "7d-floor-mats"
    ],
    subCategories: [
      {
        id: "2d-mat-oem",
        name: "2D Mat OEM Carpet",
        description: "Classic soft and normal carpet options for a traditional look.",
        image: "/images/products/2D%20MAT%20OEM%20CARPET/_MG_4748.JPG",
        products: ["super-soft-2d-mat", "normal-carpet-2d-mat"]
      },
      {
        id: "5d-mats",
        name: "5D Floor Mats",
        description: "High-wall protection with 4 unique design patterns.",
        image: "/images/products/5D%20Floor%20Mats/WhatsApp%20Image%202023-05-29%20at%2016.15.29.jpeg",
        products: ["5d-floor-mats"]
      },
      {
        id: "7d-mats",
        name: "7D Floor Mats",
        description: "Ultimate 7-layer luxury with 3 sophisticated designs.",
        image: "/images/products/7D%20FLOOR%20MATS/IMG_2291.JPG",
        products: ["7d-floor-mats"]
      }
    ],
    pillars: [
      {
        label: "2D OEM Carpet",
        title: "Super Soft",
        desc: "Classic carpet mats available in Super Soft and Normal Carpet variants.",
        icon: "fabric"
      },
      {
        label: "5D Floor Mats",
        title: "4 Design Options",
        desc: "Deep-dish protection featuring 4 unique design patterns to match your style.",
        icon: "shield"
      },
      {
        label: "7D Floor Mats",
        title: "3 Design Options",
        desc: "The ultimate 7-layer protection with 3 sophisticated design choices.",
        icon: "bolt"
      }
    ]
  },
  {
    id: "upholstery",
    label: "03. Upholstery",
    title: "Bespoke Interior Upholstery",
    href: "/products/upholstery",
    image: "/images/products/UPHOLSTERY/DASH%20BOARD/DSC01785copy.jpg",
    products: [
      "seat-upholstery",
      "door-panel-upholstery",
      "roof-upholstery",
      "dash-board-upholstery",
      "steering-wheel-upholstery",
      "seat-belt-upholstery"
    ],
    pillars: [
      {
        label: "Seats & Doors",
        title: "Surface Restoration",
        desc: "Professional re-upholstery for seats and door panels using premium hides and fabrics.",
        icon: "craft"
      },
      {
        label: "Roof & Dash",
        title: "Cockpit Overhaul",
        desc: "Expertly wrapped dashboards and headliners for a glare-free, luxury atmosphere.",
        icon: "stitch"
      },
      {
        label: "Steering & Belts",
        title: "Precision Accents",
        desc: "Hand-stitched steering wheel wraps and custom colored seat belt webbing.",
        icon: "anchor"
      }
    ]
  },
  {
    id: "deep-cleaning",
    label: "04. Deep Cleaning",
    title: "Advanced Interior Deep Cleaning",
    href: "/products/deep-cleaning",
    image: "/images/seat/clean1.jpg",
    comingSoon: true,
    products: [],
    pillars: [
      {
        label: "Full Restoration",
        title: "Coming Soon",
        desc: "Comprehensive restorative cleaning services will be available shortly.",
        icon: "germ"
      },
      {
        label: "Advanced Tech",
        title: "Clinical Level",
        desc: "Utilizing medical-grade steam and ozone technology for ultimate purity.",
        icon: "extract"
      },
      {
        label: "Premium Care",
        title: "Surface Shield",
        desc: "Advanced ceramic and antimicrobial protection for your vehicle's interior.",
        icon: "sparkle"
      }
    ]
  }
];
