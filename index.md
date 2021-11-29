---
layout: default
title: Blue Bottle
---
## Pages
{% for page in site.pages %}{% if page.title %}[{{ page.title }}]({{ site.baseurl }}{{ page.url }}){% unless forloop.last %}, {% endunless %}{% endif %}{% endfor %}

<div class="scene scene--card">
  <div class="card">
    <div class="card__face card__face--front"><i class="fas fa-podcast"></i></div>
    <div class="card__face card__face--back">podcasts</div>
  </div>
</div>

## Posts
<ul>
  {% for post in site.posts %}
    <li>
      {{ post.date | date: "%Y-%m-%d" }}
      {% if post.language %}
        {% if post.language == "en" %}
          <img src="{{ site.baseurl }}/assets/images/flags/gb.svg" alt="English" height="15">
        {% else %}
          <img src="{{ site.baseurl }}/assets/images/flags/it.svg" alt="Italian" height="15"> 
        {% endif %}
      {% endif %}
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}{% if post.author %}<b> by {{post.author}}</b>{% endif %}</a>
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
      <li>
        {{ post.date | date: "%Y-%m-%d" }}
        {% if post.language %}
          {% if post.language == "en" %}
            <img src="{{ site.baseurl }}/assets/images/flags/gb.svg" alt="English" height="15">
          {% else %}
            <img src="{{ site.baseurl }}/assets/images/flags/it.svg" alt="Italian" height="15"> 
          {% endif %}
        {% endif %}
        <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}{% if post.author %}<b> by {{post.author}}</b>{% endif %}</a>
        {{ post.excerpt }}
      </li>
      {% endfor %}
    </ul>
  {% endfor %}
</details>
