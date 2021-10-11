# f1twitchapi

POC to take the UDP data that the F1 game outputs, and turn it into a TV style results/positions/whatever tower thing in a React app

# stuff to note

there's two apps basically, a node.js app in the server folder and a React app in the client folder. 

the node.js app receives the data from the F1 game (note: only tested with F1 2020) using https://github.com/racehub-io/f1-telemetry-client to turn all the UDP stuff into nice and friendly JSON. It then outputs this using socket.io to port 4001.

the React app then takes that JSON off port 4001 and does stuff with it. simple.

# things you need to do to make it work

let's assume you're going to run both the server and client on the same computer. doesn't have to, but it's easier innit.

1) get the local IP address of this computer, let's say it's 192.168.0.10.
2) go into the F1 game, go to Telemetry and enable it. set the IP address to output the data to as your computer's IP address e.g. 192.168.0.10.
3) open client/src/F1Client.js and near the start there's a bit that says "const ENDPOINT = "http://192.168.0.9:4001" - change this to whatever your computer's IP address is, but make sure you have :4001 on the end.
4) open terminal/command prompt/whatever and navigate to the server folder, run "npm install" if you haven't already, and run "node index.js". if it's working you should see a couple of messages, one about getting data with a little car emoji, and one about listening on port 4001.
5) open another terminal/command prompt/whatever and navigate to the client folder, run "npm install" if you haven't already, and run "npm start". if it's working you should get a webpage pop up and the server terminal window will say something about a client connecting.
6) do something in the F1 game to make stuff happen - you need to actually be in a session for it to work properly

# things the tower does

* it shows the driver short names (this is just the first three letters of their name, which was fine in 2020 but Mick Schumacher ruins that in 2021 by being MSC not SCH)
* it shows their order
* it toggles between showing their fastest lap, their delta to the fastest lap, and their current tyres

# stuff that needs to be done to make this better

the node.js app gets the data and just passes it on, leaving the react app to basically do both the processing of the data and the rendering and the updating of it, and this seems a bit wrong to me. instead, i reckon the node.js app should receive and transform the data, and then pump out nicely shaped JSON that the react app can just pump out and focus on looking nice and pretty.

also it shouldn't just cycle round the three different states every 20 seconds or whatever. plus it's pointless in a race, as you want deltas to the car in front/leader/number of stops/retirements/other stuff that i didn't get done

also the idea was that twitch chat can control this. none of this happens at the moment.

also why just a tower? why not other stuff like at the bottom when you have two drivers and it compares lap times and you do a "!compare 1 2" to compare the lap times of drivers in 1st and 2nd

you see now why i never finished this

