import React, { useRef,useState,useEffect } from 'react';
import './index.css';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import Tweet_content from './Tweet_content';
import { useParams } from 'react-router-dom';
const { Header, Content, Footer } = Layout;


const Tweet = () => {
    const { id } = useParams();
    const tweetContentRef = useRef(null);
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
      <div className="rg2km" style={{flexFlow: "nowrap", height: "64px"}}>
          <div className='md-6'>
            <h1>
              <a className='if06k' href='/index'>
                <span className="css-zsb1p1">Twspy</span>
              </a>
            </h1>
          </div>
        </div>
      </Header>
      <Content style={{ padding: '0 50px' ,height: contentHeight}}>
        <Tweet_content id={id} ref={tweetContentRef}></Tweet_content>
      </Content>
      <Footer style={{ textAlign: 'center' }}>zhangheng shi sb</Footer>
    </Layout>
  );
};

export default Tweet;