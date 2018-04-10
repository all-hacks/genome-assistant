#!/usr/bin/env bash

lessc --clean-css less/main.less > public/main.min.css
lessc --clean-css less/webview.less > public/webview.min.css
lessc --clean-css less/auth.less > public/auth.min.css