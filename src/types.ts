export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  correctAnswer: string;
  category?: string;
  source?: string;
}

export interface Level {
  id: string;
  title: string;
  heroImage: string;
  questions: Question[];
  missionObjective?: string;
}

export interface MapNode {
  id: string;
  levelId: string;
  icon: string;
  label: string;
  top: string;
  left: string;
}
