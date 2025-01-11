import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Props {
  score: number;
  onScoreChange: (score: number) => void;
  stockData?: any;
}

const ValuationAnalysis = ({ score, onScoreChange, stockData }: Props) => {
  const metrics = [
    { name: 'P/E Ratio vs Historical', weight: 25 },
    { name: 'P/E Ratio vs Peers', weight: 25 },
    { name: 'DCF Analysis', weight: 25 },
    { name: 'Growth Assumptions', weight: 25 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Valuation Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stockData && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Current P/E: {stockData.peRatio}</p>
              <p>Industry Avg P/E: {stockData.industryPE}</p>
              <p>5Y Avg P/E: {stockData.historicalPE}</p>
            </div>
          )}
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

export default ValuationAnalysis;