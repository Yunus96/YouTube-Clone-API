import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

    // Configuration
    cloudinary.config({ 
        CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET// Click 'View Credentials' below to copy your API secret
    });