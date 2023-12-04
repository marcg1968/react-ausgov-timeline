// Main.js

import React, { useEffect, useState } from 'react'
import { Layout, Space } from 'antd'
import MyTimeline from './MyTimeline'
const { Header, Footer, Content } = Layout

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
    paddingBottom: '.8rem',
}
const h2Style = {
    margin: 0,
    lineHeight: '1.67rem',
}

const Main = () => {

    const [ dims, setDims ] = useState(null)

    const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        // height: 100,
        height: dims?.width < 600 ? 200 : 100,
        // paddingInline: 50,
        // lineHeight: '64px',
        lineHeight: '2rem',
        // backgroundColor: '#7dbcea',
        backgroundColor: 'rgb(13, 94, 153)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }

    useEffect(() => {
        const handleResize = () => {
            const { innerHeight, innerWidth } = window
            setDims({
                height: innerHeight,
                width: innerWidth,
            })
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Space
            direction="vertical"
            style={{ width: '100%', }}
            size={[0, 48]}
        >
            <Layout>
                <Header style={headerStyle}>
                    {/* {dims?.width}  */}
                    <h1 style={h1Style}>Timeline of Australian Prime Ministers</h1>
                    <h2 style={h2Style}>(in reverse chronological order)</h2>
                </Header>
                <Content style={contentStyle}>
                    <MyTimeline
                        {...dims}
                    />
                </Content>
                <Footer style={footerStyle}>
                    &copy; Copyright {(new Date()).getFullYear()} &mdash; <a href="https://marcgreyling.tech" target="_blank">Marc Greyling</a>
                </Footer>
            </Layout>
        </Space>
    )
}

export default Main
