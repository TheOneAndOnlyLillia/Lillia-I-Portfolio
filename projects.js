

const PROJECTS = [
  {
    id: "drone",                              // page URL: project.html?id=drone
    title: "Autonomous Object-Tracking Drone",
    tagline: "GreenSight Embedded Systems / Electrical Engineering Internship ",
    date: "Summer 2026",
    tags: ["Embedded Systems", "Computer Vision", "Raspberry Pi", "UAV"],

    
    thumbnail: "dronefly.jpg",
    previewVideo: "drone.mp4", 

    // Top of the project page. type: "video" | "image" | "youtube"
    hero: { type: "video", src: "drone.mp4", poster: "images/project-1.png" },
    // YouTube instead: hero: { type: "youtube", src: "VIDEO_ID" }

    summary:
      "During my internship at GreenSight, I designed and built an object tracking electrical and embedded system by modifying an existing company drone (WISP). An OpenMV camera detects and tracks a target, a Raspberry Pi sends commands to the flight controller so the drone flies toward it, and the live camera feed is streamed to the client. This will be used for future company projects",

    links: [
      { label: "View code", url: "https://github.com/TheOneAndOnlyLillia/Drone-camera-tracking" }
    ],

    steps: [
      {
        title: "Block diagram of electronic system architecture",
        date: "",
        text: "Planned how to add an object tracking system to the existing WISP drone after our intern project design meeting to meet a current market demand in the industry GreenSight operated in. The entire project was to build a large 'mother' drone that would deploy smaller drones that would track and fly towards an object. My job was to build the smaller autonomous object tracking drones. I researched and then planned out which hardware to add and how the camera, Raspberry Pi, and flight controller would communicate with the drone.",
        images: [{ src: "blocks.jpeg" }]
      },
      {
        title: "Object detection with OpenMV",
        date: "",
        text: "Programmed the OpenMV camera to detect and track a bright red object, as it's not a common naturally exisiting color outside, where we were planning to demo. It was able to track a red sign from about 15 meters away. I tested various threshold colors on the OpenMV script to ensure it didn't detect more muted colors of red, as when first writing the script, the camera would detect my hand as a target due to its redness, but this issue was removed through fine tuning of that threshold. The camera quality was a little fuzzy due to the microprocessor of the Raspberry Pi Zero W. We were supposed to get the 2W, but it was unfortunately sold out during my internship and we had a six week time constraint, but it had enough range to perform well during our proof of concept demo and client demo. ",
        images: [{ src: "camerastream.jpg" }]
      },
      {
        title: "Wiring and connection to WISP",
        date: "",
        text: "Connected camera to Pi via SPI connection. Made a custom connector to power Pi from the flight controller by finding a spare 5V/GND port on PCB with a multimeter due to the schematic being lost in company files. I then collaborated with mechanical interns for them to design the casing and mounts for the camera, Pi, and telemetry radio",
        images: [{ src: "wiring.jpeg", src: "alldrone.jpeg" }]
      },
      {
        title: "Establishing communication with flight controller",
        date: "",
        text: "I had to learn how to send MAVLINK commands to the Ardupilot controller, along with cutting and micro to micro usb cabke to attach to the drone. My code was able to calculate how offset the center of the red object was from the center of the camera and make a flight decision, but the flight controller kept rejecting the command the Pi would send. This was ultimately due to software parameter restrictions on Mission Planner that required the drone to be on 'Guided' mode, which was only allowed if the drone was already in mid flight. Luckily I was able to override this arming command temporarily for safe testing of the code, and then reinstated the safety parameters for client demo testing.",
        images: [{ src: "feedback.jpeg" }]
      },
      {
        title: "Flight testing",
        date: "",
        text: "We took the drone outside to an isolated parking lot, where we would first remote control fly the drone up to a height of about 2 meters on 'Stabilize', and then switched to 'Guided' mode to let the camera feed and Pi script run. The camera feed was also streamed on a computer to allow the client to be able to see the tracking in real time. The drone was able to successfly track and fly towards the red sign (as seen in the video at the top of the page).",
        images: [{ src: "dronefly.jpg" }]
      }
    ]
  },

  {
    id: "biohyd",
    title: "Bioimpedance Hydration Detector",
    tagline: "Measuring a patient's hydration using bioimpedance (in progress)",
    date: "In progress",
    tags: ["Biomedical", "PCB/Circuit Design", "Sensors", "Analog Device"],
    thumbnail: "images/project-2.png",
    hero: { type: "image", src: "images/project-2.png" },
    summary:
      "After my father passed out from dehydration, I had the idea of creating this sensor so he would be able to understand that he was in fact dehydrated and to take accountability and drink more water. I also live with my grandparents, who tend to feel unwell a lot of the time, which raises concern for my family, but a lot of the time it is due to not drinking enough water. After speaking with other individuals, I came to understad that dehydration is a common problem with older individuals that can lead to many health scares, but current bioimpedance technology is not set to adapt to the individual user, or is adapted to read the bodies of active younger adults, which I hope to change through an algorithm I am currently developing.",
    links: [
      { label: "View code", url: "https://github.com/TheOneAndOnlyLillia/BioImpedance-Hydration-Detector" }
    ],
    steps: [
      {
        title: "Research and Design",
        date: "",
        text: "I began by researching how bioimpedance works and how to measure and display this information to a user. I sketched out a design for the sensor using the concepts I researched about. To measure the body's impedance, the AD9833 generates a 50 kHz sine, which the Howland pump emits a constant current from that sine, the four electrodes inject the current and then measure the resistance across the user, the AD8226 (in-amp) amplifies this small signal, the precision rectifier and filter then turn this signal into DC, and then the Arduino reads it and displays the bioimpedance on the LCD screen. ",
        images: [{ src: "sketch.png", caption: "Concept sketch" }]
      },
      {
        title: "Electrode placement decision",
        date: "",
        text: "Describe where the prototype is now and what's next.",
        images: [{ src: "tetrapolar.jpeg" }]
      },
      {
        title: "Breadboard wiring",
        date: "",
        text: "While bench testing the design prototype through using breadboards, many rails were either loose or were not working, leading me to order a PCB instead for more reliable and functioning testing.",
        images: [{ src: "orwiring.jpeg" }]
      },
      {
        title: "KiCAD Schematic and PCB Design",
        date: "",
        text: [{src: "schem.jpeg"}],
        images: [{ src: "pcb.jpeg" }]
      },
      {
        title: "Scratching and fixing rails on PCB",
        date: "",
        text: "When designing my schematic, I had accidentally connected an electrode to the +5V rail instead of the -5V. To solve this issue, I scratched out the copper path that connected that electrode to the +5V rail.",
        images: [{ src: "cut.jpeg", caption: "The white marks are the scratches" }]
      },
      {
        title: "Prototype (in progress)",
        date: "",
        text: "Describe where the prototype is now and what's next.",
        images: [{ src: "resistor.jpeg", caption: "Current prototype" }]
      },
      {
        title: "Calibration",
        date: "",
        text: "Describe where the prototype is now and what's next.",
        images: [{ src: ""}]
      }
    ]
  },

  {
    id: "spider",
    title: "Spider-Inspired Quadruped",
    tagline: "A walking robot that balances on very small ground contact points",
    date: "",
    tags: ["Robotics", "Servos", "Bio-Inspired"],
    thumbnail: "newchassis.jpeg",
    previewVideo: "wave.mp4", 
    hero: { type: "video", src: "wave.mp4", poster: "images/project-1.png" },
    summary:
      "A quadruped robot capable of balancing and walking on very small ground contact points, used for robotics community outreach.",
    links: [{ label: "View code", url: "https://github.com/TheOneAndOnlyLillia/Spider-Quadruped" }],
    steps: [
      {
        title: "Original CAD",
        date: "",
        text: "I used OnShape to design the chassis and joints for the spider, accomodating for SG90 servo sizes and to fit an Arduino Uno and PCA9685 Servo Motor Driver inside the body of the quadreped",
        images: [{ src: "CAD.png" }]
      },
      {
        title: "Battery Current Issue",
        date: "",
        text: "After assembling the first iteration of the spider quadreped, when testing the motors, all of the servos would keep twitching and weren't able to perform the proper movements. After some research I discovered this was because I was using standard Duracell batteries, which aren't able to supply enough current that the PCA9685 driver demanded. So I switched to NiMH rechargeable batteries which were able to supply adequate current and power to run the servos properly.",
        images: [{ src: "battery.mp4" }]
      },
      {
        title: "Intitial Walk Testing",
        date: "",
        text: "The weight of the body component of the quadruped caused the servo motors to collapse under the weight, making it difficult for the robot to stand while walking.",
        images: [{ src: "walk1.mp4" }]
      },
      {
        title: "Decreasing Body Size and OLED Screen Addition",
        date: "",
        text: "I decreased the size and weight of the quadruped body by ~40%, allowing it to walk more steadily. Additionally, to prepare it for robotics and STEM outreach events, I added an OLED screen display to give it a face to make it more interactive and interesting to kids.",
        images: [{ src: "newchassis.jpeg" }]
      },
      {
        title: "Gait Calibration, Final Walk, and Servo Change",
        date: "",
        text: "I swapped the SG90 servo motors for MG90 servo motors as some kept breaking under the weight, and the robot required more torque to walk with more stability. Then after some gait calibration, I had made a functioning quadruped inspired by a spider.",
        images: [{ src: "images/spider/step3.jpg" }]
      }
    ]
  }
];