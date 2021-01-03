import React from "react";
export const LaunchList = ({ launchData, handleIdChange }) => {
  return (
    <div className="SIDEBAR: bg-indigo-800 flex flex-col items-center text-center text-white overflow-auto w-52 p-5 max-h-screen">
      <h2 className="text-xl sticky ">Launches</h2>
      <div className="SIDEBARITEMS">
        <ol className=" divide-y-2 ">
          {launchData.launches.map((launch, index) => {
            console.log(launch.flight_number);
            return (
              <li
                onClick={() => handleIdChange(launch.flight_number)}
                className="p-5 transition hover:bg-purple-800  cursor-pointer "
                key={index}
              >
                <span className="block font-bold pb-2">
                  {launch.mission_name}
                </span>
                <span className="font-thin block">({launch.launch_year})</span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
