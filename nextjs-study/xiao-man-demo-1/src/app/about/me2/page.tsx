'use client';
import { useSearchParams } from "next/navigation";

export default function Me() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  return <div>About / Me 2{id}</div>;
}