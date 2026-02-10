
import { Program, Testimonial, ScheduleEvent } from './types';

export const PROGRAMS: Program[] = [
  {
    id: 'foundations',
    title: 'Leadership Foundations',
    ageGroup: '12-14 years',
    description: 'Master the basics of communication, teamwork, and self-confidence through interactive workshops.',
    icon: '🚀',
    duration: '4 Weeks',
    color: 'bg-blue-500'
  },
  {
    id: 'advanced',
    title: 'Advanced Impact',
    ageGroup: '15-17 years',
    description: 'Deep dive into project management, ethical decision-making, and community organizing.',
    icon: '⚡',
    duration: '8 Weeks',
    color: 'bg-indigo-600'
  },
  {
    id: 'global',
    title: 'Global Ambassadors',
    ageGroup: '17-19 years',
    description: 'A prestigious program focusing on international relations, public speaking, and global policy.',
    icon: '🌍',
    duration: '12 Weeks',
    color: 'bg-purple-600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Student, Grade 11',
    content: 'YouthLead didn’t just teach me how to lead a team; it taught me how to listen and empathize. I feel ready for university and beyond.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Alumni, Start-up Founder',
    content: 'The mentor network here is unparalleled. The skills I learned at 16 are the same ones I use today to run my company.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&h=150'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Parent',
    content: 'Seeing my daughter grow from a shy student to a confident community organizer has been the highlight of our year.',
    avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=150&h=150'
  }
];

export const SCHEDULE_EVENTS: ScheduleEvent[] = [
  {
    id: 'ev1',
    title: 'Effective Communication Workshop',
    date: 'March 15, 2021',
    time: '10:00 AM - 1:00 PM',
    type: 'Workshop',
    location: 'Central Campus & Virtual',
    description: 'Learn the core principles of active listening, assertive speaking, and non-verbal cues.'
  },
  {
    id: 'ev2',
    title: 'Global Leadership Summit 2021',
    date: 'April 02, 2021',
    time: '09:00 AM - 4:00 PM',
    type: 'Summit',
    location: 'Grand Ballroom, City Hall',
    description: 'A full day of keynote speakers, networking sessions, and interactive leadership simulations.'
  },
  {
    id: 'ev3',
    title: 'Community Impact Project Kick-off',
    date: 'April 20, 2021',
    time: '2:00 PM - 5:00 PM',
    type: 'Project',
    location: 'Local Community Center',
    description: 'Teams assemble to pitch their social impact ideas and receive their project funding.'
  },
  {
    id: 'ev4',
    title: 'Ethics in the Digital Age Seminar',
    date: 'May 05, 2021',
    time: '5:00 PM - 7:00 PM',
    type: 'Seminar',
    location: 'Online (Zoom)',
    description: 'Discussing the ethical implications of AI and social media for the next generation of leaders.'
  }
];
