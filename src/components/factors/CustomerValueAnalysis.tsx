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
    name: 'Brand Recognition',
    weight: 0.25,
    description: 'How strong is the company\'s brand identity and recognition?',
    key: 'brand'
  },
  {
    name: 'Customer Satisfaction',
    weight: 0.25,
    description: 'Are customers happy with the product/service quality?',
    key: 'satisfaction'
  },
  {
    name: 'Net Promoter Score',
    weight: 0.25,
    description: 'What is the likelihood customers will recommend the product?',
    key: 'nps'
  },
  {
    name: 'Pricing Power',
    weight: 0.25,
    description: 'Can the company increase prices without losing customers?',
    key: 'pricing'
  }
];

const CustomerValueAnalysis = ({ score, onScoreChange }: Props) => {
  const [metricScores, setMetricScores] = React.useState<Record<string, number>>({
    brand: 0,
    satisfaction: 0,
    nps: 0,
    pricing: 0
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
        <CardTitle>Customer Value Analysis</CardTitle>
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

export default CustomerValueAnalysis;