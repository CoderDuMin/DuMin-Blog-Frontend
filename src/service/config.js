const devBaseURL = "http://localhost:5002/api";
const proBaseURL = "http://localhost:5002/api";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 10000;