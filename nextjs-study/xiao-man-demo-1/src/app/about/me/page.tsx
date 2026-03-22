'use client';
import { useSearchParams } from "next/navigation";

export default function Me() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const ids = searchParams.getAll('id');
  return <div className="h-500">About / Me {id} {ids.join(',')}</div>;
} 