---
layout: post
title: How to set the config.yml file
modified: 2014-12-19
categories: [articles, Howto]
tags: 
  - configure
comments: true
---

The [config.yml file](https://github.com/yulijia/freshman21/blob/master/_config.yml) in the Freshman21 theme includes five parts. 

**First part** is the site info.

```yaml
title: Freshman21 # blog title
tagline: Another Jekyll theme, Freshman twenty-first # blog sub-titile
author: Lijia YU # author name
email: yu@lijiayu.net # author email
description: "Freshman21 is a Jekyll blog theme." # You can edit this line in _config.yml. It will appear in your document head meta and in 
your feed.xml site description
keywords: "Jekyll, theme, Freshman21" # html meta keywords
baseurl: "/freshman21" # the subpath of your site, e.g. /blog
url: "http://yulijia.net/freshman21" # the base hostname & protocol for your site
```

**Part 2**, Personal info and site tools info, twitter, github, aboutme and aboutme_photo only appears on the sidebar aboutme-box, you can <q>Hide</q> in two ways <sup>[[1]](#[1])</sup>:

```yaml
twitter_username: #your twitter handle  
github_username:  #your github account
disqus_shortname: #disqus shortname
favicon:     "images/favicon.ico"
aboutme: Hi, this is Lijia Yu. I made the Freshman21 theme. Please enjoy it. # these are shown on aboutme-box(sidebar).
aboutme_photo: https://i.imgur.com/15BT1.jpg # your personal photo.
```

**Part3**, Site setting:

```yaml
ShowContactInfo: "True" # Personal Info (twitter,github,email) can be seen on aboutme-sidebar, those info only shown where ShowContactInfo == True
default_column: "two" # blog style: two columns, if default_column != "two", you will see a one column blog.
default_locale: "en" # blog sidebar language set, only include: English(en) and Chinese (cn)
```


**Part4**, Blogroll info, only *name* tags can shown on the page.

```yaml
Blogroll:
      - name: Freshman
        href: http://yulijia.net/freshman
        title: Another Jekyll blog theme
      - name: author's website
        href: http://yulijia.net/
        title: Lijia Yu's website
```

**Part5**, Build settings

```yaml
markdown: kramdown
highlighter: pygments # highlight
paginate: 5  # how many post can seen in the main page
```

=====

<ul style='list-style-type:none;'> 
<li id="[1]"> [1], you can set those info at <strong>Part3</strong> or just delete the <q>aboutme.html</q> at <q>sidebar.html</q> in <code>_include</code> folder. </li>
</ul>

```html
<div class="col-sm-2">
  <!--{ % include Aboutme.html % }-->
   { % include Copyright_Notice.html % }
   { % include Recent_Posts.html % }
   { % include Categories.html % }
   { % include Tags.html % }
   { % include Blogroll.html % }
   { % include Archives.html % }
</div>
``` 

