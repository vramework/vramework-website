---
title: React and VanillaJS Services 
description: A dive into the use-service-hook to tie state management directly to ES6 classes without the need of contexts or redux
---

Hello! Welcome to the vramework blog. The goal is of the blog is for me to share as much as I can about some design decisions I have taken whilst working on some of my projects/ideas. Once those are open for testing I'll be providing alot more examples!

Today I want to share a design that I have been using for maintaining state in react since the emergence of hooks.

There have been quite a few posts lately around how redux is a bit too complex for most situations, and the solution to either use `Context` or the `useReducer` hook provided by the reactJS library.

### My state-management experiences

You can skip this part if you want to see [how it just works](#how-it-works).

#### The earliest era

The evolution of state management in my day to day job started in 2010. Back then we have a custom rendering framework (as almost all companies did) and we had a vanilla JS model. The logic was seperated and for the most part we just wrote JS classes (bvia adding methods directly to the prototype) and emitted events whenever things changed and called the methods directly from the controller. It was a simple life, except everything was custom written and the custom framework being very similar to XML.. but it was 2010. I guess it was most similar to backbone.

#### The early mid era

We then moved towards KnockoutJS. KnockoutJS was the best framework around (mostly competing VS jQuery and Angular1) and works by having your properties all being observables. So `name()` returns name, `name('bob')` updates it. If you tied your html to the observable it would be able to read and update it.

The library itself was great, but unfortunately adoption went a bit too far and the entire logic ended up moving into the view. This meant we no longer had vanillaJS domain logic, and all of our code was driven by observables. This resulted in us implementing a reactive layer ontop to sort out those events and aggregate them, which again led to reinventing the wheel. Plus, thats just the first level of hell in terms of knock-on effects. We ended up writing a proprietry semi BDD testing layer and it was just.. odd. This was still back in the days of IE6 support, so just using a shim of `forEach` would occasionally result in the screen of unresponsiveness, let alone thousands of observables going round in a loop.

#### The mid era

So I was eventually given the opportunity to implement another design. I'm a bit fuzzy on the details, but I'm tempted to say it was because we (myself and two colleagues) won a hackathon where we were able to implement a trade model with an infinte (memory and cpu constraints aside) amount of sub-trades. Turned out there was another team who had to implement that feature and a scrum master (Jack) helped make the case. The solution wasn't perfect, but it worked for small to medium model sizes.

The idea was models that has decorators mixed in.

Something like..

```
const model = new Model()
model.add(EmployeeMixin)
model.add(BirthdayMixin)
```

And each one of those would add properties to the model which you can set via `model.set('age',35)` and read via `model.get('get')`. Most importantly though, you can listen to any field changing `model.onChange('age', (newAge, oldAge) => {})`. This pretty much meant you can allow a very small JS library to deal with all computation without needing to touch any DOM concepts. And since I was working in an FX company we were able to write mixins for everything and use them across the board. The effects in older browsers was insane, we turned rendering complex tickets from seconds to milliseconds, mostly just thanks to the fact there was just less code being run (not exactly something current frameworks do). It also meant unit tests were way easier.

#### The startup era

This period was mostly based on backend development. For the frontend we just bought an Angular 1 tempalte for 7 bucks and tried to tweak it to work. I might follow this up with it's own blog post one day.

#### The late mid era

After the startup crashed and burned I had the fortunate luck of getting a position with a group of team members from the early/mid ERA. They built a very feature rich system using ReactJS, redux and reselect. It was a really complex piece of software that worked well on both phones and desktops. During this era I really started liking redux, the power it gave and reselect allowing data to be manipulated using immutability just seemed natural.

The only downsides to this were:

1) The fact the codebase was all in JS. Redux has a few libraries (like redux-fsa) which makes it easier to use typescript, but it involved alot of rework.

2) Since the way we used Selectors used composition and there are quite a few layers of them ontop of each other understanding how things worked required you to drill down in the code. Combined with the general overhead of redux reducers/actions/dispatchers it made navigation a little more complex than I hoped. 

#### The recent era

I don't really want to go too deep into this era. It was a dark and wierd place. For a while I worked on a startup I cofounded (based on knockout even though react was in full swing). That was an AngularJS One dashboard template and followed the services approach. Then I started freelancing and saw different state management systems which just baffled me in terms of complexity. Inheritance, composition, observables, reactive code all shoved together and then used within AngularJS 8.

I also started on my own projects initially and used redux / typescript for a few months. But it really got on my nerves how much code I had to write just to get something working. I was doing most of my logic in the model and switching from the backend to the frontend always gave me a bit of dread. There had to be a way for me to regain my sanity.

###  How it works

So the criterea I had was the following:

1) It has to be super typescript friendly
2) It has to be react agnostic
3) It has to be realtime
4) It has to be unit testable
5) It has to support both `sync` and `async` methods 
6) It has to have no dependencies
7) If used by react, has to be performant and only update what and when I want it to
8) If used by react, has to be super easy to use
9) Passing reference to it should be simple
10) Should be really easy to create sub states. A state per component for example.

Armed with those concepts, and the random mix of experience over the last decade, I decided to go for the following:

```typescript
enum EmployeeServiceEvents {
    NAME_CHANGED = 'NAME_CHANGED',
    EMPLOYEE_CHANGED = 'EMPLOYEE_CHANGED',
    EVENTS_CHANGED = 'EVENTS_CHANGED'
}


class EmployeeService extends EventEmitter3 {
    private employees: Record<string, Human>()

    public getEmployee (employeeId: string) {
        const employee = this.employees.get(employeeId)
        if (employee) {
            return employee
        }
        // Using basic pub sub
        realtimeService.subscribe(`employee:${employeeId}`, employee)
        // This is the rest wrapper around fetch used in vramework to minimize boilerplate
        get(`api/employee/${employeeId}`)
            .then(employee   => {
                this.employees.set(employeeId, employee)
                this.emit(`${EmployeeServiceEvents.EMPLOYEE_CHANGED}_${employeeId}`, employee)
            })
    }

    public async updateEmployeeName (employeeId: string, name: string) {
        const employee = this.employees.get(employeeId)
        const updatedEmployee = { ...employee, name }
        this.employees.set(employeeId, updatedEmployee)
        this.emit(`${EmployeeServiceEvents.EMPLOYEE_CHANGED}_${employeeId}`, updatedEmployee)
        this.emit(`${EmployeeServiceEvents.NAME_CHANGED}_${employeeId}`, name)
    }

    public destroy () {
        for (const employeeId of Object.values(this.employees)) {
            realtimeService.unsubscribe(employeeId)
        }
    }
}
```

The general gist is that everything is written in vanilla JS, and updated things have to be immutable. You can also decide on your favourite approach to update things. In projects where I send deltas to the backend I apply the changes locally. For other services where knowing the updated state of the server is important I wait for the updated version and set that.

```typescript
public async addEmployeeCalendarEvent (employeeId: string, event: CalendarEvent) {
    const employee = this.employees.get(employeeId)
    // This is the rest wrapper around fetch used in vramework to minimize boilerplate
    const events = patch<CalendarEvents>(`api/employee/${employeeId}/addEvent`, event)
    this.employees.set(employeeId, {
        ...employee,
        events
    })
    // We don't emit the employee changed event here to prevent having all the render 
    // events triggered.
    this.emit(`${EmployeeServiceEvents.EVENTS_CHANGED}_${employeeId}`, events)
}
```

Alright, so the hook itself:

```typescript
import EventEmitter from 'eventemitter3'
import { useEffect } from 'react'

export const useServiceHook = (service: EventEmitter, event: string, callback: (...args: any[]) => void) => {
  useEffect(() => {
    service.on(event, callback)
    return () => {
      service.off(event, callback)
    }
  }, [service, event, callback])
}
```

And you can use it by saying:

```typescript
import { useServiceHook } from '@vramework/hooks/dist/use-service-hook'
import { useState } from 'react'

const useEmployee = (employeeId?: string): Employee | undefined => {
    const [employee, setEmployee] = useState<Employee | undefined>(
        () => employeeId ? employeeService.getEmployee(employeeId) : undefined
    )
    useServiceHook(
        employeeService, 
        `${EmployeeServiceEvents.EVENTS_CHANGED}_${employeeId}`, 
        setEmployee
    )
    return employee
}
```

or if you want to update something:

```typescript
const addCalendarEvent = (employeeId? string) => {
    return useCallback(async (event: CalendarEvent) => {
        if (employeeId) {
            await employeeService.addCalendarEvent(employeeId, event)
        }
    }, [employeeId])
}
```

I mean thats really about it. Looking at the requirments:

##### 1: It has to be super typescript friendly
##### 2: It has to be react agnostic
##### 3: It has to be unit testable

> So all of the above are achieved by just using normal ES6 classes. Writing tests is a breeze.

##### 4: It has to support both `sync` and `async` methods 

> Using ES6 classes this works. The main obstacle is just that anything that needs to be initialised in a `getState` method can't be async because otherwise the state would contain a promise. So you call the method, if it's undefined expect the event to be called with the initial value shortly after

##### 5: It has to have no dependencies

> I had to use another EventEmitter library because the one included in the shim isn't browser
friendly. So the only dependency is EventEmitter3

##### 6: React: has to be performant and only update what and when I want it to

> So I used this pattern for three applications so far. I can definately say it has made debugging CPU issues much easier because the stack trace is minimal. I'm currently developing a large audio book editor in-browser and it has so far held up to all my expecations without any debugging

##### 7: React: has to be super easy to use

> Not that much to learn thankfully, everything is pretty much contained in those lines of code above.

##### 8: Passing reference to it should be simple

> So the classes themselves are created once using `useMemo` and can then be passed through via a context or using props. Eitherways it should never trigger a rerender unless the service changes.

```typescript
const employeeService = useMemo(() => new EmployeeService())
return <EmployeeContent.Provider value={employeeService}>
<EmployeeContent.Provider>
```

##### 9: Should be really easy to create sub states. A state per component for example.

> This was really important for me because I have classes that back certain complex components in react. Because of the approach above theres no complex state creation. Create the class and it deletes when the component is removed. If the class needs cleanup code you can just `useEffect`