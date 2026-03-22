export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>About/Me Layout Header</header>
      {children}
      <footer>About/Me Layout Footer</footer>
    </div>
  )
}