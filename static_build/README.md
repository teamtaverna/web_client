# Taverna Web Client - Static Build
This is a static (markup and styles only with hard-coded data) build of the web-client from the designed mockups. This static build serves to:

1. Demonstrate the intended behavior and interactions for the web-client components.
2. Provide the needed markup and styles when building out the React components.

### Installation and Test Plan

1. cd into the `static_build` directory from the project root.
2. Install the dependencies and start the static build server using:
```
    $ npm install
    $ npm start
```
3. You can now view the static page on running on `localhost:8081`.

### Usage Notes
*  All the markup for the page can be found in the `index.html` file.
*  The SCSS styles for the components are found in the `scss/components` directory.
*  The static build makes heavy use of components (Grid, Items, Dropdown, Menu, Ratings, Cards, Accordion and Sidebar) from the regular jQuery dependent version of Semantic UI (semantic-ui.com). However for the react components we will be making use of React Semantic (react.semantic-ui.com).
