"use client";

import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { PlateArticleViewer } from "@/components/article/PlateArticleViewer";
import { isPlateJson } from "@/lib/format";
import { isHtmlContent, sanitizeArticleHtml } from "@/lib/sanitize-html";

function enhanceCodeBlocks(container: HTMLElement) {
  container.querySelectorAll("pre").forEach((pre) => {
    if (pre.dataset.copyEnhanced) return;
    pre.dataset.copyEnhanced = "true";
    pre.classList.add("relative", "pt-10");

    const code = pre.querySelector("code");
    const codeText = (code?.textContent ?? pre.textContent ?? "").replace(/\n$/, "");

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "کپی کد";
    button.className =
      "absolute left-3 top-3 rounded-md border border-stone-600 bg-stone-800/90 px-2 py-1 text-xs text-stone-200 transition hover:bg-stone-700";

    button.addEventListener("click", async () => {
      await navigator.clipboard.writeText(codeText);
      button.textContent = "کپی شد ✓";
      setTimeout(() => {
        button.textContent = "کپی کد";
      }, 2000);
    });

    pre.appendChild(button);
  });
}

function HtmlArticleBody({ html }: { html: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sanitized = sanitizeArticleHtml(html);

  useEffect(() => {
    if (containerRef.current) {
      enhanceCodeBlocks(containerRef.current);
    }
  }, [sanitized]);

  return (
    <div
      ref={containerRef}
      className="article-html prose-content"
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
}

function MarkdownCopyPre({ children }: { children?: React.ReactNode }) {
  const codeElement = Array.isArray(children) ? children[0] : children;
  const codeText =
    typeof codeElement === "object" &&
    codeElement !== null &&
    "props" in codeElement
      ? String((codeElement as React.ReactElement<{ children?: string }>).props.children ?? "")
      : "";

  return (
    <pre className="hljs relative mb-4 overflow-x-auto rounded-xl border border-stone-200 bg-stone-950 p-4 pt-12 text-sm leading-7 dark:border-stone-700">
      <CopyButton code={codeText.replace(/\n$/, "")} />
      {children}
    </pre>
  );
}

function CopyButton({ code }: { code: string }) {
  return (
    <button
      type="button"
      onClick={async (e) => {
        await navigator.clipboard.writeText(code);
        const btn = e.currentTarget;
        btn.textContent = "کپی شد ✓";
        setTimeout(() => {
          btn.textContent = "کپی کد";
        }, 2000);
      }}
      className="absolute left-3 top-3 rounded-md border border-stone-600 bg-stone-800/90 px-2 py-1 text-xs text-stone-200 transition hover:bg-stone-700"
    >
      کپی کد
    </button>
  );
}

export function ArticleContent({ content }: { content: string }) {
  if (isPlateJson(content)) {
    return <PlateArticleViewer content={content} />;
  }

  if (isHtmlContent(content)) {
    return <HtmlArticleBody html={content} />;
  }

  return (
    <div className="prose-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          pre: MarkdownCopyPre,
          code: ({ className, children }) => {
            if (className?.includes("language-")) {
              return <code className={className}>{children}</code>;
            }
            return (
              <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-sm text-emerald-800 dark:bg-stone-800 dark:text-emerald-300">
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}
