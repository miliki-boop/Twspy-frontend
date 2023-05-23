import React, { useRef,useState,useEffect } from 'react';
import './index.css';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import Tweet_content from './Tweet_content';

const { Header, Content, Footer } = Layout;


const Tweet: React.FC = () => {
    const tweetContentRef = useRef<HTMLDivElement | null>(null);
    const [contentHeight, setContentHeight] = useState(0);
  
    useEffect(() => {
      if (tweetContentRef.current) {
        const height = tweetContentRef.current.offsetHeight;
        setContentHeight(height);
      }
    }, []);


  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout" style={{ height: contentHeight+100 }}>
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
      <Content style={{ padding: '0 50px' ,height: contentHeight}}>
        <Tweet_content ref={tweetContentRef}></Tweet_content>
      </Content>
      <Footer style={{ textAlign: 'center' }}>zhangheng shi sb</Footer>
    </Layout>
  );
};

export default Tweet;