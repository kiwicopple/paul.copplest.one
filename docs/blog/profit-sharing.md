---
date: 2020-05-24
description: How to compensate employees.
---

# Profit sharing

I often ponder how to pay startup employees. Let's face it - it's shit to work in a startup. You work long hours. You get paid peanuts. When(if) you get shares, it's points-of-a-percentage, even though you are working as hard as a cofounder who has 20 times more equity than you do (although hopefully they have more experience). 

Most of the time your equity is worthless. Either the company fails and you get nothing, or it continues doing "ok", but you can't sell the shares if you need the cash.

And I'm saying this as a founder. I've never been in the position above, I just can't yet reconcile it other than "well, that's how it's done".

It's not easy for the founders either - they would be foolish to give employees a large chunk of equity. Startups typically take 10 or 15 years to reach an exit. Most employees won't be at the company for more than a few years - once they have vested it's in their interest to leave and diversify their risk. The founders are the ones who will slug it out, safe-guarding the equity that employees have vested. They need to be incentivised to work hard for the remaining 10 years after the first employees have left.

The system is broken. I've been brewing some ideas, the best I have is a profit sharing system. It's imperfect but simple enough to explain. I'll use my own company as an example here (Supabase).

## How

**Bonus Pool**

- Supabase pays 20% of its profit into a "Bonus Pool" each month.
- This Bonus Pool is distributed between the all employees in the form of a bonus
- The amount of bonus each employee earns is based on their Profit Vesting

**Profit Vesting**

There are 4 levels of employees, who vest at different rates:

- 1 point: intern-level employees
- 2 points: junior employees
- 3 points: senior employees
- 4 points: VPs, execs, founders

Each month the employee "vests" points into the Profit Pool. Then the profit pool is split up according to how many points each employee has.

## Example

Lets take a simple example where we have 1 intern (Bobby), 1 junior developer (Andrew), and two founders (Ant and Paul).

**Month 1**

In the first month, there are the following points vested:

| Employee | Month 1 | Total per employee |
|----------|---------|--------------------|
| Bobby    | 1       | 1                  |
| Andrew   | 2       | 2                  |
| Ant      | 4       | 4                  |
| Paul     | 4       | 4                  |
| Total    |         | 11                 |

If Supabase earned $550,000 then the total Bonus Pool would be $110,000 (20% of $550,000). These numbers are fictional so that the math is simpler. This means that each employee would get a bonus:

- Bobby: $10,000 (1/11 points * 110,000)
- Andrew: $20,000 (2/11 points * 110,000)
- Ant: $40,000 (4/11 points * 110,000)
- Paul: $40,000 (4/11 points * 110,000)

**Month 2**

Now let's say that Supabase hired a senior developer (Fran) in the second month. The profit vesting would now look like this:

| Employee | Month 1 | Month 2 | Total per employee |
|----------|---------|---------|--------------------|
| Bobby    | 1       | 1       | 2                  |
| Andrew   | 2       | 2       | 4                  |
| Ant      | 4       | 4       | 8                  |
| Paul     | 4       | 4       | 8                  |
| Fran     |         | 3       | 3                  |
| Total    |         |         | 25                 |


If Supabase earned $625,000 then the total Bonus Pool would be $125,000 (20% of $625,000 - it was a good month for the company). This means that each employee would get a bonus:

- Bobby: $10,000 (2/25 points * 125,000)
- Andrew: $20,000 (4/25 points * 125,000)
- Ant: $40,000 (8/25 points * 125,000)
- Paul: $40,000 (8/25 points * 125,000)
- Fran: $15,000 (3/25 points * 125,000)

## Advantages

A couple of interesting thing about the above situation:

- Adding an extra employee meant that everyone's bonus stayed the same - even though the company greatly increased its profit. This creates an incentive: if the team want to hire a new person, it's because they NEED that employee, and everyone is invested in helping them to quickly start contributing. The first course of action will always to increase the effectiveness of the existing team. If they have to hire a new employee then it will be on the belief that the new employee will have a significant impact on the company profit.
- All employees, down to the most junior, are aligned on making a profit. It becomes a North Star. Not a meaningless one like "daily transactions". A real one with real impact on their own personal livelihood.
- Loyal employees earn more. In month 2, Andrew earned more than Fran - even though he is a junior. 
- It is liquid. No locked-in equity - employees are immediately compensated for their hard work.

## Challenges

- Employees also suffer from market conditions. This is the trade-off I believe many employees are willing to take.
- Employees leaving. In this case I imagine that they immediately forfeight their points in the pool. This could lead to people just "sitting" on their points (like many people do with ESOP), or employees wanting to "force-out" other employees.
- Underperforming employees. The 4-level granularity is quite broad. It means that some "seniors" might be less effective than others.
- VP-level employees who join could immediately be earning more than others (Juniors) who have been with the company a long time.
- Early joiners take on more risk than those who join once the business is already profitable. But this is mitigated by the increased share in the Profit Pool.
- Tax? Bonuses are probably on different tax schemes.
- "That's not how it's done". Likely this is how a VC will respond to a Profit Sharing scheme.


## Resources

- Some work I started [way back](https://web.archive.org/web/20171113221424/http://madebykade.com/manifesto/retirement-fund/)