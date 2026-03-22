'use client';

import { redirect, permanentRedirect } from "next/navigation";

export default function About() {
  if(true) {
    // redirect("/about/me");  // 307
    permanentRedirect("/about/me");  // 永久重定向
  }
  return (
    <div className="h-500">
      <h1>About</h1>
    </div>
  );
}