import React from 'react';
import { BaseAnalysis } from './BaseAnalysis';
import { RISK_METRICS } from '@/constants/metrics';

interface Props {
  onScoreUpdate: (score: number) => void;
}

export const RiskAnalysis = ({ onScoreUpdate }: Props) => {
  return (
    <BaseAnalysis
      title="Risk Analysis"
      metrics={RISK_METRICS}
      onScoreUpdate={onScoreUpdate}
    />
  );
};
