---
layout: default
title: Blue Bottle
---
## Pages
{% for page in site.pages %}{% if page.title %}[{{ page.title }}]({{ site.baseurl }}{{ page.url }}){% unless forloop.last %}, {% endunless %}{% endif %}{% endfor %}

## Posts
<details>
  <summary><button class="btn"><h2>Posts</h2></button></summary>

  <ul>
    {% for post in site.posts %}
      <li>
        <a href="{{ site.baseurl }}{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} {{ post.title }}{% if post.author %}<b> by {{post.author}}</b>{% endif %}</a>
        {{ post.excerpt }}
      </li>
    {% endfor %}
  </ul>
</details>

<details>
  <summary><button class="btn"><h2>Posts by category</h2></button></summary>
  
  {% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
    <ul>
      {% for post in category[1] %}
        <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} {{ post.title }}{% if post.author %}<b> by {{ post.author }}</b>{% endif %}</a></li>
      {% endfor %}
    </ul>
  {% endfor %}
</details>
