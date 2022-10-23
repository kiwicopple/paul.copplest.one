---
date: 2020-10-10
description: I receive many requests to talk about open source, and the questions are often similar. This post answers the most frequent questions.
---

# Why open source?

I receive many requests to talk about open source and the questions are often similar. This post answers the most frequent questions (and is constantly being updated).

## How did you decide that open source is your right strategy for Supabase? 

My cofounder, [Ant](https://twitter.com/AntWilson), answered this in the blog post [Should I Open Source my Company?](https://supabase.com/blog/should-i-open-source-my-company).

When we started Supabase we didn't really question whether we would open source it. Both Ant & myself are philosophically aligned to open source and we didn't consider any alternative.

## Should I open source my business?

In the article above, Ant makes a good case for _everything_ being open source. I also like this as a _default_, but I also know that there are certain businesses that will 
struggle to monetize. This is less about being open source, and more about the business proposition. A good example of this is client libraries or frameworks, like React - 
while it completely makes sense that React is open source, it's hard to make money from it. If you're questioning how to "make money from open source", I would suggest you're better-off
asking: "can this make money even if it's closed-source?". Usually there is a "periphery" service around your open source project which is a good business-model. (In the case of React: Netlify and Vercel.)

## Do I need to open source my business?

Nobody needs to open source anything. Be aware however, that ff you become successful someone else will build an open source alternative to your product. 

## What licenses do you use at Supabase?  

Only MIT, Apache 2, and PostgreSQL. 

## How did you decide to use these licenses?

They are all [OSI compliant](https://opensource.org/licenses). These are great because they require less "legal work" when a company is considering adopting your technology.

## What do you think of the SSL licenses which restrict cloud providers from hosting your product?

I think they were a necessary step during the cloud-transition. When AWS pioneered the cloud, they were really the only trusted provider (now also Azure and GCP).
It's becoming more common for open source projects to have a cloud-hosted offering now, and they are a great way to monetize open source (infrastructure) projects.
I don't particularly like SSL licenses now, because it makes it harder to adopt the product even for smaller business (see "OSI compliance" above).

## What do you think of AGPL?

We tend to avoid using AGPL at Supabase because it's too ambiguous. We asked our lawyers if we could use Minio for Supabase Storage and this was their (trimmed) response:

> *What is the difference between an “aggregate” and other kinds of “modified versions”? ([#MereAggregation](https://www.gnu.org/licenses/gpl-faq.en.html#MereAggregation))*
>
> An “aggregate” consists of a number of separate programs, distributed together on the same CD-ROM or other media. The GPL permits you to create and distribute an aggregate, even when the licenses of the other software are nonfree or GPL-incompatible. The only condition is that you cannot release the aggregate under a license that prohibits users from exercising rights that each program's individual license would grant them. Where's the line between two separate programs, and one program with two parts? This is a legal question, which ultimately judges will decide. We believe that a proper criterion depends both on the mechanism of communication (exec, pipes, rpc, function calls within a shared address space, etc.) and the semantics of the communication (what kinds of information are interchanged).
>
> If the modules are included in the same executable file, they are definitely combined in one program. If modules are designed to run linked together in a shared address space, that almost surely means combining them into one program.
>
> By contrast, pipes, sockets and command-line arguments are communication mechanisms normally used between two separate programs. So when they are used for communication, the modules normally are separate programs. But if the semantics of the communication are intimate enough, exchanging complex internal data structures, that too could be a basis to consider the two parts as combined into a larger program.

That's a lot more complicated than "do what you want with it". We decided it would be too onerous to go through the classification every time we're doing commercial deals, and so we had to build our own Storage engine.

## Do companies contribute code to your project?

I would estimate that 95% of Supabase is maintained by Supabase employees. There are some projects which are easier to contribute to (for example, adding a Social provider for our Auth server).
We receive plenty of smaller contributions from the community (spelling fixes, docs updates, Discord moderation, translations), and some larger contributions where we can "scope down" the 
task (like client libraries). 

One anecdote - when we were starting Supabase one of our customers needed "Login with Azure". Within 2 days of the request, they had contributed the functionality to the codebase and we released it to the platform for them to use. That would never have happened if we were closed-source.

## Is it a concern that everyone wants to compete with you to have access to your code? 

No. If someone is building a competitor to us and they are doing a better job than we are then we deserve to be beaten. Supabase competes on experience, and open source ensures that remains true.

We also support existing tools, so not all of our code is "our" anyway (eg: we contribute to PostgreSQL, and we employ the maintainer of [PostgREST](https://postgrest.org)).

## Any resource/tip you wish you'd know when starting Supabase OSS?

A non-exhaustive list:

- Open sourcing your code isn't as scary as you think.
- If you aren't open sourcing everything, you can consider "open core". If you are going to go open core then be very upfront with your community. For example, if someone says you are open source, correct them.
- There are a lot of open source "purists". When you dig into their mindset, using what they believe is that open source should _only_ be free. This is, of course, unsustainable. Ignore these people.