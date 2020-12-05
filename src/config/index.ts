import dotenv from 'dotenv';

const envPath = './src/properties/.env.dev';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config({
    path : envPath
});

if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {

    port: parseInt(process.env.PORT, 10),

    databaseURL: process.env.MONGODB_URI,

    jwtSecret: process.env.JWT_SECRET,
    jwtAlgorithm: process.env.JWT_ALGO,

    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
    api: {
        prefix: '/api',
    }
};