'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

export default function AboutTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('about/template 挂载');
    return () => {
      console.log('about/template 卸载');
    }
  }, []);
  return (
    <div>
      <header>About Template Header</header>
      <button onClick={() => setCount(count + 1)}>about/template +1</button>
      <p>count: {count}</p>

      <hr />

      {children}

      <hr />


      <Link className="text-blue-500 block" href="/about/me">about/me</Link>
      <Link className="text-blue-500 block" href="/about/me2">about/me2</Link>

      <footer>About Template Footer</footer>
    </div>
  )
}