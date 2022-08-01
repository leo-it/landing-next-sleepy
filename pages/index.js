import { Box } from "@mui/material";
import { Navbar } from "../src/components/Navbar";
import { Albums } from "../src/modules/Albums";
import { BedtimeStories } from "../src/modules/BedtimeStories";
import { Benefits } from "../src/modules/Benefits";
import { DownLoadApp } from "../src/modules/DownLoadApp";
import { Tracking } from "../src/modules/Tracking";
import { UsersSay } from "../src/modules/UsersSay";

export default function Home() {
  return (
    <>
      <Navbar />
      <DownLoadApp />
      <Benefits />
      <UsersSay />
      <Albums />
      <Box sx={{ height: "135vh" }}>
        <BedtimeStories
          title="Sleep with bedtime stories"
          description="Our selection of bedtime stories range from classics such as;
            ‘Cinderella’ and ‘Sherlock Holmes’ to Sleepiest Originals such as
            ‘The Adventures of Koko', 'The Wise Elephant' and 'The Jupiter
            Twins'."
          img="https://www.sleepiest.com/wp-content/uploads/2020/09/478x1016_1@2x-2-1.png"
        />
      </Box>
      <Box className="bg__beadtimestories--dark" sx={{ height: "135vh" }}>
        <BedtimeStories
          title="Relax with sleep sounds"
          description="Our soothing sleep sounds range from those found in nature, with titles such as 'Storms Rolling In' and 'Gentle Stream', to originally crafted soundscapes like 'Rain On Route 66' as well as relaxing sleep music such as the wildly popular 'Waves Of Atlantis.'"
          img="https://www.sleepiest.com/wp-content/uploads/2020/09/478x1016_2@2x-2-1.png"
        />
      </Box>
      <Box sx={{ height: "135vh" }}>
        <BedtimeStories
          title="Find calm with sleep meditations"
          description="Sleep meditations are one of the most exciting new areas of Sleepiest; with titles such as 'Getting Back to Sleep' and 'Calm a Racing Mind', as well as meditation story hybrids such as 'The Magical West Highland Line' which the community has fallen asleep to over 1 million times!"
          img="https://www.sleepiest.com/wp-content/uploads/2020/09/478x1016_3@2x-2-1.png"
        />
      </Box>
      <Box sx={{ height: "135vh" }}>
        <Tracking />
      </Box>
    </>
  );
}
