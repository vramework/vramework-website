---
format: md
title: Todoist
description: "Todoist integration for Pikku"
sidebar_label: Todoist
---

# Todoist

Todoist integration for Pikku

```bash
npm install @pikku/addon-todoist
```

Category: **Automation** · Version: `0.0.7` · Package: `@pikku/addon-todoist`

## Functions

| Function | Description | Services |
| -------- | ----------- | -------- |
| `closeTask` | Closes a task. | `todoist` |
| `createComment` | Creates a new comment on a project or task and returns it as a JSON object. | `todoist` |
| `createPersonalLabel` | Creates a new personal label and returns its object as JSON. | `todoist` |
| `createProject` | Creates a new project and returns it as a JSON object. | `todoist` |
| `createSection` | Creates a new section and returns it as a JSON object. | `todoist` |
| `createTask` | Creates a new task and returns it as a JSON object. | `todoist` |
| `deleteComment` | Deletes a comment. | `todoist` |
| `deletePersonalLabel` | Deletes a personal label, all instances of the label will be removed from tasks. | `todoist` |
| `deleteProject` | Deletes a project. | `todoist` |
| `deleteSection` | Deletes a section. | `todoist` |
| `deleteTask` | Deletes a task. | `todoist` |
| `getActiveTask` | Returns a single active (non-completed) task by ID as a JSON object. | `todoist` |
| `getActiveTasks` | Returns a JSON-encoded array containing all active tasks. | `todoist` |
| `getAllCollaborators` | Returns JSON-encoded array containing all collaborators of a shared project. | `todoist` |
| `getAllComments` | Returns a JSON-encoded array of all comments for a given task_id or project_id. | `todoist` |
| `getAllPersonalLabels` | Returns a JSON-encoded array containing all user labels. | `todoist` |
| `getAllProjects` | Returns JSON-encoded array containing all user projects. | `todoist` |
| `getAllSections` | Returns a JSON array of all sections. | `todoist` |
| `getComment` | Returns a single comment as a JSON object. | `todoist` |
| `getPersonalLabel` | Returns a personal label by ID. | `todoist` |
| `getProject` | Returns a JSON object containing a project object related to the given ID. | `todoist` |
| `getSingleSection` | Returns a single section as a JSON object. | `todoist` |
| `reopenTask` | Reopens a task. | `todoist` |
| `updateComment` | Updates a comment and returns it as a JSON object. | `todoist` |
| `updatePersonalLabel` | Returns the updated label. | `todoist` |
| `updateProject` | Returns a JSON object containing the updated project object. | `todoist` |
| `updateSection` | Returns the updated section as a JSON object. | `todoist` |
| `updateTask` | Updates a specified task and returns it as a JSON object. | `todoist` |

## Wiring it up

Declare the addon once, then reference its functions the way you would your own:

```typescript title="addons.wiring.ts"
import { wireAddon } from '#pikku/addon'

wireAddon({
  name: 'todoist',
  package: '@pikku/addon-todoist',
})
```

The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.
