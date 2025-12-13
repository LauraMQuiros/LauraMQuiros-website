import { TPosts } from "src/types"

export function getAllSelectItemsFromPosts(
  key: "tags" | "category",
  posts: TPosts
) {
  const selectedPosts = posts.filter((post) => post?.[key])
  //selectedPosts.forEach((post, index) => {
  //  const postTags = post[key] ?? []            // tags for this post, empty if none
  //  console.log(`Post #${index} tags:`, postTags)
  //})
  const items = [...selectedPosts.map((p) => p[key]).flat()]
  const itemObj: { [itemName: string]: number } = {}
  items.forEach((item) => {
    if (!item) return
    if (item in itemObj) {
      itemObj[item]++
    } else {
      itemObj[item] = 1
    }
  })
  //if (key === "tags") {
  //  console.log("Tag counts:", itemObj)
  //}
  return itemObj
}
