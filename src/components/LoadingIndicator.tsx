import "./LoadingIndicator.css";

export default function LoadingIndicator() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <span className="loading-text">Loading...</span>
    </div>
  );
}
