
import { Character, MovieScene } from './types';

export const CHARACTERS: Character[] = [
  {
    id: 'peter',
    name: 'Peter Parker',
    alias: 'The Original Spider-Man',
    description: 'The hero who started it all. Balancing a normal life with the weight of the city on his shoulders.',
    biography: 'Bitten by a radioactive spider during a high school field trip, Peter Parker gained the proportional strength and agility of an arachnid. After the tragic loss of his Uncle Ben, he learned that with great power comes great responsibility. Now a veteran hero, Peter mentors the next generation while defending NYC from iconic threats like the Green Goblin and Doc Ock.',
    missions: [
      { 
        title: 'The Goblin Menace', 
        description: 'Prevent Oscorp chemical theft.', 
        status: 'COMPLETED',
        location: 'Oscorp Tower, Midtown',
        dangerLevel: 8,
        tacticalData: 'Subject identified as Norman Osborn. High-yield explosives utilized. Structural damage to floors 40-42 minimized via web-bracing. Antidote successfully administered.'
      },
      { 
        title: 'Sinister Six Protocol', 
        description: 'Neutralize the jailbreak at The Raft.', 
        status: 'ACTIVE',
        location: 'The Raft Supermax Prison',
        dangerLevel: 10,
        tacticalData: 'Multiple level 4 threats detected. Priority targets: Electro and Rhino. Backup requested from Avengers Tower. Power grid compromise imminent.'
      },
      { 
        title: 'Identity Crisis', 
        description: 'Manage double-life balance metrics.', 
        status: 'PENDING',
        location: 'Queens, NYC',
        dangerLevel: 2,
        tacticalData: 'Daily bugle deadline at 18:00. Aunt May dinner at 19:30. Current stress levels: 84%. Suggested action: Immediate patrol reduction.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=800',
    color: 'from-blue-600 to-red-600',
    accent: '#ef4444'
  },
  {
    id: 'miles',
    name: 'Miles Morales',
    alias: 'Brooklyn\'s Finest',
    description: 'A new generation of hero. Mastering unique powers like invisibility and venom strikes.',
    biography: 'Hailing from Brooklyn, Miles Morales took up the mantle of Spider-Man after the death of his universe\'s Peter Parker. Initially hesitant, Miles soon discovered his own unique capabilities: a powerful "Venom Blast" electric shock and advanced camouflage. He represents the hope that anyone can wear the mask.',
    missions: [
      { 
        title: 'Prowler Pursuit', 
        description: 'Track down the mysterious thief in Brooklyn.', 
        status: 'COMPLETED',
        location: 'Williamsburg Docks',
        dangerLevel: 6,
        tacticalData: 'Stealth tactics required. Target utilized sonic dampeners. Neutralized via Venom Blast 2.0. Personal connection confirmed: Uncle Aaron identified.'
      },
      { 
        title: 'Multiversal Signal', 
        description: 'Investigate the spatial rift in Harlem.', 
        status: 'ACTIVE',
        location: 'Harlem Research Lab',
        dangerLevel: 9,
        tacticalData: 'Chrono-sync interference detected. Matter displacement at 12%. Spider-Sense ringing at high frequency. Possible intersection with Universe-65.'
      },
      { 
        title: 'Suit Synthesis', 
        description: 'Construct the Evolved Tech suit.', 
        status: 'PENDING',
        location: 'Personal Studio',
        dangerLevel: 1,
        tacticalData: 'Required components: Nano-mesh threading, graphene weave. Battery capacity needs 15% increase for sustained camouflage.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800',
    color: 'from-red-800 to-black',
    accent: '#991b1b'
  },
  {
    id: 'gwen',
    name: 'Gwen Stacy',
    alias: 'Spider-Woman',
    description: 'The rhythm of the multiverse. Bringing style, grace, and unmatched agility to the fight.',
    biography: 'In an alternate reality, it was Gwen Stacy who was bitten by the radioactive spider. A talented drummer and fierce fighter, she operates as Spider-Woman (or Ghost-Spider). Gwen balances the pressures of her police captain father and the loneliness of being a secret hero through the power of music and multiversal camaraderie.',
    missions: [
      { 
        title: 'Lizard Containment', 
        description: 'Neutralize the reptilian threat at the docks.', 
        status: 'COMPLETED',
        location: 'Chelsea Pier',
        dangerLevel: 7,
        tacticalData: 'Used web-traps with reinforced tensile strength. Target identified as Peter Parker (E-65). Heavy psychological impact noted.'
      },
      { 
        title: 'Band Practice', 
        description: 'Arrive at the gig before the final set.', 
        status: 'ACTIVE',
        location: 'The Mary Janes Rehearsal Space',
        dangerLevel: 4,
        tacticalData: 'Multiple interruptions from minor street crimes. Battery on drum kit low. Risk of band dismissal: Moderate.'
      },
      { 
        title: 'Spider-Society Briefing', 
        description: 'Meet Miguel O\'Hara at 2099 hub.', 
        status: 'PENDING',
        location: 'Nueva York (E-2099)',
        dangerLevel: 5,
        tacticalData: 'Go-home machine recalibration required. Briefing topic: Canon Event prevention and preservation.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1634828221818-503587f33d02?auto=format&fit=crop&q=80&w=800',
    color: 'from-pink-500 to-white',
    accent: '#ec4899'
  }
];

export const SCENES: MovieScene[] = [
  {
    title: "Multiverse Collision",
    description: "The fabric of reality begins to tear as worlds collide.",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "The Web Of Fate",
    description: "Every choice weaves a new destiny in the cosmic web.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "City Shadows",
    description: "Justice watches over the neon-soaked streets of New York.",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200"
  }
];
