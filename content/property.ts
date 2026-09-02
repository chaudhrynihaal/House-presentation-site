// ---------------------------------------------------------------------------
// Single source of truth for all property content.
// To present a different property: replace the values below and swap the
// media files referenced in `roomGalleries[].images` under /public/media.
// See README.md for the full swap-in checklist.
//
// Fields marked with a trailing "*" in their value are PLACEHOLDER figures —
// the source assets (renders + spec sheet) did not include confirmed numbers.
// Search this file for "PLACEHOLDER" to find every one that needs a real
// figure from the client before this goes live.
// ---------------------------------------------------------------------------

export type Stat = { label: string; value: string };
export type Distance = { place: string; distance: string };
export type SpecCategory = { category: string; items: string[] };
export type Room = { name: string; area: string };
export type FloorArea = {
  floorName: string;
  enclosedArea: string;
  openArea: string;
  totalArea: string;
  rooms: Room[];
};
export type Hotspot = {
  x: number;
  y: number;
  category: string;
  title: string;
  body: string;
};
export type GalleryImage = { src: string; hotspots: Hotspot[] };
export type RoomSection = {
  number: string;
  room: string;
  tags: string[];
  images: GalleryImage[];
};
export type NavSection = { id: string; label: string };

export const property = {
  hero: {
    eyebrow: "Private Presentation",
    title: "Lote 25",
    subtitle:
      "Rua Dr Raul Loures Marques Coelho — a new-build residence in Portugal, finished to an A+ energy standard with travertine facades, a heated pool and full smart-home integration.",
  },

  // PLACEHOLDER: confirm every value below with the client.
  stats: [
    { label: "Suites", value: "5*" },
    { label: "Bathrooms", value: "6*" },
    { label: "Interior Area", value: "450 m²*" },
    { label: "Plot Area", value: "800 m²*" },
    { label: "Energy Rating", value: "A+" },
    { label: "Distance to Coast", value: "12 min*" },
  ] satisfies Stat[],

  // PLACEHOLDER: all distances below are illustrative only.
  distances: [
    { place: "Nearest Beach", distance: "12 min*" },
    { place: "International Airport", distance: "35 min*" },
    { place: "City Centre", distance: "20 min*" },
    { place: "Marina", distance: "15 min*" },
    { place: "International School", distance: "10 min*" },
    { place: "Golf Course", distance: "8 min*" },
  ] satisfies Distance[],

  lifestyleSection: {
    heading: "A Quiet Address, Close to Everything",
    body: "Set within a low-density residential plot, Lote 25 pairs contemporary architecture with an easy, coastal Portuguese rhythm of life. Wide glazing and covered outdoor living blur the line between the interior and the heated pool terrace, while the surrounding area offers a mix of beaches, golf, international schooling and quick access to the motorway network — all within a short drive. It is a residence built for full-time living or as a considered second home.",
  },

  residencySection: {
    heading: "Residency & Tax Considerations",
    intro:
      "Portugal continues to offer a range of pathways and regimes of interest to international buyers. The summary below is general background only — buyers should take independent legal and tax advice specific to their circumstances before relying on any of it.",
    cards: [
      {
        title: "NHR / Tax Incentive Regimes",
        body: "Portugal has historically offered preferential personal tax regimes for new residents, most recently the successor incentive schemes to the original Non-Habitual Resident (NHR) programme. Eligibility, scope and rates change with legislation, so current terms must be confirmed with a Portuguese tax adviser at the time of application.",
      },
      {
        title: "Golden Visa",
        body: "Portugal's residency-by-investment programme (“Golden Visa”) has evolved significantly and direct real-estate investment routes have been restricted in recent reforms. Qualifying routes and minimum thresholds should be verified with an immigration lawyer, as they are subject to change.",
      },
      {
        title: "Ownership Structure",
        body: "International buyers commonly purchase Portuguese property directly in a personal name or through a corporate holding structure, depending on tax residency, succession planning and financing considerations. A local notary and independent lawyer will guide the appropriate structure.",
      },
    ],
  },

  // PLACEHOLDER: floor-by-floor areas are illustrative, based on the layout
  // implied by the renders (ground living level, first-floor suites, lower
  // garage/utility level). Replace with the architect's measured areas.
  areas: [
    {
      floorName: "Ground Floor",
      enclosedArea: "210 m²*",
      openArea: "85 m²*",
      totalArea: "295 m²*",
      rooms: [
        { name: "Entrance Hall", area: "18 m²*" },
        { name: "Living Room", area: "55 m²*" },
        { name: "Kitchen & Dining", area: "48 m²*" },
        { name: "Guest Suite", area: "22 m²*" },
        { name: "Powder Room", area: "6 m²*" },
        { name: "Covered Terrace", area: "45 m²*" },
        { name: "Pool Terrace", area: "40 m²*" },
      ],
    },
    {
      floorName: "First Floor",
      enclosedArea: "195 m²*",
      openArea: "20 m²*",
      totalArea: "215 m²*",
      rooms: [
        { name: "Primary Suite", area: "42 m²*" },
        { name: "Primary Dressing Room", area: "16 m²*" },
        { name: "Primary Bathroom", area: "20 m²*" },
        { name: "Suite 2", area: "26 m²*" },
        { name: "Suite 3", area: "24 m²*" },
        { name: "Family Terrace", area: "20 m²*" },
      ],
    },
    {
      floorName: "Garage & Lower Level",
      enclosedArea: "90 m²*",
      openArea: "0 m²*",
      totalArea: "90 m²*",
      rooms: [
        { name: "Garage (EV Charger 22kW)", area: "45 m²*" },
        { name: "Laundry", area: "10 m²*" },
        { name: "Storage / Plant Room", area: "35 m²*" },
      ],
    },
  ] satisfies FloorArea[],

  roomGalleries: [
    {
      number: "01",
      room: "Exterior & Pool Terrace",
      tags: ["Natural travertine", "External shutters", "Heated pool"],
      images: [
        {
          src: "/media/images/exterior-poolside-day.jpg",
          hotspots: [
            { x: 26.89, y: 44.4, category: "Facade", title: "Natural travertine stone", body: "The principal elevations are clad in natural travertine, chosen for its warmth and durability against the coastal climate." },
            { x: 34.89, y: 18.7, category: "External Shutters", title: "Vertical louvred shutters", body: "Every window is fitted with external shutters for solar control and privacy, integrated with the smart-home system." },
            { x: 52.97, y: 51.6, category: "Windows", title: "Minimalist glazing, Navarro N27000", body: "Slim-profile aluminium glazing systems maximise natural light while keeping sightlines uninterrupted." },
            { x: 85.55, y: 78.2, category: "Swimming Pool", title: "Heated pool with underwater speakers", body: "The pool is heated year-round and fitted with underwater speakers, wired into the whole-house Sonos audio system." },
          ],
        },
        {
          src: "/media/images/exterior-front-elevation.jpg",
          hotspots: [
            { x: 58.89, y: 71.1, category: "Facade", title: "Natural travertine stone", body: "The entrance elevation is clad in the same natural travertine used throughout the exterior." },
            { x: 88.53, y: 24.9, category: "External Shutters", title: "Vertical louvred screen", body: "A louvred timber screen shades the upper-floor glazing above the entrance." },
            { x: 71.92, y: 78.2, category: "Garage", title: "EV charger, 22kW capacity", body: "The garage, set behind this timber door, is fitted with a 22kW-capacity EV charging point." },
          ],
        },
        {
          src: "/media/images/exterior-front-pool.jpg",
          hotspots: [
            { x: 12.9, y: 94.7, category: "Swimming Pool", title: "Heated pool", body: "The pool runs the full width of the terrace, heated year-round for comfortable use in cooler months." },
            { x: 35.17, y: 63.5, category: "Facade", title: "Natural travertine stone", body: "A deep travertine-clad canopy shades the ground-floor glazing along this elevation." },
          ],
        },
      ],
    },
    {
      number: "02",
      room: "Living Room",
      tags: ["Fireplace", "Havwoods floors", "Sonos audio"],
      images: [
        {
          src: "/media/images/living-room-tv-wall.jpg",
          hotspots: [
            { x: 55.28, y: 62.3, category: "Fireplace", title: "Living room fireplace", body: "A built-in fireplace anchors the main living space for cooler evenings." },
            { x: 82.94, y: 88.9, category: "Flooring", title: "Havwoods engineered timber", body: "Wood flooring throughout is supplied by Havwoods UK and Comapla, laid over underfloor heating." },
            { x: 65.16, y: 18, category: "Climate", title: "VRF/VRV 3-pipe air conditioning", body: "A 3-pipe VRF/VRV system allows simultaneous heating and cooling across different rooms, paired with UPNOR underfloor heating." },
            { x: 40.12, y: 67.2, category: "Audio", title: "Sonos indoor & outdoor", body: "Sonos speakers are built into the living areas and extend outdoors to the pool terrace." },
          ],
        },
        {
          src: "/media/images/living-room-main.jpg",
          hotspots: [
            { x: 32.22, y: 60.9, category: "Fireplace", title: "Living room fireplace", body: "The fireplace is set into a full-height stone and timber divider that separates the two seating areas." },
            { x: 8.51, y: 88.9, category: "Flooring", title: "Havwoods engineered timber", body: "Wood flooring runs continuously through the living and dining areas." },
          ],
        },
        {
          src: "/media/images/living-room-terrace.jpg",
          hotspots: [
            { x: 23.33, y: 41.8, category: "Fireplace", title: "Living room fireplace", body: "The fireplace and TV wall face both seating areas, dividing the living room without closing it off." },
            { x: 94.44, y: 48.9, category: "Windows", title: "Minimalist glazing, Navarro N27000", body: "Full-height glazing opens the living room onto the pool terrace beyond." },
          ],
        },
      ],
    },
    {
      number: "03",
      room: "Kitchen & Dining",
      tags: ["Miele throughout", "Quooker sparkling tap", "Dekton island"],
      images: [
        {
          src: "/media/images/kitchen-island.jpg",
          hotspots: [
            { x: 29.84, y: 57, category: "Kitchen Island", title: "Dekton worktop", body: "The island top is finished in Dekton, an ultra-compact surface chosen for its resistance to heat, scratching and staining." },
            { x: 53.14, y: 30.2, category: "Cabinetry", title: "Engraved heartwood joinery", body: "Kitchen cabinetry is supplied by VD Holz in Form of Germany, in an engraved heartwood finish." },
            { x: 21.65, y: 46.3, category: "Appliances", title: "Miele kitchen suite", body: "A full Miele appliance package includes a downdraft cooking top, oven, microwave, fridge, freezer and wine fridge." },
            { x: 50.62, y: 56.7, category: "Quooker Tap", title: "Sparkling, hot & cold filtered water", body: "An integrated Quooker tap delivers filtered sparkling, hot and cold drinking water directly at the island." },
          ],
        },
        {
          src: "/media/images/kitchen-alt.jpg",
          hotspots: [
            { x: 4.91, y: 51.2, category: "Appliances", title: "Miele built-in column", body: "A built-in Miele appliance column is integrated flush into the run of cabinetry." },
            { x: 50.0, y: 55.5, category: "Kitchen Island", title: "Downdraft cooking top", body: "The island's cooking top features downward suction, keeping the sightline to the living area uninterrupted." },
          ],
        },
        {
          src: "/media/images/kitchen-dining.jpg",
          hotspots: [
            { x: 46.32, y: 50.6, category: "Windows", title: "Minimalist glazing, Navarro N27000", body: "Full-height sliding glass connects the dining area directly to the garden, blurring indoor and outdoor living." },
            { x: 13.24, y: 90.1, category: "Flooring", title: "Havwoods engineered timber", body: "The open-plan living level is laid throughout in Havwoods engineered timber over underfloor heating." },
            { x: 80.63, y: 64.3, category: "Kitchen", title: "Island & integrated tap", body: "The kitchen opens directly onto the dining area, with the Dekton island and Quooker tap visible beyond." },
          ],
        },
      ],
    },
    {
      number: "04",
      room: "Primary Suite",
      tags: ["Skylight", "Fitted wardrobes", "Pool terrace access"],
      images: [
        {
          src: "/media/images/primary-suite.jpg",
          hotspots: [
            { x: 52.03, y: 35.5, category: "Daylight", title: "Skylight", body: "A ceiling skylight brings natural light deep into the primary suite throughout the day." },
            { x: 90.54, y: 55.7, category: "Joinery", title: "Fitted wardrobe wall", body: "Full-height fitted wardrobes provide integrated storage without freestanding furniture." },
            { x: 33.45, y: 70.9, category: "Smart Home", title: "Automated mood lighting", body: "Lighting, shutters, heating and air conditioning throughout the suite are controlled through the smart-home system." },
          ],
        },
        {
          src: "/media/images/primary-suite-alt.jpg",
          hotspots: [
            { x: 50.0, y: 32.4, category: "Daylight", title: "Skylight", body: "The suite's skylight sits directly above the bed, framed by slatted timber panelling on either side." },
            { x: 93.92, y: 55.7, category: "Joinery", title: "Fitted wardrobe wall", body: "A full-height wardrobe wall runs the length of the suite opposite the bed." },
          ],
        },
        {
          src: "/media/images/primary-suite-terrace.jpg",
          hotspots: [
            { x: 52.97, y: 8.4, category: "Daylight", title: "Skylight", body: "A large ceiling skylight floods the primary suite with natural light." },
            { x: 91.5, y: 39, category: "Terrace", title: "Direct pool terrace access", body: "Sliding doors give the primary suite direct access to its own section of pool terrace." },
            { x: 12.07, y: 66.1, category: "Flooring", title: "Havwoods engineered timber", body: "Wood flooring continues from the bedroom through to the terrace threshold." },
          ],
        },
      ],
    },
    {
      number: "05",
      room: "Primary Bathroom",
      tags: ["Laufen sanitaryware", "Dornbracht LULU", "Mona Lisa tiles"],
      images: [
        {
          src: "/media/images/primary-bathroom-shower.jpg",
          hotspots: [
            { x: 58.77, y: 78.9, category: "Sanitaryware", title: "Laufen bathtub & sinks", body: "WCs, bathtubs and sinks throughout the house are by Laufen." },
            { x: 7.9, y: 20.5, category: "Taps & Showers", title: "Dornbracht LULU series", body: "Taps and showers are from Dornbracht's LULU series, with Dornbracht handshowers fitted at every WC." },
            { x: 82.98, y: 36.8, category: "Tiling", title: "Mona Lisa large-format tiles", body: "Bathrooms are tiled mainly in 600 x 1200mm Mona Lisa porcelain, minimising grout lines for a seamless finish." },
          ],
        },
        {
          src: "/media/images/bathroom-freestanding-tub.jpg",
          hotspots: [
            { x: 68.69, y: 76.1, category: "Sanitaryware", title: "Laufen freestanding bathtub", body: "A freestanding Laufen bathtub sits beneath the window, with a Dornbracht floor-mounted filler." },
            { x: 48.94, y: 52.1, category: "Taps & Showers", title: "Dornbracht LULU series", body: "The walk-in shower is fitted with Dornbracht LULU series fixtures in a brushed brass finish." },
          ],
        },
      ],
    },
    {
      number: "06",
      room: "Dressing Room",
      tags: ["LED strip lighting", "Fitted cabinetry"],
      images: [
        {
          src: "/media/images/dressing-room.jpg",
          hotspots: [
            { x: 49.99, y: 15.9, category: "Lighting", title: "Downlights & LED strip lighting", body: "Recessed downlights and LED strip lighting illuminate the joinery throughout the dressing room." },
            { x: 29.47, y: 56, category: "Joinery", title: "Full-height fitted cabinetry", body: "Custom fitted cabinetry lines both sides of the dressing corridor, connecting the primary suite to its bathroom." },
          ],
        },
        {
          src: "/media/images/dressing-room-alt.jpg",
          hotspots: [
            { x: 50.0, y: 15.1, category: "Lighting", title: "Skylight & LED strip lighting", body: "A ceiling skylight combines with LED strip lighting to keep the dressing room bright throughout the day." },
            { x: 29.25, y: 57.8, category: "Joinery", title: "Full-height fitted cabinetry", body: "Glass-fronted wardrobe cabinetry runs the full length of the dressing room on both sides." },
          ],
        },
        {
          src: "/media/images/dressing-room-detail.jpg",
          hotspots: [
            { x: 50, y: 14.58, category: "Lighting", title: "Skylight", body: "A ceiling skylight lights the far end of the dressing room, where a seating bench is built in." },
            { x: 17.5, y: 55.81, category: "Joinery", title: "Glass-fronted wardrobes", body: "Glazed wardrobe doors keep the dressing room feeling open while displaying its contents." },
          ],
        },
      ],
    },
    {
      number: "07",
      room: "Guest Suite",
      tags: ["Pendant lighting", "Fitted joinery", "Havwoods floors"],
      images: [
        {
          src: "/media/images/bedroom-suite-2.jpg",
          hotspots: [
            { x: 40.52, y: 38, category: "Lighting", title: "Sculptural pendant lighting", body: "Paired pendant lights flank the bedhead in place of table lamps, on the same automated lighting circuit as the rest of the suite." },
            { x: 32.22, y: 30, category: "Joinery", title: "Built-in display shelving", body: "Recessed, backlit shelving is built into the wall either side of the bed." },
            { x: 32.22, y: 88.9, category: "Flooring", title: "Havwoods engineered timber", body: "Wood flooring continues from this guest suite through to the rest of the upper floor." },
          ],
        },
        {
          src: "/media/images/bedroom-suite-3.jpg",
          hotspots: [
            { x: 33.41, y: 31.1, category: "Lighting", title: "Sculptural pendant lighting", body: "Globe pendant lights flank the bedhead, controlled through the same automated lighting circuit as the rest of the suite." },
            { x: 23.92, y: 40, category: "Joinery", title: "Built-in display shelving", body: "Recessed, backlit shelving is built into the wall beside the bed." },
          ],
        },
        {
          src: "/media/images/interior-hallway.jpg",
          hotspots: [
            { x: 50, y: 90.16, category: "Flooring", title: "Havwoods engineered timber", body: "Wood flooring continues through the upper-floor circulation spaces, linking the guest suites." },
          ],
        },
      ],
    },
    {
      number: "08",
      room: "Guest Bathroom",
      tags: ["Dornbracht taps", "Backlit mirror", "Stone vanity"],
      images: [
        {
          src: "/media/images/bathroom-vanity.jpg",
          hotspots: [
            { x: 50, y: 63.38, category: "Vanity", title: "Stone-topped double vanity", body: "A book-matched stone countertop tops the double vanity, set below a full-height backlit mirror." },
            { x: 44, y: 56.62, category: "Taps", title: "Dornbracht LULU series", body: "Wall-mounted Dornbracht taps in a warm brass finish serve both basins." },
            { x: 57.5, y: 28.77, category: "Lighting", title: "Integrated mirror lighting", body: "A vertical LED strip is recessed into the mirror wall, providing soft, shadow-free task lighting." },
          ],
        },
      ],
    },
    {
      number: "09",
      room: "Powder Room",
      tags: ["Laufen WC", "Dornbracht handshower", "Floating vanity"],
      images: [
        {
          src: "/media/images/powder-room-grid.jpg",
          hotspots: [
            { x: 27.75, y: 85.24, category: "Sanitaryware", title: "Laufen wall-hung WC", body: "A wall-hung Laufen WC keeps the floor line uninterrupted for a cleaner, more spacious feel." },
            { x: 21.5, y: 64.98, category: "Handshower", title: "Dornbracht handshower", body: "Every WC in the house is fitted with a Dornbracht handshower alongside the toilet." },
            { x: 67.5, y: 50.79, category: "Vanity", title: "Floating timber vanity", body: "A wall-mounted timber vanity with vessel basin sits beneath a full-height backlit mirror." },
          ],
        },
        {
          src: "/media/images/powder-room-hallway.jpg",
          hotspots: [
            { x: 46.5, y: 77.36, category: "Sanitaryware", title: "Laufen wall-hung WC", body: "A wall-hung Laufen WC is set into its own tiled recess, separate from the vanity beyond." },
            { x: 36, y: 70.56, category: "Handshower", title: "Dornbracht handshower", body: "A Dornbracht handshower in brushed brass is fitted alongside the WC." },
          ],
        },
      ],
    },
  ] satisfies RoomSection[],

  sitePlanPdfUrl: "/documents/specification.pdf",

  navSections: [
    { id: "overview", label: "Overview" },
    { id: "gallery", label: "Gallery" },
    { id: "carousels", label: "Photo Carousel" },
    { id: "lifestyle", label: "Lifestyle" },
    { id: "areas", label: "Areas" },
    { id: "site-plan", label: "Site Plan" },
    { id: "specification", label: "Full Specification" },
    { id: "residency", label: "Residency & Tax" },
  ] satisfies NavSection[],

  specifications: [
    {
      category: "Energy & Climate",
      items: [
        "Highest energy efficiency rating — A+",
        "Underfloor heating (UPNOR)",
        "VRF/VRV air conditioning with 3-pipe system for simultaneous heating & cooling by room",
        "Whole-house ventilation system",
      ],
    },
    {
      category: "Kitchen (Miele)",
      items: [
        "Cooking top with downward suction",
        "Dishwasher",
        "Oven & microwave",
        "Refrigerator",
        "Freezer",
        "Quooker tap — sparkling, hot & cold drinking water",
        "Vacuum drawer for food preservation",
        "Plate warming drawer",
        "Wine fridge",
        "Cabinetry in engraved heartwood by VD Holz in Form, Germany",
        "Island worktop in Dekton",
      ],
    },
    {
      category: "Bathrooms",
      items: [
        "WCs, bathtub & sinks — Laufen",
        "Taps, showers etc. — Dornbracht LULU series",
        "Handshowers at all WCs — Dornbracht",
        "Mona Lisa tiles, mainly 600 x 1200mm",
      ],
    },
    {
      category: "Finishes & Flooring",
      items: [
        "Facade in natural travertine stone",
        "Wood floors — Havwoods UK and Comapla",
        "Minimalist windows — Navarro N27000",
        "Skylights",
        "External shutters to all windows",
      ],
    },
    {
      category: "Outdoor & Pool",
      items: [
        "Heated swimming pool",
        "Underwater speakers in swimming pool",
        "EV charger point, 22kW capacity, in garage",
      ],
    },
    {
      category: "Smart Home & AV",
      items: [
        "Smart control of shutters, air conditioning, heating, entrance door",
        "Automated mood lighting zones",
        "Sonos speakers, indoors and outdoors",
        "Ethernet wiring throughout",
        "Downlights / LED strip lighting in rooms",
      ],
    },
    {
      category: "Other",
      items: [
        "Elevator by Thyssenkrupp",
        "Fireplace in living room",
        "Laundry with washer and dryer — Miele",
        "No furniture is included with the house",
      ],
    },
  ] satisfies SpecCategory[],
};

export type Property = typeof property;
