import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Button from './button/Button';

const listMenu = ['Home', 'Service', 'Feature', 'Product', 'Testimonial', 'FAQ'];

export default function Header() {
    return (
        <header className='w-full sticky h-[84px] flex justify-around items-center bg-netral-silver'>

            <div>
                <Image src={'/nexcent-logo.png'} width={154} height={24} alt='next-logo' priority={true} />
            </div>
            <div>
                <ul className='flex text-base font-medium leading-6 text-gray-900 justify-between gap-[50px]'>
                    {
                        listMenu.map((el, key) => {
                            return (
                                <li key={key}><Link href={`/${el.toLowerCase()}`}>{el}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='space-x-3.5'>
                <Button type='secondary'><Link href={'/'}>Log in</Link></Button>
                <Button type='primary'><Link href={'/'}>Sign up</Link></Button>
            </div>
        </header>
    )
}
