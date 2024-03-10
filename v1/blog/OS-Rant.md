---
title: "Vim's q:"
date: 240310
time: "10:00"
---

About a month ago, someone in the Obsidian discord asked whether Linux or Windows was the better operating system.
I didn't like the framing of this question, and proceeded to answer in multi-paragraph form at 4 in the morning.
My response is below:

---

XXXXXX to answer your question from yesterday, I do think Linux is frequently better than Windows for many use-cases (or can be made better; i.e. generic Linux is not better for gaming than Windows, SteamdeckOS definitely is). _However_, its not some sliding scale where Linux is on one end and Windows is on the other. OSes are extremely complex, and its very hard to compare them like that. Windows is exceedingly one-dimensional; for a general-purpose OS, it can't be adapted much. You're stuck with Windows, in its entirety; a black box you can't see in or do anything about. This becomes a problem when things in the black box don't work the way you need them to, or worse, are actively buggy. 

For me, one of the things I really care about is the windowing system, for example. I _hate_ how Windows handles managing windows; I don't want to touch the mouse to move windows around, switch windows, etc. I almost never want windows to be floating around. On Windows, I'm just stuck with the way windows does tiling. On Linux, I have the option to swap out the windowing system for a different windowing system, assuming I have the technical skill to. So I have a window manager that always automatically tiles things (nothing floats by default, my screen is always full), tiles things infinitely (not limited to 4 apps in 4 quadrants), lets me move around windows directionally (alt-tab to cycle is _not_ good enough), and swap windows' positions at will (importantly: with my keyboard).

However, the flip side of this is that Windows is very consistent. You *always* know how the Windows Window Manager will work as a programmer, whereas on Linux, you don't know what kind of Window Manager someone is using. This creates a lot more instances of the 'works on my machine' problem. This applies to so many other parts of Linux too.

Going in a different direction with the meaning of 'better', what about code quality. Well, Linux & Windows' *kernels* are definitely both well coded or they would've had to be rewritten at this point. I can't look at the Windows kernel though, so I can't directly comment on it. However, I will say that the Linux kernel is filled with issues of extreme coupling problems (a bad thing in software engineering which makes it hard to modify later), and the problems are only getting worse. To be honest, this kind of thing is just a problem with any codebase of sufficient age, but it remains that the Linux kernel's codebase has issues. The Windows kernel, on the other hand, has its own issues that we can still see from the outside. The main issue is that its the *same kernel from the Windows NT days*. They've kept building on top of it without removing things, which makes it really heavy & slow. Linux is fairly willing to throw things out & update things to be better, but Windows is not really willing to do that (~~and still manages to have broken compatibility with old software.~~). This, I suspect, is one of the main reasons Linux actually gets better video game performance benchmarks, even though its going through a compatibility layer: the OS is just so much lighter. Like, I can idle at less than a GB of RAM in use, on a modern system, whereas last time I checked a Windows 11 computer, it was using up an entire 6 flipping GBs. Now, in full disclosure, I have a lighter GUI layer, it'd probably be closer to 1.5-2 GB in use if I were using something like Gnome instead of Sway.

These things are all under-the-hood things though. You the user never see _any_ of this directly.

Now, hardware support. In terms of raw numbers, Linux definitely has the edge. The Linux kernel has way more hardware support baked in, and you'll have way better luck getting Linux running on old hardware. Despite that, Windows practically speaking has the edge more of the time, because Microsoft can throw money at problems until they stop being problems and Linux (not being owned by a company) can't really. Instead we just have to hope that either the manufacturer cares about Linux enough to provide their own, or hope some developer cares enough to devote a bunch of unpaid labor toward getting that hardware working. For mainline stuff, that usually isn't a problem (~~nvidia gpus not withstanding; nvidia seems to hate linux & makes working with their GPUs a nightmare for developers~~), but the first moment a piece of hardware gets released, there often won't be full linux support for it, because aforementioned likely-unpaid-developer hasn't bought one to go code up support for it.

Next, looking at system internals. At this point, I'm not actually looking at Linux. Strictly speaking, Linux is just the kernel, and the stuff on top are other projects that are just built for Linux. But since most of those things are built into that Windows black box I mentioned earlier, I will be comparing them anyway. 
Windows internals are... buggy, unreliable, and a pain to work with. By internals, I'm talking about things like batch/cmd, regedit, system environment vars, etc. The things that are technically user facing but aren't usually end-user facing. 
Windows doesn't document things very well in my experience, which means you the developer are frequently having to go test things to see if it works the way it claims to work. One of my favorite examples of this is [this stackoverflow thread](<https://stackoverflow.com/questions/8844868/what-are-the-undocumented-features-and-limitations-of-the-windows-findstr-comman>). **This is a nightmare.** Worse, all the GUI stuff changes periodically with windows release, and some of those things can only be done through GUIs.
Meanwhile, Linux internals are based on Unix. They're much nicer to work with, they work _consistently_ and in accordance with how the docs say they work, and you can actually do everything from the command line. The reason this is important is because it means you can set a thing up that works from the command line and be certain it will work the same on any linux system with the right programs installed. This is ***way*** more consistent than trying to explain to someone verbally how to get to the right part of a windows gui to click the right option. 
It also means you can develop applications by creating a command line application first, that you can automate testing for & use remotely/in scripts/from other apps, while still being able to build a GUI that talks to it. You get the best of both worlds by separating concerns.

Finally, lets talk about some end-user facing stuff. This is where Windows shines a bit more. I don't think Linux deserves nearly the reputation it has for being only usable by technical people; past the initial install process, a user-friendly distrobution is going to be user-friendly & have a GUI for doing everything. That said, going back to the Microsoft-can-throw-money-at-problems problem, Microsoft can throw money at problems, **like UX design**, while FOSS Linux devs are usually working for free in their free time. This means hiring UX people is usually out of the question unless its a large project with good funding, and on top of that many projects wouldn't like a UX person butting in and giving their thoughts.
Windows UX is... better, but not stellar. But it is better, especially for third party apps.

The other thing is that the quality of coding will vary pretty drastically across Linux apps. Big projects like KDE & Gnome are going to have a lot of testing & such in place and are usually pretty good at not being buggy. On the other hand, there's apps being developed by single people doing it because they enjoy it, not bothering with testing because they can usually fix issues within the day when they come up. For example, I use an app called Stimulator to keep my desktop from sleeping when I don't want it to. It's developed by a single person. In the past monthish of using it, its had its name changed, its logo change, its UI change, and had it completely break 3 times, only to be fixed the next day after it got updated.

XXXXXX my point in answering isn't really to shill linux. I don't think its for everyone and the benefits it does have from an end-user perspective usually aren't worth relearning settings menus, even though I think as Windows continues to get more restrictive & annoying that may change. Rather, I'm trying to stress why this isn't some simple sliding scale of how good things are. It's a nuanced topic.

