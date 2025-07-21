import React from 'react'

interface DashboardLinkProps {
    svgPath: string,
    linkName: string
}

const DashboardLink: React.FC<DashboardLinkProps> = ({ svgPath, linkName }) => {
    return (
        <li className='flex items-center'>
            <a href="#" className='p-3 w-100 rounded hover:bg-zinc-800 active:bg-zinc-800'>
                <svg className='inline mr-3 w-fill' fill='white' height={20} width={20}>
                    <path d={svgPath}></path>
                </svg>
                {linkName}
            </a>
        </li >
    )
}

export default DashboardLink