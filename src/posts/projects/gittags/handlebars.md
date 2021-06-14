---
title: GitTags with Handlebars
description: Utilise Handlebars to manipulate the output of a tag
date: 2020-01-26 02:47:57
homepage: false
render: false
---

GitTags can perform some operations to enhance your tags.
Additional tools are also available with `handlebars-helpers`.

- `array`
- `comparison`
- `inflection`
- `match`
- `misc`
- `number`
- `object`
- `regex`
- `string`
- `url`
- `date`
- `math`

## Examples

### Numbered list with adding

```handlebars
{{#repeat 3}}{{add this 1}}. CircuitRCAY is a meme
{{/repeat}}
```

- `this` refers to the number of times repeated.
- `add` adds `1` and `this` together

### Timestamp

```handlebars
{{timestamp}}
```

- This is the UNIX time when the message was sent

### 5 Years ago

```handlebars
{{moment "5 years ago" "YYYY"}}
```

- I don't even know how Moment.js works

### Floor of 3.14

```handlebars
{{floor 3.14}}
```

- Rounds down `3.14` to `3`

### Author ID

```handlebars
{{get 'id' author}}
```

- Your ID. Can be surrounded with `<@` and `>` to make a mention like this: <@{{get 'id' author}}>
- Uses handlebars-helpers `get` to get the ID of the author object.
