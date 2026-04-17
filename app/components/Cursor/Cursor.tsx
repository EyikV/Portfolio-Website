"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if(!cursor)return;

        const move = (e:MouseEvent):void => {
            if(cursor == null) return;
            cursor.style.top = e.clientY + "px";
            cursor.style.left = e.clientX + "px";
        };

        document.addEventListener("mousemove", move);

        return () => {
            document.removeEventListener("mousemove", move);
        };
    }, []);

    return <div ref={cursorRef} className="cursor" />;
}
