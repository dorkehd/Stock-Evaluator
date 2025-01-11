import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tooltip } from '@/components/ui/tooltip';

interface Props {
  score: number;
  onScoreChange: (score: number) => void;
}

interface Metric {
  name: string;
  weight: number;
  description: string;
  guidance: string[];
}

const metrics: Metric[] = [
  {
    name: 'Brand Recognition',
    weight: 25,
    description: 'Measure of brand strength and consumer awareness',
    guidance: [
      'Consider market surveys and brand value rankings',
      'Evaluate social media presence and engagement',
      'Assess brand loyalty and repeat purchase rates'
    ]
  },
  {
    name: 'Customer Satisfaction',
    weight: 25,
    description: 'Overall customer satisfaction with products/services',
    guidance: [
      'Review customer satisfaction surveys',
      'Check online reviews and ratings',
      'Analyze customer retention rates'
    ]
  },
  {
    name: 'Net Promoter Score',
    weight: 25,
    description: 'Likelihood of customers recommending the company',
    guidance: [
      'Compare NPS with industry averages',
      'Track NPS trends over time',
      'Consider regional variations in NPS'
    ]
  },
  {
    name: 'Pricing Power',
    weight: 25,
    description: 'Ability to maintain or increase prices without losing customers',
    guidance: [
      'Analyze historical price increases',
      'Evaluate customer response to price changes',
      'Compare pricing with competitors'
    ]
  }
];

const CustomerValueAnalysis = ({ score, onScoreChange }: Props) => {
  const [metricScores, setMetricScores] = React.useState<Record<string, number>>({});

  const handleMetricScore = (metricName: string, value: number) => {
    const newScores = {
      ...metricScores,
      [metricName]: value
    };
    setMetricScores(newScores);

    // Calculate total score
    const totalScore = metrics.reduce((acc, metric) => {
      const metricScore = newScores[metric.name] || 0;
      return acc + (metricScore * metric.weight / 100);
    }, 0);

    onScoreChange(totalScore);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Customer Value Analysis</span>
          <span className="text-sm font-normal text-gray-500">
            Overall Score: {score.toFixed(1)}/100
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {metrics.map((metric) => (
            <div key={metric.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <Tooltip content={
                  <div className="max-w-xs p-2">
                    <p className="font-semibold mb-2">{metric.description}</p>
                    <ul className="list-disc pl-4 space-y-1">
                      {metric.guidance.map((item, idx) => (
                        <li key={idx} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                }>
                  <label className="text-sm font-medium cursor-help">
                    {metric.name} ({metric.weight}%)
                  </label>
                </Tooltip>
                <span className="text-sm text-gray-500">
                  Score: {metricScores[metric.name] || 0}/100
                </span>
              </div>
              <Input
                type="number"
                min="0"
                max="100"
                value={metricScores[metric.name] || ''}
                onChange={(e) => handleMetricScore(metric.name, Number(e.target.value))}
                placeholder="Enter score (0-100)"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerValueAnalysis;