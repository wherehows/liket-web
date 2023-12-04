import dynamic from "next/dynamic";
import useModalStore from "./store";
import { StrictPropsWithChildren } from "@/types/common";

type ModalProviderProps = StrictPropsWithChildren;

const ModalProvider = ({ children }: ModalProviderProps) => {
  const modalFileName = useModalStore(({ modalFileName }) => modalFileName);

  const Component = dynamic(() => import(`./${modalFileName}.tsx`), {
    ssr: false,
  });

  return (
    <>
      {!!modalFileName && <Component />}
      {children}
    </>
  );
};

export default ModalProvider;
