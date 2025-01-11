import React from 'react';
import BaseAnalysis from './BaseAnalysis';
import { customerValueMetrics } from './config/metrics';

interface Props {
  onScoreUpdate: (score: number) => void;
}

const CustomerValueAnalysis = ({ onScoreUpdate }: Props) => (
  <BaseAnalysis
    title="Customer Value Analysis"
    metrics={customerValueMetrics}
    onScoreUpdate={onScoreUpdate}
  />
);

export default CustomerValueAnalysis;