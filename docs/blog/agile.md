---
date: 2019-08-29
description: Intro to Agile
---

# Intro to Agile

> Status: DRAFT

Ask 3 developers "what is agile" and you'll probably get four different answers. The reason why is because there is no "definitive agile", and the [Agile Manaifesto](https://agilemanifesto.org) which started all things agile is extremely loose (on purpose!). 

This article will give you a brief background on agile, but more importantly how to apply it to your own situation or team.

**Contents**

- [How to do Agile](#how-to-do-agile)
- [A brief history of Technical Project Delivery](#a-brief-history-of-technical-project-delivery)
- [The agile manifesto](#the-agile-manifesto)
- [Common methodologies](#common-methodologies)
- [Agile toolset](#agile-toolset)
- [Interesting implementations](#interesting-implementations)

## How to do Agile

I'm not going to bury the lede here. If you're looking to build an agile team, the best approach is to:

1. start with as little process as needed
2. get regular feedback from your team on ways to improve the process
3. pull from a wide toolset of useful practices to make your team more effective

What might this look like?

- **Every day**<br />Do a daily standup where everyone gets together. Ostensibly this is to talk about what you are working on. But if you're doing agile "right" then this is likely the only time your developers all get together in one place for that day. Don't be dogmatic about how the standup is run, it's great for culture when the managers get out of the way.
- **Every week**<br />Once per week do a retrospective where you ask your team what can be improved about the *process*. It's important to highlight the distinction of product vs process. You don't want to talk about product improvements in this meeting. Instead the team should think of activities that make them more effective at building the product. More/less meetings, more/less documentation, more/less tracking of productivity, etc.

What you'll end up with a process which is completely unique to your team, even within the same company.


> 
> *"Software Is about Developing Knowledge More than Writing Code"*
> 
> <small>Some comment I saw on Hacker News</small>


----

Before outlining a list of tools that you can use, it might be worthwhile knowing how software development got to where it is.


## A brief history of Technical Project Delivery

In the not-so-distant past, the term Waterfall was ubiquitous with Project Managers. Quite simply it outlined the phases which a technical project would move through: 

`Requirements -> Design -> Develop -> Test -> Deploy -> Maintain`

It looks very similar to current tech projects, except that it was done in a "monolithic" approach. No matter how big the project was, and how long it was expected to take, the project would be shoved through this pipeline, and once a transition from one stage to another was made there was no going back.

The problem with this approach is that frequently big projects would get delivered, and at the end of the process and everyone would discover the requirements have changed, the requirements were incorrect to start with, or the people who initiated the project are gone. 

## The agile manifesto

Eventually some smart techies got together in a ski resort and decided to develop the 
[agile manifesto.](https://agilemanifesto.org)

Although it is *extremely* brief, I rarely meet developers who have read the manifesto, so I'm going to list the four core values here:

- Individuals and interactions over processes and tools
- Working software over comprehensive documentation
- Customer collaboration over contract negotiation
- Responding to change over following a plan
  
There are also [12 Principles](https://agilemanifesto.org/principles.html), which I'll let you read on your own.



## Common methodologies


- Kanban
- Scrum: 
- Extreme Programming (XP)
- Lean software dev: focus on eliminating waste
- Crystal: focus on people


## Agile toolset

- Kaizen
- Kanban board
- Stand ups
- Sprints and spikes
- Backlogs: Product, sprint
- Tasks, Milestones, Epics
- Estimations with story points
- User stories. As a `<persona/role>`, I want `<goal>`, so that `<desired outcome>`
- Gantt charts: Critical path
- Velocity
- Definition of Done & Acceptance criteria
- Deliverables/Artifacts: 
- Sprint review and retro
- Sprint planning
- Roles: PO, scrum master, on-site customer
- Pair programming
- Pull Requests 
- TDD / BDD / FDD
- Burn down charts
- Scope and 
  - Product requirements documentation
  - scope creep
- Release notes / Increment / Press releases


## Interesting implementations

- Early WhatsApp - "No process"
- Spotify - "Autonomous Tribes"
- Amazon - FDD & Press Releases
