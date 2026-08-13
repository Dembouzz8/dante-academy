import type { ImageMetadata } from 'astro';
import ballControl from '../assets/images/gallery/official-academy/official-ball-control.jpg';
import ballControl02 from '../assets/images/gallery/official-academy/official-ball-control-02.jpg';
import ballControl03 from '../assets/images/gallery/official-academy/official-ball-control-03.jpg';
import coachDemonstration from '../assets/images/gallery/official-academy/official-coach-demonstration.jpg';
import coachInstruction from '../assets/images/gallery/official-academy/official-coach-instruction.jpg';
import coachTraining from '../assets/images/gallery/official-academy/official-coach-training.jpg';
import coneDrill01 from '../assets/images/gallery/official-academy/official-cone-drill-01.jpg';
import playerDribbling from '../assets/images/gallery/official-academy/official-player-dribbling.jpg';
import playerPortrait from '../assets/images/gallery/official-academy/official-player-portrait.jpg';
import runningDrill01 from '../assets/images/gallery/official-academy/official-running-drill-01.jpg';
import sprintDrill from '../assets/images/gallery/official-academy/official-sprint-drill.jpg';
import squadGroup01 from '../assets/images/gallery/official-academy/official-squad-group-01.jpg';
import squadGroup02 from '../assets/images/gallery/official-academy/official-squad-group-02.jpg';
import squadGroup03 from '../assets/images/gallery/official-academy/official-squad-group-03.jpg';
import teamWalk from '../assets/images/gallery/official-academy/official-team-walk.jpg';
import trainingSession02 from '../assets/images/gallery/official-academy/official-training-session-02.jpg';
import trainingWide from '../assets/images/gallery/official-academy/official-training-wide.jpg';
import leadershipTeam02 from '../assets/images/gallery/recent-event/leadership-team-02.jpg';
import playerRegistration02 from '../assets/images/gallery/recent-event/player-registration-02.jpg';
import playerWelfare from '../assets/images/gallery/recent-event/player-welfare.jpg';
import playerWelfare01 from '../assets/images/gallery/recent-event/player-welfare-01.jpg';

export type GallerySpan = 'standard' | 'half' | 'wide' | 'portrait';

export type GalleryImage = {
  image: ImageMetadata;
  alt: string;
  title?: string;
  caption?: string;
  objectPosition: string;
  span: GallerySpan;
  featured?: boolean;
  accent?: boolean;
};

export const galleryHero = {
  image: sprintDrill,
  objectPosition: '58% 48%',
} as const;

export const featuredGalleryImage: GalleryImage = {
  image: trainingWide,
  alt: 'Dante players training across the academy pitch in official kit',
  title: 'Purpose across the pitch',
  caption: 'Every session brings players together around focused development.',
  objectPosition: '50% 68%',
  span: 'wide',
  featured: true,
  accent: true,
};

export const galleryImages: GalleryImage[] = [
  {
    image: ballControl,
    alt: 'Dante players working with the football during an academy session',
    title: 'Control and awareness',
    objectPosition: '55% 55%',
    span: 'half',
  },
  {
    image: playerDribbling,
    alt: 'A Dante player dribbling through a training exercise',
    title: 'Purposeful practice',
    objectPosition: '68% 58%',
    span: 'half',
  },
  {
    image: coneDrill01,
    alt: 'A Dante player moving through a cone-based training drill',
    title: 'Movement with purpose',
    objectPosition: '50% 56%',
    span: 'half',
  },
  {
    image: playerPortrait,
    alt: 'A Dante player standing with a football in official academy kit',
    title: 'Proud to represent Dante',
    objectPosition: '50% 40%',
    span: 'portrait',
  },
  {
    image: ballControl02,
    alt: 'A Dante player controlling the football beside a training cone',
    title: 'Technical focus',
    objectPosition: '52% 48%',
    span: 'portrait',
  },
  {
    image: coachInstruction,
    alt: 'A Dante coach guiding players during an academy exercise',
    title: 'Guidance in action',
    objectPosition: '51% 52%',
    span: 'wide',
    accent: true,
  },
  {
    image: teamWalk,
    alt: 'Dante players walking together across the academy pitch',
    title: 'Moving together',
    objectPosition: '50% 48%',
    span: 'standard',
  },
  {
    image: runningDrill01,
    alt: 'A Dante player moving at pace during an academy drill',
    title: 'Movement and intensity',
    objectPosition: '43% 42%',
    span: 'portrait',
  },
  {
    image: coachDemonstration,
    alt: 'A Dante coach demonstrating a football exercise to players',
    title: 'Learning by demonstration',
    objectPosition: '52% 42%',
    span: 'standard',
  },
  {
    image: coachTraining,
    alt: 'A Dante coach directing an academy training session',
    title: 'Clear direction',
    objectPosition: '58% 48%',
    span: 'standard',
  },
  {
    image: playerRegistration02,
    alt: 'A player completing event documentation with teammates nearby',
    title: 'PREPARING FOR THE DAY',
    objectPosition: '58% 42%',
    span: 'portrait',
  },
  {
    image: trainingSession02,
    alt: 'Dante players working across the pitch during a training session',
    title: 'The work of development',
    objectPosition: '50% 48%',
    span: 'wide',
    accent: true,
  },
  {
    image: leadershipTeam02,
    alt: 'Academy staff and leaders gathered beside the pitch',
    title: 'THE PEOPLE BEHIND THE WORK',
    objectPosition: '50% 42%',
    span: 'wide',
  },
  {
    image: playerWelfare01,
    alt: 'Academy staff supporting players beside the pitch',
    title: 'CARE AROUND THE GAME',
    objectPosition: '50% 45%',
    span: 'standard',
  },
  {
    image: playerWelfare,
    alt: 'A coach speaking with players during a training session',
    title: 'GUIDANCE IN THE MOMENT',
    objectPosition: '52% 45%',
    span: 'half',
  },
  {
    image: ballControl03,
    alt: 'A Dante player working with the football during technical practice',
    title: 'Confidence on the ball',
    objectPosition: '50% 40%',
    span: 'portrait',
  },
  {
    image: squadGroup01,
    alt: 'A group of Dante players gathered in official academy kit',
    title: 'One academy',
    objectPosition: '50% 43%',
    span: 'wide',
  },
  {
    image: squadGroup02,
    alt: 'Dante players assembled together on the academy pitch',
    objectPosition: '50% 44%',
    span: 'half',
  },
];

export const closingGalleryImage: GalleryImage = {
  image: squadGroup03,
  alt: 'A Dante squad gathered together in official academy kit',
  title: 'Together in development',
  objectPosition: '50% 44%',
  span: 'wide',
  accent: true,
};
