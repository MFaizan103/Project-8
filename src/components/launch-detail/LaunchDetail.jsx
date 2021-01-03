import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { LAUNCH_QUERY_DETAIL } from "./LaunchDetailQuery";

export const LaunchDetail = ({ id }) => {
  const { data, error, loading, refetch } = useQuery(LAUNCH_QUERY_DETAIL, {
    variables: { id: String(id) },
  });

  useEffect(() => {
    refetch();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Erorr....</p>;
  if (!data) return <p>Select a flight from the panel</p>;
  if (!data.launch) return <p>No Launch Available</p>;
  const { launch } = data;
  const {
    launch_success,
    mission_name,
    rocket,
    links,
    details,
    flight_number,
  } = launch;
  const { rocket_name, rocket_type } = rocket;
  const { flickr_images } = links;
  console.log(data);

  return (
    <div className="LAUNCH-DETAILS-CONTAINER: overflow-auto h-screen max-h-full px-6">
      <div className="ALL-DETAILS: text-gray-500 flex flex-col p-5 items-center">
        <h2 className="APP-NAME text-3xl font-extrabold text-center">
          SPACEX LAUNCH APP WITH GRAPHQL-APOLLO
        </h2>
        <div className="FLIGHT-STATUS:px-2 py-3 text-lg">
          <span>
            FLIGHT-<span>{flight_number}</span>:
          </span>
          {launch_success ? (
            <span className="text-green-400 m-2">Sucess</span>
          ) : (
            <span className="text-red-400 m-2">Failed</span>
          )}
        </div>
        <div className="LAUNCH-TITLE: text-2xl font-semibold ">
          {mission_name}
        </div>
        <h1 className="font-bold text-4xl mt-3 ">
          {rocket && `${rocket_name} | ${rocket_type}`}
        </h1>
        <div className="DESCRIPTION-CONTAINER flex flex-wrap">
          <p className="DESCRIPTION:  text-sm mt-5">{details}</p>
        </div>
      </div>
      {links && flickr_images && (
        <div className="IMAGE-CONTAINER: grid grid-cols-3 gap-2 ">
          {flickr_images.map((image, index) =>
            image ? (
              <img className="w-full" key={index} src={image} />
            ) : (
              <p className="text-6xl text-red-600">Pictures Not Available</p>
            )
          )}
        </div>
      )}
    </div>
  );
};
