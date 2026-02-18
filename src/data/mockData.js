// Mock data for event services
export const servicesData = [
  {
    id: 1,
    name: "DJ Pro Sounds",
    category: "DJ",
    price: 15000,
    rating: 4.8,
    location: "Chennai",
    availability: "Available",
    description: "Professional DJ services for all events with top equipment. We provide state-of-the-art sound systems, lighting effects, and experienced DJs who can read the crowd and keep the energy high throughout your event.",
    longDescription: "DJ Pro Sounds has been serving the Chennai area for over 10 years. We specialize in weddings, corporate events, and private parties. Our team includes 5 professional DJs with expertise in various music genres. We provide complete event planning consultation and can coordinate with your venue for seamless setup.",
    images: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop"
    ],
    reviews: [
      { id: 1, user: "Sarah Johnson", rating: 5, comment: "Amazing DJ! Kept our wedding reception going all night!", date: "2024-01-15" },
      { id: 2, user: "Mike Thompson", rating: 4, comment: "Great music selection and professional equipment.", date: "2024-01-10" },
      { id: 3, user: "Emily Davis", rating: 5, comment: "Perfect for our corporate holiday party. Highly recommend!", date: "2023-12-20" },
      { id: 4, user: "David Wilson", rating: 4, comment: "Good service, but arrived a bit late to setup.", date: "2023-12-15" },
      { id: 5, user: "Lisa Brown", rating: 5, comment: "Absolutely fantastic! Made our event unforgettable.", date: "2023-12-10" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-02-14", "2024-02-15", "2024-02-20", "2024-02-25"],
      availableDates: ["2024-02-16", "2024-02-17", "2024-02-18", "2024-02-22", "2024-02-23", "2024-02-24"]
    },
    contactInfo: {
      phone: "+91 98765 43210",
      email: "bookings@djprosounds.com",
      website: "www.djprosounds.com"
    }
  },
  {
    id: 2,
    name: "Elite Photography",
    category: "Photographer",
    price: 25000,
    rating: 4.9,
    location: "Coimbatore",
    availability: "Available",
    description: "Award-winning photography for weddings and corporate events",
    longDescription: "Elite Photography has won multiple awards for wedding and event photography. Our team of 8 professional photographers uses the latest Canon and Nikon equipment. We offer packages that include digital copies, prints, albums, and online galleries. Specializing in natural light photography and creative compositions.",
    images: [
      "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop"
    ],
    reviews: [
      { id: 1, user: "Jennifer Martinez", rating: 5, comment: "Stunning wedding photos! Captured every special moment.", date: "2024-01-12" },
      { id: 2, user: "Robert Garcia", rating: 5, comment: "Professional and creative. Worth every penny!", date: "2024-01-08" },
      { id: 3, user: "Amanda Lee", rating: 4, comment: "Great photos, but delivery took longer than expected.", date: "2023-12-22" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-02-10", "2024-02-11", "2024-02-18"],
      availableDates: ["2024-02-12", "2024-02-13", "2024-02-14", "2024-02-15", "2024-02-16", "2024-02-17"]
    },
    contactInfo: {
      phone: "+91 98765 43211",
      email: "info@elitephotography.com",
      website: "www.elitephotography.com"
    }
  },
  {
    id: 3,
    name: "Gourmet Catering",
    category: "Caterer",
    price: 40000,
    rating: 4.7,
    location: "Madurai",
    availability: "Available",
    description: "Premium catering services with customizable menus",
    longDescription: "Gourmet Catering offers exquisite culinary experiences for events of all sizes. Our executive chef creates custom menus using locally sourced, organic ingredients. We specialize in South Indian cuisine, dietary accommodations, and elegant presentation. Services include full staff, equipment rental, and event coordination.",
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop"
    ],
    reviews: [
      { id: 1, user: "Thomas Clark", rating: 5, comment: "Exceptional food and presentation. Guests were impressed!", date: "2024-01-14" },
      { id: 2, user: "Maria Rodriguez", rating: 4, comment: "Delicious menu options and professional service.", date: "2024-01-09" },
      { id: 3, user: "James Wilson", rating: 5, comment: "Best catering service in Madurai. Highly recommended!", date: "2023-12-18" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-02-08", "2024-02-09", "2024-02-16"],
      availableDates: ["2024-02-10", "2024-02-11", "2024-02-12", "2024-02-13", "2024-02-14", "2024-02-15"]
    },
    contactInfo: {
      phone: "+91 98765 43212",
      email: "events@gourmetcatering.com",
      website: "www.gourmetcatering.com"
    }
  },
  {
    id: 4,
    name: "Beat Masters DJ",
    category: "DJ",
    price: 12000,
    rating: 4.5,
    location: "Trichy",
    availability: "Booked",
    description: "Energetic DJs specializing in dance music events",
    longDescription: "Beat Masters DJ brings high-energy performances to Trichy's vibrant event scene. Specializing in Tamil beats, EDM, and top 40 music. Our DJs are fluent in both English and Tamil. We provide lighting, fog machines, and custom playlists. Perfect for clubs, parties, and cultural events.",
    images: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=500&fit=crop"
    ],
    reviews: [
      { id: 1, user: "Karthik", rating: 5, comment: "Incredible! The party didn't stop all night.", date: "2024-01-13" },
      { id: 2, user: "Sophia Lopez", rating: 4, comment: "Great energy and music selection for our party.", date: "2024-01-07" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-02-14", "2024-02-15", "2024-02-21", "2024-02-22", "2024-02-28"],
      availableDates: ["2024-02-16", "2024-02-17", "2024-02-23", "2024-02-24"]
    },
    contactInfo: {
      phone: "+91 98765 43213",
      email: "book@beatmastersdj.com",
      website: "www.beatmastersdj.com"
    }
  },
  {
    id: 5,
    name: "Portrait Studio",
    category: "Photographer",
    price: 18000,
    rating: 4.6,
    location: "Salem",
    availability: "Available",
    description: "Studio and on-location photography services",
    longDescription: "Portrait Studio offers professional portrait sessions in our state-of-the-art studio or at locations throughout Tamil Nadu. We specialize in family portraits, headshots, engagement photos, and creative concepts. Our packages include digital files, prints, and retouching services.",
    images: [
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1515023115689-589c33041d4c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop"
    ],
    reviews: [
      { id: 1, user: "Rachel Kim", rating: 5, comment: "Beautiful family portraits! Very patient with our kids.", date: "2024-01-11" },
      { id: 2, user: "Daniel Park", rating: 4, comment: "Great headshots for my professional portfolio.", date: "2024-01-06" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-02-09", "2024-02-10"],
      availableDates: ["2024-02-11", "2024-02-12", "2024-02-13", "2024-02-14", "2024-02-15", "2024-02-16"]
    },
    contactInfo: {
      phone: "+91 98765 43214",
      email: "studio@portraitstudio.com",
      website: "www.portraitstudio.com"
    }
  },
  {
    id: 6,
    name: "Delicious Bites",
    category: "Caterer",
    price: 30000,
    rating: 4.4,
    location: "Tirunelveli",
    availability: "Available",
    description: "Fresh and delicious catering for all occasions",
    longDescription: "Delicious Bites brings Tirunelveli's finest ingredients to your events. We specialize in traditional Halwa, South Indian cuisine, and modern fare. Our team focuses on sustainable sourcing and creative presentation. Perfect for corporate events, weddings, and private parties.",
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop"
    ],
    reviews: [
      { id: 1, user: "William Taylor", rating: 4, comment: "Excellent food options for our corporate event.", date: "2024-01-10" },
      { id: 2, user: "Olivia Harris", rating: 5, comment: "The Halwa was incredible! Will book again.", date: "2024-01-05" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-02-08", "2024-02-15"],
      availableDates: ["2024-02-09", "2024-02-10", "2024-02-11", "2024-02-12", "2024-02-13", "2024-02-14"]
    },
    contactInfo: {
      phone: "+91 98765 43215",
      email: "catering@deliciousbites.com",
      website: "www.deliciousbites.com"
    }
  },
  {
    id: 7,
    name: "Sound Wave DJ",
    category: "DJ",
    price: 13500,
    rating: 4.3,
    location: "Erode",
    availability: "Available",
    description: "Modern DJ services with the latest music technology",
    longDescription: "Sound Wave DJ brings cutting-edge audio technology to Erode. We specialize in electronic music, indie, and alternative genres. Our equipment includes Pioneer DJ controllers and intelligent lighting. Perfect for clubs, festivals, and events.",
    images: [
      "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&h=400&fit=crop"
    ],
    reviews: [
      { id: 1, user: "Kevin Moore", rating: 4, comment: "Great sound quality and lighting effects.", date: "2024-01-09" },
      { id: 2, user: "Jessica White", rating: 4, comment: "Perfect for our music event.", date: "2024-01-04" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-02-07", "2024-02-14"],
      availableDates: ["2024-02-08", "2024-02-09", "2024-02-10", "2024-02-11", "2024-02-12", "2024-02-13"]
    },
    contactInfo: {
      phone: "+91 98765 43216",
      email: "bookings@soundwavedj.com",
      website: "www.soundwavedj.com"
    }
  },
  {
    id: 8,
    name: "Event Photographers",
    category: "Photographer",
    price: 22000,
    rating: 4.8,
    location: "Vellore",
    availability: "Booked",
    description: "Professional event photography with quick turnaround",
    longDescription: "Event Photographers captures the essence of Vellore's vibrant event scene. We specialize in live music events, festivals, and cultural celebrations. Our photographers are skilled in action shots, crowd energy, and artistic compositions. Quick digital delivery and social media-ready content included.",
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop"
    ],
    reviews: [
      { id: 1, user: "Michael Brown", rating: 5, comment: "Amazing photos from our music festival!", date: "2024-01-08" },
      { id: 2, user: "Sarah Davis", rating: 5, comment: "Quick turnaround and stunning results.", date: "2024-01-03" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-02-10", "2024-02-11", "2024-02-17", "2024-02-18"],
      availableDates: ["2024-02-12", "2024-02-13", "2024-02-14", "2024-02-15", "2024-02-16"]
    },
    contactInfo: {
      phone: "+91 98765 43217",
      email: "info@eventphotographers.com",
      website: "www.eventphotographers.com"
    }
  },
  {
    id: 9,
    name: "Royal Decorators",
    category: "Decorator",
    price: 35000,
    rating: 4.7,
    location: "Chennai",
    availability: "Available",
    description: "Exquisite wedding and corporate event decorations",
    longDescription: "Royal Decorators specializes in creating breathtaking environments for your most special occasions. From floral arrangements to themed stage setups, we bring your vision to life with elegance and precision.",
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&h=500&fit=crop"
    ],
    reviews: [
      { id: 1, user: "Anand", rating: 5, comment: "The decor was beyond our expectations!", date: "2024-02-01" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-02-28"],
      availableDates: ["2024-03-01", "2024-03-02"]
    },
    contactInfo: {
      phone: "+91 98765 43220",
      email: "info@royaldecorators.com",
      website: "www.royaldecorators.com"
    }
  },
  {
    id: 10,
    name: "Sparkle Makeup Studio",
    category: "Makeup",
    price: 15000,
    rating: 4.9,
    location: "Coimbatore",
    availability: "Available",
    description: "Professional bridal and fashion makeup services",
    longDescription: "Get the perfect look for your big day with Sparkle Makeup Studio. Our expert artists use premium products to enhance your natural beauty. We offer bridal, celebrity, and party makeup packages.",
    images: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=500&fit=crop"
    ],
    reviews: [
      { id: 1, user: "Priya", rating: 5, comment: "Made me look like a queen on my wedding day!", date: "2024-01-25" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-02-20"],
      availableDates: ["2024-02-21", "2024-02-22"]
    },
    contactInfo: {
      phone: "+91 98765 43221",
      email: "sparkle@makeupstudio.com",
      website: "www.sparklemakeup.com"
    }
  },
  {
    id: 11,
    name: "Grand Event Planners",
    category: "Planner",
    price: 50000,
    rating: 4.8,
    location: "Madurai",
    availability: "Available",
    description: "End-to-end event management for weddings and parties",
    longDescription: "Sit back and relax while we handle every detail of your event. Grand Event Planners provides comprehensive management, from venue selection to guest coordination.",
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1505373633519-2479e0996841?w=800&h=500&fit=crop"
    ],
    reviews: [
      { id: 1, user: "Suresh", rating: 5, comment: "Seamless execution. Highly professional team.", date: "2024-02-05" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-03-10"],
      availableDates: ["2024-03-11", "2024-03-12"]
    },
    contactInfo: {
      phone: "+91 98765 43222",
      email: "hello@grandevents.com",
      website: "www.grandevents.com"
    }
  },
  {
    id: 12,
    name: "Light & Magic",
    category: "Lighting",
    price: 10000,
    rating: 4.6,
    location: "Trichy",
    availability: "Available",
    description: "Creative lighting solutions for every mood",
    longDescription: "Transform your venue with our intelligent lighting systems. We provide spotlighting, ambient mood lights, and festive decorations for any occasion.",
    images: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop"
    ],
    reviews: [
      { id: 1, user: "Ravi", rating: 4, comment: "Great lights, made the party look amazing!", date: "2024-01-30" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-02-14"],
      availableDates: ["2024-02-15", "2024-02-16"]
    },
    contactInfo: {
      phone: "+91 98765 43223",
      email: "sales@lightmagic.com",
      website: "www.lightmagic.com"
    }
  },
  {
    id: 13,
    name: "Sweet Treats Bakery",
    category: "Bakery",
    price: 5000,
    rating: 4.9,
    location: "Salem",
    availability: "Available",
    description: "Custom cakes and desserts for your celebrations",
    longDescription: "From wedding cakes to party platters, Sweet Treats Bakery offers delicious, handcrafted desserts using the finest ingredients.",
    images: [
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=500&fit=crop"
    ],
    reviews: [
      { id: 1, user: "Meena", rating: 5, comment: "The cake was both beautiful and tasty!", date: "2024-02-10" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-02-14"],
      availableDates: ["2024-02-15", "2024-02-16"]
    },
    contactInfo: {
      phone: "+91 98765 43224",
      email: "cakes@sweettreats.com",
      website: "www.sweettreats.com"
    }
  },
  {
    id: 14,
    name: "Capture Moments",
    category: "Videographer",
    price: 20000,
    rating: 4.7,
    location: "Vellore",
    availability: "Available",
    description: "Cinematic event videography and live streaming",
    longDescription: "We capture every emotion of your event in high definition. Specializing in cinematic wedding films, corporate highlights, and live event coverage.",
    images: [
      "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1508700115892-45ecd0562c3e?w=800&h=500&fit=crop"
    ],
    reviews: [
      { id: 1, user: "John", rating: 5, comment: "The wedding film was like a movie!", date: "2024-01-20" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-03-20"],
      availableDates: ["2024-03-21", "2024-03-22"]
    },
    contactInfo: {
      phone: "+91 98765 43225",
      email: "videos@capturemoments.com",
      website: "www.capturemoments.com"
    }
  }
];

export const categories = ["All", "DJ", "Photographer", "Caterer", "Decorator", "Makeup", "Planner", "Lighting", "Bakery", "Videographer"];
export const locations = ["All", "Chennai", "Coimbatore", "Madurai", "Trichy", "Salem", "Tirunelveli", "Erode", "Vellore"];
