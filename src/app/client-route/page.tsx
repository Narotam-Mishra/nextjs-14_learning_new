"use client"

import { serverSideFunction } from "@/utils/server-utils"

export default function ClientRoutePage(){
    console.log("Client route rendered");
    const res = serverSideFunction();
    return(
        <>
          <h1>ClientRoutePage</h1>
          {res}
        </>
    )
}