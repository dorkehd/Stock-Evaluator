const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/query';

export async function fetchStockData(symbol: string) {
  try {
    const response = await fetch(
      `${BASE_URL}?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
}

export async function fetchStockPrice(symbol: string) {
  try {
    const response = await fetch(
      `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching stock price:', error);
    throw error;
  }
}

export async function fetchFinancialMetrics(symbol: string) {
  try {
    const response = await fetch(
      `${BASE_URL}?function=INCOME_STATEMENT&symbol=${symbol}&apikey=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching financial metrics:', error);
    throw error;
  }
}