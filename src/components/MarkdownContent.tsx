import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import type { Components } from 'react-markdown';

const components: Components = {
    h1: ({ children }) => <h1 className="mb-4 text-3xl font-bold text-stone-900 dark:text-stone-50">{children}</h1>,
    h2: ({ children }) => (
        <h2 className="mb-3 mt-8 text-2xl font-bold text-stone-900 dark:text-stone-50">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="mb-2 mt-6 text-xl font-bold text-stone-900 dark:text-stone-50">{children}</h3>,
    p: ({ children }) => <p className="mb-4 leading-8 text-stone-700 dark:text-stone-300">{children}</p>,
    a: ({ href, children }) => (
        <a
            href={href}
            className="font-medium text-emerald-600 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-800 dark:text-emerald-400 dark:decoration-emerald-700 dark:hover:text-emerald-300"
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    ),
    ul: ({ children }) => (
        <ul className="mb-4 list-inside list-disc space-y-1 pr-2 text-stone-700 dark:text-stone-300">{children}</ul>
    ),
    ol: ({ children }) => (
        <ol className="mb-4 list-inside list-decimal space-y-1 pr-2 text-stone-700 dark:text-stone-300">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-8">{children}</li>,
    blockquote: ({ children }) => (
        <blockquote className="mb-4 border-r-4 border-emerald-500 pr-4 italic text-stone-600 dark:text-stone-400">
            {children}
        </blockquote>
    ),
    code: ({ className, children, ...props }) => {
        const isBlock = className?.includes('language-');
        if (isBlock) {
            return (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        }
        return (
            <code
                className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-sm text-emerald-800 dark:bg-stone-800 dark:text-emerald-300"
                {...props}
            >
                {children}
            </code>
        );
    },
    pre: ({ children }) => (
        <pre
            className="hljs mb-4 overflow-x-auto rounded-xl border border-stone-200 bg-stone-950 p-4 text-sm leading-7 dark:border-stone-700"
            dir="ltr"
        >
            {children}
        </pre>
    ),
    table: ({ children }) => (
        <div className="mb-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">{children}</table>
        </div>
    ),
    th: ({ children }) => (
        <th className="border border-stone-200 bg-stone-50 px-3 py-2 text-right font-medium dark:border-stone-700 dark:bg-stone-800">
            {children}
        </th>
    ),
    td: ({ children }) => <td className="border border-stone-200 px-3 py-2 dark:border-stone-700">{children}</td>,
    hr: () => <hr className="my-8 border-stone-200 dark:border-stone-700" />,
    img: ({ src, alt }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src}
            alt={alt ?? ''}
            className="my-4 max-w-full rounded-xl border border-stone-200 dark:border-stone-700"
        />
    ),
};

export function MarkdownContent({ content }: { content: string }) {
    return (
        <div className="prose-content" dir="auto">
            <div dangerouslySetInnerHTML={{ __html: content }} />
            {/* <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={components}
            ></ReactMarkdown> */}
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
