import { Albums } from "../src/modules/Albums";
import { BedtimeStories } from "../src/modules/BedtimeStories";
import { Benefits } from "../src/modules/Benefits";
import { DownLoadApp } from "../src/modules/DownLoadApp";
import { UsersSay } from "../src/modules/UsersSay";

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
