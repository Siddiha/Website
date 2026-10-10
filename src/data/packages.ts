import { TravelPackage } from '../types/travel';

export const HERO_IMAGE_URL = '/src/assets/images/hero_travel_agency_1791635437871.jpg';

export const TRAVEL_PACKAGES: TravelPackage[] = [
  {
    id: 'sri-lanka-wonders-luxury',
    title: 'Sri Lanka Wonders: Sigiriya, Ella & Yala Safari',
    destination: 'Sigiriya, Kandy, Nuwara Eliya, Ella & Yala',
    country: 'Sri Lanka',
    category: 'adventure',
    duration: '8 Days / 7 Nights',
    durationDays: 8,
    priceUSD: 1450,
    originalPriceUSD: 1750,
    image: '/src/assets/images/pkg_srilanka_ceylon_1791636856530.jpg',
    accentGradient: 'from-emerald-500/30 to-amber-500/20',
    rating: 4.97,
    reviewsCount: 230,
    featured: true,
    overview: 'Discover the Pearl of the Indian Ocean in vibrant luxury. Climb ancient Sigiriya Rock, ride the iconic blue train through emerald Ceylon tea hills, explore historic Temple of the Tooth in Kandy, and spot wild leopards on a private Yala safari.',
    highlights: [
      'Private climb of UNESCO Sigiriya Rock Fortress with archeologist guide',
      'First-class scenic observation carriage train ride across Demodara Nine Arch Bridge',
      'Exclusive 4x4 private game drive in Yala National Park tracking leopards & wild elephants',
      'Heritage Ceylon tea plucking masterclass & stay in colonial luxury tea planter bungalows'
    ],
    inclusions: [
      '7 nights in 5-star luxury heritage boutique resorts & safari glamping lodges',
      'Private air-conditioned luxury vehicle with certified English/multilingual chauffeur guide',
      'Daily gourmet Sri Lankan and international breakfast & selected romantic dinners',
      'Scenic Kandy-to-Ella train tickets & all national park entry permits',
      'Complimentary Ceylon spiced tea & Ayurvedic herbal spa treatment'
    ],
    exclusions: [
      'International flights into Colombo (CMB)',
      'Sri Lanka Electronic Travel Authorization (ETA visa fee)',
      'Alcoholic beverages outside dinner inclusions',
      'Personal travel insurance'
    ],
    bestTimeToVisit: 'Year-round (Best: Dec to April & July to Sept)',
    groupType: 'Couples, Families & Private Small Groups',
    itinerary: [
      {
        day: 1,
        title: 'Colombo Airport Welcome & Cultural Triangle',
        description: 'Warm traditional Ayubowan welcome with fresh king coconut at Colombo Airport (CMB). Scenic private transfer to your luxury resort overlooking Sigiriya.'
      },
      {
        day: 2,
        title: 'Sigiriya Lion Rock & Dambulla Cave Temple',
        description: 'Morning ascent to the 5th-century royal palace atop Sigiriya rock fortress. Afternoon visit to the ancient golden cave murals in Dambulla.'
      },
      {
        day: 3,
        title: 'Royal City of Kandy & Temple of the Tooth',
        description: 'Drive through spice gardens to Kandy. Evening visit to the sacred Temple of the Sacred Tooth Relic and traditional cultural dance performance.'
      },
      {
        day: 4,
        title: 'Nuwara Eliya "Little England" & Tea Plantations',
        description: 'Ascend into misty mountains covered in emerald tea hills. Tour a vintage colonial tea factory, tasting world-renowned single-origin Ceylon tea.'
      },
      {
        day: 5,
        title: 'Iconic Blue Mountain Train & Ella Nine Arch Bridge',
        description: 'Board the world-famous highland train winding through waterfalls and valleys to Ella. Sunset walk to the picturesque Nine Arch Bridge.'
      },
      {
        day: 6,
        title: 'Yala National Park Luxury Leopard Safari',
        description: 'Transfer south to Yala. Afternoon private 4WD open-top safari tracking Sri Lankan leopards, sloth bears, and massive herds of wild elephants.'
      },
      {
        day: 7,
        title: 'Galle Dutch Fort & Southern Coastal Sunset',
        description: 'Drive along the golden southern coast to the 17th-century UNESCO Galle Fort. Cobblestone artisan walks, boutique shopping, and oceanfront dinner.'
      },
      {
        day: 8,
        title: 'Coastal Drive & Colombo Airport Departure',
        description: 'Relaxed breakfast overlooking the Indian Ocean and comfortable highway transfer back to Bandaranaike International Airport.'
      }
    ]
  },
  {
    id: 'turkey-cappadocia-istanbul-grand',
    title: 'Turkey Grand Escape: Cappadocia & Istanbul Bosphorus',
    destination: 'Istanbul, Cappadocia & Pamukkale',
    country: 'Turkey',
    category: 'cultural',
    duration: '8 Days / 7 Nights',
    durationDays: 8,
    priceUSD: 1890,
    originalPriceUSD: 2250,
    image: '/src/assets/images/pkg_turkey_cappadocia_1791636835450.jpg',
    accentGradient: 'from-amber-600/30 to-rose-600/20',
    rating: 4.96,
    reviewsCount: 198,
    featured: true,
    overview: 'Witness hundreds of vibrant hot air balloons drift over Cappadocia fairy chimneys, sleep in authentic luxury cave suites, glide on a private Bosphorus yacht, and marvel at the Blue Mosque and Hagia Sophia.',
    highlights: [
      'Sunrise hot air balloon flight over Cappadocia fairy chimney valleys',
      'Private sunset luxury yacht cruise along the Istanbul Bosphorus Strait',
      'VIP guided access to Hagia Sophia, Blue Mosque, and Topkapi Palace',
      'Authentic Turkish hamam bath experience and rooftop Anatolian culinary dinners'
    ],
    inclusions: [
      '4 nights in 5-star Istanbul historic hotel + 3 nights luxury Cappadocia cave suite',
      'Domestic flights between Istanbul and Cappadocia (ASR/NAV)',
      'Sunrise hot air balloon ticket and champagne celebration',
      'Private English-speaking licensed Turkish historian guide',
      'Daily Turkish spread breakfasts and 3 authentic specialty dinners'
    ],
    exclusions: [
      'International flights to/from Istanbul',
      'Turkish tourist eVisa fee',
      'Personal carpet/leather/jewelry shopping',
      'Tips for drivers and local guides'
    ],
    bestTimeToVisit: 'April to June & Sept to November',
    groupType: 'Couples, Honeymooners & Friends',
    itinerary: [
      {
        day: 1,
        title: 'Istanbul Welcome & Bosphorus Evening Stroll',
        description: 'VIP private airport transfer to your luxury hotel. Evening welcome dinner overlooking the glittering Bosphorus bridges.'
      },
      {
        day: 2,
        title: 'Hagia Sophia, Blue Mosque & Grand Bazaar',
        description: 'Immerse in Byzantine and Ottoman marvels. Explore Sultanahmet, Hagia Sophia, and navigate the fragrant spice and lamp stalls of the Grand Bazaar.'
      },
      {
        day: 3,
        title: 'Topkapi Palace & Private Bosphorus Yacht Sail',
        description: 'Walk through the imperial sultan quarters of Topkapi Palace. Afternoon private yacht charter with Turkish tea and sunset meze platters.'
      },
      {
        day: 4,
        title: 'Flight to Cappadocia & Underground City',
        description: 'Fly to Cappadocia. Check into a dramatic luxury cave boutique hotel with panoramic terrace. Explore the multi-level Kaymakli underground city.'
      },
      {
        day: 5,
        title: 'Sunrise Hot Air Balloon Flight & Love Valley',
        description: 'Early morning flight above volcanic rock spires at sunrise. Afternoon hike through Love Valley and pottery workshop in Avanos.'
      },
      {
        day: 6,
        title: 'Goreme Open Air Museum & Turkish Night',
        description: 'Ancient rock-carved churches adorned with 1,000-year-old frescoes. Evening Anatolian folkloric dinner with authentic Turkish live music.'
      },
      {
        day: 7,
        title: 'Return Flight to Istanbul & Modern Beyoglu',
        description: 'Flight back to Istanbul. Afternoon stroll along trendy Galata Tower and Istiklal Avenue for Turkish delight shopping.'
      },
      {
        day: 8,
        title: 'Turkish Hamam Relaxation & Departure',
        description: 'Traditional marble Turkish bath and foam massage, followed by a private transfer to Istanbul International Airport.'
      }
    ]
  },
  {
    id: 'thailand-phuket-phi-phi-luxury',
    title: 'Thailand Luxury Bliss: Phuket, Phi Phi & Bangkok',
    destination: 'Bangkok, Phuket & Phi Phi Islands',
    country: 'Thailand',
    category: 'tropical',
    duration: '7 Days / 6 Nights',
    durationDays: 7,
    priceUSD: 1280,
    originalPriceUSD: 1550,
    image: '/src/assets/images/pkg_thailand_phuket_1791636845549.jpg',
    accentGradient: 'from-teal-500/30 to-amber-500/20',
    rating: 4.93,
    reviewsCount: 245,
    featured: true,
    overview: 'Sail turquoise emerald lagoons in a private luxury longtail boat around Phi Phi, lounge in 5-star cliffside pool villas in Phuket, and savor Michelin street food and gilded royal temples in Bangkok.',
    highlights: [
      'Private longtail boat cruise to Maya Bay & Pileh Lagoon with snorkeling',
      'Exclusive sunset rooftop dinner in Bangkok overlooking the Chao Phraya River',
      'Phuket 5-star ocean-view infinity pool villa retreat',
      'Ethical elephant sanctuary interactive visit with mud bathing'
    ],
    inclusions: [
      '3 nights Bangkok luxury 5-star riverside hotel + 3 nights Phuket beachfront villa',
      'Domestic flights between Bangkok and Phuket (BKK-HKT)',
      'Private speedboat island hopping charter to Phi Phi and Bamboo Island',
      'Daily lavish tropical buffet breakfast',
      'Private air-conditioned transfers throughout Thailand'
    ],
    exclusions: [
      'International airfare',
      'Thailand visa fee on arrival (if applicable)',
      'Water sports & scuba diving gear rentals',
      'Personal dining outside included meals'
    ],
    bestTimeToVisit: 'November to April',
    groupType: 'Couples, Families & Groups',
    itinerary: [
      {
        day: 1,
        title: 'Bangkok Arrival & Chao Phraya Dinner Cruise',
        description: 'Private airport greeting. Evening luxury dinner cruise aboard an illuminated teak wood vessel past Wat Arun and the Grand Palace.'
      },
      {
        day: 2,
        title: 'Grand Palace, Wat Pho & Floating Markets',
        description: 'Admire the emerald and reclining Buddha statues. Afternoon traditional longtail canal tour through Bangkok vibrant water markets.'
      },
      {
        day: 3,
        title: 'Flight to Phuket & Sunset Beach Club',
        description: 'Short domestic flight to tropical Phuket. Check into your private sea-view villa, evening cocktails at an exclusive sunset beach club.'
      },
      {
        day: 4,
        title: 'Phi Phi Islands & Maya Bay VIP Speedboat',
        description: 'Cruise to pristine Pileh Lagoon. Snorkel in crystal emerald waters with tropical fish and visit world-famous Maya Bay.'
      },
      {
        day: 5,
        title: 'Ethical Elephant Sanctuary Care Day',
        description: 'Feed, walk alongside, and bathe rescued gentle giant elephants in a protected tropical jungle sanctuary.'
      },
      {
        day: 6,
        title: 'Old Phuket Town Heritage & Thai Cooking',
        description: 'Sino-Portuguese colorful heritage houses, vibrant street art, followed by an interactive Thai royal cooking class.'
      },
      {
        day: 7,
        title: 'Tropical Spa Treatment & Flight Departure',
        description: 'Morning traditional Thai massage, souvenir shopping for silk and spices, and transfer to Phuket International Airport.'
      }
    ]
  },
  {
    id: 'maldives-overwater-bliss',
    title: 'Maldives Overwater Sanctuary',
    destination: 'Baa Atoll & North Malé',
    country: 'Maldives',
    category: 'tropical',
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    priceUSD: 2450,
    originalPriceUSD: 2890,
    image: '/src/assets/images/pkg_tropical_paradise_1791635449882.jpg',
    accentGradient: 'from-cyan-500/30 to-blue-500/20',
    rating: 4.98,
    reviewsCount: 164,
    featured: false,
    overview: 'Experience pure paradise just an hour flight from Sri Lanka. Unwind in a luxury overwater villa with private plunge pool, panoramic lagoon views, marine biology snorkeling, and all-inclusive dining.',
    highlights: [
      'Private overwater villa with direct ocean steps and glass floor',
      'Daily catamaran snorkeling to UNESCO Biosphere Reserve with mantas',
      'Sunset champagne cruise and private beach candlelit dinner',
      'Complimentary scenic seaplane transfers both ways'
    ],
    inclusions: [
      '5 nights luxury overwater pool villa',
      'All-inclusive gourmet dining and beverages',
      'Roundtrip seaplane transfer from Malé International Airport',
      'Snorkeling gear & guided coral conservation excursion',
      '60-minute couple spa treatment'
    ],
    exclusions: [
      'Flights into Malé (MLE)',
      'Motorized water sports',
      'Travel insurance'
    ],
    bestTimeToVisit: 'November to May',
    groupType: 'Honeymooners & Couples',
    itinerary: [
      {
        day: 1,
        title: 'Seaplane Arrival & Overwater Villa Welcome',
        description: 'Scenic seaplane flight over turquoise atolls. Check in to your private ocean villa with chilled welcome champagne.'
      },
      {
        day: 2,
        title: 'Coral Reef Snorkeling & Marine Safari',
        description: 'Guided morning expedition to observe manta rays and turtles with resident marine biologists.'
      },
      {
        day: 3,
        title: 'Sandbank Picnic & Twilight Sunset Cruise',
        description: 'Private boat excursion to a deserted sandbank with gourmet lunch. Evening dolphin sunset sail.'
      },
      {
        day: 4,
        title: 'Overwater Spa & Starlight Cinema',
        description: 'Signature spa treatment accompanied by ocean sounds. Private candlelit open-air cinema on the beach.'
      },
      {
        day: 5,
        title: 'Water Sports & Beachside Seafood BBQ',
        description: 'Paddleboarding in calm waters. Exclusive 5-course seafood barbecue grilled right on the white sand.'
      },
      {
        day: 6,
        title: 'Floating Breakfast & Departure',
        description: 'Floating breakfast in your private pool and scenic seaplane return transfer to Malé.'
      }
    ]
  },
  {
    id: 'dubai-desert-luxury-escape',
    title: 'Dubai Glamour & Royal Desert Oasis',
    destination: 'Dubai & Al Marmoom Desert',
    country: 'United Arab Emirates',
    category: 'luxury',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    priceUSD: 1780,
    originalPriceUSD: 2100,
    image: '/src/assets/images/hero_travel_agency_1791635437871.jpg',
    accentGradient: 'from-amber-500/30 to-yellow-500/20',
    rating: 4.91,
    reviewsCount: 140,
    featured: false,
    overview: 'Experience the heights of futuristic Arabian luxury: private yacht cruise along Dubai Marina, VIP Burj Khalifa lounge access, and a starlight glamping experience in dunes.',
    highlights: [
      'Burj Khalifa Level 148 VIP lounge access with high tea',
      'Private sunset desert safari in vintage Land Rovers with falconry',
      'Private luxury yacht charter around Palm Jumeirah',
      'Dine under the desert stars with authentic Emirati feast'
    ],
    inclusions: [
      '3 nights 5-star Dubai Marina hotel + 1 night desert resort suite',
      'Private airport luxury transfers',
      'Private desert safari with stargazing astronomer guide',
      'Museum of the Future priority tickets',
      'Daily gourmet breakfast'
    ],
    exclusions: [
      'International flights to Dubai (DXB)',
      'UAE tourism dirham fee',
      'Personal shopping'
    ],
    bestTimeToVisit: 'October to April',
    groupType: 'Couples, Families & VIP Travelers',
    itinerary: [
      {
        day: 1,
        title: 'Dubai Arrival & Marina Skyline Walk',
        description: 'Private chauffeur transfer to your 5-star marina suite. Evening stroll along the vibrant Dubai Marina promenade.'
      },
      {
        day: 2,
        title: 'Burj Khalifa Sky & Museum of the Future',
        description: 'Skip the line to the highest observation lounge, afternoon at the architectural marvel Museum of the Future.'
      },
      {
        day: 3,
        title: 'Private Yacht Cruise & Palm Jumeirah',
        description: 'Sail along the coast with views of Atlantis The Royal, swimming stop, and afternoon tea.'
      },
      {
        day: 4,
        title: 'Royal Desert Safari & Bedouin Camp',
        description: 'Vintage 4x4 desert drive, falconry display, dune sunset, traditional oud music, and luxury camp overnight.'
      },
      {
        day: 5,
        title: 'Gold Souk & VIP Departure',
        description: 'Breakfast, gold souk visit, and VIP airport transfer.'
      }
    ]
  },
  {
    id: 'swiss-alps-panoramic-express',
    title: 'Swiss Alps Panorama & Glacier Express',
    destination: 'Zermatt, Interlaken & St. Moritz',
    country: 'Switzerland',
    category: 'alpine',
    duration: '8 Days / 7 Nights',
    durationDays: 8,
    priceUSD: 2890,
    originalPriceUSD: 3200,
    image: '/src/assets/images/pkg_alpine_adventure_1791635461619.jpg',
    accentGradient: 'from-emerald-500/30 to-teal-500/20',
    rating: 4.92,
    reviewsCount: 184,
    featured: false,
    overview: 'Glide through dramatic alpine passes aboard the Glacier Express, explore the foot of the Matterhorn, and savor Swiss fondue amidst snow-capped peaks.',
    highlights: [
      'Glacier Express Excellence Class panoramic rail experience',
      'Gornergrat cogwheel train journey with Matterhorn reflections',
      'Lake Brienz private steamboat cruise & alpine meadow walks',
      'Swiss chocolate & cheese masterclass'
    ],
    inclusions: [
      '7 nights in curated 4-star boutique alpine chalet hotels',
      'First-class Swiss Travel Pass for all trains, boats & cable cars',
      'Daily alpine breakfast buffet and 3 curated culinary dinners',
      'Private mountain guide for Zermatt & Lauterbrunnen trails'
    ],
    exclusions: [
      'Flights into Zurich / Geneva',
      'Ski gear rentals & lift passes (if winter)',
      'Personal dining outside inclusions'
    ],
    bestTimeToVisit: 'May to October & Dec to March',
    groupType: 'Couples & Small Groups',
    itinerary: [
      {
        day: 1,
        title: 'Zurich Arrival & Lucerne Lakeside',
        description: 'Meet your private concierge, scenic rail transfer to Lucerne, evening stroll across Chapel Bridge.'
      },
      {
        day: 2,
        title: 'Mount Pilatus Golden Roundtrip',
        description: 'Steamboat ride across Lake Lucerne, ascent via the steepest cogwheel train, panoramic alpine lunch.'
      },
      {
        day: 3,
        title: 'Lauterbrunnen Valley of 72 Waterfalls',
        description: 'Transfer to Interlaken. Exploration of Staubbach Falls and Trümmelbach glacial waterfalls.'
      },
      {
        day: 4,
        title: 'Jungfraujoch Top of Europe',
        description: 'Ascend to 3,454m altitude. Ice Palace tour and view of the great Aletsch Glacier.'
      },
      {
        day: 5,
        title: 'Zermatt & The Matterhorn Foothills',
        description: 'Rail to car-free Zermatt. Sunset viewpoint hike to see the golden alpenglow on the Matterhorn.'
      },
      {
        day: 6,
        title: 'Gornergrat Railway & Alpine Fondue',
        description: 'Ride the open-air cogwheel train up to 3,089m. Traditional raclette and fondue feast.'
      },
      {
        day: 7,
        title: 'Glacier Express Scenic Rail Day',
        description: 'Relax in first-class panoramic rail cars across the Landwasser Viaduct toward St. Moritz.'
      },
      {
        day: 8,
        title: 'St. Moritz Morning & Departure',
        description: 'Morning lakeside walk, Swiss chocolate shopping, and rail return to Zurich Airport.'
      }
    ]
  }
];

export const AGENCY_STATS = [
  { value: '5,200+', label: 'Happy Travelers', caption: 'Sri Lanka & global tours crafted' },
  { value: '99.6%', label: '5-Star Reviews', caption: 'Verified traveler satisfaction' },
  { value: '077 194 7844', label: 'Direct WhatsApp Line', caption: 'Sri Lanka instant concierge' },
  { value: '< 10 Mins', label: 'Fast Response', caption: 'Live support 7 days a week' },
];

export const AGENCY_PILLARS = [
  {
    title: 'Direct WhatsApp Concierge (0771947844)',
    description: 'No automated bots or delayed emails. Message us directly on WhatsApp for real-time rates, custom itineraries, flight connections, and instant voucher confirmations.',
    icon: 'MessageCircle'
  },
  {
    title: 'Sri Lanka & Global Destinations',
    description: 'From luxury Ceylon tea estate journeys and Yala safaris to Turkey hot air balloons, Thailand island hopping, and Maldives water villas, we craft bespoke holidays worldwide.',
    icon: 'Compass'
  },
  {
    title: 'Guaranteed Best Rates & Luxury Perks',
    description: 'Direct partnerships with premium luxury resorts, airlines, and licensed private chauffeurs give our travelers exclusive room upgrades and complimentary perks.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Complete Visa & 24/7 Trip Care',
    description: 'End-to-end support with visa applications, airport transfers, licensed multilingual guides, and 24/7 emergency WhatsApp backing while you travel.',
    icon: 'HeartHandshake'
  }
];

export const TRAVELER_TESTIMONIALS = [
  {
    quote: 'We booked our Turkey and Cappadocia hot air balloon holiday through Ceylon Aura on WhatsApp (0771947844). The response was lightning fast, cave hotel was spectacular, and everything was arranged smoothly from Colombo!',
    author: 'Mohamed Farhan & Fam',
    location: 'Colombo, Sri Lanka',
    trip: 'Turkey Grand Escape: Cappadocia & Istanbul',
    avatarLetter: 'F'
  },
  {
    quote: 'The 8-day luxury Sri Lanka tour was beyond magical! Sigiriya at sunrise, the scenic Ella train, and spotting leopards in Yala. Our private chauffeur guide was courteous and professional.',
    author: 'Sophie & Liam Bennett',
    location: 'Sydney, Australia',
    trip: 'Sri Lanka Wonders: Sigiriya, Ella & Yala',
    avatarLetter: 'S'
  },
  {
    quote: 'Our family Thailand vacation to Phuket and Phi Phi islands was flawless. Private boat tour was organized with zero hassle via WhatsApp. Highly recommended travel agency in Sri Lanka!',
    author: 'Kavinda & Dilhani Perera',
    location: 'Kandy, Sri Lanka',
    trip: 'Thailand Luxury Bliss: Phuket & Phi Phi',
    avatarLetter: 'K'
  }
];
