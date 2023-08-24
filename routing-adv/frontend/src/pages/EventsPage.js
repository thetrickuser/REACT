import React from "react";
import { Link, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { eventUrl } from "../config/config";

// const events = [
//   { id: "e1", name: "Event 1" },
//   { id: "e2", name: "Event 2" },
//   { id: "e3", name: "Event 3" },
// ];

const EventsPage = () => {
  const events = useLoaderData();
  return <EventsList events={events} />;
};

export default EventsPage;

export async function loader() {
  const res = await fetch(eventUrl);

  if (!res.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });
    throw new json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const resData = await res.json();
    return resData.events;
  }
}
