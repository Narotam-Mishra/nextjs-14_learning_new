import { serverSideFunction } from "@/utils/server-utils"

export default function ServerRoutePage(){
    console.log("Server route rendered");
    const res = serverSideFunction();
    return(
        <>
          <h1>ServerRoutePage</h1>
          <p>{res}</p>
        </>
    )
}