import React from "react";
import { Button, Form, Input, Card } from "antd";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../shared/context/auth-context";

const SignUp = () => {

  const auth = useContext(AuthContext)

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "500px",
          //   height: "400px",
          borderRadius: "16px",
          //   marginRight: "24px",
          boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h3 style={{ color: "navy" }}>Create a New Account</h3>

          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please enter a valid Username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter a valid e-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter a valid password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Link to="/users">
              <Button onClick={auth.login} type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignUp;
