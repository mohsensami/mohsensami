import DOMPurify from "isomorphic-dompurify";

const ALLOWED_TAGS = [
  "p",
  "br",
  "strong",
  "em",
  "u",
  "s",
  "h1",
  "h2",
  "h3",
  "h4",
  "ul",
  "ol",
  "li",
  "blockquote",
  "pre",
  "code",
  "a",
  "img",
  "hr",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "span",
  "mark",
  "div",
];

const ALLOWED_ATTR = [
  "href",
  "target",
  "rel",
  "src",
  "alt",
  "class",
  "dir",
  "data-language",
];

export function sanitizeArticleHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
  });
}

export function isHtmlContent(content: string): boolean {
  const trimmed = content.trim();
  return trimmed.startsWith("<") && trimmed.includes(">");
}
