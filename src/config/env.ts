import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const env = {
    port: parseInt(process.env.PORT, 10)
    , databaseURL: process.env.MONGODB_URI
    , jwtSecret: process.env.JWT_SECRET
    , jwtAlgorithm: process.env.JWT_ALGO

    /**
     * Used by winston logger
     */
    , logs: {
        level: process.env.LOG_LEVEL || 'silly',
    }

    /**
     * Agenda.js stuff
     */
    , agenda: {
        dbCollection: process.env.AGENDA_DB_COLLECTION,
        pooltime: process.env.AGENDA_POOL_TIME,
        concurrency: parseInt(process.env.AGENDA_CONCURRENCY, 10),
    }

    /**
     * Agendash config
     */
    , agendash: {
        user: 'agendash',
        password: '123456'
    }

    , api: {
        prefix: '/api'
    }
};

export default env;