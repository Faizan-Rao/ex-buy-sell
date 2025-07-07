"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";
import ListingCard from "@/components/shared/listing-card";
import { dummyListings } from "@/lib/dummy-data";
const UserDashboard = () => {
  return (
    <div className="px-4">
      {/* Search N Add List */}
      <div className="flex justify-between my-6 items-center">
        <div className="flex  h-[58px] bg-transparent ml-2 w-full gap-2 items-center border-[1px] rounded-[50px] py-[17px] px-[20px]">
          <Search height={24} width={24} className="text-[#00000080]" />
          <Input
            className={
              "outline-none border-none text-[16px]  focus-visible:ring-0 bg-transparent shadow-white"
            }
            placeholder="Search"
          />
        </div>

        <Button
          variant={"default"}
          className={
            "bg-[#AEF31F] hover:bg-[#a8e600] rounded-[60px] max-w-[206px] w-full h-[54px] py-[16px] px-[24px] flex gap-[10px] font-lufga text-[16px] text-black justify-center items-center"
          }
        >
          <Plus
            size={1.3}
            height={24}
            width={24}
            className="text-[#000000] font-medium"
          />
          <span className="text-black text-[16px] font-medium">
            Add Favourite
          </span>
        </Button>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {dummyListings.map((listing, index) => (
                <ListingCard key={index} listing={listing} />
              ))}
            </div>
    </div>
  );
};

export default UserDashboard;
