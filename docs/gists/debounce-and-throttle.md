---
description: Two different methods for rate limiting in your code.
---

# Debounce and Throttle

It's a pretty common situation on the web where the user triggers a lot of events within a short amount of time. Here are a few examples:

- Someone is creating a new username and you need to lookup whether it is unique
- A user is searching and as they type you call a "search()" function
- Fetching more blog posts as a user is scrolling

In the past I wrote my own code to mitigate any issues caused here but today I stumbled across debounce() and throttle(). You can read about them in full [here](https://css-tricks.com/debouncing-throttling-explained-examples/), but in summary:

## Debounce

Debounce will wait until you have *after* finished calling a certain function numerous times, and group all of those functions together. It is good for the search example above - you only want to call the function when the user has stopped typing. The *after* part is key here - if a user kept typing consistently for an hour, the function would only be called once at the end of that hour.

## Throttle

Throttle will call the function, but only once per interval that you specify. A good use for this would be when a user is writing a blog post and you want to save it every five seconds (while they are typing). Compared to **debounce**, this would not wait until the user has stopped typing - so if the interval was 10 seconds, the function would have been called 360 times after an hour of consistent typing (6 times per minute, for 60 minutes).
