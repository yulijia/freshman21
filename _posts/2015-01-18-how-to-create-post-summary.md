---
published: true
title: How to create post summary
layout: post
summary: This post show us how to create a post summary step by step. 
author: Yu 
category: howto
tags:
- summary
---


We can make a summary of post, and show it in the home page.

### How to only show a part of posts?


**Method 1.** In [index.html](https://github.com/yulijia/freshman21/blob/master/index.html) file, set <code> \{\{ post.content | strip_html | truncatewords: 50 \}\}</code> , produces a more consistent excerpt. It gets the first 50 words and strips any formatting.

This method can automatically create a summary of article. However if the article begin with <q>code</q> or <q>markdown tags</q>, you will find the article css style can not shown on the home page.

**Method 2.** In [index.html](https://github.com/yulijia/freshman21/blob/master/index.html) file, using <code>\{\{ post.summary \}\}</code> to insted of <code>\{\{ post.content \}\}</code>, produces a summary of post. You need add summary in each <q>post</q> file, [example](https://gist.github.com/yulijia/2f865b78a28bfe9e0a81#file-a-article-post-with-summary)

Then you will find all articles summary in the home page.




### How to create a read more button for a post? 


Basically, freshman21 doesn't support "read more" button.

To create a page link(button) is very easy.

Just add 
{% highlight HTML%}
 <p><a href="\{\{ post.url | prepend: site.baseurl \}\}">read more</a></p> 
{% endhighlight %}

after <code>\{\{post.summary\}\}</code>

## The example of post summary at [Gist](https://gist.github.com/yulijia/2f865b78a28bfe9e0a81).

-----

## you can clone the readmore version by using

<code>git clone --branch readmore https://github.com/yulijia/freshman21.git</code>
