import React from "react";

export const ImageUpload = async (images) => {
   let imgArr =[];
   for (const item of images){
       const formData = new FormData();
       formData.append("file", item)
   }
};


