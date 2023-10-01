import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { FaGithub } from "react-icons/fa"
import {HiOutlineStatusOnline} from "react-icons/hi"
import 'animate.css';

export const NavbarNav = () => {


    return (
        <Navbar className="animate__animated animate__zoomInDown animate__delay-0.5s p-2">
            <NavbarBrand className="animate__animated animate__zoomInDown animate__delay-0.8s">
                <h2 className="text-5xl font-thin">
                    Gatos HTTP
                </h2>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4 animate__animated animate__zoomInDown animate__delay-1s" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#" className="font-semibold font-serif">
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" color="foreground" className="font-semibold underline">
                        <HiOutlineStatusOnline size={40}/>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" className="font-semibold underline">
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link color="foreground" className="" href="https://github.com/ADSI-CELADA" target="_blank">
                        <FaGithub size={40} className="mr-5" />
                        Github
                    </Link>

                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
