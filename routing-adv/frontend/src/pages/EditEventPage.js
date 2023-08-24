import React from "react";
import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

const EditEventPage = () => {
  const eventData = useRouteLoaderData("event-detail");
  console.log(eventData);
  return <EventForm event={eventData.event} />;
};

export default EditEventPage;
