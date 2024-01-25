import React from 'react';

const ImageEventsExample = () => {
  const handleImageLoad = () => {
    console.log('Image Loaded!');
  };

  const handleImageError = () => {
    console.log('Error Loading Image!');
  };

  return (

    <div>
         <img
      src="https://example.com/image.jpg"
      alt="Example Image"
      onLoad={handleImageLoad}
      onError={handleImageError}
    />
    </div>
   
  );
};

export default ImageEventsExample;
