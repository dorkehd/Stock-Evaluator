import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface UnitEconomicsMetric {
  name: string;
  description: string;
  weight: number;
}

interface Props {
  score: number;
  onScoreChange: (score: number) => void;
  financialData?: {
    grossMargin?: number;
    operatingMargin?: number;
  };
}

const UnitEconomicsAnalysis = ({ score, onScoreChange, financialData }: Props) => {
  const metrics: UnitEconomicsMetric[] = [
    {
      name: 'Gross Margins',
      description: 'Evaluate the company\'s gross profit margins and trends',
      weight: 30
    },
    {
      name: 'Operating Margins',
      description: 'Assess operating efficiency and profit margins',
      weight: 30
    },
    {
      name: 'Scale Economics',
      description: 'Consider how unit economics improve with scale',
      weight: 20
    },
    {
      name: 'Cost Structure',
      description: 'Analyze fixed vs variable costs and cost management',
      weight: 20
    }
  ];

  const handleMetricScore = (metricScore: number, weight: number) => {
    const weightedScore = (metricScore * weight) / 100;
    onScoreChange(weightedScore);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Unit Economics Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        {financialData && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="font-medium">Financial Metrics:</p>
            <p>Gross Margin: {financialData.grossMargin?.toFixed(2)}%</p>
            <p>Operating Margin: {financialData.operatingMargin?.toFixed(2)}%</p>
          </div>
        )}
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

export default UnitEconomicsAnalysis;