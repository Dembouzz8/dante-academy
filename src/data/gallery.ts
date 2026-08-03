import type { ImageMetadata } from 'astro';
import trainingAction01 from '../assets/images/gallery/recent-event/training-action-01.jpg';
import trainingAction03 from '../assets/images/gallery/recent-event/training-action-03.jpg';
import trainingAction04 from '../assets/images/gallery/recent-event/training-action-04.jpg';
import trainingAction07 from '../assets/images/gallery/recent-event/training-action-07.jpg';
import trainingAction08 from '../assets/images/gallery/recent-event/training-action-08.jpg';
import trainingAction09 from '../assets/images/gallery/recent-event/training-action-09.jpg';
import trainingAction10 from '../assets/images/gallery/recent-event/training-action-10.jpg';
import trainingAction11 from '../assets/images/gallery/recent-event/training-action-11.jpg';
import coachInstruction02 from '../assets/images/gallery/recent-event/coach-instruction-02.jpg';
import teamWarmup02 from '../assets/images/gallery/recent-event/team-warmup-02.jpg';
import teamWarmup04 from '../assets/images/gallery/recent-event/team-warmup-04.jpg';
import teamWarmup07 from '../assets/images/gallery/recent-event/team-warmup-07.jpg';
import playerWelfare01 from '../assets/images/gallery/recent-event/player-welfare-01.jpg';
import playerRegistration02 from '../assets/images/gallery/recent-event/player-registration-02.jpg';
import leadershipTeam01 from '../assets/images/gallery/recent-event/leadership-team-01.jpg';
import academyCommunity03 from '../assets/images/gallery/recent-event/academy-community-03.jpg';
import academyCommunity08 from '../assets/images/gallery/recent-event/academy-community-08.jpg';
import u13Action01 from '../assets/images/gallery/recent-event/U13-01.jpg';

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
  image: trainingAction01,
  objectPosition: '50% 55%',
} as const;

export const featuredGalleryImage: GalleryImage = {
  image: trainingAction10,
  alt: 'Young Dante players contesting the football during a training game',
  title: 'Learning through the game',
  caption: 'Competitive moments give players space to apply their learning.',
  objectPosition: '50% 48%',
  span: 'wide',
  featured: true,
  accent: true,
};

export const galleryImages: GalleryImage[] = [
  {
    image: trainingAction03,
    alt: 'A Dante player controlling the football under pressure',
    title: 'Focus on the ball',
    objectPosition: '50% 45%',
    span: 'portrait',
  },
  {
    image: coachInstruction02,
    alt: 'A coach speaking with players during a training session',
    title: 'Guidance in the moment',
    objectPosition: '52% 45%',
    span: 'wide',
  },
  {
    image: teamWarmup02,
    alt: 'Players preparing together before football activity',
    objectPosition: '50% 48%',
    span: 'half',
  },
  {
    image: trainingAction04,
    alt: 'Players moving into space during a football drill',
    objectPosition: '50% 50%',
    span: 'half',
  },
  {
    image: playerWelfare01,
    alt: 'Academy staff supporting players beside the pitch',
    title: 'Care around the game',
    objectPosition: '50% 45%',
    span: 'standard',
  },
  {
    image: trainingAction07,
    alt: 'Young players competing during an academy football session',
    objectPosition: '50% 45%',
    span: 'wide',
    accent: true,
  },
  {
    image: playerRegistration02,
    alt: 'A player completing event documentation with teammates nearby',
    title: 'Preparing for the day',
    objectPosition: '58% 42%',
    span: 'portrait',
  },
  {
    image: teamWarmup04,
    alt: 'Players working through a coordinated warm-up',
    objectPosition: '50% 48%',
    span: 'wide',
  },
  {
    image: trainingAction08,
    alt: 'A football drill in progress on the academy pitch',
    objectPosition: '50% 50%',
    span: 'half',
  },
  {
    image: u13Action01,
    alt: 'Young players developing their game in a competitive exercise',
    objectPosition: '50% 48%',
    span: 'half',
  },
  {
    image: leadershipTeam01,
    alt: 'Academy staff and leaders gathered beside the pitch',
    title: 'The people behind the work',
    objectPosition: '50% 42%',
    span: 'wide',
  },
  {
    image: teamWarmup07,
    alt: 'Players moving together during their preparation',
    objectPosition: '50% 50%',
    span: 'standard',
  },
  {
    image: trainingAction09,
    alt: 'Young footballers applying their skills during play',
    objectPosition: '50% 48%',
    span: 'standard',
  },
  {
    image: trainingAction11,
    alt: 'Players competing for possession on the training pitch',
    objectPosition: '50% 50%',
    span: 'standard',
  },
  {
    image: academyCommunity03,
    alt: 'Players, coaches and academy staff gathered at the goal',
    title: 'One academy community',
    objectPosition: '50% 45%',
    span: 'wide',
  },
];

export const closingGalleryImage: GalleryImage = {
  image: academyCommunity08,
  alt: 'Young players and academy staff gathered together on the pitch',
  title: 'Together in development',
  objectPosition: '50% 44%',
  span: 'wide',
  accent: true,
};
