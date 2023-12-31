import { IconButtonOption, XOR } from "@/types/common";

import SearchIcon from "@/icons/search.svg";
import LikeIcon from "@/icons/like.svg";
import CreateIcon from "@/icons/create.svg";
import MenuIcon from "@/icons/menu.svg";
import SaveIcon from "@/icons/save.svg";
import { colors } from "@/utils/style";

type RightOptionProps = XOR<
  {
    text: string;
  },
  {
    option: {
      search?: IconButtonOption;
      like?: IconButtonOption;
      create?: IconButtonOption;
      menu?: IconButtonOption;
      save?: IconButtonOption;
    };
  }
>;

const RightOption = ({ text, option }: RightOptionProps) => {
  if (text) {
    return <button>{text}</button>;
  }

  if (option) {
    const { search, like, create, menu, save } = option;

    const Search = search && (
      <button>
        <SearchIcon />
      </button>
    );
    const Like = like && (
      <button>
        <LikeIcon />
      </button>
    );
    const Create = create && (
      <button>
        <CreateIcon />
      </button>
    );
    const Menu = menu && (
      <button>
        <MenuIcon />
      </button>
    );

    const saveDisabled = save && typeof save !== "boolean" && !!save.disabled;
    const Save = save && (
      <button disabled={saveDisabled}>
        <SaveIcon
          fill={saveDisabled ? colors.grey["01"] : colors.skyblue["01"]}
        />
      </button>
    );

    return (
      <div className="flex gap-[18px]">
        {[Search, Like, Create, Menu, Save]}
      </div>
    );
  }
};

export default RightOption;
