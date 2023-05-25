import React, { useRef,useState,useEffect,useLayoutEffect } from 'react';
import './index.css';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import Tweet_content from './Tweet_content';
import { useParams } from 'react-router-dom';
const { Header, Content, Footer } = Layout;


const Tweet = () => {
    const { id,privacy } = useParams();
    const [childHeight, setChildHeight] = useState(0);
    const childRef = useRef(null);
  
    const handleChildHeight = (height) => {
      setChildHeight(height);
    };

    return (
      <Layout className="layout" style={{ height: childHeight + 100 }}>
        <Header style={{ display: 'flex' }} className="css-1m6c83y">
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
        <Content style={{ padding: '0 50px', height:  childHeight }}>
          <Tweet_content
            id={id}
            ref={childRef}
            privacy={privacy}
            onHeightChange={handleChildHeight} // 传递回调函数给子组件
          />
        </Content>
        <Footer style={{ textAlign: 'center' }}>zhangheng shi sb</Footer>
      </Layout>
    );
  };


export default Tweet;