import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MobileShell } from "@/components/MobileShell";
import Index from "./Pages/Index";
import NotFound from "./Pages/NotFound";
import Onboarding from "./Pages/Onboarding";
import Scan from "./Pages/Scan";
import Report from "./Pages/Report";
import Reports from "./Pages/Reports";
import SettingsPage from "./Pages/SettingsPage";
import Auth from "./Pages/Auth";

const queryClient = new QueryClient();

const ShellRoutes = () => {
  const { pathname } = useLocation();
  const bare = pathname === "/onboarding" || pathname === "/auth" || pathname === "/";
  const routes = (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/home" element={<Index />} />
      <Route path="/scan" element={<Scan />} />
      <Route path="/report" element={<Report />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
  return bare ? routes : <MobileShell>{routes}</MobileShell>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ShellRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
