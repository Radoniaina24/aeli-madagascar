import React from "react";
import Head from "./Head";
import StatsCards from "./StatsCards";
import UpcomingEvents from "./UpcomingEvents";

export default function StudentDashBoard() {
  return (
    <div className=" rounded-lg  p-6 mb-8">
      <Head />
      <StatsCards />
      <UpcomingEvents />
    </div>
  );
}
