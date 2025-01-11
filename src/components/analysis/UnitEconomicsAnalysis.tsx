import React from 'react';
import { BaseAnalysis } from './BaseAnalysis';
import { UNIT_ECONOMICS_METRICS } from '@/constants/metrics';

interface Props {
  onScoreUpdate: (score: number) => void;
}

export const UnitEconomicsAnalysis = ({ onScoreUpdate }: Props) => {
  return (
    <BaseAnalysis
      title="Unit Economics Analysis"
      metrics={UNIT_ECONOMICS_METRICS}
      onScoreUpdate={onScoreUpdate}
    />
  );
};
