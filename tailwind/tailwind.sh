#/usr/bin/env bash
cd "${0%/*}"

./tailwind -i main.css -o ../static/css/style.min.css --watch --minify
