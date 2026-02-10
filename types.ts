
export interface Program {
  id: string;
  title: string;
  ageGroup: string;
  description: string;
  icon: string;
  duration: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ScheduleEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'Workshop' | 'Seminar' | 'Project' | 'Summit';
  location: string;
  description: string;
}
