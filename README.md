# Jason's Résumé

An evergreen résumé in html & css.

## Current Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/93e8e12d-7866-4071-9a7f-5560b4e0ecd3/deploy-status)](https://app.netlify.com/sites/jas0nmjames-resume/deploys)

## Rationale

- Have a separate repository for just my resume which I can link to regardless of the state of my portfolio or where it's deployed from.
- Experiment with deploying with [Netlify](https://www.netlify.com/) before I create my portfolio with [Eleventy](https://www.11ty.dev/) and deploy there
- Experiment with content focused design that is accessible, sustainability conscious and privacy friendly.
- Get something out the door without having to perfect my portfolio site (where I want to tweak my chatbot, connected it to ChatGPT, figure out the best way to present images, clean up asset naming, etc.)

## Goals

- [x] Responsive *(without media queries!!)*
- [x] Built with vanilla html & css
- [ ] Measure site size.  Check out [ecograder](https://ecograder.com/) or add the [Website Carbon Calculator](https://www.websitecarbon.com/) badge!
- [ ] Privacy-friendly analytics by [Plausible](https://plausible.io/)
- [ ] Title should float.  Understated, but adding a little motion to an otherwise static site. Inspiration from [Xavier](https://codepen.io/xavier_ho/pen/GRWZKpq).
- [x] Multi-layer typography: [Bungee](https://djr.com/bungee) (See [Fonts Playground](https://github.com/jas0nmjames/fonts-playground))
- [ ] [Voiceflow](https://www.voiceflow.com/): basic chatbot built with knowledgebase of own resume and portfolio articles in markdown
- [ ] [Voiceflow](https://www.voiceflow.com/): site visitors can add a link to a job description and the bot will respond with how I am or am not aligned
- [ ] Welcome video with [Loom](https://support.loom.com/hc/en-us)

## Progress Journal

- 2024-04 - cleaned up navigation links and cleaned up inline comments in html.  added social links.  
- 2023-09-21 - H1 "billboard" multi-layer type is in a good place
- 2023-09-11 - Added the Website Carbon Calculator & a link to download the PDF version
- 2023-09 - Created responsive layout and finished styling in CSS
- 2023-08 - Created content and foundational styling in HTML & CSS
- 2023-08 - Finished design in Figma.  Mobile, Tablet & Desktop
- 2023-03-16 - Updated DNS.  Moved management of domain from Wordpress to GoDaddy.  Domain still tied to Wordpress site.  Added subdomain in GoDaddy and linked to Netlify
- 2023-03-15 - Deployed on Netlify
- 2023-03-15 - Updated readme.  
- Various sketching in Apple Notes with Apple Pencil
- Various ideation in Apple Freeform
- Various wireframing and planning in Figma & Figjam.
- 2023-01-10 - Played with [Spring Animations](https://www.figma.com/community/file/1100581821937139565) in Figma
- 2023-01-10 - Created this readme.
- 2023-01-10 - Created this repository.

## What I've Learned

- [x] How to create responsive layouts with HTML & CSS in 2023 with modern approaches.  **CSS Grid > Media Queries**
- [x] How to create multi-layer (and multi-color] type with HTML & CSS.
- [x] Discovered [Lexend](https://www.lexend.com/), "A variable font empirically shown to significantly improve reading-proficiency."

## Resources

- [How Figma Put the Bounce in Spring Animations](https://www.figma.com/blog/how-we-built-spring-animations/)
- [Making CSS Animations Feel More Natural](https://css-tricks.com/making-css-animations-feel-natural/)
- CSS Tricks' CSS Almanac: [animation](https://css-tricks.com/almanac/properties/a/animation/)
- Smashing Magazine: [The Guide To CSS Animation: Principles and Examples](https://www.smashingmagazine.com/2011/09/the-guide-to-css-animation-principles-and-examples/)
- Wikipedia: [12 Basic Principles of Animation](https://en.m.wikipedia.org/wiki/Twelve_basic_principles_of_animation)
- [Eleventy](https://www.11ty.dev/)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Look Ma, No Media Queries! Responsive Layouts Using CSS Grid](https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/)
- [Auto-Sizing Columns in CSS Grid: `auto-fill` vs `auto-fit`](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)
- [An Introduction to the `fr` CSS unit ](https://css-tricks.com/introduction-fr-css-unit/)
- Thank you Kris Koishigawa for the security best practices when opening links in a new tab.  See <a href="https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/" target="_blank" rel="noopener noreferrer">How to Use HTML to Open a Link in a New Tab</a> (Published September 8, 2020.  Accessed August 29, 2023.)
- [Flexible layouts without media queries](https://blog.logrocket.com/flexible-layouts-without-media-queries/) - Dannie Vinther (April 16, 2020)
- [Fluid typography with CSS clamp](https://piccalil.li/tutorial/fluid-typography-with-css-clamp/)

### Fonts & Typography

- https://piccalil.li/tutorial/fluid-typography-with-css-clamp/
- https://systemfontstack.com/ via piccalil.li
- https://piccalil.li/tutorial/create-a-responsive-grid-layout-with-no-media-queries-using-css-grid/
- https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide
- https://web.library.yale.edu/cataloging/months

## Credits

### Typography

#### Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Hairline&family=Bungee+Inline&family=Bungee+Outline&family=Bungee+Shade&family=Bungee+Spice&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lexend:wght@100;200;300;400;500;600;700;800;900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
```

```css
font-family: 'Bungee', cursive;
font-family: 'Bungee Hairline', cursive;
font-family: 'Bungee Inline', cursive;
font-family: 'Bungee Outline', cursive;
font-family: 'Bungee Shade', cursive;
font-family: 'Bungee Spice', cursive;
font-family: 'Inter', sans-serif;
font-family: 'Lexend', sans-serif;
font-family: 'Space Mono', monospace;
```

### Icons

#### Font Awesome

1. Icon: file-lines by [Font Awesome](https://fontawesome.com/)

```html
<i class="fa-solid fa-file-lines"></i>
```

#### Logo Icons

- https://www.voiceflow.com/
- https://ia.net/presskits
- https://www.mindnode.com/press
- https://github.com/logos
- https://git-scm.com/downloads/logos
- https://freebiesupply.com/logos/css3-logo/ (unofficial)  See https://www.w3.org/Style/CSS/Overview.en.html
- https://www.w3.org/html/logo/
- https://commons.wikimedia.org/wiki/File:Google_Chrome_icon_%28February_2022%29.svg see https://about.google/brand-resource-center/logos-list/
- https://mozilla.design/
- https://www.sketch.com/about-us/
- https://www.figma.com/using-the-figma-brand/
- https://www.justinmind.com/presskit
- https://code.visualstudio.com/brand
