import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Props {
  score: number;
  onScoreChange: (score: number) => void;
}

const MarketAnalysis = ({ score, onScoreChange }: Props) => {
  const metrics = [
    { name: 'Total Addressable Market Size', weight: 30 },
    { name: 'Market Growth Rate', weight: 30 },
    { name: 'Market Share Potential', weight: 20 },
    { name: 'Adjacent Opportunities', weight: 20 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Analysis</CardTitle>
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

export default MarketAnalysis;