# angular_reproducible-firefox_addon-fetch_read_only
This repo is to reproduce the TypeError: "fetch" is read-only in firefox addon only

- Build instructions
- Go to webapp folder and run `npm install`
- Now run `npm run build:prod:chrome-extension`
- Now load the extension in `chrome` and you will see the app running at the end of `body` tag, where as in `firefox` it's not working at all.
