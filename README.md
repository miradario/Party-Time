# Party time

This simple scene calls a time API to fetch the current time. If the time is between 9:00 PM and midnight in GMT+3, a party starts.

The RESTful API called is `https://worldtimeapi.org/api`, which returns a JSON file with several fields that can be read.

![](screenshot/screenshot.png)

Once the party starts, the scene starts streaming audio from an internet radio, and applies video textures from a video stream to spinning cubes.

**Install the CLI**

Download and install the Decentraland CLI by running the following command

```bash
npm i -g decentraland
```

For a more details, follow the steps in the [Installation guide](https://docs.decentraland.org/documentation/installation-guide/).

**Previewing the scene**

Once you've installed the CLI, download this example and navigate to its directory from your terminal or command prompt.

_from the scene directory:_

```
$:  dcl start
```

Any dependencies are installed and then the CLI will open the scene in a new browser tab automatically.

Learn more about how to build your own scenes in our [documentation](https://docs.decentraland.org/) site.

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
