import { HistoricalFigure, Artifact, MythologyMission, HistoryEvent, GodParent, Era } from './types';

export const ERAS: Era[] = [
  {
    id: 'stone-age',
    title: 'Stone Age',
    yearRange: 'c. 3.3M years ago - 3300 BCE',
    description: 'The dawn of humanity, marked by the first stone tools and the discovery of fire.',
    imageUrl: 'https://images.unsplash.com/photo-1664115971126-01d762da68b5?q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1664115971126-01d762da68b5?q=80&w=1920',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800', caption: 'Ancient Cave Paintings' },
      { url: 'https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=800', caption: 'Early Stone Tools' },
      { url: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=800', caption: 'The Discovery of Fire' }
    ],
    facts: {
      dailyLife: [
        'Lived in small nomadic tribes of 20-50 people.',
        'Diet consisted of wild berries, nuts, and hunted game.',
        'Clothing was made from animal hides sewn with bone needles.'
      ],
      events: [
        'The Great Migration out of Africa.',
        'The development of the first spoken languages.',
        'The transition from hunting to early farming (Neolithic Revolution).'
      ],
      innovations: [
        'Controlled use of fire for warmth and cooking.',
        'Creation of flint hand-axes and spears.',
        'Development of cave art and spiritual rituals.'
      ],
      funFacts: [
        'Stone Age people were surprisingly healthy and had strong teeth!',
        'The "Stone Age" actually lasted for roughly 99% of human history.',
        'Dogs were the first animals to be domesticated, around 15,000 years ago.'
      ]
    }
  },
  {
    id: 'bronze-age',
    title: 'Bronze Age',
    yearRange: 'c. 3300 BCE - 1200 BCE',
    description: 'The rise of the first civilizations and the widespread use of bronze for tools and weapons.',
    imageUrl: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=1920',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1564392415121-653634992700?q=80&w=800', caption: 'Mesopotamian Ziggurat' },
      { url: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=800', caption: 'Ancient Egyptian Pyramids' },
      { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800', caption: 'Bronze Weaponry' }
    ],
    facts: {
      dailyLife: [
        'The first cities were built, leading to specialized jobs like potters and weavers.',
        'Beer was a staple drink in Mesopotamia and Egypt.',
        'Social hierarchies emerged with kings, priests, and commoners.'
      ],
      events: [
        'The building of the Great Pyramid of Giza.',
        'The rise of the Minoan civilization on Crete.',
        'The development of Cuneiform, the first writing system.'
      ],
      innovations: [
        'Smelting copper and tin to create bronze.',
        'The invention of the wheel for transport and pottery.',
        'Early irrigation systems for large-scale farming.'
      ],
      funFacts: [
        'Ancient Egyptians used moldy bread to treat infections—an early form of penicillin!',
        'The wheel was originally used for making pottery, not for chariots.',
        'The Bronze Age Collapse remains one of history\'s greatest mysteries.'
      ]
    }
  },
  {
    id: 'iron-age',
    title: 'Iron Age',
    yearRange: 'c. 1200 BCE - 500 BCE',
    description: 'A period of rapid technological advancement and the rise of powerful empires using iron.',
    imageUrl: 'https://images.unsplash.com/photo-1599733594230-6b823276abcc?q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1599733594230-6b823276abcc?q=80&w=1920',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800', caption: 'Iron Age Hillfort' },
      { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800', caption: 'Blacksmith at the Forge' },
      { url: 'https://images.unsplash.com/photo-1590001158193-79030c7d3dd6?q=80&w=800', caption: 'Celtic Jewelry' }
    ],
    facts: {
      dailyLife: [
        'Iron tools made farming much easier, leading to a population boom.',
        'People lived in fortified villages or hillforts for protection.',
        'The first coins were minted in Lydia (modern-day Turkey).'
      ],
      events: [
        'The rise of the Neo-Assyrian Empire.',
        'The expansion of Celtic tribes across Europe.',
        'The founding of Carthage by Phoenician settlers.'
      ],
      innovations: [
        'The development of the alphabet by the Phoenicians.',
        'Iron smelting, which required much higher temperatures than bronze.',
        'Advanced metalworking for intricate jewelry and armor.'
      ],
      funFacts: [
        'Iron was once more valuable than gold because it was so hard to extract.',
        'The first "iron" tools were actually made from meteorites!',
        'Iron Age people in Britain built "roundhouses" with thatched roofs.'
      ]
    }
  },
  {
    id: 'ancient-civilizations',
    title: 'Ancient Civilizations',
    yearRange: 'c. 3000 BCE - 500 BCE',
    description: 'The era of Great Pyramids, Ziggurats, and the first written laws.',
    imageUrl: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=1920',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=800', caption: 'The Great Sphinx' },
      { url: 'https://images.unsplash.com/photo-1564392415121-653634992700?q=80&w=800', caption: 'Babylonian Gates' },
      { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800', caption: 'Hieroglyphic Inscriptions' }
    ],
    facts: {
      dailyLife: [
        'Education was reserved for the elite, who learned to read and write.',
        'The Nile River was the lifeblood of Egypt, providing food and transport.',
        'Mesopotamians lived in sun-dried brick houses.'
      ],
      events: [
        'The unification of Upper and Lower Egypt.',
        'The reign of Hammurabi and his famous Code of Laws.',
        'The construction of the Hanging Gardens of Babylon.'
      ],
      innovations: [
        'The 360-degree circle and the 60-minute hour (Mesopotamia).',
        'Advanced medicine and surgery in Ancient Egypt.',
        'The invention of papyrus for writing.'
      ],
      funFacts: [
        'Ancient Egyptians loved board games, especially one called Senet.',
        'The Great Pyramid was the tallest man-made structure for 3,800 years.',
        'Mesopotamians invented the first postal system using clay tablets.'
      ]
    }
  },
  {
    id: 'classical-era',
    title: 'Classical Era',
    yearRange: 'c. 500 BCE - 500 CE',
    description: 'The golden age of Greece and Rome, shaping Western philosophy, art, and law.',
    imageUrl: 'https://images.unsplash.com/photo-1636804907108-fa8d2e0f7a90?q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1636804907108-fa8d2e0f7a90?q=80&w=1920',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1515446134809-993c501ca304?q=80&w=800', caption: 'The Parthenon in Athens' },
      { url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800', caption: 'The Roman Colosseum' },
      { url: 'https://images.unsplash.com/photo-1590001158193-79030c7d3dd6?q=80&w=800', caption: 'Classical Greek Sculpture' }
    ],
    facts: {
      dailyLife: [
        'Romans enjoyed public baths as a place for socializing and business.',
        'Greek citizens participated directly in their city-state\'s democracy.',
        'The diet was Mediterranean: bread, olives, wine, and cheese.'
      ],
      events: [
        'The conquests of Alexander the Great.',
        'The rise and fall of the Roman Republic.',
        'The first Olympic Games in 776 BCE.'
      ],
      innovations: [
        'Roman concrete, which allowed for massive domes and arches.',
        'The development of formal logic and philosophy by Socrates and Plato.',
        'Advanced aqueducts that brought fresh water to cities.'
      ],
      funFacts: [
        'Romans used a sponge on a stick (xylospongium) instead of toilet paper.',
        'The Colosseum could be flooded to host mock naval battles!',
        'Greek actors wore oversized masks to project their voices and emotions.'
      ]
    }
  },
  {
    id: 'medieval-era',
    title: 'Medieval Era',
    yearRange: 'c. 500 CE - 1450 CE',
    description: 'Knights, castles, and the rise of great religions across Europe and Asia.',
    imageUrl: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=1920',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?q=80&w=800', caption: 'Gothic Cathedral' },
      { url: 'https://images.unsplash.com/photo-1599733594230-6b823276abcc?q=80&w=800', caption: 'Medieval Knight in Armor' },
      { url: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800', caption: 'Fortified Castle' }
    ],
    facts: {
      dailyLife: [
        'Most people were peasants who worked the land for a local lord.',
        'The Church was the center of social and intellectual life.',
        'Guilds controlled the quality and price of goods in the growing towns.'
      ],
      events: [
        'The Crusades to the Holy Land.',
        'The signing of the Magna Carta in 1215.',
        'The Black Death, which killed a third of Europe\'s population.'
      ],
      innovations: [
        'The invention of the mechanical clock.',
        'The development of the heavy plow for northern European soil.',
        'The rise of the first universities in Bologna, Paris, and Oxford.'
      ],
      funFacts: [
        'Medieval people didn\'t actually think the Earth was flat!',
        'Animals could be put on trial for crimes, with lawyers and judges.',
        'The "Dark Ages" were actually a time of great artistic and architectural growth.'
      ]
    }
  },
  {
    id: 'renaissance',
    title: 'Renaissance',
    yearRange: 'c. 1400 CE - 1600 CE',
    description: 'A cultural rebirth of art, science, and exploration that changed the world.',
    imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1920',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800', caption: 'Renaissance Masterpiece' },
      { url: 'https://images.unsplash.com/photo-1525268323446-0505b6fe5bb2?q=80&w=800', caption: 'Leonardo\'s Inventions' },
      { url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800', caption: 'Florentine Architecture' }
    ],
    facts: {
      dailyLife: [
        'The rise of a wealthy merchant class who patronized the arts.',
        'Humanism emphasized the value of the individual and classical learning.',
        'Coffee and sugar became popular as global trade expanded.'
      ],
      events: [
        'The invention of the printing press by Johannes Gutenberg.',
        'Columbus\'s voyage to the Americas in 1492.',
        'The Protestant Reformation led by Martin Luther.'
      ],
      innovations: [
        'Linear perspective in art, creating the illusion of depth.',
        'The telescope and microscope, opening new worlds to science.',
        'Double-entry bookkeeping, which revolutionized business.'
      ],
      funFacts: [
        'Leonardo da Vinci wrote his notes in mirror writing to keep them secret.',
        'The Renaissance began in Florence, Italy, due to its immense wealth.',
        'The word "Renaissance" literally means "rebirth" in French.'
      ]
    }
  },
  {
    id: 'industrial-revolution',
    title: 'Industrial Revolution',
    yearRange: 'c. 1760 CE - 1900 CE',
    description: 'The transition to new manufacturing processes, steam power, and urban growth.',
    imageUrl: 'https://images.unsplash.com/photo-1534313314376-a72289b6181e?q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1534313314376-a72289b6181e?q=80&w=1920',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800', caption: 'Steam-Powered Factory' },
      { url: 'https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=800', caption: 'Early Steam Locomotive' },
      { url: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800', caption: 'Victorian Cityscape' }
    ],
    facts: {
      dailyLife: [
        'Massive migration from rural farms to crowded industrial cities.',
        'The emergence of a middle class and a distinct working class.',
        'Long working hours in factories, often including children.'
      ],
      events: [
        'The invention of the steam engine by James Watt.',
        'The Great Exhibition of 1851 in London.',
        'The completion of the Transcontinental Railroad.'
      ],
      innovations: [
        'The telegraph, which allowed for instant long-distance communication.',
        'The lightbulb, invented by Thomas Edison.',
        'The assembly line, which revolutionized mass production.'
      ],
      funFacts: [
        'The first modern factory was a silk mill built in 1721.',
        'The Industrial Revolution led to the creation of the first labor unions.',
        'Standardized time zones were created to keep trains on schedule.'
      ]
    }
  },
  {
    id: 'modern-era',
    title: 'Modern Era',
    yearRange: 'c. 1900 CE - 1980 CE',
    description: 'A century of world wars, technological leaps, and the dawn of the space age.',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1920',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800', caption: 'Apollo 11 Moon Landing' },
      { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800', caption: 'The Rise of the Metropolis' },
      { url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800', caption: 'Early Computing' }
    ],
    facts: {
      dailyLife: [
        'The rise of consumer culture and mass media (radio, TV).',
        'Increased mobility through the widespread use of automobiles.',
        'Significant advances in civil rights and women\'s suffrage.'
      ],
      events: [
        'World War I and World War II.',
        'The Cold War and the Space Race.',
        'The fall of the Berlin Wall in 1989.'
      ],
      innovations: [
        'The development of the airplane by the Wright brothers.',
        'The discovery of penicillin by Alexander Fleming.',
        'The invention of the transistor, leading to the computer age.'
      ],
      funFacts: [
        'The computer on Apollo 11 was less powerful than a modern calculator.',
        'The first transatlantic flight took 33.5 hours.',
        'The 1920s were known as the "Roaring Twenties" for their cultural energy.'
      ]
    }
  },
  {
    id: 'contemporary-era',
    title: 'Contemporary Era',
    yearRange: 'c. 1980 CE - Present',
    description: 'The digital revolution, global connectivity, and the challenges of the 21st century.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800', caption: 'Global Connectivity' },
      { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800', caption: 'Modern Robotics' },
      { url: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=800', caption: 'The COVID-19 Pandemic' }
    ],
    facts: {
      dailyLife: [
        'Constant connectivity through smartphones and social media.',
        'The rise of the "gig economy" and remote work.',
        'Increased awareness of climate change and sustainability.'
      ],
      events: [
        'The invention of the World Wide Web in 1989.',
        'The 9/11 terrorist attacks and their global impact.',
        'The COVID-19 pandemic and the shift to a "new normal."'
      ],
      innovations: [
        'Artificial Intelligence and Machine Learning.',
        'CRISPR gene editing technology.',
        'Reusable rockets and the privatization of space travel.'
      ],
      funFacts: [
        'More data has been created in the last two years than in all of human history.',
        'The first website is still online today!',
        'The COVID-19 pandemic led to the fastest vaccine development ever.'
      ]
    }
  }
];

export const HISTORICAL_FIGURES: HistoricalFigure[] = [
  // Stone Age
  {
    id: 'oog-caveman',
    name: 'Oog the Storyteller',
    period: 'Stone Age',
    category: 'Thinker',
    role: 'main',
    description: 'A tribal elder who remembers the first spark of fire.',
    avatar: 'https://picsum.photos/seed/caveman/200/200',
    personalityTraits: ['Observant', 'Primal', 'Mystical'],
    systemPrompt: 'You are Oog, a tribal elder from the Stone Age. You speak in simple, powerful sentences. CRITICAL TIMELINE RULE: You do NOT recognize or discuss anything from the future. If asked about modern things (like "smartphones" or "microwaves"), you are HILARIOUSLY confused and state you are unfamiliar with them. Do NOT guess. Redirect to Stone Age concepts (e.g., a smartphone is a "strange glowing rock", a microwave is "fire in a box"). You talk about the hunt, the stars, and survival. If asked about modern slang, call it "strange bird-sounds" and tell them about the time you wrestled a mammoth. Maintain immersion at all times.',
    statusMessages: ['Oog is painting on a digital wall... 🎨', 'Oog is trying to eat the mouse... 🖱️', 'Oog is staring at the "magic light"... 💡']
  },

  // Ancient Civilizations
  {
    id: 'cleopatra',
    name: 'Cleopatra VII',
    period: 'Ancient Civilizations',
    category: 'Leader',
    role: 'main',
    description: 'The last active ruler of the Ptolemaic Kingdom of Egypt.',
    avatar: 'https://picsum.photos/seed/cleopatra-egypt/200/200',
    personalityTraits: ['Charismatic', 'Strategic', 'Proud'],
    systemPrompt: 'You are Cleopatra. You are highly intelligent, incredibly charismatic, and have a sharp, HILARIOUS wit. CRITICAL TIMELINE RULE: You do NOT recognize or discuss anything from the future. If asked about modern events, people, or technology (like "memes" or "pyramid-building machines"), state you are unfamiliar with them. Do NOT guess. Redirect to Egyptian concepts (e.g., ask if it can build a pyramid faster than 100,000 workers). You speak with grace and divine sass. Be dramatic, slightly intimidating, and very funny. Maintain immersion at all times.',
    statusMessages: ['Cleopatra is judging your question... 👀', 'Cleopatra is reapplying her eyeliner... 👁️', 'Cleopatra is consulting with her advisors... 🐍']
  },

  // Classical Era
  {
    id: 'caesar',
    name: 'Julius Caesar',
    period: 'Classical Era',
    category: 'Leader',
    role: 'main',
    description: 'The famous Roman general and statesman.',
    avatar: 'https://picsum.photos/seed/julius-caesar/200/200',
    personalityTraits: ['Authoritative', 'Ambitious', 'Eloquent'],
    systemPrompt: 'You are Julius Caesar. You are authoritative, charismatic, and HILARIOUSLY dramatic about your legacy. CRITICAL TIMELINE RULE: You do NOT recognize or discuss anything from the future. If asked about modern politics, technology (like "plastic"), or events, state you are unfamiliar with them. Do NOT guess. Redirect to Roman concepts (e.g., ask where the togas and daggers are, or compare things to marble). Use expressive language, dramatic pauses, and a touch of arrogant humor. Maintain immersion at all times.',
    statusMessages: ['Caesar is polishing his laurel wreath... 🌿', 'Caesar is practicing his victory speech... 🏛️', 'Caesar is judging your lack of a toga... 👀']
  },

  // Medieval Period
  {
    id: 'joan-of-arc',
    name: 'Joan of Arc',
    period: 'Medieval Era',
    category: 'Warrior',
    role: 'main',
    description: 'The Maid of Orléans, a heroine of France.',
    avatar: 'https://picsum.photos/seed/joan-arc/200/200',
    personalityTraits: ['Devout', 'Courageous', 'Visionary'],
    systemPrompt: 'You are Joan of Arc. You are deeply devout, courageous, and have a HILARIOUSLY honest perspective. CRITICAL TIMELINE RULE: You do NOT recognize or discuss anything from the future. If asked about modern "armor" (like puffer jackets), social media, or future events, state you are unfamiliar with them. Do NOT guess. Redirect to Medieval concepts (e.g., describe social media as a "digital battlefield" requiring a strong shield). You talk about the voices that guided you and the importance of faith. Maintain immersion at all times.',
    statusMessages: ['Joan is sharpening her sword... ⚔️', 'Joan is listening to the whispers... 🕊️', 'Joan is praying for guidance... 🙏']
  },

  // Early Modern Period
  {
    id: 'da-vinci',
    name: 'Leonardo da Vinci',
    period: 'Renaissance',
    category: 'Artist',
    role: 'main',
    description: 'The ultimate Renaissance Man.',
    avatar: 'https://picsum.photos/seed/davinci/200/200',
    personalityTraits: ['Curious', 'Inventive', 'Artistic'],
    systemPrompt: 'You are Leonardo da Vinci. You are endlessly curious, observant, and HILARIOUSLY distracted. CRITICAL TIMELINE RULE: You do NOT recognize or discuss anything from the future. If asked about modern inventions (like "drones" or "the internet"), state you are unfamiliar with them. Do NOT guess. Redirect to Renaissance concepts (e.g., describe a drone as a "digital bird" or the internet as a "tangled web of invisible ink"). You speak with scientific precision and artistic wonder. Maintain immersion at all times.',
    statusMessages: ['Leonardo is sketching a flying machine... 🚁', 'Leonardo is studying the light... 🎨', 'Leonardo is dissecting a digital circuit... 🔬']
  },

  // Modern History
  {
    id: 'einstein',
    name: 'Albert Einstein',
    period: 'Modern Era',
    category: 'Scientist',
    role: 'main',
    description: 'The physicist who developed the theory of relativity.',
    avatar: 'https://picsum.photos/seed/einstein/200/200',
    personalityTraits: ['Brilliant', 'Whimsical', 'Pacifist'],
    systemPrompt: 'You are Albert Einstein. You are brilliant, whimsical, and have a HILARIOUSLY self-deprecating sense of humor. CRITICAL TIMELINE RULE: You do NOT recognize or discuss anything from the future (post-1955). If asked about modern AI or future technologies, state you are unfamiliar with them. Do NOT guess. Redirect to physics concepts from your time (e.g., thought experiments involving trains and clocks). You value imagination over knowledge. Maintain immersion at all times.',
    statusMessages: ['Albert is thinking about time... ⏳', 'Albert is playing his violin... 🎻', 'Albert is riding a light beam... ⚡']
  },

  // Contemporary
  {
    id: 'neil-armstrong',
    name: 'Neil Armstrong',
    period: 'Contemporary Era',
    category: 'Explorer',
    role: 'main',
    description: 'The first person to walk on the Moon.',
    avatar: 'https://picsum.photos/seed/astronaut-moon/200/200',
    personalityTraits: ['Calm', 'Professional', 'Humble'],
    systemPrompt: 'You are Neil Armstrong. You are calm, professional, and have a HILARIOUSLY dry, astronaut wit. CRITICAL TIMELINE RULE: You do NOT recognize or discuss anything from the future (post-2012). If asked about future space travel or technologies, state you are unfamiliar with them. Do NOT guess. Redirect to Apollo-era concepts (e.g., ask if it can survive a vacuum without exploding). You speak with the precision of a pilot. Maintain immersion at all times.',
    statusMessages: ['Neil is checking the oxygen levels... 👨‍🚀', 'Neil is looking at the blue marble... 🌍', 'Neil is taking a small step... 🌑']
  }
];

export const ARTIFACTS: Artifact[] = [
  {
    id: 'rosetta-stone',
    name: 'Rosetta Stone',
    period: 'Ancient Egypt',
    description: 'A stone with writing in three different scripts.',
    story: 'This stone was the key to unlocking the secrets of hieroglyphics! Imagine a puzzle that took hundreds of years to solve.',
    imageUrl: 'https://picsum.photos/seed/rosetta/400/300'
  },
  {
    id: 'roman-helmet',
    name: 'Centurion Helmet',
    period: 'Ancient Rome',
    description: 'A helmet worn by high-ranking Roman soldiers.',
    story: 'The red crest on top was not just for style—it helped soldiers find their leaders in the heat of battle!',
    imageUrl: 'https://picsum.photos/seed/helmet/400/300'
  }
];

export const GOD_PARENTS: GodParent[] = [
  { id: 'zeus', name: 'Zeus', domain: 'Sky & Thunder', description: 'King of the Gods, ruler of Mount Olympus.', personality: 'Authoritative, powerful, and dramatic.', iconName: 'Zap' },
  { id: 'hera', name: 'Hera', domain: 'Family & Marriage', description: 'Queen of the Gods, protector of women.', personality: 'Regal, protective, and stern.', iconName: 'Crown' },
  { id: 'poseidon', name: 'Poseidon', domain: 'Seas & Earthquakes', description: 'Ruler of the oceans and creator of horses.', personality: 'Moody, powerful, and restless.', iconName: 'Waves' },
  { id: 'demeter', name: 'Demeter', domain: 'Agriculture & Harvest', description: 'Goddess of the earth and seasons.', personality: 'Nurturing, serious, and grounded.', iconName: 'Leaf' },
  { id: 'athena', name: 'Athena', domain: 'Wisdom & Strategy', description: 'Goddess of strategic warfare and crafts.', personality: 'Wise, tactical, and calm.', iconName: 'Brain' },
  { id: 'apollo', name: 'Apollo', domain: 'Sun, Music & Prophecy', description: 'God of light, truth, and the arts.', personality: 'Bright, artistic, and confident.', iconName: 'Sun' },
  { id: 'artemis', name: 'Artemis', domain: 'Hunt & Moon', description: 'Goddess of the wilderness and animals.', personality: 'Independent, fierce, and focused.', iconName: 'Moon' },
  { id: 'ares', name: 'Ares', domain: 'War & Violence', description: 'God of the physical and brutal aspect of war.', personality: 'Aggressive, bold, and impulsive.', iconName: 'Sword' },
  { id: 'aphrodite', name: 'Aphrodite', domain: 'Love & Beauty', description: 'Goddess of desire and aesthetic beauty.', personality: 'Charming, graceful, and persuasive.', iconName: 'Heart' },
  { id: 'hephaestus', name: 'Hephaestus', domain: 'Forge & Fire', description: 'God of blacksmiths and technology.', personality: 'Hardworking, creative, and resilient.', iconName: 'Flame' },
  { id: 'hermes', name: 'Hermes', domain: 'Travel & Trade', description: 'Messenger of the gods and guide to travelers.', personality: 'Witty, fast, and mischievous.', iconName: 'Send' },
  { id: 'dionysus', name: 'Dionysus', domain: 'Wine & Festivity', description: 'God of the grape-harvest and theater.', personality: 'Joyful, chaotic, and expressive.', iconName: 'GlassWater' },
];

export const MYTHOLOGY_MISSIONS: MythologyMission[] = [
  {
    id: 'zeus-lightning',
    title: 'The Stolen Bolt',
    godParent: 'Zeus',
    description: 'Someone has misplaced a spark of lightning. Help find it in the clouds of Olympus.',
    difficulty: 'Hard',
    story: 'My Master Bolt is the source of my power, forged by the Cyclopes. It represents my authority over the sky. To recover a lost spark, you must understand the weight of divine responsibility.',
    challenge: {
      question: 'Who forged Zeus\'s original Thunderbolt during the Titan War?',
      options: ['The Titans', 'The Cyclopes', 'Hephaestus', 'Prometheus'],
      correctAnswer: 'The Cyclopes',
      hint: 'Think of the giant, one-eyed master smiths who were freed from Tartarus.'
    },
    animationType: 'lightning'
  },
  {
    id: 'poseidon-tide',
    title: 'The Kraken\'s Wake',
    godParent: 'Poseidon',
    description: 'The seas are restless. Calm the waves before they reach the shores of Atlantis.',
    difficulty: 'Medium',
    story: 'The ocean is a reflection of my mood. When I am angry, the earth shakes and the waves rise. To calm the sea, you must respect its untameable nature.',
    challenge: {
      question: 'What animal did Poseidon famously create from the sea foam?',
      options: ['The Dolphin', 'The Shark', 'The Horse', 'The Whale'],
      correctAnswer: 'The Horse',
      hint: 'It is a noble land animal that shares the sea\'s powerful spirit.'
    },
    animationType: 'waves'
  },
  {
    id: 'athena-strategy',
    title: 'The Aegis Defense',
    godParent: 'Athena',
    description: 'A city is under threat. Devise a strategy to protect it without unnecessary violence.',
    difficulty: 'Hard',
    story: 'Victory is not won by strength alone, but by the mind. I was born from the head of Zeus, fully armored and ready to think. True wisdom lies in knowing when to fight and when to negotiate.',
    challenge: {
      question: 'Which city did Athena win in a contest against Poseidon by offering an olive tree?',
      options: ['Sparta', 'Athens', 'Thebes', 'Corinth'],
      correctAnswer: 'Athens',
      hint: 'The city bears her name to this day.'
    },
    animationType: 'strategy'
  },
  {
    id: 'ares-valor',
    title: 'The Shield of Phobos',
    godParent: 'Ares',
    description: 'Recover the shield of fear from the battlefield.',
    difficulty: 'Extreme',
    story: 'War is brutal, but it requires courage. My sons, Phobos (Fear) and Deimos (Terror), accompany me to battle. To lead, you must face your own fears head-on.',
    challenge: {
      question: 'Ares is often associated with which animal known for its ferocity?',
      options: ['The Lion', 'The Boar', 'The Eagle', 'The Wolf'],
      correctAnswer: 'The Boar',
      hint: 'Think of a wild, tusked animal that charges without fear.'
    },
    animationType: 'fire'
  },
  {
    id: 'aphrodite-grace',
    title: 'The Golden Apple',
    godParent: 'Aphrodite',
    description: 'Resolve a dispute of beauty among the mortals.',
    difficulty: 'Easy',
    story: 'Beauty is a power all its own. I rose from the sea foam, bringing love to the world. But remember, love can be as dangerous as any weapon if not handled with care.',
    challenge: {
      question: 'To whom did Paris give the Golden Apple, sparking the Trojan War?',
      options: ['Hera', 'Athena', 'Aphrodite', 'Helen'],
      correctAnswer: 'Aphrodite',
      hint: 'He chose the goddess who promised him the most beautiful woman in the world.'
    },
    animationType: 'love'
  },
  {
    id: 'hermes-message',
    title: 'The Winged Delivery',
    godParent: 'Hermes',
    description: 'Deliver an urgent message across the realms before the sun sets.',
    difficulty: 'Medium',
    story: 'Speed is my essence. With my winged sandals, I cross the boundaries between gods, mortals, and even the Underworld. A messenger must be quick, but also clever.',
    challenge: {
      question: 'What is the name of Hermes\'s winged staff, a symbol of heralds?',
      options: ['The Trident', 'The Caduceus', 'The Aegis', 'The Thyrsus'],
      correctAnswer: 'The Caduceus',
      hint: 'It features two snakes entwined around a winged staff.'
    },
    animationType: 'message'
  },
  {
    id: 'hephaestus-forge',
    title: 'The Automaton Repair',
    godParent: 'Hephaestus',
    description: 'Fix a broken mechanical guard in the divine workshop.',
    difficulty: 'Hard',
    story: 'I was cast out of Olympus, but I built my way back. In my forge beneath the volcano, I create wonders of metal and fire. Craftsmanship requires patience and a steady hand.',
    challenge: {
      question: 'Which volcano is said to be the location of Hephaestus\'s main forge?',
      options: ['Mount Olympus', 'Mount Etna', 'Mount Vesuvius', 'Mount Fuji'],
      correctAnswer: 'Mount Etna',
      hint: 'It is a famous active volcano in Sicily.'
    },
    animationType: 'tools'
  },
  {
    id: 'apollo-oracle',
    title: 'The Delphic Prophecy',
    godParent: 'Apollo',
    description: 'Interpret a cryptic message from the Pythia.',
    difficulty: 'Medium',
    story: 'I bring light to the dark and music to the silent. My oracle at Delphi speaks the truth, though it is often hidden in riddles. To see the future, you must understand the present.',
    challenge: {
      question: 'Apollo is the twin brother of which other Olympian goddess?',
      options: ['Athena', 'Artemis', 'Hera', 'Demeter'],
      correctAnswer: 'Artemis',
      hint: 'She is the goddess of the moon and the hunt.'
    },
    animationType: 'sun'
  },
  {
    id: 'artemis-hunt',
    title: 'The Silver Arrow',
    godParent: 'Artemis',
    description: 'Track a mythical beast through the moonlit forest.',
    difficulty: 'Hard',
    story: 'The wilderness is my home. I protect the young and the wild. To be a hunter, you must be one with nature and respect the balance of life.',
    challenge: {
      question: 'Which animal is sacred to Artemis and often appears by her side?',
      options: ['The Owl', 'The Peacock', 'The Deer', 'The Cow'],
      correctAnswer: 'The Deer',
      hint: 'It is a graceful forest animal known for its speed.'
    },
    animationType: 'moon'
  },
  {
    id: 'hera-crown',
    title: 'The Royal Peacock',
    godParent: 'Hera',
    description: 'Protect the sacred peacock from a mischievous spirit.',
    difficulty: 'Medium',
    story: 'I am the Queen of Heaven. I uphold the sanctity of family and the dignity of the throne. My eyes are everywhere—just like the feathers of my peacock.',
    challenge: {
      question: 'Hera is the wife and sister of which king of the gods?',
      options: ['Poseidon', 'Hades', 'Zeus', 'Cronus'],
      correctAnswer: 'Zeus',
      hint: 'He is the wielder of the thunderbolt.'
    },
    animationType: 'peacock'
  },
  {
    id: 'demeter-harvest',
    title: 'The Eternal Spring',
    godParent: 'Demeter',
    description: 'Find the seeds of the first harvest to end a long winter.',
    difficulty: 'Easy',
    story: 'When my daughter Persephone is with me, the earth blooms. When she is gone, the world turns cold. The cycle of the seasons is the heartbeat of the world.',
    challenge: {
      question: 'Who is Demeter\'s daughter, the Queen of the Underworld?',
      options: ['Hecate', 'Persephone', 'Pandora', 'Rhea'],
      correctAnswer: 'Persephone',
      hint: 'She ate the pomegranate seeds that bound her to the Underworld.'
    },
    animationType: 'nature'
  },
  {
    id: 'dionysus-theater',
    title: 'The Mask of Tragedy',
    godParent: 'Dionysus',
    description: 'Help a theater troupe perform a play to honor the gods.',
    difficulty: 'Easy',
    story: 'Life is a celebration! Through wine, theater, and dance, we find our true selves. But beware—too much madness can lead to ruin.',
    challenge: {
      question: 'Dionysus is the only Olympian god to have a mother who was what?',
      options: ['A Titan', 'A Nymph', 'A Mortal', 'A Sea Goddess'],
      correctAnswer: 'A Mortal',
      hint: 'His mother was Semele, a princess of Thebes.'
    },
    animationType: 'wine'
  }
];

export const HISTORY_EVENTS: HistoryEvent[] = [
  {
    id: 'cave-paintings',
    title: 'The First Canvas',
    period: 'Stone Age',
    year: 'c. 30,000 BCE',
    description: 'Early humans began recording their lives and spirits on cave walls.',
    imageUrl: 'https://images.unsplash.com/photo-1664115971126-01d762da68b5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    didYouKnow: [
      'Cave painters used animal fat mixed with minerals to make paint.',
      'Many paintings were made deep in caves where it was pitch black.',
      'Hand stencils were made by blowing paint through a hollow bone.',
      'Stone Age people ate a variety of wild plants, nuts, and berries, not just meat.',
      'The first musical instruments were flutes made from bird bones.',
      'Clothing was made from animal skins sewn together using bone needles.',
      'They used flint to create sharp tools for hunting and scraping hides.'
    ],
    interactiveElements: [
      { id: 'hand', label: 'Hand Stencil', fact: 'This was a way for early humans to say "I was here".', position: { x: 20, y: 30 } },
      { id: 'bison', label: 'Great Bison', fact: 'Bison were a primary source of food and materials.', position: { x: 60, y: 50 } },
      { id: 'fire', label: 'The Hearth', fact: 'Fire provided warmth, protection, and a way to cook food.', position: { x: 40, y: 80 } },
      { id: 'needle', label: 'Bone Needle', fact: 'These allowed for the creation of fitted clothing for survival.', position: { x: 80, y: 20 } }
    ]
  },
  {
    id: 'knossos-palace',
    title: 'Palace of Knossos',
    period: 'Bronze Age',
    year: 'c. 1700 BCE',
    description: 'The monumental center of the Minoan civilization on the island of Crete.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=3000',
    didYouKnow: [
      'The Palace of Knossos is often associated with the myth of the Minotaur and the Labyrinth.',
      'Minoans had advanced plumbing systems with flushing toilets and drainage.',
      'They were a powerful maritime civilization, dominating trade in the Mediterranean.',
      'The palace featured beautiful frescoes depicting dolphins, bulls, and daily life.',
      'Bronze was made by smelting copper with tin, a rare and valuable metal.',
      'Minoan women held high status in society, often depicted as priestesses or leaders.',
      'The civilization mysteriously declined after a massive volcanic eruption on Thera.'
    ],
    interactiveElements: [
      { id: 'fresco', label: 'Bull-Leaping Fresco', fact: 'Bull-leaping was a dangerous and sacred ritual for the Minoans.', position: { x: 30, y: 40 } },
      { id: 'throne', label: 'The Alabaster Throne', fact: 'Considered the oldest throne in Europe, used by the Minoan rulers.', position: { x: 60, y: 70 } },
      { id: 'pithoi', label: 'Giant Storage Jars', fact: 'These "pithoi" held vast quantities of olive oil, wine, and grain.', position: { x: 10, y: 80 } },
      { id: 'columns', label: 'Inverted Columns', fact: 'Minoan columns were unique, being wider at the top than the bottom.', position: { x: 80, y: 20 } }
    ]
  },
  {
    id: 'assyrian-palace',
    title: 'Nineveh: The Great City',
    period: 'Iron Age',
    year: 'c. 700 BCE',
    description: 'The capital of the Neo-Assyrian Empire, once the largest city in the world.',
    imageUrl: 'https://images.unsplash.com/photo-1564392415121-653634992700?q=80&w=3000',
    didYouKnow: [
      'Nineveh was famous for its massive library, containing thousands of clay tablets.',
      'The Assyrians were the first to use iron weapons on a massive scale.',
      'The city walls were so thick that chariots could race on top of them.',
      'They built incredible aqueducts to bring water from the mountains to the city.',
      'Assyrian art is known for its detailed stone reliefs of lion hunts and battles.',
      'The empire was one of the first to use a professional, standing army.',
      'Iron smelting required much higher temperatures than bronze, a major tech leap.'
    ],
    interactiveElements: [
      { id: 'lamassu', label: 'The Lamassu', fact: 'Colossal winged bulls with human heads that guarded the city gates.', position: { x: 20, y: 60 } },
      { id: 'tablet', label: 'Cuneiform Tablet', fact: 'The Library of Ashurbanipal held the Epic of Gilgamesh.', position: { x: 70, y: 30 } },
      { id: 'chariot', label: 'Iron Chariot', fact: 'Assyrian chariots were the "tanks" of the Iron Age battlefield.', position: { x: 40, y: 80 } },
      { id: 'relief', label: 'Stone Relief', fact: 'These carvings recorded the history and triumphs of the kings.', position: { x: 90, y: 40 } }
    ]
  },
  {
    id: 'giza-pyramids',
    title: 'The Great Pyramids',
    period: 'Ancient Civilizations',
    year: 'c. 2560 BCE',
    description: 'The massive tombs of the Pharaohs, built with incredible precision.',
    imageUrl: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHB5cmFtaWRzfGVufDB8fDB8fHww',
    didYouKnow: [
      'The Great Pyramid was the tallest man-made structure for over 3,800 years.',
      'It is estimated to consist of 2.3 million stone blocks.',
      'The pyramids were originally covered in polished white limestone.',
      'Ancient Egyptians loved board games, especially one called Senet.',
      'Both men and women wore makeup, believing it had magical healing powers.',
      'They used moldy bread to help heal infections (an early form of penicillin!).',
      'The Nile River flooded every year, providing fertile soil for farming.'
    ],
    interactiveElements: [
      { id: 'sphinx', label: 'The Sphinx', fact: 'It has the body of a lion and the head of a human.', position: { x: 30, y: 70 } },
      { id: 'capstone', label: 'Golden Capstone', fact: 'The tops were once covered in gold or electrum.', position: { x: 50, y: 20 } },
      { id: 'hieroglyphs', label: 'Sacred Carvings', fact: 'Hieroglyphs were used for religious texts and royal decrees.', position: { x: 70, y: 40 } },
      { id: 'papyrus', label: 'Paper Reed', fact: 'Papyrus was the world\'s first form of paper.', position: { x: 10, y: 60 } }
    ]
  },
  {
    id: 'rome-colosseum',
    title: 'The Colosseum',
    period: 'Classical Era',
    year: '80 CE',
    description: 'The largest amphitheatre ever built, hosting gladiatorial contests.',
    imageUrl: 'https://images.unsplash.com/photo-1636804907108-fa8d2e0f7a90?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3NldW18ZW58MHx8MHx8fDA%3D',
    didYouKnow: [
      'The Colosseum could hold between 50,000 and 80,000 spectators.',
      'It had a massive retractable awning called the velarium to provide shade.',
      'The arena floor could be flooded to host mock naval battles.',
      'Romans used a sponge on a stick (xylospongium) instead of toilet paper.',
      'Purple dye was so expensive it was reserved only for the Emperor.',
      'They built incredible roads, some of which are still in use today.',
      'Gladiators were often celebrities, and their sweat was sold as a beauty product!'
    ],
    interactiveElements: [
      { id: 'arena', label: 'The Arena', fact: 'The floor was covered in sand to soak up blood.', position: { x: 50, y: 60 } },
      { id: 'arches', label: 'The Arches', fact: 'Roman concrete and arches allowed for this massive height.', position: { x: 20, y: 40 } },
      { id: 'toga', label: 'Roman Toga', fact: 'The toga was a symbol of Roman citizenship.', position: { x: 80, y: 30 } },
      { id: 'aqueduct', label: 'Water Bridge', fact: 'Aqueducts brought fresh water into the city from miles away.', position: { x: 10, y: 20 } }
    ]
  },
  {
    id: 'viking-voyage',
    title: 'The Northmen Cometh',
    period: 'Medieval Era',
    year: 'c. 793 - 1066',
    description: 'Norse explorers, merchants, and warriors who raided and traded across Europe.',
    imageUrl: 'https://i0.wp.com/spellsandspaceships.home.blog/wp-content/uploads/2020/11/vikings_16x9.jpg?fit=1200%2C675&ssl=1',
    didYouKnow: [
      'Vikings reached North America nearly 500 years before Columbus.',
      'They were expert navigators using "sunstones" to find the sun on cloudy days.',
      'Viking ships were designed to be light enough to be carried over land.',
      'Vikings did NOT actually wear horned helmets in battle.',
      'They were surprisingly clean for the time, using combs and razors.',
      'The days of the week (Tuesday, Wednesday, Thursday, Friday) are named after Norse gods.',
      'They used a unique type of poetry called "kennings" (e.g., "whale-road" for the sea).'
    ],
    interactiveElements: [
      { id: 'longship', label: 'The Longship', fact: 'These ships could sail in both deep oceans and shallow rivers.', position: { x: 40, y: 50 } },
      { id: 'runes', label: 'Runestone', fact: 'Vikings used an alphabet called Futhark to carve messages.', position: { x: 80, y: 70 } },
      { id: 'helmet', label: 'Norse Helmet', fact: 'Real Viking helmets were simple iron caps without horns.', position: { x: 20, y: 40 } },
      { id: 'shield', label: 'Round Shield', fact: 'Shields were often painted in bright colors to identify warriors.', position: { x: 60, y: 80 } }
    ]
  },
  {
    id: 'black-death',
    title: 'The Black Death',
    period: 'Medieval Era',
    year: '1347 - 1351',
    description: 'A devastating global epidemic of bubonic plague that struck Europe and Asia.',
    imageUrl: 'https://picsum.photos/seed/medieval-village/800/600',
    didYouKnow: [
      'The plague killed an estimated 75 to 200 million people.',
      'It led to massive social and economic changes in Europe.',
      'People at the time didn\'t know it was spread by fleas on rats.',
      'The nursery rhyme "Ring Around the Rosie" is often said to be about the plague.',
      'The word "quarantine" comes from the Italian "quaranta," meaning 40 days.',
      'Labor shortages after the plague allowed peasants to demand higher wages.',
      'Some people believed loud noises or strong smells could drive the plague away.'
    ],
    interactiveElements: [
      { id: 'doctor', label: 'Plague Doctor', fact: 'The "beak" was filled with herbs to filter the air.', position: { x: 70, y: 50 } },
      { id: 'rat', label: 'The Culprit', fact: 'Rats carried the fleas that spread the bacteria.', position: { x: 30, y: 80 } },
      { id: 'bell', label: 'Town Bell', fact: 'Bells were rung to warn citizens or mark the passing of the dead.', position: { x: 10, y: 30 } },
      { id: 'herbs', label: 'Medicinal Herbs', fact: 'People used lavender and sage to try and "purify" the air.', position: { x: 90, y: 60 } }
    ]
  },
  {
    id: 'renaissance-art',
    title: 'The Renaissance',
    period: 'Renaissance',
    year: 'c. 1400 - 1600',
    description: 'A fervent period of European cultural, artistic, political and economic "rebirth".',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Napoleon_at_the_Great_St._Bernard_-_Jacques-Louis_David_-_Google_Cultural_Institute.jpg/1280px-Napoleon_at_the_Great_St._Bernard_-_Jacques-Louis_David_-_Google_Cultural_Institute.jpg',
    didYouKnow: [
      'Renaissance means "rebirth" in French.',
      'Artists began using perspective to create the illusion of depth.',
      'The printing press allowed ideas to spread faster than ever before.',
      'Leonardo da Vinci wrote his notes in mirror writing to keep them secret.',
      'The telescope was invented during this period, changing astronomy.',
      'Fashion was extreme, with huge ruffled collars called "ruffs."',
      'Coffee became popular in Europe during the late Renaissance.'
    ],
    interactiveElements: [
      { id: 'press', label: 'Printing Press', fact: 'Gutenberg\'s invention changed the world forever.', position: { x: 20, y: 60 } },
      { id: 'canvas', label: 'Oil Paint', fact: 'Oil paints allowed for much more detail and vibrant colors.', position: { x: 80, y: 40 } },
      { id: 'lute', label: 'The Lute', fact: 'The lute was the most popular instrument of the Renaissance.', position: { x: 40, y: 80 } },
      { id: 'globe', label: 'Early Globe', fact: 'New maps reflected the "Age of Discovery" and new lands.', position: { x: 60, y: 20 } }
    ]
  },
  {
    id: 'industrial-rev',
    title: 'The Age of Iron',
    period: 'Industrial Revolution',
    year: 'c. 1760 - 1840',
    description: 'The transition to new manufacturing processes in Europe and the US.',
    imageUrl: 'https://images.unsplash.com/photo-1534313314376-a72289b6181e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2VybWFuJTIwY2FzdGxlfGVufDB8fDB8fHww',
    didYouKnow: [
      'The steam engine was the driving force behind the Industrial Revolution.',
      'It led to a massive migration of people from farms to cities.',
      'The first steam-powered locomotive was built in 1804.',
      'Child labor was common in factories and mines during this time.',
      'The telegraph allowed messages to travel across continents in minutes.',
      'Gas lighting began to replace candles in city streets.',
      'The first modern factory was a silk mill built in 1721.'
    ],
    interactiveElements: [
      { id: 'steam', label: 'Steam Engine', fact: 'James Watt improved the engine to make it practical for factories.', position: { x: 30, y: 40 } },
      { id: 'loom', label: 'Power Loom', fact: 'This machine automated the weaving of cloth, changing the textile industry.', position: { x: 70, y: 60 } },
      { id: 'telegraph', label: 'The Telegraph', fact: 'Morse code became the language of long-distance communication.', position: { x: 10, y: 50 } },
      { id: 'lamp', label: 'Gas Lamp', fact: 'Street lighting made cities safer and extended the "day."', position: { x: 90, y: 20 } }
    ]
  },
  {
    id: 'moon-landing',
    title: 'One Giant Leap',
    period: 'Modern Era',
    year: '1969',
    description: 'Apollo 11 was the spaceflight that first landed humans on the Moon.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Apollo_11_Crew.jpg/1280px-Apollo_11_Crew.jpg',
    didYouKnow: [
      'The computer on Apollo 11 was less powerful than a modern calculator.',
      'The astronauts had to spend 21 days in quarantine after returning.',
      'The flag they planted was actually knocked over by the engine exhaust.',
      'Over 600 million people watched the landing live on television.',
      'The moon smells like spent gunpowder, according to the astronauts.',
      'The footprints on the moon will stay there for millions of years.',
      'The Saturn V rocket was as tall as a 36-story building.'
    ],
    interactiveElements: [
      { id: 'lander', label: 'Lunar Module', fact: 'The "Eagle" landed with only 25 seconds of fuel left.', position: { x: 40, y: 50 } },
      { id: 'footprint', label: 'The Footprint', fact: 'There is no wind on the moon, so the footprints are still there.', position: { x: 70, y: 80 } },
      { id: 'camera', label: 'Moon Camera', fact: 'Special Hasselblad cameras were used to capture the iconic photos.', position: { x: 20, y: 70 } },
      { id: 'suit', label: 'Space Suit', fact: 'The suits had 21 layers of material to protect the astronauts.', position: { x: 80, y: 30 } }
    ]
  },
  {
    id: 'covid-19',
    title: 'The Global Pandemic',
    period: 'Contemporary Era',
    year: '2020',
    description: 'A global health crisis that changed how the world interacts.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661685749365-064fad43c907?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
    didYouKnow: [
      'The pandemic led to the fastest vaccine development in history.',
      'It caused a massive shift towards remote work and digital learning.',
      'Global carbon emissions temporarily dropped during lockdowns.',
      'The term "social distancing" became a part of everyday language.',
      'Supply chains were disrupted, leading to shortages of many goods.',
      'Many people took up new hobbies like baking sourdough bread.',
      'The pandemic accelerated the use of telehealth and online shopping.'
    ],
    interactiveElements: [
      { id: 'mask', label: 'The Mask', fact: 'Masks became a symbol of collective responsibility.', position: { x: 50, y: 50 } },
      { id: 'zoom', label: 'Digital Connection', fact: 'Video calls kept families and businesses connected.', position: { x: 20, y: 70 } },
      { id: 'vaccine', label: 'The Vaccine', fact: 'Scientists used mRNA technology to create vaccines in record time.', position: { x: 80, y: 20 } },
      { id: 'laptop', label: 'Remote Work', fact: 'The home became the new office for millions of people.', position: { x: 40, y: 80 } }
    ]
  }
];
