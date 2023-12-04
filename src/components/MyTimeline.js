// MyTimeline.js

import React from 'react'
import {
    ClockCircleOutlined,
    UserOutlined,
} from '@ant-design/icons'
import { Avatar, Space, Timeline } from 'antd'
import { pmlist } from '../common/functions'

const items = [
    {
        children: 'Create a services site 2015-09-01',
    },
    {
        children: '23 May 2022',
        color: 'red',
    },
    {
        dot: (
            <ClockCircleOutlined
                style={{
                    fontSize: '16px',
                }}
            />
        ),
        children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    },
    {
        color: 'red',
        children: 'Network problems being solved 2015-09-01',
    },
    {
        children: 'Create a services site 2015-09-01',
    },
    {
        dot: (
            <ClockCircleOutlined
                style={{
                    fontSize: '16px',
                }}
            />
        ),
        children: 'Technical testing 2015-09-01',
    },
]

const arr = pmlist()
console.log(50, arr)
const listOfPMs = arr.map((e, i) => ({
    // dot:  <UserOutlined style={{ fontSize: '16px', }} />,
    dot:  <><Avatar style={{ backgroundColor: e[5].match(/Labor/) ? 'red' : 'blue' }} icon={<UserOutlined />} />&nbsp;&nbsp;</>,
    color: e[5].match(/Labor/) ? 'red' : 'blue',
    children: (
        <div
            style={{ paddingBottom: `${e[6]}rem`, paddingRight: `1rem`, border: '0px solid crimson', }}
        >
            {/* { e.slice(0, 3).join(' - ') + `[${e[5]}]` + ` ${e[6]}rem` } */}
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
            // {...{items}}
            items={listOfPMs}
        />
    </Space>
)

export default MyTimeline