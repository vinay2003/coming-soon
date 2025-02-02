import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { LuMenu } from "react-icons/lu";

export default function Navbar() {
    return (
        <nav className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <Link href="/">
                <Image alt="logo" className="w-40 cursor-pointer dark:invert" src="/images/logo.svg" height={100} width={170} />
            </Link>

            <div className="hidden md:flex gap-4">
                {/* <Link href="/">
                    <Button variant="ghost" className="font-semibold text-md">Home</Button>
                </Link>
                <Link href="/about">
                    <Button variant="ghost" className="font-semibold text-md">About</Button>
                </Link>
                <Link href="/privacy-policy">
                    <Button variant="ghost" className="font-semibold text-md">Privacy Policy</Button>
                </Link>
                <Link href="/blog">
                    <Button variant="ghost" className="font-semibold text-md">Blog</Button>
                </Link> */}
            </div>

            <div className="hidden md:flex items-center gap-2">
                <ModeToggle />
            </div>

            {/* MOBILE NAV */}
            <Sheet>
                <SheetTrigger className="block p-3 md:hidden">
                    {/* <LuMenu className="text-2xl text-slate-950 dark:text-slate-200" /> */}
                    <ModeToggle />
                </SheetTrigger>
                {/* <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <div className="flex flex-col w-full h-full">
                                <Link href="/">
                                    <Button variant="link" className="w-full font-semibold text-md">Home</Button>
                                </Link>
                                <Link href="/about">
                                    <Button variant="link" className="w-full font-semibold text-md">About</Button>
                                </Link>
                                <Link href="/privacy-policy">
                                    <Button variant="link" className="w-full font-semibold text-md">Privacy Policy</Button>
                                </Link>
                                <Link href="/blog">
                                    <Button variant="link" className="w-full font-semibold text-md">Blog</Button>
                                </Link>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                   
                </SheetContent> */}
            </Sheet>
        </nav>
    );
}
