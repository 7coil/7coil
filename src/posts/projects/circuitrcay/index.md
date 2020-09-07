---
title: CircuitRCAY
description: An alternative application for legacy Greenwald Industries controlled laundry machines
links:
  - key: github
    name: GitHub
    link: https://github.com/7coil/circuitrcay-flutter
  - key: website
    name: Web Application
    link: https://app.circuitrcay.com/
  - key: download
    name: Android APK
    link: https://github.com/7coil/circuitrcay-flutter/releases
image: ./balance.png
date: 2019-11-22 01:15:48+00
edited: 2020-02-26 08:29:35+00
homepage: false
disable: true
---

CircuitRCAY is a third party application for controlling laundry controlled by Greenwald Industries (still using the legacy `phoneadmin.flashcashonline.com` API which Circuit uses).
To produce this, a matter of debugging, reverse engineering and spending money was done to understand, and be able to reimplement a replacement.

---

Reverse engineering may not be legal in the country you are living in.
Before reproducing the steps found in this, frankly, terrible blog, try asking a lawyer.

These findings were performed before ~~the UK left the EU~~ THE EVENT on the 31st January 2020.

---

## Motivation

The Circuit (laundry) app currently on the Android Market is a usable application for university students across the UK.
However, I believe that there are some vital features missing from the software.

- No Countdown Timer
- No Notifications
- Obscure Error Messages

Because of this, I started working on an unofficial Circuit client, for both web browsers, and Android.

## Web

- Link: [app.circuitrcay.com](https://app.circuitrcay.com/)

## Android

- Link: [github.com/7coil/circuitrcay-flutter/releases](https://github.com/7coil/circuitrcay-flutter/releases)

The Android version of CircuitRCAY uses Google's Flutter UI framework to create a better looking application compared to the original.
The adoption of Flutter also potentially means an iOS application can also be created, but would be impractical, due to cost reasons.
