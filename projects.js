

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
      // { label: "View code", url: "https://github.com/TheOneAndOnlyLillia/Drone-camera-tracking" }
    ],

    steps: [
      {
        title: "Block diagram of electronic system architecture",
        date: "",
        text: "Planned how to add an object tracking system to the existing WISP drone after our intern project design meeting to meet a current market demand in the industry GreenSight operated in. The entire project was to build a large 'mother' drone that would deploy smaller drones that would track and fly towards an object. I researched and then planned out which hardware to add and how the camera, Raspberry Pi, and flight controller would communicate with the drone.",
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
        text: "This was undoubtebly the most difficult part of the process. I had to dig through the Mission Planner architecture to figure out how to send commands to the flight controller, which is done through finding its specific id, along with cutting and micro to micro usb cabke to attach to the drone. My code was able to calculate how offset the center of the red object was from the center of the camera and make a flight decision, but the flight controller kept rejecting the command the Pi would send. This was ultimately due to software parameter restrictions on Mission Planner that required the drone to be on 'Guided' mode, which was only allowed if the drone was already in mid flight. Luckily I was able to override this arming command temporarily for safe testing of the code, and then reinstated the safety parameters for client demo testing.",
        images: [{ src: "feedback.jpeg" }]
      },
      {
        title: "Flight testing",
        date: "",
        text: "We took the drone outside to an isolated parking lot, where we would first remote control fly the drone up to a height of about 2 meters on 'Stabilize', and then switched to 'Guided' mode to let the camera feed and Pi script run. The camera feed was also streamed on a computer to allow the client to be able to see the tracking in real time. ",
        images: [{ src: "dronefly.jpg" }]
      }
    ]
  },

  {
    id: "biohyd",
    title: "Bioimpedance Hydration Detector",
    tagline: "Measuring a patient's hydration using bioimpedance (in progress)",
    date: "In progress",
    tags: ["Biomedical", "Circuit Design", "Sensors"],
    thumbnail: "images/project-2.png",
    hero: { type: "image", src: "images/project-2.png" },
    summary:
      "An in-progress device that calculates the hydration of a patient's body using bioimpedance, designed with older individuals in mind.",
    links: [],
    steps: [
      {
        title: "Research & concept",
        date: "",
        text: "Researched how bioimpedance measurements relate to body hydration and what the device needs to work for older patients.",
        images: [{ src: "images/biohyd/step1.jpg", caption: "Concept sketch" }]
      },
      {
        title: "Prototype (in progress)",
        date: "",
        text: "Describe where the prototype is now and what's next.",
        images: [{ src: "images/biohyd/step2.jpg", caption: "Current prototype" }]
      }
    ]
  },

  {
    id: "spider",
    title: "Spider-Inspired Quadruped",
    tagline: "A walking robot that balances on very small ground contact points",
    date: "",
    tags: ["Robotics", "Servos", "Prototyping"],
    thumbnail: "images/project-3.png",
    hero: { type: "image", src: "images/project-3.png" },
    summary:
      "A quadruped robot capable of balancing and walking on very small ground contact points, used for robotics community outreach.",
    links: [],
    steps: [
      {
        title: "Chassis & legs",
        date: "",
        text: "Designed the body and four legs, inspired by how spiders walk.",
        images: [{ src: "images/spider/step1.jpg", caption: "Chassis build" }]
      },
      {
        title: "Servo control & walking gait",
        date: "",
        text: "Wired and programmed the servos, then tuned the gait so the robot balances on its small contact points.",
        images: [{ src: "images/spider/step2.jpg", caption: "Gait testing" }]
      },
      {
        title: "Community outreach",
        date: "",
        text: "Used the robot in robotics outreach events.",
        images: [{ src: "images/spider/step3.jpg", caption: "Outreach demo" }]
      }
    ]
  }
];