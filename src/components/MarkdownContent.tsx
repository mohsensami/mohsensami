import type { ReactNode } from "react";

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-sm text-emerald-800"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export function MarkdownContent({ content }: { content: string }) {
  const blocks = content.split("\n\n");

  return (
    <div className="prose-content space-y-4 text-base leading-8 text-stone-700">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={i} className="text-2xl font-bold text-stone-900">
              {trimmed.slice(3)}
            </h2>
          );
        }

        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={i} className="text-xl font-bold text-stone-900">
              {trimmed.slice(4)}
            </h3>
          );
        }

        if (trimmed.startsWith("```")) {
          const lines = trimmed.split("\n");
          const code = lines.slice(1, -1).join("\n");
          return (
            <pre
              key={i}
              className="overflow-x-auto rounded-xl bg-stone-900 p-4 text-sm leading-7 text-emerald-100"
              dir="ltr"
            >
              <code>{code}</code>
            </pre>
          );
        }

        if (trimmed.startsWith("|")) {
          const rows = trimmed.split("\n").filter((r) => !r.includes("---"));
          return (
            <div key={i} className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  {rows.map((row, ri) => (
                    <tr key={ri} className={ri === 0 ? "bg-stone-50 font-medium" : ""}>
                      {row
                        .split("|")
                        .filter(Boolean)
                        .map((cell, ci) => (
                          <td key={ci} className="border border-stone-200 px-3 py-2">
                            {cell.trim()}
                          </td>
                        ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
          return (
            <ul key={i} className="list-inside list-disc space-y-1 pr-2">
              {items.map((item, ii) => (
                <li key={ii}>{renderInline(item.slice(2))}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i}>{renderInline(trimmed)}</p>
        );
      })}
    </div>
  );
}
