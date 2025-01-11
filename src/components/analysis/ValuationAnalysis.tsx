import React from 'react';
import { BaseAnalysis } from './BaseAnalysis';
import { VALUATION_METRICS } from '@/constants/metrics';

interface Props {
  onScoreUpdate: (score: number) => void;
}

export const ValuationAnalysis = ({ onScoreUpdate }: Props) => {
  return (
    <BaseAnalysis
      title="Valuation Analysis"
      metrics={VALUATION_METRICS}
      onScoreUpdate={onScoreUpdate}
    />
  );
};
