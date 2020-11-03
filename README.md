---

# Svelte PWA

This is a Progressive Web App (PWA) template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/rednibcoding/svelte-pwa-template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit rednibcoding/svelte-pwa-template my-svelte-pwa
cd my-svelte-pwa
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd my-svelte-pwa
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

```
  "scripts": {
    "build": "rollup -c",
    "dev": "rollup -c -w",
    "start": "sirv public --host 0.0.0.0"
  },
```

Now typing either _npm run dev_ or _npm run start_ command, your svelte app will be opened on local network and thanks to that,
you will be able to see your project state on each device connected to your network

```
rollup v2.28.1
bundles src/main.js → public\build\bundle.js...
LiveReload enabled

  Your application is ready~!

  - Local:      http://0.0.0.0:5000       
  - Network:    http://10.10.10.100:5000   

────────────────── LOGS ──────────────────
```

## PWA Configuration

- The `service-worker.js` and `manifest.json` files are in the `public` folder.
- You should update the icons in `/public/images/icons`
- For an offline experience edit the `/public/offline.html` file.
- This PWA is installable, the `/public/scripts/install.js` file has the install configuration.
    Note: If you don't want to make the app installable you can remove the script from the `index.html` file in the `public` folder.
    
For more info on PWA's, look at this [tutorial](https://codelabs.developers.google.com/codelabs/your-first-pwapp)


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Determine between production and development build during runtime

In `rollup.config.js` there is a flag called `isProduction`. This variable gets replaced via @rollup/plugin-replace by either `false`
when in development build _(when started with 'npm run dev')_ or `true` when in production build _(when started with 'npm run build'_.
This way, you can check on `isProduction` in your code during runtime, to determine whether you are in dev- or production build.

Example: to log the build mode to the console
```
// Log build mode
console.log( "BUILD: " + (isProduction ? "Production" : "Development") );
```