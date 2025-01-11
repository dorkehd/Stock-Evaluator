import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface UnitEconomicsMetric {
  id: string;
  name: string;
  description: string;
  weight: number;
  hint: string;
}

interface Props {
  onScoreUpdate: (score: number) => void;
  financialData?: {
    grossMargin?: number;
    operatingMargin?: number;
  };
}

const metrics: UnitEconomicsMetric[] = [
  {
    id: 'grossMargin',
    name: 'Gross Margins',
    description: 'Evaluate the company\'s gross profit margins and trends',
    weight: 0.30,
    hint: 'Consider industry averages and historical trends'
  },
  {
    id: 'operatingMargin',
    name: 'Operating Margins',
    description: 'Assess operating efficiency and profit sustainability',
    weight: 0.30,
    hint: 'Compare with competitors and look for improvement trends'
  },
  {
    id: 'scaleEconomics',
    name: 'Scale Economics',
    description: 'Evaluate potential for cost advantages with scale',
    weight: 0.20,
    hint: 'Look for evidence of decreasing unit costs as volume increases'
  },
  {
    id: 'costStructure',
    name: 'Cost Structure',
    description: 'Analyze fixed vs variable costs and operational leverage',
    weight: 0.20,
    hint: 'Consider the balance between fixed and variable costs'
  }
];

const UnitEconomicsAnalysis = ({ onScoreUpdate, financialData }: Props) => {
  const [scores, setScores] = useState<Record<string, number>>({
    grossMargin: 0,
    operatingMargin: 0,
    scaleEconomics: 0,
    costStructure: 0
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
        <CardTitle>Unit Economics Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        {financialData && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Financial Metrics</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Gross Margin</p>
                <p className="font-medium">{financialData.grossMargin?.toFixed(2)}%</p>
              </div>
              <div>
                <p className="text-gray-600">Operating Margin</p>
                <p className="font-medium">{financialData.operatingMargin?.toFixed(2)}%</p>
              </div>
            </div>
          </div>
        )}

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
              <p className="text-xs text-gray-400 italic">{metric.hint}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UnitEconomicsAnalysis;