import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

    // Configuration
    cloudinary.config({ 
        CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
    });

    const uploadOnCloudinary = async (localFilePath) => {
        try {
            console.log(localFilePath);

            if (!localFilePath) {
                console.log("couldn't find local file path")
            } else {
                //upload the file on cloudinary
                const response = await cloudinary.uploader.upload(localFilePath, {
                    resource_type: 'auto'
                })
                return response;
            }

        } catch (error) {
           fs.unlinkSync(localFilePath) 
           return null;
        }
    }
    
    export {uploadOnCloudinary}