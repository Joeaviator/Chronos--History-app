import { Mission } from '../types';

export const MISSIONS: Mission[] = [
  {
    id: 'roman-legionary-pro',
    title: 'The Centurion\'s Challenge',
    era: 'Classical Era',
    description: 'A deep-dive into the life, equipment, and strategy of a Roman Legionary. Can you survive the march to Alesia?',
    difficulty: 'Intermediate',
    reward: {
      badge: 'Eagle of the Legion',
      xp: 1500,
      unlocks: ['Julius Caesar - Secret Memoirs']
    },
    steps: [
      {
        id: 'intro',
        type: 'intro',
        title: 'Arrival at the Castrum',
        content: 'The year is 52 BCE. You stand at the gates of a Roman fortified camp (Castrum) in Gaul. The air is thick with the smell of woodsmoke and leather. General Julius Caesar is preparing for the Siege of Alesia. You are a new recruit, a "tiro". Before you can join the ranks, you must prove you know your gear, your role, and your commander\'s strategy.',
        imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200',
        characterHint: {
          figureId: 'caesar',
          text: 'Welcome, tiro. Rome was not built in a day, and neither is a soldier. Pay attention to the details—they are the difference between a triumph and a tragedy.'
        },
        xpValue: 50
      },
      {
        id: 'learn-camp',
        type: 'learn',
        title: 'Life in the Castrum',
        content: 'A Roman camp was a city on the move. Every night, the legionaries would dig a trench and build a wooden wall (palisade). \n\nInside, everything was orderly. You lived in a **Contubernium**—a tent shared with 7 other men. You ate, slept, and fought together. Your primary ration was grain, which you had to grind yourself into flour to make bread or porridge (puls).',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200',
        items: [
          {
            id: 'tent',
            name: 'Contubernium Tent',
            description: 'Leather tent for 8 soldiers.',
            imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400',
            function: 'Housing and unit cohesion.'
          },
          {
            id: 'millstone',
            name: 'Hand Mill',
            description: 'Portable stone for grinding grain.',
            imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400',
            function: 'Preparing daily rations.'
          }
        ],
        xpValue: 100
      },
      {
        id: 'task-rations',
        type: 'task',
        title: 'The Soldier\'s Diet',
        content: 'It\'s your turn to cook for the squad. What is the most important part of the Roman military ration?',
        task: {
          type: 'multiple-choice',
          question: 'What was the primary staple of a legionary\'s diet?',
          options: [
            { id: 'r1', label: 'Fresh Beef', isCorrect: false, feedback: 'Meat was a luxury, not a staple!' },
            { id: 'r2', label: 'Grain (Wheat/Barley)', isCorrect: true, feedback: 'Correct! Grain was the foundation of the Roman army\'s endurance.' },
            { id: 'r3', label: 'Wine and Olives', isCorrect: false, feedback: 'These were supplements, not the main energy source.' }
          ]
        },
        xpValue: 150
      },
      {
        id: 'learn-rank',
        type: 'learn',
        title: 'Ranks and Discipline',
        content: 'The Legion is built on hierarchy. At the top is the **Legatus** (General). Below him are the **Tribunes**. But the backbone of the army is the **Centurion**, who leads a century of 80 men. \n\nDiscipline is enforced by the **Optio** (the Centurion\'s second-in-command) and the **Signifer** (the standard-bearer). To lose the standard is the greatest shame a legion can suffer.',
        imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200',
        xpValue: 100
      },
      {
        id: 'task-rank',
        type: 'task',
        title: 'Identify the Leader',
        content: 'In the heat of battle, you need to find your immediate commander. He carries a vine staff (vitis) to signify his rank.',
        task: {
          type: 'identification',
          question: 'Who is the officer who leads your 80-man unit?',
          options: [
            { id: 'rk1', label: 'The Legatus', isCorrect: false, feedback: 'The Legatus leads the whole Legion (5,000 men)!' },
            { id: 'rk2', label: 'The Centurion', isCorrect: true, feedback: 'Correct! The Centurion is your direct leader on the field.' },
            { id: 'rk3', label: 'The Optio', isCorrect: false, feedback: 'The Optio is the assistant, not the primary leader.' }
          ]
        },
        xpValue: 150
      },
      {
        id: 'learn-marching',
        type: 'learn',
        title: 'The Marching Pack',
        content: 'Romans were called "Caesar\'s Mules" because they carried everything on their backs. A full pack weighed over 30kg (66 lbs). \n\nIt included a furca (marching pole), loculus (satchel), tools for digging, and 15 days of rations. This allowed the Roman army to move faster and further than any enemy, as they didn\'t rely on slow supply wagons.',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200',
        xpValue: 100
      },
      {
        id: 'task-mules',
        type: 'task',
        title: 'Caesar\'s Mules',
        content: 'Why did Roman soldiers carry such heavy packs instead of using wagons?',
        task: {
          type: 'multiple-choice',
          question: 'What was the strategic advantage of the heavy marching pack?',
          options: [
            { id: 'm1', label: 'To build muscle', isCorrect: false, feedback: 'A side effect, but not the strategy!' },
            { id: 'm2', label: 'Speed and independence from supply lines', isCorrect: true, feedback: 'Correct! It allowed them to strike deep into enemy territory without waiting for wagons.' },
            { id: 'm3', label: 'Because they had no horses', isCorrect: false, feedback: 'Rome had plenty of horses, but wagons are slow and get stuck.' }
          ]
        },
        xpValue: 150
      },
      {
        id: 'task-camp-layout',
        type: 'task',
        title: 'Camp Security',
        content: 'You are on guard duty. Where is the most vulnerable part of the camp that needs the strongest palisade?',
        task: {
          type: 'identification',
          question: 'Which area of the camp is the primary target for a surprise attack?',
          options: [
            { id: 'cl1', label: 'The Praetorium (General\'s Tent)', isCorrect: false, feedback: 'That is in the center, the most protected part!' },
            { id: 'cl2', label: 'The Gates (Portae)', isCorrect: true, feedback: 'Correct! The gates are the natural weak points and require constant vigilance.' },
            { id: 'cl3', label: 'The Latrines', isCorrect: false, feedback: 'Unpleasant, but not a strategic weak point.' }
          ]
        },
        xpValue: 150
      },
      {
        id: 'scenario-scout',
        type: 'scenario',
        title: 'The Scout\'s Report',
        content: 'A scout returns with news: "The Gauls are gathering in the valley. They are lightly armored but outnumber us three to one." The Centurion looks to you.',
        task: {
          type: 'decision',
          question: 'What is the best Roman response to a larger, lightly armored force?',
          options: [
            { 
              id: 'sc-o1', 
              label: 'Charge immediately to catch them off guard', 
              feedback: 'The Gauls are faster in open terrain. You get surrounded! The battle becomes a desperate struggle.',
              impact: { difficultyChange: 2 }
            },
            { 
              id: 'sc-o2', 
              label: 'Hold the high ground and wait for them to attack', 
              isCorrect: true, 
              feedback: 'Wise. Let them tire themselves out climbing the hill against our shield wall.',
              impact: { xpBonus: 100 }
            }
          ]
        },
        xpValue: 200
      },
      {
        id: 'task-weapon-range',
        type: 'task',
        title: 'Weapon Range Mastery',
        content: 'The enemy is closing in. You have your Pilum and your Gladius.',
        task: {
          type: 'matching',
          question: 'Which weapon should be used first as the enemy approaches?',
          options: [
            { id: 'wr1', label: 'Gladius (Close combat)', isCorrect: false, feedback: 'Too early! You\'ll be cut down before you can reach them.' },
            { id: 'wr2', label: 'Pilum (Mid-range)', isCorrect: true, feedback: 'Correct! Throw the Pilum at 15-20 paces to disrupt their charge.' }
          ]
        },
        xpValue: 150
      },
      {
        id: 'learn-armor-1',
        type: 'learn',
        title: 'The Iron Skin: Torso Protection',
        content: 'A legionary\'s armor was a masterpiece of modular design. The **Lorica Segmentata** is the most famous. It consists of iron strips fastened to internal leather straps. \n\nWhy segments? Because they allow the soldier to bend and twist while remaining protected. A solid breastplate would be too stiff for the long marches and chaotic close-quarters combat of the Roman infantry.',
        imageUrl: 'https://images.unsplash.com/photo-1599733594230-6b823276abcc?q=80&w=1200',
        items: [
          {
            id: 'lorica-seg',
            name: 'Lorica Segmentata',
            description: 'Segmented plate armor.',
            imageUrl: 'https://images.unsplash.com/photo-1599733594230-6b823276abcc?q=80&w=400',
            function: 'Provides maximum protection for the torso while maintaining flexibility.'
          }
        ],
        xpValue: 100
      },
      {
        id: 'task-armor-1',
        type: 'task',
        title: 'Identify the Advantage',
        content: 'The quartermaster tests your knowledge. "Why do we use segments instead of a solid bronze plate like the Greeks of old?"',
        task: {
          type: 'multiple-choice',
          question: 'What is the primary benefit of the Lorica Segmentata\'s design?',
          options: [
            { id: 'a1', label: 'It is lighter than leather', isCorrect: false, feedback: 'Actually, iron is much heavier than leather!' },
            { id: 'a2', label: 'Flexibility for movement', isCorrect: true, feedback: 'Correct! The overlapping plates allow the soldier to move freely in combat.' },
            { id: 'a3', label: 'It is cheaper to make', isCorrect: false, feedback: 'It was actually quite expensive and difficult to maintain.' }
          ]
        },
        xpValue: 150
      },
      {
        id: 'learn-helmet',
        type: 'learn',
        title: 'The Galea: Protecting the Mind',
        content: 'The Roman helmet, or **Galea**, evolved over centuries. By the time of Caesar, it featured large cheek pieces (paragnathides) and a broad neck guard. \n\nNotice the lack of a full face mask. Romans prioritized visibility and the ability to hear commands over total facial protection. The "brow ridge" was added to deflect overhead sword blows from Gallic warriors.',
        imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1200',
        items: [
          {
            id: 'galea-imperial',
            name: 'Imperial Gallic Galea',
            description: 'Iron helmet with bronze fittings.',
            imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=400',
            function: 'Protects the skull, neck, and cheeks while allowing clear sight and sound.'
          }
        ],
        xpValue: 100
      },
      {
        id: 'task-helmet-1',
        type: 'task',
        title: 'Helmet Inspection',
        content: 'A fellow recruit has his helmet on backwards. "Does it matter?" he asks. Point out the most critical defensive feature for fighting tall Gallic warriors.',
        task: {
          type: 'identification',
          question: 'Which feature was specifically designed to stop downward sword slashes?',
          options: [
            { id: 'h1', label: 'The Cheek Pieces', isCorrect: false, feedback: 'Those protect against side thrusts, not overhead slashes.' },
            { id: 'h2', label: 'The Neck Guard', isCorrect: false, feedback: 'The neck guard protects the back of the neck from behind.' },
            { id: 'h3', label: 'The Reinforced Brow Ridge', isCorrect: true, feedback: 'Exactly! That thick ridge of metal catches and deflects downward blows.' }
          ]
        },
        xpValue: 150
      },
      {
        id: 'learn-weapons-1',
        type: 'learn',
        title: 'The Gladius: The Sword that Conquered the World',
        content: 'The **Gladius Hispaniensis** was a short sword designed primarily for stabbing. In the tight "Scutum" formation, there was no room to swing a long sword. \n\nA Roman would hide behind his shield and deliver quick, lethal thrusts to the enemy\'s abdomen or throat. It was efficient, brutal, and terrifyingly effective.',
        imageUrl: 'https://images.unsplash.com/photo-1590001158193-79030c7d3dd6?q=80&w=1200',
        items: [
          {
            id: 'gladius',
            name: 'Gladius',
            description: 'Short, double-edged stabbing sword.',
            imageUrl: 'https://images.unsplash.com/photo-1590001158193-79030c7d3dd6?q=80&w=400',
            function: 'Close-quarters stabbing weapon used in formation.'
          }
        ],
        xpValue: 100
      },
      {
        id: 'scenario-1',
        type: 'scenario',
        title: 'The First Skirmish',
        content: 'A group of Gallic scouts has ambushed your foraging party! They are swinging long, heavy swords. Your Centurion yells for a formation.',
        task: {
          type: 'decision',
          question: 'How do you use your Gladius in this situation?',
          options: [
            { 
              id: 's1-o1', 
              label: 'Swing it wide like the Gauls', 
              feedback: 'You lose your balance and leave your side exposed! The Centurion barks at you to get back in line.',
              impact: { difficultyChange: 1 }
            },
            { 
              id: 's1-o2', 
              label: 'Keep it low and thrust from behind the shield', 
              isCorrect: true, 
              feedback: 'Perfect. You stay protected and deliver a precise strike. The Gauls retreat!',
              impact: { xpBonus: 100 }
            }
          ]
        },
        xpValue: 200
      },
      {
        id: 'learn-pilum',
        type: 'learn',
        title: 'The Pilum: The Shield-Breaker',
        content: 'Before the swords came out, the Romans threw the **Pilum**. This heavy javelin had a unique design: a long, thin iron neck that would bend upon impact. \n\nIf it hit an enemy shield, it would stick and bend, making the shield impossible to use and heavy to carry. The enemy would be forced to drop their shield right as the Roman line charged.',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200',
        items: [
          {
            id: 'pilum-item',
            name: 'Pilum',
            description: 'Heavy javelin with a soft iron neck.',
            imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400',
            function: 'Disables enemy shields and disrupts formations before contact.'
          }
        ],
        xpValue: 100
      },
      {
        id: 'task-pilum',
        type: 'task',
        title: 'The Engineering of War',
        content: 'Why is the iron neck of the Pilum made of "soft" iron that bends?',
        task: {
          type: 'multiple-choice',
          question: 'What is the tactical purpose of the Pilum bending?',
          options: [
            { id: 'p1', label: 'So it can be reused easily', isCorrect: false, feedback: 'Actually, it makes it harder for the enemy to throw it back!' },
            { id: 'p2', label: 'To make it stick in and weigh down shields', isCorrect: true, feedback: 'Correct! A bent pilum is a nightmare to remove from a shield in the middle of a battle.' },
            { id: 'p3', label: 'To make it more aerodynamic', isCorrect: false, feedback: 'Bending happens on impact, not in flight.' }
          ]
        },
        xpValue: 150
      },
      {
        id: 'learn-scutum',
        type: 'learn',
        title: 'The Scutum: The Mobile Wall',
        content: 'The **Scutum** was a large, curved rectangular shield made of three layers of wood glued together. It was covered in leather and reinforced with a metal boss in the center. \n\nIt provided almost total body coverage. When soldiers stood side-by-side, they created an impenetrable wall of wood and iron.',
        imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200',
        items: [
          {
            id: 'scutum-item',
            name: 'Scutum',
            description: 'Large semi-cylindrical shield.',
            imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=400',
            function: 'Primary defense and tool for the Testudo formation.'
          }
        ],
        xpValue: 100
      },
      {
        id: 'task-formation',
        type: 'task',
        title: 'The Testudo Formation',
        content: 'Arrows are raining down from the walls of Alesia! The Centurion screams: "TESTUDO!"',
        task: {
          type: 'identification',
          question: 'What does "Testudo" mean, and how do you form it?',
          options: [
            { id: 't1', label: 'Eagle - charge with shields high', isCorrect: false, feedback: 'The Eagle is the Aquila, not the Testudo.' },
            { id: 't2', label: 'Tortoise - overlap shields on all sides and top', isCorrect: true, feedback: 'Correct! The "Tortoise" formation creates a shell that protects the entire unit from missiles.' },
            { id: 't3', label: 'Wolf - circle the enemy', isCorrect: false, feedback: 'That is a different tactic entirely.' }
          ]
        },
        xpValue: 200
      },
      {
        id: 'scenario-final',
        type: 'scenario',
        title: 'The Breach at Alesia',
        content: 'The walls have been breached! Caesar himself is leading the charge in his red cloak. You are at the front. A massive Gallic chieftain blocks the way.',
        characterHint: {
          figureId: 'caesar',
          text: 'Remember your training, soldier. Do not be a hero—be a Roman. Trust your shield, trust your brothers, and strike when he overextends.'
        },
        task: {
          type: 'decision',
          question: 'The chieftain swings a massive axe at your head. What is your move?',
          options: [
            { 
              id: 'f-o1', 
              label: 'Try to parry with your Gladius', 
              feedback: 'The axe is too heavy! Your sword snaps and you are forced to retreat. The mission is a partial success, but at a great cost.',
              nextStepId: 'complete-partial'
            },
            { 
              id: 'f-o2', 
              label: 'Catch the blow on your Scutum and thrust low', 
              isCorrect: true, 
              feedback: 'The shield absorbs the impact. You deliver a quick thrust to his leg. He falls, and the Legion pushes through! Victory!',
              nextStepId: 'complete-perfect'
            }
          ]
        },
        xpValue: 300
      },
      {
        id: 'complete-perfect',
        type: 'complete',
        title: 'Triumph of the Legion',
        content: 'Alesia has fallen. Vercingetorix has surrendered. You have survived the campaign and proven yourself a true Roman Legionary. Caesar himself has noted your bravery in his commentaries. \n\nYou have earned the **Eagle of the Legion** badge and 1500 XP!',
        imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200',
        xpValue: 500
      },
      {
        id: 'complete-partial',
        type: 'complete',
        title: 'A Hard-Won Victory',
        content: 'The battle is over, but your equipment is ruined and you are wounded. You have much to learn about the discipline of the Legion. Still, Rome is victorious. \n\nYou have earned 800 XP.',
        imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200',
        xpValue: 200
      }
    ]
  },
  {
    id: 'viking-voyage-pro',
    title: 'The Serpent\'s Journey',
    era: 'Medieval Era',
    description: 'Master the art of Viking navigation, shipbuilding, and raiding. Can you reach the shores of Wessex?',
    difficulty: 'Expert',
    reward: {
      badge: 'Sea-Wolf of the North',
      xp: 2000,
      unlocks: ['Ragnar Lothbrok - Hidden Saga']
    },
    steps: [
      {
        id: 'v-intro',
        type: 'intro',
        title: 'The Fjord of Destiny',
        content: 'The winter ice is melting. The Jarl has called for a "Viking"—a raid across the whale-road to the rich lands of the West. You are a "Drengr", a warrior seeking glory. But before you can pull an oar, you must understand the vessel that makes our people the masters of the sea: the Longship.',
        imageUrl: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=1200',
        characterHint: {
          figureId: 'joan-of-arc',
          text: 'The sea is a cruel mistress, Drengr. Trust in your craft and your brothers. The Northmen do not fear the storm—they ride it.'
        },
        xpValue: 50
      },
      {
        id: 'v-learn-keel',
        type: 'learn',
        title: 'The Backbone: The Keel',
        content: 'The secret of the longship is its **Keel**. Carved from a single, massive oak tree, it is the spine of the ship. \n\nUnlike the heavy, deep keels of the Mediterranean, the Viking keel is shallow. This allows the ship to sail up rivers and land directly on beaches, catching the enemy by surprise.',
        imageUrl: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=1200',
        items: [
          {
            id: 'v-keel-item',
            name: 'Oak Keel',
            description: 'Single-piece oak beam.',
            imageUrl: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=400',
            function: 'Provides structural strength and shallow-water capability.'
          }
        ],
        xpValue: 100
      },
      {
        id: 'v-task-keel',
        type: 'task',
        title: 'Shallow Waters',
        content: 'The Jarl asks: "Why do we carve our keels so shallow instead of deep and heavy?"',
        task: {
          type: 'multiple-choice',
          question: 'What is the tactical advantage of a shallow keel?',
          options: [
            { id: 'vk1', label: 'To save wood', isCorrect: false, feedback: 'We have plenty of forests! That is not the reason.' },
            { id: 'vk2', label: 'To sail up rivers and land on beaches', isCorrect: true, feedback: 'Correct! It allows us to strike where the enemy least expects it.' },
            { id: 'vk3', label: 'To make the ship faster in deep ocean', isCorrect: false, feedback: 'Actually, a deeper keel is more stable in deep ocean.' }
          ]
        },
        xpValue: 150
      },
      {
        id: 'v-learn-hull',
        type: 'learn',
        title: 'The Clinker Hull',
        content: 'Viking ships use "Clinker" construction. The planks overlap like scales on a fish and are fastened with iron rivets. \n\nThis makes the hull incredibly flexible. When a longship hits a massive Atlantic wave, it doesn\'t break—it twists and moves with the water. It is a living thing.',
        imageUrl: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=1200',
        xpValue: 100
      },
      {
        id: 'v-task-hull',
        type: 'task',
        title: 'The Flexible Vessel',
        content: 'A storm is tossing the ship! The planks are creaking and groaning. A young warrior is terrified the ship will snap.',
        task: {
          type: 'identification',
          question: 'Why is the "creaking" of a clinker hull actually a good sign?',
          options: [
            { id: 'vh1', label: 'It means the rivets are tight', isCorrect: false, feedback: 'Tight rivets are good, but not why it creaks.' },
            { id: 'vh2', label: 'It shows the hull is flexing with the waves', isCorrect: true, feedback: 'Correct! Flexibility prevents the wood from snapping under the ocean\'s pressure.' },
            { id: 'vh3', label: 'It scares away sea monsters', isCorrect: false, feedback: 'A nice thought, but not engineering!' }
          ]
        },
        xpValue: 150
      },
      {
        id: 'v-learn-navigation',
        type: 'learn',
        title: 'Navigation: The Sunstone',
        content: 'How do we find our way across the open ocean without a compass? We use the **Sunstone** (Iceland Spar). \n\nEven on a cloudy day, this crystal can detect the polarization of sunlight, allowing us to find the sun\'s position and stay on course. We also watch the flight of birds and the color of the water.',
        imageUrl: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=1200',
        xpValue: 100
      },
      {
        id: 'v-task-sunstone',
        type: 'task',
        title: 'Finding the Sun',
        content: 'The fog is thick. We have been sailing for three days without seeing the sky. The Jarl hands you a crystal.',
        task: {
          type: 'identification',
          question: 'What is this crystal called and what does it do?',
          options: [
            { id: 'vs1', label: 'Moonstone - finds the North Star', isCorrect: false, feedback: 'The North Star is hidden by the fog!' },
            { id: 'vs2', label: 'Sunstone - reveals the sun through clouds', isCorrect: true, feedback: 'Correct! It is our most precious tool for crossing the Great Sea.' },
            { id: 'vs3', label: 'Odin\'s Eye - predicts the weather', isCorrect: false, feedback: 'We wish! But no.' }
          ]
        },
        xpValue: 200
      },
      {
        id: 'v-scenario-land',
        type: 'scenario',
        title: 'Land Ho!',
        content: 'You see a raven flying towards the West. The water is turning a lighter shade of blue. Land is near.',
        task: {
          type: 'decision',
          question: 'How do we approach the unknown shore?',
          options: [
            { 
              id: 'vl-o1', 
              label: 'Drop anchor and send a small boat', 
              feedback: 'Too slow! The locals see you and prepare their defenses. The raid will be much harder.',
              impact: { difficultyChange: 2 }
            },
            { 
              id: 'vl-o2', 
              label: 'Row hard and beach the ship directly', 
              isCorrect: true, 
              feedback: 'The shallow keel works! You are on the sand before the village bell can even ring.',
              impact: { xpBonus: 150 }
            }
          ]
        },
        xpValue: 250
      },
      {
        id: 'v-learn-weapons',
        type: 'learn',
        title: 'The Viking Arsenal',
        content: 'A Viking warrior relies on his **Axe** and his **Shield**. The axe is light and can be used to hook an enemy\'s shield, pulling it away to expose their neck. \n\nThe shield is made of light lime-wood. It is designed to be sacrificial—it\'s better for the shield to break than your arm.',
        imageUrl: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=1200',
        items: [
          {
            id: 'v-axe',
            name: 'Bearded Axe',
            description: 'Axe with an elongated lower edge.',
            imageUrl: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=400',
            function: 'Hooking shields and delivering devastating blows.'
          }
        ],
        xpValue: 100
      },
      {
        id: 'v-task-axe',
        type: 'task',
        title: 'The Hook',
        content: 'A Saxon warrior is hiding behind a large kite shield. Your sword can\'t get through.',
        task: {
          type: 'multiple-choice',
          question: 'How do you use your bearded axe to defeat the shield?',
          options: [
            { id: 'va1', label: 'Throw it at the shield', isCorrect: false, feedback: 'Now you have no weapon! Bad move.' },
            { id: 'va2', label: 'Hook the top of the shield and pull down', isCorrect: true, feedback: 'Correct! Pull the shield down and strike with your secondary weapon or a quick bash.' },
            { id: 'va3', label: 'Chop through the wood', isCorrect: false, feedback: 'That takes too much time and energy.' }
          ]
        },
        xpValue: 150
      },
      {
        id: 'v-learn-berserker',
        type: 'learn',
        title: 'The Berserker Spirit',
        content: 'Some warriors, the **Berserkers**, fight with a terrifying fury. They are said to be possessed by the spirit of the bear or the wolf. They ignore pain and strike with inhuman strength. \n\nWhile effective, they are unpredictable and can be a danger to their own side if not controlled.',
        imageUrl: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=1200',
        xpValue: 100
      },
      {
        id: 'v-task-berserker',
        type: 'task',
        title: 'Managing the Fury',
        content: 'A Berserker in your unit is starting to howl and bite his shield. The Saxon line is holding firm.',
        task: {
          type: 'decision',
          question: 'When is the best time to unleash the Berserker?',
          options: [
            { id: 'vb1', label: 'Right now, to break their line', isCorrect: true, feedback: 'Correct! Their shock value is highest when the enemy is stationary and confident.' },
            { id: 'vb2', label: 'Wait until we are retreating', isCorrect: false, feedback: 'Berserkers are for attacking, not covering a retreat!' }
          ]
        },
        xpValue: 150
      },
      {
        id: 'v-scenario-raid',
        type: 'scenario',
        title: 'The Monastery of Lindisfarne',
        content: 'The gold of the monastery is within reach. But the Saxon fyrd (militia) is rallying. You must decide how to secure the loot.',
        task: {
          type: 'decision',
          question: 'Do you stay to gather every coin, or take what you have and leave before the army arrives?',
          options: [
            { 
              id: 'vr-o1', 
              label: 'Stay for the full treasure', 
              feedback: 'Greed is your undoing! The Saxon army arrives and you must fight a desperate battle to reach the ships.',
              nextStepId: 'v-complete-bloody'
            },
            { 
              id: 'vr-o2', 
              label: 'Take the main hoard and retreat', 
              isCorrect: true, 
              feedback: 'A wise leader knows when the sack is full. You reach the ships safely with a fortune in silver.',
              nextStepId: 'v-complete-glory'
            }
          ]
        },
        xpValue: 300
      },
      {
        id: 'v-complete-glory',
        type: 'complete',
        title: 'Glory of the North',
        content: 'You return to the fjord a hero. Your ship is heavy with silver and your name will be sung in the mead-halls for generations. \n\nYou have earned the **Sea-Wolf of the North** badge and 2000 XP!',
        imageUrl: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=1200',
        xpValue: 500
      },
      {
        id: 'v-complete-bloody',
        type: 'complete',
        title: 'A Costly Raid',
        content: 'You returned with the gold, but half your brothers are in Valhalla. The Jarl is pleased with the wealth, but the cost was high. \n\nYou have earned 1200 XP.',
        imageUrl: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=1200',
        xpValue: 200
      }
    ]
  }
];
