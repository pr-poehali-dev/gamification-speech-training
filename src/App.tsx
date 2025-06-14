import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SelfAnalysisPage from "@/pages/SelfAnalysisPage";
import NotFound from "./pages/NotFound";
import BusinessCards from "./pages/BusinessCards";
import LessonPlan from "./pages/LessonPlan";
import TKUPresentation from "@/pages/TKUPresentation";
import LessonAnalysisPage from "@/pages/LessonAnalysisPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/business-cards" element={<BusinessCards />} />
          <Route path="/lesson-plan" element={<LessonPlan />} />
          <Route path="/tku-presentation" element={<TKUPresentation />} />
          <Route path="/self-analysis" element={<SelfAnalysisPage />} />
          <Route path="/lesson-analysis" element={<LessonAnalysisPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
