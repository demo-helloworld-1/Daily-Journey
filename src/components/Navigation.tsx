"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export function TopNav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Apply dark mode to the document
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav flex justify-between items-center px-6 py-4 border-b border-surface-container/50">
      <div className="space-y-2">
        <p className="text-lg font-bold text-slate-900 font-headline">The Living Archive</p>
        <p className="text-xs text-on-surface-variant font-label opacity-70">Your curated path</p>
      </div>
      <div className="flex items-center gap-4 relative">
        {isSearchOpen ? (
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            autoFocus
            className="px-4 py-2 rounded-lg border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary bg-white text-on-surface"
            onBlur={() => setIsSearchOpen(false)}
          />
        ) : (
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-full hover:bg-slate-100/50 transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface-variant">search</span>
          </button>
        )}
        <button 
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="p-2 rounded-full hover:bg-slate-100/50 transition-colors"
        >
          <span className="material-symbols-outlined text-on-surface-variant">account_circle</span>
        </button>

        {/* Profile Dropdown Card */}
        {isProfileOpen && (
          <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-lg p-6 border border-surface-container/50">
            <div className="flex flex-col space-y-4">
              <div>
                <p className="text-lg font-headline font-bold text-on-surface">Welcome</p>
                <p className="text-sm font-label text-on-surface-variant">B Dhanush</p>
              </div>
              
              <div className="h-px bg-surface-container"></div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">
                    {isDarkMode ? "dark_mode" : "light_mode"}
                  </span>
                  <span className="font-label text-on-surface">
                    {isDarkMode ? "Dark Mode" : "Light Mode"}
                  </span>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isDarkMode ? "bg-primary" : "bg-surface-container"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isDarkMode ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export function SideNav() {
  const pathname = usePathname();
  const isEntry = pathname?.startsWith('/entry');

  const navLinks = [
    { href: "/", label: "Today", icon: "today" },
    { href: "/recent", label: "Recent", icon: "history" },
    { href: "/archives", label: "Archives", icon: "inventory_2" },
    { href: "/bookmarks", label: "Bookmarks", icon: "bookmark" },
  ];

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen flex-col p-6 space-y-8 bg-slate-50 w-64 z-40 pt-24 border-r border-surface-container/50">
      <nav className="flex-1 flex flex-col space-y-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 font-label transition-all duration-300 rounded-xl ${
                isActive
                  ? "bg-white text-blue-600 shadow-sm transform translate-x-1"
                  : "text-slate-500 hover:bg-slate-200/50"
              }`}
            >
              <span 
                className="material-symbols-outlined"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {link.icon}
              </span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
      {isEntry ? (
        <div className="mt-auto p-4 rounded-xl bg-surface-container-low">
          <p className="text-xs font-label text-on-surface-variant mb-2">PROGRESS PATH</p>
          <div className="relative h-24 w-full">
            <svg className="w-full h-full" viewBox="0 0 100 50">
              <path className="opacity-30" d="M 10 40 C 30 10, 70 10, 90 40" fill="none" stroke="#81525f" strokeWidth="2" strokeDasharray="8 8"></path>
              <circle cx="10" cy="40" fill="#ffd9e1" r="4"></circle>
              <circle cx="50" cy="15" fill="#2060a5" r="5"></circle>
              <circle cx="90" cy="40" fill="#ffd9e1" r="4"></circle>
            </svg>
          </div>
          <Link href="/" className="w-full block">
            <button className="w-full mt-4 py-2 px-4 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-sm">map</span>
              BACK TO MAP
            </button>
          </Link>
        </div>
      ) : (
        <button className="w-full mt-auto bg-primary text-on-primary py-4 rounded-xl font-label text-sm font-bold tracking-[0.05em] uppercase shadow-lg shadow-primary/20 hover:scale-[0.98] transition-transform">
          New Entry
        </button>
      )}
    </aside>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  
  const navLinks = [
    { href: "/", label: "Today", icon: "today" },
    { href: "/recent", label: "Recent", icon: "history" },
    { href: "/archives", label: "Archives", icon: "inventory_2" },
    { href: "/bookmarks", label: "Bookmarks", icon: "bookmark" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-white/70 backdrop-blur-md z-50 px-6 py-4 flex justify-around items-center border-t border-surface-container">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link 
            key={link.href} 
            href={link.href} 
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive ? "text-blue-600" : "text-slate-500"
            }`}
          >
            <span 
              className="material-symbols-outlined"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {link.icon}
            </span>
            <span className={`text-[10px] font-label ${isActive ? "font-bold" : ""}`}>
              {link.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

export default function Navigation() {
  return (
    <>
      <TopNav />
      <SideNav />
      <MobileNav />
    </>
  );
}
