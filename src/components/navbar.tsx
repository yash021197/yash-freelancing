"use client";
import Link from "next/link";
import { useState } from "react";
import { Mark } from "./icons";
import { ThemeToggle } from "./theme-toggle";
export function Navbar() { const [open, setOpen] = useState(false); const links = [["Services", "#services"], ["Work", "#work"], ["About", "#about"]]; return <header className="nav"><Link href="/" className="brand" aria-label="Yash home"><Mark /> YASH<span>STUDIO</span></Link><button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? "Close" : "Menu"}</button><nav className={open ? "open" : ""}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<ThemeToggle /><a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Start a project <span>↗</span></a></nav></header>; }
