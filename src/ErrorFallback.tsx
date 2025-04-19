import { FallbackProps } from "./Types";
import "./ErrorFallback.css";

export function ErrorFallback({ error }: FallbackProps) {
  return (
    <div className="error-fallback" role="alert">
      <h2>Something went wrong!</h2>
      <p>
        There was an error: <pre>{error.message}</pre>
      </p>
    </div>
  );
}
