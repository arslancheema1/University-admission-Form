
import { AdmissionForm } from "@/components/AdmissionForm";
import { GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-slate-100 dark:bg-slate-900 flex flex-col lg:flex-row items-center justify-center gap-12 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="bg-primary p-3 rounded-lg">
          <GraduationCap className="h-12 w-12 text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-bold text-primary">
          Admissions Portal
        </h1>
      </div>
      <AdmissionForm />
    </div>
  );
};

export default Index;
