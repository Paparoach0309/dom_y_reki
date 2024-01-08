import StartSecureMain from "@/app/components/startSecure/StartSecureMain";
import OpportunitiesMainData from "@/app/components/opportunities/OpportunitiesMainData";
import Info from "@/app/components/info/Info";
import CustomerReviewsData from "@/app/components/security/CustomerReviewsData";
import TariffsMainData from "@/app/components/tariffs/TariffsMainData";
import ResultMainData from "@/app/components/result/ResultMainData";
import ScenarioMainData from "./components/scenario/ScenarioMainData";
import StatisticsMain from "./components/startSecure/StatisticsMain";
import DocumentsMainData from "./components/documents/DocumentsMainData";
import PlatformMain from "./components/platform/PlatformMain";
import TariffsNew from "./components/tariffs/TariffsNew";

export default function Home() {
  return (
    <>
      <StartSecureMain />
      <StatisticsMain />
      <OpportunitiesMainData />
      <PlatformMain />
      {/* <CustomerReviewsData /> */}
      <ScenarioMainData />
      <Info />
      {/* <TariffsMainData /> */}
      <TariffsNew />
      <ResultMainData />
      <DocumentsMainData />
    </>
  );
}
