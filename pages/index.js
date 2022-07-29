import { Albums } from "../src/components/Albums";
import { BedtimeStories } from "../src/components/BedtimeStories";
import { Benefits } from "../src/components/Benefits";
import { DownLoadApp } from "../src/components/DownLoadApp";
import { UsersSay } from "../src/components/UsersSay";

export default function Home() {
  return (
    < >
    <DownLoadApp/>
    <Benefits/>
    <UsersSay/>
    <Albums/>
    <BedtimeStories/>
    </>
  )
}
