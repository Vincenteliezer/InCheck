"use client"
import React, { useState } from 'react'
import { Button, Modal } from 'antd';

export default function AntModal({ open, onOk, onCancel, children, title }) {
  
    return (
        <>
            <Modal title={title} open={open} onOk={onOk} centered={true} onCancel={onCancel} footer={null}>
                {children}
            </Modal>
        </>
    )
}

