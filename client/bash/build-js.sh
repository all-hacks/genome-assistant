#!/usr/bin/env bash


# Building main JS
MAIN_SCRIPTS="
    public/botlibre-sdk.js
"

uglifyjs --mangle $MAIN_SCRIPTS > public/main.min.js
browserify js/main.js -t [ babelify --presets [ env ] ] | uglifyjs --mangle >> public/main.min.js

# Building webview JS
WEBVIEW_SCRIPTS="
    node_modules/jquery/dist/jquery.js
    node_modules/bootstrap/dist/js/bootstrap.js
    node_modules/techv-web-sdk/dist/index.js
"

browserify js/webview.js -t [ babelify --presets [ env ] ] | uglifyjs --mangle > public/webview.min.js
uglifyjs --mangle $WEBVIEW_SCRIPTS >> public/webview.min.js

cp node_modules/techv-web-control/dist/static/js/manifest.js public/techv-web-control/
cp node_modules/techv-web-control/dist/static/js/vendor.js public/techv-web-control/
cp node_modules/techv-web-control/dist/static/js/app.js public/techv-web-control/