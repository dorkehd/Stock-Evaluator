export async function fetchStockData(symbol: string) {
  try {
    // For development, return mock data
    return {
      symbol,
      companyName: 'Mock Company',
      price: 100,
      change: 2.5,
      changePercent: 2.5,
      marketCap: 1000000000,
      peRatio: 15,
      volume: 1000000
    };
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
}

export async function fetchCompanyProfile(symbol: string) {
  try {
    // For development, return mock data
    return {
      country: 'US',
      currency: 'USD',
      exchange: 'NASDAQ',
      finnhubIndustry: 'Technology',
      ipo: '2020-01-01',
      marketCapitalization: 1000000000,
      name: 'Mock Company',
      ticker: symbol,
      weburl: 'https://example.com'
    };
  } catch (error) {
    console.error('Error fetching company profile:', error);
    return null;
  }
}