'use client';
import { mainColor } from "@/Colors";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function Buttons(){
    const { userId } = useAuth();
    return(
      <div>
        {userId ? (
            <div className="flex gap-2 max-sm:flex-col  max-sm:mt-8">
                <Link href="/my-notes">
                    <button style={{ backgroundColor : mainColor }} className='max-sm:w-full p-[8px] px-6 text-sm text-white rounded-md'>
                    Access to the App
                    </button>
                </Link>
            </div>
        ) : (
            <div className='flex gap-2 max-sm:flex-col max-sm:mt-8'>
                <Link href='/sign-in'>
                    <button style={{ backgroundColor: mainColor }} className="max-sm:w-full p-[8px] px-6 text-sm text-white rounded-md">
                        Sign In
                    </button>
                </Link>
                <Link href='/sign-up'>
                    <button style={{ borderColor: mainColor, color: mainColor }} className="text-sm border hover:bg-[mainColor] hover:text-white p-[8px] px-6 rounded-md">
                        Sign Up
                    </button>
                </Link>
            </div>  
        )}
      </div>
    )
}
