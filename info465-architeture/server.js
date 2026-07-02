const express = require('express');
const app = express();
const PORT = process.env.PORT || 80; // Uses Port 80 as defined in your public security group slide specifications

// Middleware to automatically parse incoming JSON payloads from the HTML frontend
app.use(express.json());

// Mock database data for initial endpoint testing
let mockCourses = [
    { course_id: 1, course_code: 'INFO465', title: 'Projects in IS', credits: 3, max_capacity: 30 },
    { course_id: 2, course_code: 'INFO361', title: 'Systems Analysis', credits: 3, max_capacity: 35 }
];

// ENDPOINT 1: GET /api/courses - Fetches all available courses
app.get('/api/courses', (req, res) => {
    console.log("Incoming GET request for all courses...");
    res.status(200).json(mockCourses);
});

// ENDPOINT 2: GET /api/courses/:id - Fetches a specific course detail
app.get('/api/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = mockCourses.find(c => c.course_id === courseId);
    
    if (!course) {
        return res.status(404).json({ error: "Course not found" });
    }
    res.status(200).json(course);
});

// ENDPOINT 3: POST /api/register - Handles registration logic flow
app.post('/api/register', (req, res) => {
    const { student_id, course_id } = req.body;
    
    // College Project Validation Check: Ensure data was passed in correctly
    if (!student_id || !course_id) {
        return res.status(400).json({ error: "Missing required student_id or course_id parameters." });
    }

    console.log(`Student ${student_id} is requesting to register for course ${course_id}.`);
    
    // Placeholder logic (Future Sprints will replace this with a SQL database connection over port 3306)
    const enrollmentSuccess = true; 

    if (enrollmentSuccess) {
        // Returns the '201 Created' status code specified in your functional flow writeup
        res.status(201).json({
            message: "Successfully registered for course!",
            enrollment_id: Math.floor(Math.random() * 10000),
            student_id: student_id,
            course_id: course_id,
            registration_date: new Date()
        });
    } else {
        res.status(500).json({ error: "Database write error" });
    }
});

// ENDPOINT 4: DELETE /api/register/:id - Drops an enrollment record
app.delete('/api/register/:id', (req, res) => {
    const enrollmentId = req.params.id;
    console.log(`Dropping enrollment ID: ${enrollmentId}`);
    res.status(200).json({ message: `Enrollment ${enrollmentId} successfully deleted.` });
});

// Starts the server listener instance
app.listen(PORT, () => {
    console.log(`Server is live and listening on Port ${PORT}`);
});