import React from 'react';
import { BaseAnalysis } from './BaseAnalysis';
import { COMPETITION_METRICS } from '@/constants/metrics';

interface Props {
  onScoreUpdate: (score: number) => void;
}

export const CompetitionAnalysis = ({ onScoreUpdate }: Props) => {
  return (
    <BaseAnalysis
      title="Competition Analysis"
      metrics={COMPETITION_METRICS}
      onScoreUpdate={onScoreUpdate}
    />
  );
};
