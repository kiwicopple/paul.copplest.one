---
date: 2020-03-11
description: How agile should be done.
---

# How to Agile

Ask 3 developers "what is agile" and you'll get four different answers. That's because there is no "definitive agile", and the [Agile Manifesto](https://agilemanifesto.org) which started it all is extremely loose (on purpose!). 

This article will give you a brief background on agile, but more importantly it'll give you a few tips on how to apply it to your own team.

**Contents**

[[toc]]

## Don't start with processes

I won't bury the lede. If you're looking to build an agile team, the best approach is to:

1. Start with as little process as needed. I can't emphasis this step enough, start with **the minimum possible process**. This is the part that most teams get wrong.
2. Get regular feedback from your team on pain points and get their buy-in on ways to improve the process.
3. Start adding or removing processes whenever required. You can pull from a wide toolset of useful practices to make your team more effective. There is no need to be dogmatic about any particular methodology.

What *might* this look like when you are getting started?

- **Every day**<br />Do a standup where everyone gets together. This will possibly be the only time your developers spend together each day. Don't be too uptight about how the standup is run, it's great for culture when the managers get out of the way.
- **Every week**<br />Once per week do a retrospective where you ask your team what can be improved about the *process*. It's important to highlight the distinction of product vs process. You don't want to talk about product improvements in this meeting. Instead the team should think of activities that make them more effective at delivering. More/less meetings, more/less planning, more/less tracking of productivity, etc.

You'll probably end up with a process which is completely unique to your team, even within the same company.

## A brief history of Software Project Management

Before digging deeper into Agile it might be worthwhile knowing how software development got to where it is.

In the not-so-distant past, a Waterfall development approach was ubiquitous. Quite simply it outlined the phases which a technical project would move through: 

```
1. Gather all requirements 
2. Design the entire system 
3. Develop the entire system 
4. Test everything and patch any bugs 
5. Deploy everything in one go 
6. Maintain (sometimes)
```

It looks quite similar to current techniques, except that it was done in one "monolithic" effort. 

No matter how big the project, or how long it was expected to take, the project would be shoved through this pipeline. Once a transition from one stage to another was made there was no going back.

The problem with Waterfall is that big projects would get delivered and everyone would discover that the requirements have changed. Or the requirements were incorrect to start with. Or the people who started the project were gone and nobody knew why they had those requirements to start with. 

## The Agile Manifesto

Eventually some smart techies decided that there needed to be a more effective way. So they got together in a ski resort and decided to develop the 
[agile manifesto](https://agilemanifesto.org).

It's *extremely* brief, but I rarely meet developers who've read the manifesto so I'll list the four core values here:

```
1. Individuals and interactions over processes and tools
2. Working software over comprehensive documentation
3. Customer collaboration over contract negotiation
4. Responding to change over following a plan
```
  
There are also [12 Principles](https://agilemanifesto.org/principles.html) which I'll let you read on your own.

If you've been using agile methodologies in your company, you'll probably be shocked to read the core values. People over processes? That doesn't sound much like the agile shops I worked in. Responding to change? Most companies stubbornly force teams to use their "one true agile".

OK, I'll admit "contract negotiation" isn't a common activity in startups, but if you adapt the third value to "listen to your customers" then you've got a pretty solid set of values for managing a software team. 

Notice as well what *isn't* there. It doesn't say you have to do any specific process. In fact it's not far off telling you the opposite: throw away the processes, plans, and structure; expect change and let your people guide the way.



## Agile Toolset

If you've religiously followed what I said up until now then you'll quickly find all your problems are not yet solved. It turns out that processes **are** important, it's just not clear at the start **which** processess they are.

### Processes

Here are six broad practices that I use and adapt. Most agile methodologies seem to be some variation of these. Use them only if they solve specific problems in your team. 

**Stand ups**: A daily meeting where everyone answers 3 questions: what they worked on yesterday; what they're working on today; and if they have any blockers. Great for culture and an opportunity to clear confusion.

**Retrospectives**: A meeting to discuss the process that the team is using and any improvements to consider. Typically there are 3 questions: what went well? what didn't go well? and what should we do differently? Great for improving your team's agile process.

**Backlogs**: A list of all the tasks that need to be completed. Great for deflecting unimportant tasks from your team's important work.

**Sprints**: A set timeframe for the team to try complete an agreed amount of work. These are typically short - one or two weeks. A meeting held at the start of sprint to discuss what tasks needs to be done. The tasks are usually pulled from the backlog. Great for team productivity (if done correctly).

**Pair programming**: When 2 programmers work together for a task or timeframe. Usually one person will be driving the interaction and the other is more passive. Great for building team knowledge.

**Pull requests**: A review process for code. When one developer has completed a task or needs feedback, they can create a pull request (using version control) for another developer to review. Great for code quality.


### Roles

As your team grows it's sometimes usuful to introduce roles and delegate responsibilities. These are the roles that I find are the most useful.

**Project Manager / Scrum master**: this is a bit of a thankless job. Usually their key responsibility is to track how everything is going. However, developers hate being asked when things will be delivered. I like to reframe the role: this person should concentrate on *reducing* admin tasks for developers so they can focus on their work. New admin tasks should only be introduced by the developers (during the retro).

**Product Owners**: usually a member of company who isn't a techie. This role is for the business side to help priorities tasks. They don't have to make the final decisions on what to build, but their input can be invaluable. Try to pick someone who has a good social standing in the company and will "have the developers' backs". This person is the bridge between techies and the rest of the company and they can really help shield the tech team from unreasonable demands.


### Methodologies

There are a lot of Agile Methodologies but two are predominantly used these days: Kanban and Scrum. If you're new to Agile it can be good to use these as a starting point and them slowly adapt them. Just make sure you remember the fourth agile value: "Responding to change over following a plan". I won't got into them in depth here but here is how I see their usefulness:

**Kanban**: great for consistent, continuous improvements. Usually you'd lay out the entire set of tasks into one board, and then have the developers pull from the top of the list. Slowly, steadily, the tasks get done without a mad rush for some arbitrary deadline.

**Scrum**: great for working towards deadlines. The tasks get chunked up into short sprints - periods of work usually one or two weeks long. At the end of the sprint you assess how much work was done and you can forecast or adjust the deadlines as required. Scrum makes it a bit easier to push out new features compared to Kanban, simply because you can stagger the dependencies.


## Interesting implementations

Learning how other teams do agile is useful in a "the journey is the destination" sort of way. You can learn what worked for *that* company, at *that* time, with *those* people. If you ask these companies today what their agile processes look like then it will almost certainly have changes. So take only what you need from these case studies, but don't get too enamoured into thinking they have the perfect process.

### Spotify: "Autonomous Tribes"

Spotify used to employ a [fairly verbose framework](https://labs.spotify.com/2014/03/27/spotify-engineering-culture-part-1/) where they organised their teams into Tribes, Chapters, and Guilds. They used a very decentralised approach to development, modelling their internal software architecture on the open source model of loose dependencies. If you wanted to identify which agile methodology they use, they would say "it depends which team". 

### Amazon: "Press Releases"

Not so much of a framework but a requirements gathering process. Amazon write "Press Releases" before working on any particular feature. The idea behind this is to be customer driven and to improve clarity. It also answers the question of "why". Much of the work tech teams is driven by blind requirements. Press Releases help to motivate teams by understanding why they are working on a feature and the impact it will have. 

### Early WhatsApp: "No process"

<small>(I can't actually remember where I heard this. I think it was a video of a Whatsapp employee talking at a conference. Please share if you know which video I am talking about.)</small>

In a video I saw, a Whatsapp employee said that every developer had their own backlog. They had full autonomy over what they would work on, with one rule: prioritise bugs over anything else. 

He said that he felt so much empowerment and ownership with this approach, that when his friend told him about a bug during a party he pulled out his laptop and fixed the bug immediately.

Honestly I don't know how this worked when trying to push new features. But I can imagine that if you give your developers autonomy over what they want to work on (maybe pulling from a company backlog) and no set timelines, they will be the most loyal techies in the world. Meaning that they will stay with your company for three years instead of two.
