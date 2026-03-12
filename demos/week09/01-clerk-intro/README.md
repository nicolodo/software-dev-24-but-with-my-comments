
----- Clerk
Clerk is a service which handles, signing in for us
It's configured on the clerk website to do things like allow paths for
people to sign in with 
e.g Google, Facebook or Github.

Things done in clerk intro are
Importing clerk
retrieving id and other user info from Clerk
Creating a route for a user page on the site
Displaying said data on our site

    setup
Clerk is setup in the layout.js file in order to have clerk be accessible
to every page on our website
To talk to Clerk add it's info to a .env file


Auth() and currentUser()
are promises which return data from Clerk
Auth() -> id
currentUser() -> obj w/ userdata eg name, profilePic etc



----- Image

In order to use the image component 
/jsconfig.json
is told

const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
I don't know what this means but I'm guessing 
it's for when the protocol is https and not http or ftp
and the hostname can be anything bc of the ** wildcard
I would've thought a single * would do the same thing
but maybe that's just nextjs's way of writing *

----- Used/Modified/Added pages for this lesson
M
<!-- /app/page.js  --> This is left unmodified
/src/app/layout.js N:comments added
A
/src/app/users
/src/app/about-us
M
/src/proxy.js    //Protected routes configured here
/next.config.mjs //config added to allow images to show
/README.md 

----- Nicolas's changes
<!-- /app/page.js Changed -->
<!-- I have removed all the content from this page because it was unused, so it just contained the boilerplate nextjs content. -->
Rewrote this README.md to log changes

    --- Tangent

In the terminal
use this script in the weeks directory to cd into each dir
and run npm install
by replacing ls with the command you'd like to run in each dir

for d in *;   
cd $d && pwd && ls && cd ..

save space afterwards
by deleting the node_modules folder afterwards
rm -rf node_modules 
or
rm -rI node_modules

-f is force the deletes and don't prompt
-I is ask me whenever I delete a folder or more than 3 files
-i is ask me for every file to delete
-r is recursive ie go into every folder and delete the contents

go for rm -rf
