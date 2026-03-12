
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

Clerk is setup in the layout.js file in order to have clerk be accessible
to every page on our website

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


----- Nicolas's changes
/app/page.js Changed
I have removed all the content from this page because it was unused, so it just contained the boilerplate nextjs content.


----- Used/Modified/Added pages for this lesson
M
/app/page.js
/app/layout.js
A
/app/users
/app/about-us
M
/next.config.mjs

