"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TypeformMentalHealth from "@/components/mcq-form";
import withAuth from "@/utils/withAuth";

function Page() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mentalHealthAssessments = sessionStorage.getItem(
        "mentalHealthAssessments"
      );
      if (mentalHealthAssessments) {
        router.push("/start-call");
      }
    }
  }, [router]);

  return (
    <div>
      <TypeformMentalHealth />
    </div>
  );
}

export default withAuth(Page);