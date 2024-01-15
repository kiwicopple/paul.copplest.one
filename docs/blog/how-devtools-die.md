---
date: 2024-01-14
description: The devtools cycle
---

# How dev tools die

There is an interesting cycle in developer tools companies that grow from "bottom up":

#### Stage 1: Community growth

A developer tool solves an important problem for developers and start gaining a lot of adoption.

#### Stage 2: Monetization

They add pricing, and the revenue grows slowly but surely.

![Monetization](/img/devtools-2.png)

#### Stage 3: Crossing the chasm

Enterprises take notice and the dev tool "crosses the chasm". 

![Crossing the chasm](/img/devtools-3.png)

#### Stage 4: Revenue slowdown

Suddenly the revenue growth slows down. The company looks back and see that their community isn't too healthy any more. The leadership decide they need to pour some fertilizer into the community to boost their revenue growth.

![Revenue slowdown](/img/devtools-4.png)

#### Stage 5: Point of no return

It's too late. Ironically the Point of No Return is the same time the Revenue starts slowing down

![Point of no return](/img/devtools-5.png)


The revenue growth doesn't _stop_ per-se, it just doesn't grow as fast. The potential outcome of your company is no longer the total market - it's simply the scraps of whatever new developer tool is better serving the customers you lost (or [try](https://news.adobe.com/news/news-details/2022/Adobe-to-Acquire-Figma/default.aspx) to [buy](https://techcrunch.com/2021/03/04/making-sense-of-the-6-5b-okta-auth0-deal/) them).

# Protect the channel

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

An enterprise company wants some unique feature? Oh, and they are willing to pay $1m for it? Of course, for that price it makes sense. 

But now you have two slightly different products to support: one for your community, one for the enterprise. New enterprises come along, and you're desparate to get their badge on your website. 

Suddenly your supporting all sorts of customizations - one for every million-dollar enterprise. New features are getting harder to roll out: instead of one deployment you have 10. One of your enterprise customers can't accept a roll-out for the next month, so you need to support them their old version for a while. 

Over time, your organization builds scar tissue. The tech-debt mounts and you're starting to look more like a services company that a SaaS.

I was on listening to the Atlassian President speak at a conference recently. She told several stories about how they said "no" to large customers, because they needed too many adaptations to their products. Those customers walked away, of course, but then returned a couple of years later.

## Configuration, not customization

The good news is that the solution is relatively simple, it's just not easy. The "right" way to support enterprises is to add configuration to your platform - allow them to make changes themselves through parameters.

For example
- if the customer needs a particular authentication method, build support for the underlying protocol, rather than their specific login.
- if the customer needs to disable a port you have open, build an interface around all your ports to that every customer can use that feature.
- if the customer needs to deploy into their own cloud, build "bring your own cloud" as a product that you can offer to all enterprises.

If something they are asking for doesn't extend to many more customers, then say no. That's the hard part, leaving money on the table now, for the belief that, in the long-run, it's better for everyone - your community, your customers, and even that enterprise who is making their bespoke demand.