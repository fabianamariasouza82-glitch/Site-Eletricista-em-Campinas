import { useEffect, useRef } from "react";

export default function TrustindexWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Evita duplicar o script se o componente re-renderizar
    if (containerRef.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?f378aac752669833cc56d5358ec";
    script.defer = true;
    script.async = true;
    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef}></div>;
}
