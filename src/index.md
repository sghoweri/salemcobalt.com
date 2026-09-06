---
layout: layouts/home.njk
title: Salem Cobalt · Principal Frontend Engineer & Design Systems Expert
description: Salem Cobalt is a Boston-based Principal Frontend Engineer with 14+ years building design systems used at scale — component APIs, design token pipelines, theming, web components, accessibility, and AI-assisted development.
templateEngineOverride: njk,md
# tags:
#   - nav
templateClass: u-overflow-hidden
navtitle: Home
# permalink: /
---

<!-- The closing </div> after each include must stay unindented: Markdown absorbs an indented tag into the preceding list's last item. -->

<div class="o-grid o-grid--flex o-grid--matrix">
  <div class="o-grid__item u-width-12/12 u-width-12/12@sm u-width-8/12@md u-width-6/12@lg u-width-6/12@xl t-white">
    <div class="u-p-sm u-pl-md@lg u-pr-md@lg">
      {% include "_resume-center.md" %}
</div>
  </div>

  <div class="o-grid__item u-width-12/12 u-width-12/12@xs u-width-3/12@lg t-gray">
    <div class="u-p-sm">
      {% include "_resume-right.md" %}
</div>
  </div>

  <div class="o-grid__item u-width-12/12 u-width-4/12@md u-width-3/12@lg u-order-neg-1@md u-flex t-black">
    <div class="u-p-sm">
      {% include "_resume-left.md" %}
</div>
  </div>
</div>

<!-- <hr> -->

<!-- ## Blog (Coming Soon) -->
<!-- <h1>Latest 3 Posts</h1> -->

<!-- {% set postslist = collections.posts %} -->
<!-- {% include "postslist.njk" %} -->

<!-- <p>More posts can be found in <a href="{{ '/posts/' | url }}">the archive</a>.</p> -->
