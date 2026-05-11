export const site = {
  name: "Fotogenic of Scotland",
  tagline: "Wedding & lifestyle photography & film, Scotland",
  intro:
    "Fine art Glasgow & Edinburgh wedding photographers and filmmakers. Honest, timeless, documentary coverage of the day — across Scotland, the Highlands & Islands, and destination weddings abroad.",
  established: 2006,
  weddingsShot: 700,
  reviews: 175,
  phone: "0141 573 9855",
  mobile: "07923 385542",
  email: "info@fotogenicofscotland.co.uk",
  address: {
    street: "77 Berkeley Street",
    city: "Glasgow",
    postcode: "G3 7DX",
    country: "Scotland, UK",
  },
  hours: "Monday – Saturday, 9am – 8pm",
  social: {
    instagram: "https://www.instagram.com/fotogenicofscotland/",
    facebook: "https://www.facebook.com/fotogenicofscotland",
    pinterest: "https://www.pinterest.co.uk/fotogenicuk/",
    youtube: "https://www.youtube.com/channel/UCALyzvSvEhKKhymZku7Ez0w",
  },
} as const;

export const navLinks = [
  { href: "/weddings", label: "Weddings" },
  { href: "/lifestyle", label: "Lifestyle" },
  { href: "/packages", label: "Packages" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "weddings",
    title: "Wedding Photography",
    sub: "Documentary fine art coverage",
    body:
      "Reportage-style storytelling and unobtrusive direction. Light-filled portraits, the quiet moments, the joy in between. Two photographers as standard, full digital gallery, artisan album options.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    href: "/weddings",
  },
  {
    slug: "films",
    title: "Wedding Films",
    sub: "Cinematic short films",
    body:
      "A blend of photography and film. Two engaging short films — the highlight and the long-form. Honest sound, beautiful colour, edited like a story rather than a montage.",
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1600&q=80",
    href: "/weddings",
  },
  {
    slug: "lifestyle",
    title: "Lifestyle & Editorial",
    sub: "Fashion, hospitality, commercial",
    body:
      "Brand-led portraiture, food and interiors, fashion editorial. Carefully chosen locations and a distinctive eye for light. Clients include hotels, hospitality groups, designers and magazines.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
    href: "/lifestyle",
  },
  {
    slug: "albums",
    title: "Wedding Albums",
    sub: "Heirloom prints & storybooks",
    body:
      "Handmade albums designed to live on a coffee table, not a hard drive. Italian linen, embossed covers, archival prints. A family heirloom rather than a folder of files.",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=80",
    href: "/packages",
  },
] as const;

export const featuredWeddings = [
  {
    couple: "Alexandra & Angus",
    venue: "Mount Stuart",
    location: "Isle of Bute",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80",
    aspect: "portrait",
  },
  {
    couple: "Sarah & Robert",
    venue: "Ardkinglas House",
    location: "Argyll",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80",
    aspect: "landscape",
  },
  {
    couple: "Kerry & Fraser",
    venue: "Lochgreen House Hotel",
    location: "Troon",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80",
    aspect: "portrait",
  },
  {
    couple: "Hannah & Alexander",
    venue: "Dumfries House",
    location: "Ayrshire",
    image:
      "https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=1600&q=80",
    aspect: "landscape",
  },
  {
    couple: "Victoria & David",
    venue: "Cornhill Castle",
    location: "Biggar",
    image:
      "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1600&q=80",
    aspect: "portrait",
  },
  {
    couple: "Christa & Jamie",
    venue: "Crear",
    location: "Argyll Coast",
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1600&q=80",
    aspect: "landscape",
  },
  {
    couple: "India & Gareth",
    venue: "Highland Engagement",
    location: "Glencoe",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80",
    aspect: "portrait",
  },
  {
    couple: "Iona & Alistair",
    venue: "The Lovat Hotel",
    location: "Fort Augustus",
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1600&q=80",
    aspect: "landscape",
  },
] as const;

export const press = [
  "Vogue Brides",
  "Condé Nast Traveler",
  "Marie Claire",
  "Elle",
  "Country Life",
  "The Times",
  "Wall Street Journal",
  "Scottish Field",
] as const;

export const notableClients = [
  "Brian Cox",
  "Jamie Dornan",
  "Lara Stone",
  "Keira Knightley",
  "Emeli Sandé",
  "Clémence Poésy",
  "Laura Fraser",
  "David Hayman",
  "Darius Campbell",
  "Nathan Coley",
  "Alison Watt",
  "Andy Scott",
] as const;

export const venues = [
  { name: "Mount Stuart", region: "Isle of Bute" },
  { name: "Dumfries House", region: "Ayrshire" },
  { name: "Boturich Castle", region: "Loch Lomond" },
  { name: "The Lodge on Loch Goil", region: "Argyll" },
  { name: "Cromlix Hotel", region: "Dunblane" },
  { name: "Ardkinglas House", region: "Cairndow" },
  { name: "Glenapp Castle", region: "South Ayrshire" },
  { name: "Cornhill Castle", region: "Biggar" },
] as const;

export const regions = [
  "Glasgow",
  "Edinburgh",
  "Perth",
  "Stirling",
  "Inverness",
  "Aberdeen",
  "Highlands & Islands",
  "Isle of Skye",
  "Loch Lomond",
  "Destination weddings",
] as const;

export const team = [
  {
    name: "Michael",
    role: "Lead Photographer & Director",
    bio: "Editorial roots, nineteen years behind the camera. Trained eye for light and the moment that almost wasn't.",
  },
  {
    name: "Alicja",
    role: "Photographer & Producer",
    bio: "Second-shooter, story-first. Album design and the studio's quiet hand on every print.",
  },
  {
    name: "Harrison",
    role: "Filmmaker",
    bio: "Long-form films and reportage cinematography. Loves ambient sound and natural light above all.",
  },
  {
    name: "Bart",
    role: "Editor & Colourist",
    bio: "Colour grading, retouching, archival prep. The work goes through Bart's hands before it leaves the studio.",
  },
] as const;

export const packages = [
  {
    name: "Digital",
    pitch: "The essentials",
    summary:
      "Full digital gallery of the day. High-resolution downloads, online sharing gallery, personal print release.",
    features: [
      "Full day coverage",
      "Two photographers",
      "Online private gallery",
      "Full-resolution downloads",
      "Personal print release",
    ],
  },
  {
    name: "Box",
    pitch: "Prints in your hands",
    summary:
      "A custom linen box with 50 archival fine art prints, plus everything in the Digital package. Made in studio.",
    features: [
      "Everything in Digital",
      "Linen archival print box",
      "50 fine art prints",
      "Studio-pressed colour",
      "Acid-free, archival",
    ],
    featured: true,
  },
  {
    name: "Classic Album",
    pitch: "A timeless heirloom",
    summary:
      "10 by 10 inch matted album with leather or linen cover, hand-bound by our Italian album makers. 30 spreads as standard.",
    features: [
      "Everything in Box",
      "10 x 10 inch matted album",
      "Italian linen or leather",
      "30 designed spreads",
      "In-studio design session",
    ],
  },
  {
    name: "Storybook",
    pitch: "The flagship",
    summary:
      "Our flagship layflat storybook with cinematic full-spread imagery. 12 by 12 inch, up to 50 spreads, plus two parent copies.",
    features: [
      "Everything in Classic Album",
      "12 x 12 inch layflat storybook",
      "Up to 50 cinematic spreads",
      "Two parent copies",
      "Custom presentation case",
    ],
  },
] as const;

export const testimonials = [
  {
    quote:
      "Michael and the team are extraordinary. They were invisible all day and yet somehow caught every single moment that mattered. The album is something our children will fight over.",
    author: "Alexandra & Angus",
    venue: "Mount Stuart, Isle of Bute",
  },
  {
    quote:
      "We have three frames in the house and I cry at every one of them. Honest, beautiful, not a single posed cliché. Cannot recommend Fotogenic enough.",
    author: "Hannah & Alexander",
    venue: "Dumfries House",
  },
  {
    quote:
      "Worth every penny and then some. The film is a thing of beauty and the photographs feel like memories we already had, just made permanent.",
    author: "Kerry & Fraser",
    venue: "Lochgreen House Hotel",
  },
] as const;

export const journal = [
  {
    slug: "mount-stuart-wedding-alexandra-angus",
    title: "A spring wedding at Mount Stuart. Alexandra & Angus",
    excerpt:
      "Soft Bute light through Gothic windows, a quiet ceremony in the Marble Hall, and a candlelit dinner under the chapel ceiling.",
    date: "2026-04-12",
    category: "Weddings",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "ardkinglas-house-sarah-robert",
    title: "Ardkinglas House. Sarah & Robert",
    excerpt:
      "A glen wedding in autumn copper. Bagpipes, sea mist, and a portrait session in the woodland just before the rain.",
    date: "2026-03-02",
    category: "Weddings",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "wedding-albums-in-2026",
    title: "Wedding albums in 2026. Why we still print",
    excerpt:
      "Notes from a year of designing albums. On Italian linen, on what to leave out, and on why the best image is rarely the obvious one.",
    date: "2026-02-14",
    category: "Studio Notes",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "engagement-india-gareth-glencoe",
    title: "An engagement in Glencoe. India & Gareth",
    excerpt:
      "Three Sisters in flat winter light, a borrowed Land Rover, and the kind of cold that makes everyone hold on tighter.",
    date: "2026-01-22",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "lovat-hotel-film-iona-alistair",
    title: "The Lovat Hotel. A short film",
    excerpt:
      "A small Highland wedding, told in nine minutes. The full short film, with notes on the edit, the music, and what we cut.",
    date: "2025-12-08",
    category: "Films",
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "architecture-interiors-2025",
    title: "Architecture & interiors. A 2025 portfolio",
    excerpt:
      "Hospitality and editorial work from the year — restaurants, country houses, and a long-form piece for a heritage hotel.",
    date: "2025-11-19",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
  },
] as const;
