---
title: Encryption vs Encoding vs Hashing
date: 220526
time: "10:00"
theme: code
---

# Encryption vs Encoding vs Hashing

%% Written in DOOM Emacs! Denver, be proud of me. %%

As I was teaching myself how to code, I came across the terms 'encryption,' 'encoding,' and 'hashing.'
I had no clue what these meant, so I'm writing this to help anyone else who's become confused.

## Encryption

As a general rule, you can't keep people from reading data.
This isn't strictly true&mdash;if you have a hard drive locked in a vault, no one will be able to read it without unlocking or breaking into the vault.
However, when doing anything on the internet, you can't easily keep people from *reading* data being sent or recieved.
This is one area in which encryption is very important.

Encryption is the process by which one takes data, 
puts it through a reversible mathematical formula, 
turning text into some form of gibberish.
The important part of this process is that it is *reversible*, provided you know what the formula is.
The easiest way to exchange the 'formula' is the exchange of 'keys.'
Keys are big, unpredictable numbers that can be used to generate the formula that is then used to encrypt the data.


### Symetric Encryption

The simplest form of encryption is symmetric encryption.
In symmetric encryption, a given key generates both a formula to encrypt data and a formula that will decrypt the encrypted data.
This means that both the sender and the receiver have an identical key.
Unfortunately, this presents a problem: how does the sender tell the receiver what the key is? 
The sender can't just send it to the receiver, it wouldn't be encrypted, 
allowing anyone eavesdropping when the key was sent to also eavesdrop on future conversations and even send messages as if they were the sender.

### Asymetric Encryption

With asymmetric encryption, the two participants each have a public key and a private key. 
Anything encrypted by the public key can only be decrypted by the corresponding private key and likewise, anything encrypted by the private key can only be decrypted by the public key.
This is a far better method than symmetric encryption because it no longer matters if someone has your public key, 
and you'll never need to send your private key to anyone, thus eliminating the initialization problem of communication via symmetric encryption.

## Encoding

If that's encryption, what is encoding?
Encoding is when you take data and put it through a formula that turns it into data that is organized differently but means the same thing.
That was rather abstract, so let me give you an example:

```
Hello World!
```

is a string of text. In modern-day computers, text is stored in 8-bit bytes. 
This means that every letter takes up 8 ones and zeroes, even if the letter itself isn't as big.

```py
ord('H') # 72
bin(ord('H')) # '0b01001000'
ord('e') # 101
bin(ord('e')) # '0b01100101'
ord('l') # 108
bin(ord('l')) # '0b01101100'
ord('l') # 108
bin(ord('l')) # '0b01101100'
ord('o') # 111
bin(ord('o')) # '0b01101111'
ord(' ') # 32
bin(ord(' ')) # '0b00100000'
ord('W') # 87
bin(ord('W')) # '0b01010111'
ord('o') # 111
bin(ord('o')) # '0b01101111'
ord('r') # 114
bin(ord('r')) # '0b01110010'
ord('l') # 108
bin(ord('l')) # '0b01101100'
ord('d') # 100
bin(ord('d')) # '0b01100100'
ord('!') # 33
bin(ord('!')) # '0b00100001'
```

Every character in `Hello World!` can be fit into *7* bits. 
If you had to fit it into a small space, you could drop the first zero off of every character.
Instead of 

```
010010000110010101101100011011000110111100100000010101110110111101110010011011000110010000100001
```

you could fit the text inside of 

```
100100011001011101100110110011011110100000101011111011111110010110110011001000100001
```

which is a bit shorter. 
Back when storage was expensive and every saved bit mattered, this was important. 
Nowadays, when we buy RAM by the gigabyte, saving a couple of bits doesn't make much difference.
We face a different problem that can also be solved by encoding.
The internet is entirely text-based, but sometimes you want to send data that isn't text-based inside a text file. 
This presents a problem because some characters can't be placed in a text file without screwing it up&mdash;keyboards
used to use the same character encoding as text files&mdash;[ascii](https://en.wikipedia.org/wiki/ASCII)&mdash;and there are a bunch of leftover characters like `<ESC>` that can't be in a text file but are still characters in the set&mdash;the first 32 to be exact.
In comes Base64.

Base64 is an encoding format that takes any string of bits and converts it into the characters `a-z`, `A-Z`, `0-9`, `+`, and `/`, all of which are valid in a text file.
Base64 lets you put non-text data into a text file, but it also makes the data take up more space in bits.

The reason I bring this up is that **Base64 is not encryption**.
`Hello World!` converts to `SGVsbG8gV29ybGQh`. 
It looks like garbage and 'garbage' only has meaning if you know the formula is encrypted, so why isn't Base64 encryption?
Encryption algorithms use 'keys' to generate unique formulas that no one who doesn't have the key knows, but Base64 encoding is always the same formula. 
If you 'encrypt' data with Base64, anyone can go put that data into a [Base64 Decorder](https://www.base64decode.org/) and the original data out.

## Hashing

Finally, we have hashing.
Hashing looks like encryption and encoding because it takes an input and produces a gibberish output.
It differs in that you can't take the gibberish output and get back to the original input. 
There is no 'key' to the data.
Then what is hashing used for? 

Say I've sent you a really large file and I want to make sure that no data was lost during the process. 
If you take the file and put it through a hashing function, you will get a bunch of gibberish out the other end.
Conveniently, in addition to the file, I also send you the output given to me when I put the file through the same hashing function on my machine.
If the hashes match, we know no data was lost during transmission.

There are other uses for hashing as well. Take passwords.
When creating an account on a website, the website (hopefully) won't store your password.
Instead, your password will be hashed, and the hash will be stored.
When you go to log in, you send the server your password, then it hashes the password and checks to see if the hash output is the same as the stored hash of your password.
This is also why, when you click 'forgot password,' you aren't emailed your password, you are emailed a place to change your password&mdash;not even the server knows what your password is.

Hashing still doesn't completely protect passwords.
If a hacker manages to get the list of emails and password hashes, 
they can't use that to go sign into someone's account because you can't tell from the hash what the password is.
Unfortunately, if your password is short, they can 'brute force' it by trying every possible 8-character password, hashing it, and seeing if the output matches any of the password hashes.
Then, when they get through those, they try every possible *9*-character password, checking their hashes against the hacked hashes.
Just because your password isn't stored directly on other's servers, that doesn't give you a get-out-of-jail-free card when it comes to using strong passwords.

## More Info

- [End to End Encryption (E2EE) - Computerphile (Youtube)](https://www.youtube.com/watch?v=jkV1KEJGKRA)
- [Secret Key Exchange - Computerphile (Youtube)](https://www.youtube.com/watch?v=NmM9HA2MQGI)
- [Public Key Cryptography - Computerphile (Youtube)](https://www.youtube.com/watch?v=GSIDS_lvRv4)
- [Base64 is not encryption (Bill Sempf)](https://sempf.net/post/base64-is-not-encryption)
- An explanation of hashing - [The A4 Paper Puzzle - Matt Parker (Youtube)](https://www.youtube.com/watch?v=SOgn6J12NWE)
- [How to choose a password - Computerphile (Youtube)](https://www.youtube.com/watch?v=3NjQ9b3pgIg)
- [Password Cracking - Computerphile (Youtube)](https://www.youtube.com/watch?v=7U-RbOKanYs)
