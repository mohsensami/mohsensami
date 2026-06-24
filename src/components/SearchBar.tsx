'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchIcon } from 'lucide-react';
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';

type SearchResult = {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    category: string | null;
};

export function SearchBar() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [matchedQuery, setMatchedQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const trimmedQuery = query.trim();
    const isSearchable = trimmedQuery.length >= 2;
    const displayResults = isSearchable && matchedQuery === trimmedQuery ? results : [];

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setOpen((prev) => !prev);
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, []);

    useEffect(() => {
        if (!isSearchable) return;

        let cancelled = false;
        const timer = setTimeout(async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/search?q=${encodeURIComponent(trimmedQuery)}`);
                const data = (await res.json()) as { results: SearchResult[] };
                if (!cancelled) {
                    setResults(data.results);
                    setMatchedQuery(trimmedQuery);
                }
            } catch {
                if (!cancelled) {
                    setResults([]);
                    setMatchedQuery(trimmedQuery);
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        }, 300);

        return () => {
            cancelled = true;
            clearTimeout(timer);
        };
    }, [trimmedQuery, isSearchable]);

    const navigate = useCallback(
        (slug: string) => {
            setOpen(false);
            setQuery('');
            setResults([]);
            setMatchedQuery('');
            router.push(`/posts/${slug}`);
        },
        [router],
    );

    return (
        <>
            <Button
                variant="outline"
                onClick={() => setOpen(true)}
                className="hidden h-9 w-48 justify-start gap-2 text-stone-500 sm:inline-flex lg:w-56 dark:text-stone-400"
                aria-label="جستجوی مقالات"
            >
                <SearchIcon className="size-4 shrink-0" />
                <span className="truncate text-sm">جستجو...</span>
                <kbd className="pointer-events-none mr-auto hidden rounded border border-stone-200 bg-stone-50 px-1.5 py-0.5 text-[10px] font-medium text-stone-400 lg:inline dark:border-stone-700 dark:bg-stone-800">
                    Ctrl+K
                </kbd>
            </Button>

            <Button
                variant="outline"
                size="icon"
                onClick={() => setOpen(true)}
                className="sm:hidden"
                aria-label="جستجو"
            >
                <SearchIcon className="size-4" />
            </Button>

            <CommandDialog
                open={open}
                onOpenChange={setOpen}
                title="جستجوی مقالات"
                description="عنوان یا خلاصه مقاله را جستجو کنید"
            >
                <Command>
                    <CommandInput placeholder="جستجوی مقالات..." value={query} onValueChange={setQuery} />
                    <CommandList>
                        {loading && <div className="py-6 text-center text-sm text-stone-500">در حال جستجو...</div>}
                        {!loading && isSearchable && displayResults.length === 0 && matchedQuery === trimmedQuery && (
                            <CommandEmpty>مقاله‌ای یافت نشد</CommandEmpty>
                        )}
                        {!loading && !isSearchable && (
                            <div className="py-6 text-center text-sm text-stone-500">حداقل ۲ حرف وارد کنید</div>
                        )}
                        {displayResults.length > 0 && (
                            <CommandGroup heading="نتایج">
                                {displayResults.map((post) => (
                                    <CommandItem
                                        key={post.id}
                                        value={post.title}
                                        onSelect={() => navigate(post.slug)}
                                        className="cursor-pointer flex-col items-start gap-0.5 py-3"
                                    >
                                        <span className="font-medium">{post.title}</span>
                                        {post.category && (
                                            <span className="text-xs text-emerald-600 dark:text-emerald-400">
                                                {post.category}
                                            </span>
                                        )}
                                        {post.excerpt && (
                                            <span className="line-clamp-1 text-xs text-stone-500">{post.excerpt}</span>
                                        )}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        )}
                    </CommandList>
                </Command>
            </CommandDialog>
        </>
    );
}
