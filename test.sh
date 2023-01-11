#!/bin/bash

WORDPRESS_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE3OSwibmFtZSI6ImJ3X3dwX2FwaSIsImlhdCI6MTY2NzkzMjk0MywiZXhwIjoxODI1NjEyOTQzfQ.HU7C1eVR-WnKiuit-cnJpiP165PKYpQSMm_gNSt2Hx4

json='[]'
BLOG_POSTS=$(curl -Ls -H "Authorization: Bearer $WORDPRESS_TOKEN" https://www.bandwidth.com/wp-json/wp/v2/posts?per_page=3 | jq -c '[del(.[] | select(.categories[] | contains(1680))) | .[] | {imageUrl: .featured_media, categories: .categories, postLink: .link, postTitle: .title.rendered}] | .[:10]')
while read post; do
    IMAGE_URL=$(curl -Ls -H "Authorization: Bearer $WORDPRESS_TOKEN" https://www.bandwidth.com/wp-json/wp/v2/media/$(jq '.imageUrl' <<< $post) | jq -r '.guid.rendered')
    CATEGORIES=()
    CATEGORIES_LINKS=()
    categories=($(jq -r '"\(.categories[]) "' <<< $post | tr -d '\n\r[],"'))
    for category in "${categories[@]}"; do
        IFS="|" read CATEGORY CATEGORY_LINK < <(echo $(curl -Ls -H "Authorization: Bearer $WORDPRESS_TOKEN" https://www.bandwidth.com/wp-json/wp/v2/categories/$category | jq -r '"\(.name|tojson)|\(.link)"'))
        CATEGORIES+=($CATEGORY)
        CATEGORIES_LINKS+=($CATEGORY_LINK)
    done
        # WITH_CATEGORIES=$(jq -c --arg cat $CATEGORY '.)
    echo "all cats: ${CATEGORIES[@]}"
    # cats=$(jq -c -n -s '$ARGS.positional' --args -- "${CATEGORIES[@]}")
    cats=$(jq -ncR '[inputs]' <<< "$CATEGORIES")
    echo $cats
    # echo "[$(jq '"\(.)"' <<< ${CATEGORIES[@]})]"
    # CATS=$(jq -c --argjson cats $CATEGORIES '.categories |= $cats' <<< $post)
    echo $CATS > cats.json
    echo "all links: ${CATEGORIES_LINKS[@]}" > link.txt
    NEW=$(jq -c --arg url $IMAGE_URL '.imageUrl |= $url' <<< $post)
    json="$(jq --argjson val "$NEW" '. += [$val]' <<< $json)"
    # json="$(jq --argjson val "$(jq -c --arg url $IMAGE_URL '.imageUrl |= $url' <<< $post)" '. += [$val]' <<< $json)"
done <<< "$(jq -c '.[]' <<< $BLOG_POSTS)"

echo ${json[@]} > posts_1.json
echo $BLOG_POSTS > posts.json


# REL_TIME=$(curl -Ls -H "Accept: application/vnd.github+json" https://api.github.com/repos/Bandwidth/api-docs/releases/latest | jq -r '.published_at')  # Get latest release time
# echo $REL_TIME
# COMMITS=$(curl -Ls -H "Accept: application/vnd.github+json" https://api.github.com/repos/Bandwidth/api-docs/commits | jq '. | length')
# echo $COMMITS
# tag=$(date +"v%Y.%m.%d")
# echo $tag

# curl --trace bruh.log -X POST https://api.github.com/repos/OWNER/REPO/releases -d '{"tag_name":"'"$tag"'","name":"'"$tag"'","generate_release_notes":true}'

# if [ $COMMITS '>' 0 ]; then echo "release needed"; else echo "nah"; fi

read -p "Press any key..."
