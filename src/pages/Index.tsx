
import { AdmissionForm } from "@/components/AdmissionForm";
import { GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 flex items-center gap-3">
        <div className="bg-primary p-2 rounded-lg">
          <GraduationCap className="h-6 w-6 text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-primary hidden sm:block">
          Admissions Portal
        </h1>
      </div>
      <AdmissionForm />
    </div>
  );
};

export default Index;
