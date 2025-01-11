import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Props {
  score: number;
  onScoreChange: (score: number) => void;
}

interface Metric {
  name: string;
  weight: number;
  description: string;
  key: string;
}

const metrics: Metric[] = [
  {
    name: 'Gross Margins',
    weight: 0.30,
    description: 'How profitable is each unit sold before operating expenses?',
    key: 'grossMargin'
  },
  {
    name: 'Operating Margins',
    weight: 0.30,
    description: 'How efficient is the company at managing operating costs?',
    key: 'operatingMargin'
  },
  {
    name: 'Scale Economics',
    weight: 0.20,
    description: 'Does unit profitability improve with scale?',
    key: 'scale'
  },
  {
    name: 'Cost Structure',
    weight: 0.20,
    description: 'How favorable is the fixed vs variable cost ratio?',
    key: 'costs'
  }
];

const UnitEconomicsAnalysis = ({ score, onScoreChange }: Props) => {
  const [metricScores, setMetricScores] = React.useState<Record<string, number>>({
    grossMargin: 0,
    operatingMargin: 0,
    scale: 0,
    costs: 0
  });

  const handleMetricChange = (metric: string, value: number) => {
    const newScores = {
      ...metricScores,
      [metric]: value
    };
    setMetricScores(newScores);
    
    // Calculate total weighted score
    const totalScore = Object.entries(newScores).reduce((total, [key, score]) => {
      const metricWeight = metrics.find(m => m.key === key)?.weight || 0;
      return total + (score * metricWeight);
    }, 0);
    
    onScoreChange(totalScore);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Unit Economics Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {metrics.map((metric) => (
            <div key={metric.key} className="space-y-2">
              <div className="flex justify-between">
                <Label>{metric.name} ({metric.weight * 100}%)</Label>
                <span className="text-sm text-gray-500">
                  Score: {metricScores[metric.key]}
                </span>
              </div>
              <p className="text-sm text-gray-500">{metric.description}</p>
              <Input
                type="range"
                min="0"
                max="100"
                value={metricScores[metric.key]}
                onChange={(e) => handleMetricChange(metric.key, Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UnitEconomicsAnalysis;