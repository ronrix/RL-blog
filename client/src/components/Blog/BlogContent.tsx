import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

import "./BlogContent.css";

type Props = {
  content: string;
}

export default function BlogContent(props: Props) {
  const { content } = props;

  // format the content with markdown
  const markdown = marked.parse(content);
  // sanitizing the texts, markdown has html elements which would get rendered too and not will take effect if not saniitzed
  const cleanMarkDown = DOMPurify.sanitize(markdown);

  return (
    <>
      {/* this element takes the marked down texts content.  */}
      {/* setting the markedDown content to the innerHTML of this div */}
      <div className="mt-10 relative" dangerouslySetInnerHTML={{__html: cleanMarkDown}} ></div>
    </>
  )
}

