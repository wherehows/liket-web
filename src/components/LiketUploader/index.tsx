import Image from "next/image";
import { useRef, useState } from "react";

const LiketUploader = () => {
  const [file, setFile] = useState<File | undefined>();
  const inputRef = useRef<HTMLInputElement>(null);
  const url = file && URL.createObjectURL(file);

  return (
    <div className="bg-[url(/icons/create.svg)] bg-[center_193px] bg-no-repeat flex justify-center items-center w-[294px] h-[468px] rounded-[8px] border-[2px] border-solid divide-gray-01 relative">
      {url ? (
        <Image
          src={url}
          fill
          objectFit="contain"
          alt="유저가 포토 카드에 올린 이미지"
        />
      ) : (
        <>
          <label
            htmlFor="image-uploader"
            className="text-center text-body5 text-grey-02 mt-[110px] cursor-pointer"
          >
            이미지를 추가해
            <br />
            나만의 티켓을 만들어보세요.
          </label>
          <input
            id="image-uploader"
            ref={inputRef}
            accept="image/*"
            type="file"
            hidden
            onChange={(e) => {
              const files = e.target.files;

              if (files) {
                setFile(files[0]);
              }
            }}
          />
        </>
      )}
    </div>
  );
};

export default LiketUploader;
