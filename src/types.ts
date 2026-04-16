export type Theme = 'futuristic' | 'ancient';

export type AppMode = 'home' | 'history' | 'talk' | 'museum' | 'mythology' | 'mission';

export type TimelinePeriod = 
  | 'Stone Age'
  | 'Bronze Age'
  | 'Iron Age'
  | 'Ancient Civilizations'
  | 'Classical Era'
  | 'Medieval Era'
  | 'Renaissance'
  | 'Industrial Revolution'
  | 'Modern Era'
  | 'Contemporary Era';

export interface Era {
  id: string;
  title: TimelinePeriod;
  description: string;
  yearRange: string;
  imageUrl: string;
  heroImage: string;
  gallery: { url: string; caption: string }[];
  facts: {
    dailyLife: string[];
    events: string[];
    innovations: string[];
    funFacts: string[];
  };
}

export type FigureCategory = 'Leader' | 'Scientist' | 'Thinker' | 'Explorer' | 'Artist' | 'Warrior';

export interface HistoricalFigure {
  id: string;
  name: string;
  period: TimelinePeriod;
  category: FigureCategory;
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

export interface MissionStep {
  id: string;
  type: 'intro' | 'learn' | 'visual' | 'task' | 'scenario' | 'comparison' | 'complete';
  title: string;
  content: string;
  imageUrl?: string;
  comparison?: {
    left: { title: string; content: string; imageUrl: string };
    right: { title: string; content: string; imageUrl: string };
  };
  characterHint?: {
    figureId: string;
    text: string;
  };
  items?: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    function: string;
  }[];
  task?: {
    question: string;
    type: 'multiple-choice' | 'identification' | 'matching' | 'decision';
    options: { 
      id: string; 
      label: string; 
      isCorrect?: boolean; 
      feedback: string;
      nextStepId?: string; // For branching
      impact?: {
        difficultyChange?: number;
        xpBonus?: number;
      };
    }[];
    correctAnswerId?: string;
  };
  xpValue?: number;
}

export interface Mission {
  id: string;
  title: string;
  era: TimelinePeriod;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Expert';
  steps: MissionStep[];
  reward: {
    badge: string;
    xp: number;
    unlocks?: string[];
  };
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

export interface UserProgress {
  uid: string;
  unlockedEras: string[];
  completedMissions: string[];
  collectedArtifacts: string[];
  totalPoints: number;
  forecasts_generated: number;
  accuracy_score: number;
  timeline_events_tracked: number;
  active_simulations: number;
}
