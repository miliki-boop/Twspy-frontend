import React from 'react';
import './index.css';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useParams } from 'react-router-dom';
import Home_content from './Home_content';

const { Header, Content, Footer } = Layout;

const Home: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout" style={{ height: '100vh' }}>
      <Header style={{ display: 'flex'}} className="css-1m6c83y">
        <div className="rg2km" style={{flexFlow: "nowrap", height: "64px"}}>
          <div className='md-6'>
            <h1>
              <a className='if06k' href='/index'>
                <span >Twspy</span>
              </a>
            </h1>
          </div>
        </div>
      </Header>
      <Content style={{ flex: 1, padding: '0 50px' }}>
        <Home_content id={id}></Home_content>
      </Content>
      <Footer style={{ textAlign: 'center' }}>zhangheng shi sb</Footer>
    </Layout>
  );
};

export default Home;