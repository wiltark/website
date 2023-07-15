---
title: '$authorID'
description: '$authorID will return user ID of who executed the command.'
id: authorID
---

`$authorID` will return user ID of who executed the command.

## Modo de uso

```php
$authorID
```

## Ejemplo(s)

This will return your user ID:

```javascript
bot.command({
    name: 'authorID',
    code: `
  $authorID
  `
});
```