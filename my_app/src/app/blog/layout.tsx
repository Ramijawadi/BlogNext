export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <h1>Blog</h1>
    <hr/>
     {children}
    </>
  )
}