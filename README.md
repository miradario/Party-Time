# Party time

This simple scene calls a time API to fetch the current time. If the time is between 9:00 PM and midnight in GMT+3, a party starts.

The RESTful API called is `https://worldtimeapi.org/api`, which returns a JSON file with several fields that can be read.

![](screenshot/screenshot.png)

Once the party starts, the scene starts streaming audio from an internet radio, and applies video textures from a video stream to spinning cubes.
