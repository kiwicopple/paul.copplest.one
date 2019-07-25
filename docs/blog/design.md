---
date: 2019-07-25
description: Design tips for developers
---

# Design tips for developers

Developers are uneccessarily poor at design. The state of design/UX in opensource software is probably one of the major things that holds back the projects. Usually, the projects are technically brilliant - fast, well tested, and well maintained. But without a reasonable front-end the software probably won't get used.

Just like everything, being "20% good" at design will get you 80% of the way there. This article outlines some of the tools and tips I have picked up over the years that will make your a 20% designer.

**Contents**
- [Design tips for developers](#design-tips-for-developers)
  - [Building a design-y sense](#building-a-design-y-sense)
  - [Creating a logo](#creating-a-logo)
    - [Icon](#icon)
    - [Logo text/name](#logo-textname)
  - [Colors](#colors)
  - [Fonts](#fonts)
  - [Icons](#icons)
  - [Illustrations](#illustrations)
  - [Branding](#branding)
  - [Using a CSS framework](#using-a-css-framework)
  - [Other reading and quick tips](#other-reading-and-quick-tips)


## Building a design-y sense

This step isn't necessary, but it's the thing that gave me the most improvement for the least effort. It will improve your "design sense", as well as give you an idea of your own design style. The steps are: 

1. visit [Dribbble](https://dribbble.com) and sign up for their weekly newsletter (I have no affiliation)
2. click the "Most popular shots" link each week
3. browse through the first page of the most popular shots for that week
4. "Favourite" any that you like

This takes about 5 minutes each week. After a few weeks you can go back and look at your favourites. You will probably see that most of what you like fits a theme - perhaps the same color, or you like angles, etc. 

You'll also notice the up-and-coming trends. In the past it was lots of soft shadows. The current trend is illustrations of people. You can start feeding these trends into your software. Even if you aren't a big fan of these trends it's good to remember that design is good when it appeals to many people (i.e. your users). 

## Creating a logo

Logos are a great place to start since they will carry over to your software/site. Since you are reading this you are probably a developer. That means your logo should consist of two parts:

1. An icon
2. Logo text/name

### Icon

Here are some useful rules:

**Square**

Make sure it fits well into a square. This is important because it will be in a `favicon` or possibly an app icon. 

**Symetrical**

By symetrical, I mean that it should take up an even amount of space within the square. 

**Simple**

There is no such thing as an icon which is too simple. Make sure looks good when scaled down to 32x32 px. This is how it will look in the top tab of a browser. You can use color, but it's best if you stick with just one color.

### Logo text/name

This one you have a bit of freedom. I would recommend that you make this just a simple color however - black or dark grey. Let the icon carry the logo, and let font that you choose for the text set the brand. Whichever font you chose for the text, you will probably want to use that in all the headings of your site/app/software.

## Colors

The best advice I can give here is to choose one vibrant color and that's all. Every other color should be white or black.

Ok, now that I have got that out of the way, you *can* use other colors for things like alerts, warnings, etc. 

If I'm building a tech product, I usually begin my designs with what I call "startup blue". You've probably seen this color on a million different tech sites. The hex code for startup blue is <span style="background-color:#2B70F6;color: #fff; padding:3px;border-radius:3px;">#2B70F6</span>, or somewhere close. There are lots of reasons for this, but none more important than it's safe. After you have created your site, feel free to play with this color.

There is only one resource you need to know more about colors and that is [Building your color pallete](https://refactoringui.com/previews/building-your-color-palette/) by Refactoring UI. 

## Fonts

To get started it's good to know that
<span style="background-color:#eee; padding:3px;border-radius:3px;">this is sans-serif</span>,
<span style="font-family:serif;background-color:#eee; padding:3px;border-radius:3px;">this is sans-serif</span>, and
<span style="font-family:monospace;background-color:#eee; padding:3px;border-radius:3px;">this is monospace</span>.

There are two guildines I could give here:

- Headings should be bold, symetrical, and sans-serif
- Content *can* be serif but it's fine to be san-serif

This will cover most tech products. As I mentioned in the logo section, you probably want your heading font to match your logo font, but that's also not critical.

Fonts are something that you have to play with a lot to find something you like. [Google Fonts](https://fonts.google.com/) is useful here (if you don't have an aversion to Google) since you don't have to go through the hassle of downloading/uploading the font to try it out. I'm personally trying to move away from Google so I have created a similar site called [Quick, Font!](https://quickfont.xyz/) to acheive the same thing, except the fonts are served from GitHub.  

## Icons

- https://www.ikonate.com/
- flat icon
- 

## Illustrations

- https://www.humaaans.com/
- Icon8
- https://undraw.co/


## Branding

Consistency is the only thing you need to remember here. For a product to feel cohesive, it must be consistent.

- Choose one color and use it everywhere. For everything else use black or dark grey.
- Choose one font and use it everywhere
- Text sizes should always be the same (with the exception of headers). Don't make one paragraph 12px and another 14px
- Use consistent padding
- Make things line up. When we see things for the first time, it's easier to make sense of fewer "blocks" of things. We can achieve this by goruping things together and aligning them. 

## Using a CSS framework

Choose a "class based" framework. WHerever possible avoid using "locked in" frameworks like ReactStrap. Ideally the code is pure HTML rather than bespoke tags. 

- Bulma
- Tailwind
- Moon CSS
- Water.css


Learn CSS Layouts:

- https://every-layout.dev/
- https://testdriven.io/blog/css-grid/


## Other reading and quick tips

- This is the best guide I know for building a landing page - https://www.julian.com/guide/growth/landing-pages. One additional tip: if you are using a Hero on your landing page, make it only `70vh` and have a "More" button below it. Too many websites make this `100vh`, and it isn't immediately apparent to the user that they can scroll down.
- Design Tools for Everything: https://hn.premii.com/#/comments/19580860
- UI Frameworks - https://news.ycombinator.com/item?id=18235887
