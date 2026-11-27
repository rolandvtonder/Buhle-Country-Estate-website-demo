import type { ImageMetadata } from 'astro';

/**
 * Every photo on the site, keyed by its file name in src/assets/photos.
 * Alt text describes what is in the picture (for screen readers and Google
 * Images); `cat` drives the gallery filters.
 */

export type PhotoCat = 'weddings' | 'functions' | 'conferences' | 'catering' | 'venue';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });

const meta: Record<string, [PhotoCat, string]> = {
  'garden-wedding-ceremony-gold-table': ['weddings', 'Outdoor wedding ceremony at Buhle Country Estate: a gold signing table under a draped arch on the lawn'],
  'reception-hall-country-view': ['venue', 'Reception hall at Buhle Country Estate with stacking doors that open onto green Bishopstowe hills'],
  'white-wedding-reception-hall': ['weddings', 'White wedding reception at Buhle Estate with round tables, white roses and a chandelier-lit bridal table'],
  'garden-ceremony-aisle': ['weddings', 'Garden ceremony aisle with a white runner leading to a draped arch on the estate lawn'],
  'garden-ceremony-draped-arch': ['weddings', 'Draped ceremony arch, gold table and monogram board on the lawn at Buhle Country Estate'],
  'wedding-monogram-backdrop-garden': ['weddings', 'Gold wedding monogram on a white board beside white flowers at an outdoor ceremony'],
  'bridal-table-chandelier': ['weddings', 'Bridal table under a crystal chandelier with panelled white walls and the couple’s monograms'],
  'wedding-stage-white-panels': ['weddings', 'White wedding stage with panelled walls, candles and the Buhle Estate dance floor logo'],
  'monogram-wedding-cake': ['weddings', 'Tiered white wedding cake with a gold monogram topper and fresh roses'],
  'wedding-welcome-sign': ['weddings', 'Sage-green wedding welcome sign framed with flowers at the ceremony entrance'],
  'indoor-ceremony-chairs': ['weddings', 'Indoor wedding ceremony set-up with rows of white chairs facing a green-draped altar'],
  'indoor-ceremony-aisle': ['weddings', 'Indoor ceremony aisle with white chairs and flower arrangements in the bright hall'],
  'table-number-white-roses': ['weddings', 'Wedding table with white roses, smoked glassware and an arched table number'],
  'white-reception-tables': ['weddings', 'Round reception tables dressed in white with black napkins and fresh flowers'],
  'mint-wedding-cake': ['weddings', 'Mint-green wedding cakes with pearls, white roses and a gold Mr & Mrs topper'],
  'sage-green-table-setting': ['weddings', 'Sage-green and white wedding table setting with crystal glasses and a green floral centrepiece'],
  'sage-green-centrepiece': ['weddings', 'White and green floral centrepiece on a sage table with beaded charger plates'],
  'champagne-table-setting': ['weddings', 'Celebration table with champagne, gold-rimmed glassware and fresh flowers'],
  'protea-centrepiece': ['venue', 'King protea and fynbos centrepiece in a glass vase'],
  'tall-white-floral-centrepieces': ['functions', 'Tall white floral centrepieces and taper candles on long white tables'],
  'black-white-wedding-reception': ['weddings', 'Black and white wedding reception with grey glassware and white roses'],
  'wedding-welcome-board': ['weddings', 'Wedding welcome board in front of white draping and a black chandelier'],
  'conference-cinema-style': ['conferences', 'Conference hall set up cinema style with rows of black and gold chairs'],
  'conference-seating-rows': ['conferences', 'Rows of conference seating facing a presentation screen at Buhle Estate'],
  'conference-podium-screen': ['conferences', 'Conference podium beside a projection screen and branded banner'],
  'conference-coffee-station': ['conferences', 'Tea and coffee station with rows of white cups ready for conference delegates'],
  'banquet-long-tables': ['functions', 'Long banquet tables with white chairs and black-and-gold place settings'],
  'podium-balloon-arch': ['functions', 'Podium framed by a navy and silver balloon arch for a farewell function'],
  'buhle-estate-branded-backdrop': ['venue', 'Buhle Estate branded backdrop with a navy, silver and white balloon garland'],
  'hall-event-set-up': ['venue', 'The Buhle Estate hall set for a large function with white and gold chairs'],
  'pink-birthday-backdrop': ['functions', 'Pink birthday backdrop with a balloon garland and crystal chandelier'],
  'pink-party-head-table': ['functions', 'Pink and white head table for a birthday celebration with balloons and florals'],
  'baby-shower-cake': ['functions', 'Baby shower cake decorated with gold balloons and teddy bears'],
  'baby-shower-balloon-arch': ['functions', 'Peach and cream balloon arch at a baby shower'],
  'womens-day-brunch': ['functions', 'Women’s Day brunch with pink tablecloths and floral centrepieces'],
  'brunch-round-tables': ['functions', 'Round tables in rose pink with gold cutlery set for a brunch'],
  'farewell-party-balloons': ['functions', 'Welcome sign and blue balloon tower for a farewell party'],
  '21st-birthday-white-decor': ['functions', '21st birthday décor with white florals, candles and marquee numbers'],
  'pink-party-table': ['functions', 'Pink party table with roses, candles and sparkling drinks'],
  'earth-tone-balloon-arch': ['functions', 'Earth-tone balloon arch framing a reception table with flowers'],
  'lilac-table-setting': ['functions', 'Lilac and white table setting with purple napkins and crystal glasses'],
  'purple-roses-centrepiece': ['functions', 'Purple roses and a magenta taper candle on a white table'],
  'roast-vegetable-medley': ['catering', 'Roast vegetable medley with corn, butternut, broccoli and tomatoes in a chafing dish'],
  'beef-curry': ['catering', 'Traditional beef curry garnished with fresh coriander'],
  'fresh-fruit-platter': ['catering', 'Fresh fruit platter with grapes, oranges and strawberries'],
  'canape-platter': ['catering', 'A platter of canapés prepared by the in-house catering team'],
  'tropical-fruit-platter': ['catering', 'Tropical fruit platter of mango, watermelon and pineapple'],
  'dessert-shooter-station': ['catering', 'Dessert and cocktail shooter station with blue and purple layered drinks'],
  'breakfast-croissants': ['catering', 'Breakfast spread with croissants, fruit and coffee for a morning event'],
  'sandwich-platters': ['catering', 'Platters of sandwiches, wraps and fresh fruit for a brunch'],
  'cheesecake-dessert': ['catering', 'Plated cheesecake and chocolate cake with berry coulis'],
  'plated-desserts': ['catering', 'Rows of plated desserts ready to be served'],
  'grazing-table-fruit': ['catering', 'Grazing table with pastries, citrus and fresh fruit'],
  'sparkling-welcome-drinks': ['catering', 'Pink sparkling welcome drinks with rosemary on a tray'],
  'welcome-drinks-tray': ['catering', 'Tray of welcome drinks served to arriving guests'],
  'high-tea-station': ['catering', 'High tea station with pink drinks, pastries and a protea screen'],
  'dessert-table': ['catering', 'Dessert table with chocolates and sweets on a white lattice stand'],
  'pastry-platters': ['catering', 'Pastry platters ready for a function'],
  'buhle-estate-logo-mantel': ['venue', 'Buhle Estate logo on a white mantel beneath three dark-framed mirrors'],
  'reception-hall-garden-windows': ['venue', 'Reception tables beside large windows looking out over the estate gardens'],
  'reception-tables-garden-view': ['venue', 'Function tables with white chairs and a view of the gardens and fields'],
  'reception-hall-tables': ['venue', 'The bright reception hall with white tables and large picture windows'],
  'black-glassware-setting': ['venue', 'White table setting with black wine glasses and a view of the countryside'],
  'lounge-floral-ceiling': ['venue', 'Lounge area with white sofas beneath a hanging floral ceiling installation'],
  'sage-table-flower-wall': ['weddings', 'Sage and white wedding table in front of a flower wall'],
  'wedding-cake-flower-wall': ['weddings', 'Mint wedding cakes in front of a white flower wall'],
  'mint-cake-display': ['weddings', 'Mint cake table with flower wall and gold Mr & Mrs sign'],
  'baby-shower-dessert-table': ['functions', 'Baby shower dessert table with peach balloons, cake and doughnuts'],
  'balloon-arch-chandelier': ['functions', 'Balloon arch beneath a chandelier at a family celebration'],
  'high-tea-floral-screen': ['catering', 'High tea spread in front of a floral protea screen'],
  'pink-candle-head-table': ['functions', 'Head table with pink candles, roses and sparkling drinks'],
  'bird-of-paradise-centrepiece': ['functions', 'Bird of paradise centrepiece with wine on a white table'],
  'reception-balloon-arch': ['functions', 'Brown and peach balloon arch over a dressed reception table'],
  'white-roses-table': ['weddings', 'White roses and crystal glassware on a round wedding table'],
  'cream-balloon-decor': ['weddings', 'Cream balloon garland and white roses at a reception'],
  'cream-floral-backdrop': ['weddings', 'Cream floral backdrop and hanging flower ceiling over the bridal table'],
  'cream-reception-set-up': ['weddings', 'Cream and white reception set-up with candles and white chairs'],
  'pink-rose-centrepiece': ['functions', 'Pink rose centrepiece with a pink taper candle'],
  'white-chairs-pink-tables': ['functions', 'White chairs and pink runners in the main hall'],
  'pink-taper-candles': ['functions', 'Pink taper candles and roses on a white table'],
  'brunch-welcome-sign': ['functions', 'Women’s Day brunch welcome sign beside pink tables'],
  'brunch-hall-screen': ['functions', 'Brunch set-up in the hall with a screen for speeches'],
  'event-hall-stage-screen': ['conferences', 'Event hall with a stage, screen and sound system'],
  'long-table-candles': ['weddings', 'Long table with candles and single stems under a chandelier'],
  'clear-chairs-banquet': ['functions', 'Banquet set with clear chairs on a polished floor'],
  'draped-head-table': ['weddings', 'Head table draped in white satin with candles'],
  'blue-menu-place-setting': ['functions', 'Place setting with a blue printed menu and lace charger'],
  'navy-blue-centrepieces': ['functions', 'Navy and blue centrepieces on white tables'],
  'lilac-reception-garden-view': ['weddings', 'Lilac reception table with a view of the gardens'],
};

export type Photo = { slug: string; src: ImageMetadata; alt: string; cat: PhotoCat };

export const photos: Record<string, Photo> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => {
    const slug = path.split('/').pop()!.replace(/\.jpg$/, '');
    const [cat, alt] = meta[slug] ?? ['venue', 'Event at Buhle Country Estate'];
    return [slug, { slug, src: mod.default, alt, cat }];
  }),
);

export function photo(slug: string): Photo {
  const p = photos[slug];
  if (!p) throw new Error(`Unknown photo: ${slug}`);
  return p;
}

export const photoList = (slugs: string[]) => slugs.map(photo);
