---
layout: post
title: The Web I Dreamt
---

Over ten years ago, when I was fourteen years old, I wrote what I remember as my first web application. I scribbled it down on a napkin while out at a local cafe. I remember the feeling of awe and amazement when I got home, pounded the code straight from napkin into computer, and launched my web browser. It ran the first time perfectly, basically feature-complete. It's the only application I've ever written to have done so and probably will be forever. It was beautiful, my first foray into building a digital world for myself.[^myst]

It was written in PHP, an abomination of a programming language[^php]. It consisted of three files, which took less than three hours to write. Instead of storing and retrieving data from a legitimate database, it stored all of its data in flat files that were interspersed with the code and assets—generally considered an extremely poor practice. It was deployed on my underpowered [Snow iMac G3](http://www.everymac.com/systems/apple/imac/specs/imac_600_graphite.html). And yet,—It's the most perfect application I ever wrote.

It was a photo gallery site, a simple way for me to share photos with my friends. This was in the days before Facebook, before Flickr, before Instagram. This was before the advent of smartphones, before cameras were ubiquitous in the pockets of my friends. I took photos of my friends, I shared them online, and we all could comment and talk. It was simple, but it was beautiful. People loved it—at least I think they did. To me, it felt like a community. It kept me less alone when I went home in the evenings after school. It was our own little corner of the web that I had built myself.

* * *

When I think about the web and how I approached it back then, when I think about how things have changed, I feel some melancholy. It's hard sometimes to tell whether I or the web has changed more. The first version of America Online—my original gateway to the internet—was released in 1989, shortly after I was born. The internet and I grew up and changed together.

One of the things I miss most about those days is the way I unabashedly pursued ideas I had. I was a fast coder and when something occured to me, I built it out and shared it immediately. These days I'm slow and cautious. There's a bunch of new overhead for starting any new project, deployment details, open-source details, dependencies, &c., &c. There are concerns about how dedicated I am to the project, how long my interest in it will last, how well I can execute it.

Most of the time, these days, when I've got an idea of something to build, I'll realize that someone else has already done it better; I'll realize that Facebook or Twitter or Google already solves the problem I'm triyng to solve. I'll decide I can't compete with major corporations or funded startups and I'll just let the idea go. I leave it to the others.


But there's a lot of things I don't like about the web we inhabit now, the one that these companies built. The web I cut my teeth on was open and distributed. Tech entrepreneur and writer Anil Dash wrote a blog post, [The Web We Lost](http://dashes.com/anil/2012/12/the-web-we-lost.html)[^anil], that really drove home for me how much things have changed in the past decade:

> We get excuses about why we can't search for old tweets or our own relevant Facebook content, though we got more comprehensive results from a Technorati search that was cobbled together on the feeble software platforms of its era. We get bullshit turf battles like Tumblr not being able to find your Twitter friends or Facebook not letting Instagram photos show up on Twitter because of giant companies pursuing their agendas instead of collaborating in a way that would serve users. And we get a generation of entrepreneurs encouraged to make more narrow-minded, web-hostile products like these because it continues to make a small number of wealthy people even more wealthy, instead of letting lots of people build innovative new opportunities for themselves on top of the web itself.

I've been thinking recently: we inhabit an age in which most of our communications are mediated by a handful of powerful companies (Facebook, Twitter, Google, but also Comcast, Verizon, AT&T, and their ilk). The courts have gutted Net Neutrality, handing those companies (for now) more power. The W3C, one of web technology's major governing bodies, is building systems for DRM, throwing their weight behind those who would have more of the web be opaque, immune from sharability, remixing, and inspection. And I've become more afraid of the web. There's a low-level background fear about everything I share online: that it's accessible to the government, that the corporations I entrust with my personal identity are sloppy with how they choose to share it. I'm scared that my information is used in ways I could never have anticipated, to do things that ten years ago I would have told you were impossible. Did you know that [Pandora thinks it can determine your political affiliation](http://online.wsj.com/news/articles/SB10001424052702304315004579381393567130078) from the music you like? Did you know that Facebook engineers can correlate your Facebook activity with when you [start](http://www.policymic.com/articles/82535/here-s-the-exact-moment-people-get-into-a-relationship-on-facebook) and [end](http://www.policymic.com/articles/82885/this-is-what-happens-before-and-after-a-facebook-breakup) relationships? The uses of data are awesome and terrifying. I never know what can be inferred from what I share casually and I never know who will be privy to that information. It makes me cautious. It makes me conservative with how I treat the web and that makes me unhappy.

In short: this isn't the web I dreamt of.

There's a lot of good things: millions of people use the internet casually and constantly these days to communicate, to connect, to organize, and to create. It's not just for nerds anymore. But there are also a lot of problems. I don't know how these problems will be righted. Anil is optimistic about it:

> We'll fix these things; I don't worry about that. The technology industry, like all industries, follows cycles, and the pendulum is swinging back to the broad, empowering philosophies that underpinned the early social web.

He has age and experience with technology on me. Maybe he's right. I don't know. But I do know that I'm tired of giving my whole web identity to the web's goliaths and I'm tired of letting the thought of them stifle my urge to experiment, to share, and to build.

It's not much, but last week I built [a new photo site](http://photos.whimsicaliti.es/harris/) to share my photos and I've started uploading photos from my six months of traveling. It took me *way* more than three hours to build. It's not as good as Facebook or Flickr and it probably won't be. But it's mine and I loved building it. That makes the difference.

# References

* [Photocalities](http://photos.whimsicaliti.es/harris/)
* Anil Dash: [The Web We Lost](http://dashes.com/anil/2012/12/the-web-we-lost.html)
* WSJ: [Pandora Thinks It Knows If You're A Republican](http://online.wsj.com/news/articles/SB10001424052702304315004579381393567130078)
* PolicyMic: [Here's the Exact Moment People Get Into a Relationship On Facebook](http://www.policymic.com/articles/82535/here-s-the-exact-moment-people-get-into-a-relationship-on-facebook)
* PolicyMic: [This Is What Happens Before and After a Facebook Breakup](http://www.policymic.com/articles/82885/this-is-what-happens-before-and-after-a-facebook-breakup)

[^myst]:

	I often compare the phenomenon of web development to writing books in [Myst](http://en.wikipedia.org/wiki/Myst): you write words and a world appears.

[^php]:

	See:

	* [PHP: a fractal of bad design](http://me.veekun.com/blog/2012/04/09/php-a-fractal-of-bad-design/)
	* [PHP Sadness](http://phpsadness.com/)
	* [PHP: The Good Parts](https://twitter.com/TomNomNom/status/195304317601849344)

[^anil]:

	The whole thing is worth reading in its entirety for some perspective on how the web have changed. Seriously, it's worth it.