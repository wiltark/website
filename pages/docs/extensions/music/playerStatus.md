---
title: $playerStatus
description: $playerStatus will return the current Player Status.
id: playerStatus
extension: true
---

`$playerStatus` will return the current Player Status.

## Usage

```php
$playerStatus
```

## Example(s)

This will return the current player status:

```javascript
client.command({
  name: "playerStatus",
  code: `
    $playerStatus
  `,
});
```