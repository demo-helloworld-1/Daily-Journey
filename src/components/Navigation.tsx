"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export function TopNav() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav flex justify-between items-center px-6 py-4 border-b border-surface-container/50">
      <div className="text-2xl font-bold tracking-tight text-slate-800 font-headline">
        Daily Journey
      </div>
      <div className="hidden md:flex flex-1 justify-center gap-8">
        <Link href="/archives" className="text-blue-600 font-semibold font-label">
          Archives
        </Link>
        <Link
          href="/recent"
          className="text-slate-500 font-label hover:bg-slate-100/50 transition-colors px-3 py-1 rounded-lg"
        >
          Recent
        </Link>
        <Link
          href="/bookmarks"
          className="text-slate-500 font-label hover:bg-slate-100/50 transition-colors px-3 py-1 rounded-lg"
        >
          Bookmarks
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-slate-100/50 transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant">search</span>
        </button>
        <button className="p-2 rounded-full hover:bg-slate-100/50 transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant">account_circle</span>
        </button>
      </div>
    </nav>
  );
}

export function SideNav() {
  const pathname = usePathname();
  const isEntry = pathname?.startsWith('/entry');

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen flex-col p-6 space-y-8 bg-slate-50 w-64 z-40 pt-24 border-r border-surface-container/50">
      <div className="space-y-2">
        <p className="text-lg font-bold text-slate-900 font-headline">The Living Archive</p>
        <p className="text-xs text-on-surface-variant font-label opacity-70">Your curated path</p>
      </div>
      <nav className="flex-1 flex flex-col space-y-1">
        <Link
          href="/"
          className="flex items-center gap-3 bg-white text-blue-600 rounded-xl shadow-sm px-4 py-3 font-label transform translate-x-1 transition-transform duration-300"
        >
          <span className="material-symbols-outlined">today</span>
          <span>Today</span>
        </Link>
        <Link
          href="/recent"
          className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-200/50 rounded-xl font-label transition-colors"
        >
          <span className="material-symbols-outlined">history</span>
          <span>Recent</span>
        </Link>
        <Link
          href="/archives"
          className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-200/50 rounded-xl font-label transition-colors"
        >
          <span className="material-symbols-outlined">inventory_2</span>
          <span>Archives</span>
        </Link>
        <Link
          href="/bookmarks"
          className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-200/50 rounded-xl font-label transition-colors"
        >
          <span className="material-symbols-outlined">bookmark</span>
          <span>Bookmarks</span>
        </Link>
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
  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-white/70 backdrop-blur-md z-50 px-6 py-4 flex justify-around items-center border-t border-surface-container">
      <Link href="/" className="flex flex-col items-center gap-1 text-blue-600">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          today
        </span>
        <span className="text-[10px] font-label font-bold">Today</span>
      </Link>
      <Link href="/recent" className="flex flex-col items-center gap-1 text-slate-500">
        <span className="material-symbols-outlined">history</span>
        <span className="text-[10px] font-label">Recent</span>
      </Link>
      <Link href="/archives" className="flex flex-col items-center gap-1 text-slate-500">
        <span className="material-symbols-outlined">inventory_2</span>
        <span className="text-[10px] font-label">Archives</span>
      </Link>
      <Link href="/bookmarks" className="flex flex-col items-center gap-1 text-slate-500">
        <span className="material-symbols-outlined">bookmark</span>
        <span className="text-[10px] font-label">Bookmarks</span>
      </Link>
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
