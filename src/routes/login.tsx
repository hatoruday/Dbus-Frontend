import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Error,
  Form,
  Input,
  Switcher,
  Title,
  Wrapper,
} from "../components/auth-components";
import NewAccountButton from "../components/newAccountBtn";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (isLoading || email === "" || password === "") return;
    try {
      setLoading(true);
      //await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      // if (e instanceof FirebaseError) {
      //   setError(e.message);
      // }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <Title>Dbus</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="email"
          value={email}
          placeholder="사용자 이름, 이메일 주소 또는 휴대폰 번호"
          type="email"
          required
        />
        <Input
          onChange={onChange}
          value={password}
          name="password"
          placeholder="비밀번호"
          type="password"
          required
        />
        <Input type="submit" value={isLoading ? "Loading..." : "로그인"} />
        {error !== "" ? <Error>{error}</Error> : null}
        <Switcher>
          <StyledLink to="/create-account">비밀번호를 잊으셨나요?</StyledLink>
        </Switcher>
      </Form>

      <NewAccountButton />
    </Wrapper>
  );
}
