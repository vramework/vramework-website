---
sidebar_position: 3  
title: Docker  
---

To deploy the server, Docker provides the easiest and most efficient solution.

To build the Docker image, use the following command:

```bash
docker build . -f Dockerfile.api -t mindwave:latest
```

The Dockerfile is configured to use [Yarn](https://yarnpkg.com/).

```dockerfile title="Dockerfile.server"
FROM --platform=linux/amd64 node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY .yarnrc.yml .yarnrc.yml
COPY .yarn/install-state.gz .yarn/install-state.gz
COPY yarn.lock yarn.lock

COPY package.json package.json
COPY backends/ backends/
COPY packages/ packages/

RUN corepack enable
RUN cd backends/api && yarn workspaces focus --production

CMD ["yarn", "prod:server"]
```

This Dockerfile ensures the server is deployed with a production-focused Yarn setup.
