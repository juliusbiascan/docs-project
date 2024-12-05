export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageurl: "blank-document.svg",
    initialContent: ""
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageurl: "software-proposal.svg",
    initialContent: `<h1>Software Development Proposal</h1>
<h2>Project Overview</h2>
<p>This proposal outlines the development approach, timeline, and budget for [Project Name]. Our solution will address [core business need/problem] through innovative software development.</p>

<h2>Objectives</h2>
<ul>
  <li>Develop a scalable and secure solution that meets all specified requirements</li>
  <li>Implement modern technologies to ensure long-term maintainability</li>
  <li>Deliver a user-friendly interface that enhances productivity</li>
  <li>Ensure robust testing and documentation throughout development</li>
</ul>

<h2>Technical Approach</h2>
<p>Our development strategy employs industry best practices and modern architecture:</p>
<ul>
  <li>Frontend: [Technologies/Framework]</li>
  <li>Backend: [Technologies/Framework]</li>
  <li>Database: [Database Solution]</li>
  <li>Infrastructure: [Cloud/Hosting Solution]</li>
</ul>

<h2>Timeline & Deliverables</h2>
<ul>
  <li>Phase 1: Requirements Analysis & Design (2 weeks)</li>
  <li>Phase 2: Core Development (6-8 weeks)</li>
  <li>Phase 3: Testing & Quality Assurance (2 weeks)</li>
  <li>Phase 4: Deployment & Training (1 week)</li>
</ul>

<h2>Budget</h2>
<table>
  <tr><th>Component</th><th>Cost</th></tr>
  <tr><td>Development</td><td>$[Amount]</td></tr>
  <tr><td>Testing</td><td>$[Amount]</td></tr>
  <tr><td>Deployment</td><td>$[Amount]</td></tr>
  <tr><td>Total</td><td>$[Total Amount]</td></tr>
</table>`
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageurl: "project-proposal.svg",
    initialContent: `<h1>Project Proposal</h1>
<h2>Executive Summary</h2>
<p>This proposal presents a comprehensive plan for [Project Name], designed to [primary objective]. Our approach will deliver measurable value through [key benefit].</p>

<h2>Project Description</h2>
<p>We propose to [detailed project description]. This initiative will address [specific challenges] and provide [specific benefits] to [stakeholders].</p>

<h2>Goals & Objectives</h2>
<ul>
  <li>Increase [metric] by [percentage] through [method]</li>
  <li>Reduce [pain point] by implementing [solution]</li>
  <li>Enhance [area] by developing [feature/process]</li>
  <li>Achieve [specific outcome] within [timeframe]</li>
</ul>

<h2>Resources Required</h2>
<ul>
  <li>Team: [List of roles and responsibilities]</li>
  <li>Technology: [Required tools and systems]</li>
  <li>Infrastructure: [Necessary facilities/equipment]</li>
  <li>Budget: [Financial requirements]</li>
</ul>

<h2>Timeline</h2>
<table>
  <tr><th>Milestone</th><th>Date</th><th>Deliverables</th></tr>
  <tr><td>Project Initiation</td><td>[Date]</td><td>[Deliverables]</td></tr>
  <tr><td>Planning Phase</td><td>[Date]</td><td>[Deliverables]</td></tr>
  <tr><td>Implementation</td><td>[Date]</td><td>[Deliverables]</td></tr>
  <tr><td>Project Completion</td><td>[Date]</td><td>[Deliverables]</td></tr>
</table>`
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageurl: "business-letter.svg",
    initialContent: `<p>[Your Name]</p>
<p>[Your Address]</p>
<p>[City, State ZIP]</p>
<p>[Date]</p>

<p>[Recipient Name]</p>
<p>[Company Name]</p>
<p>[Address]</p>
<p>[City, State ZIP]</p>

<p>Dear [Recipient Name],</p>

<p>Body of your letter...</p>

<p>Sincerely,</p>
<p>[Your Name]</p>`
  },
  {
    id: "resume",
    label: "Resume",
    imageurl: "resume.svg",
    initialContent: `<div style="max-width: 800px; margin: 0 auto;">
<h1 style="text-align: center;">[Your Full Name]</h1>
<p style="text-align: center;">[City, State] • [Phone] • [Professional Email]</p>
<p style="text-align: center;"><a href="[LinkedIn URL]">LinkedIn</a> • <a href="[Portfolio URL]">Portfolio</a></p>

<h2>Professional Summary</h2>
<p>[Number] years of experience in [industry/field]. Proven track record of [key achievement] and expertise in [key skills]. Seeking to leverage my background in [specific skills] to excel as a [target position].</p>

<h2>Professional Experience</h2>
<h3>[Company Name] • [Location] • [Start Date - End Date]</h3>
<p><strong>[Job Title]</strong></p>
<ul>
  <li>Increased [metric] by [percentage] through [specific action]</li>
  <li>Led team of [number] professionals in delivering [project/result]</li>
  <li>Developed and implemented [system/process] resulting in [benefit]</li>
  <li>Collaborated with [stakeholders] to achieve [objective]</li>
</ul>

<h2>Education</h2>
<p><strong>[University Name]</strong> - [Location]</p>
<p>[Degree Type] in [Field of Study], [Graduation Year]</p>
<p>Relevant Coursework: [Course 1], [Course 2], [Course 3]</p>

<h2>Technical Skills</h2>
<ul>
  <li><strong>Programming:</strong> [Languages/Frameworks]</li>
  <li><strong>Tools:</strong> [Relevant Software/Tools]</li>
  <li><strong>Methodologies:</strong> [Relevant Methodologies]</li>
</ul>

<h2>Certifications</h2>
<ul>
  <li>[Certification Name] - [Issuing Organization], [Year]</li>
</ul>`
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageurl: "cover-letter.svg",
    initialContent: `<p>[Your Name]</p>
<p>[Your Address]</p>
<p>[City, State ZIP]</p>
<p>[Date]</p>

<p>[Hiring Manager's Name]</p>
<p>[Company Name]</p>
<p>[Address]</p>
<p>[City, State ZIP]</p>

<p>Dear [Hiring Manager's Name],</p>

<p>I am writing to express my interest in the [Position] role at [Company Name]...</p>

<p>Sincerely,</p>
<p>[Your Name]</p>`
  },
  {
    id: "letter",
    label: "Letter",
    imageurl: "letter.svg",
    initialContent: `<p>[Your Name]</p>
<p>[Your Address]</p>
<p>[City, State ZIP]</p>
<p>[Date]</p>

<p>[Recipient Name]</p>
<p>[Address]</p>
<p>[City, State ZIP]</p>

<p>Dear [Recipient Name],</p>

<p>Body of your letter...</p>

<p>Best regards,</p>
<p>[Your Name]</p>`
  },
];