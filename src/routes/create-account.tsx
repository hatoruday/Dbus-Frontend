import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Switcher,
  Title,
  Wrapper,
} from "../components/auth-components";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e; //Input 태그에서 name property로 전부 다 설정했기 때문에 이벤트에서 name을 다 똑같이 받을 수 있다. 모든 변화에 대한 정보를
    if (name === "name") {
      setName(value);
    } else if (name == "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //화면이 새로고침되지 않도록 넣어주는 것.

    if (isLoading || name === "" || email === "" || password === "") return;
    try {
      setLoading(true);

      navigate("/");
    } catch (e) {
      //뭔가를 함!
    } finally {
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <Title>DBUS 회원가입</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="이름"
          value={name}
          placeholder="name"
          type="text"
          required
        />
        <Input
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          required
        />
        <Input
          onChange={onChange}
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          required
        />
        <Input type="submit" value={isLoading ? "Loading..." : "회원가입"} />
      </Form>
      {/*error !== "" ? <Error>{error}</Error> : null*/}
      <Switcher>
        이미 계정이 있나요? <Link to="/login">Log in &rarr; </Link>
      </Switcher>
    </Wrapper>
  );
}
