# nuxt-3.5.2-generate-errors-reproduction

Nuxt 3.5.2 bug reproduction where errors do not throw in SSR generate with dynamic routes.

## Reproduction steps:

Run `npm install`

Run `npm run generate`

4 routes should prerender:
- /200
- /404
- /test/1
- /test/2

The `test/[id].vue` component purposefully throws an error. The error does appear in the generate log.
However, it does not break the operation, which means it sucessfully finishes.

Is this a bug or intended behavior?
I feel like it could cause some applications out there to deploy broken pages by accident.
