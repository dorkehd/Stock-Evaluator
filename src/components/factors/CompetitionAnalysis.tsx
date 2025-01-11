import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CompetitionMetric {
  name: string;
  description: string;
  weight: number;
}

interface Props {
  score: number;
  onScoreChange: (score: number) => void;
  competitionData?: {
    competitors?: string[];
    marketShare?: number;
  };
}

const CompetitionAnalysis = ({ score, onScoreChange, competitionData }: Props) => {
  const metrics: CompetitionMetric[] = [
    {
      name: 'Competition Intensity',
      description: 'Evaluate the level of competition in the industry',
      weight: 25
    },
    {
      name: 'Entry Barriers',
      description: 'Assess barriers to entry for new competitors',
      weight: 25
    },
    {
      name: 'Competitive Advantages',
      description: 'Consider sustainable competitive advantages',
      weight: 25
    },
    {
      name: 'Market Position',
      description: 'Analyze market share and positioning trends',
      weight: 25
    }
  ];

  const handleMetricScore = (metricScore: number, weight: number) => {
    const weightedScore = (metricScore * weight) / 100;
    onScoreChange(weightedScore);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Competition Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        {competitionData && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="font-medium">Competition Overview:</p>
            <p>Market Share: {competitionData.marketShare?.toFixed(1)}%</p>
            {competitionData.competitors && (
              <div>
                <p className="font-medium mt-2">Key Competitors:</p>
                <ul className="list-disc list-inside">
                  {competitionData.competitors.map((competitor, index) => (
                    <li key={index}>{competitor}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        <div className="space-y-6">
          {metrics.map((metric) => (
            <div key={metric.name} className="space-y-2">
              <Label className="text-base font-semibold">
                {metric.name} ({metric.weight}%)
              </Label>
              <p className="text-sm text-gray-500">{metric.description}</p>
              <div className="flex items-center gap-4">
                <Input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="Score (0-100)"
                  onChange={(e) => handleMetricScore(Number(e.target.value), metric.weight)}
                  className="w-32"
                />
                <span className="text-sm text-gray-500">Score out of 100</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CompetitionAnalysis;