---
date: 2020-05-24
description: How to compensate employees.
---

# Profit Sharing

I often think about how to pay startup employees. Let's face it - it's shit to work in a startup. You work long hours. You get paid peanuts. When(if) you get shares, it's points-of-a-percentage, even if you're working as hard as a cofounder. 

Most of the time your equity is worthless. Either the company fails and you get nothing, or it continues doing "ok" but you can't sell the shares.

It's not easy for the founders either - they would be foolish to give employees a large chunk of equity. Startups typically take 10 or 15 years to reach an exit. Most employees won't be at the company for more than a few years - once they have vested it's in their interest to leave and diversify their risk. The founders are the ones who will slug it out, safe-guarding the equity that employees have vested. They need to be incentivised for the remaining 10 years, long after the first employees have left.

The system is broken. I've been brewing some ideas, the best I have is a profit sharing system. It's imperfect but simple enough to explain. I'll use my own company as an example here ([Supabase](https://supabase.io)).

## How

**Bonus Pool**

- Supabase pays 20% of its profit into a "Bonus Pool" each month.
- This Bonus Pool is distributed between all employees in the form of a bonus.
- The amount of bonus each employee earns is based on their Profit Vesting.

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

In the first month, the following points are vested:

| Employee | Month 1 | Total per employee |
|----------|---------|--------------------|
| Bobby    | 1       | 1                  |
| Andrew   | 2       | 2                  |
| Ant      | 4       | 4                  |
| Paul     | 4       | 4                  |
| Total    |         | 11                 |

If Supabase earns $550,000 then the total Bonus Pool would be $110,000 (20% of $550,000). These numbers are fictional so that the math is simpler. Each employee gets the following:

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


If Supabase earned $625,000 then the total Bonus Pool would be $125,000 (20% of $625,000 - it was a good month for the company). Each employee gets:

- Bobby: $10,000 (2/25 points * 125,000)
- Andrew: $20,000 (4/25 points * 125,000)
- Ant: $40,000 (8/25 points * 125,000)
- Paul: $40,000 (8/25 points * 125,000)
- Fran: $15,000 (3/25 points * 125,000)

## Advantages

A couple of interesting thing about the situation above:

- Adding an extra employee dilutes everyone's bonus - even though the company greatly increased its profit. This creates an incentive: if the team wants to hire a new person, it's because they NEED that employee. The first course of action would be to increase the effectiveness of the existing team. Hiring a new employee indicates that the addition will have a significant impact on the company profit. Once they are hired, everyone is invested in helping them to become an effective contributor. 
- All employees, down to the most junior, are aligned on making a profit. It becomes a North Star. Not a meaningless one like "daily transactions". A real one with real impact on their own personal livelihood.
- Loyal employees earn more. In month 2, Andrew earned more than Fran - even though he is a junior. 
- Simplicity. Most employees don't understand the value of "0.1%". It's a tough conversation that I've had to have a few times now, convincing an employee that what you're offering to them is worthwhile. Profit sharing is much simpler to grasp.
- It's liquid. No locked-in equity - employees are immediately compensated for their hard work.
- Founders don't get diluted - smaller (or no) ESOP. This sounds selfish (why not offer both), but I legitimately believe there is better alignment this way. If a founder feels they are giving up equity "as well", then there is less incentive to stick to the profit-sharing plan. More importantly it prevents another problem:
- No dead equity. When an employee vests equity then leaves it means that equity is "ineffective". It can't be used progress the company anymore.

## Challenges

- Employees also suffer from market conditions. This is the trade-off I believe many employees are willing to take.
- Employees leaving. In this case I imagine that they immediately forfeit their points in the pool. This could lead to people just "sitting" on their points (like many people do with ESOP), or employees wanting to "force-out" other employees.
  - **Possible Solution**: To prevent employees from being incentivized to force others out, when an employee leaves, their accumulated points remain in the total pool for a period of time (e.g., decaying over two years). This way, the remaining employees' shares do not immediately increase, removing the incentive to push others out.
- Underperforming employees. The 4-level granularity is quite broad. It means that some "seniors" might be less effective than others.
- VP-level employees who join could immediately be earning more than others (Juniors) who have been with the company a long time.
- Early joiners take on more risk than those who join once the business is already profitable. But this is mitigated by the increased share in the Profit Pool.
- Employee impact. Not all employees have equal impact on profits. For example, a QA engineer and a sales person.
- Business model. This scheme wouldn't work with every business. I imagine it goes very well with asset-light SaaS businesses, especially those with fewer employees.
- Tax? Bonuses are probably on different tax schemes.
- "That's not how it's done". Likely this is how a VC will respond to a Profit Sharing scheme.


## Resources

- Some work I started [way back.](https://web.archive.org/web/20171113221424/http://madebykade.com/manifesto/retirement-fund/)