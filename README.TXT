============================================================
README: ONLINE COURSE REGISTRATION SYSTEM UI/UX DESIGN (TEAM 3)
============================================================

TEAM CONTRIBUTIONS:
- Keya Dhanani: Initialized global shared 'style.css' architecture and designed 'index.html'.
- Gavin Harvey: Structured the course data grids and search configurations in 'search.html'.
- J'amari Fripp: Developed 'registration.html' and integrated the custom JavaScript validation loops.
- Bryan Ly: Constructed the administrative viewpoints in 'schedule.html' and 'enrollment.html'.

SCREEN SUMMARIES:
- index.html: Central routing hub providing explicit gateway navigation paths for students and faculty.
- search.html: Allows lookup capabilities filtered by department, modality, or instructor profiles.
- registration.html: Handles student session tracking, course drops, and validation warning testing.
- schedule.html: Allows instructors to authenticate and visualize their assigned weekly courses.
- enrollment.html: Displays administrative student rosters for specific session tracking.

HTML/CSS/JS TECHNIQUES USED:
- External CSS Grid & Flexbox layouts for modern, default-free uniform UI components.
- Modular layout styling to secure identical header brand borders and button mechanics across all pages.
- JavaScript conditional algorithms to emulate duplicate verification parameters and capacity limits.

DESIGN CHALLENGES & DECISIONS:
- Decision: Replaced fragmented inline stylesheets with a single shared framework (style.css) to perfectly enforce the visual consistency requirement.
- Challenge: Providing functional user interactions showcasing dynamic validations without an active database layer.
- Resolution: Engineered select inputs that trigger realistic error feedback text strings inside the DOM when the student submit action is clicked.