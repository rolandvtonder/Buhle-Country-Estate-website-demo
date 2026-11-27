/**
 * Business details live here, once, so every page, the footer and the
 * structured data for Google all say the same thing.
 */

export const site = {
  name: 'Buhle Country Estate',
  shortName: 'Buhle Estate',
  url: 'https://www.buhleestate.co.za',
  tagline: 'Wedding, function & conference venue',
  description:
    'Buhle Country Estate is a private wedding, function and conference venue on a 16-hectare farm in Bishopstowe, 15 minutes from Pietermaritzburg. Up to 210 guests, with in-house catering.',
  email: 'events@buhleestate.co.za',
  phones: [
    { display: '064 549 5380', tel: '+27645495380' },
    { display: '067 141 7586', tel: '+27671417586' },
    { display: '079 214 9543', tel: '+27792149543' },
  ],
  /** WhatsApp number (064 549 5380): digits only, country code, no leading 0. */
  whatsapp: '27645495380',
  address: {
    street: 'Farm 10 of Kensington',
    locality: 'Bishopstowe',
    city: 'Pietermaritzburg',
    region: 'KwaZulu-Natal',
    postalCode: '3201',
    country: 'ZA',
  },
  mapsQuery: 'Buhle Country Estate, Farm 10 of Kensington, Bishopstowe, Pietermaritzburg, 3201',
  socials: {
    facebook: 'https://www.facebook.com/buhleestate/',
    instagram: 'https://www.instagram.com/buhleestate',
  },
  capacity: 210,
  hectares: 16,
  minutesFromCity: 15,
  /**
   * TODO(owner): create a free access key at https://web3forms.com with
   * events@buhleestate.co.za and paste it here. Until then the enquiry form
   * opens the visitor's email app with the message filled in.
   */
  web3formsKey: '',
} as const;

export const addressLine = `${site.address.street}, ${site.address.locality}, ${site.address.city}, ${site.address.postalCode}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;

export const whatsappLink = (text = 'Hi Buhle Estate, I would like to enquire about an event.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Weddings', href: '/weddings/' },
  { label: 'Conferences', href: '/conferences/' },
  { label: 'Private Functions', href: '/private-functions/' },
  { label: 'Catering', href: '/catering/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Tips & Inspiration', href: '/tips-and-inspiration/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
];

/** "From" prices, as agreed with the owner. Confirm before each season. */
export const prices = {
  weddingVenuePp: 'R150',
  weddingMinimum: 'R10 000',
  cateringPp: 'R320',
  breakfastConference: 'R190',
  halfDayConference: 'R275',
};
