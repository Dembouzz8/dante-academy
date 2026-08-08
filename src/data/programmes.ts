import youthImage from '../assets/images/gallery/recent-event/team-warmup-02.jpg';
import juniorImage from '../assets/images/programmes/development.jpg';
import academyImage from '../assets/images/programmes/elite.jpg';
import transitionImage from '../assets/images/gallery/recent-event/training-action-10.jpg';
import seniorImage from '../assets/images/gallery/recent-event/training-action-07.jpg';
import playerWelfareImage from '../assets/images/programmes/player-welfare.jpg';

export const programmes = [
  {
    id: 'youth-development',
    name: 'Youth Development',
    squads: [
      { squad: 'U9', ages: 'Age 8 to 9' },
      { squad: 'U11', ages: 'Age 10 to 11' },
    ],
    image: youthImage,
    imageAlt:
      'Young Dante players developing their football skills during training',
    objectPosition: '50% 48%',
    description:
      'Young players build strong foundations in technique, coordination, confidence and understanding of the game.',
    outcomes: [
      'Ball familiarity',
      'Movement and coordination',
      'Confidence',
      'Teamwork',
      'Enjoyment of learning',
    ],
  },
  {
    id: 'junior-development',
    name: 'Junior Development',
    squads: [{ squad: 'U13', ages: 'Age 12 to 13' }],
    image: juniorImage,
    imageAlt: 'Dante junior players applying their learning in a training game',
    objectPosition: '50% 42%',
    description:
      'Players strengthen technical habits, decision making, teamwork and their understanding of the game.',
    outcomes: [
      'Technical development',
      'Tactical awareness',
      'Decision making',
      'Communication',
      'Responsibility',
    ],
  },
  {
    id: 'youth-academy',
    name: 'Youth Academy',
    squads: [
      { squad: 'U15', ages: 'Age 14 to 15' },
      { squad: 'U17', ages: 'Age 16 to 17' },
    ],
    image: academyImage,
    imageAlt:
      'Dante academy players competing for the football during an intense session',
    objectPosition: '50% 40%',
    description:
      'Players develop stronger technical, tactical, physical and personal standards for competitive football.',
    outcomes: [
      'Technical excellence',
      'Tactical intelligence',
      'Physical preparation',
      'Competitive habits',
      'Character and leadership',
    ],
  },
  {
    id: 'senior-youth-transition',
    name: 'Senior Youth / Transition',
    squads: [{ squad: 'U19', ages: 'Age 18 to 19' }],
    image: transitionImage,
    imageAlt:
      'Dante players applying their development during competitive football activity',
    objectPosition: '50% 48%',
    description:
      'Players prepare for appropriate next steps through advanced development, responsibility and competitive application.',
    outcomes: [
      'Advanced development',
      'Game understanding',
      'Physical readiness',
      'Leadership',
      'Progression preparation',
    ],
  },
  {
    id: 'professional-senior-development',
    name: 'Professional / Senior Development',
    squads: [{ squad: 'Senior', ages: 'Age 20+' }],
    image: seniorImage,
    imageAlt:
      'Dante senior players working together during football development',
    objectPosition: '50% 45%',
    description:
      'Senior players continue purposeful development towards appropriate competitive opportunities.',
    outcomes: [
      'Performance refinement',
      'Tactical maturity',
      'Physical conditioning',
      'Professional habits',
      'Appropriate exposure',
    ],
  },
] as const;

export const developmentDimensions = [
  {
    title: 'Technical Development',
    items: [
      'Ball mastery',
      'Passing',
      'First touch',
      'Finishing',
      'One versus one ability',
    ],
  },
  {
    title: 'Tactical Development',
    items: [
      'Decision making',
      'Positioning',
      'Game understanding',
      'Transition play',
      'Team organisation',
    ],
  },
  {
    title: 'Physical Development',
    items: ['Speed', 'Strength', 'Agility', 'Endurance', 'Injury prevention'],
  },
  {
    title: 'Character and Leadership',
    items: [
      'Discipline',
      'Respect',
      'Teamwork',
      'Confidence',
      'Responsibility',
    ],
  },
] as const;

export const developmentApproach = [
  'Age-appropriate coaching',
  'Progressive technical learning',
  'Tactical understanding',
  'Continuous observation',
  'Physical development',
  'Character and leadership',
  'Education and mentorship',
] as const;

export const playerWelfareFeature = {
  image: playerWelfareImage,
  imageAlt:
    'A Dante coach speaking with young players during a training session',
  objectPosition: '50% 45%',
} as const;
