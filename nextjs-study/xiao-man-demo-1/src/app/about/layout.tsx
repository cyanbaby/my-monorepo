'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('about/layout 挂载');
    return () => {
      console.log('about/layout 卸载');
    }
  }, []);
  return (
    <div>
      <header>About Layout Header</header>

      <button onClick={() => setCount(count + 1)}>about/layout +1</button>
      <p>count: {count}</p>

      <hr />

      {children}
      <hr />

      <Link className="text-blue-500 block" href="/about/me">about/me</Link>
      <Link className="text-blue-500 block" href="/about/me2">about/me2</Link>

      <footer>About Layout Footer</footer>
    </div>
  )
}