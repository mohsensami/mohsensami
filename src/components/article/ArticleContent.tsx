'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { PlateArticleViewer } from '@/components/article/PlateArticleViewer';
import { isPlateJson } from '@/lib/format';
import { isHtmlContent, sanitizeArticleHtml } from '@/lib/sanitize-html';

import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap',
});

function CopyButton({ code }: { code: string }) {
    const [copied, setCopied] = useState(false);

    return (
        <button
            type="button"
            onClick={async () => {
                await navigator.clipboard.writeText(code);
                setCopied(true);
                window.setTimeout(() => {
                    setCopied(false);
                }, 2000);
            }}
            className="absolute right-3 top-3 rounded-md border text-white bg-primary px-2 py-1 text-xs  transition cursor-pointer"
        >
            {copied ? 'کپی شد ✓' : 'کپی کد'}
        </button>
    );
}

function CodeBlockWithLineNumbers({ children }: { children?: React.ReactNode }) {
    const codeElement = Array.isArray(children) ? children[0] : children;

    const codeText =
        typeof codeElement === 'object' && codeElement !== null && 'props' in codeElement
            ? String(
                  (
                      codeElement as React.ReactElement<{
                          children?: string;
                      }>
                  ).props.children ?? '',
              )
            : '';

    const lines = codeText.split('\n').filter((line) => line !== '');

    return (
        <pre
            className={`hljs ${jetbrainsMono.className} relative mb-4 overflow-x-auto rounded-lg border border-stone-700 bg-stone-900 text-sm leading-6 dark:border-stone-700 dark:bg-stone-950`}
        >
            <CopyButton code={codeText.replace(/\n$/, '')} />

            <div className="flex">
                <div className="w-12 select-none bg-primary px-3 py-4 text-right text-stone-500 dark:bg-stone-900">
                    {lines.map((_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                <div className="flex-1 overflow-x-auto px-4 py-4">{children}</div>
            </div>
        </pre>
    );
}

function HtmlArticleBody({ html }: { html: string }) {
    const sanitized = sanitizeArticleHtml(html);

    return (
        <div
            className="prose-content prose max-w-none dark:prose-invert  prose-pre:bg-stone-900 prose-pre:text-stone-100"
            dangerouslySetInnerHTML={{ __html: sanitized }}
        />
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
        <div className="prose prose-sm md:prose-base max-w-none dark:prose-invert dark:prose-headings:text-stone-100 dark:prose-p:text-stone-200 dark:prose-strong:text-stone-100 dark:prose-code:text-emerald-400 dark:prose-pre:bg-stone-900 dark:prose-pre:text-stone-100 prose-code:rounded prose-code:bg-stone-100 prose-code:px-1.5 prose-code:py-0.5  dark:prose-code:bg-stone-800">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                    pre: CodeBlockWithLineNumbers,
                    code: ({ className, children }) => {
                        if (className?.includes('language-')) {
                            return <code className={className}>{children}</code>;
                        }

                        return (
                            <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-sm text-emerald-700 dark:bg-stone-800 dark:text-emerald-300">
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
