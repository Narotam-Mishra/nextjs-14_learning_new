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

# page.tsx - it is unique UI which we see on visiting browser when application is served. This file replaces the children props in 'layout.tsx' file to form complete UI which we see on the browser.

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

# We can created nested routes as well within Next.js project

# Scenario 3 - let us add two nested routes

Q. How can we achieve nested routing in Next.js project?
# Next.js simplifies nested routes process by allowing us to nest folders inside the app folder

# Note - creating a nested folder structure files will automatically be routed in the same way within the URL.

## Lec 7 - Dynamic Routes (7:54)

# Dynamic Routes Scenario 4 :- In this scenario, we will be building a product listing and Details page. When a user navigates to '/products'. We should display a list of three products however if the user navigates to '/products/id' then we need to display details about the specific product. 

# If we have 100 t0 1000 of products then creating a separate folder for each product is not a viable solution. So, the correct approach is to use the Dynamic Route segments.

# In our example product id 1,2, 3 and so on should be dynamic value that maps to specific file in the products folder. In Next.js we can enclose a folder name with brackets to create a dynamic route.

# Next.js treats folder name which are in square brackets as a dynamic segment enabling us to create Dynamic routes.

# Note - Every page in the app router receives route parameters as a prop (prop name is 'params'). params object contains the route paramters as key-value pairs. In case of 'productId' route we have a single parameter which is the 'productId'.

# Dynamic routes are useful when implementing the list detailed pattern in any UI application.

## Lec 8 - Nested Dynamic Routes (4:09)

# when we build complex application it is common to encounter scenarios where multiple dynamic routes segments are required.

# Nested Dymaic Routes Scenario 5 :- As a user if we navigate to '/products/1' should see the product with id 1 and if we navigate to '/products/1/reviews/1' we can see the first review written about that product.

# when we deal with mutiple path segments the solution lies in a nested folder structure.

# It is possible to create nested dynamic routes by having dynamic segments in the folder names. 


## Lec 9 - Catch all Segments (8:04)

# Synatx --> [...routeName]

# Catch-all Segments Scenario 6 :- let us assume we are building a documentation site for a project that contains several features and each feature consists of multiple concepts that need to be explored. There will be Sidenav and it have various features such as expand sidenav to display. Our goal is to have a unique route for each concept under a given feature. Example - a). localhost:3000/docs/feature1/concept1
b). localhost:3000/docs/feature2/concept2
c). localhost:3000/docs/feature3/concept3,

# 20 features * 20 concepts = 400
# 20 features * 1 [conceptId] = 20
# 1 [featureId] * 1 [conceptId] = 1

# let us consider that we may have 20 features and each feature may have 20 concepts we end up with a massive 400 routes for the Next.js application and since Next.js have a file system based routing mechanishm, 400 routes correspond to 400 files in Next.js project. Here we can make use of dynamic routing by replacing the concept files with dynamic route folders using conceptId and thus we can reduce the number of files to 20 and it si similar for feature folders as well.

# For each additional path in URL we will require another level of nesting in our app folder.

# If every page in our documentation website shares the same layout wouldn't it be great if we could define one file that could handle all the route segments in the URL, we can achieve such behaviour in Next.js using catch-all segments.

# the main feature of catch-all segments is that it will match any URL that contains the folder name where we want to define such matching behaviour (in our example it is 'docs')

# catch-all segments routes captures all URL segments and maps to them to the single file (i.e, page.tsx). This is particulary useful for documentation where we want different segments for better organization and SEO but the layout of the document remains same. This features is only useful if we want to access different segments in the URL.

# slug - slug is a common convention that we use when referring to URLs.

# Note - UI logic can be customized according to our needs depending on how we want to handle the different route segments ideally we would use slug array to fetch corresponding data.

# Optional catch-all routes - where we need to wrap the folder name with double square brackets i.e, [[...slug]]

## Lec 10 - Not Found Page (4:24)

# define custom 404 page using new app router

# By default in any Next.js application when we navigate to a route that is not defined in app folder, Next.js renders a deafult 404 page not found.

# To create a custom not found page, we can simply create a file named 'not-found.tsx/js'

# In most production grade applications it is desirable to display a custom 404 page with branding and custom theme applied.

# If we want to programmatically render custom not-found page based on a certain condition then we can use notFound() function from Next.js 

# not-found pages can also be defined at the folder level 

## Lec 11 - File Colocation (3:49)

# File colocation in Next.js is a practice where related files, such as components, styles, and tests, are stored together in the same directory. This approach keeps all files relevant to a particular feature or component close to each other, making the project more organized and easier to maintain. It contrasts with separating files by type, where all components, styles, and tests are stored in separate directories.

# Next.js uses file system based routing where each folder represents a route segment mapped to a corresponding segment in the URL path however a route isn't publicly accessible until page.js/tsx file is added to the respective route segment.

# Even when route becomes publicly accessible only the content returned by 'page.tsx' is sent to the client. The content returned must be a default exported react component.

# project files can be safely collocated inside route segments. If we want to render line-chart component or bar-chart component simply included in the jsx returned from the default exported component which is dashboard in our example.

# Although we can collocate our project files within the app directory but it is not mandatory, if we prefer we can keep them outside the app directory within 'src' folder.

## Lec 12 - Private Folders (2:51)

# private folders - A feature provided by Next.js to  help you effectively organise your project.

# A private folder indicates that it is a private implementation detail and should not be considered by the routing system which means the folder and all its sub-folders are excluded from routing.

# In order to create a private folder we prefix the folder name with an underscore (_).

# Use of private folders
1). For separating UI logic from routing logic,

2). For consistently organizing internal files across a project.

3). for sorting and grouping files in code editors.

## Lec 13 - Route Groups (5:35)

# Another Next.js features that help us organize our projects namely route groups.

# This feature allows us to logically group our routes and project files without affecting the path structure.

# Let's implement authentication routes 
- Register
- Login
- Forgot password

# Adding register, login & forgot-password to auth folder might be acceptable for authentication routes but it may not be ideal for other groups such as marketing and analytics, so to solve this problem we can use route groups to exclude it from the routes URL path.

# To create route group simply wrap the folder's name in parenthesis (). So creating route groups inform next.js that auth folder should be treated as a route group and its name will be omitted from the URL path.

## Lec 14 - Layouts (5:53)

# A page is UI that is unique to a route.

# A layout is UI that is shared between multiple pages in the app. When building apps it is common to have a consistent layout across different pages such as Header, Content , Footer etc.

Q. How to create Layouts?
# We can define a layout by default exporting a React component from a layout.js or layout.tsx file. That component should accept a children prop that will be populated with a child page during rendering.

# we will not create layout from scratch as Next.js already provides one out of the box. Inside app folder we can find a file named 'layout.tsx'. Similar to page.tsx, 'layout.tsx' follows a special file naming convention in app router. The 'layout.tsx' file in app folder serves as the topmost layout and it is referred to as root layout. The root layout is a mandatory layout for every Next.js application. Next.js automatically generates this file even if we delete it.

# Every layout component should accept a children prop that will be replaced by a child component during rendering. In our example, 'page.tsx' from root app directory will replace the 'children' prop of 'layout.tsx' file when layout is rendered on the browser.

# By defining a single 'layout.tsx' in the app directory, we can create a consistent layout for every page in Next.js app.

# we have freedom to add any markup styles and behaviour. The only requirement is that the component reders the children prop for 'page.tsx'.

## Lec 15 - Nested Layouts (4:02)

# Layout are UI components shared between multiple pages in an application. Each app has a mandatory root layout which is the topmost layout. Layouts can be nested.

# If we want to create a layout for specific route (folder), we can create a 'layout.tsx'

Q. How rendering process works in case of nested layouts?
# rendering process works as follows :-
1). The root layout within the app folder is renderd first which includes the children prop representing the productId folder. The productId folder has its own layout. This replaces the children prop in the root layout.

# This approach of nested layouts allows us to create layouts that apply only to only specific areas of our application.

# Next.js app router supports nested layouts enabling a lot of flexibility and customization.


## Lec 16 - Route Group Layout (2:53)

# The primary usecase of Route Group is to organise our project in a manner that doesn't affect the URL.

# To selectively apply a layout to certain segments while leaving others unchanged.

# Route Group Layout is particularly useful in large projects with numerous layouts and Route segments ensuring a tidy and organized project structure.

## Lec 17 - Routing Metadata (8:12)

# When we build web application ensuring proper search engine optimization (SEO) is crucial for increasing visibility and attracting users.So, Next.js introduced Metadata API which allows us to define metadata for each page.

# Metadata ensures accurate and relevant information is displayed when pages are shared or indexed.

# we will leverage the metadata API to enhance routing metadata.

# With the new app router there are two methods to configure metadata in 'layout.tsx' or 'page.tsx' file .

# Configuring Metadata
1). Export a static metadata object,
2). Export a dynamic generateMetadata function,

# Metadata rules :- 
- Both 'layout.tsx' and 'page.tsx' files can export metadata. If defined in a layout, it applies to all pages in the layout, but if defined in a page, it applies only to that page.

- Metadata is read in order, from the root level down to the final page level,

- When there's metadata in multiple places for the same route, they get combined but page metadata will replace layout metadata if they have the same properties.

# Both 'layout.tsx' and 'page.tsx' can have metadata but page metadata takes precedence if both are present,

# Rule for static metadata object :- when multiple segments in a route export the metdata object the properties are merged to form the final metadata object during merging the deepest segment takes priority,

# Rule for dynamic metadata :- Dynamic metadata depends on dynamic information such as the current route parameters external data or metadata in parent segments. To define dynamic metadata we export a generate metadata function that returns a metdata object from layout or page.tsx file.

# A common use case for dynamic metadata is a dynamic route like productId.

# Note - 'generateMetadata' can also be defined as a async function, we can add the async keyword and within the function body await a fetch request.

# We can use the product ID parameter to retrieve information about the product and set the information as metadata for the page.

# Note - We can not export both the metadata object and 'generateMetadata' function from the same route segment

## Lec 18 - title Metadata (4:19)

# The 'title' field's primary purpose is to define the document title,

# It can be either a string or an object.

# The most straightforward way to set the title attribute is by using a string value.

# For more flexibility we can define the title field using an object. In the root layout import and use meta data type for better intellisense.

# 'title.default' property is useful when we want to provide a fallback title for child route segments they don't explicitly specify a title.

# "template" - to create dynamic titles by adding a prefix or a suffix we can use 'title.template' property. This property applies to child route segments and not the segments in which it is defined.

# "absolute" - if we want to provide a title that completely ignores 'title.template' set in the parent segments we can use "title.absolute" property.

## Lec 19 - Link Component Navigation (7:23)

# Navigation 

# We manually entered the URLs in the browser's address bar to navigate to the different routes,

# Users rely on UI elements like links to navigate 
- clicking on them or
- through programmatic navigation after completing an action,

# UI Navigation

# Navigate from Home --> Blog --> Blog page,

# To enable client side navigation Next.js provides us with the 'Link' component,

# The '<Link>' component is a React component that extends the HTML '<a>' element and it's the primary way to navigate between routes in Next.js. To use it, we need to import it from "next/link".

# Note - 'replace' prop on <Link> component replaces the current history state instead of adding a new URL to this stack.

# Link component in Next.js allows us to navigate between routes using UI elements.

## Lec 20 - Active Links (5:27)

# styling active links

# To determine if a link is active Next.js provides the 'usePathname' hook,

# 'pathname' constant represents the path in the URL. For example - for register route it represents '/register' and for login it represents '/login'.

## Lec 21 - Navigating Programmatically (4:56)

# There are situations where we need to programmatically navigate to specific route. For example - suppose we are placing order on Amazon and upon successful form submission, we are redirected to the order confirmation page.

# When the user clicks the 'place order' button on the prder product page, we will navigate them to the Home page.

# Note - If we want to replace the history instead of pushing the route onto stack we can use router.replace() method. We can also use router.back() to navigate back and router.forward() to navigate to forward page.