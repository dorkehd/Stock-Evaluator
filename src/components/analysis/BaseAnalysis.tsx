import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface BaseProps {
  title: string;
  metrics: any[];
  onScoreUpdate: (score: number) => void;
}

export const BaseAnalysis = ({ title, metrics, onScoreUpdate }: BaseProps) => {
  const [scores, setScores] = useState<Record<string, number>>({});

  const handleScoreChange = (metricId: string, value: number) => {
    const newScores = { ...scores, [metricId]: value };
    setScores(newScores);
    
    const totalScore = metrics.reduce((acc, metric) => {
      return acc + (newScores[metric.id] || 0) * metric.weight;
    }, 0);
    
    onScoreUpdate(totalScore);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {metrics.map(metric => (
          <div key={metric.id} className="mb-4">
            <label className="block mb-2">{metric.name}</label>
            <Input
              type="number"
              min="0"
              max="100"
              value={scores[metric.id] || 0}
              onChange={e => handleScoreChange(metric.id, Number(e.target.value))}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
