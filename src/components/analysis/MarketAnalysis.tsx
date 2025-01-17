import React from 'react';
import { BaseAnalysis } from './BaseAnalysis';
import { MARKET_METRICS } from '@/constants/metrics';

interface Props {
  onScoreUpdate: (score: number) => void;
}

export const MarketAnalysis = ({ onScoreUpdate }: Props) => {
  return (
    <BaseAnalysis
      title="Market Analysis"
      metrics={MARKET_METRICS}
      onScoreUpdate={onScoreUpdate}
    />
  );
};
