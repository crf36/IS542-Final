import { useOutlet } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";
import { useDataContext } from "../context/DataContextHook";

export function Navigation() {
  const { isLoading } = useDataContext();

  const currentOutlet = useOutlet();

  return isLoading ? <LoadingIndicator /> : <>{currentOutlet}</>;
}
