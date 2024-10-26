"use client";
import { useHotkeys } from "react-hotkeys-hook";
import { useState } from "react";

type ShowState = "off" | "grid";

interface GridProps {
    className?: string;
}

export default function Grid(props: GridProps) {
    const { className } = props;
    const [showGrid, setShowGrid] = useState<ShowState>("off");
    useHotkeys("shift+g", () => {
        setShowGrid((prev) => {
            if (prev === "off") return "grid";
            return "off";
        });
    });

    if (showGrid !== "off") {
        return (
            <>
                <div className={`maket-grid-container ${className || ""}`}>
                    <div className="maket-grid-rows"></div>
                    <div className="maket-grid-columns">
                        {[...new Array(24)].map((x, i) => (
                            <div className="maket-grid-column" key={i}></div>
                        ))}
                    </div>
                    <div className="maket-grid-units"></div>
                </div>
                <style>
                    {
                        // Flattened CSS file from Grid.styles.css
                        `.maket-grid-container { position: absolute; z-index: 9999; top: 0px; left: 50%; transform: translate(-50%); max-width: var(--metrics-container); min-height: 100vh; width: 100%; height: 100%; overflow: hidden; pointer-events: none; } .maket-grid-rows { position: absolute; width: 100%; height: 100%; margin-top: var(--metrics-offset); background-image: linear-gradient( 180deg, rgb(var(--grid-color) / 0.15) var(--metrics-module), transparent var(--metrics-module) ); background-size: calc(var(--metrics-module) + var(--metrics-gutter)) calc(var(--metrics-module) + var(--metrics-gutter)); /* opacity: 0.1; */ } .maket-grid-columns { position: absolute; width: 100%; height: 100%; padding-left: var(--metrics-offset); padding-right: var(--metrics-offset); display: grid; grid-template-columns: repeat(var(--metrics-columns), minmax(0, 1fr)); column-gap: var(--metrics-gutter); } .maket-grid-column { background-color: rgb(var(--grid-color) / 0.15); } .maket-grid-units { position: absolute; width: 100%; height: 100%; background-image: linear-gradient(rgb(var(--grid-color) / 0.2) 1px, transparent 1px), linear-gradient(to right, rgb(var(--grid-color) / 0.2) 1px, transparent 1px); background-size: var(--metrics-unit) var(--metrics-unit); }`
                    }
                </style>
            </>
        );
    }
    return null;
}
