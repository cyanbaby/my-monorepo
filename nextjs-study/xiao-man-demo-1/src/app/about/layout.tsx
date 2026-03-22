import { Suspense } from "react";
// ⨯ useSearchParams() should be wrapped in a suspense boundary at page "/about/me". Read more: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <div>
        {children}
      </div>
    </Suspense>
  )
}