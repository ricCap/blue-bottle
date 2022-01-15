---
layout: default
title: Blue Bottle
---
## Pages
[]({{ site.baseurl }}{{ page.url }}){% unless forloop.last %}, {% endunless %}

<div class="row">
  {% for page in site.pages %}
  {% if page.title %}
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <i class="fas fa-3x {{ page.fa-icon }}"></i>
      </div>
      <div class="flip-card-back">
        <p>{{ page.title }}</p>
      </div>
    </div>
  </div>
  {% endif %}{% endfor %}
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
