import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Props {
  score: number;
  onScoreChange: (score: number) => void;
}

const CustomerValueAnalysis = ({ score, onScoreChange }: Props) => {
  const criteria = [
    'Brand Recognition and Loyalty',
    'Customer Satisfaction Metrics',
    'Net Promoter Score',
    'Pricing Power',
    'Customer Retention Rate'
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Customer Value Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {criteria.map((criterion, index) => (
            <div key={index} className="space-y-2">
              <label className="text-sm font-medium">{criterion}</label>
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

export default CustomerValueAnalysis;