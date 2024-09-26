
import { type NextRequest } from "next/server"
import { headers, cookies } from "next/headers"
import { log } from "console";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers)
    const headerList = headers()

    cookies().set("resultPerPage", "23");
    const themeVal = request.cookies.get("theme");

    console.log(requestHeaders.get("Authorization"))
    console.log(headerList.get("Authorization"));

    console.log("Theme value:", themeVal);

    console.log("Cookies value:", cookies().get("resultPerPage"));
    
    return new Response(`<h2>User Profile data</h2>`, {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark",
        }
    })
}