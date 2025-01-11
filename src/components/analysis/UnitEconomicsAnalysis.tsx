import React from 'react';
import BaseAnalysis from './BaseAnalysis';
import { unitEconomicsMetrics } from './config/metrics';
import { AnalysisProps } from './types';

const UnitEconomicsAnalysis = (props: AnalysisProps) => (
  <BaseAnalysis
    title="Unit Economics Analysis"
    metrics={unitEconomicsMetrics}
    {...props}
  />
);

export default UnitEconomicsAnalysis;