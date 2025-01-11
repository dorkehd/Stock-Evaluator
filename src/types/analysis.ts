export interface BaseMetric {
  id: string;
  name: string;
  description: string;
  weight: number;
}

export interface AnalysisProps {
  onScoreUpdate: (score: number) => void;
  data?: Record<string, any>;
}

export interface AnalysisState {
  scores: Record<string, number>;
  totalScore: number;
}