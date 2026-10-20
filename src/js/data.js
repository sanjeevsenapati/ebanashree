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
    phone: "+91 94370XXXXX",
    phoneClean: "919437000000",
    whatsapp: "+91 94370XXXXX",
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
  },
  {
    id: "zone-6",
    code: "Zone F",
    title: "Meditation & Yoga Deck",
    subtitle: "Sunrise & Morning Wellness",
    desc: "A serene wooden platform elevated slightly amidst the bamboo canopy, perfect for morning sun salutations and guided meditation.",
    icon: "🧘‍♀️"
  },
  {
    id: "zone-7",
    code: "Zone G",
    title: "Lotus Pond & Wetland",
    subtitle: "Biodiversity & Aquatic Life",
    desc: "A natural water body filled with blooming lotuses, attracting local bird species and providing a calming microclimate to the farm.",
    icon: "🪷"
  },
  {
    id: "zone-8",
    code: "Zone H",
    title: "Bamboo Nursery & Seedlings",
    subtitle: "Cultivation & Growth",
    desc: "The birthplace of eBanashree's bamboo. A dedicated nursery where new bamboo saplings are nurtured before being planted across the estate.",
    icon: "🌱"
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

export const teamMembers = [
  // Founders / Leadership
  {
    name: "Minaketan Sethi",
    role: "Co-Founder & Owner",
    category: "Founders & Leadership",
    image: "images/founder-minaketan.jpg",
    bio: "Minaketan Sethi envisioned eBanashree as a unique model combining large-scale bamboo farming with authentic rural eco-tourism in Keonjhar, Odisha. He leads the bamboo cultivation and eco-restoration operations."
  },
  {
    name: "Sanjeev Senapati",
    role: "Co-Founder & Owner",
    category: "Founders & Leadership",
    image: "images/founder-sanjeev.jpg",
    bio: "Sanjeev Senapati drives sustainable retreat design, digital eco-tourism initiatives, and community engagement to make eBanashree a global beacon of peaceful bamboo living and green hospitality."
  },
  
  // Advisory Committee
  {
    name: "Gagan Pattnaik",
    role: "Environmental & Financial Advisor",
    category: "Advisory Committee",
    image: "images/advisor_gagan.jpg",
    bio: "Expert in sustainable bamboo cultivation and ecological restoration with over 20 years of experience."
  },
  {
    name: "Bipra Ranjan Mishra",
    role: "Community Engagement Lead",
    category: "Advisory Committee",
    image: "images/advisor_bipra.jpg",
    bio: "Drives grassroots community mobilization, eco-tourism outreach, and local stakeholder collaboration across Odisha."
  },
  {
    name: "Santosh Kumar Das",
    role: "Legal Head",
    category: "Advisory Committee",
    image: "images/advisor_santosh.jpg",
    bio: "Specializes in environmental compliance, land stewardship laws, and corporate governance for sustainable eco-hospitality."
  },
  {
    name: "Manoranjan Das",
    role: "Rural Community & Artisan Advisor",
    category: "Advisory Committee",
    image: "images/advisor_sushanta.jpg",
    bio: "Passionate about rural eco-tourism and empowering local artisan communities in Odisha."
  },
  {
    name: "Ranjan Barik",
    role: "Eco-Architecture Consultant",
    category: "Advisory Committee",
    image: "images/advisor_ranjan.jpg",
    bio: "Specializes in traditional bamboo construction techniques and low-impact sustainable design."
  }
];

export const eventDays = [
  {
    id: "world-bamboo-day",
    title: "World Bamboo Day",
    date: "September 18",
    desc: "A day dedicated to raising awareness about bamboo conservation and its potential to mitigate climate change.",
    images: ["images/hero-bamboo-forest.jpg", "images/bamboo-carbon-impact.jpg"]
  },
  {
    id: "earth-day",
    title: "Earth Day Retreat",
    date: "April 22",
    desc: "Special eco-retreat focusing on sustainable living practices, organic farming, and carbon foot-print reduction.",
    images: ["images/eco-hut-bamboo.jpg", "images/interior-bamboo-cottage.jpg"]
  },
  {
    id: "local-artisan-festival",
    title: "Odia Artisan Festival",
    date: "November (Annual)",
    desc: "Celebrating local craftsmanship, hand-woven bamboo art, and traditional Odia culture.",
    images: ["images/odisha-local-dining.jpg", "images/night-campfire-stars.jpg"]
  },
  {
    id: "inauguration-day",
    title: "eBanashree Inauguration Day",
    date: "Upcoming (TBA)",
    desc: "The grand opening of the eBanashree Eco Retreat, marking the beginning of our 50-acre sustainable hospitality journey.",
    images: ["images/eco-hut-modern.jpg", "images/canopy-suite-modern.jpg"]
  },
  {
    id: "foundation-day",
    title: "eBanashree Foundation Day",
    date: "Annual Celebration",
    desc: "A day to reflect on our journey, celebrate our milestones in bamboo cultivation, and reaffirm our commitment to Odisha's soil.",
    images: ["images/founder-minaketan.jpg", "images/founder-sanjeev.jpg"]
  }
];

export const deforestationData = {
  hero: {
    subtitle: "Eco-Restoration & Forest Protection",
    title: "Combating Deforestation: The Bamboo Shield",
    lead: "Over 15 billion trees are cleared worldwide every year, accelerating biodiversity collapse and catastrophic soil erosion. At eBanashree in Keonjhar, Odisha, our 50-acre bamboo sanctuary demonstrates a viable, nature-based alternative: fulfilling humanity's timber, structural, and material needs without cutting down a single wild forest tree."
  },
  metrics: [
    {
      value: "15 Billion",
      label: "Trees Cut Down Globally Each Year",
      sub: "Driving irreversible habitat & canopy loss"
    },
    {
      value: "0 Old-Growth Trees",
      label: "100% Tree-Free Construction",
      sub: "All eBanashree huts use sustainable bamboo"
    },
    {
      value: "3 - 5 Yrs",
      label: "Bamboo Maturity vs 40+ Yrs for Timber",
      sub: "10x faster harvest with zero replanting"
    },
    {
      value: "40,000 km",
      label: "Root Matrix Per Hectare",
      sub: "Firmly binds topsoil & halts slope erosion"
    }
  ],
  pillars: [
    {
      id: "timber-substitute",
      icon: "🪵",
      badge: "Timber Replacement",
      title: "Saving Ancient Teak, Sal & Hardwoods",
      stat: "28,000 PSI",
      statLabel: "Tensile Strength (Exceeds Steel)",
      desc: "Traditional construction relies on felling 40- to 70-year-old slow-growing trees like Teak, Sal, and Mahogany. Bamboo achieves steel-grade tensile resilience and high compressive strength in just 3 to 5 years, delivering high-performance structural beams, rafters, and flooring without disturbing native forests."
    },
    {
      id: "perpetual-growth",
      icon: "🔄",
      badge: "Zero Clear-Cutting",
      title: "Perpetual Rhizome Canopy Regeneration",
      stat: "100%",
      statLabel: "Self-Regenerating Clonal System",
      desc: "When a timber tree is logged, it dies permanently, stripping the landscape and discharging centuries of stored root carbon. Bamboo is a perennial giant grass: its subterranean rhizome system lives perpetually. Selective harvesting of mature culms stimulates fresh shoots every monsoon—no replanting needed."
    },
    {
      id: "land-reclamation",
      icon: "🏔️",
      badge: "Odisha Soil Revival",
      title: "Reclaiming Degraded & Mining Landscapes",
      stat: "1 Ton Soil",
      statLabel: "Bound Firmly Per Bamboo Clump",
      desc: "Keonjhar’s terrain has suffered from heavy mining scars and fragile topsoil erosion. Deforested slopes easily wash out during torrential rains. Bamboo’s interlocked root web locks loose earth, elevates groundwater tables, and restores biological topsoil fertility where native trees fail to take hold."
    },
    {
      id: "biodiversity-refuge",
      icon: "🦜",
      badge: "Wildlife Sanctuary",
      title: "Defending Native Biodiversity Corridors",
      stat: "45+ Species",
      statLabel: "Birds & Pollinators Sheltered",
      desc: "Forest loss fragments ecosystems, endangering wildlife and pollinators. eBanashree’s dense 50-acre emerald canopy creates an evaporative microclimate 2–4°C cooler with continuous humidity, serving as a protected safe haven for over 45+ bird species, butterflies, and small forest fauna."
    },
    {
      id: "clean-bioenergy",
      icon: "🔥",
      badge: "Clean Fuelwood Shift",
      title: "Halting Forest Depletion for Charcoal & Firewood",
      stat: "2x Heat",
      statLabel: "Calorific Value vs Wood Charcoal",
      desc: "Millions of metric tons of natural forest wood are cut for domestic cooking and charcoal kilns. Bamboo charcoal and densified pellets burn twice as hot with near-zero toxic smoke emissions, offering a high-efficiency bio-energy solution that keeps natural forests standing tall."
    },
    {
      id: "rural-livelihoods",
      icon: "🤝",
      badge: "Economic Dignity",
      title: "Empowering Forest Guardians Over Woodcutters",
      stat: "100% Local",
      statLabel: "Year-Round Sustainable Employment",
      desc: "Rural communities often resort to tree cutting out of economic vulnerability. By providing dignified, skilled employment in bamboo propagation, sustainable harvesting, eco-cottage building, and retreat hospitality, eBanashree empowers local Keonjhar residents as celebrated conservation guardians."
    }
  ],
  comparisons: [
    {
      feature: "Maturity to Harvestable Timber",
      timber: "30 to 60+ Years (Slow Hardwood Growth)",
      bamboo: "3 to 5 Years (Rapid Annual Culm Harvest)"
    },
    {
      feature: "Post-Harvest State of the Land",
      timber: "Clear-cut wasteland, stump death, erosion",
      bamboo: "Living root system intact, immediate new shoots"
    },
    {
      feature: "Replanting Requirement",
      timber: "Mandatory manual replanting; high sapling mortality",
      bamboo: "Zero replanting needed; perpetual rhizome network"
    },
    {
      feature: "Soil & Slope Protection",
      timber: "Severe topsoil washaway and sediment runoff",
      bamboo: "Dense 40,000 km root mesh locks topsoil permanently"
    },
    {
      feature: "Net Carbon Balance at Harvest",
      timber: "Massive carbon emission as roots decay and land burns",
      bamboo: "40% carbon stays permanently locked in living roots"
    },
    {
      feature: "Structural Tensile Strength",
      timber: "Moderate (~5,000 - 12,000 psi)",
      bamboo: "Exceptional (~28,000 psi; surpasses structural steel)"
    }
  ],
  challenges: [
    {
      id: "zero-wood-challenge",
      badge: "Challenge 01 • 100% Tree-Free Architecture",
      icon: "🏗️",
      challenge: "Building Without Cutting Down a Single Tree",
      description: "Traditional hospitality construction relies on logging ancient Sal and Teak hardwoods. eBanashree took on the bold challenge to engineer our entire 50-acre retreat—from elevated canopy suites to rustic bamboo huts and gazebos—exclusively with renewable cultivated bamboo.",
      commitment: "Zero forest trees cut; 100% bamboo-engineered eco-hospitality."
    },
    {
      id: "soil-revival-challenge",
      badge: "Challenge 02 • Ecological Reclamation",
      icon: "🌱",
      challenge: "Reviving Mined & Degraded Odisha Soil",
      description: "Keonjhar's fragile slopes have faced heavy industrial mining scars and topsoil gullying where slow-growing hardwood saplings struggle to take root. We took on the challenge to stabilize barren terrain by planting thousands of bamboo culms that weave a 40,000 km root mesh per hectare, stopping erosion and recharging depleted groundwater.",
      commitment: "Transforming rocky wastelands into a flourishing 50-acre emerald canopy."
    },
    {
      id: "livelihood-challenge",
      badge: "Challenge 03 • Community Stewardship",
      icon: "🤝",
      challenge: "Ending Forest Poaching via Dignified Rural Livelihoods",
      description: "Illegal woodcutting in tribal belts is often driven by lack of alternative income. We took on the challenge to eliminate tree felling by providing dignified year-round employment in bamboo nursery propagation, artisan crafting, and retreat operations—turning villagers into celebrated forest guardians.",
      commitment: "100% local community workforce committed to defending native forests."
    },
    {
      id: "bioenergy-challenge",
      badge: "Challenge 04 • Clean Energy Transition",
      icon: "🔥",
      challenge: "Halting Forest Depletion for Fuelwood & Charcoal",
      description: "Over 2 billion people rely on firewood, causing continuous forest thinning. We took on the challenge to pioneer high-density bamboo charcoal and biomass pellets that burn twice as hot as wood charcoal with minimal smoke, offering an eco-friendly fuel alternative that leaves wild trees standing.",
      commitment: "Promoting renewable bamboo bio-energy to phase out forest firewood reliance."
    }
  ]
};


