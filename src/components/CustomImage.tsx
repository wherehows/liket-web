/* eslint-disable jsx-a11y/alt-text */
// Props로 넘겨받을 때 이미 prop check
import Image, { ImageProps } from "next/image";
import { If, Then, Else } from "react-if";

const CustomImage = ({ src, ...props }: ImageProps) => {
  return (
    <>
      <If condition={!!src}>
        <Then>
          <Image src={src} {...props} />
        </Then>
        <Else>
          <div className="w-[100%] h-[100%] bg-grey-03 center">
            <Image
              src={"/icons/empty-img.png"}
              width={32}
              height={32}
              alt={props.alt}
            />
          </div>
        </Else>
      </If>
    </>
  );
};

export default CustomImage;
