#!/usr/bin/env bash
# Inspired by the following gist:
# https://gist.github.com/oriy/e8b58a6a471d371129b1d0b430510375

# git checkout or unset
current_hash=${2:-'@'}
previous_hash=${1:-'@{1}'}

# git merge
if [ -z $previous_hash ]; then
  previous_hash='@{1}';
fi

echo " * comparing refs: $(tput setaf 6)$previous_hash$(tput sgr0)"
echo "              and: $(tput setaf 6)$current_hash$(tput sgr0)"

changed_files="$(git diff-tree -r --name-only --no-commit-id $previous_hash $current_hash)"

if echo "$changed_files" | grep --quiet "package-lock.json"; then
    tput setaf 1
    echo " * changes detected in package-lock.json"
    tput setaf 3
    echo " * executing 'npm clean-install'"
    tput sgr0
    eval "npm ci";
fi

export SOURCE_COMMIT="$(git rev-parse --short $current_hash)"
