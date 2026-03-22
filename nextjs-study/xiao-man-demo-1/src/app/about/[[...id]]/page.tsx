'use client';

import { useParams } from "next/navigation";

export default function AboutId() {
  const params = useParams();
  return <div>AboutId id={params.id}</div>;
}