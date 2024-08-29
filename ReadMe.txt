### Next.js 14 Learning 

## Lec 1 - Introduction (5:05)

Q. What is Next.js? 
# Next.js is a React framework for building web applications.

# Features of Nextjs :-
a). It uses react for building user interfaces,

b). It provides additional features that enables us to build production-ready applications,

c). Nextjs features include routing, optimized rendering, data fetching, bundling, compiling and more,

d). We don't need to install additional packages as Next.js provides everything we need,

e). Opinions and conventions should be followed to implement these features.

Q. Why to use Next.js?
# When we build applications with React alone, it's not feasible to create a fully featured application ready for production. So, in order to build full stack applications with ease we should prefer using Nextjs.

# Next.js simplifies the process of building a web application for production. It provides following features to application due to which we should prefer using Next.js :-
✅ Simplified File-Based Routing: Drop the third-party packages and enjoy hassle-free route creation.
✅ Full-Stack Capabilities: Surprise! Next.js lets you write APIs directly within the framework, making it a one-stop-shop for frontend and backend.
✅ Versatile Rendering: Embrace server-side and client-side rendering for improved performance and SEO.
✅ Streamlined Data Fetching: Fetch data with ease using async/await right in your React components.
✅ Flexible Styling: Support for your favorite styling solutions, from CSS Modules to Tailwind CSS and CSS-in-JS.
✅ Automatic Optimization: Improve Core Web Vitals and user experience without the heavy lifting, thanks to built-in image, font, and script optimizations.
✅ Focused Development: Concentrate on coding with Next.js's optimized build system for both development and production.

## Lec 2 - Hello World (3:20)

# command to create Next.js project : npx create-next-app@latest

## Lec 3 - Project Structure (5:46)

# package.json :- it contains project dependencies and scripts

## scripts in package.json 

# dev - to start the app in development mode,

# build - to build the app for production usage,

# start - to start app production server,

# lint - to setup Next.js built in es-lint configuration

## configuration files

# next.config.mjs - for Next.js configuration,

# tsconfig.json - for TS configuration,

# .eslintrc.json - for es-lint configuration,

# tailwind.config.ts and postcss.config.mjs - for tailwind configuration setup with Next.js project,

# next-env.d.ts - this file contains TS declarations for Next.js,

## different folders

# .next - this folder is generated when we run either the dev or build scripts. It is from this folder where Next.js application is served,

# node_modules - this is where all the dependencies of the project are installed.

# public folder - this folder holds all the static assets to be served such as images ans svg files,

# src folder - it contains all the source code of application. Within this folder we have one folder called 'app' which is the newly introduced app router.

# global.css - it contains the global styles for the app,

# layout.tsx - this is a UI that can be shared across different pages in the Next.js app,

# page.tsx - it is unique UI which we see on visiting browser when application is served. This file replaces the children props in 'layout.tsx' file to from complete UI which we see on the browser.

## Flow of control when we run Next.js app :-

# when we run the command 'npm run dev' in terminal --> the execution is transferred to 'layout.tsx' where root layout component is rendered ---> when we navigate to localhost:3000 (where Next.js app runs) the children prop will always refers to the component defined in 'page.tsx' in app folder that component is the home component which is then renderd in the browser.

