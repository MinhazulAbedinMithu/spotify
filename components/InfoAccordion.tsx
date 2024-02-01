"use client";
import React, { useState } from "react";
import Accordion from "./Accordion";

const InfoAccordion = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "Discover Weekly: Personalized Playlists",
      data: `Discover Weekly curates a unique playlist for you every Monday, tailored to your music taste. It's a mix of your favorite tracks and new discoveries, making every week a musical adventure.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "Spotify Podcasts: Endless Podcasts",
      data: `Dive into a world of podcasts covering every topic imaginable. From true crime to comedy, education to entertainment, Spotify Podcasts have you covered. Stay informed, entertained, and inspired.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "Collaborative Playlists: Share the Groove",
      data: `Create collaborative playlists with friends and family. Build the perfect soundtrack for road trips, parties, or just daily life. Everyone can add their favorite tunes, turning music into a shared experience.`,
      isOpen: false,
    },
    {
      key: 4,
      title: "Offline Listening: Music Anytime, Anywhere",
      data: `Download your favorite songs and playlists for offline listening. Whether you're on a plane, subway, or in a remote area without internet, enjoy your music without interruptions. Your tunes, your time, no matter where you are.`,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey: number) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div className="p-2 m-8 text-white">
      <h2 className="text-3xl mb-3 mx-auto text-green-600">
        Features of Spotify
      </h2>
      {accordions.map((accordion) => (
        <Accordion
          key={accordion.key}
          title={accordion.title}
          data={accordion.data}
          isOpen={accordion.isOpen}
          toggleAccordion={() => toggleAccordion(accordion.key)}
        />
      ))}
    </div>
  );
};

export default InfoAccordion;
