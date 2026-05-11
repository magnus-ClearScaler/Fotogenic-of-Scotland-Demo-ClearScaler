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
    image: galleries["alexandra-angus-mount-stuart"]?.[2] ?? "",
    href: "/weddings",
  },
  {
    slug: "films",
    title: "Wedding Films",
    sub: "Cinematic short films",
    body:
      "A blend of photography and film. Two engaging short films, the highlight and the long-form. Honest sound, beautiful colour, edited like a story rather than a montage.",
    image: galleries["kerry-fraser-lochgreen"]?.[3] ?? "",
    href: "/weddings",
  },
  {
    slug: "lifestyle",
    title: "Lifestyle & Editorial",
    sub: "Fashion, hospitality, commercial",
    body:
      "Brand-led portraiture, food and interiors, fashion editorial. Carefully chosen locations and a distinctive eye for light. Clients include hotels, hospitality groups, designers and magazines.",
    image: galleries["india-gareth-glencoe-engagement"]?.[1] ?? "",
    href: "/lifestyle",
  },
  {
    slug: "albums",
    title: "Wedding Albums",
    sub: "Heirloom prints & storybooks",
    body:
      "Handmade albums designed to live on a coffee table, not a hard drive. Italian linen, embossed covers, archival prints. A family heirloom rather than a folder of files.",
    image: galleries["hannah-alexander-dumfries-house"]?.[4] ?? "",
    href: "/packages",
  },
] as const;

import { galleries } from "./galleries";

export type FeaturedWedding = {
  slug: string;
  couple: string;
  venue: string;
  location: string;
  date: string;
  story: readonly string[];
  details: readonly { label: string; value: string }[];
  cover: string;
  hero: string;
};

function pickCover(slug: string, index: number): string {
  const g = galleries[slug];
  return g?.[index] ?? g?.[0] ?? "";
}

export const featuredWeddings: readonly FeaturedWedding[] = [
  {
    slug: "alexandra-angus-mount-stuart",
    couple: "Alexandra & Angus",
    venue: "Mount Stuart",
    location: "Isle of Bute",
    date: "May 2024",
    story: [
      "A spring wedding at Mount Stuart, the Marquess of Bute's Gothic family seat on the Isle of Bute. We started the morning in Rothesay, crossed the island in soft light, and photographed the bridal preparations in the Bute family wing.",
      "The ceremony was held in the Marble Chapel, lit by stained glass that has thrown the same colour onto the same stones since 1880. Drinks in the Marble Hall, candles all the way down the long table for dinner, and a ceilidh that ran until the boat to the mainland.",
      "A quiet day, kindly done. Some of the most beautiful light we have ever worked in.",
    ],
    details: [
      { label: "Venue", value: "Mount Stuart, Isle of Bute" },
      { label: "Season", value: "Late spring" },
      { label: "Coverage", value: "Full day, two photographers, film" },
      { label: "Album", value: "Storybook, 12 x 12 layflat" },
    ],
    cover: pickCover("alexandra-angus-mount-stuart", 0),
    hero: pickCover("alexandra-angus-mount-stuart", 5),
  },
  {
    slug: "sarah-robert-ardkinglas-house",
    couple: "Sarah & Robert",
    venue: "Ardkinglas House",
    location: "Cairndow, Argyll",
    date: "October 2023",
    story: [
      "A glen wedding in autumn copper, with a brief, perfect break in the rain for the portrait session in the woodland. Bagpipes on the lawn, sea mist drifting in off Loch Fyne, and an indoor ceremony in the panelled library.",
      "Ardkinglas is one of our quietest, most magical venues. The chandelier in the dining room is older than the wedding industry itself. We photographed the day at its own pace and tried very hard not to break anything.",
    ],
    details: [
      { label: "Venue", value: "Ardkinglas House, Argyll" },
      { label: "Season", value: "Autumn" },
      { label: "Coverage", value: "Full day, two photographers" },
      { label: "Album", value: "Classic Album, leather" },
    ],
    cover: pickCover("sarah-robert-ardkinglas-house", 0),
    hero: pickCover("sarah-robert-ardkinglas-house", 8),
  },
  {
    slug: "kerry-fraser-lochgreen",
    couple: "Kerry & Fraser",
    venue: "Lochgreen House Hotel",
    location: "Troon, South Ayrshire",
    date: "July 2024",
    story: [
      "A summer wedding on the Ayrshire coast, with the Isle of Arran in the windows and a sea breeze through the marquee. Kerry and Fraser had three children between them already, all part of the ceremony, all on the dance floor.",
      "A warm, loud, generous day. The kind of wedding that reminds you why people get married twice.",
    ],
    details: [
      { label: "Venue", value: "Lochgreen House Hotel, Troon" },
      { label: "Season", value: "Summer" },
      { label: "Coverage", value: "Full day, two photographers" },
      { label: "Album", value: "Box, 50 archival prints" },
    ],
    cover: pickCover("kerry-fraser-lochgreen", 0),
    hero: pickCover("kerry-fraser-lochgreen", 6),
  },
  {
    slug: "hannah-alexander-dumfries-house",
    couple: "Hannah & Alexander",
    venue: "Dumfries House",
    location: "Cumnock, Ayrshire",
    date: "September 2023",
    story: [
      "Dumfries House, restored by the King and run as a charitable estate, is one of the most extraordinary places in Scotland to be married. Hannah and Alexander took the whole house for the weekend, and we photographed every quiet hour of it.",
      "The ceremony was held in the Tapestry Room. Dinner in the grand dining room beneath portraits of strangers. The first dance under the chandeliers. The album for this one is forty spreads long and we still cut it down.",
    ],
    details: [
      { label: "Venue", value: "Dumfries House, Ayrshire" },
      { label: "Season", value: "Early autumn" },
      { label: "Coverage", value: "Two-day, two photographers, film" },
      { label: "Album", value: "Storybook, 12 x 12, 40 spreads" },
    ],
    cover: pickCover("hannah-alexander-dumfries-house", 0),
    hero: pickCover("hannah-alexander-dumfries-house", 10),
  },
  {
    slug: "victoria-david-cornhill-castle",
    couple: "Victoria & David",
    venue: "Cornhill Castle",
    location: "Biggar, South Lanarkshire",
    date: "June 2024",
    story: [
      "Cornhill is the kind of country-house wedding venue where you can lose half a wedding party in the gardens and find them an hour later in a glasshouse. Victoria and David let the day breathe in exactly that way.",
      "A late June ceremony on the lawn, drinks under the trees, dinner in the orangery and dancing into the morning. We have rarely photographed a wedding party who laughed more.",
    ],
    details: [
      { label: "Venue", value: "Cornhill Castle, Biggar" },
      { label: "Season", value: "Midsummer" },
      { label: "Coverage", value: "Full day, two photographers" },
      { label: "Album", value: "Classic Album, linen" },
    ],
    cover: pickCover("victoria-david-cornhill-castle", 0),
    hero: pickCover("victoria-david-cornhill-castle", 7),
  },
  {
    slug: "christa-jamie-crear",
    couple: "Christa & Jamie",
    venue: "Crear",
    location: "Argyll Coast",
    date: "August 2023",
    story: [
      "Crear sits on a cliff above the Sound of Jura. There is no village, no road past it, and a horizon that, on a clear evening, takes in three Hebridean islands at once.",
      "Christa and Jamie were married outdoors, just before the wind came in off the sea. The whole weekend was a kind of held breath. Some of our favourite work, made very quietly.",
    ],
    details: [
      { label: "Venue", value: "Crear, Argyll Coast" },
      { label: "Season", value: "Late summer" },
      { label: "Coverage", value: "Full weekend, two photographers" },
      { label: "Album", value: "Storybook, 12 x 12 layflat" },
    ],
    cover: pickCover("christa-jamie-crear", 0),
    hero: pickCover("christa-jamie-crear", 6),
  },
  {
    slug: "india-gareth-glencoe-engagement",
    couple: "India & Gareth",
    venue: "Highland Engagement",
    location: "Glencoe & the Three Sisters",
    date: "February 2024",
    story: [
      "An engagement session in flat winter light at Glencoe. We borrowed a Land Rover from a friend, drove up early, and walked under the Three Sisters in a cold that made everyone hold on a little tighter.",
      "An hour of pictures. A long warm lunch in Glen Coe village afterwards. The wedding is at Boturich Castle next year. We cannot wait.",
    ],
    details: [
      { label: "Location", value: "Glencoe, Highlands" },
      { label: "Season", value: "Winter" },
      { label: "Coverage", value: "Half day, one photographer" },
      { label: "Output", value: "Digital gallery, fine art prints" },
    ],
    cover: pickCover("india-gareth-glencoe-engagement", 0),
    hero: pickCover("india-gareth-glencoe-engagement", 12),
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
    slug: "alexandra-angus-mount-stuart",
    title: "A spring wedding at Mount Stuart. Alexandra & Angus",
    excerpt:
      "Soft Bute light through Gothic windows, a quiet ceremony in the Marble Chapel, and a candlelit dinner under the chapel ceiling.",
    date: "2024-05-24",
    category: "Weddings",
    image: galleries["alexandra-angus-mount-stuart"]?.[1] ?? "",
    href: "/weddings/alexandra-angus-mount-stuart",
  },
  {
    slug: "sarah-robert-ardkinglas-house",
    title: "Ardkinglas House. Sarah & Robert",
    excerpt:
      "A glen wedding in autumn copper. Bagpipes, sea mist, and a portrait session in the woodland just before the rain.",
    date: "2023-10-14",
    category: "Weddings",
    image: galleries["sarah-robert-ardkinglas-house"]?.[2] ?? "",
    href: "/weddings/sarah-robert-ardkinglas-house",
  },
  {
    slug: "wedding-albums-2026",
    title: "Wedding albums in 2026. Why we still print",
    excerpt:
      "Notes from a year of designing albums. On Italian linen, on what to leave out, and on why the best image is rarely the obvious one.",
    date: "2026-02-14",
    category: "Studio Notes",
    image: galleries["hannah-alexander-dumfries-house"]?.[6] ?? "",
    href: "/journal",
  },
  {
    slug: "india-gareth-glencoe-engagement",
    title: "An engagement in Glencoe. India & Gareth",
    excerpt:
      "Three Sisters in flat winter light, a borrowed Land Rover, and the kind of cold that makes everyone hold on tighter.",
    date: "2024-02-11",
    category: "Lifestyle",
    image: galleries["india-gareth-glencoe-engagement"]?.[3] ?? "",
    href: "/weddings/india-gareth-glencoe-engagement",
  },
  {
    slug: "kerry-fraser-lochgreen",
    title: "A summer wedding on the Ayrshire coast. Kerry & Fraser",
    excerpt:
      "Sun on the marquee, the Isle of Arran in the windows, and the kind of dance floor that does not stop until the lights come up.",
    date: "2024-07-20",
    category: "Weddings",
    image: galleries["kerry-fraser-lochgreen"]?.[5] ?? "",
    href: "/weddings/kerry-fraser-lochgreen",
  },
  {
    slug: "christa-jamie-crear",
    title: "Crear, on the edge of the world. Christa & Jamie",
    excerpt:
      "A clifftop ceremony above the Sound of Jura. Three Hebridean islands on the horizon and a wind that came in just after the vows.",
    date: "2023-08-12",
    category: "Weddings",
    image: galleries["christa-jamie-crear"]?.[1] ?? "",
    href: "/weddings/christa-jamie-crear",
  },
] as const;
