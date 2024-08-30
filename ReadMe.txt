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

## Lec 4 - Before We Start (2:05)

# React Server Component (RSC) - React Server Components is a new architecture introduced by the React team in version 18 which was quickly embraced by Next.js

# The architecture introduces a new way of creating React components, spliting them into two types :

a). Server components
b). Client components

# Server Components :- 
- In Next.js, all components are Server components by default
- They have the ability to run tasks like reading files or fetching data from database,
- However, they don't have ability to use hooks or handle user interactions.

# Clinet components :-
- To create a Client component, it's necessary to add "use client" at the top of the component file,
- Client components can't perform tasks like reading files, but they have the ability to use hooks and manage interactions,

# Note - Client components are the traditional React's components we are familiar with and have used in all prior versions of React.

# React Server Component and Routing :-
- We shall explore examples where we use server components that await certain actions to finalize before rendering content on the screen,

- We'll also see examples where we use client components to leverage hooks from the routing module

## Lec 5 - Routing (7:45)

# Routing feture offered by Next.js :-

a). Next.js has a file-system based routing mechanism where URL paths that users can access in the browser are defined by files and folders in your codebase,

# Routing Conventions :-
- All routes must be placed inside the app folder,
- Every file that corresponds to a route must be named 'page.js' or 'page.tsx',
- Every folder corresponds to a path segment in the browser URL

# When above conventions are followed then the file automatically becomes available as route.

# File Based Routing (scenarios)

# Scenario 1 :- let us add a route that needs to be rendered when a user visits a website, let say that page of website is home page. The 'page.tsx' file within the app folder maps to the root of your domain.

# Scenario 2 :- we need two routes, one route to render when the user visits the 'about' page and another to render when the user visits the 'profile' page.

# Next.js automatically creates and populates 'layout.tsx' file when we load the root route 

# Routes associated with a file based on the containing folders name within the app folder 

# Note - By default all routes must be placed within a folder called app which will exist within the source folder

Q. What happens if we enter a URL that can not map to a file in the app?
# then Next.js automatically show 404 page could not found

## Lec 6 - Nested Routes (3:50)

# 