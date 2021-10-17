---
layout: default
title: Blue Bottle
---
## What's new
+ (14.10.2021)
  + You can now write drafts in the _drafts folder
  + Added a _comments_ section in the post template
  + Show post author in this page
+ (15.10.2021)
  + Add podcast page

## Pages
{% for page in site.pages %}
[{{ page.title }}]({{ site.baseurl }}{{ page.url }}) |
{% endfor %}

## Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} {{ post.title }}{% if post.author %}<b> by {{post.author}}</b>{% endif %}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>

## Posts by category

<ul>
{% for category in site.categories %}
<li><h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} {{ post.title }}{% if post.author %}<b> by {{post.author}}</b>{% endif %}</a></li>
    {% endfor %}
  </ul>
{% endfor %}</li>
</ul>
