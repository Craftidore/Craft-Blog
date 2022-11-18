---
title: "Vim's q:"
date: 220610
time: "10:00"
---

This is the first entry in what I hope to be a series of short posts on small little vim tips I've come across.
I use neovim, personally, but most of these will also apply to regular vim.
I'll try to include both vimscript and nvim lua configuration options.

# Vim's q:

One of the biggest pain points in vim was ex mode. 
Ex mode doesn't have vim keybinds; particularly annoying when trying to write a complex regex replacement query.
If I mess up, I don't want to use my backspace key, or, *heaven forbid*, my *arrow keys*.

Luckily vim has a way of opening ex mode as a buffer, just like you would a file: `q:`.
You can get out of this ex mode with `:q<CR>` or by hitting enter on empty line.
I, personally, can't think of a time when I wouldn't want to have a vim keybinds while in ex mode, so I remapped `:` to `q:`.

While this lets you use vim keybinds in ex mode, you start out in normal mode like you do when you open any buffer.
When I enter ex mode, I typically want to start typing my ex command immediately.

So the final keybind is as follows:

Vimscript:

```vim
nnoremap : q:i
vnoremap : q:i
```

Nvim Lua:

```lua
vim.keymap.set("n", ":", "q:i", { noremap = true, silent = true })
vim.keymap.set("v", ":", "q:i", { noremap = true, silent = true })
```

Conveniently, there's also such a mode for `/` and `?`.
Ergo, my config looks like this:

Vimscript:

```vim
nnoremap : q:i
vnoremap : q:i
nnoremap / q/i
vnoremap / q/i
nnoremap ? q?i
vnoremap ? q?i
```

Nvim Lua:

```lua
vim.keymap.set("n", ":", "q:i", { noremap = true, silent = true })
vim.keymap.set("v", ":", "q:i", { noremap = true, silent = true })
vim.keymap.set("n", "/", "q/i", { noremap = true, silent = true })
vim.keymap.set("v", "/", "q/i", { noremap = true, silent = true })
vim.keymap.set("n", "?", "q?i", { noremap = true, silent = true })
vim.keymap.set("v", "?", "q?i", { noremap = true, silent = true })
```
