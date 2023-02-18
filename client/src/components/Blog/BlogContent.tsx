import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

import "./BlogContent.css";

const content = `
  # **Sales Success Across a Screen — My New Course**
  ----------------------------

[Marked](https://marked.js.org/using_advanced#highlight) lets you convert [Markdown](https://marked.js.org/using_advanced#highlight) into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo
-------------------

1. Type in stuff on the left.
2. See the live updates on the right.

That's it.  Pretty simple.  There's also a drop-down option above to switch between various views:

- **Preview:**  A live display of the generated HTML as it would render in a browser.
- **HTML Source:**  The generated HTML before your browser makes it pretty.
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:**  A brief run-down of how to format things using markdown.

Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

Ready to start writing?  Either start changing stuff on the left or
[clear everything](/demo/?text=) with a simple click.

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/

![alt text](https://miro.medium.com/v2/resize:fit:720/format:webp/1*nXUmHI7JVjHpQyvPE8EVAQ.png)

`;

export default function BlogContent() {

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

