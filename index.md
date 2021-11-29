---
layout: default
title: Blue Bottle
---
## Pages
{% for page in site.pages %}{% if page.title %}[{{ page.title }}]({{ site.baseurl }}{{ page.url }}){% unless forloop.last %}, {% endunless %}{% endif %}{% endfor %}

## Posts
<ul>
  {% for post in site.posts %}
    <li>
      {{ if post.language }}
        {{ if post.language == "en" }}
          <img src="{{ site.baseurl }}/assets/images/flags/gb.svg" alt="English" width="40" height="40">
        {{ else }}
          <img src="{{ site.baseurl }}/assets/images/flags/it.svg" alt="Italian" width="40" height="40"> 
        {{ endif}}
      {{endif}}
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} {{ post.title }}{% if post.author %}<b> by {{post.author}}</b>{% endif %}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>

<details>
  <summary><h2>Posts by category (click to expand)</h2></summary>
  
  {% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
    <ul>
      {% for post in category[1] %}
        <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} {{ post.title }}{% if post.author %}<b> by {{ post.author }}</b>{% endif %}</a></li>
      {% endfor %}
    </ul>
  {% endfor %}
</details>
