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
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}{% if post.author %}<b> by {{post.author}}</b>{% endif %}</a>
      {% if post.language %}
        {% if post.language == "en" %}
          <img src="{{ site.baseurl }}/assets/images/flags/gb.svg" alt="English" height="20">
        {% else %}
          <img src="{{ site.baseurl }}/assets/images/flags/it.svg" alt="Italian" height="20"> 
        {% endif %}
      {% endif %}
      {{ post.date | date: "%Y-%m-%d" }}
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
