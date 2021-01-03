import React from "react";
import { LaunchList } from "../launch-list/LaunchList";
import { useQuery } from "@apollo/client";
import { QUERY_LAUNCH_LIST } from "./LaunchQuery";

export const Launch = ({ handleIdChange }) => {
  const { data, error, loading } = useQuery(QUERY_LAUNCH_LIST);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div>
      <LaunchList launchData={data} handleIdChange={handleIdChange} />
    </div>
  );
};
