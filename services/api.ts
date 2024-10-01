import axios from 'axios';
import { Platform } from 'react-native';

const baseURL = 'https://quizzyredis-production.up.railway.app'

const api = axios.create({
    baseURL: baseURL,
    timeout: 20000,
    // rejectUnauthorized: true,
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
    },
});

api.interceptors.request.use(request => {
    // console.log('Starting Request', request);
    return request;
});

api.interceptors.response.use(response => {
    // console.log('Response:', response);
    return response;
}, error => {
    console.error('Error:', error);
    return Promise.reject(error);
});

if (Platform.OS === 'android') {
    api.defaults.httpsAgent = {
        rejectUnauthorized: false,
    };
}

const apiEndpoints = {
    login: async ({ registrationNumber, password, androidId }: { registrationNumber: string, password: string, androidId: string }) => {
        try {
            const response = await api.post('/student-login', { registrationNumber, password, androidId });
            return { token: response.data.token, status: response.status };
        } catch (error) {
            throw error;
        }
    },
    logout: async ({ authToken }: { authToken: string }) => {
        try {

            api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
            const response = await api.post('/student-logout');
            return response;
        } catch (error) {
            throw error;
        }
    },
    register: async ({ name, registrationNumber, email, password, batch, branch, section, course, androidId }: { name: string, registrationNumber: string, email: string, password: string, batch: string, branch: string, section: string, course: string, androidId: string }) => {
        try {
            const response = await api.post('/student-register', {
                name, registrationNumber, email, password, batch, branch, section, course, androidId
            });

            return { status: response.status };
        } catch (error) {
            return error;
        }
    },
    getProfile: async ({ authToken }: { authToken: string }) => {
        try {
            api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
            const response = await api.get('/student-profile');
            return response.data;
        } catch (error) {
            throw error;
        } finally {
            delete api.defaults.headers.common['Authorization'];
        }
    },

    joinQuiz: async ({ quizId, password, authToken }: { quizId: string, password: string, authToken: string }) => {
        try {
            api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
            const response = await api.post('/join-quiz', { quizId, password });
            return response;
        } catch (error) {
            throw error;
        }
    },
    getMyResults: async ({ authToken }: { authToken: string }) => {
        try {

            api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
            const response = await api.get('/my-results');
            return { results: response.data.quizResults, status: response.status };
        } catch (error) {
            throw error;
        }
    },

    scoreCounter: async ({ registrationNumber, quizId, responses, authToken }: { registrationNumber: string, quizId: string, responses: string, authToken: string }) => {
        try {
            api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
            const response = await api.post('/score-counter', { registrationNumber, quizId, responses });
            return response;
        } catch (error) {
            throw error;
        }
    }

};

export default apiEndpoints;
