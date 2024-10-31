// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const typedocSidebar = { items: [{"type":"category","label":"@vramework/core","items":[{"type":"category","label":"Enumerations","items":[{"type":"doc","id":"api/@vramework/core/enumerations/LogLevel","label":"LogLevel"}]},{"type":"category","label":"Classes","items":[{"type":"doc","id":"api/@vramework/core/classes/ConsoleLogger","label":"ConsoleLogger"},{"type":"doc","id":"api/@vramework/core/classes/LocalSecretService","label":"LocalSecretService"},{"type":"doc","id":"api/@vramework/core/classes/VrameworkSessionService","label":"VrameworkSessionService"}]},{"type":"category","label":"Interfaces","items":[{"type":"doc","id":"api/@vramework/core/interfaces/ContentService","label":"ContentService"},{"type":"doc","id":"api/@vramework/core/interfaces/CoreConfig","label":"CoreConfig"},{"type":"doc","id":"api/@vramework/core/interfaces/CoreSingletonServices","label":"CoreSingletonServices"},{"type":"doc","id":"api/@vramework/core/interfaces/CoreUserSession","label":"CoreUserSession"},{"type":"doc","id":"api/@vramework/core/interfaces/JWTService","label":"JWTService"},{"type":"doc","id":"api/@vramework/core/interfaces/Logger","label":"Logger"},{"type":"doc","id":"api/@vramework/core/interfaces/PermissionService","label":"PermissionService"},{"type":"doc","id":"api/@vramework/core/interfaces/SecretService","label":"SecretService"},{"type":"doc","id":"api/@vramework/core/interfaces/SessionService","label":"SessionService"},{"type":"doc","id":"api/@vramework/core/interfaces/VrameworkInteraction","label":"VrameworkInteraction"}]},{"type":"category","label":"Type Aliases","items":[{"type":"doc","id":"api/@vramework/core/type-aliases/APIRouteMethod","label":"APIRouteMethod"},{"type":"doc","id":"api/@vramework/core/type-aliases/AssertRouteParams","label":"AssertRouteParams"},{"type":"doc","id":"api/@vramework/core/type-aliases/CoreAPIFunction","label":"CoreAPIFunction"},{"type":"doc","id":"api/@vramework/core/type-aliases/CoreAPIFunctionSessionless","label":"CoreAPIFunctionSessionless"},{"type":"doc","id":"api/@vramework/core/type-aliases/CoreAPIPermission","label":"CoreAPIPermission"},{"type":"doc","id":"api/@vramework/core/type-aliases/CoreAPIRoute","label":"CoreAPIRoute"},{"type":"doc","id":"api/@vramework/core/type-aliases/CoreAPIRoutes","label":"CoreAPIRoutes"},{"type":"doc","id":"api/@vramework/core/type-aliases/CoreServerConfig","label":"CoreServerConfig"},{"type":"doc","id":"api/@vramework/core/type-aliases/CoreServices","label":"CoreServices"},{"type":"doc","id":"api/@vramework/core/type-aliases/CreateSessionServices","label":"CreateSessionServices"},{"type":"doc","id":"api/@vramework/core/type-aliases/CreateSingletonServices","label":"CreateSingletonServices"},{"type":"doc","id":"api/@vramework/core/type-aliases/JSONPrimitive","label":"JSONPrimitive"},{"type":"doc","id":"api/@vramework/core/type-aliases/JSONValue","label":"JSONValue"},{"type":"doc","id":"api/@vramework/core/type-aliases/PickOptional","label":"PickOptional"},{"type":"doc","id":"api/@vramework/core/type-aliases/PickRequired","label":"PickRequired"},{"type":"doc","id":"api/@vramework/core/type-aliases/RequestHeaders","label":"RequestHeaders"},{"type":"doc","id":"api/@vramework/core/type-aliases/RequireAtLeastOne","label":"RequireAtLeastOne"},{"type":"doc","id":"api/@vramework/core/type-aliases/RouteDocs","label":"RouteDocs"},{"type":"doc","id":"api/@vramework/core/type-aliases/RoutesMeta","label":"RoutesMeta"},{"type":"doc","id":"api/@vramework/core/type-aliases/RoutesMetaInputTypes","label":"RoutesMetaInputTypes"},{"type":"doc","id":"api/@vramework/core/type-aliases/RunRouteOptions","label":"RunRouteOptions"},{"type":"doc","id":"api/@vramework/core/type-aliases/VrameworkQuery","label":"VrameworkQuery"}]},{"type":"category","label":"Functions","items":[{"type":"doc","id":"api/@vramework/core/functions/addError","label":"addError"},{"type":"doc","id":"api/@vramework/core/functions/addErrors","label":"addErrors"},{"type":"doc","id":"api/@vramework/core/functions/addRoute","label":"addRoute"},{"type":"doc","id":"api/@vramework/core/functions/getRoutes","label":"getRoutes"},{"type":"doc","id":"api/@vramework/core/functions/loadAllSchemas","label":"loadAllSchemas"},{"type":"doc","id":"api/@vramework/core/functions/loadSchema","label":"loadSchema"}]},{"type":"category","label":"Error","items":[{"type":"doc","id":"api/@vramework/core/classes/BadGatewayError","label":"BadGatewayError"},{"type":"doc","id":"api/@vramework/core/classes/BadRequestError","label":"BadRequestError"},{"type":"doc","id":"api/@vramework/core/classes/ConflictError","label":"ConflictError"},{"type":"doc","id":"api/@vramework/core/classes/ExpectationFailedError","label":"ExpectationFailedError"},{"type":"doc","id":"api/@vramework/core/classes/ForbiddenError","label":"ForbiddenError"},{"type":"doc","id":"api/@vramework/core/classes/GatewayTimeoutError","label":"GatewayTimeoutError"},{"type":"doc","id":"api/@vramework/core/classes/GoneError","label":"GoneError"},{"type":"doc","id":"api/@vramework/core/classes/HTTPVersionNotSupportedError","label":"HTTPVersionNotSupportedError"},{"type":"doc","id":"api/@vramework/core/classes/InternalServerError","label":"InternalServerError"},{"type":"doc","id":"api/@vramework/core/classes/InvalidOriginError","label":"InvalidOriginError"},{"type":"doc","id":"api/@vramework/core/classes/InvalidSessionError","label":"InvalidSessionError"},{"type":"doc","id":"api/@vramework/core/classes/LengthRequiredError","label":"LengthRequiredError"},{"type":"doc","id":"api/@vramework/core/classes/MaxComputeTimeReachedError","label":"MaxComputeTimeReachedError"},{"type":"doc","id":"api/@vramework/core/classes/MethodNotAllowedError","label":"MethodNotAllowedError"},{"type":"doc","id":"api/@vramework/core/classes/MissingSessionError","label":"MissingSessionError"},{"type":"doc","id":"api/@vramework/core/classes/NotAcceptableError","label":"NotAcceptableError"},{"type":"doc","id":"api/@vramework/core/classes/NotFoundError","label":"NotFoundError"},{"type":"doc","id":"api/@vramework/core/classes/NotImplementedError","label":"NotImplementedError"},{"type":"doc","id":"api/@vramework/core/classes/PayloadTooLargeError","label":"PayloadTooLargeError"},{"type":"doc","id":"api/@vramework/core/classes/PaymentRequiredError","label":"PaymentRequiredError"},{"type":"doc","id":"api/@vramework/core/classes/PreconditionFailedError","label":"PreconditionFailedError"},{"type":"doc","id":"api/@vramework/core/classes/ProxyAuthenticationRequiredError","label":"ProxyAuthenticationRequiredError"},{"type":"doc","id":"api/@vramework/core/classes/RangeNotSatisfiableError","label":"RangeNotSatisfiableError"},{"type":"doc","id":"api/@vramework/core/classes/RequestTimeoutError","label":"RequestTimeoutError"},{"type":"doc","id":"api/@vramework/core/classes/RouteNotFoundError","label":"RouteNotFoundError"},{"type":"doc","id":"api/@vramework/core/classes/ServiceUnavailableError","label":"ServiceUnavailableError"},{"type":"doc","id":"api/@vramework/core/classes/TooManyRequestsError","label":"TooManyRequestsError"},{"type":"doc","id":"api/@vramework/core/classes/UnauthorizedError","label":"UnauthorizedError"},{"type":"doc","id":"api/@vramework/core/classes/UnsupportedMediaTypeError","label":"UnsupportedMediaTypeError"},{"type":"doc","id":"api/@vramework/core/classes/URITooLongError","label":"URITooLongError"}]},{"type":"category","label":"RequestResponse","items":[{"type":"doc","id":"api/@vramework/core/classes/VrameworkRequest","label":"VrameworkRequest"},{"type":"doc","id":"api/@vramework/core/classes/VrameworkResponse","label":"VrameworkResponse"}]}],"link":{"type":"doc","id":"api/@vramework/core/index"}},{"type":"doc","id":"api/@vramework/core/index","label":"@vramework/core"},{"type":"category","label":"@vramework/express","items":[{"type":"category","label":"Classes","items":[{"type":"doc","id":"api/@vramework/express/classes/VrameworkExpressServer","label":"VrameworkExpressServer"}]}],"link":{"type":"doc","id":"api/@vramework/express/index"}},{"type":"category","label":"@vramework/express-middleware","items":[{"type":"category","label":"Functions","items":[{"type":"doc","id":"api/@vramework/express-middleware/functions/vrameworkMiddleware","label":"vrameworkMiddleware"}]}],"link":{"type":"doc","id":"api/@vramework/express-middleware/index"}},{"type":"category","label":"@vramework/fastify","items":[{"type":"category","label":"Classes","items":[{"type":"doc","id":"api/@vramework/fastify/classes/VrameworkFastifyServer","label":"VrameworkFastifyServer"}]}],"link":{"type":"doc","id":"api/@vramework/fastify/index"}},{"type":"category","label":"@vramework/fastify-plugin","items":[{"type":"category","label":"Functions","items":[{"type":"doc","id":"api/@vramework/fastify-plugin/functions/default","label":"default"}]}],"link":{"type":"doc","id":"api/@vramework/fastify-plugin/index"}},{"type":"category","label":"@vramework/fetch","items":[{"type":"category","label":"Classes","items":[{"type":"doc","id":"api/@vramework/fetch/classes/CoreVrameworkFetch","label":"CoreVrameworkFetch"}]},{"type":"category","label":"Type Aliases","items":[{"type":"doc","id":"api/@vramework/fetch/type-aliases/CoreVrameworkFetchOptions","label":"CoreVrameworkFetchOptions"},{"type":"doc","id":"api/@vramework/fetch/type-aliases/HTTPMethod","label":"HTTPMethod"}]},{"type":"category","label":"Functions","items":[{"type":"doc","id":"api/@vramework/fetch/functions/coreVrameworkFetch","label":"coreVrameworkFetch"}]}],"link":{"type":"doc","id":"api/@vramework/fetch/index"}},{"type":"category","label":"@vramework/jose","items":[{"type":"category","label":"Classes","items":[{"type":"doc","id":"api/@vramework/jose/classes/JoseJWTService","label":"JoseJWTService"}]}],"link":{"type":"doc","id":"api/@vramework/jose/index"}},{"type":"category","label":"@vramework/next","items":[{"type":"category","label":"Classes","items":[{"type":"doc","id":"api/@vramework/next/classes/VrameworkActionNextRequest","label":"VrameworkActionNextRequest"},{"type":"doc","id":"api/@vramework/next/classes/VrameworkActionNextResponse","label":"VrameworkActionNextResponse"},{"type":"doc","id":"api/@vramework/next/classes/VrameworkAPINextRequest","label":"VrameworkAPINextRequest"},{"type":"doc","id":"api/@vramework/next/classes/VrameworkAPINextResponse","label":"VrameworkAPINextResponse"},{"type":"doc","id":"api/@vramework/next/classes/VrameworkNextJS","label":"VrameworkNextJS"},{"type":"doc","id":"api/@vramework/next/classes/VrameworkNextRequest","label":"VrameworkNextRequest"},{"type":"doc","id":"api/@vramework/next/classes/VrameworkSSRNextRequest","label":"VrameworkSSRNextRequest"},{"type":"doc","id":"api/@vramework/next/classes/VrameworkSSRNextResponse","label":"VrameworkSSRNextResponse"}]}],"link":{"type":"doc","id":"api/@vramework/next/index"}},{"type":"category","label":"@vramework/uws","items":[{"type":"category","label":"Classes","items":[{"type":"doc","id":"api/@vramework/uws/classes/VrameworkUWSServer","label":"VrameworkUWSServer"}]}],"link":{"type":"doc","id":"api/@vramework/uws/index"}},{"type":"category","label":"@vramework/uws-handler","items":[{"type":"category","label":"Type Aliases","items":[{"type":"doc","id":"api/@vramework/uws-handler/type-aliases/VrameworkuWSHandlerOptions","label":"VrameworkuWSHandlerOptions"}]},{"type":"category","label":"Functions","items":[{"type":"doc","id":"api/@vramework/uws-handler/functions/vrameworkHandler","label":"vrameworkHandler"}]}],"link":{"type":"doc","id":"api/@vramework/uws-handler/index"}}]};
module.exports = typedocSidebar.items;