import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("올바른 이메일을 입력해주세요."),
  password: z.string().min(8, "8자 이상 입력해주세요."),
});

const meta = {
  title: "components/Input",
};

export default meta;

export const Index = {
  render: function Render() {
    const methods = useForm({
      mode: "onBlur",
      defaultValues: {
        email: "",
        password: "",
      },
      resolver: zodResolver(schema),
    });

    const {
      handleSubmit,
      formState: { isValid },
    } = methods;

    const onSubmit = () => {};

    return (
      <>
        <FormProvider {...methods}>
          <form
            className="flex flex-col grow pt-[16px] px-[24px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input margin="0 0 30px 0">
              <Input.Label htmlFor="email">이메일</Input.Label>
              <Input.Content id="email" placeholder="이메일 입력" />
              <Input.Button disabled={true} onClick={() => {}}>
                인증받기
              </Input.Button>
              <Input.Text isShown={false}>03분 00초</Input.Text>
            </Input>
            <Input margin="0 0 30px 0">
              <Input.Label htmlFor="password">비밀번호</Input.Label>
              <Input.Content
                id="password"
                type="passwor"
                placeholder="비밀번호 입력"
              />
            </Input>
            <Input margin="0 0 30px 0">
              <Input.Label htmlFor="password-check">이메일</Input.Label>
              <Input.Content id="password-check" placeholder="이메일 입력" />
              <Input.Button disabled={false} onClick={() => {}}>
                인증받기
              </Input.Button>
              <Input.Text isShown={false}>03분 00초</Input.Text>
            </Input>
            <Input margin="0 0 30px 0">
              <Input.Label htmlFor="check-number">인증 번호 확인</Input.Label>
              <Input.Content id="check-number" placeholder="인증번호 확인" />
              <Input.Button disabled={false} onClick={() => {}}>
                인증받기
              </Input.Button>
              <Input.Text isShown={false}>03분 00초</Input.Text>
            </Input>
          </form>
        </FormProvider>
      </>
    );
  },
};
