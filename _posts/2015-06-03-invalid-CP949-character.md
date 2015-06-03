---
published: ture
layout: post
title: "Error: invalid CP949 character"
author: Yu
categories: articles
tags:
- character
---

In **_layout.scss** file, < q > tag is used as a quotation mark. When apply this tag, it will display as "『』" on the page. One user report that on Windows it may cause a Error "invalid CPC949 character" when generate the site. A fast way to avoid this problem, please delete the lines of < q > tags in the **_layout.scss** file.


~~~
### DELETE THE CODE BELOW IN _layout.scss FILE###
/**
 * New style for quotation.
 */
q:before {
content: '『';
color: #DD1144;
       font-weight:bold;
}
q:after {
content:'』';
color: #DD1144;
       font-weight:bold;
  }
~~~
