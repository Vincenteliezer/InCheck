import React from 'react'
import { Drawer } from 'antd';

export default function AntDrawer({onClose, open}) {
   
    return (
        <>
            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    )
}
