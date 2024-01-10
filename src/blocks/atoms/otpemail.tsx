import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type Props = {
  otp: string;
};

export const OtpEmail = ({ otp }: Props) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className=" shadow-lg">
        <Container className=" border flex flex-col items-center gap-5 bg-[rgb(255,255,255)] font-sans text-xl">
          <Text className=" text-center text-xl">
            <b>Hello</b>
          </Text>
          <Text className=" text-center text-xl">
            Please use the verification code below on the Cosmic Kids Club
            website
          </Text>
          <Text className=" text-center text-xl">
            <strong>{otp}</strong>
          </Text>
          <Text className="text-center text-xl">
            If you didnt request this , you can ignore this email safely
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
