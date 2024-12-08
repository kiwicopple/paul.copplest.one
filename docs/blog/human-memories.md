---
date: 2024-12-08
description: Characteristics of human memories
---

# Human memories

I've been writing a blog post about [graphs](https://en.wikipedia.org/wiki/Graph_theory). One application for graphs is modelling human memories. In the draft of that blog post, I went too deep into the characteristics of human memories - I found the content interesting but it detracted from the initial thesis. I've copied the content here so I can revisit it in the future.

## Modelling human memories with graphs

Since ChatGPT was released in November 2022, there have been 2 major features that software developers have added to their toolkit: LLMs and RAG. One area that’s still nascent is the idea of building a “memory layer”.

If you’re a ChatGPT user you’ve probably noticed it “remembering” key facts throughout your conversations:

![chatgpt memory](/img/chatgpt-memory.png)

Storing and retrieving facts is simple with most databases:

```sql
CREATE TABLE facts (
  fact_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES auth.users,
  fact TEXT, -- A simple description of the fact, e.g., "Likes hiking", "Visited Japan in 2021"
  created_at TIMESTAMP DEFAULT NOW() -- When the fact was added
);
```

The real power of memories lies in the relationship _between_ various facts (the “edges” of a graph), which can be incredibly difficult to model without some sort of graph structure. This is because humans have some, well ... quirks.

To demonstrate, let’s consider how to model different types of facts that your users share. To list just a few:

### Preference Facts

Preference facts explicitly represent a user’s likes, dislikes, or ranked preferences. Example:

- Fact 1: “I prefer mountains over beaches.”
- Fact 2: “I dislike spicy food.”
- Preference relationship: Preferences indicate stronger choices or aversions.
- Use case: Use these facts to tailor your recommendations based, filtering out suggestions that don’t align with the user’s stated likes or dislikes. If a user prefers quiet vacations over busy city tours, you can prioritize peaceful locations.

### Contradictory Facts

Contradictory facts represent instances where two pieces of information directly conflict with each other. Example:

- Fact 1: “I love Italian food.”
- Fact 2: “I dislike pasta.”
- Contradictory relationship: Italian cuisine is closely related to pasta, which creates a conflict.
- Use case: Use these facts to prompt the user to clarify contradictory information. For instance, “You mentioned loving Italian food but also said you dislike pasta. Could you clarify?”. You can use the answer to store a new fact or apply a stronger “weight” to figure out how to rank these facts based on preference.

### Conditional Facts

Conditional facts are pieces of information that depend on certain conditions being met. Example:

- Fact 1: “I like coffee in the morning.”
- Fact 2: “I drink tea in the afternoon.”
- Conditional relationship: A user’s drink preferences change based on the time of day.
- Use case: use these facts to provide tailored suggestions based on current conditions. For instance, if it’s morning, you might suggest coffee, while in the afternoon you suggest tea.

### Contextual Facts

Contextual facts represent facts that are relevant in specific situations or contexts. Example:

- Fact 1: “I like going to the beach in summer.”
- Fact 2: “I prefer staying indoors in winter.”
- Contextual relationship: These preferences depend on seasonal conditions.
- Use case: Use these facts to adjust responses based on the current environment or circumstances. If the user is planning a vacation in summer, you can recommend beach destinations, whereas for winter you might suggest indoor activities or skiing.

### Temporal Facts

Temporal facts represent events or information in the order in which they occurred, but without implying a cause-and-effect relationship. The focus is on sequence and time. Example:

- Fact 1: “I visited Japan in 2020.”
- Fact 2: “I visited Canada in 2021.”
- Temporal relationship: A user visited Japan before Canada, but there’s no direct cause implied between these two trips.
- Use case: You can refer to these facts to avoid suggesting travel destinations travel locations where a user has already visited (recently) or to offer a timeline of past travel experiences.

### Sequential Facts

Sequential facts are like temporal facts but with a stronger emphasis on ordering or the required sequence of events. These are particularly useful in workflows, task management, or when a specific order must be followed. Example:

- Fact 1: “Submit the design mockups.”
- Fact 2: “Start coding the app.”
- Sequential relationship: Coding can only begin after the design is completed.
- Use case: This is useful for tracking tasks or processes that must follow a certain order. You can suggest the next logical step based on the user’s progress through the sequence of tasks.

### Causal Facts

Causal facts explicitly represent a cause-and-effect relationship between two pieces of information, where one fact directly leads to or influences another. Example:

- Fact 1: “I am on a diet.”
- Fact 2: “I stopped eating fast food.”
- Causal relationship: A user stopped eating fast food because they are on a diet, implying that the dietary change.
- Use case: You could suggest vegetarian meal options in future conversations, and avoid suggesting fast food. Even if the user stated that they “loved fast food” in the past, the weight of the causal relationship can override previous facts.

### Relational Facts

Relational facts represent connections or associations between different pieces of information, without implying any time sequence or causality. These relationships can be based on similarity, membership, or other types of links that provide context to the user’s preferences or actions. Example:

- Fact 1: “I enjoy outdoor activities.”
- Fact 2: “I love hiking.”
- Relational relationship: These two facts are related because both involve outdoor activities.
- Use case: Relational facts help you to make generalizations. For instance, if the user likes hiking and cycling, you could infer a preference for outdoor sports and suggest other activities like kayaking. As an aside, [pgvector](https://github.com/pgvector/pgvector) would be a great way to build a graph of relational facts based on some sort of “similarity threshold”.

### Hierarchical Facts

Hierarchical facts represent parent-child relationships, where one fact is a subcategory or specialization of another. Example:

- Fact 1: “I’m learning programming.”
- Fact 2: “I’m learning JavaScript.”
- Hierarchical relationship: Learning JavaScript is a subcategory of learning programming. The fact that the user is learning JavaScript is a more specific instance of their broader goal of learning programming.
- Use case: If a user asks for “programming resources”, you can traverse a hierarchical relationship to suggest the most relevant content for the user: in this case you would suggest some JavaScript resources instead of general programming resources.
