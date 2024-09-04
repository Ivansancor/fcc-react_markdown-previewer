import { useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

function App() {
  const dummyMarkdown =
    "# Welcome!\n\n## This is my React Markdown Previewer!\n\n### This is a previewer application that uses the _react-markdown_ library and some of its available plug-ins\n\nYou can read more about it on the **[npm documentation](https://www.npmjs.com/package/react-markdown)** pages.\n\nOr you can install it directly using `npm install react-markdown`,\n and then play with plug-ins such as:\n```\n//rehype raw\nnpm i rehype-raw\n//remark-gfm\nnpm i remark-gfm\n```\n![Markdown Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxsGmbpvSSLNwaE8w-vSEWEGvne7TJgUQtA&s)\n>Official Markdown logo\n\nMany things can be done with them:\n1. Transform common markdown to HTML\n1. Parse HTML tags\n1. Work with more advanced GFM features";

  const [markdownContent, setMarkdownContent] = useState(dummyMarkdown);

  return (
    <div className="font-primary bg-green-300 p-4">
      <h1 className="text-green-900 text-4xl text-center uppercase font-bold mb-8">
        Markdown Previewer App
      </h1>
      <div id="container" className="flex gap-4">
        <section id="editor-section" className="section flex flex-col">
          <h2 className="h2">Editor</h2>
          <h3 className="h3">Type your markdown here...</h3>
          <textarea
            name="textarea"
            id="editor"
            className="code-area resize-none flex-1"
            onChange={(e) => setMarkdownContent(e.target.value)}
          >
            {markdownContent}
          </textarea>
        </section>
        <section id="preview-section" className="section">
          <h2 className="h2">Previewer</h2>
          <h3 className="h3">
            ... And see the equivalent parsed content here.
          </h3>
          <div id="preview" className="code-area">
            <Markdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm, remarkBreaks]}
            >
              {markdownContent}
            </Markdown>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
