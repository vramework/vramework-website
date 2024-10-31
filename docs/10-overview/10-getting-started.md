---
sidebar_position: 10
title: Getting Started
description: How does it work?
---

This set of articles covers the **core fundamentals** of Vramework. To understand how Vramework operates, a basic CRUD application will be built, demonstrating fundamental features at an introductory level.

## Prerequisites

Ensure that [Node.js](https://nodejs.org) (version >= 18) is installed on the operating system.

### Setup

Begin by installing the starter project using **Git**:

```bash npm2yarn
# Clone the project
git clone https://github.com/vramework/express-middleware-starter.git project
# Enter the directory
cd project
# Setup dependencies
npm install
# Run vramework cli
npx @vramework/cli
```

The `project` directory will be created, node modules will be installed, and vramework files will be created:

```bash title="Project structure"
.vramework/
  vramework-schemas/
    schemas/
      CreateBook.schema.json
      JustBookId.schema.json
    register.ts
  vramework-bootstrap.ts
  vramework-routes-map.d.ts
  vramework-routes.ts
  vramework-types.d.ts
bin/
  main.ts
src/
  config.ts
  services.ts
  books.service.ts
  books.function.ts
types/
  books.types.d.ts
vramework.config.json
```

#### Core Files

Here's a brief overview of there core files:

| **File**                    | **Description**                                                                                             |
|-----------------------------|-------------------------------------------------------------------------------------------------------------|
| `main.ts`                   | The entry point                                                                                           |
| `config.ts`                 | The configuration used by the server                                                                      |
| `services.ts`               | A function that creates all the expected services required                                                 |
| `book.service.ts` | A simple book service                                                                                     |
| `books.function.ts`  | The glue between services and http calls
| `vramework.config.json`  | The config used by the vramework CLI tool      

#### Generated Files

:::info
The two files we use are `vramework-bootstrap.ts` and `vramework-types.d.ts`. The rest are generated in order to either help provide autocompletion / type checks or for runtime purposes.
:::


| **File**                    | **Description**                                                                                             |
|-----------------------------|-------------------------------------------------------------------------------------------------------------|
| `vramework-schemas/`                   | The directory that contains all the schemas we'll validate calls against                                                                                     |
| `vramework-schemas/register.ts`                 | Imports all the schemas and adds them to vramework                                                              |
| `vramework-bootstrap.ts`               | Imports the required files into our runtime                                                 |
| `vramework-routes.ts` | Imports all the files with routes in them                                                          |
| `vramework-types.d.ts`  | Provides types to be used in the application                                                       |

### The config file

The `vramework.config.json` file is used to drive the vramework CLI tool.

:::info
The vramework CLI tool is used to:
- Index all your API routes.
- Generate the route schemas.
- Create typescript declaration files to aid developers.

For more info you can checkout the CLI documentation.

:::

```json reference 
https://raw.githubusercontent.com/vramework/express-middleware-starter/blob/master/vramework.config.json
```

