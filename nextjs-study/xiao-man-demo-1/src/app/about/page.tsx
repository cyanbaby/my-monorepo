import Link from "next/link";

export default function About() {
  return (
    <div className="h-500">
      <h1>About</h1>
      <Link replace scroll={false} prefetch={false} className="text-blue-500 block mt-60" href={ { pathname: '/about/me', query: { id: '张三' } } }>about/me</Link>
      <Link className="text-blue-500 block" href={ { pathname: '/about/me2', query: { id: '李四'} } }>about/me2</Link>
    </div>
  );
}