export const hero = {
    title: 'A different type of HTTP server',
    description: 'A (very) light framework for building pure HTTP servers in Node.js',
}

export const highlights = [{
    "title": "Functions",
    "description": "Write your code via functions and services, without having to learn a whole library or about HTTP concepts.",
    "icon": require("@site/static/img/vramework.svg").default
}, {
    "title": "Server agnostic",
    "description": "You can run your code via serverless, express or bundle it into a binary.",
    "icon": require("@site/static/img/vramework.svg").default
}, {
    "title": "Compile free",
    "description": "You don't need to compile or use a bundler to run your code.",
    "icon": require("@site/static/img/vramework.svg").default
}]

export const features = {
    title: 'Minimal features',
    description: 'The essential tools you need to get the job done',
    features: [{
        "title": "Type Safety",
        "description": "Everything is vanilla typescript with common types, potentially starting from your database and ending with the client.",
        "icon": require("@site/static/img/typescript.svg").default
    }, {
        "title": "Minimal APIs",
        "description": "Spend less time learning libraries and more time writing code. A few core concepts can take you almost all the way.",
        "icon": require("@site/static/img/ideas.svg").default
    }, {
        "title": "Session aware",
        "description": "Provide the user session to each function invocation for context. Cookies, API keys or JWT out of the box (if you want).",
        "icon": require("@site/static/img/network.svg").default
    }, {
        "title": "Permissions",
        "description": "Check each function invocation against a group of permissions before they even run.",
        "icon": require("@site/static/img/permissions.svg").default
    }, {
        "title": "Service Lookups",
        "description": "Each function call gets provided with both global services, as well as session services created for each call.",
        "icon": require("@site/static/img/framework.svg").default
    }, {
        "title": "Validate schemas",
        "description": "Validate all API calls via automatically generated schemas from typescript. No more manual validation required.",
        "icon": require("@site/static/img/schema.svg").default
    }, {
        "title": "Microservices (or not)",
        "description": "Pick and choose how you want to split your code for deployment and scalability. What's important is you can switch between them really easily.",
        "icon": require("@site/static/img/cloud-computing.svg").default
    }, {
        "title": "Content management",
        "description": "There's always a file that needs to go up or down.",
        "icon": require("@site/static/img/file.svg").default
    }, {
        "title": "Error handling",
        "description": "Map the errors in your code directly to HTTP status codes.",
        "icon": require("@site/static/img/error.svg").default
    }],
}