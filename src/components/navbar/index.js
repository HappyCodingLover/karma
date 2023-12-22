import { Sidebar } from "./components/sidebar"

export const Navbar = ({children, navigation}) => {
  const { sections = [] } = navigation
  console.log(sections)
  return (
    <div className="flex flex-row h-[100vh] bg-black w-full">
      <Sidebar sections={sections} />
      <main className="overflow-y-auto w-full">{children}</main>
    </div>
  )
}