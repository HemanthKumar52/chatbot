// School Database - All information stored here
const SCHOOL_DATA = {
    // Basic Information
    name: "BGS International School",
    motto: "Learning Today, Leading Tomorrow",
    established: "1980",
    yearsRunning: "44 years",
    founder: "Shri. P. Sekar",
    chairman: "S. Sundar",
    academicDirector: "Mr. John Lawrence",
    financeMediaDirector: "S. Padma",
    principal: "Mr. Venkatesan",
    
    // Department HODs
    departments: {
        english: {
            hod: "Mr. Giri",
            name: "English Department"
        }
    },
    
    // Contact Information
    contact: {
        address: "123 Education Lane, Knowledge City, State 10101",
        phone: "(555) 123-4567",
        phone2: "(555) 123-4568",
        email: "info@bgs.edu",
        website: "www.bgs.edu",
        emergency: "(555) 911-9111"
    },
    
    // School Hours
    hours: {
        regular: "8:00 AM - 3:00 PM (Monday to Friday)",
        office: "7:30 AM - 4:30 PM (Monday to Friday)",
        weekend: "9:00 AM - 1:00 PM (Saturday - Office only)",
        holidays: "Closed on public holidays",
        summer: "Office hours: 9:00 AM - 2:00 PM"
    },
    
    // Academic Information
    academics: {
        grades: "Pre-K through 12th Grade",
        curriculum: "CBSE with STEM Focus",
        languages: "English (Primary), Spanish, French, Mandarin",
        specialPrograms: [
            "STEM Program",
            "International Baccalaureate",
            "Advanced Placement (AP)",
            "Arts Integration",
            "Sports Academy"
        ],
        faculty: "85+ certified teachers",
        studentRatio: "15:1 student-teacher ratio"
    },
    
    // Facilities
    facilities: [
        "Science Labs (Physics, Chemistry, Biology)",
        "Computer Labs with AI/ML setup",
        "Library with 20,000+ books",
        "Sports Complex (Indoor & Outdoor)",
        "Swimming Pool",
        "Art and Music Studios",
        "Auditorium (500 capacity)",
        "Cafeteria with healthy meals",
        "Medical Room with nurse",
        "Transportation Services"
    ],
    
    // Admission Process
    admissions: {
        process: [
            "1. Submit online application form",
            "2. Entrance assessment test",
            "3. Student and parent interview",
            "4. Submit required documents",
            "5. Payment of admission fee"
        ],
        requirements: [
            "Birth Certificate",
            "Previous school records",
            "Transfer Certificate",
            "Medical fitness certificate",
            "4 passport-size photographs"
        ],
        deadlines: {
            regular: "January 31st for next academic year",
            late: "March 15th (with late fee)",
            international: "December 31st"
        },
        ageCriteria: {
            "Pre-K": "3-4 years",
            "Kindergarten": "5 years",
            "Grade 1": "6 years",
            "Each grade": "+1 year increment"
        }
    },
    
    // Fee Structure
    fees: {
        registration: "$500 (one-time, non-refundable)",
        tuition: {
            "Pre-K to Grade 5": "$12,000/year",
            "Grade 6 to 8": "$14,000/year",
            "Grade 9 to 12": "$16,000/year"
        },
        additional: {
            "Transportation": "$1,500/year",
            "Lunch": "$800/year",
            "Activity Fee": "$300/year",
            "Technology Fee": "$200/year"
        },
        payment: {
            options: ["Annual", "Semi-annual", "Quarterly"],
            discount: "5% discount on annual payment",
            lateFee: "$50/month after due date"
        },
        scholarships: "Available based on merit and need"
    },
    
    // Calendar 2024-2025
    calendar: {
        academicYear: "2024-2025",
        start: "August 15, 2024",
        end: "June 10, 2025",
        holidays: [
            "Labor Day: September 2, 2024",
            "Thanksgiving Break: November 25-29, 2024",
            "Winter Break: December 23, 2024 - January 3, 2025",
            "Spring Break: March 17-21, 2025",
            "Memorial Day: May 26, 2025"
        ],
        exams: {
            term1: "October 14-18, 2024",
            term2: "February 10-14, 2025",
            final: "May 19-23, 2025"
        }
    },
    
    // Uniform
    uniform: {
        summer: "Light blue shirt, navy blue pants/skirt, school tie",
        winter: "White shirt, navy blue blazer, pants/skirt, tie",
        sports: "White t-shirt, navy blue shorts/track pants",
        shoes: "Black leather shoes, white socks",
        accessories: "School ID card mandatory, no jewelry"
    },
    
    // Transportation
    transport: {
        available: true,
        routes: "Covering all major areas of the city",
        fees: "$1,500/year or $150/month",
        timing: "Pickup: 7:00-7:30 AM, Drop: 3:30-4:00 PM",
        contact: "Transport Incharge: Mr. David Lee (555) 123-4570"
    },
    
    // Extracurricular
    extracurricular: {
        sports: ["Basketball", "Soccer", "Swimming", "Cricket", "Table Tennis"],
        clubs: ["Science Club", "Debate Society", "Music Band", "Drama Club", "Robotics"],
        competitions: ["Science Fair", "Math Olympiad", "Sports Day", "Annual Day"]
    },
    
    // Policies
    policies: {
        attendance: "Minimum 75% required",
        discipline: "Zero tolerance for bullying",
        homework: "Daily assignments, weekly projects",
        parentTeacher: "Monthly meetings, online portal access"
    }
};

// Configuration
const CONFIG = {
    useAI: false, // Set to true to enable DeepSeek AI responses
    apiEndpoint: '/api/chat' // Vercel serverless function endpoint
};

// DOM Elements
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const messagesDiv = document.getElementById('messages');
const typingIndicator = document.getElementById('typingIndicator');

// Add message to chat
function addMessage(text, sender = 'bot', html = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.innerHTML = sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
    
    const content = document.createElement('div');
    content.className = 'content';
    
    const senderSpan = document.createElement('div');
    senderSpan.className = 'sender';
    senderSpan.textContent = sender === 'bot' ? 'School Assistant' : 'You';
    
    const textDiv = document.createElement('div');
    textDiv.className = 'text';
    
    if (html) {
        textDiv.innerHTML = text;
    } else {
        textDiv.textContent = text;
    }
    
    const timeSpan = document.createElement('div');
    timeSpan.className = 'time';
    timeSpan.textContent = getCurrentTime();
    
    content.appendChild(senderSpan);
    content.appendChild(textDiv);
    content.appendChild(timeSpan);
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    
    messagesDiv.appendChild(messageDiv);
    
    // Scroll to bottom
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Get current time in HH:MM format
function getCurrentTime() {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
}

// Show typing indicator
function showTyping() {
    typingIndicator.style.display = 'flex';
}

// Hide typing indicator
function hideTyping() {
    typingIndicator.style.display = 'none';
}

// Handle quick questions from sidebar
function askQuickQuestion(type) {
    const questions = {
        'leadership': 'Who are the school leaders?',
        'founder': 'Who is the founder of BGS?',
        'hours': 'What are the school hours?',
        'contact': 'What are the contact details?',
        'admissions': 'What is the admission process?',
        'fees': 'What is the fee structure?',
        'uniform': 'What is the uniform policy?',
        'holidays': 'When are the school holidays?',
        'transport': 'Is transportation available?',
        'curriculum': 'What curriculum do you follow?'
    };
    
    if (questions[type]) {
        userInput.value = questions[type];
        sendMessage();
    }
}

// Send message function
async function sendMessage(customMessage = null) {
    const message = customMessage || userInput.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    
    // Clear input
    if (!customMessage) {
        userInput.value = '';
        userInput.focus();
    }
    
    // Show typing indicator
    showTyping();
    
    // Simulate thinking delay
    setTimeout(async () => {
        hideTyping();
        
        let response = getResponse(message);
        
        // Optionally enhance with AI (if enabled and deployed)
        if (CONFIG.useAI && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
            try {
                const aiResponse = await getAIResponse(message);
                if (aiResponse) {
                    response = aiResponse;
                }
            } catch (error) {
                console.error('AI request failed, using local response:', error);
                // Fall back to local response
            }
        }
        
        addMessage(response, 'bot', true);
        
        // Add quick suggestions for follow-up
        addSuggestions(message);
    }, 1000 + Math.random() * 500);
}

// Get AI response from Vercel serverless function
async function getAIResponse(message) {
    try {
        const response = await fetch(CONFIG.apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message,
                useAI: CONFIG.useAI
            })
        });

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();
        return data.aiResponse;
    } catch (error) {
        console.error('AI API Error:', error);
        return null;
    }
}

// Get response based on user query
function getResponse(message) {
    const query = message.toLowerCase().trim();
    
    // BGS Specific Questions - Priority responses
    if (query.includes('founder') || query.match(/who\s+(founded|started|established)/)) {
        return `The founder of <strong>${SCHOOL_DATA.name}</strong> is <strong>${SCHOOL_DATA.founder}</strong>.`;
    }
    
    if (query.includes('chairman')) {
        return `The chairman of <strong>${SCHOOL_DATA.name}</strong> is <strong>${SCHOOL_DATA.chairman}</strong>.`;
    }
    
    if (query.includes('academic director') || (query.includes('academic') && query.includes('director'))) {
        return `The Academic Director of <strong>${SCHOOL_DATA.name}</strong> is <strong>${SCHOOL_DATA.academicDirector}</strong>.`;
    }
    
    if ((query.includes('finance') && query.includes('director')) || 
        (query.includes('media') && query.includes('director')) ||
        query.includes('finance and media')) {
        return `The Finance and Media Director of <strong>${SCHOOL_DATA.name}</strong> is <strong>${SCHOOL_DATA.financeMediaDirector}</strong>.`;
    }
    
    if (query.includes('principal') || query.includes('principe')) {
        return `The Principal of <strong>${SCHOOL_DATA.name}</strong> is <strong>${SCHOOL_DATA.principal}</strong>.`;
    }
    
    if ((query.includes('hod') || query.includes('head of department')) && query.includes('english')) {
        return `The Head of Department (HOD) of the English Department is <strong>${SCHOOL_DATA.departments.english.hod}</strong>.`;
    }
    
    if (query.match(/how\s+(many|long)/i) && (query.includes('year') || query.includes('running') || query.includes('old'))) {
        return `<strong>${SCHOOL_DATA.name}</strong> has been running for <strong>${SCHOOL_DATA.yearsRunning}</strong> since its establishment in <strong>${SCHOOL_DATA.established}</strong>.`;
    }
    
    // Check for general leadership query
    if (query.includes('leadership') || query.includes('management') || query.includes('who runs')) {
        return formatLeadershipInfo();
    }
    
    // Check for specific patterns
    if (query.includes('hello') || query.includes('hi') || query.includes('hey')) {
        return `Hello! Welcome to <strong>${SCHOOL_DATA.name}</strong>. How can I assist you today?`;
    }
    
    if (query.includes('thank')) {
        return `You're welcome! 😊 If you have more questions, feel free to ask.`;
    }
    
    if (query.includes('hour') || query.includes('time') || query.includes('open')) {
        return formatSchoolHours();
    }
    
    if (query.includes('contact') || query.includes('phone') || query.includes('email')) {
        return formatContactInfo();
    }
    
    if (query.includes('address') || query.includes('location')) {
        return `Our school is located at:<br><strong>${SCHOOL_DATA.contact.address}</strong><br><br>You can find us on Google Maps: <a href="#" style="color: #4f46e5;">View on Map</a>`;
    }
    
    if (query.includes('principal') || query.includes('head')) {
        return `Our Principal is <strong>${SCHOOL_DATA.principal}</strong> and Vice Principal is <strong>${SCHOOL_DATA.vicePrincipal}</strong>.`;
    }
    
    if (query.includes('admission') || query.includes('apply') || query.includes('enroll')) {
        return formatAdmissionInfo();
    }
    
    if (query.includes('fee') || query.includes('cost') || query.includes('tuition')) {
        return formatFeeStructure();
    }
    
    if (query.includes('uniform') || query.includes('dress')) {
        return formatUniformInfo();
    }
    
    if (query.includes('holiday') || query.includes('break') || query.includes('vacation')) {
        return formatHolidayInfo();
    }
    
    if (query.includes('transport') || query.includes('bus')) {
        return formatTransportInfo();
    }
    
    if (query.includes('curriculum') || query.includes('syllabus') || query.includes('program')) {
        return formatCurriculumInfo();
    }
    
    if (query.includes('facilit') || query.includes('lab') || query.includes('library')) {
        return formatFacilities();
    }
    
    if (query.includes('sport') || query.includes('activity') || query.includes('extracurricular')) {
        return formatExtracurricular();
    }
    
    if (query.includes('calendar') || query.includes('schedule')) {
        return formatCalendar();
    }
    
    if (query.includes('help')) {
        return `I can help you with information about:<br><br>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div><i class="fas fa-user-tie"></i> Leadership Team</div>
            <div><i class="fas fa-clock"></i> School Hours</div>
            <div><i class="fas fa-phone"></i> Contact Info</div>
            <div><i class="fas fa-file-signature"></i> Admissions</div>
            <div><i class="fas fa-dollar-sign"></i> Fee Structure</div>
            <div><i class="fas fa-tshirt"></i> Uniform Policy</div>
            <div><i class="fas fa-calendar"></i> School Calendar</div>
            <div><i class="fas fa-bus"></i> Transportation</div>
            <div><i class="fas fa-book"></i> Curriculum</div>
        </div><br>
        Try asking about any of these topics!`;
    }
    
    if (query.includes('about') || query.includes('school info')) {
        return `About <strong>${SCHOOL_DATA.name}</strong>:<br><br>
        • Established: ${SCHOOL_DATA.established}<br>
        • Years Running: ${SCHOOL_DATA.yearsRunning}<br>
        • Founder: ${SCHOOL_DATA.founder}<br>
        • Chairman: ${SCHOOL_DATA.chairman}<br>
        • Principal: ${SCHOOL_DATA.principal}<br>
        • Motto: "${SCHOOL_DATA.motto}"<br>
        • Grades: ${SCHOOL_DATA.academics.grades}<br>
        • Students: 1200+<br>
        • Faculty: ${SCHOOL_DATA.academics.faculty}<br>
        • Curriculum: ${SCHOOL_DATA.academics.curriculum}<br><br>
        We provide quality education with a focus on holistic development.`;
    }
    
    // Default response
    return `I understand you're asking about: <strong>"${message}"</strong><br><br>
    I can help you with school-related information. Here are some things you can ask:<br>
    • What are the school hours?<br>
    • How do I apply for admission?<br>
    • What is the fee structure?<br>
    • What is the uniform policy?<br>
    • When are the holidays?<br>
    • Is transportation available?<br>
    • What curriculum do you follow?<br><br>
    Try rephrasing your question or click on the quick question buttons!`;
}

// Formatting functions
function formatSchoolHours() {
    return `<strong>School Hours:</strong><br><br>
    <div style="background: #f8fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #4f46e5;">
        🏫 <strong>Regular School:</strong> ${SCHOOL_DATA.hours.regular}<br>
        🏢 <strong>Office Hours:</strong> ${SCHOOL_DATA.hours.office}<br>
        📅 <strong>Weekend Office:</strong> ${SCHOOL_DATA.hours.weekend}<br>
        🏖️ <strong>Summer Hours:</strong> ${SCHOOL_DATA.hours.summer}<br>
        ⚠️ <strong>Note:</strong> ${SCHOOL_DATA.hours.holidays}
    </div>`;
}

function formatContactInfo() {
    return `<strong>Contact Information:</strong><br><br>
    <div style="background: #f8fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #10b981;">
        📍 <strong>Address:</strong> ${SCHOOL_DATA.contact.address}<br>
        📞 <strong>Phone:</strong> ${SCHOOL_DATA.contact.phone} (Main)<br>
        📱 <strong>Phone 2:</strong> ${SCHOOL_DATA.contact.phone2}<br>
        🚨 <strong>Emergency:</strong> ${SCHOOL_DATA.contact.emergency}<br>
        📧 <strong>Email:</strong> ${SCHOOL_DATA.contact.email}<br>
        🌐 <strong>Website:</strong> ${SCHOOL_DATA.contact.website}
    </div>`;
}

function formatAdmissionInfo() {
    return `<strong>Admission Process:</strong><br><br>
    <div style="background: #f8fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #f59e0b;">
        <strong>Steps:</strong><br>
        ${SCHOOL_DATA.admissions.process.map(step => `• ${step}`).join('<br>')}<br><br>
        
        <strong>Required Documents:</strong><br>
        ${SCHOOL_DATA.admissions.requirements.map(doc => `• ${doc}`).join('<br>')}<br><br>
        
        <strong>Deadlines:</strong><br>
        • Regular: ${SCHOOL_DATA.admissions.deadlines.regular}<br>
        • Late: ${SCHOOL_DATA.admissions.deadlines.late}<br>
        • International: ${SCHOOL_DATA.admissions.deadlines.international}<br><br>
        
        <strong>Age Criteria:</strong><br>
        ${Object.entries(SCHOOL_DATA.admissions.ageCriteria).map(([grade, age]) => `• ${grade}: ${age}`).join('<br>')}
    </div>`;
}

function formatFeeStructure() {
    return `<strong>Fee Structure 2024-2025:</strong><br><br>
    <div style="background: #f8fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #ef4444;">
        <strong>Registration Fee:</strong><br>
        • ${SCHOOL_DATA.fees.registration}<br><br>
        
        <strong>Annual Tuition Fees:</strong><br>
        ${Object.entries(SCHOOL_DATA.fees.tuition).map(([grade, fee]) => `• ${grade}: ${fee}`).join('<br>')}<br><br>
        
        <strong>Additional Fees:</strong><br>
        ${Object.entries(SCHOOL_DATA.fees.additional).map(([item, fee]) => `• ${item}: ${fee}`).join('<br>')}<br><br>
        
        <strong>Payment Options:</strong><br>
        • ${SCHOOL_DATA.fees.payment.options.join(', ')}<br>
        • ${SCHOOL_DATA.fees.payment.discount}<br>
        • ${SCHOOL_DATA.fees.payment.lateFee}<br><br>
        
        <strong>Note:</strong> ${SCHOOL_DATA.fees.scholarships}
    </div>`;
}

function formatUniformInfo() {
    return `<strong>Uniform Policy:</strong><br><br>
    <div style="background: #f8fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
        <strong>Summer Uniform:</strong><br>
        • ${SCHOOL_DATA.uniform.summer}<br><br>
        
        <strong>Winter Uniform:</strong><br>
        • ${SCHOOL_DATA.uniform.winter}<br><br>
        
        <strong>Sports Uniform:</strong><br>
        • ${SCHOOL_DATA.uniform.sports}<br><br>
        
        <strong>Shoes:</strong> ${SCHOOL_DATA.uniform.shoes}<br>
        <strong>Accessories:</strong> ${SCHOOL_DATA.uniform.accessories}
    </div>`;
}

function formatHolidayInfo() {
    return `<strong>Holiday Calendar 2024-2025:</strong><br><br>
    <div style="background: #f8fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #f97316;">
        <strong>Academic Year:</strong> ${SCHOOL_DATA.calendar.academicYear}<br>
        <strong>Start Date:</strong> ${SCHOOL_DATA.calendar.start}<br>
        <strong>End Date:</strong> ${SCHOOL_DATA.calendar.end}<br><br>
        
        <strong>Major Holidays:</strong><br>
        ${SCHOOL_DATA.calendar.holidays.map(holiday => `• ${holiday}`).join('<br>')}<br><br>
        
        <strong>Exam Periods:</strong><br>
        • Term 1: ${SCHOOL_DATA.calendar.exams.term1}<br>
        • Term 2: ${SCHOOL_DATA.calendar.exams.term2}<br>
        • Final: ${SCHOOL_DATA.calendar.exams.final}
    </div>`;
}

function formatTransportInfo() {
    return SCHOOL_DATA.transport.available ? 
        `<strong>Transportation Services:</strong><br><br>
        <div style="background: #f8fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #06b6d4;">
            ✅ <strong>Available:</strong> Yes<br>
            🗺️ <strong>Routes:</strong> ${SCHOOL_DATA.transport.routes}<br>
            💰 <strong>Fees:</strong> ${SCHOOL_DATA.transport.fees}<br>
            ⏰ <strong>Timings:</strong> ${SCHOOL_DATA.transport.timing}<br>
            📞 <strong>Contact:</strong> ${SCHOOL_DATA.transport.contact}
        </div>` :
        `🚫 <strong>Transportation:</strong> Currently not available.`;
}

function formatCurriculumInfo() {
    return `<strong>Curriculum Information:</strong><br><br>
    <div style="background: #f8fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #84cc16;">
        <strong>Grades Offered:</strong> ${SCHOOL_DATA.academics.grades}<br>
        <strong>Curriculum:</strong> ${SCHOOL_DATA.academics.curriculum}<br>
        <strong>Languages:</strong> ${SCHOOL_DATA.academics.languages}<br>
        <strong>Student-Teacher Ratio:</strong> ${SCHOOL_DATA.academics.studentRatio}<br><br>
        
        <strong>Special Programs:</strong><br>
        ${SCHOOL_DATA.academics.specialPrograms.map(program => `• ${program}`).join('<br>')}
    </div>`;
}

function formatFacilities() {
    return `<strong>School Facilities:</strong><br><br>
    <div style="background: #f8fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #ec4899;">
        ${SCHOOL_DATA.facilities.map(facility => `🏛️ ${facility}`).join('<br>')}
    </div>`;
}

function formatExtracurricular() {
    return `<strong>Extracurricular Activities:</strong><br><br>
    <div style="background: #f8fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #f43f5e;">
        <strong>Sports:</strong><br>
        ${SCHOOL_DATA.extracurricular.sports.map(sport => `• ${sport}`).join('<br>')}<br><br>
        
        <strong>Clubs & Societies:</strong><br>
        ${SCHOOL_DATA.extracurricular.clubs.map(club => `• ${club}`).join('<br>')}<br><br>
        
        <strong>Annual Competitions:</strong><br>
        ${SCHOOL_DATA.extracurricular.competitions.map(comp => `• ${comp}`).join('<br>')}
    </div>`;
}

function formatCalendar() {
    return formatHolidayInfo(); // Reuse holiday info for now
}

// New formatting function for leadership info
function formatLeadershipInfo() {
    return `<strong>BGS Leadership Team:</strong><br><br>
    <div style="background: #f8fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #4f46e5;">
        👤 <strong>Founder:</strong> ${SCHOOL_DATA.founder}<br>
        🎯 <strong>Chairman:</strong> ${SCHOOL_DATA.chairman}<br>
        📚 <strong>Academic Director:</strong> ${SCHOOL_DATA.academicDirector}<br>
        💼 <strong>Finance & Media Director:</strong> ${SCHOOL_DATA.financeMediaDirector}<br>
        🏫 <strong>Principal:</strong> ${SCHOOL_DATA.principal}<br><br>
        
        <strong>Department Heads:</strong><br>
        📖 <strong>English HOD:</strong> ${SCHOOL_DATA.departments.english.hod}
    </div>`;
}

// Add follow-up suggestions
function addSuggestions(message) {
    const query = message.toLowerCase();
    
    // Don't add suggestions for every message
    if (Math.random() > 0.5) return;
    
    let suggestions = [];
    
    if (query.includes('founder') || query.includes('chairman')) {
        suggestions = ['Who is the principal?', 'Tell me about leadership team'];
    } else if (query.includes('principal') || query.includes('director')) {
        suggestions = ['Who is the founder?', 'Who is the chairman?'];
    } else if (query.includes('hod') || query.includes('english')) {
        suggestions = ['Tell me about other departments', 'Who is the principal?'];
    } else if (query.includes('year') || query.includes('running')) {
        suggestions = ['Who founded the school?', 'Tell me about BGS'];
    } else if (query.includes('hour')) {
        suggestions = ['What are office hours?', 'When are holidays?'];
    } else if (query.includes('contact')) {
        suggestions = ['What is the address?', 'Emergency contact?'];
    } else if (query.includes('admission')) {
        suggestions = ['What documents are needed?', 'What is the age criteria?'];
    } else if (query.includes('fee')) {
        suggestions = ['Payment options?', 'Scholarships available?'];
    } else if (query.includes('uniform')) {
        suggestions = ['Sports uniform?', 'Winter uniform?'];
    }
    
    if (suggestions.length > 0) {
        setTimeout(() => {
            const suggestionsDiv = document.createElement('div');
            suggestionsDiv.style.marginTop = '15px';
            suggestionsDiv.innerHTML = `<small>You might also want to know:</small><br>` +
                suggestions.map(s => 
                    `<span class="suggestion-tag" onclick="sendMessage('${s}')" style="margin-top: 5px; display: inline-block;">${s}</span>`
                ).join(' ');
            
            const lastBotMessage = document.querySelector('.message.bot:last-child .content');
            if (lastBotMessage) {
                lastBotMessage.appendChild(suggestionsDiv);
            }
        }, 500);
    }
}

// Handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

// Voice input (basic implementation)
function startVoiceInput() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            userInput.value = transcript;
            sendMessage();
        };
        
        recognition.start();
        
        // Visual feedback
        const voiceBtn = document.getElementById('voiceBtn');
        const originalHTML = voiceBtn.innerHTML;
        voiceBtn.innerHTML = '<i class="fas fa-microphone-slash"></i>';
        voiceBtn.style.background = '#ef4444';
        
        recognition.onend = function() {
            voiceBtn.innerHTML = originalHTML;
            voiceBtn.style.background = '#10b981';
        };
    } else {
        alert('Voice recognition is not supported in your browser.');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Focus on input
    userInput.focus();
    
    // Add some initial suggestions
    setTimeout(() => {
        const suggestions = document.querySelector('.suggestions');
        if (suggestions.children.length === 4) {
            const newSuggestions = [
                'Sports facilities?',
                'School calendar?',
                'Extracurricular activities?',
                'School policies?'
            ];
            
            newSuggestions.forEach(text => {
                const span = document.createElement('span');
                span.className = 'suggestion-tag';
                span.textContent = text;
                span.onclick = () => sendMessage(text);
                suggestions.appendChild(span);
            });
        }
    }, 2000);
    
    // Update API status
    setInterval(() => {
        const statusText = document.getElementById('api-status-text');
        statusText.textContent = 'Connected to School Database';
    }, 5000);
});