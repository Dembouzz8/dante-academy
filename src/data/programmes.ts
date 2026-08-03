import grassrootsImage from '../assets/images/hero/dante-hero.jpeg';
import developmentImage from '../assets/images/programmes/development.jpg';
import eliteImage from '../assets/images/programmes/elite.jpg';
import playerWelfareImage from '../assets/images/programmes/player-welfare.jpg';

export const programmes = [
  {
    id: 'grassroots',
    name: 'Grassroots',
    ages: 'U10 to U13',
    image: grassrootsImage,
    imageAlt:
      'A young Dante player controlling the football during a structured training drill',
    objectPosition: '52% 50%',
    description:
      'Players develop fundamental football skills, confidence, coordination and understanding of the game.',
    outcomes: [
      'Fundamental football skills',
      'Coordination',
      'Confidence',
      'Teamwork',
      'Understanding of the game',
    ],
  },
  {
    id: 'development',
    name: 'Development',
    ages: 'U14 to U16',
    image: developmentImage,
    imageAlt:
      'Dante development players applying their learning in a training game',
    objectPosition: '50% 42%',
    description:
      'Players strengthen their technical ability, teamwork, decision-making and game intelligence.',
    outcomes: [
      'Stronger technical ability',
      'Tactical awareness',
      'Teamwork',
      'Decision-making',
      'Game intelligence',
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    ages: 'U17 to U19',
    image: eliteImage,
    imageAlt:
      'Dante elite players competing for the football during an intense session',
    objectPosition: '50% 40%',
    description:
      'Talented players receive advanced preparation for progression towards higher competitive levels.',
    outcomes: [
      'Advanced technical development',
      'Higher-intensity preparation',
      'Tactical understanding',
      'Competitive readiness',
      'Preparation for appropriate progression opportunities',
    ],
  },
] as const;

export const developmentApproach = [
  'Age-appropriate coaching',
  'Technical development',
  'Tactical understanding',
  'Continuous observation',
  'Discipline',
  'Teamwork',
  'Education and mentorship',
] as const;

export const developedQualities = [
  'Ball mastery',
  'Movement and coordination',
  'Decision-making',
  'Game understanding',
  'Communication',
  'Confidence',
  'Teamwork',
  'Discipline',
] as const;

export const playerWelfareFeature = {
  image: playerWelfareImage,
  imageAlt:
    'A Dante coach speaking with young players during a training session',
  objectPosition: '50% 45%',
} as const;
