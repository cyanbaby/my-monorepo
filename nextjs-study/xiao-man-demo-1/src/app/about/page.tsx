'use client';

import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div className="h-500">
      <h1>About</h1>
        <button className="block text-blue-500" onClick={() => router.replace("/page")}>替换当前页面</button>
        <button className="block text-blue-500" onClick={() => router.back()}>返回上一页</button>
        <button className="block text-blue-500" onClick={() => router.forward()}>跳转下一页</button>
        <button className="block text-blue-500" onClick={() => router.refresh()}>刷新当前页面</button>
        <button className="block text-blue-500" onClick={() => router.prefetch("/about")}>预获取about页面</button>
    </div>
  );
}