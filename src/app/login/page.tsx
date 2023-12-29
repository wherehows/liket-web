import ColoredLogo from "@/icons/color-logo.svg";
import KaKaoLogin from "@/icons/kakao-login.svg";
import AppleLogin from "@/icons/apple-login.svg";
import NaverLogin from "@/icons/naver-login.svg";
import Header from "@/components/Header";
import Divider from "@/components/Divider";

const Page = () => {
  return (
    <>
      <Header>
        <Header.LeftOption
          option={{
            back: true,
          }}
        />
      </Header>
      <div className="flex grow flex-col items-center justify-center">
        <ColoredLogo />
        <button className="mt-[48px] mb-[16px]">
          <KaKaoLogin />
        </button>
        <button className="mb-[16px]">
          <AppleLogin />
        </button>
        <button className="mb-[29px]">
          <NaverLogin />
        </button>
        <div className="flex items-center mb-[38px]">
          <Divider height="1px" width="48px" />
          <span className="text-body5 text-grey-04 ml-[16px] mr-[16px]">
            또는
          </span>
          <Divider height="1px" width="48px" />
        </div>
        <div className="flex items-center">
          <button className="text-grey-03 text-button6 mr-[16px]">
            이메일로 로그인
          </button>
          <Divider height="8px" width="1px" orientation="vertical" />
          <button className="text-grey-03 text-button6 ml-[16px]">
            이메일로 회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
