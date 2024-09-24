## Shamrock Irish Pub - Next.js App Documentation

This documentation describes the structure and functionalities of the Shamrock Irish Pub website, built using Next.js.

### Inputs

* The app utilizes CSS variables for styling, defining core colors and fonts. These can be adjusted in the `src/app/globals.css` file.
* Storybook is used for component development and documentation, with a focus on accessibility. Stories are defined in files with the `.stories.tsx` extension.

### Outputs

* The app renders a single page with a hero section showcasing the pub's information, and a following section with information about the team. 
* Navigation is implemented as a fixed element on the top of the page, and hides on scrolling down, revealing itself again on scrolling up.
* The app is responsive and designed using Tailwind CSS.

### Usage

This application serves as a simple website for the Shamrock Irish Pub. It provides basic information about the pub, its team, and current events. Users can navigate through the different sections of the website via the fixed navigation bar.

**Storybook**

Storybook is a powerful tool that enables developers to build and test components in isolation. It also serves as a documentation tool by showcasing each component's functionalities and available props.
