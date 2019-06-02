# vue-reddit

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

1. Set up store modules
2. Set name-spaced helpers
   https://vuex.vuejs.org/guide/modules.html
3. Set up google assistant sdk to sign up with google
   https://developers.google.com/assistant/sdk/guides/library/python/embed/config-dev-project-and-account
4. If you want Vue to run others JS files, you have to import them in main.js
5. Call actions from module:
   this.\$store.dispatch("subreddits/init");
   mapActions("subreddits", ["init"])
6. To get data from computed, the computed has to return data
