import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Props {
  score: number;
  onScoreChange: (score: number) => void;
}

const UnitEconomicsAnalysis = ({ score, onScoreChange }: Props) => {
  const metrics = [
    'Gross Margin',
    'Operating Margin',
    'Customer Acquisition Cost',
    'Lifetime Value',
    'Economies of Scale'
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Unit Economics Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <label className="text-sm font-medium">{metric}</label>
              <Input 
                type="range" 
                min="0" 
                max="100" 
                value={score} 
                onChange={(e) => onScoreChange(Number(e.target.value))}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UnitEconomicsAnalysis;