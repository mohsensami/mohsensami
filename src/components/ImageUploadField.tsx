"use client";

import { useCallback, useState } from "react";
import Image from "next/image";

type ImageUploadFieldProps = {
  name: string;
  defaultValue?: string | null;
  label?: string;
  onChange?: (url: string) => void;
};

export function ImageUploadField({
  name,
  defaultValue,
  label = "تصویر شاخص",
  onChange,
}: ImageUploadFieldProps) {
  const [url, setUrl] = useState(defaultValue ?? "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = useCallback(async (file: File) => {
    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "خطا در آپلود");
        return;
      }

      setUrl(data.url);
      onChange?.(data.url);
    } catch {
      setError("خطا در آپلود تصویر");
    } finally {
      setUploading(false);
    }
  }, [onChange]);

  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">
        {label}
      </label>

      <input type="hidden" name={name} value={url} />

      {url && (
        <div className="relative mb-3 aspect-video w-full max-w-md overflow-hidden rounded-xl border border-stone-200 dark:border-stone-700">
          <Image src={url} alt="تصویر شاخص" fill className="object-cover" unoptimized />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <label className="cursor-pointer rounded-lg border border-dashed border-stone-300 px-4 py-2.5 text-sm text-stone-600 transition hover:border-emerald-400 hover:text-emerald-700 dark:border-stone-600 dark:text-stone-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400">
          {uploading ? "در حال آپلود..." : url ? "تغییر تصویر" : "انتخاب تصویر"}
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
            disabled={uploading}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleUpload(file);
            }}
          />
        </label>

        {url && (
          <button
            type="button"
            onClick={() => {
              setUrl("");
              onChange?.("");
            }}
            className="text-sm text-red-600 hover:text-red-700 dark:text-red-400"
          >
            حذف تصویر
          </button>
        )}
      </div>

      {error && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>}
      <p className="mt-1 text-xs text-stone-500">JPG, PNG, WebP یا GIF — حداکثر ۵ مگابایت</p>
    </div>
  );
}

export async function uploadImageFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/upload", { method: "POST", body: formData });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error ?? "خطا در آپلود");
  }

  return data.url as string;
}
