
const destinations = [
  {
    slug: "maasai-mara",
    name: "Maasai Mara",
    category: "Kenya",
    region: "Kenya • Wildlife Safari",
    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
      "https://images.unsplash.com/photo-1549366021-9f761d450615"
    ],
    description: "A classic Kenyan savannah safari with guided wildlife viewing, open plains and a stay at a selected camp or lodge. Wildlife sightings depend on season and conditions.",
    itinerary: [
      "Travel to the Maasai Mara, check in at your selected camp or lodge and take an afternoon game drive if arrival time permits.",
      "Enjoy a planned morning game drive, a break at camp and an afternoon wildlife-viewing drive.",
      "Explore another agreed part of the Mara with your guide before beginning your return journey.",
      "Enjoy an additional game-drive opportunity or a relaxed camp day, depending on your package.",
      "Have breakfast, check out and begin the return journey."
    ]
  },
  {
    slug: "amboseli",
    name: "Amboseli National Park",
    category: "Kenya",
    region: "Kenya • Elephant Safari",
    images: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    ],
    description: "An Amboseli safari focused on open plains, elephant-viewing opportunities and possible views of Mount Kilimanjaro when weather conditions allow.",
    itinerary: [
      "Travel to Amboseli and check in at your selected lodge or camp. Take an afternoon game drive if time permits.",
      "Set out for a morning game drive across Amboseli's plains, then return for a break before an afternoon wildlife-viewing session.",
      "Explore another agreed park area with your guide and enjoy time at the lodge.",
      "Enjoy an additional game drive or a slower lodge-based day.",
      "Have breakfast, check out and return to your agreed starting point."
    ]
  },
  {
    slug: "great-rift-valley",
    name: "Great Rift Valley",
    category: "Kenya",
    region: "Kenya • Scenic Getaway",
    images: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    ],
    description: "A scenic Kenya escape featuring Rift Valley viewpoints, lakeside stays and selected attractions around Naivasha and Nakuru.",
    itinerary: [
      "Depart for the Rift Valley with scenic stops at agreed viewpoints. Check in at your accommodation.",
      "Explore the Naivasha area or another selected lake destination.",
      "Enjoy a planned excursion to a selected attraction, viewpoint or nearby nature area.",
      "Take a relaxed morning and visit another agreed attraction.",
      "Have breakfast, check out and return to your starting point."
    ]
  },
  {
    slug: "diani-mombasa",
    name: "Diani & Mombasa",
    category: "Kenya",
    region: "Kenya • Coastal Holiday",
    images: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    ],
    description: "A Kenyan coast holiday combining beach time with selected Diani or Mombasa attractions. Hotel, transfers and excursions depend on your quotation.",
    itinerary: [
      "Travel to the coast and check in at your selected Diani or Mombasa accommodation.",
      "Enjoy a beach day with optional coastal activities arranged separately.",
      "Explore selected Mombasa or Diani attractions according to your preferred route.",
      "Enjoy another day for beach relaxation or a planned excursion.",
      "Check out after breakfast and transfer to your agreed departure point."
    ]
  },
  {
    slug: "samburu",
    name: "Samburu",
    category: "Kenya",
    region: "Kenya • Northern Safari",
    images: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      "https://images.unsplash.com/photo-1549366021-9f761d450615"
    ],
    description: "A northern Kenya safari through Samburu's dry-country landscapes, riverine habitats and distinctive wildlife-viewing areas.",
    itinerary: [
      "Travel north to Samburu and settle into your selected camp or lodge.",
      "Take a guided game drive in the reserve, exploring riverine and open-country habitats.",
      "Continue wildlife viewing in another agreed area and enjoy time at camp.",
      "Choose another game drive or a cultural visit if arranged and confirmed.",
      "Have breakfast and begin the return journey."
    ]
  },
  {
    slug: "watamu-malindi",
    name: "Watamu & Malindi",
    category: "Kenya",
    region: "Kenya • Coastal Escape",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b"
    ],
    description: "A relaxed North Coast holiday with Watamu and Malindi beaches, coastal scenery and optional marine or cultural experiences.",
    itinerary: [
      "Travel to Watamu or Malindi and check in at your selected accommodation.",
      "Spend time at the beach and explore the nearby coastal area.",
      "Choose a marine, nature or cultural excursion if available and included in your quotation.",
      "Enjoy another beach day or a pre-arranged visit to a local attraction.",
      "Check out after breakfast and transfer to your departure point."
    ]
  },
  {
    slug: "tsavo",
    name: "Tsavo National Parks",
    category: "Kenya",
    region: "Kenya • Wilderness Safari",
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      "https://images.unsplash.com/photo-1549366021-9f761d450615"
    ],
    description: "A safari in Tsavo East, Tsavo West or a combined route, with broad landscapes and guided wildlife viewing.",
    itinerary: [
      "Travel to the selected Tsavo park and check in at your lodge or camp.",
      "Enjoy a morning game drive in the agreed park area, followed by a break.",
      "Explore another section of the park with your guide.",
      "Enjoy an additional game drive or a relaxed stay at the lodge.",
      "Have breakfast and return to your agreed starting point."
    ]
  },
  {
    slug: "lake-nakuru",
    name: "Lake Nakuru",
    category: "Kenya",
    region: "Kenya • Lake & Wildlife",
    images: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5"
    ],
    description: "A nature and wildlife getaway around Lake Nakuru National Park, with scenic landscapes and opportunities for bird and wildlife viewing.",
    itinerary: [
      "Travel to Nakuru and check in at your selected accommodation.",
      "Visit Lake Nakuru National Park for a planned game drive.",
      "Enjoy another selected park circuit or nearby scenic attraction.",
      "Add a relaxed morning or visit another agreed Rift Valley attraction.",
      "Have breakfast and return to your starting point."
    ]
  },
  {
    slug: "tailor-made-kenya",
    name: "Tailor-made Kenya Tours",
    category: "Kenya",
    region: "Kenya • Custom Holiday",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    ],
    description: "A flexible Kenya itinerary built around your interests. Combine safari, coast, lakes, culture and scenic stops after agreeing the route.",
    itinerary: [
      "Begin your journey to your first selected Kenya destination.",
      "Explore the first destination with activities agreed in your personalised itinerary.",
      "Travel to the next selected location, with planned stops along the route.",
      "Enjoy another destination experience or a relaxed day.",
      "Complete the final activity and return to your agreed departure point."
    ]
  },
  {
    slug: "serengeti",
    name: "Serengeti",
    category: "East Africa",
    region: "Tanzania • Wildlife Safari",
    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5"
    ],
    description: "A Tanzania safari centred on Serengeti landscapes and guided game drives. Cross-border transport, park arrangements and accommodation must be confirmed.",
    itinerary: [
      "Travel to the Serengeti area using the agreed cross-border and transfer arrangements.",
      "Enjoy a guided game drive in the agreed Serengeti area.",
      "Continue wildlife viewing along a route selected with your guide.",
      "Explore another agreed area or enjoy a slower camp day.",
      "Have breakfast and depart according to the confirmed transfer arrangements."
    ]
  },
  {
    slug: "zanzibar",
    name: "Zanzibar",
    category: "East Africa",
    region: "Tanzania • Island Holiday",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b"
    ],
    description: "A Zanzibar island break featuring beach time, Stone Town and selected cultural visits, with accommodation and island transfers confirmed in your quotation.",
    itinerary: [
      "Arrive in Zanzibar using your confirmed flight or ferry arrangements and transfer to your accommodation.",
      "Enjoy a beach day and explore the surrounding coastal area.",
      "Visit Stone Town or another selected cultural attraction.",
      "Choose a further island excursion or enjoy a relaxed day by the coast.",
      "Check out and transfer for your confirmed departure."
    ]
  },
  {
    slug: "kigali-rwanda",
    name: "Kigali & Rwanda",
    category: "East Africa",
    region: "Rwanda • City & Countryside",
    images: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455"
    ],
    description: "A Rwanda city and countryside holiday with Kigali sightseeing and a selected excursion outside the capital. Special activities and permits require separate confirmation.",
    itinerary: [
      "Arrive in Kigali, transfer to your selected hotel and settle in.",
      "Explore selected Kigali landmarks and cultural sites.",
      "Travel to a selected countryside destination or nature area.",
      "Enjoy the selected excursion or a relaxed return to Kigali.",
      "Check out and transfer for your departure."
    ]
  },
  {
    slug: "dubai-abu-dhabi",
    name: "Dubai & Abu Dhabi",
    category: "International",
    region: "United Arab Emirates • City Holiday",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      "https://images.unsplash.com/photo-1512632578888-169bbbc64f33",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090"
    ],
    description: "An international UAE city break with Dubai landmarks and an optional Abu Dhabi visit. Flights, entry requirements, hotels and local transfers are quoted separately unless stated.",
    itinerary: [
      "Arrive in Dubai and transfer to your selected hotel using confirmed arrangements.",
      "Explore selected Dubai city landmarks and waterfront areas.",
      "Choose an optional desert or other local excursion if available and included.",
      "Take a planned day visit to Abu Dhabi or enjoy another selected Dubai attraction.",
      "Check out and transfer to the airport for your confirmed departure."
    ]
  },
  {
    slug: "maldives",
    name: "Maldives",
    category: "International",
    region: "Maldives • Island Escape",
    images: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    ],
    description: "A tropical island stay with resort time and optional marine experiences. Flights, resort transfers, room plan and excursions depend on the selected island and quotation.",
    itinerary: [
      "Arrive in the Maldives and transfer to your selected island resort using confirmed arrangements.",
      "Enjoy the resort and beach facilities according to your selected board plan.",
      "Choose an optional marine or island experience if available and included.",
      "Enjoy a further leisure day at the resort or a pre-arranged excursion.",
      "Check out and transfer for your confirmed international departure."
    ]
  },
  {
    slug: "mauritius-seychelles",
    name: "Mauritius & Seychelles",
    category: "International",
    region: "Indian Ocean • Island Holiday",
    images: [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    ],
    description: "Choose a Mauritius or Seychelles island holiday, or request a combined itinerary subject to flight connections and travel time.",
    itinerary: [
      "Arrive in your selected island destination and transfer to your confirmed accommodation.",
      "Enjoy a coastal day exploring nearby beaches and local surroundings.",
      "Take a selected island excursion or sightseeing tour if included.",
      "Enjoy a further leisure day or another pre-arranged island experience.",
      "Check out and transfer for your confirmed departure or onward connection."
    ]
  },
  {
    slug: "cape-town",
    name: "Cape Town",
    category: "International",
    region: "South Africa • City & Coast",
    images: [
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b"
    ],
    description: "A South African city and coastal holiday with Cape Town sightseeing and a selected scenic day trip. Flights, accommodation, local transport and attraction tickets are confirmed in your quotation.",
    itinerary: [
      "Arrive in Cape Town and transfer to your selected accommodation.",
      "Explore selected city attractions and the V&A Waterfront or another agreed area.",
      "Take a scenic Cape Peninsula excursion with stops selected in your itinerary.",
      "Enjoy a further sightseeing day, local experience or relaxed time at the coast.",
      "Check out and transfer to the airport for your departure."
    ]
  },
  {
    slug: "bangkok",
    name: "Bangkok",
    category: "International",
    region: "Thailand • City Break",
    images: [
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390",
      "https://images.unsplash.com/photo-1504214208698-ea1916a2195a"
    ],
    description: "A Bangkok city break with cultural landmarks, markets and urban sightseeing. Flights, accommodation, airport transfers and attraction entries are quoted according to your preferences.",
    itinerary: [
      "Arrive in Bangkok and transfer to your selected hotel.",
      "Explore selected cultural landmarks and city attractions.",
      "Discover local markets and another agreed city neighbourhood.",
      "Enjoy an optional day excursion or further sightseeing.",
      "Check out and transfer to the airport for your confirmed departure."
    ]
  },
  {
    slug: "greek-islands",
    name: "Greek Islands",
    category: "International",
    region: "Greece • Island Holiday",
    images: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    ],
    description: "A Mediterranean island holiday with coastal villages and local experiences. The selected island or island combination, ferry connections, flights and accommodation must be confirmed.",
    itinerary: [
      "Arrive in your selected Greek island destination and transfer to your accommodation.",
      "Explore the local town, harbour and nearby beaches.",
      "Take a selected boat trip or island excursion if included in your itinerary.",
      "Enjoy a further island day or transfer to a second island only if connections are confirmed.",
      "Check out and depart using your confirmed ferry or flight arrangements."
    ]
  }
];

