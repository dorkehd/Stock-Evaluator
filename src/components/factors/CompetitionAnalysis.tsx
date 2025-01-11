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

const CompetitionAnalysis = ({ score, onScoreChange }: Props) => {
  const metrics: Metric[] = [
    {
      name: 'Competitive Intensity',
      description: 'How intense is the competition in the industry?',
      weight: 25
    },
    {
      name: 'Barriers to Entry',
      description: 'How strong are the barriers to entry in the industry?',
      weight: 25
    },
    {
      name: 'Competitive Advantages',
      description: 'How strong and sustainable are the company\'s competitive advantages?',
      weight: 25
    },
    {
      name: 'Market Position Trend',
      description: 'Is the company\'s market position improving or declining?',
      weight: 25
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
          <span>Competition Analysis</span>
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

export default CompetitionAnalysis;