// MyTimeline.js

import React from 'react'
import {
    // ClockCircleOutlined,
    UserOutlined,
} from '@ant-design/icons'
import { Avatar, Space, Timeline } from 'antd'
import {
    naaPMlinks,
    pmlist,
} from '../common/functions'

const arrPmList = pmlist()
// console.log(50, arr)

const naaLinks = (naaPMlinks && Array.isArray(naaPMlinks) && naaPMlinks.length > 1) 
    // ? arrPmList.map(e => {
    //     const found = naaPMlinks.find(f => e[1].trim() === f?.pm)
    //     // console.log(21, e, found)
    //     console.log(21, found?.pm, found?.href)
    //     console.log(22, {
    //         [found.pm]: <a href={found.href} title={`Link to ${found.pm}, National Archives`}>[National Archives]</a>
    //     })
    //     if (found?.pm && found?.href) return ({
    //         [found.pm]: <a href={found.href} title={`Link to ${found.pm}, National Archives`}>[National Archives]</a>
    //     })
    // })
    ? naaPMlinks.reduce((acc, curr) => ({ ...acc, [curr?.pm.trim()]: curr?.href}), {})
    : null
console.log(31, {naaLinks})

const listOfPMs = arrPmList.map((e, i) => ({
    dot:  <><Avatar style={{ backgroundColor: e[5].match(/Labor/) ? 'red' : 'blue' }} icon={<UserOutlined />} />&nbsp;&nbsp;</>,
    color: e[5].match(/Labor/) ? 'red' : 'blue',
    children: (
        <div
            style={{ paddingBottom: `${e[6]}rem`, paddingRight: `1rem`, border: '0px solid crimson', }}
        >
            <div>
                <span style={{ fontSize: '1.167rem', }}><b>{ `${e[0]}. ${e[1]}` }</b></span>
                &nbsp;
                <span>{naaLinks?.[e[1].trim()] ? (<a title={`Link to ${e[1].trim()}, National Archives`} href={naaLinks?.[e[1].trim()]}>[NAA link]</a>) : null}</span>
            </div>
            <div>{ `MP for ${e[2]} (${e[5]})` }</div>
            <div>{e[3]} &mdash; {e[4]}</div>
            <div></div>
        </div>
    ),
    position: e[5].match(/Labor/) ? 'left' : 'right',
}))

const MyTimeline = props => {

    const { dims } = props

    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex', paddingTop: '3rem', }}>
            <pre>{JSON.stringify(naaLinks)}</pre>
            <Timeline
                reverse={true}
                mode="alternate"
                items={listOfPMs}
            />
        </Space>
    )
}

export default MyTimeline
