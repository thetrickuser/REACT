import React, { Suspense } from "react";
import { json, useLoaderData, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { eventUrl } from "../config/config";

// const events = [
//   { id: "e1", name: "Event 1" },
//   { id: "e2", name: "Event 2" },
//   { id: "e3", name: "Event 3" },
// ];

const EventsPage = () => {
  console.log("loading");
  const { events } = useLoaderData();
  console.log(events);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};

export default EventsPage;

async function loadEvents() {
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

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
