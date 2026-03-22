export default function AboutTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>About Template Header</header>
      {children}
      <footer>About Template Footer</footer>
    </div>
  )
}