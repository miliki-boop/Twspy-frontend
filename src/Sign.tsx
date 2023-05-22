import React from 'react';
import './index.css';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import { Link } from 'bisheng/router';
import Sign_content from './Sign_content';

const { Header, Content, Footer } = Layout;

const Sign: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout" style={{ height: '100vh' }}>
      <Header style={{ display: 'flex'}} className="css-1m6c83y">
        <div className="css-15rg2km" style={{flexFlow: "nowrap", height: "64px"}}>
          <div className='ant-col-md-6'>
            <h1>
              <a className='css-10if06k' href='/index'>
                <span className="css-zsb1p1">Twspy</span>
              </a>
            </h1>
          </div>
        </div>
      </Header>
      <Content style={{ flex: 1, padding: '0 50px' }}>
        <Sign_content></Sign_content>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default Sign;