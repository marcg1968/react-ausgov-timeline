// MyTimeline.js

import React from 'react'
import {
    // ClockCircleOutlined,
    UserOutlined,
} from '@ant-design/icons'
import { Avatar, Space, Timeline } from 'antd'
import { pmlist } from '../common/functions'

const arr = pmlist()
// console.log(50, arr)
const listOfPMs = arr.map((e, i) => ({
    dot:  <><Avatar style={{ backgroundColor: e[5].match(/Labor/) ? 'red' : 'blue' }} icon={<UserOutlined />} />&nbsp;&nbsp;</>,
    color: e[5].match(/Labor/) ? 'red' : 'blue',
    children: (
        <div
            style={{ paddingBottom: `${e[6]}rem`, paddingRight: `1rem`, border: '0px solid crimson', }}
        >
            <div style={{ fontSize: '1.167rem', }}><b>{ `${e[0]}. ${e[1]}` }</b></div>
            <div>{ `MP for ${e[2]} (${e[5]})` }</div>
            <div>{e[3]} &mdash; {e[4]}</div>
        </div>
    ),
    position: e[5].match(/Labor/) ? 'left' : 'right',
}))

const MyTimeline = () => (
    <Space direction="vertical" size="middle" style={{ display: 'flex', paddingTop: '3rem', }}>
        <Timeline
            reverse={true}
            mode="alternate"
            items={listOfPMs}
        />
    </Space>
)

export default MyTimeline
