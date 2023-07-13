import { useRouter } from "next/router";
import * as React from "react";

export interface DetailPageProps {}

export default function DetailPage(props: DetailPageProps) {
  const router = useRouter();

  return (
    <div>
      <div>{router.query.postId}</div>
      <h1>{router.query.title}</h1>
      <p>{router.query.ref}</p>
    </div>
  );
}
