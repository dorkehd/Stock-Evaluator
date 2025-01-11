import React from 'react';
import BaseAnalysis from './BaseAnalysis';
import { unitEconomicsMetrics } from './config/metrics';

interface Props {
  onScoreUpdate: (score: number) => void;
}

const UnitEconomicsAnalysis = ({ onScoreUpdate }: Props) => (
  <BaseAnalysis
    title="Unit Economics Analysis"
    metrics={unitEconomicsMetrics}
    onScoreUpdate={onScoreUpdate}
  />
);

export default UnitEconomicsAnalysis;