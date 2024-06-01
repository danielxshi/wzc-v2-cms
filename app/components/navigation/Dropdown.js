import React, { useState } from 'react'
import MenuItems from '../JSON/MenuItems'
import style from '../../styles/modules/_dropdown.module.scss'
import Link from 'next/link';

export default function Dropdown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <ul>
                {MenuItems.NavMenuItems.map((item, index) => {
                    return (
                        <li
                            className={style['mobile--nav--list']}
                        >
                            <div className={[style['list--motion--div']]}>
                                <Link
                                    key={index}
                                    to={'/' + item.href}
                                    href={item.href}
                                    passHref={true}
                                    smooth={true}
                                    spy={true}
                                    activeClassName="active"
                                >
                                    {item.title}
                                </Link>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}
