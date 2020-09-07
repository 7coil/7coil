---
title: GitTags with JSON
description: Use JSON to utilise Discord embeds with GitTags
date: 2020-01-26 02:50:55
homepage: false
---

GitTags can print messages as an embed.

## How to Use

1. Create an embed!
   - [This tool is very handy](https://leovoel.github.io/embed-visualizer/)
2. Copy the JSON (the stuff on the left) and put that into a tag file.
3. Execute the tag

## Examples

## Random Winner of the Day

This example exploits Handlebars as well as JSON at the same time, to produce a random winner every day.
The `dayRandom` variable is a number between `0` and `1`.

```handlebars
{
  "embed": {
    "title": "The winner of the day is...",
    "description": "{{ itemAt (split "Intel,AMD,nVidia" ",") (floor (multiply dayRandom 3)) }}",
    "timestamp": "{{moment "today at midnight UTC" "YYYY-MM-DDTHH:mm:ssZ"}}",
    "footer": {
      "text": "Next COTD will be revealed"
    }
  }
}
```
