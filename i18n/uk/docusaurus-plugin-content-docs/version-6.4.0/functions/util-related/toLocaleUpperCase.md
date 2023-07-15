---
title: '$toLocaleUpperCase'
description: '$toLocaleUpperCase will change the first character of every word to uppercase.'
id: toLocaleUpperCase
---

`$toLocaleUpperCase` will change the first character of every word to uppercase.

## Використання

```php
$toLocaleUpperCase[text]
```

## Параметри

| Поле | Тип   | Опис                                    | Обов'язковий |
| ---- | ----- | --------------------------------------- |:------------:|
| text | рядок | The text to change to locale uppercase. |     так      |

## Приклад(и)

This will change every first character of a word to uppercase, in this case it would return `Hello, I'm Happy.`:

```javascript
bot.command({
    name: "toLocaleUpperCase",
    code: `
    $toLocaleUpperCase[hello, i'm happy.]
    `
});
```