import React from 'react'
import { Input } from 'antd';
export default function AntInput({ placeholder, value, onChange, name, id, type, onBlur }) {
    return (
        <div>
            <Input className="rounded-lg border border-gray-300" id={id} placeholder={placeholder} type={type} name={name} value={value} onChange={onChange} onBlur={onBlur} />
        </div>
    )
}
