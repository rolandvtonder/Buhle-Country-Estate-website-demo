/**
 * Tips & Inspiration articles. Bodies are HTML and are styled by .prose-buhle.
 * Each one targets a search people actually make when planning an event
 * near Pietermaritzburg, and links to the relevant venue page.
 */

export type Article = {
  slug: string;
  title: string;
  /** Headline lines for the hero; `i` lines are italic. */
  lines: { t: string; i?: boolean }[];
  kicker: string;
  description: string;
  excerpt: string;
  hero: string;
  heroPos?: string;
  published: string;
  readMins: number;
  category: 'Weddings' | 'Conferences' | 'Inspiration';
  body: string;
  related: { label: string; href: string };
};

const swatch = (name: string, hex: string, meaning: string, dark = false) => `
  <li class="swatch">
    <span class="chip" style="background:${hex}${dark ? '' : ';box-shadow:inset 0 0 0 1px rgb(28 19 13 / .12)'}"></span>
    <strong>${name}</strong>
    <span>${meaning}</span>
  </li>`;

export const articles: Article[] = [
  {
    slug: 'wedding-planning-checklist',
    title: 'Wedding Planning Checklist: 10 Steps to a Calm Wedding Day',
    lines: [{ t: 'Ten steps to' }, { t: 'a calm wedding.', i: true }],
    kicker: 'Wedding planning',
    description: 'A practical, month-by-month wedding planning checklist for KZN couples: budget, guest list, venue, catering, suppliers and the final week.',
    excerpt: 'Budget first, guest list second, venue third. A practical order of operations that keeps the planning calm.',
    hero: 'white-wedding-reception-hall',
    heroPos: 'object-[50%_40%]',
    published: '2026-11-27',
    readMins: 6,
    category: 'Weddings',
    related: { label: 'Weddings at Buhle', href: '/weddings/' },
    body: `
<p>Most wedding stress comes from making decisions in the wrong order: booking a photographer before you know your date, or choosing a venue before you know how many people you’re inviting. Here’s the order that works, based on the weddings we’ve hosted at Buhle Country Estate.</p>

<h2>1. Agree on a budget together</h2>
<p>Before anything else, sit down and agree on a total figure and who is contributing what. A useful rough split for a South African wedding is about half on venue and catering, and the rest across attire, photography, décor, music and everything else. Keep 10% aside for surprises, because there will be some.</p>

<h2>2. Write the guest list (then cut it)</h2>
<p>Your guest count drives almost every other cost. Write the full list, then sort it into “must”, “should” and “would be nice”. Venues and caterers price per head, so knowing whether you’re at 80 or 200 guests changes everything that follows.</p>

<h2>3. Choose your season and a few possible dates</h2>
<p>Popular Saturdays in spring and summer book up 12 to 18 months ahead. Have two or three dates in mind before you start viewing venues, and consider a Friday or Sunday if you want more choice.</p>

<h2>4. View venues in person</h2>
<p>Photos only tell you so much. Walk the space, stand where the main table would go, and check where guests will be during the ceremony if it rains. At <a href="/weddings/">Buhle</a> couples can marry on the lawn or indoors, with the reception in the same place, so nobody drives between venues. Ask every venue the same questions:</p>
<ul>
  <li>What’s included in the hire fee: tables, chairs, stage, décor?</li>
  <li>Is the venue exclusive to you on the day?</li>
  <li>Can you bring your own suppliers, or must you use theirs?</li>
  <li>What’s the payment schedule, and what’s refundable?</li>
</ul>

<h2>5. Book catering early</h2>
<p>If your venue does in-house catering, book the tasting soon after the venue. Decide between buffet and plated service, think about dietary needs (vegetarian, halaal, allergies) and ask what’s included: crockery, glassware, waiting staff and serving stations can add up if they’re extras.</p>

<h2>6. Lock in the key suppliers</h2>
<p>Photographer, videographer, officiant and band or DJ are the suppliers who book out first. Check their reviews, ask to see a full wedding gallery rather than highlights, and make sure they know your venue or will visit it beforehand.</p>

<h2>7. Decide on your look</h2>
<p>Choose two or three main colours and a mood, such as garden romance, black-tie or soft and minimal, and let that guide décor, flowers, stationery and the bridal party. Our <a href="/tips-and-inspiration/choosing-your-wedding-colours/">wedding colour guide</a> can help.</p>

<h2>8. Send invitations</h2>
<p>Send save-the-dates six to eight months out and invitations about eight weeks before. Give an RSVP date three to four weeks before the wedding, because your caterer will need final numbers.</p>

<h2>9. Build the running order</h2>
<p>Work backwards from when you want to be on the dance floor. Allow more time than you think for photographs, and build in breathing room between the ceremony and the reception. A good event coordinator will draft this with you and share it with every supplier.</p>

<h2>10. Hand over the final week</h2>
<p>In the last week, confirm numbers, pay final balances, and give one trusted person (or your coordinator) the supplier contact list so they get the calls on the day, not you. Then rest, eat properly and drink water. The planning is done.</p>

<h3>Planning a wedding near Pietermaritzburg?</h3>
<p>Buhle Country Estate seats up to 210 guests, 15 minutes from the Pietermaritzburg CBD, with in-house catering and a coordinator with 20 years’ experience. <a href="/contact/#enquire">Book a viewing</a> and we’ll walk you through it.</p>
`,
  },
  {
    slug: 'summer-wedding-tips-kzn',
    title: 'Summer Weddings in KZN: 8 Tips for Heat, Storms and Sunshine',
    lines: [{ t: 'Summer weddings' }, { t: 'in KZN.', i: true }],
    kicker: 'Wedding tips',
    description: 'Planning a summer wedding in KwaZulu-Natal? Eight practical tips for heat, afternoon thunderstorms, timing, flowers, food and keeping guests comfortable.',
    excerpt: 'Hot mornings, afternoon thunderstorms and long golden evenings. How to plan for all three.',
    hero: 'garden-ceremony-aisle',
    heroPos: 'object-[50%_55%]',
    published: '2026-11-27',
    readMins: 5,
    category: 'Weddings',
    related: { label: 'Garden & indoor ceremonies', href: '/weddings/' },
    body: `
<p>A KZN summer wedding brings green hills, long evenings and beautiful light, along with heat, humidity and the classic Midlands afternoon thunderstorm. With a little planning, all of it works in your favour.</p>

<h2>1. Time the ceremony around the weather</h2>
<p>Summer storms in the Pietermaritzburg area usually build in the mid to late afternoon. A late-morning or early-afternoon ceremony avoids the worst of the heat and usually finishes before the clouds roll in. If you love golden-hour light, plan for photographs around 5 pm, with an indoor option if the sky turns.</p>

<h2>2. Always have a rain plan</h2>
<p>Choose a venue where the ceremony can move indoors without anyone getting in a car. At Buhle Country Estate the hall is a few steps from the lawn, so a garden ceremony can become an indoor one quickly if needed.</p>

<h2>3. Look after your guests</h2>
<ul>
  <li>Offer cold water and welcome drinks as guests arrive. Something sparkling with fresh herbs looks lovely and helps.</li>
  <li>Provide shade for an outdoor ceremony, and keep it short: 20 to 30 minutes.</li>
  <li>Mention on the invitation if it’s a garden ceremony, so guests choose sensible shoes for the lawn.</li>
</ul>

<h2>4. Choose flowers that handle heat</h2>
<p>Proteas, roses, chrysanthemums, gypsophila and greenery hold up far better than delicate blooms like hydrangeas or peonies. Ask your florist to deliver as late as possible and keep arrangements out of direct sun.</p>

<h2>5. Lighten the menu</h2>
<p>Summer menus work best when they’re fresh and generous rather than heavy. Think salads, a seasonal vegetable medley, fish or chicken alongside a roast, and cold individual desserts such as cheesecake or mousse. Our <a href="/catering/">catering menus</a> can be adjusted to the season.</p>

<h2>6. Dress the bridal party for the weather</h2>
<p>Breathable fabrics like chiffon, linen blends and lightweight crepe keep everyone comfortable. Groomsmen can lose the jackets after the ceremony, so plan photos with and without them.</p>

<h2>7. Protect the cake</h2>
<p>Buttercream softens in heat. Fondant or a semi-naked cake with fresh flowers holds up better, and the cake should go on display in a cool indoor spot, not by a sunny window.</p>

<h2>8. Make the most of the long evening</h2>
<p>Sunset in midsummer KZN is after 6:30 pm, which gives you a long, light evening. Plan speeches during dinner so the dancing starts while everyone still has energy.</p>

<h3>See the venue in summer</h3>
<p>The best way to picture your day is to stand in it. <a href="/contact/#enquire">Book a viewing</a> at Buhle Country Estate in Bishopstowe, 15 minutes from Pietermaritzburg.</p>
`,
  },
  {
    slug: 'choosing-your-wedding-colours',
    title: 'Choosing Your Wedding Colours: A Guide to Colour and Meaning',
    lines: [{ t: 'Choosing your' }, { t: 'wedding colours.', i: true }],
    kicker: 'Inspiration',
    description: 'How to choose wedding colours that suit your venue, season and style, with the meaning behind popular wedding colours and palettes that work together.',
    excerpt: 'What each colour says, how to pair them, and how to make a palette work in a real room.',
    hero: 'sage-green-table-setting',
    heroPos: 'object-[50%_50%]',
    published: '2026-11-27',
    readMins: 5,
    category: 'Inspiration',
    related: { label: 'See real décor in the gallery', href: '/gallery/' },
    body: `
<p>Your colours set the mood before anyone reads the menu. They guide your flowers, linen, stationery and the bridal party, and they shape how your photographs feel for years. Here’s how to choose them well.</p>

<h2>Start with the venue</h2>
<p>Look at the colours that are already there. Buhle’s hall is bright white with glossy floors and big windows onto green fields, so almost any palette works, and strong colours really stand out. A darker or wood-panelled venue suits richer, deeper palettes.</p>

<h2>What colours say</h2>
<ul class="swatches">
  ${swatch('White & ivory', '#f6f1e7', 'Purity, new beginnings, timeless elegance')}
  ${swatch('Gold', '#c9a46c', 'Celebration, warmth, prosperity')}
  ${swatch('Blush & rose', '#e7b8b5', 'Romance, tenderness, joy')}
  ${swatch('Fuchsia & magenta', '#b3306f', 'Confidence, energy, a party')}
  ${swatch('Lilac & lavender', '#b7a3cf', 'Grace, calm, a little whimsy')}
  ${swatch('Sage green', '#a7b59a', 'Growth, harmony, a garden feel')}
  ${swatch('Dusty blue', '#9db4c8', 'Serenity, trust, loyalty')}
  ${swatch('Navy', '#22324f', 'Depth, stability, classic style', true)}
  ${swatch('Burgundy', '#6e1f2e', 'Passion, richness, sophistication', true)}
  ${swatch('Black', '#1c130d', 'Drama, formality, modern glamour', true)}
</ul>

<h2>Palettes that work</h2>
<p>A simple rule: one main colour, one supporting colour, and one metallic or neutral to tie them together. Combinations we’ve seen look beautiful at Buhle:</p>
<ul>
  <li><strong>Sage, white & gold</strong> for a soft garden wedding with natural greenery.</li>
  <li><strong>Black, white & gold</strong> for black-tie glamour with crisp, graphic photographs.</li>
  <li><strong>Fuchsia, blush & gold</strong> for a joyful, high-energy celebration.</li>
  <li><strong>Lilac, purple & silver</strong> for something romantic and a little unexpected.</li>
  <li><strong>Navy, dusty blue & silver</strong> for an elegant palette that suits every season.</li>
</ul>

<h2>Think about the season</h2>
<p>Spring and summer suit pastels, greens and bright pops of colour. Autumn and winter suit jewel tones like burgundy, navy, emerald and deep plum, with candlelight and warm metallics.</p>

<h2>Test it in real life</h2>
<p>Gather fabric swatches, a few flowers and a napkin, and look at them together in daylight and under warm light. Colours shift a lot between a screen and a room. Bring your swatches to your venue viewing and hold them up against the walls and floor.</p>

<h3>Want to see colours in the room?</h3>
<p>Browse real weddings and functions in our <a href="/gallery/">gallery</a>, then <a href="/contact/#enquire">book a viewing</a> and bring your swatches with you.</p>
`,
  },
  {
    slug: 'how-to-plan-a-conference',
    title: 'How to Plan a Conference or Training Day in Pietermaritzburg',
    lines: [{ t: 'Plan a conference' }, { t: 'people enjoy.', i: true }],
    kicker: 'Conference planning',
    description: 'A step-by-step guide to planning a conference, workshop or training day near Pietermaritzburg: goals, venue layout, catering, equipment and delegate experience.',
    excerpt: 'Room layouts, catering breaks, equipment and timing. A planner’s checklist for a productive day.',
    hero: 'conference-seating-rows',
    heroPos: 'object-[50%_45%]',
    published: '2026-11-27',
    readMins: 5,
    category: 'Conferences',
    related: { label: 'Conference packages', href: '/conferences/' },
    body: `
<p>A good conference day feels effortless to delegates, which takes careful planning behind the scenes. Here’s a simple checklist for organising a conference, workshop or training day near Pietermaritzburg.</p>

<h2>1. Define the outcome</h2>
<p>Start by writing down what delegates should know or decide by the end of the day. That shapes everything else: the agenda, the speakers, the room layout and even the lunch break.</p>

<h2>2. Pick the right layout for the format</h2>
<ul>
  <li><strong>Boardroom</strong> (up to about 15): decision-making sessions and small strategy meetings.</li>
  <li><strong>U-shape</strong> (up to about 50): training and workshops where a facilitator moves around and everyone can see each other.</li>
  <li><strong>Cinema</strong> (up to about 100): presentations, launches and briefings focused on a screen.</li>
</ul>
<p>At <a href="/conferences/">Buhle Country Estate</a> the hall is set to your layout before delegates arrive.</p>

<h2>3. Get out of the office</h2>
<p>An off-site venue reduces interruptions and signals that the day matters. A country setting only 15 minutes from the city means less travel time and more attention, plus green views at tea break.</p>

<h2>4. Plan the catering around the agenda</h2>
<p>People concentrate better when they’re fed on time. Schedule coffee on arrival, a morning tea, lunch and, for a full day, an afternoon tea. Keep lunch lighter to avoid the 2 pm slump, and collect dietary requirements when delegates register.</p>

<h2>5. Check the equipment</h2>
<p>Confirm the projector, screen, P.A. system and microphones in advance, and test presentations on the venue’s equipment before the day. Flip charts, pens and pads should be on the tables when delegates walk in.</p>

<h2>6. Send clear joining instructions</h2>
<p>Include the address, a Google Maps link, parking information, start time and dress code. Delegates who arrive relaxed start better.</p>

<h2>7. Build in movement</h2>
<p>Break long sessions every 60 to 90 minutes. Use the outdoors for a breakout or a quick walk, which costs nothing and resets the room.</p>

<h2>8. Follow up</h2>
<p>Send slides and action points within a day, along with a short feedback form. It’s the easiest way to make the next one even better.</p>

<h3>Book your next conference</h3>
<p>Conference packages at Buhle Country Estate start from R190 per delegate and include the venue, standard equipment and catering. <a href="/contact/#enquire">Send us your date and numbers</a>.</p>
`,
  },
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
