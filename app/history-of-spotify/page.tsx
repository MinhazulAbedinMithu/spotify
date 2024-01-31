import Image from "next/image";
import React from "react";
import imgFounder from "@/public/founder.webp";
import HistorySlider from "@/components/HistorySlider";

const HistoryOfSpotify = () => {
  return (
    <div>
      <div className="container mx-auto py-8 px-2">
        <h2 className="text-center text-4xl font-bold">History of Spotify</h2>
        <div className="my-8 px-4 py-6 bg-gradient-to-br from-lime-900/25 via-emerald-900/50 to-cyan-900/25 rounded-xl hover:bg-transparent border-2 border-transparent shadow-lg hover:border-green-600">
          <h4 className="text-2xl">
            The Evolution of Spotify: Key Milestones from Launch to Today
          </h4>
          <p className="text-base py-4">
            Spotify’s platform revolutionized music listening forever when we
            launched in 2008. Our move into podcasting brought innovation and a
            new generation of listeners to the medium, and in 2022 we entered
            the next audio market primed for growth with the addition of
            audiobooks.
          </p>
          <p>
            Today, more listeners than ever can discover, manage, and enjoy over
            100 million tracks, 5 million podcasts titles, and 350,000
            audiobooks a la carte on Spotify. We are the world’s most popular
            audio streaming subscription service with more than 574 million
            users, including 226 million subscribers in more than 180 markets.
          </p>
        </div>
        <div className="px-2 flex flex-col-reverse md:flex-row justify-between items-start">
          <div>
            <h4 className="text-2xl">Launch Countries in 2008:</h4>
            <ul className="pl-4 list-inside list-disc">
              <li className="text-base py-1">Sweden</li>
              <li className="text-base py-1">Norway</li>
              <li className="text-base py-1">Finland</li>
              <li className="text-base py-1">Spain</li>
            </ul>
          </div>
          <div>
            <Image
              src={imgFounder}
              alt="Founder"
              width={400}
              className="rounded-lg"
            />
            <h4 className="text-center pt-2 text-lg">
              Founder of Spotify:{" "}
              <span className="font-bold text-green-700">Daniel Ek</span>
            </h4>
          </div>
        </div>
        {/* <HistorySlider /> */}
        <div className="w-full md:w-1/2 lg:1/3 my-8 border border-green-900 p-3 rounded-lg shadow-md shadow-green-900/50">
          <h4 className="text-2xl text-green-300">
            Storming the US Market: 2011
          </h4>
          <p className="text-base pt-3">
            After years of negotiations, Spotify finalized licensing deals with
            major American record labels in 2011. The company was primed for a
            US launch, backed by a [new $100 million funding round]
          </p>
        </div>
        <div className="w-full ml-auto md:w-1/2 lg:1/3 my-8 border border-green-900 p-3 rounded-lg shadow-md shadow-green-900/50">
          <h4 className="text-2xl text-green-300">
            Global Expansion Continues
          </h4>
          <ul className="text-base pt-3 list-inside list-disc">
            <li className="text-base py-1">
              **2012** — Launched in Germany, the world’s #2 music market
            </li>
            <li className="text-base py-1">
              **2013** — Debuted in Mexico, Hong Kong, Malaysia, Singapore and
              more
            </li>
            <li className="text-base py-1">
              **2016** — Entered Japan, world’s 2nd largest music industry
            </li>
            <li className="text-base py-1">
              **2018** — Expanded into South Africa, Vietnam and the Middle East
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:1/3 my-8 border border-green-900 p-3 rounded-lg shadow-md shadow-green-900/50">
          <h4 className="text-2xl text-green-300">A Focus on Creator Tools</h4>
          <ul className="text-base pt-3 list-inside list-disc">
            <li className="text-base py-1">
              **2017** — Launched Spotify for Artists analytics dashboard
            </li>
            <li className="text-base py-1">
              **2019** — Introduced fully-integrated podcast creation tool
              Anchor
            </li>
            <li className="text-base py-1">
              **2021** — Announced Spotify Clips video feature for sharing
              insights.
            </li>
          </ul>
        </div>
        <div className="w-full ml-auto md:w-1/2 lg:1/3 my-8 border border-green-900 p-3 rounded-lg shadow-md shadow-green-900/50">
          <h4 className="text-2xl text-green-300">
            The Future: More Than Music
          </h4>
          <ul className="text-base pt-3 list-inside list-disc">
            <li className="text-base py-1">
              <strong className="text-green-600">**Podcasts**</strong> — With
              exclusives like *The Joe Rogan Experience*, Spotify has become a
              top global podcasting platform.
            </li>
            <li className="text-base py-1">
              <strong className="text-green-600">**Audiobooks**</strong> — In
              late 2022, Spotify launched an audiobooks catalog from publishers
              like Storytel and Audible.
            </li>
            <li className="text-base py-1">
              <strong className="text-green-600">**Social Audio**</strong> —
              Experiments like the Spotify Greenroom app explore live discussion
              formats.
            </li>
            <li className="text-base py-1">
              <strong className="text-green-600">**Live Events** </strong>—
              Spotify now streams live concerts and events after deals with
              platforms like Ticketmaster.
            </li>
            <li className="text-base py-1">
              <strong className="text-green-600">**AI Audio** </strong>—
              Acquisitions of startups like Sonantic point to AI-generated
              voices and sounds on Spotify.
            </li>
          </ul>
        </div>
        <div className="my-8 px-4 py-6 bg-gradient-to-br from-lime-700/50 via-emerald-900/75 to-cyan-900/50 rounded-xl hover:bg-transparent border-2 border-transparent shadow-lg hover:border-green-600">
          <h4 className="text-2xl pb-2">The Future is Audio</h4>
          <p className="text-base">
            In 2024 and beyond, we can expect Spotify to keep pushing boundaries
            in the audio medium — whether through new content formats,
            personalized recommendations, or even AI-generated voices. However,
            Spotify’s core identity will remain unchanged: the world’s most
            popular audio streaming platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryOfSpotify;
