"use client";
import React, { useEffect, useState } from "react";
import Nav from "../../component/shared/nav/Nav";
import { useAuthState, useSignInWithGoogle, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase.config";

const LogIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const [btnName,setBtnName] = useState('')
  const handleUser =()=>{
    if(user){
      signOut();
    }else{
      signInWithGoogle()
    }
  }
  useEffect(()=>{
    if(user?.uid){
      setBtnName('Log out');
    }else{
      setBtnName('Google')
    }
    console.log(user)
  },[user]) 
  return (
    <div>
      <Nav />
      <div className="py-24 flex flex-col items-center justify-center gap-6 h-screen w-full">
        LogIn First
          <button onClick={handleUser}>{btnName}</button>
          {/* <button onClick={() => signInWithGoogle()}>With Google</button> */}
      </div>
    </div>
  );
};

export default LogIn;
