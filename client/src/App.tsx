import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AssistiveTech from "./pages/AssistiveTech";
import Curriculum from "./pages/Curriculum";
import PedagogicalPrinciples from "./pages/PedagogicalPrinciples";
import LessonPlanGenerator from "./pages/LessonPlanGenerator";
import Resources from "./pages/Resources";
import Navigation from "./components/Navigation";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/assistive-tech"} component={AssistiveTech} />
      <Route path={"/curriculum"} component={Curriculum} />
      <Route path={"/principles"} component={PedagogicalPrinciples} />
      <Route path={"/lesson-plans"} component={LessonPlanGenerator} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <a href="#main-content" className="skip-to-main">
            Pular para conteúdo principal
          </a>
          <Navigation />
          <main id="main-content" className="min-h-screen">
            <Router />
          </main>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
