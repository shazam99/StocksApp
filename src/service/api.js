
const BASE_URL = 'https://cloud.iexapis.com/stable';

const api = {
    getStocks: async () => {
        try {
            const response = await fetch(`${BASE_URL}/ref-data/symbols?token=sk_1b83b39105bb47929e97dab629b75e28`);

            if (!response.ok) {
                throw new Error('Failed to fetch Stocks');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching Stocks:', error);
            throw error;
        }
    },

    getSingleStock: async (stock) => {
        try {
            const response = await fetch(`${BASE_URL}/stock/${stock}/quote?token=sk_1b83b39105bb47929e97dab629b75e28`);

            if (!response.ok) {
                throw new Error(`Failed to ${stock} data`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },

    getChartData: async (stock,range) => {
        try {
            const response = await fetch(`${BASE_URL}/stock/${stock}/chart/${range}?token=sk_1b83b39105bb47929e97dab629b75e28`);
            console.log(`${BASE_URL}/stock/${stock}/chart/${range}?token=sk_1b83b39105bb47929e97dab629b75e28`)

            if (!response.ok) {
                throw new Error(`Failed to ${stock} data`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },
};

export default api;
