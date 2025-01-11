import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CustomerValueMetric {
  id: string;
  name: string;
  description: string;
  weight: number;
}

interface Props {
  onScoreUpdate: (score: number) => void;
}

const metrics: CustomerValueMetric[] = [
  {
    id: 'brand',
    name: 'Brand Recognition & Loyalty',
    description: 'Evaluate customer loyalty, brand strength, and repeat purchase rates',
    weight: 0.25
  },
  {
    id: 'satisfaction',
    name: 'Customer Satisfaction',
    description: 'Consider customer reviews, satisfaction scores, and feedback',
    weight: 0.25
  },
  {
    id: 'nps',
    name: 'Net Promoter Score',
    description: 'Analyze NPS trends and comparison with industry averages',
    weight: 0.25
  },
  {
    id: 'pricing',
    name: 'Pricing Power',
    description: 'Assess ability to maintain or increase prices without losing customers',
    weight: 0.25
  }
];

const CustomerValueAnalysis = ({ onScoreUpdate }: Props) => {
  const [scores, setScores] = useState<Record<string, number>>({
    brand: 0,
    satisfaction: 0,
    nps: 0,
    pricing: 0
  });

  const handleScoreChange = (metricId: string, value: number) => {
    const newScores = {
      ...scores,
      [metricId]: value
    };
    setScores(newScores);

    // Calculate weighted average
    const totalScore = metrics.reduce((acc, metric) => {
      return acc + (newScores[metric.id] * metric.weight);
    }, 0);

    onScoreUpdate(totalScore);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Customer Value Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {metrics.map((metric) => (
            <div key={metric.id} className="space-y-2">
              <Label>
                {metric.name} ({metric.weight * 100}%)
              </Label>
              <p className="text-sm text-gray-500">{metric.description}</p>
              <div className="flex items-center gap-4">
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={scores[metric.id]}
                  onChange={(e) => handleScoreChange(metric.id, Number(e.target.value))}
                  className="w-24"
                />
                <span className="text-sm text-gray-500">Score (0-100)</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerValueAnalysis;