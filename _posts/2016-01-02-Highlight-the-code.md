---
published: ture
layout: post
title: "Highlighting the code"
author: Yu
categories: howto
tags:
- Highlight
- code
---


I use [Pygments](http://pygments.org/) as syntax highlighter for this theme.

To generate a sysntax highligted code, the grammar is:

~~~
## please remove the space between { }and %

{ % highlight R % } 
a=1:10
for(i in a){
print(i)
}
{ % endhighlight % }
~~~

We can see the result as here:

{% highlight R %}
a=1:10
for(i in a){
print(i)
}
{% endhighlight %}


To install pygments, try:

{% highlight Bash %}
pip install pygments

## Ubuntu/Debain 
sudo apt-get install python-pygments
## Fedora
yum/dnf install python-pygments
## Arch
pacman -S python-pygments
{% endhighlight %}

Freshman21 has already include the highlighte style.

If you don't like it. 
Just remove it and generate you own highlight style. 

~~~
## change default to another style name 
pygmentize -f html -a .highlight -S default > ./sass/_syntax-highlighting.scss
~~~

## Update at 20160121

This theme know support using `triple backticks` ``` to write code blocks.

~~~
```r
a=read.table("test.txt")
head(a)
```
~~~

It looks like:

```r
a=read.table("test.txt")
head(a)
```
If you want to use triple backticks, 
Please install **Rouge** by this command  `gem install kramdown rouge`.

Reference: [Syntax Highlighting in Jekyll With Rouge](https://sacha.me/articles/jekyll-rouge/)
