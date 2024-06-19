import React from 'react'

const Image = ({input,handleChange}) => {
  const{type,id,src,alt,style}=input
  return (
    <div>
      <label htmlFor={type}>{type ? type :"Image"}</label>
                            <input
                                type={type}
                                id={id?id:type}
                                src={src?src:''}
                                alt={alt?alt:"Image Preview"}
                                style={style?style:"display:none;max-widhth:100%;height:auto;"}
                                onChange={handleChange}
                                
                            />
    </div>
  )
}

// import React, { useState } from 'react';

// const ImageUploadComponent = ({
//     id,
//     name,
//     src,
//     alt,
//     style,
//     handleChange
// }) => {
//     const [imageSrc, setImageSrc] = useState(src);

//     const onFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = () => {
//                 setImageSrc(reader.result);
//                 handleChange(e); // Pass the event to handleChange prop
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     return (
//         <div>
//             <input
//                 type="file"
//                 id={id ? id : "file"}
//                 name={name ? name : "file"}
//                 accept="image/*"
//                 onChange={onFileChange}
//                 style={{ display: "block", marginBottom: "10px" }}
//             />
//             {imageSrc && (
//                 <img
//                     src={imageSrc}
//                     alt={alt ? alt : "Image Preview"}
//                     style={style ? style : { maxWidth: "100%", height: "auto" }}
//                 />
//             )}
//         </div>
//     );
// };

// export default ImageUploadComponent;



// import React from 'react';
// import ImageUploadComponent from './ImageUploadComponent';

// const App = () => {
//     const handleFileChange = (e) => {
//         // Handle the file change event if needed
//         console.log("File selected:", e.target.files[0]);
//     };

//     return (
//         <div>
//             <h1>Upload an Image</h1>
//             <ImageUploadComponent
//                 id="imageUpload"
//                 name="imageUpload"
//                 alt="Image Preview"
//                 handleChange={handleFileChange}
//                 style={{ maxWidth: "100%", height: "auto" }}
//             />
//         </div>
//     );
// };

// export default App;

export default Image
