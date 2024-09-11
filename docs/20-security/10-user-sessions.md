---
sidebar_position: 10
title: User Sessions
description: Validating sessions
---

## Introduction to User Sessions

User sessions are crucial for managing **security**, **auditing**, and **metrics** in modern applications. Vramework provides an optional session service to handle permissions and validate user sessions effectively.

### Session Service API

The session service in Vramework follows a simple structure. It may evolve to handle more data from requests, like the origin, but currently, the session creation responsibility remains inside of the userland login/session related functions.

```typescript
export interface SessionService<UserSession = CoreUserSession> {
    getUserSession: (credentialsRequired: boolean, headers: Record<string, string>) => Promise<UserSession | undefined>;
}
```

If a session service is registered within the singleton services, Vramework will automatically use it to validate the user session.

### Default Session Service

The default implementation provided by Vramework is called `VrameworkSessionService`.

## Retrieving a Session

The `VrameworkSessionService` attempts to retrieve a session using the following mechanisms, in this order:

### 1. API Key in Header (`x-api-key`)

An API key can be passed via the `x-api-key` header. Vramework will call the provided `getSessionForAPIKey` function to retrieve the user session. If the API key is present but not handled, an error will be thrown.

### 2. JWT Token in Authorization Header

This follows the standard JWT workflow. The JWT token is retrieved from the `Authorization` header and decoded using the `JWTService`.

### 3. Cookie

Vramework can retrieve a session via cookies. The cookie name can be set via the `cookieNames` option. In cases where the cookie name is determined by the host, use the `cookieNameIsOrigin` option.

Once the cookie is located, Vramework calls `getSessionForCookieValue` to retrieve the user session.

## Transforming Sessions

Sometimes, additional data needs to be included in the session beyond what is stored in a JWT. For example, sensitive information that shouldn't be stored in the token itself. Vramework allows this transformation using `transformSession`, which can add or modify session data.

## Example Initialization

Here's an example of initializing a session service with JWT support and session transformation:

```typescript
const jwtService = new JWTService<UserSession>(async () => [
  {
    keyid: 'my-first-key',
    secret: 'the-yellow-puppet'
  },
  {
    keyid: 'my-new-key',
    secret: 'the-purple-banana'
  }
]);

const vrameworkSessionService = new VrameworkSessionService(
  jwtService,
  {
    getSessionForAPIKey: async (apiKey: string) => {
      if (apiKey === 'top-secret') {
        return topSecretUserSession;
      }
    },
    transformSession: async (session: any) => {
      return {
        ...session,
        privateSessionData: {
          dateOfBirth: '20230401'
        }
      };
    }
  }
);
```

This configuration allows Vramework to validate and transform sessions, ensuring flexibility and security in handling user data.