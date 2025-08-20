import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
                <Link to="/" className="font-bold text-xl">Acme Tools</Link>

                <nav className="hidden md:flex items-center gap-6">
                    <NavLink to="/" className="text-sm hover:text-primary">Home</NavLink>

                    <div
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                    >
                        <DropdownMenu open={open} onOpenChange={setOpen}>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-1 text-sm hover:text-primary">
                                    Tools <ChevronDown size={16} />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-56">
                                <DropdownMenuItem asChild>
                                    <Link to="/tools/ocr">OCR</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link to="/tools/bulk-mail">Bulk Mail</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link to="/tools/email-verifier">Email Verifier (Coming soon)</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link to="/tools/analytics">Analytics (Coming soon)</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <NavLink to="/docs" className="text-sm hover:text-primary">Docs</NavLink>
                </nav>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="md:hidden">
                        <Menu size={18} />
                    </Button>
                    <Button size="sm" asChild>
                        <a href="#cta">Get started</a>
                    </Button>
                </div>
            </div>
        </header>
    );
}