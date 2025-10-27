import usePostsQuery from "./usePostsQuery"
import { getAllSelectItemsFromPosts } from "src/libs/utils/notion"

export const useTagsQuery = () => {
  const posts = usePostsQuery()
  console.log(posts)
  const tags = getAllSelectItemsFromPosts("tags", posts)
  console.log(tags)
  return tags
}
