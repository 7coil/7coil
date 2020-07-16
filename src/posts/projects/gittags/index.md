---
title: GitTags
description: A Discord messaging bot which responds with the contents of files on GitHub
links:
  - key: github
    name: GitHub
    link: https://github.com/7coil/GitTags
  - key: store
    name: App Store
    link: https://discordapps.dev/en-GB/bots/504819339422072834
  - key: discord
    name: Add this Bot
    link: https://discordapp.com/api/oauth2/authorize?client_id=504819339422072834&permissions=0&scope=bot
date: 2020-01-26 02:34:08
homepage: true
image: ./Discord_7KCTvP5Guo.png
---

GitTags is a GitHub based Discord Bot, which retrieves tag information from any public GitHub repository.

## How to Use
1. Create a public GitHub repository
2. Create a folder within it named `tags`
3. Create any file within the folder. This filename will be the name of the tag
4. Tell the bot to retrieve the tag, with the `git>[name of file]` command.

## Advanced Features
- [Handlebars](handlebars)
- [JSON](json)

## Commands
In order to execute administrative commands, a different prefix is used to differentiate it from regular tags.

- Admin: `git<[command]`
- Retrieve Tag: `git>[name of file]`

## Administrative Commands
- `git<set`
  - Use the default GitHub repository.
- `git<set [owner]`
  - Use the **[owner]/gittag** repository.
- `git<set [owner];[repo]`
  - Use the **[owner]/[repo]** repository.
- `git<info`
  - Get information about where GitTags is currently pointing to

### Tag command
- `git>[tag]`
  - Obtain text with the tag name
