import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

  // Configuration
  cloudinary.config({ 
    cloud_name: 'dz3eclhlq', 
    api_key: '873714263596224', 
    api_secret: '-lSuBLHu7Z7TVuGVwOjJRwrYRE0' // Click 'View Credentials' below to copy your API secret
});


 export const uploadOnCloudinary = async function(file) {
    try {
        if(!file) return null

      const response = await  cloudinary.uploader.upload(file,{
            resource_type:"auto"
        })
        console.log("file is upload on the cloudinary",response.url);
        fs.unlinkSync(file)
        console.log(" in the cloud",file);
        return response
      
    } catch (error) {
        console.log("error on upload the cloudinary",error.message);
    }
}


