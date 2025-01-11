export interface StockData {
  symbol: string;
  companyName: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: number;
  peRatio: number;
  volume: number;
}

export interface AnalysisScores {
  customerValue: number;
  unitEconomics: number;
  marketSize: number;
  competition: number;
  risks: number;
  valuation: number;
}

export interface FactorWeight {
  customerValue: 0.10;
  unitEconomics: 0.15;
  marketSize: 0.10;
  competition: 0.10;
  risks: 0.15;
  valuation: 0.40;
}

export interface CompanyProfile {
  country: string;
  currency: string;
  exchange: string;
  finnhubIndustry: string;
  ipo: string;
  logo: string;
  marketCapitalization: number;
  name: string;
  phone: string;
  shareOutstanding: number;
  ticker: string;
  weburl: string;
}