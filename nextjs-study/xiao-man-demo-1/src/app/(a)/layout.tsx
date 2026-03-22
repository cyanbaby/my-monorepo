export default function ALayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div>A Layout</div>
        {children}
      </body>
    </html>
  )
}