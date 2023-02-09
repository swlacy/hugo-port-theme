#/usr/bin/env bash
cd "${0%/*}"

# Options: https://github.com/tailwindlabs/tailwindcss/releases/latest
platform="linux-x64"

# Tailwind CSS update
rm tailwind/tailwind 2>/dev/null
mkdir tailwind 2>/dev/null
echo "[+] Downloading latest TailwindCSS binary for $platform"
wget --quiet --output-document tailwind/tailwind "$( \
    curl --silent https://api.github.com/repos/tailwindlabs/tailwindcss/releases/latest \
    | grep \"browser_download_url.*$platform\" \
    | awk -F '\"' '{print $4}')"
chmod +x tailwind/tailwind && echo "[?] $(file tailwind/tailwind)"

# Daisy UI update
#rm static/css/daisyui.min.css 2>/dev/null
#echo "[+] Downloading latest minified Daisy UI"
#wget --quiet --output-document static/css/daisyui.min.css https://cdn.jsdelivr.net/npm/daisyui@latest/dist/full.min.css
#echo "[?] $(file static/css/daisyui.min.css)"

# Lucide icon pack update
rm static/js/lucide.min.js 2>/dev/null
echo "[+] Downloading latest minified Lucide JS"
wget --quiet --output-document static/js/lucide.min.js https://unpkg.com/lucide@latest
echo "[?] $(file static/js/lucide.min.js)"

# Lunr search update
#rm static/js/lunr.min.js 2>/dev/null
#echo "[+] Downloading latest minified Lunr JS"
#wget --quiet --output-document static/js/lunr.min.js https://unpkg.com/lunr@latest/lunr.min.js
#echo "[?] $(file static/js/lunr.min.js)"