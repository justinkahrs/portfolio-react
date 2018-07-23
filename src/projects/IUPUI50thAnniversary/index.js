import thumbnail from './images/50anniversary-thumb.png'
import hero from './images/50anniversary-hero.png'
import postit1 from './images/50anniversary-postit1.png'
import postit2 from './images/50anniversary-postit2.png'
import postit3 from './images/50anniversary-postit3.png'
import siteMap from './images/50anniversary-sitemap.png'
import landingPage from './images/landingPage.png'
import events from './images/events.png'
import ourHistory from './images/ourHistory.png'
import stories from './images/stories.png'
import fiftyFaces from './images/fiftyFaces.png'
import getInvolved from './images/getInvolved.png'
import contact from './images/contact.png'
import ixd1 from './images/50anniversary-ixd1.png'
import ixd2 from './images/50anniversary-ixd1.png'

export default {
  id: 1,
  thumbnail,
  blurb: `Here is where I write small entry text to the project. It shouldn't be more than two sentences. Something like this.`,
  date: '2017-2018',
  title: 'IUPUI 50th Anniversary',
  subTitle: 'IA / IXD',
  hero,
  context: `Indiana University Purdue University (IUPUI) is celebrating their 50th anniversary through 2018-2019 and requested a website be created for all celebratory events, stories, and projects. The client wanted a “wow” factor with high-impact imagery and content that aligns with the school’s commitment to success and innovation in Indiana and beyond. The site’s audience consists of alumni, faculty, staff, students, donors, and the surrounding community. As I was not able to see this project to completion, due to a move across the country, I have shared my contributions as a proof of concept. You can find the live site here.`,
  process: `The IU Communications development process is designed to be flexible to each client's needs. For phase one of this project, a client proposal was developed noting the scope of the new site, its adherance to web accessbility standards, and the number of custom features being implemented. 
  Once the proposal was approved, phase two began. The goal of this phase was to develop a detailed understanding of the future site. To start, an internal kick-off meeting was held with the project team. We then met with the client to go over their requests for the site and to gather context to develop a timeline moving forward. 
  For the proposed website, a stakeholder workshop was held. Post-its with high-level ideas based on what we learned from the client at this point were adhered to the meeting room walls and attendees were encouraged to review ideas and add more granular pieces of information that they’d like to see under each subject heading. The idea was to show the client this is what we know so far and we’d like for them to expand upon it. Stakeholders were then asked to identify what are the most important tasks, messages, and types of imagery they would like to see on the proposed site.`,
  processPics: [postit1, postit2, postit3],
  process2:
    'The next phase of the development process focused on strategy. During this phase, the team created a strategy based on research from the previous phase. From the ideas gathered at the stakeholder workshop, the information architect (myself) and content lead sorted through piles of Post-its to tailor the topic and focus of the project. I then created a sitemap that was presented to the internal team for review and presented to the client for approval.',
  siteMap,
  siteMapText:
    'Once the sitemap was approved, the creative phase began. This phase is where the real magic happens—wireframes are built, UI is styled, and content is written. For the build-out, I used the WCMS (IU’s chosen content management system) and developed a high-fidelity wireframe with built out pages and content notes. Once the wireframe was complete, an internal review was performed to identify any information gaps. The wireframe was then presented to the client for approval.',
  slideshow: [
    landingPage,
    events,
    ourHistory,
    stories,
    fiftyFaces,
    getInvolved,
    contact,
  ],
  slideShowText: `After sharing the wireframe with the client, I met with the front-end developer and designer on the project to discuss interaction design for custom functionalities. Websites at IU are built using atomic design principles where a page is made up of “sections” and each section can have multiple “chunks” (check out the IU Web Style Guide). All of these elements are built-in to the WCMS. However, when a client wants specific functionality outside of the system, things become a bit more complicated. In this project, the client wanted a custom event feed to highlight the anniversary events as well as an interactive timeline that allowed for multiple content types, (e.g. text only, single image, carousel).`,
  whiteBoardPics: [ixd1, ixd2],
  observationText: `All websites created by IU Communications must meet AA WCAG accessibility standards. The challenge with this project was designing custom functionality that's visually appealing, meets accessibility standards, and is usable from the client's perspective moving forward. Ultimately, this project helped me understand how to design within the constraints of the WCMS framework and university policy. Through my involvement in the stakeholder workshop, I was able to strengthen my facilitation skills. Hearing from multiple perspectives during card sorting activity provided a great starting point for understanding the goals and context-of-use as well as constructing the information architecture.`,
}
