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
import { gql, useMutation } from "@apollo/client";
import { logUserIn } from "../apollo";

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

export default function Login() {
  const onCompleted = (data: any) => {
    const {
      login: { ok, error, token },
    } = data;
    if (token) {
      logUserIn(token);
    }
  };
  const [login, { loading }] = useMutation(LOGIN_MUTATION, { onCompleted });
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (loading || username === "" || password === "") return;
    try {
      login({
        variables: {
          username,
          password,
        },
      });
      navigate("/");
    } catch (e) {
      // if (e instanceof FirebaseError) {
      //   setError(e.message);
      // }
    } finally {
    }
  };
  return (
    <Wrapper>
      <Title>Dbus</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="name"
          value={username}
          placeholder="사용자 이름, 이메일 주소 또는 휴대폰 번호"
          type="text"
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
        <Input type="submit" value={loading ? "Loading..." : "로그인"} />
        {error !== "" ? <Error>{error}</Error> : null}
        <Switcher>
          <StyledLink to="/create-account">비밀번호를 잊으셨나요?</StyledLink>
        </Switcher>
      </Form>

      <NewAccountButton />
    </Wrapper>
  );
}
