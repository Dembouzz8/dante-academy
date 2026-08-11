export type FaqKind =
  'age-groups' | 'development-stages' | 'location' | 'contact';

export interface FaqItem {
  id: string;
  question: string;
  answer?: string;
  items?: readonly string[];
  link?: { label: string; href: string };
  kind?: FaqKind;
}

export interface FaqCategory {
  id: string;
  title: string;
  eyebrow: string;
  questions: readonly FaqItem[];
}

export const faqCategories = [
  {
    id: 'programmes',
    eyebrow: 'Programmes & age groups',
    title: 'Finding the right development stage',
    questions: [
      {
        id: 'age-groups',
        question: 'What age groups does Dante Football Academy support?',
        kind: 'age-groups',
      },
      {
        id: 'development-stages',
        question: "What are the academy's development stages?",
        kind: 'development-stages',
      },
      {
        id: 'development-focus',
        question: 'What areas of player development does Dante focus on?',
        answer:
          'DANTE develops players across four connected dimensions. The emphasis for each player may vary according to their stage and development needs.',
        items: [
          'Technical development',
          'Tactical development',
          'Physical development',
          'Character and leadership',
        ],
      },
    ],
  },
  {
    id: 'joining',
    eyebrow: 'Joining & assessment',
    title: 'Making an initial enquiry',
    questions: [
      {
        id: 'register',
        question: 'How do I register for Dante Football Academy?',
        answer:
          "Review the academy's registration information and development pathway before continuing to the official player registration form.",
        link: { label: 'Join the Academy', href: '/register/' },
      },
      {
        id: 'selection',
        question: 'Does registration guarantee a place at the academy?',
        answer:
          'No. Registration or assessment does not guarantee selection. Player development and assessment are considered individually.',
      },
      {
        id: 'schedules-fees',
        question:
          'When are training schedules, assessment dates and fees available?',
        answer:
          'Training schedules, assessment dates and applicable fees are provided directly following an initial enquiry.',
      },
      {
        id: 'assessment',
        question: 'How are players assessed?',
        answer:
          'Assessment may combine observation and appropriate development information. Depending on the player and context, it may consider:',
        items: [
          'Technical ability',
          'Tactical awareness',
          'Physical potential',
          'Football intelligence',
          'Coachability',
          'Character',
          'Discipline',
          'Work rate',
          'Leadership potential',
          'Mental resilience',
        ],
      },
    ],
  },
  {
    id: 'education',
    eyebrow: 'Education & development',
    title: 'Growing on and off the pitch',
    questions: [
      {
        id: 'more-than-football',
        question: 'Does Dante focus only on football?',
        answer:
          "No. Dante's development philosophy also emphasises education, character, communication, teamwork, leadership and preparation for life beyond football.",
      },
      {
        id: 'player-and-person',
        question: 'What does “Develop the Player, Develop the Person” mean?',
        answer:
          'DANTE aims to support football development and personal development together. Discipline, responsibility, confidence, respect and leadership are treated as important parts of a young player’s growth.',
      },
    ],
  },
  {
    id: 'safeguarding',
    eyebrow: 'Safeguarding & media',
    title: 'Protecting dignity and wellbeing',
    questions: [
      {
        id: 'child-protection',
        question: 'How does Dante approach safeguarding and child protection?',
        answer:
          'DANTE is committed to a safe and inclusive environment that respects dignity and wellbeing, protects players from abuse, bullying and discrimination, encourages positive role models and promotes mutual respect.',
        link: {
          label: 'Read about Safeguarding & Child Protection',
          href: '/safeguarding/',
        },
      },
      {
        id: 'photography',
        question: 'How does Dante use photographs and videos of players?',
        answer:
          'Photographs and videos may be used for official academy purposes. Appropriate consent is required where applicable, with particular care when players are minors. Sensitive personal information should not be published alongside a child’s photograph.',
        link: {
          label: 'Read the Photography & Media Policy',
          href: '/photography-media/',
        },
      },
    ],
  },
  {
    id: 'partners',
    eyebrow: 'Clubs, scouts & partners',
    title: 'Working with Dante',
    questions: [
      {
        id: 'clubs-scouts',
        question: 'Can clubs or scouts contact Dante about players?',
        answer:
          'Yes. Clubs, scouts and football organisations may contact DANTE to discuss player development, scouting and appropriate opportunities. Personal information is handled in line with the academy’s privacy commitments.',
        link: {
          label: 'Explore Partners & Sponsorship',
          href: '/academy/partners/',
        },
      },
      {
        id: 'organisations',
        question: 'How can organisations partner with Dante?',
        answer:
          'DANTE welcomes appropriate conversations across several partnership areas:',
        items: [
          'Academy and programme sponsorship',
          'Tournament and event sponsorship',
          'Scholarship and youth support',
          'Equipment and facility support',
          'Training and technical collaboration',
          'Strategic partnerships',
          'Media and marketing partnerships',
        ],
        link: {
          label: 'Discuss partnership opportunities',
          href: '/academy/partners/',
        },
      },
    ],
  },
  {
    id: 'contact',
    eyebrow: 'Contact',
    title: 'Speaking with the academy',
    questions: [
      {
        id: 'location',
        question: 'Where is Dante Football Academy located?',
        kind: 'location',
      },
      {
        id: 'contact-details',
        question: 'How can I contact the academy?',
        kind: 'contact',
        link: { label: 'View all contact information', href: '/contact/' },
      },
    ],
  },
] satisfies readonly FaqCategory[];
