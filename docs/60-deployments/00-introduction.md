---
sidebar_position: 0
title: Introduction
---

Deploying vramework really depends on what your prefered deployment strategy is.

We pretty much support any of the popular formats, such as:

1. Running via node directly on ec2 machines
2. Running via docker
3. Running via lambda
4. Running via azure

And I'm keen to see how far we can take it. The actual logic within vramework is extremely minimal, the restrictions to running things on edge or minimizing package sizes depends on which node modules you require within your own services (and their dependencies) as well as how many services you create.
