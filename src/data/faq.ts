/**
 * Questions and answers. Answers are HTML so they can link to other pages.
 * `tags` let a page show the questions that belong to it; the FAQ page
 * shows them all, grouped. Everything here is marked up as FAQPage data.
 */

export type Faq = { q: string; a: string; group: string; tags: string[] };

export const faqs: Faq[] = [
  // Booking
  {
    group: 'Booking & viewings',
    tags: ['home', 'weddings', 'functions'],
    q: 'How do I book Buhle Country Estate?',
    a: 'Start with an <a href="/contact/#enquire">enquiry</a> or a call to <a href="tel:+27645495380">064 549 5380</a>. We’ll check your date and invite you for a viewing, then send a tailored quote. Once you’re happy, we hold your date provisionally for 7 days while you pay the booking fee that secures it.',
  },
  {
    group: 'Booking & viewings',
    tags: ['home'],
    q: 'Can we view the venue before we book?',
    a: 'Yes, and we encourage it. Viewings are by appointment, so you can walk the gardens and the hall and meet our event coordinator. <a href="/contact/#enquire">Request a viewing</a> and tell us which days suit you.',
  },
  {
    group: 'Booking & viewings',
    tags: ['weddings'],
    q: 'What deposit do you need, and when is the balance due?',
    a: 'A non-refundable booking fee secures your date. The balance is paid in instalments before the event, with the final payment due 21 working days beforehand. The full payment schedule is in your quote.',
  },
  {
    group: 'Booking & viewings',
    tags: ['home', 'weddings', 'functions'],
    q: 'Is the venue private on the day of our event?',
    a: 'Yes. When you book the venue, no other functions run on the estate that day.',
  },
  // Weddings
  {
    group: 'Weddings',
    tags: ['weddings', 'home'],
    q: 'How many guests can Buhle Country Estate hold?',
    a: 'The reception hall seats up to 210 guests at 10 to 12-seater tables. For smaller weddings we can set the room so it still feels full and intimate.',
  },
  {
    group: 'Weddings',
    tags: ['weddings'],
    q: 'How much does a wedding at Buhle Estate cost?',
    a: 'Venue hire starts from R150 per guest, and catering menus start from R320 per guest. Weddings with fewer than 100 guests have a minimum venue hire of R10 000. Décor, the event coordinator and extras such as a bar are quoted to suit your plans.',
  },
  {
    group: 'Weddings',
    tags: ['weddings'],
    q: 'What is included in the venue hire?',
    a: 'Exclusive use of the venue, 10 to 12-seater tables, a white wooden stage, a glass main table, his and hers chairs, a cake table and a gift station.',
  },
  {
    group: 'Weddings',
    tags: ['weddings'],
    q: 'Can we have our ceremony and reception at the estate?',
    a: 'Yes. Couples can say their vows on the lawn under a draped arch or indoors in the hall, then move straight into the reception. Your guests don’t need to travel between venues.',
  },
  {
    group: 'Weddings',
    tags: ['weddings', 'functions'],
    q: 'Can we bring our own décor, photographer or DJ?',
    a: 'Yes. Outside service providers are welcome, subject to the estate’s approval. Our in-house event coordinator can also arrange décor in your style and to your budget, from a simple high tea to a full band and three-course dinner.',
  },
  // Catering
  {
    group: 'Catering & drinks',
    tags: ['catering', 'weddings'],
    q: 'Do you do the catering yourselves?',
    a: 'Yes. Our catering is in-house and run by the team behind Jailbreak Caterers, founded by owner Nobuhle Mchunu in 2005. Menus start from R320 per guest and include crockery, cutlery, glassware, chafing dishes, linen for the serving points and waiting staff. <a href="/catering/">See the menus</a>.',
  },
  {
    group: 'Catering & drinks',
    tags: ['catering'],
    q: 'Can you cater for vegetarian, halaal or other dietary needs?',
    a: 'We can accommodate dietary requirements when you tell us in advance. Because these aren’t part of the standard menus, please list them when you confirm your numbers.',
  },
  {
    group: 'Catering & drinks',
    tags: ['catering', 'weddings'],
    q: 'Can we change the menu?',
    a: 'Yes. You can adjust any menu or have one designed to order. Arrival drinks, canapés, wine on the tables and a full bar are available on request.',
  },
  // Conferences
  {
    group: 'Conferences',
    tags: ['conferences'],
    q: 'How many delegates can you host?',
    a: 'Up to 15 delegates boardroom style, 50 in a U-shape and up to 100 cinema style.',
  },
  {
    group: 'Conferences',
    tags: ['conferences'],
    q: 'What is included in a conference package?',
    a: 'Every package includes venue hire, flip charts, pens and pads, jugs of water and mints. The Breakfast package (from R190 per delegate) and the Half Day package (from R275) cover coffee and tea on arrival, a morning tea and lunch. A Full Day package adds afternoon tea and is quoted on request.',
  },
  {
    group: 'Conferences',
    tags: ['conferences'],
    q: 'Do you have a projector and sound system?',
    a: 'Yes. A data projector and a P.A. system are available as optional extras. Let us know when you book and we’ll have them set up before your delegates arrive.',
  },
  // Getting here
  {
    group: 'Getting here',
    tags: ['home', 'contact'],
    q: 'Where is Buhle Country Estate?',
    a: 'We’re at Farm 10 of Kensington, Bishopstowe, Pietermaritzburg, 3201. That’s about a 15-minute drive from the Pietermaritzburg CBD, in the countryside but easy to reach. <a href="/contact/">Get directions</a>.',
  },
  {
    group: 'Getting here',
    tags: ['contact', 'functions'],
    q: 'What kinds of events do you host besides weddings?',
    a: 'Birthdays and milestone celebrations, baby showers, brunches, farewells and year-end functions, family gatherings, and corporate conferences, training and product launches. See <a href="/private-functions/">private functions</a> and <a href="/conferences/">conferences</a>.',
  },
];

export const faqsFor = (tag: string) => faqs.filter((f) => f.tags.includes(tag));

export const faqSchema = (items: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
  })),
});
