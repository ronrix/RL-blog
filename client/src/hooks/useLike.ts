import { useLazyQuery } from "@apollo/client";
import { LIKE } from "../queries";

export default function useLike(id: string) {
  const [like] = useLazyQuery(LIKE, { variables: { blogId: id }});

  return like;
}