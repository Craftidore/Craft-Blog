---
title: "So you've got a fresh install of Windows"
date: 221103
time: "10:00"
---
# So you've got a fresh install of Windows&hellip;

*Setting up Windows for use as a programmer, by a GNU/Linux user. Expect Sarcasm.*

## Table of Contents

- [Quick Notes About Me](#quick-notes-about-me)
- [Quick Notes About This Article](#quick-notes-about-this-article)
- [Phase 0 &mdash; Initial Setup Questions](#phase-0--initial-setup-questions)
    - [The Microsoft Account](#the-microsoft-account)
    - [Diagnostics](#diagnostics)
- [Phase 1 &mdash; Uninstalling Windows Junk](#phase-1--uninstalling-windows-junk)
    - [Stuff to get out of the way](#stuff-to-get-out-of-the-way)
        - [The Start Menu](#the-start-menu)
        - [The Taskbar](#the-taskbar)
        - [Personalization](#personalization)
    - [Uninstalling Things](#uninstalling-things)
        - [Uninstalling Edge](#uninstalling-edge)
        - [Uninstalling Other Programs](#uninstalling-other-programs)
            - [A couple of exceptions](#a-couple-of-exceptions)
            - [Final Thoughts](#final-thoughts)
    - [Some Setting Defaults To Change](#some-setting-defaults-to-change)
- [Phase 2 &mdash; What Is FOSS? Why Do We Care? Also, Installing Things](#phase-2--what-is-foss-why-do-we-care-also-installing-things)
    - [Package Manager](#package-manager)
    - [Choosing A Browser](#choosing-a-browser)
        - [Google Chrome](#google-chrome)
        - [Ungoogled Chromium](#ungoogled-chromium)
        - [Brave](#brave)
        - [Firefox](#firefox)
        - [Librewolf](#librewolf)
        - [Vivaldi](#vivaldi)
        - [Some Final Notes On Browsers](#some-final-notes-on-browsers)
    - [Text Editor](#text-editor)
        - [Notepad++](#notepad)
        - [Micro](#micro)
        - [Vim](#vim)
        - [Concerning Code Editors and IDEs](#concerning-code-editors-and-ides)
            - [VSCode](#vscode)
    - [Git](#git)
        - [After Installing Git](#after-installing-git)
        - [GitHub](#github)
    - [Quick Scripting Language](#quick-scripting-language)
        - [Python](#python)
        - [JavaScript](#javascript)
        - [A Note On Pip and NPM](#a-note-on-pip-and-npm)
- [Phase 3 &mdash; Installing Other Programs](#phase-3--installing-other-programs)
    - [Obsidian](#obsidian)
    - [AutoHotKey](#autohotkey--ahk)
    - [Espanso](#espanso)
    - [LaTeX](#latex-) &mdash; This section is still under construction.
    - [Pandoc](#pandoc)
    - [OnlyOffice](#onlyoffice)
- [Writer's Note](#writers-note)

    


## Quick Notes About Me

**I am not qualified to write this article**. 
I want to make that clear ahead of time. 
The advice I have here is half hearsay and half quickly-googled.
At the end of this process, you'll definitely have a more private and programmer-functional computer than if you hadn't followed this guide, but there are certainly ways to make it even more private and programmer-friendly that I don't know about.

I've used Windows since the beginning of my computer journey, which was around the time Windows 10 came out.
I only switched to GNU/Linux in the summer of 2022 (a couple months ago at the time of writing), though oddly enough, the switch didn't have anything to do with the release of Windows 11.
Back when I was on Windows, I had a *highly* customized setup that let me use Windows how I wanted to use it. 
After switching to GNU/Linux, I found an OS that, while not without its hitches, didn't fight me at every step of the way when I tried to make it my own.
I'm still rather salty about the pain Windows put me through.
As I explain the tricks I've used to make Windows behave, you'll get a taste of that.

## Quick Notes About This Article

I'm writing this guide primarily for a couple people I know who are starting college this fall, are planning to go into Software Dev or Computer Science, and have just bought a new Windows laptop for their personal use during college.
This article assumes that you own a laptop with a fresh install of Windows 11.

The other thing about this article is that it's very opinionated, almost comically so.
It takes the stance that there is one right way to use Windows as a programmer, and that's not actually the case.
In the end, use Windows the way you find best.
I think my process will yield a result that you're pretty likely to be satisfied with, but I don't know your situation or what you want out of an operating system.

Finally, this article assumes you know how to do things like installing programs, etc.
If you run into something that you don't know how to do and you know me in real life, I'll be happy to help. 
If you don't know me then Google is your friend.

## Phase 0 &mdash; Initial Setup Questions

Short answer: [This guide](https://www.youtube.com/watch?v=8ReoMuCUdKE) is pretty good, and will get rid of a lot of the bloat on your computer. 
If you choose to follow it, you can skip down to Phase 1, and also skip a lot of the uninstalling programs steps.

If you don't want to follow that video, just continue from here.

### The Microsoft Account

Microsoft will want you to setup a Microsoft account (or use a pre-existing one). 
If you're fine with that, go ahead and give them one more way to spy on you. I wouldn't use your school account though; that'll probably get disabled eventually, and then where will you be.
If you don't want a Microsoft account tied to your computer, it's a bit janky, but it can be done.

1. Make sure your computer isn't connected to the internet. 
2. You will be taken to a screen where you are asked to log into the internet.<br>Hit `Shift + F10`.<br>Type `taskmgr` and hit `enter`.
4. Inside task manager, click on 'More Details', then scroll down to Network Connection Flow (it's under Background processes). End that task.
5. Windows will now let you create a local user without a linked Microsoft account.

### Diagnostics

Next you'll be taken to a bunch of prompts where Microsoft hopes you'll leave enabled so they can make money off of you.
Opt out of everything. 
No, you don't need find my device.
No, you want to send as little diagnostic data as you can to Microsoft. 
No, you don't want apps to have access to your advertising ID. 
No, you don't want a tailored experience.
Need I go on?

## Phase 1 &mdash; Uninstalling Windows Junk

Windows starts out with a lot of programs and utilities pre-installed. 
This isn't necessarily a bad thing&mdash;one of the biggest things that separates Linux distros is what comes pre-installed. 
I've found that Windows comes with a lot of things that you don't want or need. 
Rather than trying to get rid of stuff after you've been using your computer for awhile, it's better to just start yourself with as clean a slate as possible.

### Stuff to get out of the way

#### The Start Menu

The start menu is that thing you see when you press the Windows key by itself.
It probably looks something like this:

![](https://media.discordapp.net/attachments/719279911470366821/997170318563086446/unknown.png)

Right click every one of these and unpin from start. 
I don't care how much you think you'll use an app, unpin it. **Yes, even MS Word**.
I'd also uninstall most of these, especially anything that isn't a Microsoft program. 
Some you unfortunately won't be able to uninstall, like Edge.

Next, with the Start Menu open, search for Settings. 
Then go to Personalization &rarr; Start. 
Disable 'Show recently added apps,' 'Show most used apps,' and 'Show recently opened items in Start, Jump Lists, and File Explorer.'

#### The Taskbar

While we're in the Settings app, go to Personalization &rarr; Taskbar.
Disable Widgets and Chat. You don't need them and you don't want them.
Task view I'd leave. It lets you see all the open apps at once, and also lets you switch virtual 'Desktops.' 
Finally there's Search. You *can* leave it on, but you can also just click the Windows button and start typing; it does the same thing. 
If you really like the separate button, who am I to stop you?

Scroll down to 'Other system tray icons.'
Open it up and enable 'Hidden icon menu.'
Now it doesn't matter what else is set on or off here because you can get to the tray with all of them by clicking the `^` on the right side of the taskbar.

Finally there is the 'Taskbar behaviors.'
Taskbar alignment is up to you; I went go Left because I'm used to Windows 10.
Definitely disable the 'Show recent searches when I hover over the search icon.'

#### Personalization

Since we're already in Settings &rarr; Personalization,  go ahead and set the rest of your preferences.
I use Dark Theme (because I'm not a monster), and I like purple for my accent color. 

### Uninstalling things

#### Uninstalling Edge

Uninstalling Edge is hard. 
Microsoft really doesn't want you to, and throws a lot of roadblocks in the way, like not allowing it to be uninstalled via Add or Remove Programs.

Before we uninstall Edge, let's get a web browser in case you have tech problems and need to google how to solve them.
So, if you know what non-Edge browser you'd like (See [Choosing A Browser](#choosing-a-browser))
If you don't know, go ahead and get Firefox (you can always install a different one later).
To install it, first follow the steps to install `scoop` in the [package manager](#package-manager) step of this guide, then install your browser with the command listed for your browser in [Choosing a Browser](#choosing-a-browser).
Then you want to set it as your default web browser using Settings &rarr; Apps &rarr; Default Apps.
Search up your web browser and it'll take you to a page of types of link extensions, and which app to open them in.
You want them *all* to be the web browser you downloaded (or a text editor or image viewer, in a couple cases). 

![](https://cdn.discordapp.com/attachments/719279911470366821/997222560800448593/unknown.png)

Now we can remove Edge.

Open up the search bar and type `cmd`. 
The first result should say 'Command Prompt.'
Select the 'Run as Administrator' option.
Now, inside the command prompt, we're going to run some commands.
The first is 

```batch
cd %PROGRAMFILES(X86)%\Microsoft\Edge\Application\
```

You won't be able to copy and paste any of these with the command prompt being run as administrator; you have to type them all out. 
Now run

```batch
dir
```

You'll see a list of files and folders. 
One of them will be a bunch of period-separated numbers.

![](https://media.discordapp.net/attachments/719279911470366821/997228823580004372/unknown.png)

Type `cd` followed by a space. Start to type the number then press tab. It should autocomplete. Finally hit enter.
Now type `cd Installer`.
Finally we want to run

```batch
setup --uninstall --force-uninstall --system-level
```

Edge should be gone now.
It'll still show up in the Installed Apps, but if the box where Edge's logo goes is just a blue square, it's gone.

#### Uninstalling Other programs

Close Settings then open up the search and type 'Add or Remove Programs.'
Alternatively you can go Settings &rarr; Apps &rarr; Installed Apps.
Here we want to uninstall as much as we possibly can.
The app actually wouldn't let us uninstall Edge from here, hence the long complicated process above.
I'm not going to go over every program, but here's some quick guidelines.

- If the app is called 'Notepad' or 'Wordpad'  uninstall it&mdash;there are way better alternatives I'll cover in [text editors](#text-editor).
- If the app is third-party (i.e. TikTok, Instagram, Candy Crush), uninstall it. Period. I don't care if you like the app or plan to use it. **Uninstall it.**
- If the app lets you uninstall it, you're probably safe doing so. You can always reinstall it later.
- If the app is generic, you can probably find a better alternative. Uninstall it. (Example: Calculator).
- If an app won't let you uninstall it, go into the Advanced Settings and turn off the permissions to access Camera, Microphone, etc.. Also set 'Let this app run in the background' to 'Never.' (Example: Microsoft Store or Cortana).

##### A couple of exceptions. 

- Snipping Tool
	- Lets you use `Super + Shift + s` to open up a screenshot tool.
- Windows Security
- Xbox Game Bar
	- This is handy for recording your screen. 
	- `Win + g` to access it.
	- Note that Xbox and Xbox Live aren't dependencies. Still uninstall those.
- Terminal
	- You're a programmer. You will want this.

##### Final Thoughts

If you're worried about uninstalling these things, remember that you can always reinstall them later, or, better yet, you could install a superior alternative.

On the topic of Microsoft Office&hellip;
If you connected up a Microsoft account back in Phase 0 that will have or already has a purchased copy of Microsoft Office, then leave them installed.
If you're not going to use Microsoft Office (or if you're going to use a copy distributed by your university, like most of the people I'm directing to this article) then uninstall it&mdash;you can always reinstall.

### Some Setting Defaults To Change

I suggest going through *all* the settings and, at the very least, reading over them. 

Some non-mandatory suggestions:

- In Settings &rarr; System &rarr; Display, I'd set the scale to 100% if it isn't already (it often isn't on Surfacebooks and other devices with higher screen resolution than normal). Yes, the text will be smaller, but you'll be glad to have that much pixel room to play with.
- In System &rarr; System &rarr; Multitasking, keep 'Snap windows' on.
- I would also rename your PC to something you'll recognize. 

Some mandatory orders:

- In Settings &rarr; Privacy and Security &rarr; For developers
	1. Select the 'File Explorer' category and turn all the options here on. <br>The most important options are 'show file extensions' and 'show hidden and system files', but they're all handy to turn on.
	2. Under 'Terminal' select Windows Terminal, not 'Windows Console Host'. This lets you open multiple terminals in the same window as separate tabs&mdash;it's really handy.
	3. <span id="execution-policy">Under Powershell, set 'Change execution policy to allow local Powershell scripts to run without signing&hellip;' to on.</span>
- In Settings &rarr; Privacy and Security &rarr; General, turn off 'Let Windows improve Start and search results by tracking app launches' and 'Show me suggested content in the settings app.' 'Let apps show me personalized ads by using my advertising ID' should already be off.
- In Settings &rarr; Privacy and Security &rarr; Diagnostics and Feedback, most everything should already be off, but under Feedback, set 'Feedback frequency' to Never.
- In Settings &rarr; Privacy and Security &rarr; Search permissions&hellip;
	- Set SafeSearch to Strict.
	- Turn off Search history on this device.
	- Turn off Show search highlights.
- In Settings &rarr; Apps &rarr; Startup, make sure nothing you're not absolutely sure you want to start up on start up is set to on. If you don't know, the answer is that it shouldn't start up. Remember, you can always change this later.

## Phase 2 &mdash; What is Foss? Why Do We Care? Also, Installing Things.

Most software on Windows is proprietary (aka 'closed source'). 
Windows itself is proprietary. 
The thing about proprietary software is that you don't really know what it's doing. 
Say your running proprietary software. 
Either the software is a product (and costs money, like the Microsoft Office suite) or the software isn't the product&mdash;you are, and the company is using you to collect user data.
In some cases (like the entirety of the Windows Operating System), the software costs money *and still spies on you*.

FOSS stands for 'Free and Open Source.'
The 'free' part refers not to cost but to what you can do with it. You're free to do whatever you want with it, including modifying the source code of the app. There aren't 'terms and conditions' you have to follow.
The second part&mdash;open source&mdash;means that all of the code for something can be viewed by anyone. This is necessary for the 'free' part of Free and Open Source.
In addition to modifying the code if you need to, you can ensure that it's not doing anything harmful or malicious. 
Furthermore, you can compile the code yourself to *make sure* that the program itself *is* compiled from the code and does what is says it will.
This is important, because just because a program binary *claims* to be compiled from a certain source doesn't mean it *actually is* compiled from that source.

As you learn more about computers, you're going to be faced with the choice of whether to use proprietary software or FOSS software. 
Sometimes a program doesn't have a FOSS alternative, or the FOSS alternative doesn't quite have all the features you need, or it's much harder to learn to use. 
You have to choose between the practicality of proprietary software and the idealism of FOSS.
It's not always an easy choice, and I don't really have a good answer.

Unfortunately, the world isn't simple enough to just declare FOSS applications better than proprietary ones.
While, in my experience, FOSS software has been far less likely to invade my privacy or do nefarious things, that doesn't mean FOSS software never does those things nor that proprietary always does.
An example of this is Obsidian vs Logseq. Logseq and Obsidian are both note taking application that tend to fill the same niche of local-first plaintext notes.
Logseq is open-source, but it has some baked-in telemetry. Compare this with Obsidian, which isn't open source, but has no telemetry and, aside from checking for app updates (which is easily disableable in the settings), never touches the internet if you don't tell it to. 
Don't get me wrong, both Logseq and Obsidian do pretty well in regards to privacy&mdash;loads better than notetaking apps like Notion&mdash;but the FOSS app isn't actually the one with better privacy. 
All things being equal, FOSS apps may be preferable, but all things are not equal and it's up to you to be an intelligent consumer.

I use a mostly FOSS Operating System (I use Linux, but I have Nvidia graphics drivers that aren't open source, for example), and try to use FOSS software when I can, but I certainly use a fair bit of proprietary software as well, even some that probably *is* spying on me when I use it.
I've decided on where I'm willing to make compromises.

Going forward, as I suggest programs to install, I'm going to be pointing out what is and isn't FOSS. 
It's up to you what you want to install, but even when you choose to use something proprietary keep in mind the FOSS options.

### Package manager

Windows doesn't come with a package manager&hellip; a huge shortcoming. 
Luckily people have created package managers for Windows.
There are two main ones: chocolatey and scoop.
Chocalatey has more packages and installs for all users (requiring admin), while scoop is designed more with developers in mind and installs to the local user.
I'm going to assume you're using scoop. If you chose chocolatey, I'm just going to trust you'll figure out how to use it.

To install scoop, you don't have to visit any website.
Open powershell (`Windows Key` then search powershell. You don't have to run as admin).

Now, if you came here from [Uninstalling Edge](#uninstalling-edge) because you need a browser and haven't yet [changed your powershell execution policy](#execution-policy), first you'll want to run the following command. 
Type it into powershell then press Return/Enter.

```powershell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
```

Now, if you've either run the command above or had already changed your [powershell execution policy](#execution-policy), type in the line below and hit enter.

```powershell
irm get.scoop.sh | iex
```

When the install process finishes, run

```powershell
scoop --version
```

to make sure it worked (it should return a version number).

Unfortunately scoop requires something called 'git' to actually function.
You'll be installing git later anyway, but lets go ahead and do it now.
Run

```powershell
scoop install git
```

Finally, run 

```powershell
scoop bucket add extras
```

which will give you a wider selection of programs than the defaults.

<hr>

When you want to install something with scoop, open up either powershell or the command prompt and run `scoop install nameofthing`.
If you want to find out if scoop has a package to install, run `scoop search nameofthing` or you can search for it [on scoop's website](https://scoop.sh/#/apps?s=0&d=1&o=true), which also searches the app descriptions for your keyword.

![](https://media.discordapp.net/attachments/719279911470366821/998610592392806440/unknown.png)

To update scoop, run `scoop update`.
To update packages, run `scoop update *`.
To uninstall, run `scoop uninstall packagename`.
For more info, run `scoop --help`. 

### Choosing A Browser

It'll be pretty difficult to live in this world without a browser. 
Windows comes with Edge as it's default. 
I think I've made it clear that I hate Edge, given the lengths I was willing to go to remove it from my system.
The [most popular web browser is Google Chrome](https://www.w3schools.com/browsers/), as of May 2022. 
But before I can discuss your options here, lets look at how a lot of browsers got to where they are now. 

The [Chromium](https://github.com/chromium/chromium) web browser is an open source browser primarily maintained by Google. 
**Google Chrome** is a proprietary fork of Chromium with some extra features and tracking software. 
Chromium is everywhere though. Take Electron. Electron is a FOSS project that lets developers run full stack web applications on the *user's local machine*. 
You've probably used an Electron app before; Skype, Microsoft Teams, Discord, Obsidian, and many more are built on top of Electron.
Because Electron lets devs run a full-stack web application, it needs to package a browser to display the frontend&mdash;enter Chromium. 
Because Chromium is open-source, [quite a lot of browsers](<https://en.wikipedia.org/wiki/Chromium_(web_browser)#Browsers_based_on_Chromium>) use Chromium behind-the-scenes.
The main exception is Firefox. 
Firefox is also open source and it is developed by Mozilla. 
Like Chromium, it has a lot of browsers based on it. 
There's also Safari, but since this is a Windows setup guide, I'm going to pretend it doesn't exist.

So why do I mention all this?
Well, most websites are built with Google Chrome in mind&mdash;and rightly so, given how popular it is. 
However, since Google Chrome is really just Chromium, they'll work just as well on any other Chromium-based browser. 
It also means that you can use Chrome extensions on most Chromium-based browsers, etc.
Firefox is less commonly used, but will work just fine 99% of the time. 
The same concept of 'if it works on one Chromium-based browser' applies to Firefox as well.
On the other hand, Chrome/Chromium has a monopoly on the browser market, and it could be well worth fighting that monopoly&mdash;a free web requires [diversity of browsers and browser engines](https://odysee.com/@TheLinuxExperiment:e/firefox-dying-is-terrible-for-the-web:1).

So anyway, some browser suggestions:

#### Google Chrome

Google's Chrome browser.

- Chromium-based
- Most popular
- <span style="color:red;">Definitely tracking you</span>
- <span style="color:red;">Massive program size on disk compared to other browsers</span>

Conclusion: I wouldn't use it, but if you want a browser you can install and not think about it ever again, this browser is a good pick.

```powershell
scoop install googlechrome
```

#### Ungoogled Chromium

Google Chrome minus Google. 
I haven't looked into it much, but [here's a link](https://github.com/ungoogled-software/ungoogled-chromium) if you're interested.
If you really want the Google Chrome experience, maybe look into this instead. It's meant to feel and act like Chromium, without adding anything to it (like Brave or Vivaldi).

```powershell
scoop install ungoogled-chromium
```

#### Brave

Brave is a privacy-first open-source browser that automatically blocks trackers and ads.

- Chromium-based
- <span style="color:green;">Open source</span>
- <span style="color:red;">Have to disable some anonymized data reporting in settings&mdash;it does still track you much less than other browsers.</span>
- <span style="color:yellow;">Has it's own search engine that doesn't track you&hellip; but also isn't as good as Google.</span>
- <span style="color:red;">Does input it's own affiliate links sometimes</span>
- <span style="color:green;">Built-in always-on tracker and ad blocker&mdash;I haven't had to deal with a youtube ad since.</span>

Brave is what I use as my main browser right now; it's not perfect, it's just better than most and chromium-based.

```powershell
scoop install brave
```

#### Firefox

Firefox, the default web browser on almost all Linux distros.

- <span style="color:green;">FOSS</span>
- <span style="color:yellow;">Firefox-based, obviously</span>
- <span style="color:red;">Uses google as the default search engine, rather than one like DuckDuckGo which doesn't track you. Google pays Firefox to make it the default.</span>
	- This can be changed in settings, but defaults are powerful and a lot of people don't change them.
- <span style="color:green;">The most popular FOSS browser, and the only one to make it on the [w3schools' top 5 most popular browsers](https://www.w3schools.com/browsers/)</span>
- <span style="color:red">Collects telemetry and tracks your behavior</span>&mdash;this is a problem, *buuut*, since Firefox is FOSS, anyone can make a fork and remove all that. See Librewolf below.

```powershell
scoop install firefox
```

#### Librewolf

Full disclosure: I haven't used this one for long enough to really provide my own thoughts. 

- <span style="color:green;">Basically firefox, but it uses [DuckDuckGo](https://duckduckgo.com) as it's default search engine. Defaults are powerful.</span>
- <span style="color:green;">Preinstalls the uBlock ad-blocking Firefox extension. Defaults are powerful.</span>
- <span style="color:green;">Doesn't collect telemetry</span>

```powershell
scoop install librewolf
```

#### Vivaldi

I also haven't used Vivaldi, but I know there are a *lot* of people who really love it. 
It's highly customizable and has some stellar features that set it apart from most web browsers&mdash;things like tab-stacking. It's the perfect browser for people who open way too many tabs.

- <span style="color:red;">Proprietary, not FOSS</span>
- Chromium-based
- <span style="color:green;">Excessive amount of customization</span>
- <span style="color:green;">Excessive amount of browser features.</span> Among them include
    - Tab stacking
    - Command Palette
    - Customizable keyboard shorcuts
    - Web panels
    - Better performance than Chrome
    - Even more features I don't know about
- There's probably other bonuses too, but again, I haven't used it and am not really qualified to comment.

```powershell
scoop install vivaldi
```

#### Some final notes on browsers

I'm not an expert on browsers. I knew this.
After writing this section of the article, I realized I'm *really* not an expert on browsers. 
The information above is what I discovered after about an hour of research. 
Most of the information I outlined was based on my prior (possibly faulty) understanding and very surface-level web-searching. 
As such, I expect to be wrong about some of the information above. 
If one browser among the list sticks out to you, do some of your own research and dig into it. 
Look for similar browsers that might offer additional features or better privacy.
Above all, *make an informed decision*.

Another note: multiple browsers.
Single points of failure are really terrifying. 
If you only have 1 browser, it's a single point of failure&mdash;if that thing stops working, you'll lose the easiest way to troubleshoot things.
Solution? Have 2 browsers, at minimum. 
My suggestion is to have one chromium-based browser and one firefox-based browser.
This has the obvious benefit of if one suddenly stopped working, you can easily just switch to the other. 
The reason to have one be firefox-based and one chromium-based is that firefox and chromium work differently. Sometimes you'll come across a website, that for a weird edge-case-y reason, doesn't work right on one of them. 
Having that second browser that doesn't work the same behind the scenes can sometimes get the website to work right.

<!-- #### A Final Note -->

### Text Editor

Code is written in plain-text files. 
To edit text files, you need a text editor. 
The text editor that comes with Windows by default is notepad. 
If you didn't uninstall notepad back in [phase 1](#other-programs), go uninstall it now. It's horrible. Get rid of it.

Before I can go into text editor options, I have to explain what some of the differences mean.
The first is 'terminal' vs 'GUI.'
When you removed Edge earlier, I had you search up `cmd` and run that program. 
It opened up the 'Command Prompt,' which let you type in commands like `cd` for 'change directory.' This Command Prompt was a terminal.
Some apps can run entirely from the terminal. 
With terminal-based text editors, you typically type in their name, then the name of the file you want to edit. 
The other type of editor is GUI-based.
GUI means 'Graphical User Interface,' which I think is pretty self-explanatory. Any app with buttons that you click is GUI-based&hellip; basically every app you've ever used.
So why is this difference important? 
GUI applications are nice because they have things like Settings Menus and options that you can click. They're also what you're used to using. 
Terminal applications are nice because you don't have to touch your mouse to open them. 
Typically, when you're compile code you'll be doing so through the terminal. 
Now, if you were using a GUI-based text editor, you'd have to take your hands off the keyboard and use your mouse to change the terminal window, then type in your compile command.
If you were using a terminal text editor, you're running it *in the terminal*. 
As soon as you close the application, you return to the command prompt in the same directory as the file, wherein you can issue whatever commands you like. 
Personally, I vastly prefer terminal editors&mdash;I find it much easier to just to everything inside the terminal, keeping my hands on the keyboard.
Even if you decide you'd rather use a GUI-based text editor, I'd also install a terminal editor&mdash;redundancy can't hurt and there may be times where you [prefer a terminal editor anyway](#git-terminal-editor).

The second is whether the text editor behaves intuitively. 
In modern computers, there are a lot of hotkeys that persist across applications and platforms.
`Ctrl+c` is copy, `Ctrl+x` is cut, `Ctrl+v` is paste.
Chances are, you're used to using these.
Not all programs actually implement this though.
For one thing, much older programs didn't have these 'standard hotkeys.' 
That doesn't mean they didn't have hotkeys, it's just not ones we're used to.
Take `nano`. Nano is an old text editor, and it's hotkeys are&hellip; something else.

![](https://cdn.discordapp.com/attachments/719279911470366821/997966390382309376/2022-07-16-154152_1209x78_scrot.png)

They aren't intuitive, and it's a miracle that Nano puts them at the bottom of the screen for you to reference, because I wouldn't know how to exit the program otherwise.
There are some programs where the weird hotkeys aren't a downside; they're what attracts people to the program in the first place.
More on this when I mention Vim.

I only mention 3 text editors here&mdash;there are way more out there, and if none of these fit your bill, go ahead and find a better one.

#### Notepad++

Notepad++ is a FOSS notepad alternative that improves the text editing experience in a lot of ways. Windows-only.
This was my main text editor for quite awhile. 
While I'm traumatized every time I have to use it, it's a good application for most people. 
It gets the job done and, as a GUI application, is a more familiar experience for most people.

- <span style="color:green;">FOSS</span>
- GUI application
- Behaves intuitively
- <span style="color:red;">Not *stellar*. It doesn't really bring anything special to the table.</span>
- <span style="color:red;">No dark theme (or at least, no syntax highlighting while in dark mode)</span> 

```powershell
scoop install notepadplusplus
```

#### Micro

Micro is a handy terminal-based text editor. It was originally designed for Linux to provide an intuitive terminal-based text editor. It also runs on Windows, so I thought I'd mention it.
For most people, this would make a pretty good text editor, though I don't use it.

- <span style="color:green;">FOSS</span>
- Terminal-based
- <span style="color:green;">Portable, so if you want to put it on a USB to run it on any machine, you can.</span>
- Behaves intuitively

```powershell
scoop install micro
```

#### Vim

Vim is&hellip; different from the rest of these.
Notepad++ and Micro are text editors that I suggest to most people. 
They're easy to use and, generally speaking, behave like you expect them to. `Ctrl+s` saves the file, `Ctrl+q` quits the program, copy/cut/paste work like normal. Etc.

Vim is what I use. It's powerful and wonderful, and once you get used to it, you can't ever go back. 
I'm not really suggesting Vim here. It's got a bit of a learning curve, and chances are you want to edit text *now*, not after you've learned something hard.
I'm still including vim here so it'll be on your radar, even if you don't start out using it. 
Finally, just because I'm not *really* suggesting vim, don't be scared to try it&mdash;vim is way more different than it is hard. 
Vim isn't hard to learn, it just takes some practice.

Vim isn't really intuitive, because it doesn't work like other programs. 
Instead of typing text, and then pressing `Ctrl + somekey` for commands, vim is modal&mdash;it has a mode for inserting text, but also has a 'normal mode' where instead of typing text, every key has some sort of command associated with it. 
Each mode's `ctrl`-based hotkeys are different too, adding functionality. 
The result isn't like anything you've ever used, but it's *so* powerful&mdash;I can't really describe it, you just have to try it out.

The best way to try out vim is to install vim and vimtutor. 

```powershell
scoop install vim vimtutor
```

Then run `vimtutor`.
Vimtutor opens a text file in vim that interactively teaches you to use vim.
It takes about 30 minutes.

If you decide to start using vim, your settings are stored in a configuration file.
Go create a text file called `_vimrc` (with no extension) at `C:\Users\%USERNAME%\`.
In the \_vimrc, put the following:

```vim
" probably unecessary, but makes sure vim isn't in compatible mode, where it acts like vi
set nocompatible

" Turn on syntax highlighting
filetype plugin on
syntax on

" By default, when you press tab, vim inserts a literal tab character. 
" Tab displays as 8 spaces by default. Uncomment `set tabstop=4` and change the number to your desired tab length.
" The settings below it do the same for similar tablike operations
" To uncomment, remove the " character at the start of the line.
"set tabstop=4
"set softtabstop=4
"set shiftwidth=4
" If you want vim to insert spaces instead of tabs, uncomment the `set expandtab` line below.
" The number of spaces is determined by the `set tabstop=` line above
"set expandtab

" By default, if you want to copy to your system clipboard, you have to use "*y or "*d, etc. 
" If you want the normal y, d etc. to copy to your system clipboard, uncomment the `set clipboard=unnamed` 
"set clipboard=unnamed
```

This is a set of hopefully non-overwhelming settings to get you started.
Uncomment any lines with settings you'd like.

#### Concerning Code Editors and IDEs

Code editors like VSCode and IDEs like PyCharm or Visual Studio are GUI-based programs for editing files of code.
IDEs, or Integrated Development Environments, let you write code, compile, debug, and test, all within the one program. 
IDEs tend to be designed with one (or a couple) specific language in mind.
I'm not suggesting any IDEs because I don't know what you'll be coding with.

Code editors aren't IDEs (though they often get called that). 
They often aren't designed exclusively for a few languages, but also don't have quite the same level of integration with a language as an IDE would. 
VSCode, for example, has a plugin for just about every language&mdash;you can write just about anything with it&mdash;but many language plugins don't go beyond basic syntax highlighting.

Code Editors and IDEs are often better than text editors when you have a folder with a bunch of different code files you want to modify.
Text editors on the other hand, are often more straightforward for editing single files.

##### VSCode

VSCode is a Microsoft project. 
It's code is open-source, but with a little asterisk:
When Microsoft compiles the *binaries*, they add some code in before hand that *isn't* open source.
Luckily, there's a fork of VSCode that doesn't have that Microsoft's proprietary code added in called VSCodium.

```powershell
scoop install vscodium
```

### Git

Next thing you'll want is version control software. 
In other places, I gave you options. 
However, git is such an industry standard that you really just ought to keep it installed even if you end up using a different program for version control.

Now, you should have already installed git [when you set up scoop](#package-manager) , but here's the command to install it anyway.

```powershell
scoop install git
```

Version control tracks how your code changes.
It means that if you write code that works, change it, and then the changes break things, you can revert your code to a state where it worked as expected. 
There's a lot of other things that version control software can do, but I think it's a bit outside the scope of this to explain it all. 
Nonetheless, git (or another system of version control) is something that you really want to be using for pretty much every real project you work on. 

Now, the thing about git is that it was designed by a genius for his own personal use.
He made it *highly* effective and capable, but he didn't really make it user friendly.
Git is complicated and it's *hard*. 
If you want to learn to use it (you do), I suggest looking to the [git book](https://git-scm.com/book/en/v2)&mdash;The git book is&hellip; a lot, but it doesn't just tell you *how* to use git, it makes sure you actually understand how git works.
If you want something that feels less like a textbook, there's a game called [Oh My Git!](https://ohmygit.org/) that teaches how git works via a playing card interface. Oh My Git! isn't available through scoop, so you'll have to download and install it manually from the website.

Git is normally run via the terminal, but as I said, it's hard.
Because of this, a lot of GUIs (graphical user interfaces) for git exist. 
I'm not actually going to list any&mdash;I really think it's better to learn how to use it in the terminal&mdash;you really get a better, more comprehensive, understanding of it that way.

#### After installing git

You'll want to set your git editor. 
<span id="git-terminal-editor">I'd suggest a terminal-based text editor, be that micro or vim or something else, since git is a command line program and it's jarring for a GUI to open up. </span>
You'll also need to set your name and email.
The name and email aren't an account, there just an identifier for when multiple people work on the same project, so git knows who committed what.
They're also used as part of git's [[Encryption-vs-Encoding-vs-Hashing|hashing]] algorithm for commits, but that's behind-the-scenes technical magic that I'm not going to try and explain since I don't fully understand it myself.
You don't have to set them to your real name or real email.

```powershell
git config --global core.editor micro
git config --global user.name Craftidore
git config --global user.email example@example.com
```

#### GitHub

[Github](https://github.com) is an online service that lets you remotely host your git repositories. 
It's become the standard for this. It adds a lot of additional features to that of git, really helping with collaboration.

There is a downside to GitHub&mdash;it's owned by Microsoft, and as such isn't known for respecting it's users or their data.
There's been a call by a lot of the FOSS community to leave GitHub because of some of it's poor practices. 
Unfortunately, there aren't a lot of good alternatives.

If you decide to create  GitHub account, you'll have an easy way to back your code (or anything else plain text that you version control with git) up or collaborate with others on it.
Chances are, your university or the company you wind up working for after college will have you make a GitHub account anyway.

### Quick Scripting Language

As you start to learn programming, you'll eventually get to a point where you think about a task you could do by hand, but it would take awhile, and you think to yourself 'boy, it'd be faster if I just wrote a program that did this one specific thing.' 
This is especially true if you need to do that thing often&mdash;for example, every time I post something new to the blog, I have to update the RSS feed for it. Manually updating the feed'd probably take a solid 15 minutes. Instead I wrote a python script that reads some YAML metadata from each blog post, puts them in order, and outputs the relevant data into `/v1/feed.rss`. Making the script probably took me about an hour, but I've already put out 5 articles so the time investment's already paid for itself.

Different programming languages are better at different things, and chances are whatever language you're learning during your freshman year isn't going to be great for 'quick scripting' as I call it.
Languages that are good for quick scripting are usually interpreted instead of compiled (if you don't know what that means, it's fine), and have a lot of built-in libraries.

#### Python

Python is a fairly easy-to-learn programming language. 
It's used in a lot of places nowadays, and comes with a lot of built-in libraries to do things so you don't have to figure it out on the fly.
It's memory safe, meaning you don't have to worry about accidentally for the 5th element of a 4-element-long list&mdash;python won't let you.
That sort of thing is really handy for 

```powershell
scoop install python
```

After that, create an empty file ending in `.py`.
In your file explorer, right click it, then select 'Open with&hellip;', &rarr; choose another app. Click the 'always open with this app' then 'more apps,' then 'look for another app on this pc.' From here you'll want to select `C:\Users\%USERNAME%\scoop\shims\idle.cmd`. 
Now when you click on python files, you'll be brought into this editor. From the editor you can run them with `F5` or via <code>Run &rarr; Run Module</code>.

You can also run python files while in the terminal with `python filename.py`.

#### JavaScript

Javascript is another of those easy-to-learn high-level interpreted languages. 
I haven't used it for quick scripting much, but I know people who love using it for that.
Like python, Javascript is a high-level language that isn't going to let you do unsafe things like getting the 5th element of a 4 item list, but runs slower because of it. 
Javascript is a bit weird at times (type coercion rules cause some [weirdly nonsensical behavior](https://wtfjs.com/)), but you're unlikely to run into this with basic usage.

```powershell
scoop install nodejs
```

#### A Note on Pip and npm

Python comes with it's own package manager, similar to scoop, called `pip`.
Pip is usually used to install python modules with the format `pip install nameofmodule` (i.e. `pip install pygame`).
NodeJS also comes with it's own package manager&mdash;Node Package Manager or `npm`.
If something you're looking at tells you to install via npm or pip, you don't need to install those separately&mdash;they come with nodejs and python.

## Phase 3 &mdash; Installing Other Programs

Here is where the dogma ends. 
The following programs are ones I personally find useful, but are by no means *necessary*.

### Obsidian

Obsidian is a note-taking app.
Obsidian isn't FOSS, but it is free for personal use and it doesn't track you, collect telemetry, etc.
The app works by creating a 'vault'&mdash;a *local* folder on your computer where it places plain-text markdown (`.md`) files.
This is really handy&mdash;as programmers, what do we use every-day-all-day? That thing we store our code in? Plain-text files.
As you learn programming, you'll also start to learn tricks for working with text files. By taking your notes in local text files, you can use those tricks on your notes as well&mdash;for example, I use git to version control all my study notes.
Secondly, Obsidian works with Markdown. Markdown is an easy-to-learn superset of HTML used for a lot of code documentation. 
Finally, Obsidian works in a similar vein to a lot of code editors. It has features like a Command Palette/Quick Switcher, a Vim Mode, and pane-based workflows&mdash;things you'll start to take for granted after coding for awhile, only to discover other apps lack these features.

Obsidian isn't perfect&mdash;it's still in beta, it has a bit of a learning curve, and it's an electron app (which means it takes up a bit more system resources than a native app would when running).
However, I still strongly suggest it. It's one of those apps that is as functional as you need it to be, however much that is.
If all you want is unformatted text-based class notes, you can have that. 
If you want a super complex setup, with scripts and templates and tags, you can have that too.
Most of it's features are easily disabled if you don't want them.
Obsidian is exceedingly powerful at it's core, but, because under the surface it works with HTML, CSS, and JS, once you take Web Dev 1 (or the equivalent course), you'll find you can do just about anything within Obsidian.

### AutoHotkey - AHK

There are very *very* few things I miss about Windows, but AutoHotkey (often abreviated AHK) is one of them.
AutoHotkey was created to be a scripting language for assigning behavior to hotkeys on a system-wide level.
AHK grew and grew in functionality, becoming way more than a way to set universal hotkeys, but instead it's own fleshed out scripting language. 
AHK isn't really easy to work with&mdash;the syntax was meant for a universal hotkey tool, and as such the language is rather janky when you're not just setting hotkeys. 
I had 2 primary uses for ahk. The first was to rebind a few of my keys. I never use Caps Lock, so I made it send Left Ctrl instead. I also use Vim to edit text, and as such I use the Escape key a lot. Since I'm way too lazy to reach up 2 inches to press escape, I bound Left Alt to Escape. Finally, in the off chance I actually needed Left Alt for something, I bound the now-redundant Left Control to Left Alt.
The second was that I wanted the ability to force a window to stay on top of another one despite focusing on the other one. 
The scripts for both these behaviors can be [found here](https://github.com/Craftidore/snippets/tree/main/autohotkey).
You can do way more than that with AHK (despite the poor syntax of the language), though I switched to Linux before diving too much farther into it.

```powershell
scoop install autohotkey
```

To have your ahk scripts run at startup, press `Windows Key + r`. Type in `shell:startup` and then press 'OK.'
This will open up the File Explorer in a folder somewhere inside `%AppData%` called Startup. Any files in this folder will get opened on when you login.
Place your AHK scripts here.

You will also have to tell Windows that you want it to run `.ahk` scripts with autohotkey.
After you've created a script, double click on it in the File Explorer. You will be taken to a prompt to pick a program to open `.ahk` files with. 
Select 'Always use this app to opn .ahk files,' then click 'More apps,' then 'Look for another app on this PC.'
Navigate to `C:\Users\%Username%\scoop\apps\autohotkey\current\` then select the `U64` executable.

Also, there's a gem of an executable that comes with ahk&mdash;Ahk2Exe. It'll be located at
`C:\Users\%Username%\scoop\autohotkey\current\Compiler\Ahk2Exe.exe`.
It takes an ahk script you've written and turns it into a standalone `.exe` that you can run on any Windows computer even without ahk installed.
This lets me keep a little executable on a thumb drive on my keychain that I can plug into any Windows computer and use to set my keyboard remaps the same as what I'm used to.

AHK is FOSS and Windows-only.

### Espanso

Espanso is a Free and Open Source text-expander.
What is a text expander you ask? 
Well, a text expander keeps track of the keys you press, waiting to recognize patterns you've pre-specified. 
When it recognizes a pattern of text, it deletes it and replaces it with the text you've told it to. 

This is really handy, especially when coding. If there's something you type a *lot* (say you're a web dev and you type `<a href=""></a>` you can tell espanso to expand some key (like `:a:` for example) to the full `<a href=""><a>` *and* put your cursor inside the double quotes. As I said, handy.
I also use these to easily get special Unicode symbols without having to search for them on the internet then copy/paste them.
I set espanso to expand `;;emdash;` &rarr; <code>&mdash;</code>,
`;;right;` &rarr; <code>&rarr;</code>,
`;;left;` &rarr; <code>&larr;</code>,
`;;times;` &rarr; <code>&times;</code>,
[etc](https://github.com/Craftidore/espanso-config-files/blob/main/match/20-symbols.yml).

Espanso is configured with text files rather than having, like, a settings app. 
While that may not be something you're used to, it does make it very easy to port your espanso config everywhere.
I keep my config version-controlled with [git](#git) and backed up to [GitHub](https://github.com/Craftidore/espanso-config-files).
I wouldn't suggest just loading in my [entire config](https://github.com/Craftidore/espanso-config-files) and using it as your own&mdash;you're more than welcome to take things from it, but I have a bunch of specific-to-me expansions in there that you won't want.

As of writing, the `espanso` in the main scoop bucket is version `0.7.3`, which is being depreciated and replaced with espanso v2. Technically v2 is still in beta, but it's now stable enough for regular use and the developer suggests using it instead.

To install espanso version 2, you'll first need to add the `versions` bucket to scoop if you haven't already.

```powershell
scoop bucket add versions
```

After that, install `espanso-pre`.

```powershell
scoop install espanso-pre
```

Finally navigate to `C:\Users\%Username%\scoop\apps\espanso-pre\current\` and run `START_ESPANSO.bat`. This will do the initial setup for espanso (like making it run on startup and creating an initial config).
The documentation for setting up your own config and list of match/replace strings is found [here](https://espanso.org/docs/get-started/).
Also, for the record, your config folder (referred to in the docs as `$CONFIG`) will be 
`C:\Users\%Username%\scoop\apps\espanso-pre\current\.espanso\`.

### <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> %% LaTeX %%

<span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span>%%LaTeX%% section still in progress. 
It's a bit of a hard sell because <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span>%%LaTeX%% comes with a steep learning curve (even though I think it's well worth the time one spends learning it), and I want to make sure I argue well when I suggest it.
Until then, enjoy [this video](https://www.youtube.com/watch?v=9eLjt5Lrocw) where one guy explains both what <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span>%%LaTeX%% is and why it's great for writing papers.

<!--
<span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> (pronounced 'lah-tech' or sometimes 'lay-tech' but never 'lay-tex') is software system for creating documents. It's old, originally created almost 40 years ago at the time of writing this article (1984).
<span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> isn't like Word or Libreoffice. You write your documents in the <span  style="font-size: 1em;">T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> language&mdash;see example below&mdash;but you compile it into an actual viewable document (nowadays, usually `.pdf`).
When you're editing, you're not looking at the final output, you're looking at a file of commands you send to the typesetter&mdash;what you see is *not* what you get.

```latex
\documentclass[stu,biblatex,hidelinks,12pt]{apa7}
\usepackage{hyperref}

\addbibresource{sources.bib}

\title{An Example Paper}
\author{Craftidore}
\course{PSYC 2010}
\professor{Dr. John Smith}
\duedate{31\textsuperscript{st} of August, 2022}

\begin{document}
\maketitle

As depression rises \parencite[][para. 5]{depression2018} so to will\dots
% I'm sorry, but I'm not going to write an entire essay here. 
\dots which is why sites like \href{https://mentalhelp.net}{mentalhelp.net} are vital to the continued mental health of the USA.

\printbibliography

\end{document}
```

<span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> is complicated. It has a *really* steep learning curve and even after you're decently proficient in it, you'll constantly be searching the web for how to do things.
So why am I suggesting a 38 year old typesetting program? 
The thing about <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> is that it's really good with consistent formats. 
Take APA 7&mdash;there's a <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> APA 7 template, which formats the paper in the form of APA 7&mdash;I don't have to think about margin size or how to format a title page.
Now, I'll admit, if you're wanting a very specifically formatted document that isn't actually a common standard, you're probably better off using something like Word where it's way easier to make very specific formatting changes, but since most college papers will be following a standard like APA or MLA, I've found <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> to be the better-suited tool.

The other reason <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> is nice is that it functions very similarly to code.
You write your plain-text <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> code in a `.tex` file, then you compile it (either with a command like `pdflatex` or a button/hotkey in your <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> editor that's just running this command behind the scenes) and it outputs a document for you to view or send to people.
Plus, because <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> is all plain-text, you can use all the tricks you have for working with plain-text files from coding on your papers as well. 
I, for example, always version-control my papers with [git](#git).


If you'd like to try out <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span>, there's a website called [overleaf.com](https://www.overleaf.com/)  which lets you edit, store, and compile <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> in the cloud for free. 
If you are just learning <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> this is a good place to try it out&mdash;you don't get the benefit of working with local plain text files, but on the other hand you don't have to install <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> and you can access all your documents from anywhere.

Learning <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> is hard. I'm sure you can find tutorials out there by googling. 
I personally learned the basics from [this 'short' intro to <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> pdf](https://ctan.math.utah.edu/ctan/tex-archive/info/lshort/english/lshort.pdf). 
Additionally, overleaf.com has a number of tutorials as well as general [<span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> documentation](https://www.overleaf.com/learn).
-->


### Pandoc

Pandoc is a really handy command-line utility for converting document formats. 
Need to take a markdown file and make it into a word doc? Pandoc can do that.
Have a word doc that you need to be a pdf? Pandoc can do that.
Did someone send you a <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span>%%LaTeX%% document and you want it formatted as something&mdash;anything&mdash;else? Pandoc can do that.

Details on what pandoc can convert to and from are found [here](https://pandoc.org).
To use pandoc for anything pdf-related, you'll need latex installed too.
Ergo:

```powershell
scoop install pandoc latex
```

### OnlyOffice

[OnlyOffice](https://www.onlyoffice.com/) is a Office Suite developed to by highly compatible with the Microsoft Office suite. 
I haven't actually used it a ton or tested out just how compatible with MS Word it is, but based on what I've read, the compatibility is very high.

OnlyOffice doesn't solve the problems of MS Office and similar office suites, but it's at least a functional FOSS alternative.

On Windows, there is a required dependency: `vcredist2022`. This dependency does require admin rights to install.

```powershell
scoop install onlyoffice-desktopeditors vcredist2022
```

By the way, if you're wondering how I know these dependencies are needed, it's because at the end of, say, the `onlyoffice-desktopeditors` install there's a line that says:

```
'onlyoffice-desktopeditors' suggests installing 'extras/vcredist2022'
```

Which tells me that `vcredist2022` is probably a required dependency (plus running Only Office without that installed results in an error saying that the dependency isn't installed).

## Writer's Note:

I didn't want to include CSS for <span  style="font-size: 1em;">T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> and <span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> in my main CSS and I don't have a way setup CSS for a single page only without also loading (if not using) that CSS in every other page, so I used  inline CSS instead.
I can't claim credit for this CSS, it's an inlined version of [the CSS from this StackOverflow Answer](https://stackoverflow.com/a/8160532).

If you'd like to use it for yourself...

TeX:

```html
<span style="font-size: 1em;">T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> 
```

LaTeX:

```html
<span style="font-size: 1em;">L<sup style="text-transform: uppercase;font-size: 0.85em;vertical-align: 0.15em;margin-left: -0.36em;margin-right: -0.15em;">a</sup>T<sub style="text-transform: uppercase;vertical-align: -0.5ex;margin-left: -0.1667em;margin-right: -0.125em;font-size: 1em;">e</sub>X</span> 
```

Anyway, now I can *finally* get rid of this Windows 11 Virtual Machine.

### Bonus: Running Windows 11 in a Virtual Machine

This isn't a guide to setting up a Virtual Machine&mdash;that's out of the scope of this article.
However, in the process of setting up a VM for Windows 11 in order to test out the instructions in this article, the Windows Installer refused to install claiming that my system didn't meet the minimum requirements to run Windows 11. 
In order to circumvent this I followed the steps outlined by [this article](https://blogs.oracle.com/virtualization/post/install-microsoft-windows-11-on-virtualbox). I'm summarizing the important bits here.

Follow the first part of the Windows 11 install process&mdash;selecting your language and input method. 
After hitting next, you'll be presented with an Install Now button.
Hit `Shift+F10` to get the Windows Command Prompt, then type regedit.
Inside the registry editor, open HKEY_LOCAL_MACHINE, then SYSTEM, then SETUP. 
Under SETUP, create a new key called LabConfig.
Inside LabConfig, create the following 3 `DWORD (32-bit)`s:

- `BypassTPMCheck`
- `BypassSecureBootCheck`
- `BypassRAMCheck`

Set each of them to `1`.

Now you can close Registry Editor and the Command Prompt and continue with the install.
