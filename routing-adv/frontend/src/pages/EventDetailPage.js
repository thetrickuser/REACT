import React from "react";
import { json, useRouteLoaderData, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";
import { eventUrl } from "../config/config";

const EventDetailPage = () => {
  const eventData = useRouteLoaderData("event-detail");
  return <EventItem event={eventData.event} />;
};

export default EventDetailPage;

export async function loader({ request, params }) {
  const eventId = params.eventId;
  const res = await fetch(eventUrl + eventId);

  if (!res.ok) {
    throw new json({ message: "Could not fetch event" }, { status: 500 });
  } else {
    const eventData = await res.json();
    return eventData;
  }
}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const res = await fetch(eventUrl + eventId, {
    method: request.method,
  });

  if (!res.ok) {
    throw new json({ message: "Could not delete event" }, { status: 500 });
  }

  return redirect("/events");
}
