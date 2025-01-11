import StockEvaluator from '@/components/StockEvaluator';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Stock Evaluator</h1>
      <StockEvaluator />
    </div>
  );
}
