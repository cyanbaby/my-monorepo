export default function BLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div>B Layout</div>
        {children}
      </body>
    </html>
  )
}