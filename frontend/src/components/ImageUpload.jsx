import React from "react";

const ImageUpload = ({ onImageChange }) => {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">Upload Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={onImageChange}
        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer p-2"
      />
    </div>
  );
};

export default ImageUpload;