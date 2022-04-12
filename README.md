# My Next.js + Tailwind CSS Starter

This is the setup that I like when starting new Next.js projects with Tailwind.

I use this most often when setting up a new Next **JavaScript** project - with TailwindCSS styling.

I have noticed recently that the official TailwindCSS example from Next.js used TypeScript as the default when generating a new project.

This also contains the Comeau custom reset that I use - and this repo includes my own custom **new-component** npm package that I forked from Josh Comeau. I have this version of **new-component** installed globally on my machine.

I over ride the reset that comes with Tailwind in `next.config.js` file.

I like to keep my `components` folder on the same level as my `pages` folder.

All of this setup is very easily edited - when I begin my project.

The following is my command to get a new TailwindCSS / Next.js project started:

`yarn create next-app -e https://github.com/papadavis47/my-tailwind-nextjs-starter <title of project>`
