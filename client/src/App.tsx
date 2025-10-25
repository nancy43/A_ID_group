import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import IVInfusion from "@/pages/IVInfusion";
import WoundCare from "@/pages/WoundCare";
import ClinicConsultations from "@/pages/ClinicConsultations";
import LongitudinalCare from "@/pages/LongitudinalCare";
import HospitalConsultations from "@/pages/HospitalConsultations";
import TravelVaccines from "@/pages/TravelVaccines";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/iv-infusion" component={IVInfusion} />
      <Route path="/wound-care" component={WoundCare} />
      <Route path="/clinic-consultations" component={ClinicConsultations} />
      <Route path="/longitudinal-care" component={LongitudinalCare} />
      <Route path="/hospital-consultations" component={HospitalConsultations} />
      <Route path="/travel-vaccines" component={TravelVaccines} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
