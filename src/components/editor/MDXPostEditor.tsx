'use client';

import '@mdxeditor/editor/style.css';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import {
    MDXEditor,
    KitchenSinkToolbar,
    headingsPlugin,
    codeBlockPlugin,
    codeMirrorPlugin,
    diffSourcePlugin,
    directivesPlugin,
    frontmatterPlugin,
    imagePlugin,
    jsxPlugin,
    linkDialogPlugin,
    linkPlugin,
    listsPlugin,
    markdownShortcutPlugin,
    searchPlugin,
    tablePlugin,
    quotePlugin,
    thematicBreakPlugin,
    toolbarPlugin,
    AdmonitionDirectiveDescriptor,
} from '@mdxeditor/editor';

type MDXPostEditorProps = {
    markdown: string;
    onChange: (markdown: string) => void;
    placeholder?: string;
};

export function MDXPostEditor({ markdown, onChange, placeholder }: MDXPostEditorProps) {
    const plugins = useMemo(
        () => [
            toolbarPlugin({ toolbarContents: () => <KitchenSinkToolbar /> }),
            markdownShortcutPlugin(),
            headingsPlugin(),
            listsPlugin(),
            quotePlugin(),
            thematicBreakPlugin(),
            codeBlockPlugin(),
            codeMirrorPlugin(),
            diffSourcePlugin(),
            directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor] }),
            frontmatterPlugin(),
            imagePlugin(),
            jsxPlugin(),
            linkDialogPlugin(),
            linkPlugin(),
            tablePlugin(),
            searchPlugin(),
        ],
        [],
    );

    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    const handleChange = useCallback(
        (value: string) => {
            if (isMounted.current) {
                onChange(value);
            }
        },
        [onChange],
    );

    return (
        <div className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm ring-1 ring-stone-200 dark:border-stone-700 dark:bg-stone-950 dark:ring-stone-800">
            <MDXEditor
                markdown={markdown}
                onChange={handleChange}
                plugins={plugins}
                placeholder={placeholder}
                className="min-h-[420px] bg-transparent"
                contentEditableClassName="min-h-[340px] px-4 py-4 focus-visible:outline-none"
                autoFocus={false}
            />
        </div>
    );
}
