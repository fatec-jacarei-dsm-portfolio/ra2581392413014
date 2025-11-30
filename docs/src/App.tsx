import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";

const App = () => (
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <BrowserRouter basename="/ra2581392413014">
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
