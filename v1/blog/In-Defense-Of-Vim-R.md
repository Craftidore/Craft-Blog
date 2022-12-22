---
title: "In Defense of Vim's R"
date: 221221
time: "10:00"
---

This is the second entry in my series of small vim tips. 
The first can be found [[Vim-Q-Colon|here]].

# In Defense of Vim's R

I see a lot of people rebind <kbd>R</kbd>. <kbd>r</kbd> is usually kept, since replacing a single character is a fairly common operation, but overwriting isn't so much.
You actually don't need to use <kbd>R</kbd> to get this functionality&mdash;some US keyboards have an <kbd>insert</kbd> key, which does the same thing as <kbd>R</kbd> in vim, but works anywhere on your computer.

I find <kbd>R</kbd> most useful in correcting small errors&mdash;I'm a klutz at typing, and frequently swap letters around.
This is where <kbd>R</kbd> comes in handy; while there are plenty of ways to fix a typing klutz&mdash;from [`1z=`](https://nanotipsforvim.prose.sh/autofix-misspellings) if it's an real word or `ciw` if you don't mind retyping the entire word.
A big part of using vim is not having to think&mdash;I want the minimum resistance between my thoughts and the text on the screen.

This is where <kbd>R</kbd> comes in. Take the following example, where `|` is the cursor:

```
document.addEventLtisener|
```

Take `StiRist` vs `Stic3list` (<kbd>S</kbd> being a [leap.nvim](https://github.com/ggandor/leap.nvim) keybind)
While the `c<number>l` format will work well for fixing klutz typing, 
but for me counting the number of characters or finding another motion that will only change my spelling error and not the entire word requires much more mental overhead than determining if the error in spelling has the same number of characters as the correct spelling.

<kbd>R</kbd> isn't a useful key for everyone, and I certainly understand why some people rebind it, but I don't believe it's without meaningful use like <kbd>s</kbd>/<kbd>S</kbd> and I want to bring attention to it for all the times it's kept me in the flow of typing.
