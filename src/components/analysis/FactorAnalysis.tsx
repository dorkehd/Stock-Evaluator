import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface AnalysisProps {
  title: string;
  metrics: Array<{
    id: string;
    name: string;
    description: string;
    weight: number;
  }>;
  onScoreUpdate: (scores: Record<string, number>) => void;
}

const FactorAnalysis: React.FC<AnalysisProps> = ({ title, metrics, onScoreUpdate }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {metrics.map(metric => (
          <div key={metric.id} className="mb-4">
            <label className="block text-sm font-medium">{metric.name}</label>
            <p className="text-sm text-gray-500">{metric.description}</p>
            <Input 
              type="number" 
              min={0} 
              max={100}
              className="mt-1" 
              onChange={(e) => {
                const value = parseInt(e.target.value) || 0;
                onScoreUpdate({ [metric.id]: value * metric.weight });
              }}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default FactorAnalysis;