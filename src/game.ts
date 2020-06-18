import utils from '../node_modules/decentraland-ecs-utils/index'
import { buildScene } from './builderContent'
import { startParty } from './startParty'

// add content from the Builder
buildScene()

// time for the party to start
let partyTime = new Date('2020-05-09T21:00:00')

//function to call the API
async function checkTime() {
  let url = 'https://worldtimeapi.org/api/timezone/etc/gmt+3'

  try {
    let response = await fetch(url)
    let json = await response.json()
    let toDate = new Date(json.datetime)
    log(toDate)

    // compare the party start time to the current hour
    if (toDate.getHours() >= partyTime.getHours()) {
      log('PARTY TIME!')
      startParty()

      // stop checking for the party starting, it's already started!
      partyChecker.removeComponent(utils.Interval)
    }
  } catch (e) {
    log('error getting time data ', e)
  }
}

// dummy entity to run the checkTime() function once every second
let partyChecker = new Entity()
engine.addEntity(partyChecker)
partyChecker.addComponent(
  new utils.Interval(1000, () => {
    checkTime()
  })
)
