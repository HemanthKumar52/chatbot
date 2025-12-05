// School Database - All information stored here
const SCHOOL_DATA = {
    // Basic Information
    name: "Bharathidasanar Group of Schools",
    shortName: "BGS",
    location: "Arakkonam",
    motto: "A beacon of education and a symbol of hope",
    tagline: "The first school founded in Arakkonam",
    established: "1980",
    yearsRunning: "44 years",
    founder: "Shri. P. Sekar",
    chairman: "S. Sundar",
    academicDirector: "Mr. John Lawrence",
    financeMediaDirector: "S. Padma",
    principal: "Mr. Venkatesan",
    
    // About Section
    about: "Bharathidasanar Group of Schools, Arakkonam is a beacon of education and a symbol of hope in Arakkonam since 1980. As the first school founded in this vibrant town, we take pride in our rich legacy of nurturing young minds and guiding them towards a bright future. Established with a vision to provide quality education and holistic development, BGS has been a trusted institution for generations of families in Arakkonam and beyond.",
    
    // Department HODs
    departments: {
        english: {
            hod: "Mr. Giri",
            name: "English Department"
        }
    },
    
    // Contact Information
    contact: {
        address: "Near 3MV8+8V9 Tamil Nadu Housing Board, Jothi Nagar Post, Arakkonam, Ranipet District, Tamil Nadu - 631003, India",
        shortAddress: "Jothi Nagar Post, Arakkonam, Ranipet District, Tamil Nadu - 631003",
        googleMaps: "https://maps.google.com/?q=Arakkonam",
        phone: "+91 9042316004",
        phone2: "+91 9043409567",
        email: "principalbpspkm@gmail.com",
        website: "bmhsschool.edu.in",
        emergency: "+91 9042316004",
        socialMedia: {
            youtube: "https://www.youtube.com/channel/UCauxLutUdubhI2DVa5uHXgw",
            instagram: "https://www.instagram.com/bharathidhasanar_schools/",
            facebook: "https://www.facebook.com/BMHSSAKM"
        }
    },
    
    // School Hours
    hours: {
        regular: "8:00 AM - 6:00 PM (Monday to Saturday)",
        office: "8:00 AM - 6:00 PM (Monday to Saturday)",
        weekend: "Closed on Sundays",
        holidays: "Closed on public holidays",
        summer: "Office hours: 9:00 AM - 2:00 PM (April-May)"
    },
    
    // Academic Information
    academics: {
        grades: "Pre-KG to Class 12",
        curriculum: "CBSE with STEM Focus",
        languages: "English, Tamil, Hindi, Sanskrit",
        specialPrograms: [
            "STEM Program",
            "National Cadet Corps (NCC)",
            "Advanced Science Program",
            "Arts & Cultural Programs",
            "Sports Academy"
        ],
        faculty: "85+ certified teachers",
        studentRatio: "15:1 student-teacher ratio"
    },
    
    // Facilities
    facilities: [
        "Science Labs (Physics, Chemistry, Biology)",
        "Computer Labs with Latest Technology",
        "Library with 25,000+ books",
        "Sports Complex (Indoor & Outdoor)",
        "Basketball & Volleyball Courts",
        "Art and Music Studios",
        "Auditorium (600 capacity)",
        "Cafeteria with Hygienic Meals",
        "Medical Room with Qualified Nurse",
        "Transportation Services"
    ],
    
    // Admission Process
    admissions: {
        process: [
            "1. Submit online/offline application form",
            "2. Entrance assessment test (for grades above 1)",
            "3. Student and parent interview",
            "4. Submit required documents",
            "5. Payment of admission fee"
        ],
        requirements: [
            "Birth Certificate",
            "Previous school Transfer Certificate (TC)",
            "Mark sheets of previous classes",
            "Aadhar Card copy (Student & Parents)",
            "Caste Certificate (if applicable)",
            "6 passport-size photographs"
        ],
        deadlines: {
            regular: "January 31st for next academic year",
            late: "March 15th (with late fee)",
            international: "December 31st"
        },
        ageCriteria: {
            "Pre-KG": "2.5-3 years",
            "LKG": "3-4 years",
            "UKG": "4-5 years",
            "Class 1": "5-6 years",
            "Each class": "+1 year increment"
        }
    },
    
    // Fee Structure (in Indian Rupees)
    fees: {
        registration: "₹10,000 (one-time, non-refundable)",
        tuition: {
            "Pre-KG to Class 5": "₹75,000/year",
            "Class 6 to 8": "₹85,000/year",
            "Class 9 to 10": "₹95,000/year",
            "Class 11 to 12": "₹1,10,000/year"
        },
        additional: {
            "Transportation": "₹12,000/year",
            "Lunch/Meals": "₹8,000/year",
            "Activity Fee": "₹3,000/year",
            "Lab/Technology Fee": "₹2,000/year"
        },
        payment: {
            options: ["Annual", "Semi-annual (2 installments)", "Quarterly (4 installments)"],
            discount: "5% discount on annual payment",
            lateFee: "₹500/month after due date"
        },
        scholarships: "Available based on merit and financial need"
    },
    
    // Calendar 2024-2025
    calendar: {
        academicYear: "2024-2025",
        start: "June 1, 2024",
        end: "March 31, 2025",
        holidays: [
            "Independence Day: August 15, 2024",
            "Gandhi Jayanti: October 2, 2024",
            "Diwali Break: October 28 - November 1, 2024",
            "Pongal/Sankranti: January 14-16, 2025",
            "Republic Day: January 26, 2025",
            "Annual Day: February 2025",
            "Holi: March 14, 2025"
        ],
        exams: {
            term1: "September 15-25, 2024",
            term2: "December 10-20, 2024",
            final: "March 5-15, 2025"
        }
    },
    
    // Uniform
    uniform: {
        summer: "Light blue shirt, navy blue pants/skirt, school tie, belt",
        winter: "White shirt, navy blue blazer, pants/skirt, tie, belt",
        sports: "White t-shirt with school logo, navy blue shorts/track pants",
        shoes: "Black leather shoes, white socks",
        accessories: "School ID card mandatory, minimal jewelry allowed for girls"
    },
    
    // Transportation
    transport: {
        available: true,
        routes: "Covering Chennai city and suburbs - 25+ routes",
        fees: "₹12,000/year or ₹1,200/month",
        timing: "Pickup: 6:30-7:30 AM, Drop: 4:00-5:00 PM",
        contact: "Transport Incharge: Mr. Rajesh Kumar +91 98765 43211"
    },
    
    // Extracurricular
    extracurricular: {
        sports: ["Cricket", "Football", "Basketball", "Volleyball", "Table Tennis", "Chess", "Athletics"],
        clubs: ["Science Club", "Debate Society", "Music & Dance", "Drama Club", "Robotics Club", "Eco Club"],
        competitions: ["Science Fair", "Math Olympiad", "Inter-school Sports", "Cultural Fest", "Annual Day"]
    },
    
    // Policies
    policies: {
        attendance: "Minimum 75% attendance required",
        discipline: "Zero tolerance for bullying and indiscipline",
        homework: "Regular homework and weekly projects",
        parentTeacher: "Monthly PTM, online portal for progress tracking"
    }
};

// User session storage for AI personalization
let userSession = {
    designation: null,
    name: null,
    conversationHistory: []
};

// Configuration
const CONFIG = {
    useAI: true, // Enable DeepSeek AI for enhanced responses
    apiEndpoint: '/api/chat',
    logoPath: 'assets/logo.png' // School logo path
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
    
    if (sender === 'bot') {
        // Use logo for bot avatar with fallback to initials
        avatar.innerHTML = `<img src="assets/logo.png" alt="Bot" class="avatar-logo" onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:linear-gradient(135deg,#667eea,#764ba2);color:white;font-weight:bold;font-size:18px;\\'>BGS</div>';">`;
    } else {
        // Use user icon for user avatar
        avatar.innerHTML = '<i class="fas fa-user"></i>';
    }
    
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
// Send message function
async function sendMessage(customMessage = null) {
    const message = customMessage || userInput.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    
    // Add to conversation history
    userSession.conversationHistory.push({
        role: 'user',
        content: message
    });
    
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
        
        // Use AI if enabled and either:
        // 1. No local response was found (response is null)
        // 2. The query triggers specific AI keywords (complex queries)
        if (CONFIG.useAI && (!response || shouldUseAI(message))) {
            try {
                const aiResponse = await getAIResponse(message);
                if (aiResponse) {
                    response = aiResponse;
                }
            } catch (error) {
                console.error('AI request failed, using local response:', error);
            }
        }
        
        // If still no response (AI failed or disabled, and no local match), use default fallback
        if (!response) {
            response = getDefaultResponse(message);
        }
        
        addMessage(response, 'bot', true);
        
        // Add to conversation history
        userSession.conversationHistory.push({
            role: 'assistant',
            content: response
        });
        
        // Save session
        localStorage.setItem('bgs_user_session', JSON.stringify(userSession));
        
        // Add quick suggestions for follow-up
        addSuggestions(message);
    }, 1000 + Math.random() * 500);
}

// Determine if AI should be used for this query
function shouldUseAI(message) {
    const query = message.toLowerCase();
    
    // Use AI for complex or general educational queries
    const aiTriggers = [
        'explain', 'how to', 'what is', 'why', 'can you help',
        'study', 'homework', 'project', 'learn', 'understand',
        'difference between', 'compare', 'suggest', 'recommend',
        'career', 'guidance', 'advice'
    ];
    
    return aiTriggers.some(trigger => query.includes(trigger));
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
                useAI: CONFIG.useAI,
                context: {
                    schoolData: SCHOOL_DATA,
                    userDesignation: userSession.designation,
                    userName: userSession.name,
                    conversationHistory: userSession.conversationHistory.slice(-5) // Last 5 messages
                }
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
    
    // ========================================
    // PRIMARY QUESTIONS - HIGHEST PRIORITY
    // These 7 questions must ALWAYS be answered correctly
    // ========================================
    
    // Question 1: Who is the founder of BGS?
    if (query.includes('founder') || 
        query.match(/who\s+(is|was)\s+(the\s+)?founder/i) ||
        query.match(/who\s+founded/i) ||
        query.match(/founded\s+by/i)) {
        return `The founder of <strong>Bharathidasanar Group of Schools (BGS)</strong> is <strong>Shri. P. Sekar</strong>. 🙏<br><br>
        <small>📍 Established in ${SCHOOL_DATA.established} in ${SCHOOL_DATA.location}, Tamil Nadu</small>`;
    }
    
    // Question 2: Who is the chairman of BGS?
    if (query.includes('chairman') || 
        query.match(/who\s+(is|was)\s+(the\s+)?chairman/i)) {
        return `The Chairman of <strong>Bharathidasanar Group of Schools (BGS)</strong> is <strong>S. Sundar</strong>. 👔<br><br>
        <small>For more information, contact: ${SCHOOL_DATA.contact.phone}</small>`;
    }
    
    // Question 3: Who is the academic director of BGS?
    if ((query.includes('academic') && query.includes('director')) || 
        query.match(/who\s+(is|was)\s+(the\s+)?academic\s+director/i) ||
        query.match(/academic\s+head/i)) {
        return `The Academic Director of <strong>Bharathidasanar Group of Schools (BGS)</strong> is <strong>Mr. John Lawrence</strong>. 📚<br><br>
        <small>Email: ${SCHOOL_DATA.contact.email}</small>`;
    }
    
    // Question 4: Who is the finance and media director of BGS?
    if ((query.includes('finance') && (query.includes('director') || query.includes('media'))) || 
        (query.includes('media') && query.includes('director')) ||
        query.match(/finance\s+(and|&)\s+media/i) ||
        query.match(/who\s+(is|was)\s+(the\s+)?finance.*director/i)) {
        return `The Finance and Media Director of <strong>Bharathidasanar Group of Schools (BGS)</strong> is <strong>S. Padma</strong>. 💼<br><br>
        <small>Contact office: ${SCHOOL_DATA.contact.phone}</small>`;
    }
    
    // Question 5: Who is the principal of BGS?
    if (query.includes('principal') || 
        query.includes('principe') ||
        query.match(/who\s+(is|was)\s+(the\s+)?principal/i) ||
        query.match(/head\s+master/i) ||
        query.match(/headmaster/i)) {
        return `The Principal of <strong>Bharathidasanar Group of Schools (BGS)</strong> is <strong>Mr. Venkatesan</strong>. 🏫<br><br>
        <small>📧 Email: ${SCHOOL_DATA.contact.email}<br>📞 Phone: ${SCHOOL_DATA.contact.phone}</small>`;
    }
    
    // Question 6: Who is the HOD of English department?
    if ((query.includes('hod') || query.includes('head of department') || query.includes('head')) && 
        query.includes('english')) {
        return `The Head of Department (HOD) of the English Department at <strong>Bharathidasanar Group of Schools (BGS)</strong> is <strong>Mr. Giri</strong>. 📖<br><br>
        <small>For department inquiries, contact: ${SCHOOL_DATA.contact.email}</small>`;
    }
    
    // Question 7: How many years has our school been running?
    if ((query.match(/how\s+(many|long)/i) || query.includes('years')) && 
        (query.includes('running') || query.includes('old') || query.includes('been') || 
         query.includes('established') || query.includes('since when'))) {
        return `<strong>Bharathidasanar Group of Schools (BGS)</strong> has been running for <strong>44 years</strong>, established in <strong>1980</strong> in <strong>Arakkonam, Tamil Nadu</strong>. 🎉<br><br>
        <em>${SCHOOL_DATA.tagline}</em><br><br>
        <small>We are proud to be serving the community for over four decades!</small>`;
    }
    
    // ========================================
    // SECONDARY QUESTIONS
    // ========================================
    
    // Check for user designation/introduction
    if (detectUserDesignation(query)) {
        return handleUserDesignation(query);
    }
    
    // Check for general leadership query
    if (query.includes('leadership') || query.includes('management') || 
        query.includes('who runs') || query.includes('administration') ||
        query.match(/all\s+(staff|leaders|heads)/i)) {
        return formatLeadershipInfo();
    }
    
    // Check for specific patterns
    if (query.includes('hello') || query.includes('hi') || query.includes('hey') || 
        query.includes('namaste') || query.includes('vanakkam')) {
        const greeting = userSession.designation 
            ? `🙏 Vanakkam ${userSession.name || ''}! Welcome back to <strong>${SCHOOL_DATA.name}</strong>, ${SCHOOL_DATA.location}. As a ${userSession.designation}, how can I assist you today?`
            : `🙏 Vanakkam! Welcome to <strong>${SCHOOL_DATA.name}</strong>, ${SCHOOL_DATA.location}. ${SCHOOL_DATA.motto}. How can I assist you today?`;
        return greeting;
    }
    
    if (query.includes('thank')) {
        return `You're welcome! 😊 If you have more questions about ${SCHOOL_DATA.name}, feel free to ask.`;
    }
    
    if (query.includes('hour') || query.includes('time') || query.includes('open')) {
        return formatSchoolHours();
    }
    
    if (query.includes('contact') || query.includes('phone') || query.includes('email') || query.includes('call')) {
        return formatContactInfo();
    }
    
    if (query.includes('address') || query.includes('location') || query.includes('where') || query.includes('direction')) {
        return formatAddressInfo();
    }
    
    if (query.includes('social') || query.includes('facebook') || query.includes('instagram') || 
        query.includes('youtube') || query.includes('media')) {
        return formatSocialMediaInfo();
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
        return `I can help you with information about <strong>${SCHOOL_DATA.name}</strong>:<br><br>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div><i class="fas fa-user-tie"></i> Leadership Team</div>
            <div><i class="fas fa-clock"></i> School Hours</div>
            <div><i class="fas fa-phone"></i> Contact Info</div>
            <div><i class="fas fa-file-signature"></i> Admissions</div>
            <div><i class="fas fa-rupee-sign"></i> Fee Structure</div>
            <div><i class="fas fa-tshirt"></i> Uniform Policy</div>
            <div><i class="fas fa-calendar"></i> School Calendar</div>
            <div><i class="fas fa-bus"></i> Transportation</div>
            <div><i class="fas fa-book"></i> Curriculum</div>
        </div><br>
        <strong>🎯 Quick Facts:</strong><br>
        • Founder: ${SCHOOL_DATA.founder}<br>
        • Chairman: ${SCHOOL_DATA.chairman}<br>
        • Principal: ${SCHOOL_DATA.principal}<br>
        • Running since: ${SCHOOL_DATA.yearsRunning}<br><br>
        Try asking about any of these topics!`;
    }
    
    if (query.includes('about') || query.includes('school info') || query.includes('history')) {
        return formatAboutInfo();
    }
    
    // No response found
    return null;
}

// Default response when no information is found
function getDefaultResponse(message) {
    return `I understand you're asking about: <strong>"${message}"</strong><br><br>
    I can help you with information about ${SCHOOL_DATA.name}, ${SCHOOL_DATA.location}. Here are our key people:<br><br>
    <strong>👥 Leadership:</strong><br>
    • Founder: <strong>${SCHOOL_DATA.founder}</strong><br>
    • Chairman: <strong>${SCHOOL_DATA.chairman}</strong><br>
    • Academic Director: <strong>${SCHOOL_DATA.academicDirector}</strong><br>
    • Finance & Media Director: <strong>${SCHOOL_DATA.financeMediaDirector}</strong><br>
    • Principal: <strong>${SCHOOL_DATA.principal}</strong><br>
    • English HOD: <strong>${SCHOOL_DATA.departments.english.hod}</strong><br>
    • Years Running: <strong>${SCHOOL_DATA.yearsRunning}</strong><br><br>
    
    <strong>📍 Location:</strong> ${SCHOOL_DATA.location}, Tamil Nadu<br>
    <strong>📞 Contact:</strong> ${SCHOOL_DATA.contact.phone}<br><br>
    
    <strong>📚 Common Questions:</strong><br>
    • What are the school hours?<br>
    • How do I apply for admission?<br>
    • What is the fee structure?<br>
    • Where is the school located?<br><br>
    Try rephrasing your question or click on the quick question buttons!`;
}

// Detect user designation from message
function detectUserDesignation(query) {
    const designationPatterns = [
        /i am a (student|parent|teacher|staff|visitor|guardian)/i,
        /i'm a (student|parent|teacher|staff|visitor|guardian)/i,
        /my name is ([a-z\s]+) and i am a (student|parent|teacher)/i,
        /i am ([a-z\s]+),?\s*(student|parent|teacher)?/i
    ];
    
    return designationPatterns.some(pattern => pattern.test(query));
}

// Handle user designation
function handleUserDesignation(query) {
    const designationMatch = query.match(/i am a (student|parent|teacher|staff|visitor|guardian)/i) ||
                            query.match(/i'm a (student|parent|teacher|staff|visitor|guardian)/i);
    
    const nameMatch = query.match(/my name is ([a-z\s]+)/i) ||
                     query.match(/i am ([a-z\s]+),/i);
    
    if (designationMatch) {
        userSession.designation = designationMatch[1].toLowerCase();
    }
    
    if (nameMatch) {
        userSession.name = nameMatch[1].trim();
    }
    
    // Save to localStorage
    localStorage.setItem('bgs_user_session', JSON.stringify(userSession));
    
    let response = `Thank you for introducing yourself${userSession.name ? ', ' + userSession.name : ''}! `;
    
    switch(userSession.designation) {
        case 'student':
            response += `As a student of <strong>${SCHOOL_DATA.name}</strong>, I can help you with:<br>
            • Class schedules and homework<br>
            • Exam dates and results<br>
            • Extracurricular activities<br>
            • School events and competitions<br>
            • Library and lab facilities<br><br>
            What would you like to know?`;
            break;
        case 'parent':
        case 'guardian':
            response += `As a parent, I can assist you with:<br>
            • Admission procedures<br>
            • Fee structure and payment details<br>
            • Academic performance and PTMs<br>
            • School policies and safety measures<br>
            • Transportation and facilities<br><br>
            How can I help you today?`;
            break;
        case 'teacher':
        case 'staff':
            response += `Welcome! I can provide information about:<br>
            • School policies and guidelines<br>
            • Academic calendar<br>
            • Facilities and resources<br>
            • Contact information<br><br>
            What information do you need?`;
            break;
        case 'visitor':
            response += `Welcome to <strong>${SCHOOL_DATA.name}</strong>! I can help you with:<br>
            • School tour and facilities<br>
            • Admission information<br>
            • Contact details<br>
            • School achievements<br><br>
            What would you like to know?`;
            break;
        default:
            response += `I'm here to help you with any questions about ${SCHOOL_DATA.name}. What would you like to know?`;
    }
    
    return response;
}

// Load user session on page load
function loadUserSession() {
    const saved = localStorage.getItem('bgs_user_session');
    if (saved) {
        try {
            userSession = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading user session:', e);
        }
    }
}

// Formatting functions
function formatSchoolHours() {
    return `<strong>School Hours:</strong><br><br>
    <div style="background: #f8fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #4f46e5;">
        🏫 <strong>Regular School:</strong> ${SCHOOL_DATA.hours.regular}<br>
        🏢 <strong>Office Hours:</strong> ${SCHOOL_DATA.hours.office}<br>
        📅 <strong>Weekend:</strong> ${SCHOOL_DATA.hours.weekend}<br>
        🏖️ <strong>Summer Hours:</strong> ${SCHOOL_DATA.hours.summer}<br>
        ⚠️ <strong>Note:</strong> ${SCHOOL_DATA.hours.holidays}<br><br>
        <small>📞 For urgent matters: ${SCHOOL_DATA.contact.phone}</small>
    </div>`;
}

function formatContactInfo() {
    return `<strong>📞 Contact Information:</strong><br><br>
    <div style="background: #f8fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #10b981;">
        <strong>📍 Address:</strong><br>
        ${SCHOOL_DATA.contact.shortAddress}<br><br>
        
        <strong>📱 Phone Numbers:</strong><br>
        • Main: <a href="tel:${SCHOOL_DATA.contact.phone}">${SCHOOL_DATA.contact.phone}</a><br>
        • Alternate: <a href="tel:${SCHOOL_DATA.contact.phone2}">${SCHOOL_DATA.contact.phone2}</a><br><br>
        
        <strong>🚨 Emergency:</strong> ${SCHOOL_DATA.contact.emergency}<br><br>
        
        <strong>📧 Email:</strong><br>
        <a href="mailto:${SCHOOL_DATA.contact.email}">${SCHOOL_DATA.contact.email}</a><br><br>
        
        <strong>🌐 Website:</strong><br>
        <a href="http://${SCHOOL_DATA.contact.website}" target="_blank">${SCHOOL_DATA.contact.website}</a><br><br>
        
        <strong>⏰ Working Hours:</strong> ${SCHOOL_DATA.hours.regular}
    </div><br>
    <small>💡 <strong>Tip:</strong> Click on phone numbers to call directly!</small>`;
}

function formatAddressInfo() {
    return `<strong>📍 School Location:</strong><br><br>
    <div style="background: #f8fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #f59e0b;">
        <strong>Complete Address:</strong><br>
        ${SCHOOL_DATA.contact.address}<br><br>
        
        <strong>🗺️ Get Directions:</strong><br>
        <a href="${SCHOOL_DATA.contact.googleMaps}" target="_blank" style="color: #4f46e5; font-weight: 600;">
            📍 Open in Google Maps (Arakkonam)
        </a><br><br>
        
        <strong>🏛️ Landmark:</strong> Near Tamil Nadu Housing Board, Jothi Nagar<br>
        <strong>📮 Pin Code:</strong> 631003<br>
        <strong>🏙️ City:</strong> Arakkonam<br>
        <strong>📍 District:</strong> Ranipet<br>
        <strong>🌏 State:</strong> Tamil Nadu, India<br><br>
        
        <strong>📞 For Directions Help:</strong> ${SCHOOL_DATA.contact.phone}
    </div>`;
}

function formatSocialMediaInfo() {
    return `<strong>🌐 Connect With Us:</strong><br><br>
    <div style="background: #f8fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #ec4899;">
        <strong>Follow us on social media for latest updates:</strong><br><br>
        
        <div style="margin: 10px 0;">
            <strong style="color: #FF0000;">📺 YouTube:</strong><br>
            <a href="${SCHOOL_DATA.contact.socialMedia.youtube}" target="_blank" style="color: #4f46e5;">
                ${SCHOOL_DATA.contact.socialMedia.youtube}
            </a>
        </div>
        
        <div style="margin: 10px 0;">
            <strong style="color: #E4405F;">📸 Instagram:</strong><br>
            <a href="${SCHOOL_DATA.contact.socialMedia.instagram}" target="_blank" style="color: #4f46e5;">
                @bharathidhasanar_schools
            </a>
        </div>
        
        <div style="margin: 10px 0;">
            <strong style="color: #1877F2;">👥 Facebook:</strong><br>
            <a href="${SCHOOL_DATA.contact.socialMedia.facebook}" target="_blank" style="color: #4f46e5;">
                BMHSSAKM
            </a>
        </div>
        
        <br>
        <strong>🌐 Website:</strong> <a href="http://${SCHOOL_DATA.contact.website}" target="_blank">${SCHOOL_DATA.contact.website}</a><br>
        <strong>📧 Email:</strong> <a href="mailto:${SCHOOL_DATA.contact.email}">${SCHOOL_DATA.contact.email}</a><br>
        <strong>📞 Phone:</strong> ${SCHOOL_DATA.contact.phone}
    </div>`;
}

function formatAboutInfo() {
    return `<strong>About ${SCHOOL_DATA.name}:</strong><br><br>
    <div style="background: #f8fafc; padding: 20px; border-radius: 12px; border-left: 4px solid #4f46e5;">
        <div style="margin-bottom: 20px;">
            <strong style="font-size: 18px; color: #4f46e5;">🎓 ${SCHOOL_DATA.tagline}</strong><br>
            <em style="color: #6b7280;">${SCHOOL_DATA.motto}</em>
        </div>
        
        <p style="line-height: 1.8; margin-bottom: 15px;">
            ${SCHOOL_DATA.about}
        </p>
        
        <div style="border-top: 2px solid #e5e7eb; padding-top: 15px; margin-top: 15px;">
            <strong>📊 Quick Facts:</strong><br><br>
            • <strong>Founder:</strong> ${SCHOOL_DATA.founder}<br>
            • <strong>Chairman:</strong> ${SCHOOL_DATA.chairman}<br>
            • <strong>Academic Director:</strong> ${SCHOOL_DATA.academicDirector}<br>
            • <strong>Finance & Media Director:</strong> ${SCHOOL_DATA.financeMediaDirector}<br>
            • <strong>Principal:</strong> ${SCHOOL_DATA.principal}<br>
            • <strong>English HOD:</strong> ${SCHOOL_DATA.departments.english.hod}<br>
            • <strong>Established:</strong> ${SCHOOL_DATA.established}<br>
            • <strong>Experience:</strong> ${SCHOOL_DATA.yearsRunning}<br>
            • <strong>Location:</strong> ${SCHOOL_DATA.location}, Tamil Nadu<br>
            • <strong>Classes:</strong> ${SCHOOL_DATA.academics.grades}<br>
            • <strong>Curriculum:</strong> ${SCHOOL_DATA.academics.curriculum}<br>
            • <strong>Students:</strong> 1200+<br>
            • <strong>Faculty:</strong> ${SCHOOL_DATA.academics.faculty}
        </div>
        
        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e5e7eb;">
            <strong>📞 Contact Us:</strong><br>
            Phone: ${SCHOOL_DATA.contact.phone}<br>
            Email: ${SCHOOL_DATA.contact.email}<br>
            Website: ${SCHOOL_DATA.contact.website}
        </div>
    </div><br>
    <small>💡 <strong>Connect with us on social media for latest updates!</strong></small>`;
}

// New formatting function for leadership info
function formatLeadershipInfo() {
    return `<strong>👥 ${SCHOOL_DATA.name} Leadership Team:</strong><br><br>
    <div style="background: #f8fafc; padding: 20px; border-radius: 12px; border-left: 4px solid #4f46e5;">
        <div style="margin-bottom: 15px;">
            <strong style="color: #4f46e5; font-size: 16px;">🎯 Founder</strong><br>
            <span style="font-size: 18px; font-weight: 600;">${SCHOOL_DATA.founder}</span><br>
            <small>Established BGS in ${SCHOOL_DATA.established} in ${SCHOOL_DATA.location}</small>
        </div>
        
        <div style="margin-bottom: 15px;">
            <strong style="color: #4f46e5; font-size: 16px;">👔 Chairman</strong><br>
            <span style="font-size: 18px; font-weight: 600;">${SCHOOL_DATA.chairman}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
            <strong style="color: #4f46e5; font-size: 16px;">📚 Academic Director</strong><br>
            <span style="font-size: 18px; font-weight: 600;">${SCHOOL_DATA.academicDirector}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
            <strong style="color: #4f46e5; font-size: 16px;">💼 Finance & Media Director</strong><br>
            <span style="font-size: 18px; font-weight: 600;">${SCHOOL_DATA.financeMediaDirector}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
            <strong style="color: #4f46e5; font-size: 16px;">🏫 Principal</strong><br>
            <span style="font-size: 18px; font-weight: 600;">${SCHOOL_DATA.principal}</span><br>
            <small>📧 ${SCHOOL_DATA.contact.email}</small>
        </div>
        
        <div style="border-top: 2px solid #e5e7eb; padding-top: 15px; margin-top: 15px;">
            <strong style="color: #4f46e5; font-size: 16px;">📖 Department Heads</strong><br>
            <span style="font-weight: 600;">English HOD:</span> ${SCHOOL_DATA.departments.english.hod}
        </div>
        
        <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e5e7eb;">
            <strong>🎉 Established:</strong> ${SCHOOL_DATA.established} (${SCHOOL_DATA.yearsRunning})<br>
            <strong>📍 Location:</strong> ${SCHOOL_DATA.location}, Ranipet District, Tamil Nadu<br>
            <strong>📞 Contact:</strong> ${SCHOOL_DATA.contact.phone}
        </div>
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
    // Load user session
    loadUserSession();
    
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