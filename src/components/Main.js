// Main.js

import React from 'react'
import { Layout, Space } from 'antd'
import MyTimeline from './MyTimeline'
const { Header, Footer, Content } = Layout

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 100,
    // paddingInline: 50,
    // lineHeight: '64px',
    // backgroundColor: '#7dbcea',
    backgroundColor: 'rgb(13, 94, 153)',
};
const contentStyle = {
    textAlign: 'center',
    color: '#fff',
    // backgroundColor: '#108ee9',
}
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
}
const h1Style = {
    margin: 0,
}
const h2Style = {
    margin: 0,
    lineHeight: '1rem',
}

const Main = () => {
    return (
        <Space
            direction="vertical"
            style={{ width: '100%', }}
            size={[0, 48]}
        >
            <Layout>
                <Header style={headerStyle}>
                    <h1 style={h1Style}>Timeline of Australian Prime Ministers</h1>
                    <h2 style={h2Style}>(in reverse chronological order)</h2>
                </Header>
                <Content style={contentStyle}>
                    <MyTimeline />
                </Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Space>
    )
}

export default Main
