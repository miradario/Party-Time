import * as utils from "@dcl/ecs-scene-utils";
import { buildScene } from "./builderContent";
import { startParty } from "./startParty";

// add content from the Builder
buildScene();

// time for the party to start
const partyTime = new Date("2020-05-09T21:00:00");
const partyEnd = new Date("2020-05-09T24:00:00");

//function to call the API
async function checkTime() {
  const json = await utils.sendRequest(
    "https://worldtimeapi.org/api/timezone/etc/gmt+3"
  );

  const toDate = new Date(json.datetime);
  log(toDate);

  // compare the party start time to the current hour
  if (
    toDate.getHours() >= partyTime.getHours() &&
    toDate.getHours() <= partyEnd.getHours()
  ) {
    log("PARTY TIME!");
    startParty();

    // stop checking for the party starting, it's already started!
    partyChecker.removeComponent(utils.Interval);
  }
}

// dummy entity to run the checkTime() function once every second
const partyChecker = new Entity();
engine.addEntity(partyChecker);
partyChecker.addComponent(
  new utils.Interval(1000, () => {
    checkTime().catch((error) => log(error));
  })
);
