import "react";
import CallToAction from "./components/CallToAction";
import MembersSection from "./components/MembersSection";
import SubscriptionCall from "./components/SubscriptionCall";
import PremiumChoice from "./components/PremiumChoice";
import HeroSection from "./components/HeroSection";
import RecentNominees from "./components/RecentNominees";

function Homepage() {
  return (
    <div id="wrapper">
      <HeroSection />
      <PremiumChoice />
      <RecentNominees />
      <SubscriptionCall />
      <MembersSection />
      <CallToAction />
    </div>
  );
}

export default Homepage;
