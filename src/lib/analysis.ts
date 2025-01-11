import { AnalysisScores, FactorWeight } from '@/types/stock';

export function calculateTotalScore(scores: AnalysisScores): number {
  const weights: FactorWeight = {
    customerValue: 0.10,
    unitEconomics: 0.15,
    marketSize: 0.10,
    competition: 0.10,
    risks: 0.15,
    valuation: 0.40
  };

  return Object.entries(scores).reduce((total, [factor, score]) => {
    return total + (score * weights[factor as keyof FactorWeight]);
  }, 0);
}

export function getRecommendation(totalScore: number): string {
  if (totalScore >= 80) return 'Strong Buy';
  if (totalScore >= 70) return 'Buy';
  if (totalScore >= 60) return 'Hold';
  if (totalScore >= 40) return 'Sell';
  return 'Strong Sell';
}