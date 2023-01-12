#!/bin/bash

WORDPRESS_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE3OSwibmFtZSI6ImJ3X3dwX2FwaSIsImlhdCI6MTY2NzkzMjk0MywiZXhwIjoxODI1NjEyOTQzfQ.HU7C1eVR-WnKiuit-cnJpiP165PKYpQSMm_gNSt2Hx4

JSON_OUT='[]'
BLOG_POSTS=$(curl -Ls -H "Authorization: Bearer $WORDPRESS_TOKEN" https://www.bandwidth.com/wp-json/wp/v2/posts?per_page=20 | jq -c '[del(.[] | select(.categories[] | contains(1680))) | .[] | {imageUrl: .featured_media, categories: .categories, postLink: .link, postTitle: .title.rendered}] | .[:10]')  # Get 20 most recent blog posts, remove ones with the 'Culture' tag, filter only relevant fields, and limit results to 10
while read post; do  # While loop that iterates over each blog post (come from the done <<<)
    IMAGE_URL=$(curl -Ls -H "Authorization: Bearer $WORDPRESS_TOKEN" https://www.bandwidth.com/wp-json/wp/v2/media/$(jq '.imageUrl' <<< $post) | jq -r '.guid.rendered')  # Grabs the url for the image associated with the post
    CATEGORIES=(); CATEGORIES_LINKS=()  # Declare arrays for categories and their links
    categories=($(jq -r '"\(.categories[]) "' <<< $post | tr -d '\n\r[],"'))  # 
    for category in "${categories[@]}"; do
        IFS="|" read CATEGORY CATEGORY_LINK < <(echo $(curl -Ls -H "Authorization: Bearer $WORDPRESS_TOKEN" https://www.bandwidth.com/wp-json/wp/v2/categories/$category | jq -r '"\(.name|tojson)|\(.link|tojson)"'))
        if [[ $category != ${categories[-1]} ]]; then CATEGORIES+=($CATEGORY,); CATEGORIES_LINKS+=($CATEGORY_LINK,); else CATEGORIES+=($CATEGORY); CATEGORIES_LINKS+=($CATEGORY_LINK); fi
    done
    UPDATED_POST=$(jq -c --arg url "$IMAGE_URL" --argjson cats "$(echo "[${CATEGORIES[@]}]")" --argjson links "$(echo "[${CATEGORIES_LINKS[@]}]")" '.imageUrl |= $url | .categories |= $cats | .categoryLinks |= $links' <<< $post)
    JSON_OUT="$(jq --argjson post "$UPDATED_POST" '. += [$post]' <<< $JSON_OUT)"
done <<< "$(jq -c '.[]' <<< $BLOG_POSTS)"  # Iterate over each blog post

echo ${JSON_OUT[@]} > ./site/blogposts.config.json


# REL_TIME=$(curl -Ls -H "Accept: application/vnd.github+json" https://api.github.com/repos/Bandwidth/api-docs/releases/latest | jq -r '.published_at')  # Get latest release time
# echo $REL_TIME
# COMMITS=$(curl -Ls -H "Accept: application/vnd.github+json" https://api.github.com/repos/Bandwidth/api-docs/commits | jq '. | length')
# echo $COMMITS
# tag=$(date +"v%Y.%m.%d")
# echo $tag

# curl --trace bruh.log -X POST https://api.github.com/repos/OWNER/REPO/releases -d '{"tag_name":"'"$tag"'","name":"'"$tag"'","generate_release_notes":true}'

# if [ $COMMITS '>' 0 ]; then echo "release needed"; else echo "nah"; fi

read -p "Press any key..."
