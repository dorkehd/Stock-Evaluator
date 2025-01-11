export interface Metric {
  id: string;
  name: string;
  description: string;
  weight: number;
}

export interface AnalysisProps {
  onScoreUpdate: (score: number) => void;
  data?: Record<string, any>;
}

export interface ScoreMap {
  [key: string]: number;
}