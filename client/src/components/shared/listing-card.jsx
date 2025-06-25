"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Heart, Share2 } from "lucide-react"
import Image from "next/image"

export default function ListingCard({ listing, featured = false }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  const handleShare = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // Share functionality would go here
  }

  // Format currency
  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(1)}K`
    } else {
      return `$${amount}`
    }
  }
// console.log(listing)
  return (
            <div className="rounded-lg max-w-[371px]  bg-[#FAFAFA] overflow-hidden">
              <div className="relative">
                <Image
                  src={listing.image}
                  width={400}
                  height={285}
                  alt={listing.title}
                  className="w-full object-cover"
                />
                <button className="absolute top-3 right-3 bg-white p-3 w-[49px] h-[48px] height rounded-full">
                  <Image src={"/Vector.png"}
                    width={20}
                    height={20} className="m-auto"
                    alt="like" />
                </button>
                <button className="absolute top-3 right-20 bg-white p-3 w-[49px] h-[48px] height rounded-full">
                  <Image src={"/Frame.png"}
                    width={20}
                    height={20}
                    alt="share" className="m-auto" />
                </button>
                <div className="absolute bottom-3 left-3 flex space-x-2">
                  <div className="bg-black/25 text-xs  md:!text-base  font-medium font-lufga px-3 py-1 text-white rounded-full">{listing.niche}</div>
                </div>
              </div>
              <div className="p-4"> 
                <h3 className="text-lg md:!text-base font-semibold font-lufga mb-1 text-black">{listing.title}</h3>
                <p className="text-xs text-black/50 mb-3 font-lufga">{listing.description}</p>
                <div className="flex flex-row justify-between items-center mb-4">
                     <div className="text-[24px] md:!text-[22px] font-semibold font-lufga text-black">${listing.price.toLocaleString()}</div>
                     <div className="flex flex-row justify-center items-center border-[2px] border-[#808080] px-3  rounded-[60px]">
                      <p className=" text-[10px] md:text-xs font-medium font-lufga pr-2.5 py-1 text-black/70">Multiple 1.1x Profit</p>
                      <hr className="inline-block h-full min-h-[1.9em] w-0.5 self-stretch bg-[#808080] "/>
                      <p className="text-[10px] md:text-xs font-medium font-lufga pl-2.5 py-1 text-black/70">0.3x Revenue</p>
                     </div>
                </div>
  
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-4 flex items-center justify-center">
                      <Image src={"/flage.png"}
                      width={32}
                      height={23}
                      alt="Button-Icon"
                    />
                    </div>
                    <span className="text-sm md:text-base font-medium text-black/50 font-lufga">Location: <span className="text-black">{listing.location}</span></span>
                  </div>
                  <div className="text-sm md:text-base font-medium text-black/50 font-lufga text-right">Business Age: <span className="text-black">{listing.businessAge}</span></div>
  
                  <div className="text-sm md:text-base font-medium text-black/50 font-lufga">Net Profit: <span className="text-black">{listing.netProfit}</span></div>
                  <div className="text-sm md:text-base font-medium text-black/50 font-lufga text-right">Revenue: <span className="text-black">{listing.revenue}</span></div>
                </div>
  
                <div className="flex gap-2">
                  <Button
  
                    className="w-1/2 bg-black hover:bg-gray-800 text-sm md:text-base font-medium font-lufga text-white rounded-[60px]"
                  >
                    Contact Seller
                  </Button>
                  <Button
  
                    className="w-1/2 bg-[#AEF31F] hover:bg-[#AEF31F] text-sm md:text-base font-medium font-lufga text-black rounded-[60px]"
                  >
                    View Listing
                  </Button>
                </div>
              </div>
            </div>
        
  )
}
