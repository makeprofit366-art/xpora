export const categories = [
  { id: 'travel', label: 'Travel', emoji: '✈️', color: 'travel' },
  { id: 'life', label: 'Life', emoji: '🌱', color: 'life' },
  { id: 'ideas', label: 'Ideas', emoji: '💡', color: 'ideas' },
  { id: 'food', label: 'Food', emoji: '🍛', color: 'food' },
  { id: 'tech', label: 'Tech', emoji: '💻', color: 'tech' },
  { id: 'culture', label: 'Culture', emoji: '🎭', color: 'culture' },
  { id: 'health', label: 'Health', emoji: '🏃', color: 'health' },
  { id: 'finance', label: 'Finance', emoji: '💰', color: 'finance' },
];

export const users = [
  { id: 1, name: 'Priya Reddy', username: 'priyareddy', bio: 'Travel writer & food lover from Hyderabad. Exploring the world one story at a time.', location: 'Hyderabad, Telangana', followers: 2840, following: 312, posts: 47, colorIndex: 0 },
  { id: 2, name: 'Arjun Sharma', username: 'arjunsharma', bio: 'Software engineer turned storyteller. Writing about tech, life, and everything in between.', location: 'Bengaluru, Karnataka', followers: 1560, following: 198, posts: 31, colorIndex: 1 },
  { id: 3, name: 'Kavya Nair', username: 'kavyanair', bio: 'Entrepreneur | Mindfulness coach | Sharing lessons from a decade of startup life.', location: 'Chennai, Tamil Nadu', followers: 5200, following: 445, posts: 89, colorIndex: 2 },
  { id: 4, name: 'Rahul Varma', username: 'rahulvarma', bio: 'Food critic and home chef. Every dish has a story — I tell them.', location: 'Vijayawada, AP', followers: 980, following: 156, posts: 23, colorIndex: 3 },
  { id: 5, name: 'Meghna Iyer', username: 'meghnaiyer', bio: 'Poet, dreamer, and occasional philosopher from Vizag.', location: 'Visakhapatnam, AP', followers: 3100, following: 267, posts: 62, colorIndex: 4 },
  { id: 6, name: 'Vikram Chandra', username: 'vikramchandra', bio: 'Finance professional & weekend trekker. Writing about money, mountains, and meaning.', location: 'Pune, Maharashtra', followers: 740, following: 89, posts: 18, colorIndex: 5 },
];

export const posts = [
  {
    id: 1,
    title: 'Oka Pedda Praanam: My Solo Trek Through the Araku Valley',
    preview: 'Nobody told me that the fog-wrapped valleys of Araku would teach me more about myself than any therapist ever could. It started as a weekend escape and ended as a life-changing pilgrimage through green hills, tribal wisdom, and the best coffee I have ever tasted.',
    content: `Nobody told me that the fog-wrapped valleys of Araku would teach me more about myself than any therapist ever could.

It started as a spontaneous decision on a Friday evening — pack a bag, book a sleeper ticket on the Visakha Express, and just go. The journey itself was half the magic: the Konkan-like route where the train cuts through 57 tunnels and 84 bridges, offering glimpses of waterfalls that seem to pour from nowhere.

I arrived at dawn. The air was cold and smelled of eucalyptus and wet earth. My guesthouse was a simple room above a coffee plantation family's home. Amma there made me gongura pachadi and rice for breakfast — I nearly cried.

The trek to Chaparai waterfalls took three hours through paths that barely qualified as paths. Halfway through, I lost my way, sat on a rock, and for twenty minutes just... listened. To birds I couldn't name. To water finding its way downhill. To the distant sound of someone singing in a language I didn't understand but completely felt.

**What I brought back**

Not photographs. Not coffee (well, some coffee). But a quietness. The Araku valley has this quality of pressing pause on whatever anxiety is chasing you from the city.

I came back on Sunday night, covered in mud, smelling like forest, with a phone full of blurry photos and a heart surprisingly full.

If you've been putting off a solo trip because you're waiting for the "right time" — Araku told me to tell you: this is it.`,
    author: users[0],
    category: 'travel',
    tags: ['araku', 'travel', 'andhra', 'trekking', 'solo'],
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    likes: 284,
    comments: 42,
    saves: 117,
    readTime: 5,
    createdAt: '2 hours ago',
    featured: true,
  },
  {
    id: 2,
    title: 'The Day I Left My ₹18 LPA Job (And Why I Don\'t Regret It)',
    preview: 'Everyone around me thought I was crazy. My parents stopped speaking to me for two weeks. My colleagues thought it was a negotiation tactic. It wasn\'t. Here\'s the story of the most terrifying and liberating decision of my life.',
    content: `Everyone around me thought I was crazy. My parents stopped speaking to me for two weeks. My colleagues thought it was a negotiation tactic. It wasn't.

Let me tell you about the day I walked away from a comfortable tech job that paid more than I had ever imagined earning at 26.

It was a Tuesday. I remember because we had a product review meeting that morning and I presented slides I had spent the weekend making. The feedback was good. My manager smiled. My skip-level nodded approvingly. I walked back to my desk, sat down, and felt... nothing. Not satisfaction, not pride. Nothing.

I had been feeling that nothing for eight months.

**The buildup**

I won't pretend this was a sudden decision. It had been building quietly for a long time. I was good at my job, but I wasn't growing *inside* it. The work felt like filling forms in a language I spoke fluently but didn't dream in.

Meanwhile, I'd been building a small mobile app on weekends — a hyperlocal community board for Telugu-speaking neighbourhoods. Nothing fancy. About 200 users. But every time I got a message saying "anna this app saved me so much trouble," I felt something my ₹18 LPA package never quite gave me.

**The jump**

I saved 14 months of runway. Told my family (rough week, see above). Resigned cleanly, completed my notice period, helped my replacement, and left on good terms.

It's been 11 months. My app now has 14,000 users. I make less money than before. I sleep better than I ever have.

This isn't a success story yet — it's a story in progress. But every day I choose the uncertainty, and every day that choice feels more like freedom.`,
    author: users[1],
    category: 'life',
    tags: ['career', 'startup', 'life', 'courage', 'telugu'],
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    likes: 891,
    comments: 134,
    saves: 432,
    readTime: 7,
    createdAt: '5 hours ago',
    featured: true,
  },
  {
    id: 3,
    title: 'Why Pesarattu at 6 AM Changes How You Think About Work',
    preview: 'There is a particular clarity that comes from sitting at a roadside hotel in Vijayawada at dawn, eating pesarattu with ginger chutney. I\'ve started treating this weekly ritual as my most important meeting of the week.',
    content: `There is a particular clarity that comes from sitting at a roadside hotel in Vijayawada at dawn, eating pesarattu with ginger chutney and watching the city slowly wake up.

I started this ritual by accident. An early morning client call pushed me out of bed before 5:30 AM, and I found myself at a hotel near Governorpet that I had walked past hundreds of times but never entered. The pesarattu arrived in three minutes. The ginger chutney was sharp and warm. The filter coffee was the real thing.

I sat there for 45 minutes. Just me and my thoughts and the sound of the city coming alive.

That day, I solved a problem I had been stuck on for two weeks. I drafted a message I had been avoiding sending for a month. I wrote the outline of a proposal that later became my best client project.

**What's actually happening here**

I've thought about why this works, and I think it's a few things:

1. **No screen time before food.** Walking to the hotel, sitting, eating — it's all analog. Your brain gets 40-50 minutes of non-digital existence.
2. **The ritual itself signals something.** Your nervous system knows: this is thinking time. Not reacting time.
3. **Pesarattu specifically?** Maybe it's nostalgia. Maybe it's that green moong just genuinely fuels the brain. I don't question it.

I've now done this every Thursday for six months. It's the best productivity hack I haven't seen in any newsletter.`,
    author: users[3],
    category: 'food',
    tags: ['food', 'productivity', 'vijayawada', 'telugu culture'],
    coverImage: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80',
    likes: 456,
    comments: 67,
    saves: 203,
    readTime: 4,
    createdAt: '1 day ago',
    featured: false,
  },
  {
    id: 4,
    title: 'Building India\'s First AI Tool in Telugu: A Technical Story',
    preview: 'When we started building a conversational AI that actually understood Telugu idioms, our English-trained models kept failing hilariously. "Naaku cheppandi" doesn\'t translate to "tell me" — it carries weight, urgency, relationship.',
    content: `When we started building a conversational AI that actually understood Telugu idioms, our English-trained models kept failing hilariously.

"Naaku cheppandi" doesn't just translate to "tell me" — it carries weight, urgency, and relationship context depending on who says it and how. Our first models treated it like a polite request. Our users found it condescending, not helpful.

This is the story of how we learned to build technology that understood not just language, but culture.

**The problem with existing models**

Every major language model available in 2023 treated Telugu as a secondary language — technically supported, practically broken. They could transliterate. They could translate. But they couldn't *think* in Telugu.

Our first version of the chatbot would respond to casual Telugu with formal, almost bureaucratic language. Like speaking to your Anna and having him respond like a government notification.

**What we changed**

We collected 40,000 real Telugu conversations — WhatsApp messages (with permission), YouTube comments, forum posts, family group chats. We annotated not just meaning but *register*: formal, casual, affectionate, urgent, humorous.

The difference was immediate. When users chatted naturally, the system chatted back naturally.

**Why this matters beyond the product**

India has 22 scheduled languages. Most AI tools treat them as translation problems, not as living, breathing communication systems. That is a mistake — and it's also a business opportunity that we're only beginning to understand.`,
    author: users[1],
    category: 'tech',
    tags: ['AI', 'telugu', 'NLP', 'startups', 'technology'],
    coverImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    likes: 672,
    comments: 89,
    saves: 318,
    readTime: 6,
    createdAt: '2 days ago',
    featured: false,
  },
  {
    id: 5,
    title: 'Ammamma\'s Kitchen: Documenting Recipes Before They Are Gone Forever',
    preview: 'My grandmother has 73 recipes in her head and zero of them are written down. She measures by feel, cooks by memory, and adjusts by smell. I spent three months following her around the kitchen with a notebook.',
    content: `My grandmother has 73 recipes in her head and zero of them are written down anywhere.

She measures by feel — a handful of this, a pinch of that. She cooks by memory accumulated over six decades. She adjusts by smell, and by some sixth sense I have never been able to replicate despite trying the same recipe forty times.

Last year, I realized with a start that she is 78. That the knowledge in her hands is irreplaceable. That when she goes, those recipes go with her unless someone does something.

So I did something.

**Three months in Ammamma's kitchen**

I took a leave of absence from work and moved back home to Rajam. Every morning at 7 AM, I was in the kitchen with a notebook, a measuring cup, and my phone recording video that I knew would mostly be unusable because she moves too fast.

The first week, she found it annoying. "Enti ra, hospital lo unnaava?" (What, are you in a hospital?) She wasn't used to someone watching every move.

By week two, she started explaining without being asked. "Ee karam chustunnava? Idi red chilli from Guntur — vere vadu use chesthe taste same untundi ani anukoko." (You see this spice? This is from Guntur — don't assume another variety will taste the same.)

**What I learned beyond recipes**

I came for pesarattu and pulusu variations. I left with something harder to document — her philosophy of feeding people. That food is never just fuel. That the time you take is an ingredient. That rushing a dish is disrespecting your guest.

I have 43 recipes documented now. Working on the rest.`,
    author: users[4],
    category: 'culture',
    tags: ['food', 'culture', 'family', 'telugu', 'grandmothers'],
    coverImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    likes: 1203,
    comments: 187,
    saves: 654,
    readTime: 8,
    createdAt: '3 days ago',
    featured: true,
  },
  {
    id: 6,
    title: 'How I Saved ₹10 Lakhs in 2 Years on a ₹6 LPA Salary',
    preview: 'Not a clickbait title. Real numbers, real trade-offs, and the mindset shift that made it possible. Living in Hyderabad, paying rent, not depriving myself of life.',
    content: `Not a clickbait title. Real numbers. Real trade-offs.

I'll tell you upfront: I didn't save ₹10 lakhs by not enjoying life. I still went to movies. I still traveled. I still ate out. But I changed *how* I did all of those things, and more importantly, I changed what I believed I was doing when I saved.

**The mindset shift first**

Most personal finance advice treats saving as deprivation — you sacrifice now for reward later. I reframed it entirely: every rupee I save is one rupee of freedom I am buying. Not abstract future-freedom. Real, tangible option value.

This changed everything. I stopped seeing savings as money "gone." I started seeing it as buying myself choices.

**The actual numbers (Year 1)**

- Monthly take-home: ~₹42,000
- Rent (shared 2BHK, Madhapur): ₹8,500
- Food (mostly cooking, eating out Friday only): ₹4,200
- Transport (metro + occasional auto): ₹1,800
- Subscriptions + misc: ₹1,500
- Emergency fund contribution: ₹5,000
- SIP (mutual funds): ₹12,000
- **Remaining/buffer: ~₹9,000**

Year 1 savings: ₹2.04 lakhs in SIPs + ₹60,000 emergency fund = ₹2.64 lakhs.

**What actually worked**

The biggest lever wasn't coffee or eating out. It was housing. Finding the right flatmate situation saved me ₹6,000/month versus living alone. Over 24 months, that's ₹1.44 lakhs — more than any other single decision.

Second biggest: automating the SIP on salary day. Money I never see, I never spend.`,
    author: users[5],
    category: 'finance',
    tags: ['finance', 'savings', 'hyderabad', 'personal finance'],
    coverImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
    likes: 2340,
    comments: 312,
    saves: 1180,
    readTime: 9,
    createdAt: '4 days ago',
    featured: false,
  },
  {
    id: 7,
    title: 'Learning Carnatic Music at 34: A Complete Beginner\'s Confession',
    preview: 'My teacher is 19. I am 34. She is infinitely patient. I am infinitely humbled. Starting Carnatic vocal lessons as an adult is the best and most uncomfortable thing I have done in years.',
    content: `My teacher is 19. I am 34. She is infinitely patient. I am infinitely humbled.

I started Carnatic vocal lessons eight months ago, driven by something I can only describe as a mid-thirties reckoning with time. My parents had wanted me to learn as a child. I had resisted with the particular stubbornness of children who don't know what they are refusing.

Now I know.

**The first three months: ego dissolution**

The first lesson, my teacher asked me to sing Sa. Just Sa. Hold it. Sustain it. Keep it clean.

I thought I did a fine job. She smiled gently and said "thodi ga ekkuva aindi" (went slightly high) and demonstrated the difference. I could not hear what she was hearing.

I went home and sang Sa into a tuner app for 30 minutes. I was consistently 15-20 cents sharp without knowing it.

This was humbling in a way that nothing in my professional life had been in years. I was genuinely a beginner. A real beginner. Not "new to this role" beginner — but "you cannot hear what you are singing" beginner.

**What months 4-8 brought**

Slowly, slowly, my ear started catching things. The difference between swaras started having feeling attached to them, not just positions. Raga Hamsadhwani started making sense not as notes but as a colour.

I am not good. I will probably never perform. But I can now hear Indian classical music completely differently — like someone turned on a layer of detail that was always there, invisible.

That alone was worth everything.`,
    author: users[4],
    category: 'culture',
    tags: ['music', 'carnatic', 'learning', 'telugu culture', 'arts'],
    coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    likes: 567,
    comments: 78,
    saves: 234,
    readTime: 6,
    createdAt: '5 days ago',
    featured: false,
  },
  {
    id: 8,
    title: 'The Startup That Failed: What ₹40 Lakhs and 3 Years Taught Me',
    preview: 'We built a beautiful product. We had 500 paying customers. We ran out of money in month 34 and shut down. This is the honest post-mortem I wish I had read before starting.',
    content: `We built a beautiful product. We had 500 paying customers. We ran out of money in month 34 and shut down.

I have read many "startup failure" posts. Most are either too self-flagellating or too neatly packaged into lessons. I want to be more honest than both.

**What actually happened**

We built an HR tool specifically for mid-sized Indian companies — 50 to 500 employees. There was genuine demand. Our NPS was 67. Customers renewed. But our sales cycle was 4-6 months, our ACV was ₹1.8 lakhs, and we had burned through investor money on product before establishing that the unit economics could work.

They couldn't. Not at the pace we needed.

**The thing nobody says**

Running out of money is not dramatic. It is slow and grinding. It is three months of "next month will be better." It is telling your team of seven that you believe in the mission while privately modeling whether you can make payroll.

The day I called everyone in to tell them we were shutting down is the day I replay most often. Not with regret exactly — more with the weight of what it means to make decisions that affect other people's lives.

**What I actually learned**

Not "fail fast." Not any of the common aphorisms. What I learned is that company-building is mostly about psychological endurance. The technical problems are solvable. The loneliness is the hard part.

I'm building again. Slower this time. With more attention to the unit economics before the beautiful product.`,
    author: users[2],
    category: 'ideas',
    tags: ['startup', 'failure', 'entrepreneurship', 'lessons', 'india'],
    coverImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80',
    likes: 1876,
    comments: 234,
    saves: 892,
    readTime: 10,
    createdAt: '1 week ago',
    featured: true,
  },
];

export const trendingTags = ['#ArrakuValley', '#TeluguStories', '#StartupLife', '#Hyderabad', '#SoloTravel', '#CareerChange', '#IndianFood', '#CarnatiMusic', '#PersonalFinance', '#TechIndia'];

export const currentUser = users[0];
