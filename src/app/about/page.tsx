import { title } from "process"

export const metadata = {
    title: "About Nextjs App",
}

export default function About(){
    console.log("About server component");
    return <h1>Welcome to About page!</h1>
}