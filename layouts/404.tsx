/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { markdownify } from "../lib/utils/textConverter";

const NotFound = ({ data }) => {
  const { frontmatter, content } = data;

  return (
    <section className="section">
      <div className="container">
        <div className="flex h-[40vh] items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4">
              <img src="/images/oop.svg" />
              {frontmatter.title}
            </h1>
            {markdownify(content, "div", "content")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
