import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Metric {
  name: string;
  description: string;
  weight: number;
}

interface Props {
  score: number;
  onScoreChange: (score: number) => void;
}

const UnitEconomicsAnalysis = ({ score, onScoreChange }: Props) => {
  const metrics: Metric[] = [
    {
      name: 'Gross Margins',
      description: 'How strong are the company\'s gross margins compared to industry?',
      weight: 30
    },
    {
      name: 'Operating Margins',
      description: 'How efficient is the company at converting revenue to operating profit?',
      weight: 30
    },
    {
      name: 'Scale Economics',
      description: 'Does the business demonstrate improving economics with scale?',
      weight: 20
    },
    {
      name: 'Cost Structure',
      description: 'How flexible/advantageous is the company\'s cost structure?',
      weight: 20
    }
  ];

  const handleMetricScore = (metricScore: number, weight: number) => {
    const weightedScore = (metricScore * weight) / 100;
    onScoreChange(weightedScore);
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Unit Economics Analysis</span>
          <span className="text-sm text-gray-500">Weight: 15%</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {metrics.map((metric) => (
            <div key={metric.name} className="space-y-2">
              <Label>
                <span className="font-medium">{metric.name}</span>
                <span className="ml-2 text-sm text-gray-500">({metric.weight}%)</span>
              </Label>
              <p className="text-sm text-gray-600 mb-2">{metric.description}</p>
              <Input
                type="number"
                min="0"
                max="100"
                placeholder="Score (0-100)"
                className="w-full"
                onChange={(e) => handleMetricScore(Number(e.target.value), metric.weight)}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UnitEconomicsAnalysis;