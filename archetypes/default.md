---
draft: true

author: {{ $.Site.Params.author }}
title: '{{ replace .Name "-" " " | title }}'
description: 'One sentence'
tags: []
date: {{ .Date }}
lastmod: {{ .Date }}

cover:
    path: '/media/'
    alt: 'Cover image'
    caption: 'Name (Publisher, YYYY)'

show:
    meta: true
    contents: true
    footnote: true
    sidebar: true
---

**Content goes here.**

## h2
Text.

### h3
Text.

 - List
     - Item
     - Item
         - Item
     - Item

```python
# Python codeblock
def tester():
    print(1 + 3)
```

This is `inline code` in text.
