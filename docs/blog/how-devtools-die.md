---
date: 2024-01-14
description: The devtools cycle
---

# Enterprise Sales vs Product-led Growth

Building for developers is unique. In some ways developer platforms operate like a social network, where word of mouth plays a big part in the early growth. This growth is often referred to as Product-Led Growth (PLG), or bottom-up growth. If a developer likes your product, they will happily advocate for it, inviting more developers to try it out.

## Developer tools lifecycle

There is an interesting lifecycle in developer tools companies that grow from the "bottom up":

### Stage 1: Community growth

A developer tool solves an important problem for developers and starts gaining a lot of adoption.

### Stage 2: Monetization

They add pricing, and the revenue grows - slowly but surely.

![Monetization](/img/devtools-2.png)

### Stage 3: Crossing the chasm

Enterprises take notice and the platform "[crosses the chasm](https://en.wikipedia.org/wiki/Crossing_the_Chasm)". 

![Crossing the chasm](/img/devtools-3.png)

### Stage 4: Revenue slowdown

Suddenly the revenue growth slows down. The company looks back and see that their community isn't too healthy any more. The leadership decide they need to pour some fertilizer into the community to boost their revenue growth.

![Revenue slowdown](/img/devtools-4.png)

### Stage 5: Point of no return

It's too late. Ironically the Point of No Return is the same time that the revenue started slowing down

![Point of no return](/img/devtools-5.png)


The revenue growth doesn't _stop_ per se, it just doesn't grow as fast. The potential outcome of the company is no longer the total market - it's simply the scraps of whatever new developer tool is better serving the customers you lost (unless you [try](https://news.adobe.com/news/news-details/2022/Adobe-to-Acquire-Figma/default.aspx) to [buy](https://techcrunch.com/2021/03/04/making-sense-of-the-6-5b-okta-auth0-deal/) them).

## Protect the channel

I first learned the term "protect the channel" as a cautionary tale from Groupon:

> _Their team started wondering whether sending more emails would improve metrics. The CEO eventually gave in and allowed his team to test sending one more email to each user each day. This test resulted in a big increase to their target metrics. Encouraged, Groupon kept experimenting, sending more emails, even as many as five a day._
> 
> _Then, in what felt like a change from one day to the next, their email channel lost most of its effectiveness. Over time, the accumulation of Groupon’s aggressive email tests had basically destroyed their channel. One often underappreciated risk with aggressively A/B testing emails and push notifications is that it results in users opting out of the channel; and even if you kill the test, those users remain opted out forever. Do this many times, and you’ve destroyed your channel. This was the outcome to avoid. For our push notifications, we established one foundational rule: protect the channel._
>
> <small>[Source](https://www.lennysnewsletter.com/i/104096876/push-notifications-vector)</small>

For a product-led growth company, your community _is_ your channel. Once you lose it, you'll never get it back. 

Most devtools simply get too greedy too fast. The big dollars start coming in, and suddenly this becomes your ideal customer profile. Once you've become an "Enterprise company", you're lost to developers. You only get one chance to build a reputation. 


## Death by a thousand enterprises

The actual root cause of the slow down is more insidious. 

An enterprise company wants some unique feature, and they're willing to pay $1m for it? Of course, for that price it makes sense. 

But now you have two slightly different products to support: one for your community, one for the enterprise. New enterprises come along with similar demands, and you're desperate to get their badge on your website. 

Suddenly you're supporting all sorts of customizations - one for every million-dollar enterprise. New features are getting harder to roll out: instead of one deployment you have 10; one of your enterprise customers can't accept a roll-out for the next month, so you need to support them their old version for a while. 

Your organization starts to build scar tissue. As the tech-debt mounts it starts looking more like a services company than a SaaS.


## Configuration, not customization

The good news is that the solution is relatively simple, it's just not easy. 

At a conference recently, I heard the Atlassian President tell several stories about how they said "no" to large customers - because they wanted too many adaptations to the Atlassian products. It's not easy to say not to a muli-million dollar customer. Those customers walked away, of course, but they also returned a couple of years later. I'm sure that many never returned, but also Atlassian didn't pick up any scar-tissue along the way.

The "right" way to support enterprises for a PLG product is to add configuration to your platform. Allow your customers to _make changes themselves_ through parameters and composable modules. 

For example:

- if the customer needs a particular authentication method, build support for the underlying protocol, rather than their specific login.
- if the customer needs to disable a port you have open, build an interface around all your ports to that every customer can use that feature.
- if the customer needs to deploy into their own cloud, build "bring your own cloud" as a product that you can offer to all enterprises.

If a customer is are asking for a feature that doesn't extend to many more customers, say no. That's the hard part: leaving money on the table now for the belief that, in the long-run, it's better for everyone - your community, your customers, and even that enterprise who is making their bespoke demand.