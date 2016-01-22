---
layout: post
title: Theme structure
modified: 2014-12-19
categories: [articles, Howto]
tags: 
  - structure
comments: true
---


## 1.The structure of freshman21 theme

You can see the simplest way of adding a page is just to add an HTML ( or markdown ) file in the root directory with a suitable name for the page you want to create. For example, aahome.md is the homepage link, about.md is the about page.

All sidebar boxes html files are in the <code>_include</code> directory, their name begin with upper case. You can chose which sidebar boxes appears in the main page on the <q>sidebar.html</q> in the <code>_includes</code> directory. 



```bash
.
|-- a_home.md                 # home page link at navigation bar
|-- b_about.md                # about link at navigation bar
|-- c_archives.md             # archives link at navigation bar
|-- _config.yml
|-- css
|   `-- main.scss
|-- d_categories.md           # categories link at navigation bar 
|-- e_tags.md                 # tags at main navigation bar
|-- feed.xml                  # RSS at main navigation bar
|-- f_guestbook.md            # guest book like at navigation bar
|-- images
|   `-- favicon.ico           # here is your website favicon
|-- _includes
|   |-- Aboutme.html          # right column sidebar content
|   |-- Archives.html         # right column sidebar content
|   |-- Blogroll.html         # right column sidebar content
|   |-- Categories.html       # right column sidebar content
|   |-- comments.html         # right column sidebar content
|   |-- Copyright_Notice.html # right column sidebar content
|   |-- footer.html
|   |-- header.html
|   |-- head.html
|   |-- page_pagination.html
|   |-- post_pagination.html
|   |-- Recent_Posts.html     # right column sidebar content
|   |-- sidebar.html          # you can set you own sidebar content in here
|   `-- Tags.html             # right column sidebar content
|-- index.html
|-- _layouts
|   |-- default.html
|   |-- page.html
|   `-- post.html
|-- LICENSE
|-- _posts
|   |-- 2013-10-10-milu.md
|   |-- 2014-12-13-simple-post.md
|   |-- 2014-12-18-how-to-install.md
|   |-- 2014-12-19-freshman21-structure.md
|   |-- 2014-12-19-how-to-set-the-config-file.md
|   `-- 2015-03-31-readme.md
|-- README.md
`-- _sass
    |-- _base.scss
    |-- _layout.scss
    |-- _syntax-highlighting-native.scss
    `-- _syntax-highlighting.scss
```

## 2.Structure with Named folders containing index HTML files


There is nothing wrong with the above method, however some people like to keep their URLs free from things like filename extensions. To achieve clean URLs for pages using Jekyll, you simply need to create a folder for each top-level page you want, and then place an index.html file in each page’s folder. You can find the more detail at [Jekyll documentation](http://jekyllrb.com/docs/pages/ "Creating pages"). Here is my own blog structure with page-folders to contain each pages.


```bash
.
├── _backup
│   ├── en.tar.gz
│   └── style.css
├── categories                              # => http://yulijia.net/en/categories/ 
│   └── index.md
├── _config.yml
├── css
│   └── main.scss
├── feed                                    # => http://yulijia.net/en/feed/index.xml
│   └── index.xml
├── guestbook                               # => http://yulijia.net/en/guestbook/
│   └── index.md
├── home.md
├── _includes
│   ├── Aboutme.html
│   ├── Archives.html
│   ├── Blogroll.html
│   ├── Categories.html
│   ├── comments.html
│   ├── Copyright_Notice.html
│   ├── footer.html
│   ├── header.html
│   ├── head.html
│   ├── page_pagination.html
│   ├── post_pagination.html
│   ├── Recent_Posts.html
│   ├── sidebar.html
│   └── Tags.html
├── index.html
├── _layouts
│   ├── default.html
│   ├── page.html
│   └── post.html
├── _posts
│   ├── 2011-07-22-hello-world.md
│   ├── 2011-08-06-how-to-calculate-word-frequencies-with-r.md
│   ├── 2011-08-18-should-draco-be-effective-against-virtually-all-viruses.md
│   ├── 2011-10-21-why-viruses-produce-long-dsrna-but-not-endogenous-ones.md
│   ├── 2012-03-22-100-things-bioinformatics-students-should-do-before-graduating.md
│   ├── 2012-10-08-a-new-site.md
│   ├── 2012-10-09-github-pages.md
│   ├── 2012-10-22-a-conference-of-Genomics-and-Epigenomics.md
│   ├── 2012-10-23-CSHL-Asia-interesting-talks-on-genomics-and-epigenomics.md
│   └── 2013-01-30-how-to-get-RefSeq-gene-annotations-from-UCSCdatabase.md
├── README.md
├── _sass
│   ├── _base.scss
│   ├── _layout.scss
│   └── _syntax-highlighting.scss
└── tags
    └── index.md
```

## 3. How to change the highlight style?

This theme's default highlighter is pygments.

To change the highlight style, you should install **pygments**, and generate the css style which you wanted with code 

<code>pygmentize -S default -f html > freshman/_sass/_syntax-highlighting.scss</code>

Please make sure, add <code>.highlight {</code> at the head  and <code>}</code> at the end of file <q>_syntax-highlighting.scss</q>.

See more,

1. [Pygments Supported languages](http://pygments.org/languages/)
2. [Pygments online deme](http://stackoverflow.com/questions/9652490/do-i-need-to-generate-a-css-file-from-pygments-for-my-jekyll-blog-to-enable-col)
