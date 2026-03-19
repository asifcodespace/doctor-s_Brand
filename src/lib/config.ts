export const config = {
  doctor: {
    name: "Dr. Nafis",
    title: "General Practitioner",
    qualifications: "MBBS (DU), DMU (Ultrasound)",
    bio: "Dr. Nafis is an experienced General Practitioner dedicated to providing comprehensive and compassionate healthcare. With a strong background in both MBBS and FCPS, she specializes in diagnosing and treating a wide array of medical conditions, offering personalized care to each of her patients.",
    image: "/images/Nafis_Tarafer.jpeg", // Placeholder for actual doctor image
  },
  contact: {
    phone: "+880 1753997900",
    email: "nafistarafder@gmail.com",
    address: "Modern Medical Services, Kanaighat, Sylhet",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024424301397!2d90.39108011536269!3d23.75085808458925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a3683fbbc%3A0x6b3b246a4afc112!2sDhaka!5e0!3m2!1sen!2sbd!4v1625000000000!5m2!1sen!2sbd", // Example embed URL
    workingHours: [
        { day: "Saturday - Thursday", time: "05:00 PM - 8.00 PM" },
        { day: "FRiday", time: "Closed" },
    ]
  },
  services: [
    {
      id: "general-consultation",
      title: "General Consultation",
      description: "Comprehensive health assessment and diagnosis for all ages in a calm, professional setting.",
      icon: "stethoscope" // Placeholder for an icon name or SVG path
    },
    {
      id: "preventive-care",
      title: "Preventive Care",
      description: "Routine checkups, vaccinations, and screenings to keep you healthy before illness begins.",
      icon: "shield-check"
    },
    {
      id: "chronic-disease-management",
      title: "Chronic Disease Management",
      description: "Ongoing support and treatment plans for diabetes, hypertension, and long-term conditions.",
      icon: "heartbeat"
    },
    {
       id: "health-screenings",
       title: "Health Screenings",
       description: "Comprehensive health assessments to detect potential issues early on.",
       icon: "clipboard-list"
    }
  ],
  socials: [
    { platform: "Facebook", url: "https://facebook.com/dravens", icon: "facebook" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/dravens", icon: "linkedin" },
    { platform: "Twitter", url: "https://twitter.com/dravens", icon: "twitter" }
  ],
  branding: {
    colors: {
        primaryUrlBackground: "#1e3a3a", // extracted roughly, will refine later
        primaryText: "#1b3a3c",
        secondary: "#e0ede0",
        accent: "#a89f78",
    },
    logos: {
        main: "/images/logo-main.png", // Will place the image here later
        light: "/images/logo-light.png"
    }
  }
};
