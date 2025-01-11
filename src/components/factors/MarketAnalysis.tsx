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

const MarketAnalysis = ({ score, onScoreChange }: Props) => {
  const metrics: Metric[] = [
    {
      name: 'Total Addressable Market',
      description: 'How large is the total market opportunity?',
      weight: 30
    },
    {
      name: 'Market Growth Rate',
      description: 'What is the projected market growth rate?',
      weight: 30
    },
    {
      name: 'Market Share Potential',
      description: 'What market share can the company realistically capture?',
      weight: 20
    },
    {
      name: 'Adjacent Opportunities',
      description: 'Are there significant adjacent market opportunities?',
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
          <span>Market Analysis</span>
          <span className="text-sm text-gray-500">Weight: 10%</span>
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

export default MarketAnalysis;