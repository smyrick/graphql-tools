(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{198:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,h=d["".concat(s,".").concat(b)]||d[b]||m[b]||r;return n?i.a.createElement(h,o(o({ref:t},l),{},{components:n})):i.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(198)),s={id:"stitch-type-merging",title:"Type merging",sidebar_label:"Type merging"},o={unversionedId:"stitch-type-merging",id:"stitch-type-merging",isDocsHomePage:!1,title:"Type merging",description:"Type merging allows partial definitions of a type to exist in any subschema, all of which are merged into one unified type in the gateway schema. When querying for a merged type, the gateway smartly delegates portions of a request to each relevant subschema in dependency order, and then combines all results for the final return.",source:"@site/docs/stitch-type-merging.md",slug:"/stitch-type-merging",permalink:"/docs/stitch-type-merging",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/stitch-type-merging.md",version:"current",sidebar_label:"Type merging",sidebar:"someSidebar",previous:{title:"Combining multiple schemas",permalink:"/docs/stitch-combining-schemas"},next:{title:"Extending stitched schemas",permalink:"/docs/stitch-schema-extensions"}},c=[{value:"Basic example",id:"basic-example",children:[{value:"Types without a database",id:"types-without-a-database",children:[]}]},{value:"Batching",id:"batching",children:[]},{value:"Unidirectional merges",id:"unidirectional-merges",children:[]},{value:"Merged interfaces",id:"merged-interfaces",children:[]},{value:"Merged descriptions",id:"merged-descriptions",children:[]},{value:"Computed fields",id:"computed-fields",children:[]},{value:"Federation services",id:"federation-services",children:[]},{value:"Type resolvers",id:"type-resolvers",children:[{value:"Wrapped resolvers",id:"wrapped-resolvers",children:[]},{value:"Custom resolvers",id:"custom-resolvers",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Type merging allows ",Object(r.b)("em",{parentName:"p"},"partial definitions")," of a type to exist in any subschema, all of which are merged into one unified type in the gateway schema. When querying for a merged type, the gateway smartly delegates portions of a request to each relevant subschema in dependency order, and then combines all results for the final return."),Object(r.b)("p",null,"Type merging is now the preferred method of including GraphQL types across subschemas, replacing the need for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stitch-schema-extensions"}),"schema extensions")," (though does not preclude their use). To migrate from schema extensions, simply enable type merging and then start replacing extensions one by one with merges."),Object(r.b)("h2",{id:"basic-example"},"Basic example"),Object(r.b)("p",null,"Type merging allows each subschema to provide portions of a type that it posesses data for. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { makeExecutableSchema } from '@graphql-tools/schema';\nimport { addMocksToSchema } from '@graphql-tools/mock';\n\nlet postsSchema = makeExecutableSchema({\n  typeDefs: `\n    type Post {\n      id: ID!\n      message: String!\n      author: User!\n    }\n\n    type User {\n      id: ID!\n      posts: [Post]!\n    }\n\n    type Query {\n      postById(id: ID!): Post\n      userById(id: ID!): User\n    }\n  `\n});\n\nlet usersSchema = makeExecutableSchema({\n  typeDefs: `\n    type User {\n      id: ID!\n      email: String!\n    }\n\n    type Query {\n      userById(id: ID!): User\n    }\n  `\n});\n\n// just mock the schemas for now to make them return dummy data\npostsSchema = addMocksToSchema({ schema: postsSchema });\nusersSchema = addMocksToSchema({ schema: usersSchema });\n")),Object(r.b)("p",null,"Note that both services define a ",Object(r.b)("em",{parentName:"p"},"different")," ",Object(r.b)("inlineCode",{parentName:"p"},"User")," type. While the users service manages information about user accounts, the posts service simply provides posts associated with a user ID. Now we just have to configure the ",Object(r.b)("inlineCode",{parentName:"p"},"User")," type to be merged. Type merging needs a query in each schema to provide its version of a merged type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { stitchSchemas } from '@graphql-tools/stitch';\n\nconst gatewaySchema = stitchSchemas({\n  subschemas: [\n    {\n      schema: postsSchema,\n      merge: {\n        User: {\n          fieldName: 'userById',\n          selectionSet: '{ id }',\n          args: (partialUser) => ({ id: partialUser.id }),\n        }\n      }\n    },\n    {\n      schema: usersSchema,\n      merge: {\n        User: {\n          fieldName: 'userById',\n          selectionSet: '{ id }',\n          args: (partialUser) => ({ id: partialUser.id }),\n        }\n      }\n    },\n  ],\n  mergeTypes: true // << optional in v7\n});\n")),Object(r.b)("p",null,"That's it! Under the subschema config ",Object(r.b)("inlineCode",{parentName:"p"},"merge")," option, each merged type provides a query for accessing its respective partial type (services without an expression of the type may omit this). The query settings are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fieldName")," specifies a root query used to request the local type."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"selectionSet")," specifies one or more key fields required from other services to perform the query. Query planning will automatically resolve these fields from other schemas in dependency order."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"args")," formats the returned selection set data into query arguments.")),Object(r.b)("p",null,"This configuration allows type merging to smartly resolve a complete ",Object(r.b)("inlineCode",{parentName:"p"},"User"),", regardless of which service provides the initial representation of it. We now have a combined ",Object(r.b)("inlineCode",{parentName:"p"},"User")," type in the gateway schema:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type User {\n  id: ID!\n  email: String!\n  posts: [Post]!\n}\n")),Object(r.b)("p",null,"Note that ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stitch-combining-schemas#adding-transforms"}),"subschema transforms")," are applied prior to merging. That means transformed types will merge based on their ",Object(r.b)("em",{parentName:"p"},"transformed")," names within the combined gateway schema."),Object(r.b)("h3",{id:"types-without-a-database"},"Types without a database"),Object(r.b)("p",null,"It's logical to assume that each ",Object(r.b)("inlineCode",{parentName:"p"},"userById")," query has a backing database table used to lookup the requested user ID. However, this is frequently not the case! Here's a simple example that demonstrates how ",Object(r.b)("inlineCode",{parentName:"p"},"User.posts")," can be resolved without the posts service having any formal database concept of a User:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const postsData = [\n  { id: '1', message: 'Hello', authorId: '7' },\n  { id: '2', message: 'Goodbye', authorId: '5' },\n];\n\nconst postsSchema = makeExecutableSchema({\n  typeDefs: `\n    type Post {\n      id: ID!\n      message: String!\n      author: User!\n    }\n\n    type User {\n      id: ID!\n      posts: [Post]!\n    }\n\n    type Query {\n      postById(id: ID!): Post\n      userById(id: ID!): User\n    }\n  `,\n  resolvers: {\n    Query: {\n      postById: (root, { id }) => postsData.find(post => post.id === id),\n      userById: (root, { id }) => ({ id }),\n    },\n    User: {\n      posts(user) {\n        return postsData.filter(post => post.authorId === user.id);\n      }\n    }\n  }\n});\n")),Object(r.b)("p",null,"In this example, ",Object(r.b)("inlineCode",{parentName:"p"},"userById")," simply converts the submitted ID into stub record that gets resolved as the local ",Object(r.b)("inlineCode",{parentName:"p"},"User")," type."),Object(r.b)("h2",{id:"batching"},"Batching"),Object(r.b)("p",null,"The basic example above queries for a single record each time it performs a merge, which becomes suboptimal when merging arrays of objects. Instead, we should batch many record requests together using array queries that may fetch many partials at once:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"usersByIds(ids: [ID!]!): [User]!\n")),Object(r.b)("p",null,"Once each service provides an array query for the merged type, batching may be enabled by adding a ",Object(r.b)("inlineCode",{parentName:"p"},"key")," method that picks a key from each partial record. The ",Object(r.b)("inlineCode",{parentName:"p"},"argsFromKeys")," method then transforms the list of picked keys into query arguments:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const gatewaySchema = stitchSchemas({\n  subschemas: [\n    {\n      schema: postsSchema,\n      merge: {\n        User: {\n          fieldName: 'usersByIds',\n          selectionSet: '{ id }',\n          key: ({ id }) => id,\n          argsFromKeys: (ids) => ({ ids }),\n        }\n      }\n    },\n    {\n      schema: usersSchema,\n      merge: {\n        User: {\n          fieldName: 'usersByIds',\n          selectionSet: '{ id }',\n          key: ({ id }) => id,\n          argsFromKeys: (ids) => ({ ids }),\n        }\n      }\n    },\n  ]\n});\n")),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"valuesFromResults")," method may also be provided to map the raw query result into the batched set. With this array optimization in place, we'll now only perform one query per merged field. However, multiple merged fields will still perform a query each. To optimize this further, we can now enable ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/prisma-labs/http-link-dataloader#even-better-batching"}),"query-level batching")," (as of GraphQL Tools v6.2):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  schema: postsSchema,\n  batch: true,\n  batchingOptions: { ... },\n  merge: {\n    User: {\n      fieldName: 'usersByIds',\n      selectionSet: '{ id }',\n      key: ({ id }) => id,\n      argsFromKeys: (ids) => ({ ids }),\n    }\n  }\n}\n")),Object(r.b)("p",null,"Query batching will collect all queries made during an execution cycle and combine them into a single GraphQL operation to send to the subschema. This consolidates networking with remote services, and improves database batching within the underlying service implementation. You may customize query batching behavior with ",Object(r.b)("inlineCode",{parentName:"p"},"batchingOptions"),"\u2014","this is particularly useful for providing ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/graphql/dataloader#new-dataloaderbatchloadfn--options"}),"DataLoader options"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"batchingOptions?: {\n  dataLoaderOptions?: DataLoader.Options<K, V, C>;\n  extensionsReducer?: (mergedExtensions: Record<string, any>, executionParams: ExecutionParams) => Record<string, any>;\n}\n")),Object(r.b)("p",null,"Using both array batching and query batching together is recommended for best performance."),Object(r.b)("h2",{id:"unidirectional-merges"},"Unidirectional merges"),Object(r.b)("p",null,"Type merging allows services to provide the bare minimum of fields they possess data for","\u2014","and this is frequently nothing but an ID. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let postsSchema = makeExecutableSchema({\n  typeDefs: `\n    type Post {\n      id: ID!\n      message: String!\n      author: User!\n    }\n\n    # ID-only stub...\n    type User {\n      id: ID!\n    }\n\n    type Query {\n      postById(id: ID!): Post\n    }\n  `\n});\n\nlet usersSchema = makeExecutableSchema({\n  typeDefs: `\n    type User {\n      id: ID!\n      email: String!\n    }\n\n    type Query {\n      usersByIds(ids: [ID!]!): [User]!\n    }\n  `\n});\n")),Object(r.b)("p",null,"When a stub type like the one above includes no other data beyond a key shared across services, then the type may be considered ",Object(r.b)("em",{parentName:"p"},"unidirectional")," to the service","\u2014","that is, the service holds no unique data that would require an inbound request to fetch it. In these cases, ",Object(r.b)("inlineCode",{parentName:"p"},"merge")," config may be omitted entirely for the stub type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const gatewaySchema = stitchSchemas({\n  subschemas: [\n    {\n      schema: postsSchema,\n    },\n    {\n      schema: usersSchema,\n      merge: {\n        User: {\n          selectionSet: '{ id }',\n          fieldName: 'usersByIds',\n          key: ({ id }) => id,\n          argsFromKeys: (ids) => ({ ids }),\n        }\n      }\n    },\n  ]\n});\n")),Object(r.b)("p",null,"Stubbed types are quick and easy to setup and effectively work as automatic ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stitch-schema-extensions"}),"schema extensions")," (in fact, you might not need extensions!). A stubbed type may always be expanded with additional service-specific fields (see the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#basic-example"}),"basic example"),"), however it requires a query in ",Object(r.b)("inlineCode",{parentName:"p"},"merge")," config as soon as it offers unique data."),Object(r.b)("h2",{id:"merged-interfaces"},"Merged interfaces"),Object(r.b)("p",null,"Type merging will automatically consolidate interfaces of the same name across subschemas, allowing each subschema to contribute fields. This is extremely useful when the complete interface of fields is not available in all subschemas","\u2014","each subschema simply provides the minimum set of fields that it contains:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const postsSchema = makeExecutableSchema({\n  typeDefs: `\n    interface HomepageSlot {\n      id: ID!\n      title: String!\n      url: URL!\n    }\n\n    type Post implements HomepageSlot {\n      id: ID!\n      title: String!\n      url: URL!\n    }\n  `\n});\n\nconst layoutsSchema = makeExecutableSchema({\n  typeDefs: `\n    interface HomepageSlot {\n      id: ID!\n    }\n\n    type Post implements HomepageSlot {\n      id: ID!\n    }\n\n    type Section implements HomepageSlot {\n      id: ID!\n      title: String!\n      url: URL!\n      posts: [Post!]!\n    }\n\n    type Homepage {\n      slots: [HomepageSlot]!\n    }\n  `\n});\n")),Object(r.b)("p",null,"In the above, both ",Object(r.b)("inlineCode",{parentName:"p"},"Post")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Section")," will have a common interface of ",Object(r.b)("inlineCode",{parentName:"p"},"{ id title url }")," in the gateway schema. The difference in fields between the gateway schema and the layouts subschema will be translated automatically."),Object(r.b)("h2",{id:"merged-descriptions"},"Merged descriptions"),Object(r.b)("p",null,"The default description (docstring) of each merged type and field comes from the final definition encountered in the subschemas array. You may customize this by adding selection logic into ",Object(r.b)("inlineCode",{parentName:"p"},"typeMergingOptions"),". For example, these handlers will select the first non-blank description for each type and field:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const gatewaySchema = stitchSchemas({\n  subschemas: [...],\n  typeMergingOptions: {\n    typeDescriptionsMerger(candidates) {\n      const candidate = candidates.find(({ type }) => !!type.description) || candidates.pop();\n      return candidate.type.description;\n    },\n    fieldConfigMerger(candidates) {\n      const configs = candidates.map(c => c.fieldConfig);\n      return configs.find(({ description }) => !!description) || configs.pop();\n    },\n    inputFieldConfigMerger(candidates) {\n      const configs = candidates.map(c => c.inputFieldConfig);\n      return configs.find(({ description }) => !!description) || configs.pop();\n    }\n  },\n});\n")),Object(r.b)("h2",{id:"computed-fields"},"Computed fields"),Object(r.b)("p",null,"APIs may leverage the gateway layer to transport field dependencies from one subservice to another while resolving data. This is useful when a field in one subschema requires one or more fields from other subschemas to be resolved, as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/apollo-server/federation/federation-spec/#requires"}),"federation spec"),". For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const productsSchema = makeExecutableSchema({\n  typeDefs: `\n    type Product {\n      id: ID!\n      price: Float!\n      weight: Int!\n    }\n\n    type Query {\n      productsByIds(ids: [ID!]!): [Product]!\n    }\n  `,\n  resolvers: { ... },\n});\n\nconst storefrontsSchema = makeExecutableSchema({\n  typeDefs: `\n    directive @computed(selectionSet: String!) on FIELD_DEFINITION\n\n    type Storefront {\n      id: ID!\n      availableProducts: [Product]!\n    }\n\n    type Product {\n      id: ID!\n      shippingEstimate: Float! @computed(selectionSet: \"{ price weight }\")\n      deliveryService: String! @computed(selectionSet: \"{ weight }\")\n    }\n\n    input ProductInput {\n      id: ID!\n      price: Float\n      weight: Int\n    }\n\n    type Query {\n      storefront(id: ID!): Storefront\n      _products(representations: [ProductInput!]!): [Product]!\n    }\n  `,\n  resolvers: {\n    Query: {\n      storefront: (root, { id }) => ({ id, availableProducts: [{ id: '23' }] }),\n      _products: (root, { representations }) => representations,\n    },\n    Product: {\n      shippingEstimate: (rep) => rep.price > 50 ? 0 : rep.weight / 2,\n      deliveryService: (rep) => rep.weight > 50 ? 'FREIGHT' : 'POSTAL',\n    }\n  }\n});\n\nconst gatewaySchema = stitchSchemas({\n  subschemas: [{\n    schema: productsSchema,\n    merge: {\n      Product: {\n        selectionSet: '{ id }',\n        fieldName: 'productsByIds',\n        key: ({ id }) => id,\n        args: (ids) => ({ ids }),\n      }\n    }\n  }, {\n    schema: storefrontsSchema,\n    merge: {\n      Product: {\n        selectionSet: '{ id }',\n        fieldName: '_products',\n        key: ({ id, price, weight }) => ({ id, price, weight }),\n        argsFromKeys: (representations) => ({ representations }),\n      }\n    }\n  }]\n});\n")),Object(r.b)("p",null,"In the above, the ",Object(r.b)("inlineCode",{parentName:"p"},"shippingEstimate")," and ",Object(r.b)("inlineCode",{parentName:"p"},"deliveryService")," fields are marked with ",Object(r.b)("inlineCode",{parentName:"p"},"@computed")," directives, which specify additional ",Object(r.b)("em",{parentName:"p"},"field-level dependencies")," required to resolve these specific fields beyond the ",Object(r.b)("inlineCode",{parentName:"p"},"Product")," type's base selection set. When a computed field appears in a query, the gateway will collect that field's dependencies from other subschemas so they may be sent as input with the request for the computed field(s)."),Object(r.b)("p",null,"To facilitate this dependency pattern, computed and non-computed fields of a type in the same subservice are automatically split apart into separate schemas. This assures that computed fields are always requested directly by the gateway with their dependencies provided. For example, ",Object(r.b)("inlineCode",{parentName:"p"},"Storefront.availableProducts")," may originate Product records within the storefronts service, but these records may not immedaitely compute ",Object(r.b)("inlineCode",{parentName:"p"},"shippingEstimate")," because they do not yet have their external dependencies. Instead, the gateway will need to return to the storefronts service with a dedicated request for computed fields that includes their dependencies as input. All told, types that combine computed and non-computed fields in a single subschema may require an extra resolution step by the gateway. You may enable ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#batching"}),"query batching")," to consolidate these requests whenever possible."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"@computed")," SDL directive is a convenience syntax for static configuration that can be written as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  schema: storefrontsSchema,\n  merge: {\n    Product: {\n      selectionSet: '{ id }',\n      computedFields: {\n        shippingEstimate: { selectionSet: '{ price weight }' },\n        deliveryService: { selectionSet: '{ weight }' },\n      },\n      fieldName: '_products',\n      key: ({ id, price, weight }) => ({ id, price, weight }),\n      argsFromKeys: (representations) => ({ representations }),\n    }\n  }\n}\n")),Object(r.b)("p",null,"The main disadvantage of computed fields is that they create fields within a subservice that cannot be resolved without the gateway. Tolerance for this inconsistency is largely dependent on your own service architecture. An imperfect solution is to deprecate all computed fields within a subschema, and then normalize their behavior in the gateway schema using the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/wrap/tests/transformRemoveObjectFieldDeprecations.test.ts"}),Object(r.b)("inlineCode",{parentName:"a"},"RemoveObjectFieldDeprecations"))," transform."),Object(r.b)("h2",{id:"federation-services"},"Federation services"),Object(r.b)("p",null,"If you're familiar with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/"}),"Apollo Federation"),", then you may notice that the above pattern of computed fields looks similar to the ",Object(r.b)("inlineCode",{parentName:"p"},"_entities")," service design of the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/apollo-server/federation/federation-spec/"}),"Apollo Federation specification"),"."),Object(r.b)("p",null,"While type merging offers ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#unidirectional-merges"}),"simpler patterns")," with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#batching"}),"comparable performance"),", it can also interface with Apollo Federation services when needed by sending appropraitely formatted representations to the ",Object(r.b)("inlineCode",{parentName:"p"},"_entities")," query:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  schema: storefrontsSchema,\n  merge: {\n    Product: {\n      selectionSet: '{ id price weight }',\n      fieldName: '_entities',\n      key: ({ id, price, weight }) => ({ __typename: 'Product', id, price, weight }),\n      argsFromKeys: (representations) => ({ representations }),\n    }\n  }\n}\n")),Object(r.b)("p",null,"Type merging generally maps to Federation concepts as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@key"),": type merging's closest analog is the type-level ",Object(r.b)("inlineCode",{parentName:"li"},"selectionSet"),' specified in merged type configuration. Unlike Federation though, merging is fully decentralized with no concept of an "origin" service.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@requires"),": directly comparable to type merging's ",Object(r.b)("inlineCode",{parentName:"li"},"@computed")," directive. However, merging is decentralized and may resolve required fields from any number of services."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@external"),": type merging implicitly expects types in each service to only implement the fields they provide."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@provides"),": type merging implicitly handles multiple services that implement the same fields, and automatically selects as many requested fields as possible from as few services as possible. Available sub-objects within a visited service are automatically selected.")),Object(r.b)("h2",{id:"type-resolvers"},"Type resolvers"),Object(r.b)("p",null,"Similar to how GraphQL objects implement field resolvers, merging implements type-level resolvers for fetching and merging partial types. While these resolvers are setup automatically, advanced use cases may want to customize some or all of their default behavior. Merged type resolver methods are of type ",Object(r.b)("inlineCode",{parentName:"p"},"MergedTypeResolver"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export type MergedTypeResolver = (\n  originalObject: any, // initial object being merged onto\n  context: Record<string, any>, // gateway request context\n  info: GraphQLResolveInfo, // gateway request info\n  subschema: SubschemaConfig, // target subschema configuration\n  selectionSet: SelectionSetNode, // target subschema selection\n  key?: any // the batch key being requested\n) => any;\n")),Object(r.b)("h3",{id:"wrapped-resolvers"},"Wrapped resolvers"),Object(r.b)("p",null,"Frequently we want to augment type resolution without fundamentally changing its behavior. This can be done by wrapping a default type resolver in a custom implementation. For example, adding ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/msiebuhr/node-statsd-client"}),"statsd instrumentation")," might look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createMergedTypeResolver, stitchSchemas } from '@graphql-tools/stitch';\nimport { SDC } from 'statsd-client';\n\nconst statsd = new SDC({ ... });\n\nfunction createInstrumentedMergedTypeResolver(resolverOptions) {\n  const defaultResolve = createMergedTypeResolver(resolverOptions);\n  return async (obj, ctx, info, cfg, sel, key) => {\n    const startTime = process.hrtime();\n    try {\n      return await defaultResolve(obj, ctx, info, cfg, sel, key);\n    } finally {\n      statsd.timing(info.path.join('.'), process.hrtime(startTime));\n    }\n  };\n}\n\nconst schema = stitchSchemas({\n  subschemas: [{\n    schema: widgetsSchema,\n    merge: {\n      Widget: {\n        selectionSet: '{ id }',\n        key: ({ id }) => id,\n        resolve: createInstrumentedMergedTypeResolver({\n          fieldName: 'widgets',\n          argsFromKeys: (ids) => ({ ids }),\n        }),\n      }\n    }\n  }]\n});\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"createMergedTypeResolver")," helper accepts a subset of options that would otherwise be included directly on merged type configuration: ",Object(r.b)("inlineCode",{parentName:"p"},"fieldName"),", ",Object(r.b)("inlineCode",{parentName:"p"},"args"),", ",Object(r.b)("inlineCode",{parentName:"p"},"argsFromKeys"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"valuesFromResults"),". A default ",Object(r.b)("inlineCode",{parentName:"p"},"MergedTypeResolver")," function is returned, and may be wrapped with additional behavior and then assigned as a custom ",Object(r.b)("inlineCode",{parentName:"p"},"resolve")," option for the type."),Object(r.b)("h3",{id:"custom-resolvers"},"Custom resolvers"),Object(r.b)("p",null,"Alternatively, you may also provide completely custom resolver implementations for fetching types in non-standard ways. For example, fetching a merged object from a REST API might look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  schema: widgetsSchema,\n  merge: {\n    Widget: {\n      selectionSet: '{ id }',\n      resolve: async (originalObject) => {\n        const mergeObject = await fetchViaREST(originalObject.id);\n        return { ...originalObject, ...mergeObject };\n      }\n    }\n  }\n}\n")),Object(r.b)("p",null,"When incorporating plain objects, always extend the provided ",Object(r.b)("inlineCode",{parentName:"p"},"originalObject")," to retain internal merge configuration. You may also return direct results from calling ",Object(r.b)("inlineCode",{parentName:"p"},"delegateToSchema")," and ",Object(r.b)("inlineCode",{parentName:"p"},"batchDelegateToSchema")," (see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stitch-schema-extensions#basic-example"}),"schema extensions"),"), however","\u2014","always provide these delegation methods with a ",Object(r.b)("inlineCode",{parentName:"p"},"skipTypeMerging: true")," option to prevent infinite recursion."))}p.isMDXComponent=!0}}]);