# Mental Models


## Design 

### Code must be easy to change

Refactorable > Security > Error free > Performance > Features

Being easy to change is the most important property of a codebase as it is the basis for everything else we want to do with the code. Code that is easy to change can adapt to new technical requirements or business goals with ease. Code that can’t change is doomed to stagnate, become technically irrelevant and then die (when it is easier to throw everything away and start from scratch than to keep modifying it).

### Less is more

Code is not an asset, it is a liability. The more code you have, the more you have to optimize, debug, modernize, refactor, understand. In short, the more code you have — the harder it is to change. A smaller and simpler codebase is easier to understand, improve and extend.

Strategies for keeping the codebase small:

- Be minimalistic: Implement the tiniest thing that solves the current problem. Don’t expect future needs. If the code is flexible you can add the functionality when the need occurs.
- Build more advanced things out of a few simple building blocks. 
- Actively prune unused code paths.
- Refactor out unneeded complexity whenever you can. Strive to make the code as small and simple as possible.
- Never leave commented out code in the project. That’s what version history is for.

“Less is more” is not just about physical lines of code, it is also about adding other unnecessary stuff. An external library does not add any code to the repository, but it adds dependencies and conceptual complexity — more things that you need to understand and more things that can go wrong. 


## Undeveloped Ideas

Here is a list of ideas that are still brewing

> *"Software Is about Developing Knowledge More thanWriting Code"*
> 
> <small>Some comment I saw on Hacker News</small>


## Resources

- [OurMachinery Guidebook](https://ourmachinery.com/files/guidebook.md.html) <br /> A lot of principles pulled directly from this excellent resource.
- [Google Code Guidelines](https://news.ycombinator.com/item?id=20890682) 