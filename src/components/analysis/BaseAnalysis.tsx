import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Metric, AnalysisProps, ScoreMap } from './types';

interface BaseAnalysisProps extends AnalysisProps {
  title: string;
  metrics: Metric[];
}

const BaseAnalysis = ({ title, metrics, onScoreUpdate, data }: BaseAnalysisProps) => {
  const [scores, setScores] = useState<ScoreMap>(
    metrics.reduce((acc, metric) => ({ ...acc, [metric.id]: 0 }), {})
  );

  const handleScoreChange = (metricId: string, value: number) => {
    const newScores = { ...scores, [metricId]: value };
    setScores(newScores);

    const totalScore = metrics.reduce((acc, metric) => {
      return acc + (newScores[metric.id] * metric.weight);
    }, 0);

    onScoreUpdate(totalScore);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
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
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BaseAnalysis;