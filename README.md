# Getting Started

## Quick start

We can choose beetween:

1. *react native CLI* : this one provides more flexibility as allow you to access to both android and ios folders but it also takes some knowledge of developing with mobile
2. *expo CLI* : it's cleaner because we'll work only with JS.

- you need *node*. we are using `v14.15.4`;
- go to the *appStore* and download the expo app;
- `npm install expo-cli --global`;
- `expo init myFirstApp`;
- select *blank a minimal app as clean as an empty canvas*;

## Run on a Simulator

### iOS

- install xcode;
- xcode > open dev. tool > simulator;

By default we get an *iPhone XI* but we can have multiple simlulators:

- file > open device > iOS
- back to the borwser click on *Run iOS simulator
- if we press `command + d` we can see the developer menu

### Android

- Download [Android studio](https://developer.android.com/studio)
- Click [Here](https://docs.expo.io/workflow/android-studio-emulator/)
- Add `export ANDROID_SDK=/your/path/here` to the env. variables
- On macOS, you will also need to add *platform-tools* to your ~/.bash_profile (or ~/.zshenv if you use Zsh) - eg. `export PATH=/your/path/here:$PATH.`
- select *avd manager* from the drop-down menu
- create virtual device
- let's picked Pixel 3a + playstore
- select the *LTS* which is `Q`
- if we press `command + m` we can see the developer menu

### Real iPhone

- open the camera on your phone and point at the **QR code**
- if we *shake* the phone we can see the developer menu

## Logging

A regular `console.log('log');` will appear inside the terminal

> How can we debug in Chrome?

- open the developer menu
- click *debug remote JS*
- open the console you will see the log


