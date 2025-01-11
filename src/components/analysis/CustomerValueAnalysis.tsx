import React from 'react';
import BaseAnalysis from './BaseAnalysis';
import { customerValueMetrics } from './config/metrics';
import { AnalysisProps } from './types';

const CustomerValueAnalysis = (props: AnalysisProps) => (
  <BaseAnalysis
    title="Customer Value Analysis"
    metrics={customerValueMetrics}
    {...props}
  />
);

export default CustomerValueAnalysis;