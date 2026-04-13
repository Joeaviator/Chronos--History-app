import { Mission } from '../types';

export const MISSIONS: Mission[] = [
  {
    id: 'roman-legionary',
    title: 'The Legionary\'s Kit',
    era: 'Classical Era',
    description: 'Master the equipment of a Roman soldier before the march to Gaul.',
    difficulty: 'Beginner',
    reward: 'Centurion\'s Seal',
    steps: [
      {
        id: 'intro',
        type: 'intro',
        title: 'Assisting the General',
        content: 'The year is 52 BC. General Julius Caesar is preparing his legions for the final push into Gaul. You have been assigned to the quartermaster\'s tent. A new recruit is arriving, and he needs to be properly equipped for the harsh campaign ahead. Without the right gear, a legionary is just a man with a stick. Master the tools of the trade, and you shall be rewarded.',
        imageUrl: 'https://picsum.photos/seed/roman-general/800/400'
      },
      {
        id: 'learn-armor',
        type: 'learn',
        title: 'The Iron Wall: Roman Armor',
        content: 'A Roman legionary\'s survival depended on his protection. The armor was not just for show; it was a marvel of engineering.\n\n**Lorica Segmentata**: This is the iconic plate armor. It consists of metal strips (segments) fastened to internal leather straps. This design allowed for incredible flexibility while providing superior protection against both slashes and thrusts.\n\n**Galea**: The helmet. Notice the large cheek pieces and the neck guard. These were designed to protect the most vulnerable parts of the head without obstructing the soldier\'s vision or hearing.\n\n**Scutum**: The large rectangular shield. It wasn\'t just a defensive tool; it was a weapon. Made of layered wood and covered in leather with a metal boss (umbo) in the center, it could be used to punch enemies or form the famous "Testudo" (tortoise) formation.',
        items: [
          {
            id: 'lorica',
            name: 'Lorica Segmentata',
            description: 'Segmented plate armor made of iron strips.',
            imageUrl: 'https://picsum.photos/seed/lorica/400/400',
            function: 'Protects the torso while allowing high mobility.'
          },
          {
            id: 'galea',
            name: 'Galea',
            description: 'The legionary\'s helmet with reinforced neck and cheek guards.',
            imageUrl: 'https://picsum.photos/seed/galea/400/400',
            function: 'Protects the head from overhead strikes and facial thrusts.'
          },
          {
            id: 'scutum',
            name: 'Scutum',
            description: 'A large, curved rectangular shield.',
            imageUrl: 'https://picsum.photos/seed/scutum/400/400',
            function: 'Provides full-body cover and is used for offensive punching.'
          }
        ]
      },
      {
        id: 'visual-check',
        type: 'visual',
        title: 'Inspection Time',
        content: 'Look closely at these items. A true legionary knows his equipment by touch and sight. The weight of the Lorica, the curve of the Scutum, and the fit of the Galea are what stand between Rome and its enemies.',
        imageUrl: 'https://picsum.photos/seed/roman-kit/800/400'
      },
      {
        id: 'task-armor',
        type: 'task',
        title: 'Equip the Recruit',
        content: 'The recruit is standing before you. He asks: "Which of these will protect my chest from a Gallic sword while letting me move quickly to strike?"',
        task: {
          question: 'Choose the correct armor piece for the recruit.',
          options: [
            { id: 'opt1', label: 'Galea', isCorrect: false, feedback: 'That protects the head, not the chest!' },
            { id: 'opt2', label: 'Lorica Segmentata', isCorrect: true, feedback: 'Correct! The segmented plates provide excellent torso protection and mobility.' },
            { id: 'opt3', label: 'Scutum', isCorrect: false, feedback: 'The shield is held in the hand, it is not worn on the chest.' }
          ]
        }
      },
      {
        id: 'complete',
        type: 'complete',
        title: 'Mission Accomplished',
        content: 'The recruit is now ready for battle. You have demonstrated a clear understanding of Roman defensive technology. General Caesar is impressed with your efficiency. You have earned the Centurion\'s Seal.',
        imageUrl: 'https://picsum.photos/seed/roman-victory/800/400'
      }
    ]
  },
  {
    id: 'viking-ship',
    title: 'The Serpent of the Seas',
    era: 'Medieval Era',
    description: 'Learn the secrets of the Viking Longship, the greatest vessel of the North.',
    difficulty: 'Intermediate',
    reward: 'Raven Banner',
    steps: [
      {
        id: 'intro',
        type: 'intro',
        title: 'The Shipyard at Roskilde',
        content: 'The Jarl has ordered a new longship for the summer raids. You are the apprentice to the Master Shipbuilder. To build a ship that can cross the Atlantic and sail up shallow rivers, you must understand every plank and nail. A mistake here means a watery grave for thirty brave warriors.',
        imageUrl: 'https://picsum.photos/seed/viking-shipyard/800/400'
      },
      {
        id: 'learn-ship',
        type: 'learn',
        title: 'Anatomy of a Longship',
        content: 'Viking ships were the pinnacle of naval technology in the 9th century. Their "clinker-built" design made them light, flexible, and fast.\n\n**The Keel**: The backbone of the ship. Carved from a single massive oak tree, it provides the structural strength to withstand heavy seas.\n\n**The Hull (Clinker-built)**: Unlike modern ships, Viking planks overlapped. This allowed the ship to flex with the waves rather than breaking against them. Iron rivets held the planks together.\n\n**The Prow**: The front of the ship, often carved with a dragon or serpent head to ward off evil spirits and terrify enemies.',
        items: [
          {
            id: 'keel',
            name: 'The Keel',
            description: 'The heavy longitudinal beam at the bottom of the hull.',
            imageUrl: 'https://picsum.photos/seed/viking-keel/400/400',
            function: 'Provides stability and structural integrity.'
          },
          {
            id: 'hull',
            name: 'Clinker Hull',
            description: 'Overlapping wooden planks fastened with iron rivets.',
            imageUrl: 'https://picsum.photos/seed/viking-hull/400/400',
            function: 'Allows the ship to flex and move gracefully through water.'
          },
          {
            id: 'prow',
            name: 'The Dragon Prow',
            description: 'The ornate, curved front post of the ship.',
            imageUrl: 'https://picsum.photos/seed/viking-prow/400/400',
            function: 'Symbolic protection and psychological warfare.'
          }
        ]
      },
      {
        id: 'task-ship',
        type: 'task',
        title: 'Structural Integrity',
        content: 'A massive storm is approaching. The Master Shipbuilder asks: "Which part of our vessel ensures it won\'t snap in half when the Great Midgard Serpent stirs the depths?"',
        task: {
          question: 'Identify the structural backbone of the longship.',
          options: [
            { id: 'opt1', label: 'The Prow', isCorrect: false, feedback: 'The prow is for show and spirit, not structural strength.' },
            { id: 'opt2', label: 'The Keel', isCorrect: true, feedback: 'Correct! The solid oak keel is the backbone that holds everything together.' },
            { id: 'opt3', label: 'The Mast', isCorrect: false, feedback: 'The mast holds the sail, not the ship\'s frame.' }
          ]
        }
      },
      {
        id: 'complete',
        type: 'complete',
        title: 'The Ship Sails!',
        content: 'The longship is launched! It sits perfectly in the water, ready for the open sea. You have mastered the basics of Norse naval engineering. The Jarl bestows upon you the Raven Banner.',
        imageUrl: 'https://picsum.photos/seed/viking-sailing/800/400'
      }
    ]
  }
];
