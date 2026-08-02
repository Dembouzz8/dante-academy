import type { ImageMetadata } from 'astro';
import hero from '../assets/images/hero/dante-hero.jpeg';
import potentialToProgression from '../assets/images/academy/potential-to-progression.png';
import trainingGround from '../assets/images/gallery/recent-event/training-ground.jpg';
import behindTheGame from '../assets/images/gallery/recent-event/behind-the-game.jpg';
import moreThanFootball from '../assets/images/academy/more-than-football.jpg';
import directorPortrait from '../assets/images/team/amb-dada-iseoluwa-akinoluwa.jpeg';

export type HomepageImage = {
  image?: ImageMetadata;
  alt: string;
  objectPosition: string;
};

export const homepageImages = {
  hero: { image: hero, alt: '', objectPosition: '55% center' },
  academyIntroduction: {
    image: moreThanFootball,
    alt: 'Academy players taking part in a structured training session',
    objectPosition: '50% center',
  },
  programmes: {
    grassroots: {
      alt: 'Grassroots players developing fundamental football skills',
      objectPosition: '50% center',
    },
    development: {
      alt: 'Development players working together in training',
      objectPosition: '50% center',
    },
    elite: {
      alt: 'Elite players preparing for higher competitive levels',
      objectPosition: '50% center',
    },
  },
  pathway: {
    image: potentialToProgression,
    alt: 'A player progressing through a focused academy training session',
    objectPosition: '50% center',
  },
  insideDante: [
    {
      image: trainingGround,
      alt: 'Dante players training together on the pitch',
      objectPosition: '50% center',
    },
    {
      image: behindTheGame,
      alt: 'A focused moment during an academy football session',
      objectPosition: '50% center',
    },
  ],
  director: {
    image: directorPortrait,
    alt: 'The Director of Dante Football Academy',
    objectPosition: '50% 42%',
  },
} as const;
