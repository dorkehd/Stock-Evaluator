import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Props {
  scores: {
    customerValue: number;
    unitEconomics: number;
    marketSize: number;
    competition: number;
    risks: number;
    valuation: number;
  };
}

const ScoreChart = ({ scores }: Props) => {
  const data = [
    { name: 'Customer Value', score: scores.customerValue * 100, weight: 10 },
    { name: 'Unit Economics', score: scores.unitEconomics * 100, weight: 15 },
    { name: 'Market Size', score: scores.marketSize * 100, weight: 10 },
    { name: 'Competition', score: scores.competition * 100, weight: 10 },
    { name: 'Risks', score: scores.risks * 100, weight: 15 },
    { name: 'Valuation', score: scores.valuation * 100, weight: 40 }
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="score" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ScoreChart;