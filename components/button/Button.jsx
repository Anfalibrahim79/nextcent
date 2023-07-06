import React from 'react'

export default function Button({ type = 'primary', size = 'normal', className = '', children, ...props }) {
    return (
        <>
            <button className={`rounded text-center
            ${type === 'primary' ? 'bg-primary text-netral-white focus:border-2 focus:border-netral-black' : type === 'secondary' ? 'bg-netral-white text-primary border border-solid focus:border-2 focus:border-netral-silver border-primary' : 'bg-netral-white'}
            ${type === 'normal' ? 'py-4 px-8' : type === 'medium' ? 'py-[14px] px-8' : 'py-2 px-6'}
            ${className}`} {...props}>
                {children}
            </button>
        </>
    )
}
