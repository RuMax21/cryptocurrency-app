import { HomePage } from "../pages/HomePage";
import { QueryProvider } from "./providers/QueryProvider"

export const App = () => (
  <QueryProvider>
    <HomePage />
  </QueryProvider>
);
