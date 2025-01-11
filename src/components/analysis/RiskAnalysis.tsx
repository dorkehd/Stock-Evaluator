import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Props {
  score: number;
  onScoreChange: (score: number) => void;
}

const RiskAnalysis = ({ score, onScoreChange }: Props) => {
  const riskFactors = [
    'Market Risk',
    'Financial Risk',
    'Operational Risk',
    'Regulatory Risk',
    'Competition Risk'
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Risk Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {riskFactors.map((factor, index) => (
            <div key={index} className="space-y-2">
              <label className="text-sm font-medium">{factor}</label>
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

export default RiskAnalysis;