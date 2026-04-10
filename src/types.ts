export type Theme = 'futuristic' | 'ancient';

export type AppMode = 'home' | 'history' | 'talk' | 'museum' | 'mythology';

export type TimelinePeriod = 
  | 'Stone Age' 
  | 'Ancient Civilizations' 
  | 'Classical Era' 
  | 'Medieval Period' 
  | 'Early Modern Period' 
  | 'Modern History' 
  | 'Contemporary';

export interface HistoricalFigure {
  id: string;
  name: string;
  period: TimelinePeriod;
  role: 'main' | 'side' | 'guide' | 'fun';
  description: string;
  avatar: string;
  systemPrompt: string;
  statusMessages: string[];
  personalityTraits: string[];
}

export interface Artifact {
  id: string;
  name: string;
  period: string;
  description: string;
  story: string;
  imageUrl: string;
}

export interface MythologyMission {
  id: string;
  title: string;
  godParent: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Extreme';
  story: string; // Step 1: Learn
  challenge: {
    question: string;
    options: string[];
    correctAnswer: string;
    hint: string;
  }; // Step 2: Play
  animationType: 'lightning' | 'waves' | 'strategy' | 'fire' | 'nature' | 'sun' | 'moon' | 'love' | 'tools' | 'message' | 'wine' | 'peacock';
}

export interface GodParent {
  id: string;
  name: string;
  domain: string;
  description: string;
  personality: string;
  iconName: string; // Lucide icon name
}

export interface HistoryEvent {
  id: string;
  title: string;
  period: TimelinePeriod;
  year: string;
  description: string;
  imageUrl: string;
  didYouKnow: string[];
  interactiveElements: {
    id: string;
    label: string;
    fact: string;
    position: { x: number; y: number };
  }[];
}
