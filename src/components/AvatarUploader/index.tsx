import { getRefValue } from "@/utils/helpers";
import Image from "next/image";
import { useRef, useState } from "react";

const AvatarUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const imageUrl = file && URL.createObjectURL(file);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-[80px] h-[80px] relative">
      <div className="w-[100%] h-[100%] rounded-full relative overflow-hidden">
        <Image
          src={imageUrl ? imageUrl : "/icons/default-avatar.svg"}
          alt="아바타 이미지"
          fill
          objectFit="cover"
        />
      </div>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={(e) => {
          const files = e.target.files;

          if (files) {
            setFile(files[0]);
          }
        }}
      />
      <button
        className="absolute right-0 bottom-0"
        onClick={() => {
          getRefValue(inputRef).click();
        }}
      >
        <Image
          src="/icons/plus-24.svg"
          width={24}
          height={24}
          alt="아바타 업로드 버튼"
        />
      </button>
    </div>
  );
};

export default AvatarUploader;
