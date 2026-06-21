import { normalizeStaticValue, type Value } from "platejs";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatPersianDate(date: Date | string): string {
  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function isPlateJson(content: string): boolean {
  const trimmed = content.trim();
  if (!trimmed.startsWith("[")) return false;

  try {
    const parsed = JSON.parse(trimmed) as unknown;
    return Array.isArray(parsed);
  } catch {
    return false;
  }
}

const emptyPlateValue = normalizeStaticValue([
  { type: "p", children: [{ text: "" }] },
]);

export function isEmptyPlateContent(content: string): boolean {
  if (!content.trim()) return true;

  if (!isPlateJson(content)) {
    return !content.trim();
  }

  try {
    const value = JSON.parse(content) as Array<{ children?: Array<{ text?: string }> }>;
    return value.every(
      (node) => !node.children?.some((child) => (child.text ?? "").trim().length > 0),
    );
  } catch {
    return false;
  }
}

export function parsePlateContent(content: string): Value {
  if (!content.trim()) return emptyPlateValue;

  if (isPlateJson(content)) {
    try {
      return JSON.parse(content) as Value;
    } catch {
      return emptyPlateValue;
    }
  }

  return emptyPlateValue;
}

