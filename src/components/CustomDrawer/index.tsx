import { StrictPropsWithChildren } from "@/types/common";
import Drawer, { DrawerProps } from "@mui/material/Drawer/Drawer";

type Props = StrictPropsWithChildren<DrawerProps>;

const Index = ({ children, ...props }: Props) => {
  return (
    <Drawer {...props}>
      <div className="mt-[24px]">{children}</div>
    </Drawer>
  );
};

export default Index;
