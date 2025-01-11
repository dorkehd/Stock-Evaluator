import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CustomerValueMetric {
  name: string;
  description: string;
  weight: number;
}

interface Props {
  score: number;
  onScoreChange: (score: number) => void;
}

const CustomerValueAnalysis = ({ score, onScoreChange }: Props) => {
  const metrics: CustomerValueMetric[] = [
    {
      name: 'Brand Recognition',
      description: 'Evaluate the company\'s brand strength and recognition in its market',
      weight: 25
    },
    {
      name: 'Customer Satisfaction',
      description: 'Assess customer satisfaction levels and retention rates',
      weight: 25
    },
    {
      name: 'Net Promoter Score',
      description: 'Consider the company\'s NPS and customer loyalty metrics',
      weight: 25
    },
    {
      name: 'Pricing Power',
      description: 'Evaluate the company\'s ability to maintain or increase prices',
      weight: 25
    }
  ];

  const handleMetricScore = (metricScore: number, weight: number) => {
    const weightedScore = (metricScore * weight) / 100;
    onScoreChange(weightedScore);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Customer Value Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {metrics.map((metric) => (
            <div key={metric.name} className="space-y-2">
              <Label className="text-base font-semibold">
                {metric.name} ({metric.weight}%)
              </Label>
              <p className="text-sm text-gray-500">{metric.description}</p>
              <div className="flex items-center gap-4">
                <Input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="Score (0-100)"
                  onChange={(e) => handleMetricScore(Number(e.target.value), metric.weight)}
                  className="w-32"
                />
                <span className="text-sm text-gray-500">Score out of 100</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerValueAnalysis;