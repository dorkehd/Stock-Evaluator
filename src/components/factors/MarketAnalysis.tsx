import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface MarketMetric {
  name: string;
  description: string;
  weight: number;
}

interface Props {
  score: number;
  onScoreChange: (score: number) => void;
  marketData?: {
    totalMarketSize?: number;
    growthRate?: number;
  };
}

const MarketAnalysis = ({ score, onScoreChange, marketData }: Props) => {
  const metrics: MarketMetric[] = [
    {
      name: 'Market Size',
      description: 'Evaluate the total addressable market (TAM) size',
      weight: 30
    },
    {
      name: 'Growth Rate',
      description: 'Assess the market\'s current and projected growth rate',
      weight: 30
    },
    {
      name: 'Market Share',
      description: 'Consider the company\'s potential market share capture',
      weight: 20
    },
    {
      name: 'Market Opportunities',
      description: 'Analyze potential expansion into adjacent markets',
      weight: 20
    }
  ];

  const handleMetricScore = (metricScore: number, weight: number) => {
    const weightedScore = (metricScore * weight) / 100;
    onScoreChange(weightedScore);
  };

  const formatMarketSize = (size?: number) => {
    if (!size) return 'N/A';
    if (size >= 1e12) return `$${(size / 1e12).toFixed(1)}T`;
    if (size >= 1e9) return `$${(size / 1e9).toFixed(1)}B`;
    if (size >= 1e6) return `$${(size / 1e6).toFixed(1)}M`;
    return `$${size.toLocaleString()}`;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Market Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        {marketData && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="font-medium">Market Metrics:</p>
            <p>Total Market Size: {formatMarketSize(marketData.totalMarketSize)}</p>
            <p>Market Growth Rate: {marketData.growthRate?.toFixed(1)}%</p>
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

export default MarketAnalysis;