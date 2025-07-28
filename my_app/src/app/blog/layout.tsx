import SideNav from "@/app/ui/components/sidenav"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
 <SideNav/>
   
     {children}
    </>
  )
}