import React from 'react';
import { BaseAnalysis } from './BaseAnalysis';
import { CUSTOMER_VALUE_METRICS } from '@/constants/metrics';

interface Props {
  onScoreUpdate: (score: number) => void;
}

export const CustomerValueAnalysis = ({ onScoreUpdate }: Props) => {
  return (
    <BaseAnalysis
      title="Customer Value Analysis"
      metrics={CUSTOMER_VALUE_METRICS}
      onScoreUpdate={onScoreUpdate}
    />
  );
};
