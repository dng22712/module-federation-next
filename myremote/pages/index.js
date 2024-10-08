import React from "react";
import dynamic from "next/dynamic"
import RemoteComponent from '../components/RemoteComponent';
import Nav from '../components/nav'
// const Footer = dynamic(()=> import("main/footer"));

export default function Home() {
  return (
   
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <Nav /> 
    
    Hello I am from remote
     <RemoteComponent />

    </div>
  );
}
