import { buildScene } from './builderContent'
import utils from '../node_modules/decentraland-ecs-utils/index'
import { startParty } from './startParty'

// add all static assets
buildScene()

// time for the party to start
//let partyTime = new Date('T21:00:00-03:00')
let partyTime = new Date('2019-05-09T21:00:00')
//function to call API
export function checkTime() {
  let url =
    'http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires'

  executeTask(async () => {
    try {
      let response = await fetch(url)
      let json = await response.json()
      let toDate = new Date(json.datetime)
      log(toDate)
      if (toDate.getHours() >= partyTime.getHours()) {
        log('PARTY TIME!')
        startParty()
        partyChecker.removeComponent(utils.Interval)
      }
    } catch {
      log('error getting time data')
    }
  })
}

let partyChecker = new Entity()
engine.addEntity(partyChecker)
partyChecker.addComponent(
  new utils.Interval(1000, () => {
    checkTime()
  })
)
