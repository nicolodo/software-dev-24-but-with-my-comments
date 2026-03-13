
----- This lesson covers Component Libraries & Icon Collections
----- RadixUI
https://www.radix-ui.com/
RadixUI is a collection of components we can use on our site
to show things like cards for the user profile, checkboxes, dropdown Menus etc
https://www.radix-ui.com/themes/playground
have a look here there's lots of visual examples for them.
It's useful as we can pick premade components, to give our pages a visual look.

----- item2

----- Used/Modified/Added pages for this lesson
A
/app/themes/page.js & layout.js // tried out themed components here
A
NComponents.jsx
NPopover.jsx & styles.css
/components/Themed/TComponents.jsx
M
package.json & package-lock.json //installing radix themes
/app/page.js //tried out some new components here


----- Nicolas's changes
per the radix ui instructionns I am putting the import in layout.js, this is not done in this example. 
I think this is because we aren't using themes.

I have imported some components and put them in the components folder.
the ones I've made begin with N.

There's a lot of extra configuring when not using themes

install radix ui but with themes and create 
theme components.
Make sure the imports are right when importing
as the primitive radix and the themed radix 
come from different libraries.
    --- Tangent