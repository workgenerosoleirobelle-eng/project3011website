import ITImage from '../assets/images/IT.jpg'
import CSImage from '../assets/images/CS.jpg'
import DMIAImage from '../assets/images/DMIA.jpg'
import BLISImage from '../assets/images/BLIS.jpg'

const images = {
  itech: ITImage,
  comsci: CSImage,
  dmia: DMIAImage,
  blis: BLISImage,
}

export const programs = {
  bsit: {
    slug: 'bsit',
    acronym: 'BSIT',
    fullName: 'Bachelor of Science in Information Technology',
    shortName: 'Information Technology',
    theme: 'technology',
    image: images.itech,
    imageAlt: 'Students collaborating around a laptop',
    tagline: 'Build and manage technology that solves real organizational needs.',
    overview: 'The BSIT program focuses on using hardware and software technologies to plan, install, customize, operate, manage, administer, and maintain information technology infrastructure. It prepares graduates to select, develop, apply, integrate, and manage computing technologies in organizations.',
    objectives: [
      'Apply computing technologies to address user and organizational needs.',
      'Build practical capability in the deployment and management of IT infrastructure.',
      'Develop a foundation for work in information security, networks, databases, systems administration, and user support.',
    ],
    areas: ['IT infrastructure and systems administration', 'Network architecture and operations', 'Information security fundamentals', 'Database administration', 'Application and systems development', 'IT service and user support'],
    highlights: ['Networking and infrastructure', 'Database concepts and management', 'Systems analysis and development', 'Information assurance and security', 'Web and application technologies'],
    careers: ['IT support specialist', 'Network or systems administrator', 'Database administrator', 'Information security associate', 'Web or application developer', 'IT project or service coordinator'],
  },
  bscs: {
    slug: 'bscs',
    acronym: 'BSCS',
    fullName: 'Bachelor of Science in Computer Science',
    shortName: 'Computer Science',
    theme: 'computer-science',
    image: images.comsci,
    imageAlt: 'Close-up of a circuit board',
    tagline: 'Explore computing in depth, from algorithms to intelligent software.',
    overview: 'The Computer Science program is designed for students who want to study computing in depth, with emphasis on software and hardware. The discipline develops the conceptual and technical foundations used to understand, design, and evaluate computing solutions.',
    objectives: [
      'Strengthen analytical thinking through the study of computation and problem solving.',
      'Design and reason about software and computing systems using sound technical foundations.',
      'Prepare for continued learning and evolving work across the computing sector.',
    ],
    areas: ['Algorithms and computational thinking', 'Programming languages and software development', 'Computer systems and architecture', 'Data structures and databases', 'Artificial intelligence and data-oriented computing', 'Theory and mathematics for computing'],
    highlights: ['Programming and software construction', 'Data structures and algorithms', 'Computer organization and architecture', 'Operating systems and networks', 'Computing theory and intelligent systems'],
    careers: ['Software engineer or developer', 'Systems programmer', 'Quality assurance engineer', 'Data or research analyst', 'AI and machine-learning associate', 'Graduate study and computing research'],
  },
  bsdmia: {
    slug: 'bsdmia',
    acronym: 'BSDMIA',
    fullName: 'Bachelor of Science in Digital Media and Interactive Arts',
    shortName: 'Digital Media & Interactive Arts',
    theme: 'digital-media',
    image: images.dmia,
    imageAlt: 'Colorful digital light installation',
    tagline: 'Blend design, digital storytelling, and technology into interactive work.',
    overview: 'BSDMIA brings together art, design, and technology, with focus on visual design, digital storytelling, time-based media, and interactive experiences using creative production tools and practices.',
    objectives: [
      'Develop visual communication and digital storytelling skills.',
      'Create media and interactive experiences using design and technology.',
      'Build adaptable creative-technology practice for changing media industries.',
    ],
    areas: ['Graphic and visual design', 'Photography and digital imaging', 'Video editing and production', 'Animation and 3D modeling', 'Game design and interactive experiences', 'Virtual reality and digital storytelling'],
    highlights: ['Visual communication and design', 'Digital photography and image making', 'Animation and 3D production', 'Video and time-based media', 'Immersive media', "Interactive game design"],
    careers: ['Graphic or digital designer', 'Animator or 3D artist', 'Game and interactive media designer', 'Multimedia artist or producer', 'Web designer', 'Creative or advertising professional'],
  },
  blis: {
    slug: 'blis',
    acronym: 'BLIS',
    fullName: 'Bachelor of Library and Information Science',
    shortName: 'Library & Information Science',
    theme: 'library',
    image: images.blis,
    imageAlt: 'Rows of books in a library',
    tagline: 'Connect people with trusted information, knowledge, and learning.',
    overview: 'The Bachelor of Library and Information Science is a four-year program that prepares students in the development, deployment, and management of information resources in print, non-print, electronic, and digital formats.',
    objectives: [
      'Organize and describe information resources for effective discovery and use.',
      'Support information needs through ethical, accessible, user-centered services.',
      'Apply technology and professional practices to manage information collections and services.',
    ],
    areas: ['Organization of information and cataloging', 'Reference and information services', 'Library and information center management', 'Research methods and information literacy', 'Digital libraries and information technology', 'Records, archives, and preservation'],
    highlights: ['Information organization and access', 'Reference and user services', 'Library systems and digital resources', 'Collection development and management', 'Research and information literacy'],
    careers: ['Academic, public, or school librarian', 'Information or research specialist', 'Cataloging and metadata professional', 'Records or archives assistant', 'Digital resource and knowledge manager', 'Information services professional'],
    note: 'Study areas shown here are a general subject overview, not a verified current CPU course sequence. Confirm the approved curriculum with the College.',
  },
}
