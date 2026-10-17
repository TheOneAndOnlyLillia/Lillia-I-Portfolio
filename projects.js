

const PROJECTS = [
  {
    id: "drone",                              // page URL: project.html?id=drone
    title: "Autonomous Object-Tracking Drone",
    tagline: "GreenSight internship: autonomous object tracking on company drone",
    date: "Summer 2026",
    tags: ["Embedded Systems", "Computer Vision", "Raspberry Pi", "UAV"],

   
    thumbnail: "drone.mp4",
    previewVideo: "images/drone/preview.mp4", // delete this line if you don't have a clip

    // Top of the project page. type: "video" | "image" | "youtube"
    hero: { type: "video", src: "images/drone/final.mp4", poster: "images/project-1.png" },
    // YouTube instead: hero: { type: "youtube", src: "VIDEO_ID" }

    summary:
      "During my internship at GreenSight, I designed and built an interceptor electrical system by modifying an existing company drone (WISP). An OpenMV camera detects and tracks a target, a Raspberry Pi sends commands to the flight controller so the drone flies toward it, and the live camera feed is streamed to a client.",

    links: [
      // { label: "View code", url: "https://github.com/TheOneAndOnlyLillia/Drone-camera-tracking" }
    ],

    steps: [
      {
        title: "System design",
        date: "",
        text: "Planned how to add an interceptor system to the existing WISP drone: which hardware to add and how the camera, Raspberry Pi, and flight controller would communicate.",
        images: [{ src: "blocks.jpeg", caption: "System block diagram" }]
      },
      {
        title: "Object detection with OpenMV",
        date: "",
        text: "Programmed the OpenMV camera to detect and track a bright red object, as it's not a common naturally exisiting color outside, where we were planning to demo.",
        images: [{ src: "camerastream.jpg", caption: "Detection output" }]
      },
      {
        title: "Wiring and connection to WISP",
        date: "",
        text: "Connected the Raspberry Pi to the drone's flight controller so tracking data turns into flight commands, using Mission Planner to configure and monitor the drone.",
        images: [{ src: "wiring.jpeg", caption: "Bench testing" }]
      },
      {
        title: "Establishing communication with flight controller",
        date: "",
        text: "This was undoubtebly the most difficult part of the process. My code was able to calcualte how offset the center of the red object was from the center of the camera and make a flight decision, but the flight controller kept rejecting the command the Pi would send. This was ultimately due to software parameter restrictions on Mission Planner that required the drone to be on 'Guided' mode, which was only allowed if the drone was already in mid flight. Luckily I was able to override this arming command temporarily for safe testing of the code, and then reinstated the safety parameters for client demo testing.",
        images: [{ src: "feedback.jpeg", caption: "Live feed" }]
      },
      {
        title: "Flight testing",
        date: "",
        text: "Debugged the full system and tested it in flight.",
        images: [{ src: "dronefly.jpg", caption: "Outdoor flight test" }]
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