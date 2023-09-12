"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BiImageAdd, BiTrash } from 'react-icons/bi';
import ImageUpload from './ImageUpload';

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: any) => void;
  onRemove: (value: string) => void;
  value: string | undefined;
}

const Upload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // const onUpload = (e: any) => {
  //   const reader = new FileReader();
  //   reader.addEventListener('load', () => {
  //     const url = reader.readAsDataURL(e.target.files[0]);
  //     console.log(url);
  //   })

  // };

  const onUpload = (e: any) => {
    const reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("loadend", () => {
      onChange(reader.result);
    });
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-4 w-full md:w-[500px]">
        <div className="relative w-full md:w-[500px] h-[400px] rounded-md overflow-hidden">
          <div className="z-10 absolute top-2 right-2">
            <button type="button" onClick={()=>{onRemove}}>
              <BiTrash className="h-4 w-4" />
            </button>
          </div>
          <Image
            fill
            className="object-cover"
            alt="Image"
            src={value || `/images/imageHolder.png`}
          />
        </div>
      </div>
      <ImageUpload onUpload={(e) => {
        onUpload(e);
      }} usedrag={true}>
        <button
          type="button"
          disabled={disabled}
        >
          <BiImageAdd className="h-4 w-4 mr-2" />
          Upload an Image
        </button>
      </ImageUpload>
    </div>
  );
}

export default Upload;