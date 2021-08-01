---
title: FAQ
description: Questions about vramework
---

### How can I try it out?

I set up an example repo (here)[https://github.com/vramework/vramework-example] which will hopefully be updated in the upcoming weeks with a fully working example. I may also OS a project I built for a family member (a blog cms system) which might be a nice example template.

### So why the whole website?

Because it's MIT and if a bunch of us put time together could be a nice solution to API design.

### Where are the tests at?

Great question. Since vramework is a pretty lightweight wrapper around express and serverless the tests we do are mostly in the proprietary layer, mostly done via E2E frameworks. It's not in the best interest of an OS project, but open-sourcing this, in general, was more to share
a solution I came up with rather than have heavy marketing or promotions. Hopefully, if it makes sense these things will be added by other
core maintainers, hence the MIT license.

### Is there a hook in angle?

Nope. If you decide you want to just go with express u can just go back to using express and their middleware. You don't have to use one
or the other.

### Why all the other packs in the mono repo? (Hooks and so forth)

I'll also be documenting some fun hooks I use. There are other more mature solutions out there with similar concepts but I find the model I use pretty simple. More to come on that later.
