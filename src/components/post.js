import React from "react";
import { graphql } from "gatsby";
import { Layout } from "./Layout";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/src/styles/prism";
import rehypeKatex from "rehype-katex";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import ReactMarkdown from "react-markdown";
import "katex/dist/katex.min.css";
import { Once } from "./Once";
import _ from "lodash";

const Post = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
        <div className={'post'}>


      <Once cs={"title"}>{_.startCase(post.frontmatter.title)}</Once>
      <Once cs={"divider"} />
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath, remarkRehype, remarkParse]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={oneLight}
                language={match[1]}
                PreTag="div"
                codeTagProps={{
                  style: {
                    fontSize: 14,
                    fontFamily: "jr",
                  },
                }}
                {...props}
              />
            ) : (
              <div
                style={{
                  display: "inline",
                  px: 1,
                  py: 0.7,
                  mx: 0.5,
                  borderRadius: 2,
                  color: "#333030",
                  backgroundColor: "#ececec",
                  fontFamily: "J_Regular",
                  textIndent: "0",
                }}
              >
                {children}
              </div>
            );
          }, p: (props)=>{
                return <p className={'p_text'}>{props.children}</p>
            }
        }
           }
      >
        {post.rawMarkdownBody}
      </ReactMarkdown></div>
    </Layout>
  );
};
export default Post;
export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      rawMarkdownBody
      excerpt(format: MARKDOWN)
      frontmatter {
        title
      }
    }
  }
`;
