"use client";
import Link from "next/link";
import { useState } from "react";
import { Mark } from "./icons";
import { ThemeToggle } from "./theme-toggle";
export function Navbar() { const [open, setOpen] = useState(false); const links = [["Home", "#home"], ["Work", "#work"], ["Services", "#services"], ["About", "#about"], ["Contact", "#contact"]]; return <header className="nav premium-nav"><Link href="/" className="brand" aria-label="Yash home"><Mark /><span className="brand-copy"><b>Yash</b><small>Software Developer</small></span></Link><button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? "Close" : "Menu"}</button><nav className={open ? "open" : ""}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<ThemeToggle /><a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let&apos;s talk <span>→</span></a></nav></header>; }
