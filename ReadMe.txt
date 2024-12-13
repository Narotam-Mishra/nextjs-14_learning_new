### Next.js 14 Learning 

## Section 1 - Routing in Next.js 

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

## Lec 22 - Templates (4:46)

# Another special file Next.js provide as part of the app router that is 'template' file.

# In auth route group '(auth)' which is having layout file to navigate across three different links 'login', 'register' & 'forgot-password'. We will also add input element to take user input.

# When we navigate from register route to login / forgot-password route the input element state is preserved, this is because layouts only mount the part representing the content of the newly loaded page but keep all the common elements untouched. Layouts don't remount shared components resulting in the better performance. Majority of the time this is the behavoiur we need. 

# In some scenario where we need the layouts to create a new instance for each of their children on their navigation. For example - enter/exit animation for pages or running a side-effect using the 'useEffect' hook when the route changes for such situations we can use the template file as replacement of the layout file.

# Templates :- Templates are similar to layouts in that they wrap each child layout or page. But with templates, when a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state is not preserved and effects are re-synchronized.

# Note - It is possible to include both 'layout.tsx' and 'template.tsx'. In such scenario layout file renders first and layout's children is replaced by the component exported from the template file. Templates are not common requirement and we should always rely on layouts for or shared UI.

## Lec 23 - Loading UI (3:12)

# Special Files 
- page.tsx
- layout.tsx
- template.tsx
- not-found.tsx
- loading.tsx

# 'loading.tsx' - This file allows us to create loading states that are displayed to users while specific route segment's content is loading. The loading state appears immediately upon navigation, giving users the assurance that the application is responsive and actively loading content.

# To create a loading state we simply need to add a 'loading.tsx' file to the designated folder. Let's consider implementing a loading state for the blog route segment.

# Above 'loading.tsx' file will automatically wrap 'page.tsx' file and all its nested children within a react suspense boundary.

# Benefits of 'loading.tsx' file :-
1). We can display loading state as soon as a user navigates to a new route.

2). Next.js allows the creation of shared layouts that remain interactive while new route segments are loading.

## Lec 24 - Error Handling (6:48)

# Special files 
- error.tsx

# Errors are inevitable for instance a failed network request trying to fetch a review could occur. Let us introduce an error scenario in our reviewId page.

# An error in a deeply nested component like reviewId breaks the entire application. A better approach is to handle error gracefully affecting only the concerned segment while keeping the rest of the application functional.That's where 'error.tsx' file comes into play.

# Error boundaries have to be client components in Next.js.

# 'error.tsx' component can also receive the error object as a prop to display more information so we destructure error and we replace hard coded text with 'error.message'

# Tasks of 'error.tsx' :-
- Automatically wrap a route segment and its nested children in a React Error Boundary,
- Create error UI tailored to specific segments using the file-system hierarchy to adjust granularity,
- Isolate errors to affected segments while keeping the rest of the application functional.

## Lec 25 - Recovering from Errors (2:12)

# Error boundary defined in 'error.tsx' file comes with a handy prop, it receives a 'reset' function which we can destructure along with the error object.

# We will add a button that triggers the reset function on click offering a way to retry rendering the component in 'page.tsx'.

# To ensure that we can recover on client side, we need to convert our 'page.tsx' to a client component as well. So we need to add "use client" at top of the file.

# Executing the 'reset' function attempts to render the error boundaries contents if successful the fallback error component is replaced with the re-rendered content from 'page.tsx'. That's how we recover from errors in the new app router.

## Lec 26 - Handling errors in Nested Routes (2:43)

# Nested nature of components influences how our 'error.tsx' file 

# Errors bubble up to the closest parent error boundary which implies that an 'error.tsx' file will cater to errors for all its nested child segments.

# By positioning 'error.tsx' files at different levels in the nested folders of a route we can achieve a more granular level of error handling.

# Once we move 'error.tsx' file top in hierarchy to products component we can see the same error message as before however this time the entire products route is replaced by the UI from the 'error.tsx' file, the error from 'page.tsx' in the review ID bubbles up to the nearest error boundary which is now defined in 'error.tsx' file in the product folder.

# The placement of 'error.tsx' file plays a crucial role in determining the scope of error handling allowing for more precise control over which parts of the UI are affected when errors occur, deeper the placement of error.tsx more granular is error handling.

## Lec 27 - Handling Errors in Layouts (3:01)

# As we know an 'error.tsx' file will handle errors for all its nested child segments. However there is a nuance when it comes to a 'layout.tsx' component within the same segment. There are boundary that doesn't catch errors thrown here because it is nested inside the layout component.

# The error boundary will not handle errors thrown in a 'layout.tsx' component within the same segment, to navigate around this we will need to place the 'error.tsx' file in the layout's parent segment.

# Hence the placement of the 'error.tsx' file plays a pivotal role in managing errors efficiently across different segments of the application.

## Lec 28 - Parallel Routes (11:45)

# Advanced Routing concepts in Next.js 

# Parallel Routes :- Parallel routes are an advanced routing mechanism that allows for the simultaneous rendering of multiple pages within the same layout.

# Scenario 7 - consider the challenge of building a complex dashboard for a web application where we need to display various views like user analytics 'Revenue metrics' and information all at once.

# The traditional approach of component composition (define component in parts) is effective and using parallel routes we can achieve the same outcome with additional benefits.

# Parallel routes in Next.js are defined using a feature known as slots. Slots help structure our content in a modular fashion.

# To define a slot, we use the '@folder' naming convention.

# Each slot is then automatically passed as a prop to its corresponding 'layout.tsx' file.

# In context of dashboard example, we would define three distinct slots within the dashboard folder, these are - users, revenue & notifications.

# Each slot (users, notifications & revenue) is automatically passed to the `layout.tsx` file component as a prop which we can then use to structure the dashboard.

# Note - slots are not route segments and do not affect the URL structure.

# 'children' prop in complex-dashboard's 'layout.tsx' file is equivalent to 'complex-dashboard/@children/page.tsx'. so technically there are four slots in 'layout.tsx' file.

# Benefits of using Parallel routes :-
- A clear benefit of parallel routes is their ability to split a single layout into various slots, making the code more manageable. This is particularly advantageous when different teams work on various section of the page.

# The true benefit of parallel routes lies in their capacity for independent route handling and sub-navigation.

# One of the most compelling features of parallel routes is the ability to handle each route independently.

# Independent Route Handling :- Each slot of our layout, such as user analytics, revenue metrics can have its own loading and error states. If user analytics data takes longer to load we can display a loading spinner specifically for that section while other parts remain interactive. Thus it helps in improving UI experience and simplifies debugging and maintenance.

# Sub-navigation in routes :- Each slot of our dashboard can essentially function as a mini-application, complete with its own navigation and state management.

# Parallel routes allow simultaneous rendering of different pages within the same layout. it is defined using slots. Slots organise content in a modular fashion making code more manageable. Thus it simplifies code management and enchance user experience with independent route handling and sub-navigation.

## Lec 29 - Unmatched Routes (9:06)

# In case of complex dashboard example, a usecase would be navigating between a default list of notifications and archive list of notifications.

# Unmatched routes - By default the content rendered within a slot matches the current URL. In our dashboard folder we have four slots. 'children' represented by 'page.tsx', users, revenue and notifications, all these slots render their defined content when visiting complex dashboard however when navigating to '/complex-dashboard/archived' only the notifications slot has a matching route and other three routes i.e children, users and revenue become unmatched routes.

# When dealing with an unmatched slot, the content rendered by Next.js depends on the routing approach. In case of navigation within the UI Next.js retains the previously active state of a slot regardless of changes in the URL which means when we navigate between the defualt notifications and archived notifications, the other slots i.e children, users and revenue remain unaffected. These slots continue to display whatever content they were showing beforeand and are not influenced by the shift in the URL path.

# In case of page reload Next.js immediately searches for a 'default.tsx' file within each unmatched slot. the presence of this file is critical as it provides the default content that Next.js will render in the user interface.

# Note - If the 'default.tsx' file missing in any of the unmatched slots for the current route, the NExt.js will render 404 error.

# 'default.tsx' - the `default.tsx` file in Next.js serves as a fallback to render content when the framework cannot retrieve a slot's active state from the current URL.

# We have complete freedom to define the UI for unmatched routes: we can either mirror the content found in 'page.tsx' or craft an entirely custom view.

# In our example, to prevent 404 error, we have to include 'default.tsx' files with the three unmatched routes.

# To prevent 404 error for the other slots when accessing this route we need to setup default views. The default view should be at the same level in the directory structure as 'page.tsx'

# The 'default.tsx' file will act as fallbacks for routes without specific content. This approach ensures that we don't accidentally render a route that shouldn't be parallel renderd.

# In Parallel routing content within the slot usually matches the current URL however unmatched slots the behaviour varies on how the navigation occurs, if navigated from the UI the slot's previously active state is rendered, on a page reload Next.js looks for a 'default.tsx' file in the slot and lacking that a 404 error appears.

## Lec 30 - Conditional Routes (3:47)

# Parallel routing offer a way to implement conditional routing. FOr example :- based on user's authentication state we can choose
to render the dashboard for authenticated users or a login page for those who are not authenticated. This is powerful as it enables fully separate code on the same URL.

# parallel routes allow us to conditionally render pages based on certain conditions keeping our code well separated under the same URL. This login slot also benefits from independent error and loading states as well as sub-navigation to a possible signup or forgot password route.

## Lec 31 - Intercepting Routes (10:27)

# Two advanced routing patterns in Next.js are :-
1). parallel routes,
2). Intercepting routes 

# Intercepting routes allow us to intercept or stop the default routing behaviour to present an alternative view or component when navigating through UI, while still preserving the intended route for scenarios like page reloads. This can be useful if we want to show a route while keeping the context of the current page.

# Clicking on a login link or button normally take us through a full login page however with intercepting routes we can configure the application to display login modal instead while the URL is still updated to reflect the '/login' route, this ensures the link remains sharable, if the page is reloaded or if someone accesses the page using shared link the full login page is displayed as expected.

# Similar in photo feed application where users can browse through a list of images clicking on a photo would navigate users to a new page dedicated to that image. With intercepting routes, clicking on a photo opens a modal within the feed displaying an enlarged photo and details, the URL updates to reflect the selected photo ensuring it is sharable, direct URL access or page reloads still lead to a full page view of the photo for complete details.

# Defining intercepting routes in Next.js application involves certain conventions.

# Intercepting Routes Conventions :- To create an intercepting route at same level we use a dot (.) within parentheses notation in a folder name '(.)f2'

# Concept of Intercepting route - display a different UI while in the context of the current page but render the regular UI on page reload.

# In our example, 'f2' and 'intercepting f2' are on the same level. It is also possible to match segments one level above, the convention is to prefix the folder name with two dots '(..)' within the parentheses

# when we use '(..)' folder naming convention, it means we are essentially saying use this route instead of the F3 route one segment above when navigating from 'page.tsx' within f4 folder to f3 folder.

# The last convention '(...)' is used to match segments from the root app directory.

# Note - '(..)(..)' this convention is used to match segments two level above but there is an issue with this convention and it doesn't quite work.

# Intercepting routes allow us to load a route from another part of our application within the current layout. This routing paradigm can be useful when we want to display the content of the route without the user switching to a different context.

## Lec 32 - Parallel Intercepting Routes (5:57)

# Advanced Routing Patterns
- Parallel routes
- Intercepting routes

# Photo feed example which will use both above techniques.

# Photo feed is an example of parallel route which has been intercepted. The URL updates to photo feed followed by the image id but modal route is a parallel intercepted route that is being rendered in the same layout and has the context of the photo feed in the background.

# Typically with modals clicking on browser's back button would take you to the previous page and not just close the modal but with parallel intercepting routes we can fix this issue.

# Parallel intercepting routes concept can be applied for opening a login modal when we click on login button but a login page when we directly navigate to '/login'

# Steps to implement Parallel Intercepting Routes 
1). find the list of images and place them in the photos folder within photo-feed folder,
2). import all images in typescript file 'wonders' and create an array out of these images with some metadata for each image,
3). create a 'page.tsx' file in photo-feed folder and render the list of images using the 'wonders' array, this page will render the photo feed when we navigate to its URL,
4). create the photo details dynamic route, within the photo-feed folder create a new '[id]' folder, this file will render the individual photo details when we navigate to particular photo,
5). for this step we need to intercept the navigation from the feed to the details page, since we want a modal that will render on the top of current feed we need a parallel route first, so within the 'photo-feed' folder we will create a '@modal' as parallel route and included in 'layout.tsx' file along with children slot (children & modal where children correspond to 'page.tsx'), then we will create '(..)photo-feed' route within '@modal' that will intercept photo feed route one segemnt above which also contain '[id]' folder, within [id] folder create a page that renders the photo details similar to the Id route from before but this time place inside a modal.

# Reloading will render the original route,

## Lec 33 - Route Handlers (7:01)

# Concept of Route Handlers 

# With Next.js app router we have the capability to handle more than just page routing we can also create custom request handlers for our routes using a feature called route handlers.

# Unlike page routes, which respond with HTML content, route handlers allow us to create RESTful endpoints, giving us full control over the response where we can perform CRUD operations with a database and thus there is no overhead to create and configure a separate server.

# Route handlers are also great for making external API requests. For example - if we are building an application that requires fetching data from a third party service, route handlers are ideal, they are on server side ensuring that sensitive information like private keys remain secure and never gets shipped to the browser.

# Route Handlers are the equivalent of API routes in Page router.

# Thus Next.js simplifies routing on both frontend and backend.

# similar to page routes, 'Route Handlers' must also be placed inside 'app' folder. 

# In order to create 'route handlers' file name should be 'route.ts'. This is a Next.js convention that we must have to follow. The function name matching an HTTP verb is another convention we must have to follow.

Q. How to create route handlers?
==> create a 'route.ts' file that exports HTTP verbs as functions. In our example - a get request to 'hello-route-handlers' results in the get handler being executed and responding with 'Hello world from route handlers' plaintext.

# Two important points related to route handlers :-
1). similar to page routes, 'route handlers' can be organized in folders and nested within sub-folders, this allows for cleaner organization and easier management of routes.

2). Be mindful of potential conflicts of page routes and route handlers. For example - if we have a folder named 'profile' where we have both 'route.ts' & 'page.tsx' files. The 'route.ts' will handle the request by default. 

# To avoid the above conflict between 'page.tsx' & 'route.ts' and both of them working then we can move the route handlers to an API sub-directory.

# 'Route Handlers' allow us to create custom request handlers for a given route they are defined in a 'route.js' or 'route.ts' file inside the app directory.

# Note - A 'route.ts' file at the same route segment level as that of 'page.tsx' will result in conflict and the page will not be served.

## Lec 34 - Handling GET Request (4:13)

# Working with route handlers - 'get' request handling

# GET route handler will return a new respone object of the common array in the JSON format

## Lec 35 - Handling POST Request (4:22)

# It's important to match the function name with HTTP method we want to handle.

# Every route handler function receives the standard web request object as a parameter. From request object we will extract the JSON body specified as part of the request and for this we will call `request.json()` method.

# define a 'post' handler in the 'route.ts' file, make use of the request parameter to access the request body and then send an appropriate response.

## Lec 36 - Dynamic Route Handlers (4:43)

# handling 'patch' and 'delete' requests is slightly different in the sense that we need to specify the Id of the information updating or deleting. Id is a dynamic segemnt of the URL.

# we neeed to create route handlers for '/comments/:id'.

# Dynamic route handlers work similar to dynamic page routes. so we create '[id]' folder where we create 'route.ts' file in which we define handler function that will return a single comment whose id matches the id route parameter.

# Handler function receives two parameters - a). request object & b). context,

# From our example the only value of context is params which is an object containing the dynamic route parameters for the current route

## Lec 37 - Handling PATCH Request (4:07)

# A 'patch' request applies partial modifications to a resource.

## Lec 38 - Handling DELETE Request (3:16)

# A delete request delete a specified resource.

# In our example we will delete a comment by Id.

# 'delete' method will receive 'request' & 'context' as parameters similar to patch method.

## Lec 39 - URL Query Parameters (3:47)

# consider an example where we want to filter array values (array of comments) based on specific query.

# To handle 'query parameters' effectively we need the request parameter.

# Until now we've been defining the request type as the standard 'request' API. However in context of Next.js the type we are actually dealing with is 'NextRequest' which we can import from 'next/server'.

# The NextRequest object provides convenient methods for managing query methods for managing query parameters with ease.

# query paramters in route handlers are often optional but they are incredibly useful for implementing search, sort and pagination functionalities.

## Lec 40 - Redirects in Route Handlers (2:49)

# when we try to access comment by id and that 'id' doesn't exist then we encounter an error because the current code logic doesn't handle Ids that are not present in the comments array. Let us improve this by redirecting user to the comments listing page if requested 'id' not found.

# For redirection we will make use of 'redirect' function from 'next/navigation'

# Status code 307 is used for redirection.

## Lec 41 - Headers in Route Handlers (6:30)

# HTTP headers represent the metadata associated with an API request and response. This metadata can be classified into two categories :-
1). Request Headers :- These are sent by the client, such as a web browser, to the server. They contain essential information about the request, which helps the server to understand and process it correctly. For example :-
==>  'User-Agent' - It identifies the browser and Operating system to the server. It is often used for browser specific content rendering and analytics
==> 'Accept' - It indicates the content types like text, video or image formats that the client can process. It enables the server to deliver the resource in a format suitable for the client.
==> 'Authorization' - This header used by the client to authenticate itself to the server.

2). Response Headers :- These are sent back from the server to the client. They provide information about the server and the data being sent in the response. For example :-
==> 'Content-Type' - This header indicates the media type of the response. It tells the client what the data type of the returned content is, such as text/html for HTML documents, application/json for JSON data etc.

# When we define route handlers in Next.js, it is important how to read request headers and send back response headers.

# By default the request has two headers - Accept & User-Agent.

Q. How do we read these headers in route handler?
# There are two ways :- 
1). request parameter
2). headers function - we can also choose to use headers function that Next.js provide.

# How to set outgoing headers

# headers returned from headers() method are read only , to set headers we need to return a new response with the new headers

# To set headers we need to return a new response with new headers.Using request-response headers we can apply any logic we want to within the route handler

## Lec 42 - Cookies in Route Handlers (4:02)

# Cookies are small pieces of data that a server sends to a user's web browser. The browser may store the cookie and send it back to the same server with later requests.

# Cookies are mainly used for three purposes :-
- Session management like logins and shopping carts,
- Personalization like user preferences and themes,
- Tracking like recording and analyzing user behaviour.

# set and get cookies inside of a route handler. There are two approaches to both setting and getting cookies :-
1). to set a cookie the first option is to return new response using the Set-Cookie header. To read (get) above cookie in our route handler we can make use of the request parameter. This is the first approach to set and get cookies in the route handler (using "Set-Cookie" header and the request object)

2). the second option is to set and get cookies using cookies function provided by Next.js,

## Lec 43 - Caching in Route Handlers (4:09)

# Route Handlers are cached by default when using the 'GET' method with the Response object in Next.js,

Q. How to opt out of caching?
- dynamic mode in 'Segment Config' Option

# By default the value of dynamic is auto which attempts to cache as much as possible, we will set it to 'force-dynamic' ensuring that the handler is executed for each user request.

# Beside the segment config option there are three other ways to opt out of caching for a route handler. These includes :-
- using the Request object with the 'GET' method,
- employing dynamic functions like headers() and cookies(),
- using any HTTP method other than GET,

# In all above four scenarios, response is not cached.

## Lec 44 - Middleware (8:22)

# Middleware :- Middleware in Next.js is a powerful feature that offers a robust way to intercept and control the flow of requests and responses within our applications.

# It does this at a global level significantly enhancing features like redirection, URL, rewrites, authentication, headers and cookies management, and more.

# To create middleware in Next.js start by adding a `middleware.js/middleware.ts` file in source folder,

# Middleware allows us to specify paths where it will be active. There are two main approaches to implement middleware in next.js :-
1). Custom matcher config,
2). Conditional statements

# We will explore both approaches using redirection as an example.

# Imagine a scenario where navigating profile page (/profile) should redirect the user to the home page,

# when we try to navigate to '/profile' in the browser, it automatically re-directs to the homepage ('/') showcasing the matcher config approach,

# for 2nd approach we will use conditional statements,

# Apart from handling redirections middleware also allows URL re-writes which is a useful tool for legacy URL support or SEO,

# By changing `redirect` to `rewrite` and navigating to '/profile' , we can see the URL in the browser stays the same but the response content changes.

# Use of cookies and headers in middleware :- we will modify our middleware to handle user preferences for themes and add a custom header for all responses.

# custom headers are useful for passing additional information in responses which can be leveraged by client side scriptss or for debugging purposes.

# We can see middleware can be effective actively used to manipulate both cookies and headers.

# Middleware in Next.js allow us to effectively control and intercept the request-response cycle enabling redirects URL rewrites and the manipulation of headers and cookies.

## Section 2 - Rendering in Next.js

## Lec 45 - Rendering (1:31)

# Rendering is the process that transform the code we write into user interfaces,

# In Next.js, choosing the right time and place to do this rendering is vital for building a performant application,

# Rendering in React ----> Rendering in Next.js

## Lec 46 - Client-side Rendering (CSR) (3:22)

# Rendering in React - As we know React being the go-to library for creating SPA.

# In a typical Single Page Application (SPA), when a client makes a request the server sends a single HTML page to the browser. This HTML page often contains just a simple div tag and reference to a JS file then JS file is downloaded when HTML file is parsed. The downloaded JS code then generates the HTML on our computer and inserts into the DOM under the root div element and we can see the user interface in the browser. This process is evident when we see the HTML appear into the DOM inspector but not in the view source option which shows the HTML file sent by the server to the browser. This method of rendering where the component code is transformed into a user interface directly within the browser is known as Client-side Rendering (CSR).

# CSR quickly became the standard for SPAs, with widespread adoption,

# It wasn't long before developers began noticing some inherent drawbacks to this approach.

# Drawbacks of CSR :-
==> SEO - Generating HTML that mainly contains a single div tag is not optimal for SEO, as it provides little content for search engines to index.
# Large bundle size and a waterfall of network requests for API responses from deeply nested components may result in meaningful content not being rendered fast enough for a crawler to index it

==> performance - Having the browser (the client) handle all the work, such as fetching data, computing the UI and making the HTML interactive, can slow things down. Users might see a blank screen or a loading spinner while the page loads. This thing get worse with time as each new feature added to the application increases the size of the JavaScript bundle, prolonging the wait time for users to see the UI. This delay is noticeable for users with slow internet connection.

# CSR laid the ground work for the interactive web applications we're used to today but to enchance SEO and performance, developers started looking for better solutions

## Lec 47 - Server-side Rendering (SSR) (6:06)

# Recollecting Drawbacks of CSR :-
# Reliance on JavaScript for rendering content on the client side can significantly hurt SEO, as search engines might struggle to index the content properly.

# The user experience can suffer from slow load times, as the browser has to download, parse and execute JavaScript before the user sees any meaningful content on the page.

# To overcome above drawbacks of CSR, modern React framework like Gatsby and Next.js pivoted towards Server-side solution. This approach fundamentally changes how content is delivered to the user.

# SSR mechanism :- When a request comes in instead of sending a nearly empty HTML file that depends on client side Javascript to construct the page, the server takes full charge of rendering the full HTML. This full formed HTML document is then sent directly to the browser since the HTML is generated on the server the browser is able to quickly parse and display it improving the initial page load time. The Server-side approach effectively resolves the issues associated with client-side rendering.

# Server-side solutions :-
- It significantly improves SEO because search engines can easily index the server-rendered content,

- Users can immediately see the page HTML content, instead of a blank screen or loading spinner.

# However SSR's approach to immediately improving the visibility of content has its own complexity particularly when it comes to the pages interactivity. The full interactivity of the page is on hold until the JavaScript bundle comprising React itself along with our application specific code has been completely downloaded and executed by the browser. This important phase known as 'hydration' is where the static HTML pages initially served by the Server is brought to live.

# Hydration :- During hydration, React takes control in the browser, reconstructing the component tree in memory based on the static HTML that was served. It carefully plans the placement of interactive elements within this tree. Then, React proceeds to bind the necessary JavaScript logic to these elements. This involves initializing the application state, attaching event handlers for actions such as clicks and mouseovers, and setting up any other dynamic functionalities required for a fully interactive user experience.

# Server-side solutions can be categorized into two strategies :-

1). Static Site Generation (SSG)
2). Server-Side Rendering (SSR)

# SSG occurs at build time, when the application is deployed on the server. This results in pages that are already rendered and ready to serve. It is ideal for content that doesn't change often, like blog posts.

# SSR, on the other hand, renders pages on-demand in response to user requests. It is suitable for personalized content like social media feeds, where the HTML depends on the logged-in user,

# Server-side Rendering (SSR) was a significant improvement over Client-Side Rendering (CSR), providing faster page loads and better SEO, however SSR introduced its own set of challenges.

# Drawbacks of SSR :-
1). We have to fetch everything before we can show anything :- Components cannot start rendering and then pause or "wait" while data is still being loaded.

# If a component needs to fetch data from a database or another source (like an API), this fetching must be completed before the server can begin rendering the page. This can delay the server's response time to the browser, as the server must finish collecting all necessary data before any part of the page can be sent to the client.

2). We have to load everything before we can hydrate anything :- For successfull hydration, where React adds interactivity to the server-rendered HTML, the component tree in the browser must exactly match the server-generated component tree. This means that all the JavaScript for the components must be loaded on the client before we can start hydrating any of them,

3). We have to hydrate everything before we can interact with anything :- React hydrates the component tree in a single pass, meaning once it starts hydrating , it won't stop until it's finished with the entire tree. As a consequence, all components must be hydrated before we can interact with any of them.

# Drawbacks of SSR - All or Nothing waterfall
1). having to load the data for the entire page, 
2). load the JavaScript for the the entire page, and
3). hydrate the entire page

# These create an "all or nothing" waterfall problem that spans from the server to the client, where each issue must be resolved before moving to the next one.

# This is inefficient if some parts of our app are slower than other, as is often the case in real-world apps.

## Hydration in Next.js is the process where a server-rendered React application gets "re-activated" on the client side. In a Next.js application, content is initially rendered on the server, then sent as HTML to the client. Once the JavaScript code arrives, React takes over and hydrates the static HTML with interactivity, allowing it to become a fully functional React app.

Q. How Hydration Works ?
1). Server-Side Rendering (SSR): Next.js renders the page on the server and sends the fully rendered HTML to the client.

2). Hydration: When the client receives the static HTML, React "hydrates" it. This means it attaches event listeners, state, and other React features to the existing HTML structure, making it interactive.

## Lec 48 - Suspense for SSR (7:48)

# Drawbacks of SSR - All or Nothing Waterfall
1). Data Fetching must be completed before server can begin rendering HTML,

2). The JavaScript required for the components needs to be fully loaded on the client side before the hydration process can start,

3). All components have to be hydrated before they become interactive,

# Theses issues contribute to an 'all-or-nothing' waterfall scenario, resulting in inefficiencies, especially if certain parts of your application are slower than others.

# To address these performance drawbacks of SSR, React 18 introduced the suspense SSR architecture,

# Suspense SSR Architecture :- This new architecture allows us to use the suspense component to unlock two major SSR features and they are :-
1). HTML streaming on the server,
2). Selective hydration on the client,

# As we know, SSR has been an 'All or Nothing' affair, server sends the complete HTML which is then sent to the client then client displays this HTML and only after the complete JavaScript bundle is loaded does React proceed to hydrate the entire application to add interactivity,

# First we render all HTML, the client eventually receives it then we load all the code and hydrate the entire application however with React 18 we have new possibility - by wrapping a part of the page such as the main content area within suspense component we instruct React that it doesn't need to wait for the main section data to be fetched to start streaming the HTML for the rest of the page. React will send a placeholder like a loading spinner instead of the complete component. Once the server is ready with the data for the main section, React sends additional HTML through the ongoing stream accompanied by an inline script tag containing the minimal JS needed to correctly position that HTML. As a result of this even before the full React library is loaded on the client the HTML for the main section becomes visible to the user, this solves the our first problem of 'We don't have to fetch everything before we can show anything'.

# If a particular section delays the initial HTML, it can be seamlessly integrated into the stream later. This is the essence of how Suspense facilitates server-side HTML streaming.

# The other challenge - Until the JS for the main section is loaded, client-side app hydration cannot start, and if the JS bundle for the main section is large, this could significantly delay the process.

# To mitigate above issue, 'code splitting' can be used - Code splitting allows us to mark specific code segments as not immediately necessary for loading, signalling our bundler to segregate them into separate `<script>` tags.

# Using `React.lazy` for code splitting enables us to separate the main section's code from the primary Javascript bundle. As a result, the JavaScript containing React and the code for the entire application, excluding the main section, can now be downloaded independently by the client, without having to wait for the main section's code and this is crucial.

# Selective Hydration on the Client :- By wrapping the main section within `<Suspense>`, we've indicated to React that it should not prevent the rest of the page from not just streaming but also from hydrating. This feature, called selective hydration allows for the hydration of sections as they become available, before the rest of the HTML and the JS code are fully downloaded.

# From the user's perspective initially they see non-interactive content that streams in as HTML then React to hydrate, the JS code for the main section isn't there yet but it's okay as we can selectively hydrate other components. The main section is hydrated once its code is loaded. Due to 'Selective Hydration' a heavy piece of JS doesn't prevent the rest of the page from becoming interactive.

# Selective Hydration offers a solution to the third issue: the necessity to "hydrate everything to interact with anything". React begins hydrating as soon as possible, enable interactions with elements like the header and side navigation without waiting for the main content to be hydrated. This process is managed automatically by React.

# In scenarios, where multiple components are awaiting hydration, React prioritizes hydration based on user interactions. For example - if the side nav is about to be hydrated and we click on main content area, React will synchronously hydrate the clicked component during the capture phase of the click event this ensures the component is ready to respond to immediately to user interactions, sidenav is hydrated later on.

# Thus the three significant drawbacks of traditional SSR have all been addressed by the new suspense SSR architecture.

# Despite of improvements in SSR, there are still few challenges in suspense SSR.

# Drawbacks of Suspense SSR :-
1). Even though JS code is streamed to the browser asynchronously, eventually, the entire code for a web page must be downloaded by the user. As applications add more features, the amount of code users need to download also grows. This lead to an important question :-
- should users really have to download so much data?

2). The current approach requires that all React components undergo hydration on the client-side, irrespective of their actual need for interactivity. This process can inefficiently spend resources and extend the loading times and time to interactivity for users, as their devices need to process and render components that might not even require client-side interaction.

# This leads to another question :
- should all components be hydrated, even those that don't need interactivity
?

3). In spite of servers superior capacity for handling intensive processing tasks, the bulk of JS execution still takes place on the user's device. This can slow down the performance, especially on devices that are not very powerful.

# This leads to another important question :-
- should so much of the work be done on the user's device?

# Above issues highlight the need for a better way to build the faster applications that improves upon traditional rendering techniques while overcoming their limitations.

## Lec 49 - React Server Components (RSC) (9:00)

# The Evolution of React : CSR ---> SSR ---> Suspense for SSR

# Suspense for SSR bought us closer to a seamless rendering experience. But there are still challenges :-
- Increased bundle sizes leading to excessive downloads for users.
- Unnecessary hydration delaying interactivity.
- Extensive client-side processing that could result in poor performance.

# To address above challenges, simply taking an incremental step is not enough we need a significant leap towards a more powerful solution and that brings us to React Server Component (RSC).

# RSC represents a new architecture designed by the React team. This approach aims to leverage the strengths of both server and client environments, optimizing for efficiency, load times and interactivity. The architecture introduces a dual-component model
- Client Components
- Server Components

# Above distinction is not based on the functionality of the components but rather on where they execute and the specific environments they are designed to interact with.

# Client Components :- Client Components are the familiar React components we've been using. They are typically rendered on the client-side (CSR) but, they can also be rendered to HTML on the server (SSR), allowing users to immediately see the page's HTML content rather than a blank screen. Component that primarily run on the client but can (and should) also be executed once on the server as an optimization strategy.

# The idea of client components rendering on the server might seem confusing but it is helpful to view them as components that primarily run on client but can and should also be executed once on the server as an optimization strategy.

# Client Components have access to the client environment, such as the browser, allowing them to use state, effects and event listeners to handle interactivity and also access browser-exclusive APIs like geolocation or localStorage, allowing us to build UI for specific use cases. In fact, the term "Client Component" doesn't signify anything new; it simply helps differntiate these components from the newly introduced Server Components.

# Server Component - Server Component represents a new type of React component specifically designed to operate exclusively on the server and unlike client components, their code stays on the server and is never downloaded to the client. This design choice offers multiple benefits to React applications.

# Benefits of Server Components :-

1). Reduced Bundle Sizes :- Server Components do not send code to the client, allowing large dependencies to remain on server-side. This benefits users with slower internet connection or less capable devices by eliminating the need to download, parse, and execute JS for these components.

# Additionally, it removes the hydration step, speeding up app loading and interaction.

2). Direct Access to Server-side resources :- By having direct access to server-side resources like Databases or file systems, Server Components enable efficient data fetching and rendering without needing additional client-side processing.

# Leveraging the server's computational power and proximity to data sources, they manage compute-intensive rendering tasks and send only interactive pieces of code to the client.

3). Enhanced Security :- Server Component's exclusive server-side execution enhances security by keeping sensitive data and logic, including tokens and API keys, away from the client-side.

4). Improved Data Fetching :- Server Components enhance data fetching efficiency typically when fetching data on the client-side using useEffect, a child component cannot begin loading its data until parent component has finished loading its own. This sequential fetching of data often leads to poor performance. 

# The main issue is not the round trips themselves, but that these round trips are made from the client to the server.

# Server Component enable applications to shift these sequential round trips to the server side. By moving this logic to the server, request latency is reduced and overall performance is improved eliminating client-server waterfalls.

5). Caching :- Rendering on the server enables caching of the results, which can be reused in subsequent requests and across different users. This approach can significantly improve performance and reduce costs by minimizing the amount of rendering and data fetching required for each request.

6). Faster Initial Page Load and First Contentful Paint :- Initial Page Load and First Contentful Paint (FCP) are significantly improved with Server Components. 

# By generating HTML on the server, pages become immediately visible to users without the delay of downloading, parsing, and executing JS.

7). Improved SEO :- Regarding Search Engine Optimization (SEO), the server-renderd HTML is fully accessible to search engine bots, enhancing the indexability of our pages.

8). Efficient Streaming :- Server Components allows the rendering process to be divided into manageable chunks, which are streamed to the client as soon as they are ready.

# This approach allows users to start seeing parts of the page earlier, eliminating the need to wait for the entire page to finish rendering on the server.

# With RSC architecture, Server Components take charge of data fetching and static rendering, while Client Components are tasked with rendering the interactive elements of the application.

# The bottom line is that the RSC architecture enables React applications to leverage the best aspects of both server and client rendering, all while using a single language, a single framework and a cohesive set of APIs.

# RSC improve upon traditional rendering techniques while also overcoming their limitations.

# RSC Key Takeways :- RSC introduce a new way of building React apps by separating components into two types : Server Component and Client Components

# Server Components run only on the server, accessing data and preparing content without being sent to the browser, which makes the app faster for users because less information needs to download. They can't manage clicks or interactions directly.

# Client Components on the other hand, work in the user's browser and handle all the interactive parts of the app, like clicking and typing. They can also be rendered on the server for a fast initial load of the site. This setup helps make websites faster, more secure and easier for everyone to use, no matter where they are or what device they're using.

# RSC and Next.js

Q. This deep dive into the evolution of rendering in react is great, but how exactly does it help understand rendering in Next.js? What's the connection?

# The App Router in Next.js is build around the RSC architecture, so all the features and benefits we've discussed are already baked into the latest version of Next.js. 

# By understanding the evolution of React's rendering, we now have the necessary background for the rest of section where we focus on Next.js.

## Lec 50 - Server and Client Components (8:20)

# RSC + Next.js

# By default, every component in a Nextjs app is considered to be a server component. This include root layout and root page that come out of the box with a new Next.js project.

# When we run the application and check console we don't see any log message in the browser console instead we see the message in the terminal where we are running our application hence it is clear our component is server component. This component runs on the server bringing along all the benefits of server components such as zero bundle size, access to server side resources, enchanced security, better SEO etc.

# But Server components have their limitations like they can't interact directly with browser APIs or handle user activity. If we try to incorporate some state into our about page using `useState` hook then we will see an error this is because `useState` expects a client component environment but our about page is a server component and server components cannot use useState because they are rendered on the server where there is no concept of state exist. So this confirms a fact that every component created in Nextjs is a server component unless specified otherwise.

# For Client components, we must include a directive or to put it simply a special instruction within the double quotes i.e "use client"

# "use client" --> this directive acts as our ticket to cross the boundary from server to client side and is what allows us to define client components. It signals the Nextjs that the current component with any components it imports is intended for client side execution. As a result the component gains the full access to browser APIs and ability to handle interactivity.

# Client components rendering behaviour :- client components are primarily executed in the client and have access to the browser APIs but they are also pre-renderd once on the server to allow the user to immediately see page's HTML content rather than blank screen. It is an optimization strategy that Nextjs implements and is recommended by React.

# In the RSC architecture and by extension in the Next.js app router, components are server components by default.

# To use client components, we must include the use client directive at the top.

# Server components are renderd only on the server

# Client components are rendered once on the server and then on the client (browser).

## Lec 51 - RSC Rendering Lifecycle (3:55)

# We're going to learn about the rendering lifecycle of server and client components.

# In simpler terms, we'll explore how they come to life on your screen.

# For React Server Component (RSC), it's important to consider three elements: your browser (the client), and on the server side, Next.js (the framework) and React (the library).

# Let's break down the initial loading sequence step by step :- 
===> RSC Intial Loading sequence :- when our browser requests a page, Nextjs's app router matches the requested URL to a server component, Nextjs then instructs react to render that server component, react renders the server component and any child components that are also server components converting them into a special JSON format known as the RSC payload. If we inspect the webpage and go to Network tab when navigating to a route we will come across this special JSON format which is RSC payload (in Response section of Network tab). During this rendering if any server component suspends react pauses rendering of that subtree and sends a placeholder value instead, meanwhile client components are prepared with instructions for later in the lifecycle. Nextjs uses the RSC payload which includes the client component instructions to generate HTML on the server, this HTML is streamed to our browser to immediately show a fast non-interactive preview of the route alongside Nextjs streams the RSC payload as react renders each unit of UI, in the browser Nextjs processes the streamed react response, react uses the RSC payload and client component instructions to progressively render the UI once all the components and the server components output has been loaded the final UI state is presented to the user, client components undergo hydration transforming our app from a static display into an interactive experience, this is the initial loading sequence.  

==> RSC Update Sequence :- Browser requests a refetch of specific UI such as a full route, Nextjs processes the request and matches it to the requested server component, Nextjs instructs react to render the component tree similar to the initial loading but unlike the initial sequence there is no HTML generation for updates, Nextjs progressively streams the response data back to the client, on receiving the streamed response Nextjs trigger a re-render of the route using the new output, react reconciles or merges the new rendered output with the existing components on screen since the UI description is a special JSON format and not HTML react can update the DOM while preserving crucial UI updates such as focus or input values. This is the essence of rendering life cycle with the app router in Nextjs.

# Server Rendering Strategies :-
1). Static rendering,
2). Dynamic rendering,
3). Streaming,

## Lec 52 - Static Rendering (13:44)

# Static Rendering is a server rendering strategy where we generate HTML pages at the time of building our application. This means that all the data and content for a webpage are prepared in advance. This approach allows the page to be built once, cached by a CDN, and served to the client almost instantly. This optimization also enables us to share the result of the rendering work among different users, resulting in a significant performance boost for our application.

# Static rendering is particularly useful for blog pages, e-commerce product pages, documentation and marketing pages.

Q. How to Statically Render (a particular route / page)?
# Static rendering is the default rendering strategy in the app router.

# All routes are automatically prepared at build time without additional setup.

# Distinction between Production Server vs Dev Server :-

# For production, an optimized build is created once, and we deploy that build, code changes are not made on the fly once it is deployed.

# A development server, on the other hand, focuses on the developer experience where we should be able to make changes in our code and see those changes immediately reflected in the browser.

# We can't afford to build our app once, make changes, rebuild, and so on

# Hence Next.js's team decided, for production builds, a page will be pre-rendered or statically rendered once when we run the build command.

# However, for development mode builds, a page will be pre-rendered or statically rendered for every request.

# For example - If we visit home page, it is pre-rendered and served and this ensures that code changes are reflected in every render of the page. 

# Created new project next-test1 

# let us delete '.next' folder form root path of Next.js project,

# Build command --> `npm run build`, this command creates an optimized build of our application. The outpput folder is '.next' folder but this time the content of '.next' folder will be different from those of the dev script

# Build Process :-

a). Terminal Output - it displays info about each route in our application with three columns 1). Route , 2). Size & 3). First Load JS where 
1). Route refers to route itself i.e about route, home route etc,
2). size refers to the size of assets downloaded when navigating to the corresponding route client side in the browser and
3). first load JS refers to the size of the assets downloaded when loading the page from server, the first load JS shared by all includes the CSS from global.css, some runtime code, framework code, node modules vendor code like react and some code related to the routes and components in our application,

# let us focus on next part i.e 'legend'. Next.js provides a legend for the type of routes generated. For our root route which is `page.tsx` in the root folder we have a hollow circle which indicates static rendering where the route is automatically pre-rendered at the build time as static HTML content, this is also the same case for 404 not-found page, about route and all other routes that are there in the application. This helps us understand which routes are pre-rendered at build time especially when starting out with Next.js.

# Understanding build output :- Next.js generates the build output into the '.next' folder which contains various files and folders essential for serving our application to incoming requests from the browser where we can primarily focus on the 'server' and 'static' folders. Within server folder there is an 'app' folder corresponding to the app router. Let focus on important file type within 'app' folder they are - html files i.e 'index.html', 'not-found.html', 'about.html' etc 

# Even client component are pre-rendered as an optimization step and that is the reason we can see client component html. Besides it is important to note the RSC payload for each route i.e `about.rsc`, `index.rsc`, _not-found.rsc etc. These are special JSON format generated by react for each route is a compact string representation of the Virtual DOM and it includes abbreviations, internal references and encoded special meanings, for a server components the payload includes the rendered result of the server component like h1 tag with the text about page, the JSX from our component. 

# For client components, the payload includes placeholders or instructions where client components should be rendered along with references to their JavaScript files.

# Run and open the application using command - `npm run start`

Q. How does Nextjs know to download any component code ahead of time?
# this is where 'prefetching' comes into picture. 

# Prefetching is a technique used to preload a route in the background before the user navigates to it. 

# Routes are automatically prefetched as they become visible in the user's viewport either when the page first loads or as it comes into view through scrolling.

# For static routes, the entire route is prefetched and cached by default.

# Hence when we load any page like home page or about page , Nextjs prefetched routes and keep them ready for instant navigation.

# Summary of Static Rendering :-
1). Static Rendering is a strategy where the HTML is generated at build time,

2). Along with the HTML, the RSC payload is created for each component and javascript chunks are produced for client-side component hydration in the browser,

3). If we navigate directly to a page route, the corresponding HTML file is served.

4). If we navigate to the route from a different one, the route is created on the client side using RSC payload and JS chunks, without any additional requests to the server.

5). Static Rendering is great for performance and use cases include blogs, documentation, marketing pages etc.

## Lec 53 - Dynamic Rendering (5:31)

# Dynamic rendering is a server rendering strategy where routes are rendered for each user at request time,

# It is useful when a route has data that is personalized to the user or contains information that can only be known at request time, such as cookies or the URL's search parameters. News websites, personalized e-commerce application pages, and social media feeds are some examples where dynamic rendering is beneficial.

Q. How to Dynamically Render?
# During rendering, if a dynamic function is discovered, Nextjs will automatically switch to dynamic rendering the whole route.

# In Nextjs, these dynamic functions are : cookies(), headers(), and searchParams object which acts more like prop available for every page. Using any of these will opt the whole route into dynamic rendering at request time

# Dynamically rendered pages are not statically rendered at build time.

# about page (which have dynamic function i.e, cookie()) the HTML is not generated in the server since a new page is built for every request there's is no need to generate a page into the build folder 

# Summary of Dynamic Rendering 
a). Dynamic rendering is a strategy where the HTML is generated at request time,

b). Nextjs automatically switches to dynamic rendering when it comes across a dynamic function in the component, such as cookies(), headers() or the searchParams object,

c). This form of rendering is great for when we need to render HTML personalized to a user, such as a social media feed,

d). As a developer, we do not need to choose between static and dynamic rendering. Nextjs will automatically choose the best rendering strategy for each route based on the features and APIs used.

## Lec 54 - Streaming (4:21)

# Third and final server rendering strategy i.e, Streaming

# Streaming is a strategy that allows for progressive UI rendering from the server. Work is divided into chunks and streamed to the client as soon as it's ready. This enables users to see parts of the page immediately, before the entire content has finished rendering.

# Streaming significantly improves both the initial page loading performance and the rendering of UI elements that rely on slower data fetches, which would otherwise block the rendering of entire route.

# Streaming is integrated into Next.js App Router by default.

# This streaming technique is different from Suspense SSR where we are focusing on Nextjs where streaming is integrated into Nextjs app router by default.

## Lec 55 - Server and Client Composition Patterns (1:10)

# Server components :- we can use server components for following usecases :-
- Fetching data,
- Directly accessing backend resources,
- Protecting sensitive information (like access tokens and API keys) on the server,
- Keeping large dependencies server-side, which helps in reducing client-side JavaScript.

# Client components usecase:-
- Adding interactivity,
- Handling event listeners (such as onClick(), onChange(), etc)
- Managing state and lifecycle effects (using hooks like useState, useReducer and useEffect)
- using browser-exclusive APIs,
- using custom hooks,
- using React Class components

## Lec 56 - Server-only Code (7:27)

# Server Component Pattern

# When we build Nextjs applications certain code is intended to execute only on the server. For instance, we might have modules or functions that use multiple libraries, use environment variables, interact directly with database, or process confidential information. Since JS modules can be shared between both client and server components it's possible for code that's meant only for server to unintentionally end up in the client.

# If server-side code gets bundled into the client-side JavaScript, it could lead to a bloated bundle size, expose secret keys, database queries, and sensitive business logic. Hence it is crucial to separate server-only code from client-side code to protect the application's security and integrity.

# server-only package 

# To prevent unintended client-side usage of server-code we can use a package called server-only to provide a build time error if developers accidentally import one of these modules into a client component.

# We won't be able to see the log message in the browser console but we can see it in the terminal because the page component is a server component.

# When we run client-route page we can see its output in both browser as well as terminal consoles as every client component is also rendered once on the server to generate the initial HTML.

# In order to ensure that the function `serverSideFunction` remains server's side only we can use the `server-only` package.

# When we import server-only module it ensures that the module causes a build time error if it is included in the client's side bundle.

## Lec 57 - Third Party Packages (5:29)

# Server Component Pattern

# Integration of third party packages - since server components introduce a new paradigm in react, third-party packages in the ecosystem are gradually adapting, beginning to add the "use-client" directive to components that rely on client-only features, marking a clear distinction in their execution environment. However many components from npm packages, which traditionally leverage client-side features, haven't yet integrated this directive. Having the absence of "use-client" means that while these components will function correctly in Client Component, they may encounter issues or might not work at all within Server Components. To address this, we can wrap third-party components that rely on client-only features in our own Client Components.

# For the example, we will use the `react-slick` npm package which exports a react Carousel component. A Carousel component uses client side feature.

# If we use Carousel component code on server-route that will thow an error this is because the slider Carousel component using client side features but the library code doesn't have "use-client" directive. One solution is to use "use-client" directive within server route but then we cannot use server only features like database calls, secret environment variables etc. To resolve this we must encapsulate third-party components that depend on client only features within our own client component.

# Third-party packages in react ecosystem are in a transitional phase where numerous packages from npm haven't yet adopted the 'use-client' directive, wrapping such components in our own client-component will allow us to leverage the ecosystem of third-party packages while adhering to new server components model.

## Lec 58 - Context Providers (6:07)

# Server Component Pattern

# For last server component pattern let us explore working with 'Context Providers'

# Context providers are typically rendered near the root of an application to share global application state and logic. For example - the application theme

# However, since React context is not supported in Server Components, attempting to create a context at the root of your application will result in an error,

# To address this, we can create a context and render its provider inside a separate Client Component.

# After creating theme context , we can see an error that you are importing a component that needs create context, it only work in client component but none of its parents are marked with "use client" directive to their server components by default.

# To resolve above issue, we could convert `layout.tsx` to a client component by using `use client` directive at the top.

# However above approach signal to Next.js that the current layout file i.e 'layout.tsx' along with any component it imports is intended for client side execution which is not what we want. To fix this, we need to create our context and render its provider inside a separate client component. So we will create a separate file `ThemeProvider.tsx` in components folder.

# Note - Even though we wrap the rest of the application within a client component, server components down the tree will remain server components.

# We don't convert server component to a client component instead we define a new client component and invoke it within the server component using children props.

## Lec 59 - Client-only Code (4:33)

# For oue first client component pattern let's discuss about the separation of client only code.

# It is important to restrict certain operations to the server, it's equally important to confine some functionality to the client side.

# Client-only code typically interacts with browser-specific features like the DOM, the window object, localStorage etc which are not available on the server. Ensuring that such code is executed only on the client side prevents errors during server-side rendering. To prevent unintended server side usage of client side code, we can use a package called `client-only`.

# For `client-only` code, we will `client-utils.ts` file in utils folder within src and our focus is on the concept of client only code not the function implementation details.

# By importing `client-only` in a module we ensure that the module triggers a build time error if it is mistakenly included in server side code. Now if someone accidentally tries to use our client side function in a server component the build process will fail.

# In the terminal we should see the error which acts a clear signal to developers about the inappropriate use of client specific code in a server context thereby preventing potential errors and ensuring that our application adheres to the intended architectural patterns.

# Just as server only code needs isolation, client only code must be confined to the client side to leverage browser specific features effectively.

## Lec 60 - Client Component Placement (6:34)

# Let us discuss placement of client components within the component tree. This aspect plays a crucial role in optimizing the performance of the Next.js application.

# To compensate for server components not being able to manage state and handle interactivity, we need to create client components. It's recommended to position these client components lower in our component tree.

# Imagine a landing page with a navigation bar at a top and a main section below it.

# Navbar consists of an outer wrapper which is Navbar component itself and within this Navbar there's a `Nav Links` component for various links and a `Nav Search` component that contains a search bar allowing user to search throughout our site. Thus this forms a straightforward component tree with the landing page component at the top, navbar and main component as its children and navbar in turn contains nav links and nav search as its children.

Q. If `use client` is declared in the `Navbar` component shouldn't that be the only component running client side?
# This is common misconception, when we use `use client` to a component it not only makes that component a client component but also affects every child component in the component tree below it. In our example, `NavLink` and `NavSearch` become client components as well.

# We can think of `use client` as boundary once crossed every subsequent in the tree operates on the client side and this is the reason we can see `NavLink` and `navSearch` executed on client side.

# It is important to understand this concept especially if we have large component tree. Imagine converting a server component to a client component to add some interactivity. This change would turn the entire subtree of children into client components and consequently all their code would be sent to the browser as a result we would lose all the advantages of the server components. Therefore the recommended practice is to place client components as low as possible in the component tree ideally making them leaf components.

## Lec 61 - Interleaving Server and Client Components (9:46)

# Supported and unsupported patterns of interleaving server and client components

# Different patterns wrt client and server component :-

1). Importing a server component into another server component :- inside server component one import and invoke server component two,

2). Importing a client component inside another client component,

3). Importing a client component into server component

4). Importing a server component inside client component - not supported int Next.js

Q. Why we are getting module not found error, `Can't resolve 'fs'`?
# this happens because any component such as server component one nested inside a client component one is automatically converted into a client component. Since client components are rendered after a server components, we can not import server components into a client component module as it would require a new request back to the server. So, although `server component one` is defined as a server component when it is nested inside `client component one` it is converted into a client component which is executed client side as well and in the client environment there is no file system module available.

# Importing a server component into client component is one pattern that is not supported in the Next.js. However, there is a work around, instead of nesting server components in the client component we can pass it as a prop to the client component, a common pattern is to use the react children prop to create a slot in your client component. This is supported and recommended pattern when interleaving server and client components.

# As far as the client component is concerned it doesn't know that children is a server component all it needs to make sure of is render a placeholder for the children prop to be slotted in which is in this case is a server component. We are not limited to the children prop and we can use any prop on the client component.

## Section 3 - Data Fetching in Next.js

## Lec 62 - Data Fetching (2:11)

# Data Fetching in App Router

# Up until now our routes and components have featured hardcoded content however in real world enterprise applications data typically comes external sources.

# Next.js's App Router uses the React Server Component (RSC) architecture, which allows us to fetch data using either server components or client components. It's advantageous to fetch data using server components, as they have direct access to server-side resources such as databases or file systems. This not only taps into the server's computational power and proximity to data sources for efficient data fetching and rendering but also minimizes the need for client-side processing.

# In this section, we will explore data fetching techniques using both server and client components in Next.js

# Server components support various configurations for caching, revalidating, and optimizing data fetching.

# On the client side, data fetching is typically managed through third-party libraries such as `TanStack Query` which offers its own robust APIs. 

## Lec 63 - Fetching Data with Server Components (4:40)

# The RSC architecture in the app router introduces support for `async` and `await` keywords in Server Components. This allows us to use the familiar JavaScript `await` syntax by defining our component as an asynchronous function. This is the basis for data fetching in server components.

# mock API from JSON Placeholder - https://jsonplaceholder.typicode.com/

# Fetching data is as straightforward as using async-await keyword with the fetch API, there is no need for `useState` and `useEffect` hook nor dealing with all states that come along with it.

## Lec 64 - Loading and Error States (3:19)

# Traditionally in React, we might manage these states by creating separate variables and conditionally rendering UI based on their values.

# To implement a loading state, we can define and export a React component in `loading.tsx` file.

# For handling errors, we can define and export a React component in `error.tsx`.

# since `date fetching` is typically fast, we will intentionally delay the component rendering.

# In order to manage data fetching states we have to add a `loading.tsx` file for loading in .tsx file with a react component for the loading state and an `error.tsx` file with client component to handle error states.

## Lec 65 - JSON Server Setup (3:25)

# JSON Server Setup steps:

1). Install JSON Server package from npm using `npm i json-server@0.17.4` command,
2). create `db.json` file in root directory of the project, where this act as a data source (database),
3). at root directory of the project create `server.js` file,
4). Run json-server using `node server` command,

## Lec 66 - Caching Data (4:42)

# Let us fetch and display the list of products (from json-server) on the Next.js page component.

# Nextjs extends the native fetch API and automatically caches the returned values of fetch. This caching improves performance and reduces cost. specifically the initial data fetched from the JSON server is stored in what is called a `data cache` on the server and reused for every subsequent request, thus this eliminates the need to repeatedly query JSON server. The fact that there is only one request received log statement confirms this default caching behaviour of Next.js.

# By default, Next.js automatically caches the returned values of fetch in the `Data Cache` on the server.