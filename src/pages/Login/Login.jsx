import React from "react";
import { Layout, Row, Col, Button } from "antd";
import Cookies from "js-cookie";

function Login() {
  const { Header } = Layout;
  const login = () => {
    Cookies.set('token', '1234');
    window.location.pathname = '/'
  };
  return (
    <Layout>
    <Header>
      <Row justify="space-between">
        <Col>
          <Button onClick={login}>
            Login
          </Button>
        </Col>
      </Row>
    </Header>
  </Layout>
  );
}

export default Login;
