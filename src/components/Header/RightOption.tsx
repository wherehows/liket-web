import { IconButtonOption, XOR } from "@/types/common";

import SearchIcon from "@/icons/search.svg";
import LikeIcon from "@/icons/like.svg";
import CreateIcon from "@/icons/create.svg";
import MenuIcon from "@/icons/menu.svg";
import SaveIcon from "@/icons/save.svg";

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
    const Search = option.search && (
      <button>
        <SearchIcon />
      </button>
    );
    const Like = option.like && (
      <button>
        <LikeIcon />
      </button>
    );
    const Create = option.create && (
      <button>
        <CreateIcon></CreateIcon>
      </button>
    );
    const Menu = option.menu && (
      <button>
        <MenuIcon />
      </button>
    );
    const Save = option.save && (
      <button>
        <SaveIcon />
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
