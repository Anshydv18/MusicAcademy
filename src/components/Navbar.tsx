'use client'
import Link from "next/link"
import React, { useState } from "react"
import {HoveredLink,MenuItem,Menu} from '../components/ui/navbar-menu'
import  {cn} from "@/utils/cn"
export default function Navbar({className}:{className?:string}){
    const [active,setActive]=useState<string|null>(null);
    return(
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
               
            </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="our courses">
                <div className="flex flex-col space-y-4 text-sm text-center">
                    <HoveredLink href='/courses'> All courses</HoveredLink>
                    <HoveredLink href='/web-dev'> Basic music theory</HoveredLink>
                    <HoveredLink href='/web-dev'> Advanced Compostion</HoveredLink>
                    <HoveredLink href='/web-dev'> Song writing</HoveredLink>
                    <HoveredLink href='/web-dev'> music production</HoveredLink>
                </div>
            </MenuItem>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact">
            
            </MenuItem>
            </Link>
            </Menu>
        </div>
    );
}