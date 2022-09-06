import dotenv from 'dotenv';

dotenv.config();

export const {
    DEBUG_MODE,
    JWT_SECRET,
    REFRESH_SECRET,
    APP_URL,
    DATABASE_URI
} = process.env;

