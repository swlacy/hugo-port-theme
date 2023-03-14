---
draft: true

author: '{{ $.Site.Params.authorName }}'
title: '{{ replace .Name "-" " " | title }}'
description: ''
tags: ['']
date: '{{ .Date }}'
lastmod: '{{ .Date }}'

cover:
    path: '/media/'
    alt: ''
    caption: 'Name (Publisher, YYYY)'

show:
    meta: true
    contents: true
    footnote: true
---

**Content section**

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
