

import UserSidebar from '@/components/shared/user-sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Bell, Heart } from 'lucide-react';
AvatarFallback

export const metadata = {
  title: "EX - Buy & Sell Companies",
  description: "The #1 platform for buying & selling companies",
}

export default function UserDashboardLayout({ children }) {
  return (
    
    <div className='min-h-screen max-w-[1920px]  flex '>
        <UserSidebar/>
        <div className='flex-1 flex flex-col self-start '>
        <header className='flex flex-1 py-4 justify-end items-center  px-2 gap-3 h-[78px] border-b-[1px] '>
       
            <Button
              variant="default"
              size="icon"
              className="rounded-full bg-white hover:bg-[#FFFFFF1A] cursor-pointer text-[#00000080] p-[10px] relative"
            >
              <Bell  className="h-[44px] w-[44px]" />
              <span className="absolute -top-1 -right-1 bg-[#c1ff00] text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </Button>
            <Button
              variant="default"
              size="icon"
              className="rounded-full p-[10px] bg-white cursor-pointer text-[#00000080] hover:bg-[#FFFFFF1A] relative"
            >
              <Heart className="h-[44px] w-[44px]" />
              <span className="absolute -top-1 -right-1 bg-[#c1ff00] text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
                5
              </span>
            </Button>

            {/* User dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>

                <Avatar className="h-8 w-8 border border-gray-300 cursor-pointer">
                  <AvatarImage src="/abstract-profile.png" alt="User" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
               
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-black border border-gray-800 text-white p-1"
              >
                <div className="px-2 py-1.5 mb-1 border-b border-gray-800">
                  <p className="font-medium">Manuel</p>
                  <p className="text-xs text-gray-400">manuel@example.com</p>
                </div>
                <DropdownMenuItem className="hover:bg-gray-900 focus:bg-gray-900 cursor-pointer">
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-900 focus:bg-gray-900 cursor-pointer">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-900 focus:bg-gray-900 cursor-pointer">
                  My Listings
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-900 focus:bg-gray-900 cursor-pointer">
                  Watchlist
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-900 focus:bg-gray-900 cursor-pointer">
                  Messages
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-900 focus:bg-gray-900 cursor-pointer">
                  Billing
                </DropdownMenuItem>
                <div className="h-px bg-gray-800 my-1"></div>
                <DropdownMenuItem className="text-red-500 hover:bg-gray-900 focus:bg-gray-900 cursor-pointer">
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          
      </header>
        {children}
        </div>
    </div>
  )
}
