import * as React from "react";

import { toast } from "sonner";

export type UploadedFile = {
  url: string;
  name: string;
  size: number;
  type: string;
  key: string;
};

type UseUploadFileProps = {
  onUploadComplete?: (file: UploadedFile) => void;
  onUploadError?: (error: unknown) => void;
};

export function useUploadFile({
  onUploadComplete,
  onUploadError,
}: UseUploadFileProps = {}) {
  const [uploadedFile, setUploadedFile] = React.useState<UploadedFile>();
  const [uploadingFile, setUploadingFile] = React.useState<File>();
  const [progress, setProgress] = React.useState(0);
  const [isUploading, setIsUploading] = React.useState(false);

  async function uploadFile(file: File) {
    setIsUploading(true);
    setUploadingFile(file);
    setProgress(10);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      setProgress(80);

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        throw new Error(data.error ?? "آپلود ناموفق بود");
      }

      const result: UploadedFile = {
        url: data.url,
        name: file.name,
        size: file.size,
        type: file.type,
        key: data.url,
      };

      setProgress(100);
      setUploadedFile(result);
      onUploadComplete?.(result);

      return result;
    } catch (error) {
      const message = error instanceof Error ? error.message : "آپلود ناموفق بود";
      toast.error(message);
      onUploadError?.(error);
      throw error;
    } finally {
      setProgress(0);
      setIsUploading(false);
      setUploadingFile(undefined);
    }
  }

  return {
    isUploading,
    progress,
    uploadedFile,
    uploadFile,
    uploadingFile,
  };
}

export function getErrorMessage(err: unknown) {
  if (err instanceof Error) return err.message;
  return "Something went wrong, please try again later.";
}

export function showErrorToast(err: unknown) {
  return toast.error(getErrorMessage(err));
}
