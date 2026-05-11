#!/bin/bash
export PATH="$HOME/.fnm/node-versions/v22.22.2/installation/bin:$HOME/.local/bin:$PATH"
cd /Users/magnusmb/fotogenic-of-scotland-demo || exit 1
exec node node_modules/next/dist/bin/next dev --port 3230
