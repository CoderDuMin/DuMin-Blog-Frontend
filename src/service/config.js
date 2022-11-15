const devBaseURL = "http://codedeep.cn:5506/api";
const proBaseURL = "http://codedeep.cn:5506/api";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 10000;