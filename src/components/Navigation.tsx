"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

// Dark mode utility functions
const applyDarkMode = (enabled: boolean) => {
  const html = document.documentElement;
  const body = document.body;

  if (enabled) {
    html.classList.add("dark");
    body.style.backgroundColor = "#1a1a1a";
    body.style.color = "#e0e0e0";
    body.classList.add("dark-mode-enabled");
    localStorage.setItem("darkMode", "true");
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent("darkModeChanged", { detail: { enabled: true } }));
  } else {
    html.classList.remove("dark");
    body.style.backgroundColor = "#fbf9f8";
    body.style.color = "#323233";
    body.classList.remove("dark-mode-enabled");
    localStorage.setItem("darkMode", "false");
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent("darkModeChanged", { detail: { enabled: false } }));
  }
};

const initializeDarkMode = () => {
  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode === "true") {
    applyDarkMode(true);
    return true;
  }
  return false;
};

export function TopNav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    // Initialize dark mode on component mount
    const darkModeEnabled = initializeDarkMode();
    setIsDarkMode(darkModeEnabled);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    applyDarkMode(newDarkMode);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 glass-nav flex justify-between items-center px-6 py-4 border-b transition-colors duration-300 ${
      isDarkMode 
        ? "border-gray-700 bg-gray-900/70" 
        : "border-surface-container/50"
    }`}>
      <div className="space-y-2">
        <p className={`text-lg font-bold font-headline transition-colors duration-300 ${
          isDarkMode ? "text-gray-100" : "text-slate-900"
        }`}>
          The Living Archive
        </p>
        <p className={`text-xs font-label opacity-70 transition-colors duration-300 ${
          isDarkMode ? "text-gray-400" : "text-on-surface-variant"
        }`}>
          Your curated path
        </p>
      </div>
      <div className="flex items-center gap-4 relative">
        {isSearchOpen ? (
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            autoFocus
            className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300 ${
              isDarkMode
                ? "border-gray-600 bg-gray-800 text-gray-100 placeholder-gray-500"
                : "border-surface-container bg-white text-on-surface placeholder-gray-400"
            }`}
            onBlur={() => setIsSearchOpen(false)}
          />
        ) : (
          <button 
            onClick={() => setIsSearchOpen(true)}
            className={`p-2 rounded-full transition-colors duration-300 ${
              isDarkMode
                ? "hover:bg-gray-700"
                : "hover:bg-slate-100/50"
            }`}
          >
            <span className={`material-symbols-outlined transition-colors duration-300 ${
              isDarkMode ? "text-gray-400" : "text-on-surface-variant"
            }`}>
              search
            </span>
          </button>
        )}
        <button 
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className={`p-2 rounded-full transition-colors duration-300 ${
            isDarkMode
              ? "hover:bg-gray-700"
              : "hover:bg-slate-100/50"
          }`}
        >
          {session?.user?.image ? (
            <img src={session.user.image} alt="Profile" className="w-8 h-8 rounded-full border border-gray-300" />
          ) : (
            <span className={`material-symbols-outlined transition-colors duration-300 ${
              isDarkMode ? "text-gray-400" : "text-on-surface-variant"
            }`}>
              account_circle
            </span>
          )}
        </button>

        {/* Profile Dropdown Card */}
        {isProfileOpen && (
          <div className={`absolute top-full right-0 mt-2 w-64 rounded-2xl shadow-lg p-6 transition-colors duration-300 ${
            isDarkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-surface-container/50"
          }`}>
            <div className="flex flex-col space-y-4">
              <div>
                <p className={`text-lg font-headline font-bold transition-colors duration-300 ${
                  isDarkMode ? "text-gray-100" : "text-on-surface"
                }`}>
                  {session ? `Welcome ${session.user?.name}` : "Welcome"}
                </p>
                <p className={`text-sm font-label transition-colors duration-300 ${
                  isDarkMode ? "text-gray-400" : "text-on-surface-variant"
                }`}>
                  {session?.user?.email || "Guest User"}
                </p>
              </div>
              
              <div className={`h-px transition-colors duration-300 ${
                isDarkMode ? "bg-gray-700" : "bg-surface-container"
              }`}></div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`material-symbols-outlined transition-colors duration-300 ${
                    isDarkMode ? "text-gray-400" : "text-on-surface-variant"
                  }`}>
                    {isDarkMode ? "dark_mode" : "light_mode"}
                  </span>
                  <span className={`font-label transition-colors duration-300 ${
                    isDarkMode ? "text-gray-100" : "text-on-surface"
                  }`}>
                    {isDarkMode ? "Dark Mode" : "Light Mode"}
                  </span>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isDarkMode ? "bg-blue-600" : "bg-surface-container"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isDarkMode ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Authentication Buttons */}
              <div className="pt-2 border-t border-surface-container">
                {session ? (
                  <button 
                    onClick={() => signOut()}
                    className={`w-full text-left py-2 px-3 rounded-lg transition-colors font-label text-sm ${
                      isDarkMode ? "text-red-400 hover:bg-gray-700" : "text-red-500 hover:bg-slate-100"
                    }`}
                  >
                    Sign Out
                  </button>
                ) : (
                  <button 
                    onClick={() => signIn("google")}
                    className={`w-full text-left py-2 px-3 rounded-lg transition-colors font-label text-sm ${
                      isDarkMode ? "text-blue-400 hover:bg-gray-700" : "text-blue-500 hover:bg-slate-100"
                    }`}
                  >
                    Sign In with Google
                  </button>
                )}
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { data: session } = useSession();
  const isAdmin = session?.user?.isAdmin;

  useEffect(() => {
    const darkModeEnabled = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkModeEnabled);

    const handleDarkModeChange = () => {
      const newDarkMode = localStorage.getItem("darkMode") === "true";
      setIsDarkMode(newDarkMode);
    };

    const handleCustomDarkModeChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      setIsDarkMode(customEvent.detail.enabled);
    };

    window.addEventListener("storage", handleDarkModeChange);
    window.addEventListener("darkModeChanged", handleCustomDarkModeChange);

    return () => {
      window.removeEventListener("storage", handleDarkModeChange);
      window.removeEventListener("darkModeChanged", handleCustomDarkModeChange);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Today", icon: "today" },
    { href: "/recent", label: "Recent", icon: "history" },
    { href: "/archives", label: "Archives", icon: "inventory_2" },
    { href: "/bookmarks", label: "Bookmarks", icon: "bookmark" },
  ];

  return (
    <aside className={`hidden lg:flex fixed left-0 top-0 h-screen flex-col p-6 space-y-8 w-64 z-40 pt-24 border-r transition-colors duration-300 ${
      isDarkMode
        ? "bg-gray-900 border-gray-700"
        : "bg-slate-50 border-surface-container/50"
    }`}>
      <nav className="flex-1 flex flex-col space-y-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 font-label transition-all duration-300 rounded-xl ${
                isActive
                  ? isDarkMode
                    ? "bg-gray-800 text-blue-400 shadow-sm transform translate-x-1"
                    : "bg-white text-blue-600 shadow-sm transform translate-x-1"
                  : isDarkMode
                  ? "text-gray-400 hover:bg-gray-800"
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
        <div className={`mt-auto p-4 rounded-xl transition-colors duration-300 ${
          isDarkMode
            ? "bg-gray-800"
            : "bg-surface-container-low"
        }`}>
          <p className={`text-xs font-label mb-2 transition-colors duration-300 ${
            isDarkMode
              ? "text-gray-400"
              : "text-on-surface-variant"
          }`}>
            PROGRESS PATH
          </p>
          <div className="relative h-24 w-full">
            <svg className="w-full h-full" viewBox="0 0 100 50">
              <path className="opacity-30" d="M 10 40 C 30 10, 70 10, 90 40" fill="none" stroke={isDarkMode ? "#999" : "#81525f"} strokeWidth="2" strokeDasharray="8 8"></path>
              <circle cx="10" cy="40" fill={isDarkMode ? "#555" : "#ffd9e1"} r="4"></circle>
              <circle cx="50" cy="15" fill="#2060a5" r="5"></circle>
              <circle cx="90" cy="40" fill={isDarkMode ? "#555" : "#ffd9e1"} r="4"></circle>
            </svg>
          </div>
          <Link href="/" className="w-full block">
            <button className={`w-full mt-4 py-2 px-4 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
              isDarkMode
                ? "bg-blue-600 text-white hover:opacity-80"
                : "bg-tertiary-container text-on-tertiary-container hover:opacity-90"
            }`}>
              <span className="material-symbols-outlined text-sm">map</span>
              BACK TO MAP
            </button>
          </Link>
        </div>
      ) : (
        isAdmin && (
          <button className={`w-full mt-auto py-4 rounded-xl font-label text-sm font-bold tracking-[0.05em] uppercase transition-all duration-300 ${
            isDarkMode
              ? "bg-blue-600 text-white hover:scale-[0.98]"
              : "bg-primary text-on-primary hover:scale-[0.98] shadow-lg shadow-primary/20"
          }`}>
            New Entry
          </button>
        )
      )}
    </aside>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeEnabled = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkModeEnabled);

    const handleDarkModeChange = () => {
      const newDarkMode = localStorage.getItem("darkMode") === "true";
      setIsDarkMode(newDarkMode);
    };

    const handleCustomDarkModeChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      setIsDarkMode(customEvent.detail.enabled);
    };

    window.addEventListener("storage", handleDarkModeChange);
    window.addEventListener("darkModeChanged", handleCustomDarkModeChange);

    return () => {
      window.removeEventListener("storage", handleDarkModeChange);
      window.removeEventListener("darkModeChanged", handleCustomDarkModeChange);
    };
  }, []);
  
  const navLinks = [
    { href: "/", label: "Today", icon: "today" },
    { href: "/recent", label: "Recent", icon: "history" },
    { href: "/archives", label: "Archives", icon: "inventory_2" },
    { href: "/bookmarks", label: "Bookmarks", icon: "bookmark" },
  ];

  return (
    <nav className={`md:hidden fixed bottom-0 w-full z-50 px-6 py-4 flex justify-around items-center border-t transition-colors duration-300 ${
      isDarkMode
        ? "bg-gray-800/70 border-gray-700 backdrop-blur-md"
        : "bg-white/70 border-surface-container backdrop-blur-md"
    }`}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link 
            key={link.href} 
            href={link.href} 
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive
                ? isDarkMode
                  ? "text-blue-400"
                  : "text-blue-600"
                : isDarkMode
                ? "text-gray-400"
                : "text-slate-500"
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
