---
date: 2019-07-25
description: Design tips for developers
---

# Design tips for developers

Developers aren't well-known for their design skills. I suspect that poor design/UX in opensource projects is the primary reason they aren't more successful. Usually the projects are technically brilliant - fast, well tested, and well maintained. But without a reasonable interface users won't get hooked.

As with anything, being "20% good" at design will get you 80% of the way there. This article outlines some of the tools and tips I have picked up over the years that will make you a 20% designer.

**Contents**
- [Design tips for developers](#design-tips-for-developers)
  - [Building a design-y sense](#building-a-design-y-sense)
  - [Creating a logo](#creating-a-logo)
    - [Designing an Icon](#designing-an-icon)
    - [Designing the logo text/name](#designing-the-logo-textname)
  - [Colors](#colors)
  - [Fonts](#fonts)
  - [Icons](#icons)
  - [Illustrations](#illustrations)
  - [Branding](#branding)
  - [Using a CSS framework](#using-a-css-framework)
  - [Design tools](#design-tools)
  - [Other reading and quick tips](#other-reading-and-quick-tips)


## Building a design-y sense

This step isn't necessary but it's the thing that gave me the most improvement for the least effort. It will improve your "design sense", and give you an idea of your personal design style. The steps are: 

1. Visit [Dribbble](https://dribbble.com) (I have no affiliation) and sign up for their weekly newsletter 
2. When you receive the weekly newsletter, click the "Most Popular Shots" link
3. Browse through the first page of the most popular shots for that week
4. "Favourite" any that you like

This takes about 5 minutes each week. After a few weeks you can go back and look at your favourites. You'll likely find a theme in your favourites - perhaps the same color, or you like angles, etc. 

You'll also notice the up-and-coming trends. In the past it was soft shadows and sharp angles. The current trend is illustrations of people. Start feeding these trends into your projects - even if you aren't a big fan of them, it's good to remember that design is effective when it appeals to many people (i.e. your users). 

## Creating a logo

Logos are a great place to start since the design carries over to your software/site. Logos vary for different mediums (print, digital, etc), but since you're reading this you are probably a developer, and so your logo will be used on a website, on an app, or in software. 

If this describes your use-case it means your logo should consist of two parts, and should follow a few basic rules. You should start with:

1. An icon
2. Logo text/name

### Designing an Icon

Here are some useful rules:

- **Square::** Make sure it fits evenly into a square. This is important because it will be in a `favicon` or possibly an app icon. 
- **Symetrical::** By symetrical, I mean that it should take up an even amount of space within the square. Logos can look a bit awkard when they are squashed to one side or if there is lots of space in one area of the square.
- **Simple::** This is by far the most important rule. There is no such thing as an icon which is too simple. Make sure it is legible when scaled down to 32x32 px. This is how it will look in the tab of a browser. Also keep the colors simple - you can use color, but it's best if you stick with just one.

### Designing the logo text/name

You have a bit more freedom with this one. I would recommend, however, that you make this just a simple color - for example, black or dark grey. Let the icon carry the logo, and let font that you choose for the text set the brand. Whichever font you chose for the text, you should (probably) use it in all the headings of your site/app/software.

## Colors

The best advice I can give for colors is to choose one which is vibrant and that's all. Every other color should be white or black.

Ok, now that I have got that out of the way, you *can* use other colors for things like alerts, warnings, etc. 

If I'm building a tech product, I usually begin my designs with what I call "startup blue". You've probably seen this color on a million different tech sites. The hex code for startup blue is <span style="background-color:#2B70F6;color: #fff; padding:3px;border-radius:3px;">#2B70F6</span>, or somewhere close. There are lots of reasons for this, but none more important than it's safe. After you have created your site, feel free to play with this color.

There is only one resource you need to know more about colors and that is [Building your color pallete](https://refactoringui.com/previews/building-your-color-palette/) by Refactoring UI. 

## Fonts

To get started it's good to know that
<span style="background-color:#eee; padding:3px;border-radius:3px;">this is sans-serif</span>,
<span style="font-family:serif;background-color:#eee; padding:3px;border-radius:3px;">this is sans-serif</span>, and
<span style="font-family:monospace;background-color:#eee; padding:3px;border-radius:3px;">this is monospace</span>.

There are three guildines I could give here:

- Stick to a maximum of 2 different fonts, 3 if you *absolutely* need it
- Headings should (probably) be bold, symetrical, and sans-serif
- Content can be serif but it's fine to be san-serif

As I mentioned in the logo section, you probably want your heading font to match your logo font, but that's also not critical.

Fonts are something that you have to play with a lot to find something you like. [Google Fonts](https://fonts.google.com/) is useful here (if you don't have an aversion to Google) since you don't have to go through the hassle of downloading/uploading the font to try it out. I'm personally trying to move away from Google so I have created a similar site called [Quick, Font!](https://quickfont.xyz/) to acheive the same thing, except the fonts are served from GitHub.  

## Icons

Try to use only a few icons. They actually add very little, practically speaking, unless you are able to replace some words completely with the icon. A great example is the &equiv; 'hamburger icon' which completely replaces the need to have "Show menu" in navbars. 

That said, a few icons can make a site look a bit more finished. Just try to make sure the icons have a consistent "theme": they should have the same stroke thickness; if some are rounded, they should all be rounded; keep the colors consistent. 

And once again, simplify! The point of an icon is to reduce the cognitive load on a user. Try to stick with icons that have very little detail.

Here are the best (free) resources that I commonly use

- [flaticon.com](https://www.flaticon.com/)
- [thenounproject.com](https://thenounproject.com/)
- [fontawesome.com](https://fontawesome.com)
- [ikonate.com](https://www.ikonate.com)

## Illustrations

Illustrations can really bring a website/app to life. They are less important in software (in fact they would probably look stupid in most software). However illustrations are the hardest to nail, because they are quite bespoke which makes it difficult to have a consitent look across all of them.

Try to create your site first without illustrations (I doubt this will be a problem for most readers), then as a final step add a few illustrations if you have gaps to fill. There are some really great resources starting to pop up wich have some free, lightweight illustrations to try. These are:

- [humaaans.com](https://www.humaaans.com/) --> you've probably started seeing these everywhere
- [undraw.co](https://undraw.co/)
- [icons8.com/ouch](https://icons8.com/ouch/) 


## Branding

Consistency is the only thing you need to remember here. For a product to feel cohesive, it must be consistent. Some guidelines are:

- Choose one color and use it everywhere. For everything else use black or dark grey.
- Choose one font and use it everywhere
- Text sizes should always be the same (with the exception of headers). Don't make one paragraph 12px and another 14px
- Use consistent padding
- Make things line up. When we see things for the first time, it's easier to make sense of fewer "blocks" of things. We can achieve this by grouping things together and aligning them. 

## Using a CSS framework

If you're building a website, I highly recommend keeping your CSS and JS separate.Wherever possible avoid using "locked in" frameworks like ReactStrap, and instead opt for "class based" CSS frameworks. Once you become comfortable with this then your designs can be implemented anywhere - whether you use HTML, React, Vue, or whatever latest and greatest framework you decide to use. 

I would also recomment sticking with a "utility-first" CSS framework. Take your pick of either [Bulma](https://bulma.io) or [Tailwind](https://tailwindcss.com/) and invest a day into learning how they work. This day will pay off in spades - prototyping with either of these is quicker than designing then implementing from scratch.


## Design tools

Figma


## Other reading and quick tips

- [Julian Landing page](https://www.julian.com/guide/growth/landing-pages): This is the best guide I know for building a landing page. One additional tip: if you are using a Hero on your landing page, make it only `70vh` and have a "More" button below it. Too many websites have a `100vh` hero, and it isn't immediately apparent to the user that they can scroll down.
- [Design Tools for Everything](https://github.com/LisaDziuba/Awesome-Design-Tools): A huge list of tools. I personally find these lists a bit daunting but there are some
- You may occasionally want to implement some CSS layouts outside of the grid systems provided by Bulma or Tailwind. A couple of resources for learning are [testdriven.io/blog/css-grid](https://testdriven.io/blog/css-grid) and [every-layout.dev](https://every-layout.dev)
