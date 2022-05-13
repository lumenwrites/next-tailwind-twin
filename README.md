# Setting up Next.js, Tailwind, Twin.macro, and emotion.

Begin with Next.js+Tailwind+Typescript starter project:

```
npx create-next-app -e with-tailwindcss tailwind-twin
```

Install the packages for Twin.macro and emotion:

```
npm install @emotion/react @emotion/styled @emotion/css @emotion/server
npm install -D twin.macro tailwindcss @emotion/babel-plugin babel-plugin-macros
```

Copy global styles from the [tutorial](https://www.youtube.com/watch?v=do3LSqK929Q).

Copy `.babelrc.js` and `_document.tsx` config from [Twin.macro and Next.js Github Example](https://github.com/ben-rogerson/twin.examples/tree/master/next-emotion-typescript).


## Resources
- [Twin and Next.js YouTube Tutorial](https://www.youtube.com/watch?v=do3LSqK929Q).
- [Twin, Next.js, Emotion post](https://www.elvisduru.com/blog/twin-macro-use-tailwind-and-css-in-js-in-a-nextjs-app).
- [Twin.macro styling docs](https://github.com/ben-rogerson/twin.macro/blob/master/docs/prop-styling-guide.md).
