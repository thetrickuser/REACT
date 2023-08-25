import React from "react";
import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

const EditEventPage = () => {
  const eventData = useRouteLoaderData("event-detail");
  return <EventForm event={eventData.event} method={"PATCH"} />;
};

export default EditEventPage;
