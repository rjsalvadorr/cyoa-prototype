# Vuepress quick start
## Overview

Designed for getting a blog-style project off the ground quickly, this project starts with
a basic blog-style page, with content sorted in different categories.

For more info, check out the [GitHub repo](https://github.com/rjsalvadorr/vuepress-starter)

## Usage

#### 1. Install

`npm i -g vuepress`  
or  
`yarn global add vuepress`

#### 2. Dev

`npm start`  
or  
`yarn start`

#### 3. Deploy

`npm run build`  
or  
`yarn build`

Read more about Vuepress here: https://vuepress.vuejs.org/guide/

## Post Thumbnails

In order to work, these have to go in `.vuepress/public/images`.There's a
naming convention in place: `thumb-<page-name>.jpg`. So a page with content
in `/category1/sample-title/README.md` would have a corresponding image in
`/.vuepress/public/images/thumb-sample-title.jpg`

## Page excerpts

See the [VuePress docs](https://vuepress.vuejs.org/guide/custom-themes.html#content-excerpt) for more info.

## Fonts

The site uses [Google Fonts](https://fonts.google.com/about) to load fonts. See the stylesheet reference in the theme config (`.vuepress/config.js`)

## Front-matter data

Added on top of every markdown document in the site. Looks like this:

```
---
title: Writing words is neat
subtitle:
date: 2019-03-24 13:35:57
type: post
category: deep-thoughts
---

# Words words words

Bacon ipsum dolor amet in est pork belly ex excepteur.
Ipsum cow leberkas adipisicing, in picanha strip steak
burgdoggen commodo ullamco et sausage brisket nulla cupim.
```

This site has been configured to use these settings to build the page flow
for various categories and pages.

#### title

Title of the post/category

#### subtitle

Subtitle of post. Appears in the post list of its category page.

#### date

Date for post/category. Appears in the post list of its category page.
Also used for sorting.  
Expected values: date/time, formatted like `2019-03-26 13:35:57` or simply `2019-04-23` (YYYY-MM-DD)

#### type

Type of the object.  
Expected values: `post | category | link`

#### category

Category of this object. This can be customized for the categories in the page.
For example, a portfolio page could have categories like:  
`software | art | contact`.
