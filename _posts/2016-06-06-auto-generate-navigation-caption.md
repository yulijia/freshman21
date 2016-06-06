---
published: ture
layout: post
title: "auto generate navigation caption"
author: Yu
categories: news
tags:
- navigation caption
---

Thanks all the users of this theme. You support is the driving force for my coding.

Today I fix a bug about navigation caption.

In the old theme version, I didn't know how to change the navigation captions automatically when setting different language.

I using the code below to change the page title and navigation caption with site local language.

{% raw %}
```handlebars
{{ page.title | replace: page.title, site.locales[site.default_locale].[page.title] }} 
```
{% endraw %}

After using those code, if you add a new page to the blog, please make sure add a locale caption tag in `_config.yml` file.

If you want to using variables inside YAML front matter block, you can check [this aritcle](http://acegik.net/blog/ruby/jekyll/plugins/howto-nest-liquid-template-variables-inside-yaml-front-matter-block.html "HOWTO NEST LIQUID TEMPLATE VARIABLES INSIDE YAML FRONT MATTER BLOCK") posted by [pnhung177](https://github.com/pnhung177).

It is a great plugin to do the same thing as my code when you need to adjust navigation caption.

```ruby
# file: _plugins/expand_nested_variable_filter.rb

module Jekyll
  module ExpandNestedVariableFilter
    def flatify(input)
      Liquid::Template.parse(input).render(@context)
    end
  end
end

Liquid::Template.register_filter(Jekyll::ExpandNestedVariableFilter)
```

In the YAML front matter, you can insert variable.

{% raw %}
```handlebars
---
layout: post
caption: "Introduction to {{ site.title }}"
---
```
{% endraw %}

Now we can using set `en`, `cn` or `jp` to switch blog language in the `_config.yml` file. And all the navigation caption is automatically changed.


### English

![English](http://i.imgur.com/uETllD5.png)

### Chinese

![Chinese](http://i.imgur.com/grdf8Ph.png)

### Japanese

![Japanese](http://i.imgur.com/yRaeWVH.png)

