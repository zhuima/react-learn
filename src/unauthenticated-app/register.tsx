import React from "react";
import { UserAuth } from "../context/auth-context";
import { Form, Input } from "antd";
import { LongButton } from ".";
// const apiUrl = process.env.REACT_APP_API_URL;
export const RegisterScreen = () => {
  // const login = (param: { username: string; password: string }) => {
  //   fetch(`${apiUrl}/login`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(param),
  //   }).then(async (response) => {
  //     if (response.ok) {
  //       console.log("success");
  //     }
  //   });
  // };

  const { register } = UserAuth();

  //   const handleSubmit = (values: FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     const username = (event.currentTarget.elements[0] as HTMLInputElement)
  //       .value;
  //     const password = (event.currentTarget.elements[1] as HTMLInputElement)
  //       .value;
  //     login({ username, password });
  //   };

  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder={"密码"} type="password" id={"password"} />
      </Form.Item>

      <Form.Item>
        <LongButton type={"primary"}>注册</LongButton>
      </Form.Item>
    </Form>
  );
};
