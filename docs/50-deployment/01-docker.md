---
sidebar_position: 3
title: Docker
---

**Note**: WIP

The last thing we want to do is deploy the server.

The easiest way to do so is via docker.

```bash
docker build . -f Dockerfile.api -t mindwave:latest
```