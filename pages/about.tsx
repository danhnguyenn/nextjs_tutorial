import { useRouter } from "next/router";
import * as React from "react";

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter();

  const handleSubmit = () => {
    router.push({
      pathname: "/posts/[postId]",
      query: {
        postId: 123,
        title: "Welcome to Nextjs 11",
        ref: "social",
      },
    });
  };

  return (
    <div>
      <button onClick={handleSubmit}>Go to post</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        expedita consequatur distinctio nihil numquam esse a quisquam iure
        repellendus, explicabo autem eaque, sint, qui ipsam accusantium eius
        magni tempora ad?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        expedita consequatur distinctio nihil numquam esse a quisquam iure
        repellendus, explicabo autem eaque, sint, qui ipsam accusantium eius
        magni tempora ad?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        expedita consequatur distinctio nihil numquam esse a quisquam iure
        repellendus, explicabo autem eaque, sint, qui ipsam accusantium eius
        magni tempora ad?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        expedita consequatur distinctio nihil numquam esse a quisquam iure
        repellendus, explicabo autem eaque, sint, qui ipsam accusantium eius
        magni tempora ad?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        expedita consequatur distinctio nihil numquam esse a quisquam iure
        repellendus, explicabo autem eaque, sint, qui ipsam accusantium eius
        magni tempora ad?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        expedita consequatur distinctio nihil numquam esse a quisquam iure
        repellendus, explicabo autem eaque, sint, qui ipsam accusantium eius
        magni tempora ad?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        expedita consequatur distinctio nihil numquam esse a quisquam iure
        repellendus, explicabo autem eaque, sint, qui ipsam accusantium eius
        magni tempora ad?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        expedita consequatur distinctio nihil numquam esse a quisquam iure
        repellendus, explicabo autem eaque, sint, qui ipsam accusantium eius
        magni tempora ad?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        expedita consequatur distinctio nihil numquam esse a quisquam iure
        repellendus, explicabo autem eaque, sint, qui ipsam accusantium eius
        magni tempora ad?
      </p>
    </div>
  );
}
