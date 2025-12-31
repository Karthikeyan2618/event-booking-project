// Mock data for event services
export const servicesData = [
  {
    id: 1,
    name: "DJ Pro Sounds",
    category: "DJ",
    price: 500,
    rating: 4.8,
    location: "New York",
    availability: "Available",
    description: "Professional DJ services for all events with top equipment. We provide state-of-the-art sound systems, lighting effects, and experienced DJs who can read the crowd and keep the energy high throughout your event.",
    longDescription: "DJ Pro Sounds has been serving the New York area for over 10 years. We specialize in weddings, corporate events, and private parties. Our team includes 5 professional DJs with expertise in various music genres. We provide complete event planning consultation and can coordinate with your venue for seamless setup.",
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
      phone: "+1 (555) 123-4567",
      email: "bookings@djprosounds.com",
      website: "www.djprosounds.com"
    }
  },
  {
    id: 2,
    name: "Elite Photography",
    category: "Photographer",
    price: 800,
    rating: 4.9,
    location: "Los Angeles",
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
      phone: "+1 (555) 987-6543",
      email: "info@elitephotography.com",
      website: "www.elitephotography.com"
    }
  },
  {
    id: 3,
    name: "Gourmet Catering",
    category: "Caterer",
    price: 1200,
    rating: 4.7,
    location: "Chicago",
    availability: "Available",
    description: "Premium catering services with customizable menus",
    longDescription: "Gourmet Catering offers exquisite culinary experiences for events of all sizes. Our executive chef creates custom menus using locally sourced, organic ingredients. We specialize in farm-to-table cuisine, dietary accommodations, and elegant presentation. Services include full staff, equipment rental, and event coordination.",
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop"
    ],
    reviews: [
      { id: 1, user: "Thomas Clark", rating: 5, comment: "Exceptional food and presentation. Guests were impressed!", date: "2024-01-14" },
      { id: 2, user: "Maria Rodriguez", rating: 4, comment: "Delicious menu options and professional service.", date: "2024-01-09" },
      { id: 3, user: "James Wilson", rating: 5, comment: "Best catering service in Chicago. Highly recommended!", date: "2023-12-18" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-02-08", "2024-02-09", "2024-02-16"],
      availableDates: ["2024-02-10", "2024-02-11", "2024-02-12", "2024-02-13", "2024-02-14", "2024-02-15"]
    },
    contactInfo: {
      phone: "+1 (555) 456-7890",
      email: "events@gourmetcatering.com",
      website: "www.gourmetcatering.com"
    }
  },
  {
    id: 4,
    name: "Beat Masters DJ",
    category: "DJ",
    price: 350,
    rating: 4.5,
    location: "Miami",
    availability: "Booked",
    description: "Energetic DJs specializing in dance music events",
    longDescription: "Beat Masters DJ brings high-energy performances to Miami's vibrant event scene. Specializing in Latin, EDM, and top 40 music. Our DJs are fluent in both English and Spanish. We provide lighting, fog machines, and custom playlists. Perfect for clubs, parties, and cultural events.",
    images: [
      "https://images.unsplash.com/photo-1501281667305-0d4e0ab1416f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?w=600&h=400&fit=crop"
    ],
    reviews: [
      { id: 1, user: "Carlos Mendez", rating: 5, comment: "¡Increíble! La fiesta no paró toda la noche.", date: "2024-01-13" },
      { id: 2, user: "Sophia Lopez", rating: 4, comment: "Great energy and music selection for our beach party.", date: "2024-01-07" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-02-14", "2024-02-15", "2024-02-21", "2024-02-22", "2024-02-28"],
      availableDates: ["2024-02-16", "2024-02-17", "2024-02-23", "2024-02-24"]
    },
    contactInfo: {
      phone: "+1 (555) 234-5678",
      email: "book@beatmastersdj.com",
      website: "www.beatmastersdj.com"
    }
  },
  {
    id: 5,
    name: "Portrait Studio",
    category: "Photographer",
    price: 600,
    rating: 4.6,
    location: "San Francisco",
    availability: "Available",
    description: "Studio and on-location photography services",
    longDescription: "Portrait Studio offers professional portrait sessions in our state-of-the-art studio or at locations throughout the Bay Area. We specialize in family portraits, headshots, engagement photos, and creative concepts. Our packages include digital files, prints, and retouching services.",
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
      phone: "+1 (555) 345-6789",
      email: "studio@portraitstudio.com",
      website: "www.portraitstudio.com"
    }
  },
  {
    id: 6,
    name: "Delicious Bites",
    category: "Caterer",
    price: 900,
    rating: 4.4,
    location: "Boston",
    availability: "Available",
    description: "Fresh and delicious catering for all occasions",
    longDescription: "Delicious Bites brings New England's finest ingredients to your events. We specialize in seafood, traditional New England cuisine, and modern American fare. Our team focuses on sustainable sourcing and creative presentation. Perfect for corporate events, weddings, and private parties.",
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop"
    ],
    reviews: [
      { id: 1, user: "William Taylor", rating: 4, comment: "Excellent seafood options for our corporate event.", date: "2024-01-10" },
      { id: 2, user: "Olivia Harris", rating: 5, comment: "The lobster rolls were incredible! Will book again.", date: "2024-01-05" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-02-08", "2024-02-15"],
      availableDates: ["2024-02-09", "2024-02-10", "2024-02-11", "2024-02-12", "2024-02-13", "2024-02-14"]
    },
    contactInfo: {
      phone: "+1 (555) 456-1234",
      email: "catering@deliciousbites.com",
      website: "www.deliciousbites.com"
    }
  },
  {
    id: 7,
    name: "Sound Wave DJ",
    category: "DJ",
    price: 450,
    rating: 4.3,
    location: "Seattle",
    availability: "Available",
    description: "Modern DJ services with the latest music technology",
    longDescription: "Sound Wave DJ brings cutting-edge audio technology to the Pacific Northwest. We specialize in electronic music, indie, and alternative genres. Our equipment includes Pioneer DJ controllers, Funktion-One sound systems, and intelligent lighting. Perfect for clubs, festivals, and underground events.",
    images: [
      "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&h=400&fit=crop"
    ],
    reviews: [
      { id: 1, user: "Kevin Moore", rating: 4, comment: "Great sound quality and lighting effects.", date: "2024-01-09" },
      { id: 2, user: "Jessica White", rating: 4, comment: "Perfect for our underground music event.", date: "2024-01-04" }
    ],
    availabilityCalendar: {
      bookedDates: ["2024-02-07", "2024-02-14"],
      availableDates: ["2024-02-08", "2024-02-09", "2024-02-10", "2024-02-11", "2024-02-12", "2024-02-13"]
    },
    contactInfo: {
      phone: "+1 (555) 567-8901",
      email: "bookings@soundwavedj.com",
      website: "www.soundwavedj.com"
    }
  },
  {
    id: 8,
    name: "Event Photographers",
    category: "Photographer",
    price: 700,
    rating: 4.8,
    location: "Austin",
    availability: "Booked",
    description: "Professional event photography with quick turnaround",
    longDescription: "Event Photographers captures the essence of Austin's vibrant event scene. We specialize in live music events, festivals, and cultural celebrations. Our photographers are skilled in action shots, crowd energy, and artistic compositions. Quick digital delivery and social media-ready content included.",
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
      phone: "+1 (555) 678-9012",
      email: "info@eventphotographers.com",
      website: "www.eventphotographers.com"
    }
  }
];

export const categories = ["All", "DJ", "Photographer", "Caterer"];
export const locations = ["All", "New York", "Los Angeles", "Chicago", "Miami", "San Francisco", "Boston", "Seattle", "Austin"];
