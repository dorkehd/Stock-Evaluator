import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Props {
  score: number;
  onScoreChange: (score: number) => void;
  metrics?: {
    pe_ratio?: number;
    price_to_book?: number;
    ev_to_ebitda?: number;
  };
}

const ValuationAnalysis = ({ score, onScoreChange, metrics }: Props) => {
  const criteria = [
    'P/E Ratio Analysis',
    'Price-to-Book Analysis',
    'EV/EBITDA Analysis',
    'DCF Valuation',
    'Relative Valuation'
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Valuation Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {metrics && (
            <div className="mb-4 p-4 bg-gray-50 rounded">
              <p>Current P/E: {metrics.pe_ratio?.toFixed(2)}</p>
              <p>Price/Book: {metrics.price_to_book?.toFixed(2)}</p>
              <p>EV/EBITDA: {metrics.ev_to_ebitda?.toFixed(2)}</p>
            </div>
          )}
          
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

export default ValuationAnalysis;