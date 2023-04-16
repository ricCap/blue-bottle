---
layout: default
title: Blue Bottle
fa-icon: fa-home
---

{% for page in site.pages %}
{% assign remainder = forloop.index | modulo: 3 %}
{% if remainder == 1 %}
<div class="row">
{% endif %}
{% if page.title %}
  <div class="flip-card">
    <div class="flip-card-inner" onclick="location.href='{{ site.baseurl }}{{ page.url }}'">
        <div class="flip-card-front">
          <i class="fas fa-3x {{ page.fa-icon }}"></i>
        </div>
        <div class="flip-card-back">{{ page.title }}</div>
    </div>
  </div>
{% endif %}
{% if remainder == 0 or forloop.last %}
</div>
{% endif %}
{% endfor %}

## Playlists
+ [Spotify - podcasts](https://open.spotify.com/playlist/6c2T59Uao125c7A1sCOMxd?si=6TWRJzcLSymLw2DrV-pG0w&dd=1&nd=1)
+ [Youtube](https://youtube.com/playlist?list=PLo2EPO-Ffz059DRWYaHbtC959AwwqFzOW)

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
