"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { CiUser, CiSearch } from "react-icons/ci";
import { auth } from "@/firebase/firebase.config";

const Nav = () => {
  const [user, loading, error] = useAuthState(auth);
  const [url,setUrl] = useState('');
  useEffect(()=>{
      setUrl('/login')
    // console.log(user)
  },[url,setUrl,user])
  return (
    <div className="flex w-full justify-between p-6 fixed top-0 backdrop-blur-2xl z-50">
      <Link href={"/"} className="text-2xl font-semibold">
        😎Emojify
      </Link>
      <div className="flex items-center gap-12">
        <div>Top on Emojify</div>
        <Link href={"/yourList"}>Your List</Link>
        <div>
          <form className="flex items-center">
            <input
              className="border border-r-0 outline-none px-3 p-1 border-black rounded-l-md bg-transparent placeholder:text-black"
              type="text"
              name="search"
              id="search"
              placeholder="Search"
            />
            <button className="border border-l-0 px-3 p-1 rounded-r-md border-black">
              <CiSearch size={24} />
            </button>
          </form>
        </div>
      </div>
      <Link href={url} className="bg-gray-400/50 rounded-full cursor-pointer">
        {user?
          <div style={{backgroundImage:`url(${user?.photoURL})`}} className="h-10 w-10 rounded-full bg-cover bg-center"></div>:
          <div className="p-2">
          <CiUser size={24} />
          </div>
        }
      </Link>
    </div>
  );
};

export default Nav;
