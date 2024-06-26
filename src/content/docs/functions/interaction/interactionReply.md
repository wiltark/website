---
title: $interactionReply
description: $interactionReply allows you to send an interaction message reply.
id: interactionReply
---

`$interactionReply` allows you to send an interaction message reply.

## Usage

```php
$interactionReply[content?;allowedMentions?;ephemeral?;returnID?]
```

## Parameters

| Field            | Type                                                                                                | Description                                                                          | Required |
| ---------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | :------: |
| content          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | New message content.                                                                 |   true   |
| allowedMentions? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Allowed mentions? <br /> 1. **everyone** <br /> 2. **roles** <br /> 3. **users**     |  false   |
| ephemeral?       | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Visible to the command author only? <br /> 1. **true** <br /> 2. **false** (default) |  false   |
| returnID?        | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return message ID? <br /> 1. **true** <br /> 2. **false** (default)                  |  false   |

## Example(s)

```javascript
client.interactionCommand({
    name: "interactionReply",
    prototype: "slash", // button/selectMenu/slash
    code: `
  $interactionReply[Hello, world!;everyone;false;false]
  `
});
```

```javascript
client.interactionCommand({
    name: "interactionReply",
    prototype: "slash", // button/selectMenu/slash
    code: `
  $interactionReply[Hello, world! {newEmbed:{title:Hello!}{description:This is an embed!}};everyone;false;false]
  `
});
```
