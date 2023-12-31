import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from "react-icons/io5";
import { SiSaturn } from "react-icons/si";
import { SidebarMenu } from "./SidebarMenu";



const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Dashboard',
        subtitle: 'Visualización'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40} />,
        title: 'Counter',
        subtitle: 'Contador Client Side'
    },
    {
        path: '/dashboard/apod',
        icon: <SiSaturn size={40} />,
        title: 'APOD',
        subtitle: 'Astronomy Picture of the Day'
    },
]

export const Sidebar = () => {
  return (
    <div id="menu" 
        style={{ width: '400px'}}
        className="bg-gray-900 min-h-screen z-10 text-slate-300 left-0 h-screen overflow-y-scroll">

        <div id="logo" className="my-4 px-6">
            <h1 className="flex items-centertext-lg md:text-2xl font-bold text-white">
                <IoLogoReact className="mr-2"/>
                Dash<span className="text-blue-500">board</span>.
            </h1>  
            <p className="text-slate-500 text-sm">Manage your actions and activities</p>
        </div>

        <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Welcome back,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
                <Image
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                    alt="User Avatar"
                    width={50}
                    height={50}
                />
                <span className="text-sm md:text-base font-bold">
                    Walter Carrizo
                </span>
            </a>
        </div>

        <div id="nav" className="w-full px-6">

            {
                menuItems.map(item => (
                    <SidebarMenu 
                        key={item.path} 
                        {...item}
                    />
                ))
            }    
            
        </div>
    </div>

  )
}
