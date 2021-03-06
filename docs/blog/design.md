---
date: 2019-07-25
description: Design tips for developers
---

# Design tips for developers


Developers aren't well-known for their design skills. I suspect that poor design/UX in open source projects is the primary reason they aren't more successful. Usually the projects are technically brilliant - fast, well tested, and well maintained. But without a loveable interface users won't get hooked.

Perhaps you're the type of developer who is put off by any blog post with "Design" in the title. If you are, then I will say this up-front: design is about doing less rather than doing more. I don't advocate over-design, and I recommend erring on the side of simplicity. This blog post will only elaborate this point.

As with anything, being "20% good" at design will get you 80% of the way there. This article outlines some of the tools and tips I have picked up over the years that will make you a "20%" designer. I'm not going to go into UX (even though it's more important) because I think learning how to think in simple design patterns is the baseline for creating usable products. 

**Contents**

- [Building a design-y sense](#building-a-design-y-sense)
- [Creating a logo](#creating-a-logo)
  - [Designing an Icon](#designing-an-icon)
  - [Designing the logo text/name](#designing-the-logo-textname)
- [Colors](#colors)
- [Fonts](#fonts)
- [Icons](#icons)
- [Images and Illustrations](#images-and-illustrations)
  - [Illustrations](#illustrations)
  - [Images](#images)
- [Branding](#branding)
- [Using a CSS framework](#using-a-css-framework)
- [Design tools](#design-tools)
- [More reading, tips, and tools](#more-reading-tips-and-tools)

## Building a design-y sense

This step isn't necessary but it's the thing that gave me the most improvement for the least effort. It will improve your "design sense", and give you an idea of your personal design style. The steps are: 

1. Visit [Dribbble](https://dribbble.com) (I have no affiliation) and sign up for their weekly newsletter 
2. When you receive the weekly newsletter, click the "Most Popular Shots" link
3. Browse through the first page of the most popular shots for that week
4. "Favourite" any that you like

This takes about 5 minutes each week. After a few weeks you can go back and look at your favourites. You'll likely find a theme in your favourites - perhaps the same color, or you like angles, etc. 

You'll also notice the up-and-coming trends. In the past it was soft shadows and sharp angles. The current trend is illustrations of people. Start feeding these trends into your projects. Even if you aren't a big fan of them, it's good to remember that design is effective when it appeals to your target audience and not yourself. 

## Creating a logo

Logos are a great place to start since the logo design carries over to your software/site. Logos vary for different mediums (print, digital, etc), but since you're reading I'll assume you're a developer, and so your logo will be used on a website, on an app, or in software. 

If this describes your use-case it means your logo should consist of two parts, and should follow a few basic patterns. You should start with:

1. An icon
2. Logo text/name

### Designing an Icon

Here are some useful guidelines:

- **Square** <br />Make sure it fits evenly into a square. This is important because it will be in a `favicon` or possibly an app icon. 
- **Symetrical**  <br />By symetrical, I mean that it should take up an even amount of space within the square. Logos can look a bit awkward when they are squashed to one side or if there is lots of space in one area of the square.
- **Simple**  <br />This is by far the most important rule. There is no such thing as an icon which is too simple. Make sure it is legible when scaled down to 32x32 px. This is how it will look in the tab of a browser. Also keep the colors simple - you can use color, but it's best if you stick with just one.

### Designing the logo text/name

You have a bit more freedom with this one. I would recommend, however, that you make this just a simple color - for example, black or dark grey. Let the icon carry the logo, and let font that you choose for the text set the brand. Whichever font you choose for the text, you should (probably) use it in all the headings of your site/app/software.

## Colors

The best advice I can give for colors is to choose one which is vibrant and that's all. Every other color should be white or black.

Ok, now that I have got that out of the way, you *can* use other colors (for things like alerts, warnings, etc), and a few different grey tones.

If I'm building a tech product, I usually begin my designs with what I call "startup blue". You've probably seen this color on a million different tech sites. The hex code for startup blue is somewhere close to<span style="background-color:#2B70F6;color: #fff; padding:3px;border-radius:3px;">#2B70F6</span>. There are lots of reasons for this, but none more important than it's safe. After you have created your site, feel free to play with this color.

For everything you need to know about colors, I highly recommend reading [Building your color pallete](https://refactoringui.com/previews/building-your-color-palette/) by Refactoring UI. After you have a good grasp on the concepts, you can use [colorbox.io](https://www.colorbox.io/) to build your custom pallete.


## Fonts

To get started it's good to know that

- <span style="background-color:#eee; padding:3px;border-radius:3px;">this is sans-serif</span>
- <span style="font-family:serif;background-color:#eee; padding:3px;border-radius:3px;">this is serif</span>
- <span style="font-family:monospace;background-color:#eee; padding:3px;border-radius:3px;">this is monospace</span>

There are three guidelines I could give here:

- Aim for only one or two different fonts, three if you *absolutely* need it. 
- Sans-serif is safest for headings and the font should (probably) be bold, symmetrical
- Content can be serif but it's fine to be san-serif. Serif fonts are ostensibly easier to read for long paragraphs because the little "tails" on the letters make it easier on the eyes, but this is more true in printed media than on pixilated screens.

As I mentioned in the logo section, you (probably) want your heading font to match your logo font, but it's not critical.

Fonts are something that you have to play with a lot to find something you like. [Google Fonts](https://fonts.google.com/) is useful here (if you don't have an aversion to Google) since you don't have to go through the hassle of downloading/uploading the font to try it out. I'm personally trying to move away from Google so I'm slowly [building up a site](https://quickfont.xyz/) to achieve the same thing, except the fonts are served from GitHub.  

## Icons

Try to use only a few icons. Icons actually add very little, practically speaking, unless you are able to replace some words completely with the icon. A great example is the &equiv; 'hamburger icon' which completely replaces the need to have "Show menu" in navbars. Quite honestly, I think even "good" designers use too many icons. 

That said, a few icons can make a site look more finished. Just make sure the icons have a consistent "theme": they should have the same stroke thickness; if some are rounded, they should all be rounded; keep the colors consistent. 

And once again, simplify! The point of an icon is to reduce the cognitive load on a user. Try to stick with icons that have very little detail.

Here are the best (free) resources that I commonly use

- [flaticon.com](https://www.flaticon.com/)
- [thenounproject.com](https://thenounproject.com/)
- [fontawesome.com](https://fontawesome.com)
- [icons8.com/line-awesome](https://icons8.com/line-awesome)
- [ikonate.com](https://www.ikonate.com)
- [icomoon.io](https://icomoon.io/)
- [core-ui](https://github.com/coreui/coreui-icons/tree/1.0.0/)
- [tabler-icons](https://github.com/tabler/tabler-icons)

## Images and Illustrations

Images and illustrations largely serve the purpose of filling space and emphasizing your message. Which one you choose is a matter of preference, but try not to mix the two.

### Illustrations

Illustrations can really bring a website/app to life. They are less important in software (in fact they would probably look stupid in most software) but work well on landing pages. However illustrations are the hardest to nail, because they are hard quite bespoke which makes it difficult to have a consistent look across all of them. 

Try to create your site first without illustrations (I doubt this will be a problem for most readers), then as a final step add a few illustrations if you have gaps to fill. There are some really great resources starting to pop up which have some free, lightweight illustrations to try. These are:

- [humaaans.com](https://www.humaaans.com/) --> you've probably started seeing these everywhere
- [undraw.co](https://undraw.co/)
- [icons8.com/ouch](https://icons8.com/ouch/) 
- [avataaars.com](https://www.avataaars.com/)
- [freepik.com](https://www.freepik.com/)

### Images

Images are much easier than illustrations because the quantity of stock photos is so much larger than stock illustrations, and if you want to move the designs in-house in the future then it's far easier to find a competent photographer than a competent illustrator.

Once again, images are far more effective on websites than software (which probably goes without saying, but I'm staying it anyway).

It can be difficult to make images feel "part" of the site - quite often they just seem like they are floating in place. It just takes some small things to mitigate this. For example, you can make your images stretch full-width. Or if your site uses lots of rounded corners, add rounded corners to your floating images. If your site uses drop-shadows, add them to your images. 

Adding text onto images is a little bit risky since it can make the text hard to read. If you are going to do this, add a very subtle drop shadow to the text. 
Alternatively you can consider adding an overlay between the text and the image. 

The best sites I use for images are:

- [unsplash.com](https://unsplash.com/)
- [pixabay.com](https://pixabay.com/)
- [pexels.com](https://www.pexels.com/)

## Branding

Consistency is the only thing you need to remember here. For a product to feel cohesive, it must be consistent. Some guidelines are:

- Choose one color and use it everywhere. For everything else use black or dark grey.
- Choose one font and use it everywhere
- Text sizes should always be the same (with the exception of headers). Don't make one paragraph 12px and another 14px
- Use consistent padding
- Make things line up. When we see things for the first time, it's easier to make sense of fewer "blocks" of things. We can achieve this by grouping things together and aligning them. 

Don't fall into the trap of "redesigning sections". When you start designing it feels like every part of your site should look slightly different. In fact the opposite is true. Try to use the same layouts everywhere. When a person sees a something for the first time their brain has to make sense of everything they are seeing. There is a cognitive load while they determine what is the important information, and this is mentally an uncomfortable process. If you can reuse the same layouts throughout your site then your users' cognitive load is lessened, and they only have to feel uncomfortable once.

## Using a CSS framework

If you're building a website, I highly recommend keeping your CSS framework and JS framework separate. Wherever possible avoid using "locked in" frameworks like ReactStrap, and instead opt for "class based" CSS frameworks. Once you become comfortable with this then your designs can be implemented anywhere - whether you use HTML, React, Vue, or whatever latest and greatest framework you decide to use.

I would also recommend sticking with a "utility-first" CSS framework. Take your pick of either [Bulma](https://bulma.io) or [Tailwind](https://tailwindcss.com/) and invest a day into learning how they work. This day will pay off in spades - prototyping with either of these is quicker than designing then implementing from scratch. Avoid ever using the `style` tag. Just use classes for everything from layout to look and feel.

## Design tools

[Figma](https://www.figma.com). That's all you really need. Forget about Sketch and Invision. Figma has vector design capabilities, clickable prototypes, commenting, and it's collaborative. And it's free(mium)! Invest a little bit of time into using it - video tutorials are quite helpful here - and then live inside it for anything that you need to do for design and editing. 

I'm really a fan-boy of Figma, but for good reason. I've tried a lot of other tools in the past and none are as good (and holistic). If you're working with photos then you may also need Photoshop but as a developer the types of things that you need to do with photos are usually just compressing and resizing, which can be better achieved with an asset pipeline.


## More reading, tips, and tools

- [The HN discussion of this very post](https://news.ycombinator.com/item?id=22126731). A lot of great advice in the comments.  
- [Julian Landing page](https://www.julian.com/guide/growth/landing-pages): This is the best guide I know for building a landing page. One additional tip: if you are using a Hero on your landing page, make it only `70vh` and have a "More" button below it. Too many websites have a `100vh` hero, and it isn't immediately apparent to the user that they can scroll down.
- [Design Tools for Everything](https://github.com/LisaDziuba/Awesome-Design-Tools): A huge list of tools. I personally find these lists a bit daunting but it does have something for everybody if you can be bothered combing through it.
- You may occasionally want to implement some CSS layouts outside of the grid systems provided by Bulma or Tailwind. A couple of resources for learning are [testdriven.io/blog/css-grid](https://testdriven.io/blog/css-grid) and [every-layout.dev](https://every-layout.dev)
- An awesome resource for creating printable UI mockups/wireframes templates: [github.com/alexadam/printable-mockups](https://github.com/alexadam/printable-mockups)
- Rules for Intuitive UX - [learnui.design](https://learnui.design/blog/4-rules-intuitive-ux.html)
- The Baymard Institute: An evidence-based trove of UX best practices - [baymard.com](https://baymard.com/)