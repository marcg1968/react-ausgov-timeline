// MyTimeline.js

import React from 'react'
import {
    // ClockCircleOutlined,
    UserOutlined,
} from '@ant-design/icons'
import {
    Avatar,
    Space,
    Timeline
} from 'antd'
import {
    naaPMlinks,
    pmlist,
} from '../common/functions'

const colour = {
    labor: 'crimson',
    tory: 'blue',
}

const arrPmList = pmlist()

const naaLinks = (naaPMlinks && Array.isArray(naaPMlinks) && naaPMlinks.length > 1) 
    ? naaPMlinks.reduce((acc, curr) => ({ ...acc, [curr?.pm.trim()]: curr?.href}), {})
    : null
console.log(31, {naaLinks})

const listOfPMs = arrPmList.map((e, i) => ({
    dot:  <><Avatar style={{ backgroundColor: e[5].match(/Labor/) ? colour.labor : colour.tory }} icon={<UserOutlined />} />&nbsp;&nbsp;</>,
    color: e[5].match(/Labor/) ? colour.labor : colour.tory,
    children: (
        <div
            style={{ paddingBottom: `${e[6]}rem`, paddingRight: `1rem`, }}
        >
            <div>
                <span style={{ fontSize: '1.167rem', }}>
                    {/* <b>{ `${e[0]}. ${e[1]}` }</b> */}
                    <b>{
                        naaLinks?.[e[1].trim()]
                            ? (<a title={`Link to ${e[1].trim()}, National Archives`} href={naaLinks?.[e[1].trim()]}>{ `${e[0]}. ${e[1]}` }</a>)
                            : null
                    }</b>
                </span>
                &nbsp;
                {/* <span>{naaLinks?.[e[1].trim()] ? (<a title={`Link to ${e[1].trim()}, National Archives`} href={naaLinks?.[e[1].trim()]}>[NAA link]</a>) : null}</span> */}
            </div>
            <div>{ `MP for ${e[2]} (${e[5]})` }</div>
            <div>{e[3]} &mdash; {e[4]}</div>
            <div></div>
        </div>
    ),
    position: e[5].match(/Labor/) ? 'left' : 'right',
}))

const MyTimeline = props => {

    // const { dims } = props

    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex', paddingTop: '3rem', }}>
            <Timeline
                className="Timeline"
                style={{ paddingTop: '3rem', overflowX: 'hidden', }}
                reverse={true}
                mode="alternate"
                items={listOfPMs}
            />
        </Space>
    )
}

export default MyTimeline
