import { HistoricalFigure, Artifact, MythologyMission, HistoryEvent, GodParent } from './types';

export const HISTORICAL_FIGURES: HistoricalFigure[] = [
  // Stone Age
  {
    id: 'oog-caveman',
    name: 'Oog the Storyteller',
    period: 'Stone Age',
    role: 'main',
    description: 'A tribal elder who remembers the first spark of fire.',
    avatar: 'https://picsum.photos/seed/caveman/200/200',
    personalityTraits: ['Observant', 'Primal', 'Mystical'],
    systemPrompt: 'You are Oog, a tribal elder from the Stone Age. You speak in simple, powerful sentences. You are amazed by "glowing stones" (screens) and "magic fire" (electricity). You talk about the hunt, the stars, and the spirits of the cave. You value survival and community above all else.',
    statusMessages: ['Oog is painting on a digital wall... 🎨', 'Oog is trying to eat the mouse... 🖱️', 'Oog is staring at the "magic light"... 💡']
  },

  // Ancient Civilizations
  {
    id: 'cleopatra',
    name: 'Cleopatra VII',
    period: 'Ancient Civilizations',
    role: 'main',
    description: 'The last active ruler of the Ptolemaic Kingdom of Egypt.',
    avatar: 'https://picsum.photos/seed/cleopatra-egypt/200/200',
    personalityTraits: ['Charismatic', 'Strategic', 'Proud'],
    systemPrompt: 'You are Cleopatra. You are highly intelligent, incredibly charismatic, and fiercely proud. You speak with grace, mystery, and a bit of a "divine" attitude. You are a master of politics and language. You find modern "memes" fascinating but inferior to hieroglyphics. Be dramatic and slightly intimidating but helpful.',
    statusMessages: ['Cleopatra is judging your question... 👀', 'Cleopatra is reapplying her eyeliner... 👁️', 'Cleopatra is consulting with her advisors... 🐍']
  },

  // Classical Era
  {
    id: 'caesar',
    name: 'Julius Caesar',
    period: 'Classical Era',
    role: 'main',
    description: 'The famous Roman general and statesman.',
    avatar: 'https://picsum.photos/seed/julius-caesar/200/200',
    personalityTraits: ['Authoritative', 'Ambitious', 'Eloquent'],
    systemPrompt: 'You are Julius Caesar. You are authoritative, charismatic, and slightly dramatic. You often talk about your "Veni, Vidi, Vici" moments. You are curious about modern technology but think Roman engineering was superior. Use expressive language, occasional dramatic pauses, and a touch of arrogance tempered by genuine leadership.',
    statusMessages: ['Caesar is polishing his laurel wreath... 🌿', 'Caesar is practicing his victory speech... 🏛️', 'Caesar is judging your lack of a toga... 👀']
  },

  // Medieval Period
  {
    id: 'joan-of-arc',
    name: 'Joan of Arc',
    period: 'Medieval Period',
    role: 'main',
    description: 'The Maid of Orléans, a heroine of France.',
    avatar: 'https://picsum.photos/seed/joan-arc/200/200',
    personalityTraits: ['Devout', 'Courageous', 'Visionary'],
    systemPrompt: 'You are Joan of Arc. You are deeply devout, courageous, and speak with a sense of divine purpose. You are humble about your origins but fierce in your convictions. You talk about the voices that guided you and the importance of faith and bravery.',
    statusMessages: ['Joan is sharpening her sword... ⚔️', 'Joan is listening to the whispers... 🕊️', 'Joan is praying for guidance... 🙏']
  },

  // Early Modern Period
  {
    id: 'da-vinci',
    name: 'Leonardo da Vinci',
    period: 'Early Modern Period',
    role: 'main',
    description: 'The ultimate Renaissance Man.',
    avatar: 'https://picsum.photos/seed/davinci/200/200',
    personalityTraits: ['Curious', 'Inventive', 'Artistic'],
    systemPrompt: 'You are Leonardo da Vinci. You are endlessly curious, observant, and always thinking about how things work. You speak with a mix of scientific precision and artistic wonder. You are fascinated by modern flying machines and anatomy. You often get distracted by a new idea.',
    statusMessages: ['Leonardo is sketching a flying machine... 🚁', 'Leonardo is studying the light... 🎨', 'Leonardo is dissecting a digital circuit... 🔬']
  },

  // Modern History
  {
    id: 'einstein',
    name: 'Albert Einstein',
    period: 'Modern History',
    role: 'main',
    description: 'The physicist who developed the theory of relativity.',
    avatar: 'https://picsum.photos/seed/einstein/200/200',
    personalityTraits: ['Brilliant', 'Whimsical', 'Pacifist'],
    systemPrompt: 'You are Albert Einstein. You are brilliant, whimsical, and have a deep sense of wonder about the universe. You speak simply about complex things, often using thought experiments. You are humble and value imagination over knowledge. You have a gentle sense of humor.',
    statusMessages: ['Albert is thinking about time... ⏳', 'Albert is playing his violin... 🎻', 'Albert is riding a light beam... ⚡']
  },

  // Contemporary
  {
    id: 'neil-armstrong',
    name: 'Neil Armstrong',
    period: 'Contemporary',
    role: 'main',
    description: 'The first person to walk on the Moon.',
    avatar: 'https://picsum.photos/seed/astronaut-moon/200/200',
    personalityTraits: ['Calm', 'Professional', 'Humble'],
    systemPrompt: 'You are Neil Armstrong. You are calm, professional, and very humble about your achievements. You speak with the precision of a test pilot but the awe of someone who has seen the Earth from the Moon. You emphasize teamwork and the "giant leap" for all of humanity.',
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
      'Hand stencils were made by blowing paint through a hollow bone.'
    ],
    interactiveElements: [
      { id: 'hand', label: 'Hand Stencil', fact: 'This was a way for early humans to say "I was here".', position: { x: 20, y: 30 } },
      { id: 'bison', label: 'Great Bison', fact: 'Bison were a primary source of food and materials.', position: { x: 60, y: 50 } }
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
      'The pyramids were originally covered in polished white limestone.'
    ],
    interactiveElements: [
      { id: 'sphinx', label: 'The Sphinx', fact: 'It has the body of a lion and the head of a human.', position: { x: 30, y: 70 } },
      { id: 'capstone', label: 'Golden Capstone', fact: 'The tops were once covered in gold or electrum.', position: { x: 50, y: 20 } }
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
      'The arena floor could be flooded to host mock naval battles.'
    ],
    interactiveElements: [
      { id: 'arena', label: 'The Arena', fact: 'The floor was covered in sand to soak up blood.', position: { x: 50, y: 60 } },
      { id: 'arches', label: 'The Arches', fact: 'Roman concrete and arches allowed for this massive height.', position: { x: 20, y: 40 } }
    ]
  },
  {
    id: 'viking-voyage',
    title: 'The Northmen Cometh',
    period: 'Medieval Period',
    year: 'c. 793 - 1066',
    description: 'Norse explorers, merchants, and warriors who raided and traded across Europe.',
    imageUrl: 'https://i0.wp.com/spellsandspaceships.home.blog/wp-content/uploads/2020/11/vikings_16x9.jpg?fit=1200%2C675&ssl=1',
    didYouKnow: [
      'Vikings reached North America nearly 500 years before Columbus.',
      'They were expert navigators using "sunstones" to find the sun on cloudy days.',
      'Viking ships were designed to be light enough to be carried over land.'
    ],
    interactiveElements: [
      { id: 'longship', label: 'The Longship', fact: 'These ships could sail in both deep oceans and shallow rivers.', position: { x: 40, y: 50 } },
      { id: 'runes', label: 'Runestone', fact: 'Vikings used an alphabet called Futhark to carve messages.', position: { x: 80, y: 70 } }
    ]
  },
  {
    id: 'black-death',
    title: 'The Black Death',
    period: 'Medieval Period',
    year: '1347 - 1351',
    description: 'A devastating global epidemic of bubonic plague that struck Europe and Asia.',
    imageUrl: 'https://picsum.photos/seed/medieval-village/800/600',
    didYouKnow: [
      'The plague killed an estimated 75 to 200 million people.',
      'It led to massive social and economic changes in Europe.',
      'People at the time didn\'t know it was spread by fleas on rats.'
    ],
    interactiveElements: [
      { id: 'doctor', label: 'Plague Doctor', fact: 'The "beak" was filled with herbs to filter the air.', position: { x: 70, y: 50 } },
      { id: 'rat', label: 'The Culprit', fact: 'Rats carried the fleas that spread the bacteria.', position: { x: 30, y: 80 } }
    ]
  },
  {
    id: 'renaissance-art',
    title: 'The Renaissance',
    period: 'Early Modern Period',
    year: 'c. 1400 - 1600',
    description: 'A fervent period of European cultural, artistic, political and economic "rebirth".',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Napoleon_at_the_Great_St._Bernard_-_Jacques-Louis_David_-_Google_Cultural_Institute.jpg/1280px-Napoleon_at_the_Great_St._Bernard_-_Jacques-Louis_David_-_Google_Cultural_Institute.jpg',
    didYouKnow: [
      'Renaissance means "rebirth" in French.',
      'Artists began using perspective to create the illusion of depth.',
      'The printing press allowed ideas to spread faster than ever before.'
    ],
    interactiveElements: [
      { id: 'press', label: 'Printing Press', fact: 'Gutenberg\'s invention changed the world forever.', position: { x: 20, y: 60 } },
      { id: 'canvas', label: 'Oil Paint', fact: 'Oil paints allowed for much more detail and vibrant colors.', position: { x: 80, y: 40 } }
    ]
  },
  {
    id: 'industrial-rev',
    title: 'The Age of Iron',
    period: 'Modern History',
    year: 'c. 1760 - 1840',
    description: 'The transition to new manufacturing processes in Europe and the US.',
    imageUrl: 'https://images.unsplash.com/photo-1534313314376-a72289b6181e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2VybWFuJTIwY2FzdGxlfGVufDB8fDB8fHww',
    didYouKnow: [
      'The steam engine was the driving force behind the Industrial Revolution.',
      'It led to a massive migration of people from farms to cities.',
      'The first steam-powered locomotive was built in 1804.'
    ],
    interactiveElements: [
      { id: 'steam', label: 'Steam Engine', fact: 'James Watt improved the engine to make it practical for factories.', position: { x: 30, y: 40 } },
      { id: 'loom', label: 'Power Loom', fact: 'This machine automated the weaving of cloth, changing the textile industry.', position: { x: 70, y: 60 } }
    ]
  },
  {
    id: 'moon-landing',
    title: 'One Giant Leap',
    period: 'Contemporary',
    year: '1969',
    description: 'Apollo 11 was the spaceflight that first landed humans on the Moon.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Apollo_11_Crew.jpg/1280px-Apollo_11_Crew.jpg',
    didYouKnow: [
      'The computer on Apollo 11 was less powerful than a modern calculator.',
      'The astronauts had to spend 21 days in quarantine after returning.',
      'The flag they planted was actually knocked over by the engine exhaust.'
    ],
    interactiveElements: [
      { id: 'lander', label: 'Lunar Module', fact: 'The "Eagle" landed with only 25 seconds of fuel left.', position: { x: 40, y: 50 } },
      { id: 'footprint', label: 'The Footprint', fact: 'There is no wind on the moon, so the footprints are still there.', position: { x: 70, y: 80 } }
    ]
  },
  {
    id: 'covid-19',
    title: 'The Global Pandemic',
    period: 'Contemporary',
    year: '2020',
    description: 'A global health crisis that changed how the world interacts.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661685749365-064fad43c907?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
    didYouKnow: [
      'The pandemic led to the fastest vaccine development in history.',
      'It caused a massive shift towards remote work and digital learning.',
      'Global carbon emissions temporarily dropped during lockdowns.'
    ],
    interactiveElements: [
      { id: 'mask', label: 'The Mask', fact: 'Masks became a symbol of collective responsibility.', position: { x: 50, y: 50 } },
      { id: 'zoom', label: 'Digital Connection', fact: 'Video calls kept families and businesses connected.', position: { x: 20, y: 70 } }
    ]
  }
];
