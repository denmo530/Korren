import React, { useCallback } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { ImUpload } from 'react-icons/im';
import styles from '@/styles/ImageUpload.module.css';

declare global {
  let cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string[]) => void;
  value: string[];
}

interface UploadResponse {
  info: {
    secure_url: string;
    // Other properties if there are any
  };
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange }) => {
  const handleUpload = useCallback(
    (res: UploadResponse) => {
      onChange([...value, res.info.secure_url]);
    },
    [onChange, value]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="ifd3pju1"
      options={{
        maxFiles: 5
      }}>
      {({ open }) => {
        return (
          <button
            type="submit"
            className={styles.open}
            onKeyDown={(event) => (event.code === 'Enter' ? open?.() : null)}
            onClick={() => open?.()}>
            <ImUpload size={40} />
            <div className={styles.btn}>Upload image</div>
            {value.length > 0 && (
              <div className={styles.value}>
                {value.map((image, index) => (
                  <Image key={index} alt="Upload" fill style={{ objectFit: 'cover' }} src={image} />
                ))}
              </div>
            )}
          </button>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
