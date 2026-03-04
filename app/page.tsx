"use client";

import { useState } from "react";

export default function Home() {
  const [jsonInput, setJsonInput] = useState("");
  const [toonOutput, setToonOutput] = useState("");
  const [error, setError] = useState("");

  const convertToToon = () => {
    setError("");
    setToonOutput("");

    try {
      // Validate JSON
      const parsed = JSON.parse(jsonInput);

      // Convert JSON to TOON format
      // (You can implement specific TOON format logic here)
      const toonFormat = convertJsonToToon(parsed);
      setToonOutput(toonFormat);
    } catch (err) {
      setError("Invalid JSON: " + (err as Error).message);
    }
  };

  const convertJsonToToon = (json: any): string => {
    // TOON format: Text Object Oriented Notation
    // More readable and token-efficient than JSON

    const convertValue = (
      value: any,
      indent: number = 0,
      key: string = "",
    ): string => {
      const spaces = "  ".repeat(indent);

      // Null values
      if (value === null) {
        return "null";
      }

      // Primitive types
      if (typeof value === "string") {
        // No quotes needed for ISO dates and simple strings
        if (
          value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/) ||
          (!value.includes("\n") &&
            !value.includes("#") &&
            !value.includes("  "))
        ) {
          return value;
        }
        return `"${value}"`;
      }

      if (typeof value === "number" || typeof value === "boolean") {
        return String(value);
      }

      // Arrays
      if (Array.isArray(value)) {
        if (value.length === 0) {
          return "items[0]:";
        }

        // Check if array contains objects
        const firstItem = value[0];
        if (
          typeof firstItem === "object" &&
          firstItem !== null &&
          !Array.isArray(firstItem)
        ) {
          // Array of objects - get all unique keys
          const allKeys = new Set<string>();
          value.forEach((item) => {
            if (typeof item === "object" && item !== null) {
              Object.keys(item).forEach((k) => allKeys.add(k));
            }
          });
          const keys = Array.from(allKeys);

          const header = `items[${value.length}]{${keys.join(",")}}:`;
          const items = value
            .map((item) => {
              const vals = keys.map((k) => {
                const v = item[k];
                return v !== undefined ? String(v) : "";
              });
              return `${spaces}  ${vals.join(",")}`;
            })
            .join("\n");

          return `${header}\n${items}`;
        } else {
          // Array of primitives
          const header = `items[${value.length}]:`;
          const items = value
            .map((item) => `${spaces}  - ${convertValue(item, 0)}`)
            .join("\n");
          return `${header}\n${items}`;
        }
      }

      // Objects
      if (typeof value === "object") {
        const entries = Object.entries(value);

        if (entries.length === 0) {
          return "{}";
        }

        return entries
          .map(([key, val]) => {
            if (Array.isArray(val)) {
              const arrayFormat = convertValue(val, indent + 1, key);
              return `${spaces}${key}: ${arrayFormat}`;
            } else if (typeof val === "object" && val !== null) {
              const objectContent = convertValue(val, indent + 1);
              return `${spaces}${key}:\n${objectContent}`;
            } else {
              return `${spaces}${key}: ${convertValue(val, 0)}`;
            }
          })
          .join("\n");
      }

      return String(value);
    };

    return convertValue(json, 0);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-mono text-black">
      {/* Header/Terminal Bar */}
      <div className="border-b-2 border-black bg-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 border-2 border-black bg-white"></div>
              <div className="w-2.5 h-2.5 border-2 border-black bg-white"></div>
              <div className="w-2.5 h-2.5 border-2 border-black bg-white"></div>
            </div>
            <span className="ml-3 text-xs text-black">~/json-to-toon</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        {/* Hero/Title */}
        <div className="mb-4 border-2 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-2xl font-bold mb-1 text-black">
            &gt; JSON_TO_TOON.exe
          </h1>
          <p className="text-sm text-black/70">
            // Convert JSON to TOON format
          </p>
        </div>

        {/* Conversion Area */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* JSON Input */}
          <div className="border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="border-b-2 border-black bg-[#e0e0e0] px-3 py-1.5 flex items-center justify-between">
              <span className="font-bold text-sm text-black">INPUT.json</span>
              <span className="text-xs text-black/60">EDITABLE</span>
            </div>
            <div className="p-3">
              <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder='{"name": "example", "value": 123}'
                className="w-full p-2.5 border-2 border-black font-mono text-xs bg-white text-black placeholder:text-black/40 focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] min-h-[280px] resize-none transition-shadow"
                spellCheck={false}
              />
            </div>
          </div>

          {/* TOON Output */}
          <div className="border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="border-b-2 border-black bg-[#e0e0e0] px-3 py-1.5 flex items-center justify-between">
              <span className="font-bold text-sm text-black">OUTPUT.toon</span>
              <span className="text-xs text-black/60">READONLY</span>
            </div>
            <div className="p-3">
              <textarea
                value={toonOutput}
                readOnly
                placeholder="// The result will appear here..."
                className="w-full p-2.5 border-2 border-black font-mono text-xs bg-[#fafaf5] text-black placeholder:text-black/40 min-h-[280px] resize-none cursor-not-allowed"
                spellCheck={false}
              />
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 border-2 border-black bg-white p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-2">
              <span className="text-base">⚠</span>
              <div className="text-black">
                <div className="font-bold mb-0.5 text-sm">ERROR:</div>
                <div className="font-mono text-xs">{error}</div>
              </div>
            </div>
          </div>
        )}

        {/* Convert Button */}
        <div className="mb-4">
          <button
            onClick={convertToToon}
            className="w-full md:w-auto px-8 py-3 border-2 border-black bg-white text-black font-bold text-base shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all active:shadow-none active:translate-x-[6px] active:translate-y-[6px]"
          >
            [ CONVERT ]
          </button>
        </div>

        {/* Instructions */}
        <div className="border-2 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="border-b-2 border-black pb-2 mb-3">
            <h2 className="text-base font-bold text-black">README.txt</h2>
          </div>
          <div className="space-y-2 text-xs text-black">
            <div className="flex gap-2">
              <span className="text-black/60">01.</span>
              <span>Enter your valid JSON in the INPUT.json field</span>
            </div>
            <div className="flex gap-2">
              <span className="text-black/60">02.</span>
              <span>Click the [ CONVERT ] button</span>
            </div>
            <div className="flex gap-2">
              <span className="text-black/60">03.</span>
              <span>View the result in OUTPUT.toon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
