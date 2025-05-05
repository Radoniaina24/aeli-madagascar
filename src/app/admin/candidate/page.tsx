import Candidate from "@/features/candidate";
import { CandidateProvider } from "@/features/candidate/context/CandidateContext";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Candidate - AELI",
};

export default async function page() {
  return (
    <CandidateProvider>
      <Candidate />
    </CandidateProvider>
  );
}
