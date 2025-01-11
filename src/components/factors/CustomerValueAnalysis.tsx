import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Props {
  score: number;
  onScoreChange: (score: number) => void;
}

const CustomerValueAnalysis = ({ score, onScoreChange }: Props) => {
  const metrics = [
    { name: 'Brand Recognition', weight: 25 },
    { name: 'Customer Satisfaction', weight: 25 },
    { name: 'Net Promoter Score', weight: 25 },
    { name: 'Pricing Power', weight: 25 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Value Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {metrics.map((metric) => (
            <div key={metric.name} className="space-y-2">
              <label className="text-sm font-medium">{metric.name} ({metric.weight}%)</label>
              <Input
                type="number"
                min="0"
                max="100"
                placeholder="Score (0-100)"
                className="w-full"
                onChange={(e) => {
                  const newScore = parseInt(e.target.value) || 0;
                  onScoreChange(newScore * metric.weight / 100);
                }}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerValueAnalysis;