import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CodeBlockProps = {
  code: string;
  language?: string;
};

export function CodeBlock({ code, language = "text" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#07111f] shadow-card">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="font-mono text-xs tracking-[0.16em] text-slate-400">{language.toUpperCase()}</span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-teal-300 hover:text-white"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Kopyalandı" : "Kopyala"}
        </button>
      </div>
      <pre className="max-h-[34rem] overflow-auto p-5 text-sm leading-6 text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}
