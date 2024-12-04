import { ImageSlider } from "@/components/image-slider";
import { clientSideFunction } from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils"

export default function ServerRoutePage(){
    console.log("Server route rendered");
    const res = serverSideFunction();
    const cres = clientSideFunction()
    return(
        <>
          <h1>ServerRoutePage</h1>
          <p>{res}</p>
          <p>{cres}</p>
          <ImageSlider />
        </>
    )
}