const API_KEY = process.env.NEXT_PUBLIC_STOCK_API_KEY;

export async function fetchStockData(symbol: string) {
  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
}

export async function fetchCompanyProfile(symbol: string) {
  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching company profile:', error);
    return null;
  }
}

export async function fetchPeers(symbol: string) {
  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/stock/peers?symbol=${symbol}&token=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching peer companies:', error);
    return null;
  }
}