import { useEffect, useState } from "react";

type ScriptStatus = "idle" | "loading" | "ready" | "error";
type ScriptType = HTMLScriptElement | null;

function useScript(src: string): ScriptStatus {
  const [status, setStatus] = useState<ScriptStatus>(src ? "loading" : "idle");

  useEffect(() => {
    // Fetch existing script element by src
    let script: ScriptType = document.querySelector(`script[src="${src}"]`);

    if (!script) {
      // Create and insert script tag
      script = document.createElement("script");
      Object.assign(script, {
        src,
        async: true,
      });
      script.setAttribute("data-status", "loading");
      document.body.appendChild(script);

      // Store status in attribute on script
      const setAttributeFromEvent = (event: Event) => {
        if (!script) return;
        const status = event.type === "load" ? "ready" : "error";
        script.setAttribute("data-status", status);
      };
      script.addEventListener("load", setAttributeFromEvent);
      script.addEventListener("error", setAttributeFromEvent);
    } else {
      // Grab existing script status from attribute and set to state.
      setStatus(script.getAttribute("data-status") as ScriptStatus);
    }

    // Script event handler to update status in state
    const setStateFromEvent = (event: Event) => {
      setStatus(event.type === "load" ? "ready" : "error");
    };
    script.addEventListener("load", setStateFromEvent);
    script.addEventListener("error", setStateFromEvent);

    // Remove event listeners on cleanup
    return () => {
      if (script) {
        script.removeEventListener("load", setStateFromEvent);
        script.removeEventListener("error", setStateFromEvent);
      }
    };
    // Only re-run effect if src changes
  }, [src]);

  return status;
}

export default useScript;
