# AngularJS Animal Friends clone
A less-featured clone of [`animal-friends`](https://github.com/j-d-b/animal-friends), built to practice [AngularJS](https://github.com/angular/angular.js).

## Usage
Install the dependency packages.
```
npm install
```

Bundle and transform the input files (with webpack), start & open the development server, and serve the output.
```
npm run develop
```

### Production
Bundle and transform `src` files with webpack mode set to production. Outputs to `/dist`, which can then by served.
```
npm run build
```

## Inspiration
I had to work on an AngularJS project, so I decided to make a little clone of my `animal-friends` app to get a sense of it.

Most AngularJS resources don't show usage with ES6+, modern build tools (e.g. [webpack](https://github.com/webpack/webpack)), or even one-way data flow & component-based development.

I'm coming from a React background and going to AngularJS; reading the official documentation is like stepping back in time. I thought it would be interesting to apply my "modern web" (note: late-2018) knowledge and tools that didn't exist in the height of AngularJS to this older framework.

## Todo
* Arrow function usage and `this` clarity
