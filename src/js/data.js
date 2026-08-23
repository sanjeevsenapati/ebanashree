/**
 * eBanashree Central Data & Config Architecture
 * Allows owners Minaketan Sethi & Sanjeev Senapati to update site content seamlessly
 */

export const siteConfig = {
  brandName: "eBanashree",
  tagline: "Bamboo. Nature. Silence. Stay.",
  heroHeadline: "Stay Among the Bamboo",
  heroSubhead: "A 50-acre bamboo farm and eco retreat in Keonjhar, Odisha.",
  owners: [
    {
      name: "Minaketan Sethi",
      title: "Co-Founder & Owner",
      image: "images/founder-minaketan.jpg",
      bio: "Minaketan Sethi envisioned eBanashree as a unique model combining large-scale bamboo farming with authentic rural eco-tourism in Keonjhar, Odisha."
    },
    {
      name: "Sanjeev Senapati",
      title: "Co-Founder & Owner",
      image: "images/founder-sanjeev.jpg",
      bio: "Sanjeev Senapati drives sustainable retreat design, digital eco-tourism initiatives, and community engagement to make eBanashree a global beacon of bamboo living."
    }
  ],
  owner: {
    name: "Minaketan Sethi & Sanjeev Senapati",
    title: "Co-Founders & Owners",
    location: "Keonjhar, Odisha, India",
    bio: "Minaketan Sethi and Sanjeev Senapati envisioned eBanashree not merely as an agricultural enterprise, but as a sanctuary where human life reconnects with the soothing rhythm of green bamboo. Born out of a deep reverence for Odisha's soil, eBanashree balances sustainable bamboo cultivation with authentic rural eco-hospitality."
  },
  contact: {
    phone: "+91 94370 00000",
    phoneClean: "919437000000",
    whatsapp: "+91 94370 00000",
    whatsappClean: "919437000000",
    email: "stay@ebanashree.com",
    address: "eBanashree Bamboo Farm & Eco Retreat, Near Keonjhar, Odisha 758001",
    googleMapsUrl: "https://maps.google.com/?q=Keonjhar+Odisha"
  },
  stats: [
    { label: "Bamboo Landscape", value: "50 Acres" },
    { label: "Eco Hut Stays", value: "Private" },
    { label: "Native Flora & Fauna", value: "Rich Bio" },
    { label: "Keonjhar, Odisha", value: "Location" }
  ]
};

export const farmZones = [
  {
    id: "zone-1",
    code: "Zone A",
    title: "Dense Bamboo Groves",
    subtitle: "Mature Bamboo Plantation & Canopy Walks",
    desc: "Over 20 acres of lush mature bamboo stalks providing cooling shade, natural leaf-whispering acoustic canopy, and stone walking trails.",
    icon: "🌴"
  },
  {
    id: "zone-2",
    code: "Zone B",
    title: "Eco-Hut Sanctuary",
    subtitle: "Private Bamboo Cottages & Lounges",
    desc: "Thoughtfully placed natural bamboo cottages designed to blend into the surrounding vegetation, ensuring complete privacy and serene morning bird watching.",
    icon: "🏡"
  },
  {
    id: "zone-3",
    code: "Zone C",
    title: "Stargazing Lawn & Campfire Arena",
    subtitle: "Night Sky & Evening Gatherings",
    desc: "An open amphitheater-style lawn with stone firepit where guests gather for evening tea, local Odia acoustic storytelling, and stargazing.",
    icon: "🔥"
  },
  {
    id: "zone-4",
    code: "Zone D",
    title: "Bamboo Craft & Lifestyle Workshop",
    subtitle: "Artisan Woodworking & Learning",
    desc: "Dedicated workshop space showcasing sustainable bamboo furniture making, handicraft weaving, and visitor learning sessions.",
    icon: "🪵"
  },
  {
    id: "zone-5",
    code: "Zone E",
    title: "Organic Farm & Dining Gazebo",
    subtitle: "Fresh Regional Cuisine",
    desc: "Open-air dining pavilion surrounded by traditional Odia vegetable gardens and bamboo shoots, serving fresh home-style Odia meals.",
    icon: "🍲"
  }
];

export const accommodations = [
  {
    id: "bamboo-eco-hut",
    name: "Bamboo Eco Hut",
    tagline: "Nestled in Green Bamboo",
    image: "images/eco-hut-bamboo.jpg",
    price: "₹3,500",
    period: "per night",
    occupancy: "2 Adults + 1 Child",
    bedConfig: "1 Queen Bamboo Bed",
    amenities: ["Attached Bathroom", "Solar Hot Water", "Private Veranda", "Night Lanterns", "Eco Toiletries"],
    desc: "A peaceful private sanctuary built with hand-woven bamboo walls and thatched roof, offering serene views of the morning mist over bamboo groves."
  },
  {
    id: "canopy-treehouse-suite",
    name: "Bamboo Canopy Suite",
    tagline: "Elevated Forest View",
    image: "images/canopy-suite-modern.jpg",
    price: "₹4,800",
    period: "per night",
    occupancy: "2 - 3 Guests",
    bedConfig: "1 King Bed + Lounge",
    amenities: ["Panoramic Bamboo View", "Ensuite Bath", "Spacious Balcony", "Hot Water", "Complimentary Breakfast"],
    desc: "Spacious elevated bamboo retreat offering a 360-degree view of the 50-acre plantation, perfect for couples and nature enthusiasts."
  },
  {
    id: "stargazer-bell-tent",
    name: "Stargazer Eco Cottage",
    tagline: "Unobstructed Night Sky",
    image: "images/night-campfire-stars.jpg",
    price: "₹3,200",
    period: "per night",
    occupancy: "2 Guests",
    bedConfig: "Double Bed / Twin Beds",
    amenities: ["Open Skylight Seating", "Campfire Access", "Attached Bath", "Private Lawn", "Tea & Coffee Setup"],
    desc: "Positioned right next to the stargazing lawn, built for lovers of quiet starry nights, evening fires, and early morning birdsong."
  }
];

export const experiences = [
  {
    id: "bamboo-walk",
    category: "nature",
    title: "Bamboo Forest Walk",
    desc: "Guided walking tour through the 50-acre plantation, learning about bamboo species, growth dynamics, and natural canopy ecology.",
    icon: "🌿"
  },
  {
    id: "night-stars",
    category: "relaxation",
    title: "Sleep Under the Stars",
    desc: "Sit around glowing campfires, sip freshly brewed forest tea, listen to the wind rustling through bamboo leaves, and gaze at unpolluted starry skies.",
    icon: "✨"
  },
  {
    id: "edia-cuisine",
    category: "food",
    title: "Authentic Odia Farm Dining",
    desc: "Savor traditional Odia home-cooked meals served on fresh banana leaves, featuring regional recipes, bamboo shoot delicacies, and organic farm flavors.",
    icon: "🍛"
  },
  {
    id: "craft-workshop",
    category: "education",
    title: "Bamboo Crafting & Plantation",
    desc: "Hands-on workshop where guests can plant their own bamboo sapling or learn basic bamboo weaving crafts from local artisan workers.",
    icon: "🎋"
  },
  {
    id: "sunrise-photography",
    category: "photography",
    title: "Sunrise & Nature Photography",
    desc: "Capture golden morning sunbeams cutting through bamboo mist, rare migratory birds, and serene rustic landscapes of Keonjhar.",
    icon: "📷"
  },
  {
    id: "kids-discovery",
    category: "family",
    title: "Kids Outdoor Nature Trail",
    desc: "Safe, educational outdoor experience designed for children to step away from screens and connect with soil, plants, and farm life.",
    icon: "🦋"
  },
  {
    id: "corporate-retreat",
    category: "corporate",
    title: "Corporate Team Eco-Retreat",
    desc: "Peaceful environment for corporate leadership offsites, strategic planning meetings, wellness sessions, and outdoor team bonding.",
    icon: "💼"
  }
];

export const bambooForestBenefits = [
  {
    id: "oxygen-boost",
    title: "+35% Oxygen & Air Ions",
    subtitle: "Cellular Revitalization & High Air Purity",
    icon: "🌬️",
    stat: "+35%",
    statLabel: "More Oxygen Output",
    desc: "Bamboo produces 35% more oxygen than equivalent stands of hardwood trees and generates high concentrations of negative air ions that refresh your lungs, boost energy, and eliminate morning brain fog."
  },
  {
    id: "stress-reduction",
    title: "Bamboo Forest Bathing (Shinrin-yoku)",
    subtitle: "Lower Cortisol & Stress Relief",
    icon: "🧘",
    stat: "-28%",
    statLabel: "Reduced Cortisol Levels",
    desc: "Living bamboo emits natural airborne compounds called phytoncides. Immersing your senses in the grove significantly lowers stress hormones, regulates blood pressure, and calms an overactive nervous system."
  },
  {
    id: "acoustic-healing",
    title: "Acoustic Sound Healing & Deep Sleep",
    subtitle: "Natural 1/f White Noise Frequency",
    icon: "😴",
    stat: "100%",
    statLabel: "Natural White Noise",
    desc: "The rhythmic whisper of breeze rustling through bamboo stalks creates a natural 1/f acoustic white noise. This soothing soundscape lowers brainwave frequencies, promoting deep, restorative REM sleep."
  },
  {
    id: "cooling-microclimate",
    title: "Cooling Canopy & Dust-Free Air",
    subtitle: "2 - 4°C Cooler Microclimate",
    icon: "🌡️",
    stat: "2-4°C",
    statLabel: "Cooler Ambient Temp",
    desc: "The dense emerald canopy intercepts harsh solar heat and naturally transpiring moisture creates a soothing microclimate 2 to 4 degrees cooler than open city spaces, while trapping airborne dust and pollutants."
  },
  {
    id: "immune-boost",
    title: "Boosted Immunity & NK Cells",
    subtitle: "Enhanced Natural Defense Systems",
    icon: "🛡️",
    stat: "Immune",
    statLabel: "System Enhancement",
    desc: "Studies on forest bathing show that inhaling natural plant volatile compounds in dense bamboo forests boosts Natural Killer (NK) immune cell activity, strengthening the body's natural defense against infection."
  },
  {
    id: "digital-detox",
    title: "Digital Detox & Mental Clarity",
    subtitle: "Attention Recovery & Mindfulness",
    icon: "📱",
    stat: "Restorative",
    statLabel: "Mind & Body Reset",
    desc: "Surrounded by vertical green bamboo lines and dappled sunlight, your eyes and mind recover from screen fatigue. Experience effortless mindfulness, stress reduction, and renewed emotional balance."
  }
];

export const galleryItems = [
  {
    id: 1,
    title: "50-Acre Bamboo Canopy",
    category: "bamboo",
    image: "images/hero-bamboo-forest.jpg"
  },
  {
    id: 2,
    title: "Modern Bamboo Eco Cottage",
    category: "huts",
    image: "images/eco-hut-modern.jpg"
  },
  {
    id: 3,
    title: "Elevated Canopy Suite Balcony",
    category: "huts",
    image: "images/canopy-suite-modern.jpg"
  },
  {
    id: 4,
    title: "Eco Hut Luxury Interior",
    category: "huts",
    image: "images/interior-bamboo-cottage.jpg"
  },
  {
    id: 5,
    title: "Campfire & Starry Night",
    category: "night",
    image: "images/night-campfire-stars.jpg"
  },
  {
    id: 6,
    title: "Traditional Odia Farm Feast",
    category: "food",
    image: "images/odisha-local-dining.jpg"
  },
  {
    id: 7,
    title: "Co-Founder Minaketan Sethi",
    category: "people",
    image: "images/founder-minaketan.jpg"
  },
  {
    id: 8,
    title: "Co-Founder Sanjeev Senapati",
    category: "people",
    image: "images/founder-sanjeev.jpg"
  }
];
