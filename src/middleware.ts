
import { NextRequest, NextResponse } from "next/server";


export function middleware(request: NextRequest){
    // this function redirects the user to home page when '/profile' is accessed,
    
    // Custom matcher config
    // return NextResponse.redirect(new URL("/hello", request.url))

    // using Conditional statements
    // if(request.nextUrl.pathname === '/profile'){
    //     return NextResponse.redirect(new URL("/hello", request.url))
    // }

    // if(request.nextUrl.pathname === '/profile'){
    //     return NextResponse.rewrite(new URL("/hello", request.url))
    // }

    // handle user preferences (using cookies)
    const response = NextResponse.next()

    const themePreference = request.cookies.get("theme")
    if(!themePreference){
        response.cookies.set("theme", "dark")
    }

    // custom header for all responses
    response.headers.set("custom-header", "custom-value");
    return response;
}

// export const config = {
//     matcher: "/profile",
// }