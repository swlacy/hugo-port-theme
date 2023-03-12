---
draft: true

author: '{{ $.Site.Params.author }}'
title: '{{ replace .Name "-" " " | title }}'
description: 'One sentence/line description'
tags: ['tag1', 'tag2']
date: '{{ .Date }}'
lastmod: '{{ .Date }}'

cover:
    path: '/media/'
    alt: 'Cover image'
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
