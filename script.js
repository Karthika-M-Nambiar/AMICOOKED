/* =========================================================
   AmICooked? 🔥
   WORKING JAVASCRIPT
   Malayalam Roast Edition 🇮🇳
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       GLOBAL DATA
    ===================================================== */

    let currentStep = 0;

    const answers = {
        concern: "",
        daysLeft: 7,
        tasksLeft: 5,
        completed: 30,
        studyHours: 2,
        confidence: 5,
        assignments: 2,
        deadlines: 2,
        phoneHours: 4,
        sleep: 7,
        procrastination: 5,
        wastedDays: 2,
        situation: ""
    };

    /* =====================================================
       MALAYALAM ROASTS 🔥
    ===================================================== */

    const malayalamRoasts = [

        "പഠിക്കാൻ സമയം ഇല്ലെന്ന് പറഞ്ഞിട്ട് 3 മണിക്കൂർ റീൽസ് കണ്ടത് ആരാടാ? 😭",

        "Exam നാളെ ആണല്ലേ? പുസ്തകം ഇന്ന് ആദ്യമായി കണ്ട സന്തോഷം ഉണ്ടല്ലോ മുഖത്ത്. 😂",

        "നിന്റെ syllabus നിന്നെക്കാൾ serious ആയി നിന്നെക്കുറിച്ച് ടെൻഷൻ അടിക്കുന്നുണ്ട്. 📚💀",

        "ഇത്രയും ദിവസം എന്ത് ചെയ്യുകയായിരുന്നു എന്ന് ചോദിച്ചാൽ — 'പ്ലാൻ ചെയ്യുകയായിരുന്നു' എന്ന് പറയാം. പ്ലാൻ മാത്രം ഉണ്ടായി. 😭",

        "നീ പഠിക്കാത്തത് കണ്ടിട്ട് textbook പോലും 'എന്നെ ഒന്ന് തുറക്കെടാ' എന്ന് പറയുന്ന അവസ്ഥയാണ്. 😂",

        "Deadline അടുത്തെത്തിയപ്പോൾ മാത്രമാണല്ലേ നിനക്ക് academic career ഓർമ്മ വന്നത്? 💀",

        "Phone എടുത്തത് ഒരു notification നോക്കാൻ... പിന്നെ syllabus തന്നെ മാറി. 📱😭",

        "നിന്റെ procrastination കണ്ടിട്ട് lazy പോലും നിന്നെ respect ചെയ്യും. 😂",

        "നാളെ മുതൽ പഠിക്കും എന്ന് പറഞ്ഞ ആ 'നാളെ' ഇതുവരെ വന്നില്ലല്ലോ? 😭",

        "Notes തുറന്നിട്ട് 5 മിനിറ്റ് കഴിഞ്ഞു... ഇപ്പോഴും cover page തന്നെയാണല്ലോ നോക്കുന്നത്. 💀",

        "നിനക്ക് പഠിക്കാനുള്ളത് കുറവല്ല. പഠിക്കാനുള്ള മനസ്സാണ് കുറവ്. 😭🔥",

        "Exam hall-ൽ question paper കണ്ടിട്ട് 'ഇത് syllabus-ൽ ഉണ്ടായിരുന്നോ?' എന്ന് ചോദിക്കാനുള്ള preparation ആണ് നടക്കുന്നത്. 😂",

        "നിന്റെ study timetable കണ്ടപ്പോൾ ഞാൻ പേടിച്ചു. അത്രയും നല്ല timetable... execute ചെയ്തത് മാത്രം zero. 💀",

        "Books വാങ്ങിയതോടെ knowledge കിട്ടും എന്ന് കരുതിയതാണോ പ്രശ്നം? 😂",

        "നിന്റെ confidence: 100%. Preparation: loading... forever. 😭",

        "ഇവിടെ student ആരാ? നീയോ deadline-ഓ? കാരണം deadline ആണ് നിന്നെ control ചെയ്യുന്നത്. 💀",

        "പഠിക്കാൻ ഇരുന്നിട്ട് ആദ്യം table clean ചെയ്യണം, water bottle നിറയ്ക്കണം, playlist set ചെയ്യണം... അവസാനം പഠിക്കാൻ സമയം ഇല്ല. 😂",

        "നീ cooked അല്ലേടാ... നീ ഇപ്പോൾ full biriyani ആണ്. 🍗🔥",

        "Chef പോലും നിന്നെ കണ്ടിട്ട് 'ഇവനെ രക്ഷിക്കാൻ എനിക്ക് കഴിയില്ല' എന്ന് പറഞ്ഞു. 👨‍🍳💀",

        "ഡാ... നീ cooked ആണെന്ന് പറയാൻ പോലും syllabus ഇതുവരെ നിന്നെ serious ആയി എടുത്തിട്ടില്ല. 😭",

        "ഇപ്പോൾ പ്രശ്നമൊന്നുമില്ല. പക്ഷേ ഈ confidence കണ്ടിട്ട് future-ന് പേടിയുണ്ട്. 💀",

        "Syllabus തുറന്നിട്ടില്ലെങ്കിലും confidence കണ്ടാൽ university topper ആണെന്ന് തോന്നും. 😂",

        "ഇപ്പോൾ safe zone ആണ്. പക്ഷേ 'നാളെ മുതൽ പഠിക്കും' എന്ന dialogue എത്ര ദിവസം കൂടി? 😭",

        "Book വാങ്ങി. Notes download ചെയ്തു. Study plan ഉണ്ടാക്കി. ഇനി പഠിക്കുന്നത് മാത്രം ബാക്കി. ചെറിയ കാര്യമല്ലേ? 💀",

        "Academic situation: chill. Academic discipline: missing person. 🚨",

        "നിന്റെ syllabus ഇപ്പോൾ നിന്നെ കാത്തിരിക്കുകയാണ്. വളരെ patient ആയ syllabus. 😂",
        
        "ചൂട് പിടിച്ചു തുടങ്ങി. പക്ഷേ പഠിപ്പിന് അല്ല... tension-ന്. 🌶️",

        "ഇനി 'time plenty und' എന്ന് പറയുന്നത് നിയമപരമായി punish ചെയ്യേണ്ടതാണ്. 💀",

        "നീ പഠിക്കുന്ന speed-നേക്കാൾ syllabus കൂടുന്ന speed ആണ് dangerous. 😭",

        "ഇത്രയും confidence എവിടെ നിന്നാണ് കിട്ടുന്നത് എന്ന് അറിയില്ല. Preparation മാത്രം കാണാനില്ല. 😂",

        "Exam അടുത്തുവരുന്നു. നീ ഇപ്പോഴും stationery arrange ചെയ്യുകയാണ്. Priorities, bro. 😭",

        "നിന്റെ timetable കണ്ടാൽ NASA mission പോലെ തോന്നും. Execution കണ്ടാൽ Windows update പോലെ. 💀",

        "പഠിക്കാൻ ഇരുന്നിട്ട് ആദ്യം table clean ചെയ്തു. Table clean. Mind clean. Syllabus still dirty. 😂",
    
        "Okay... ഇനി situation joke അല്ല. Joke നീ തന്നെയാണ്. 💀",

        "Syllabus-ന്റെ പകുതി ബാക്കി. Deadline മുന്നിൽ. Phone കയ്യിൽ. ഇതൊരു cooking show അല്ല, disaster documentary ആണ്. 😭",

        "നീ cooked അല്ല... നീ ഇപ്പോൾ medium flame-ൽ slowly marinate ആകുകയാണ്. 🔥",

        "ഇത്രയും ദിവസം പഠിക്കാതെ ഇരുന്നിട്ട് ഇപ്പോൾ motivation video കാണുന്നുണ്ടല്ലോ. Historic moment. 😂",

        "നിന്റെ brain പറയുന്നത് 'നമുക്ക് പറ്റും'. Calendar പറയുന്നത് 'സമയം കഴിഞ്ഞു'. 💀",

        "Exam വരെ ഉള്ള സമയം നോക്കിയപ്പോൾ ഞാൻ തന്നെ calculator അടച്ചു. 😭",

        "നിന്റെ procrastination-ന് ഇത്ര consistency ഉണ്ടെങ്കിൽ പഠിപ്പിലും ഒന്നാമനായിരുന്നു. 😂",
    
        "നീ ഇപ്പോൾ student അല്ല. Walking academic emergency ആണ്. 🚨💀",

        "Syllabus കണ്ടിട്ട് textbook പോലും 'എന്നെന്തിനാ ഇങ്ങനെ നോക്കുന്നത്?' എന്ന് ചോദിക്കുന്ന അവസ്ഥ. 😭",

        "Confidence: 97%. Preparation: buffering since 2025. 💀",

        "Deadline അടുത്തെത്തിയപ്പോൾ മാത്രമാണ് നിന്റെ academic career-ന് heartbeat വന്നത്. 😂",

        "നിന്റെ study plan കണ്ടാൽ motivation വരും. Follow ചെയ്താൽ മാത്രം history-ൽ ഇല്ല. 😭",

        "Phone-ന് നിന്റെ attention കിട്ടുന്ന amount കണ്ടിട്ട് syllabus jealous ആയി. 📱💀",

        "ഇനി പഠിക്കാനുള്ളത് കൂടുതലല്ല. സമയം കുറവാണ്. വളരെ ചെറിയ difference മാത്രം. 😂",

        "നിന്റെ academic life ഇപ്പോൾ pressure cooker ആണ്. Whistle അടിക്കാൻ മാത്രം ബാക്കി. 🔥",
    
        "ഡാ... നീ cooked അല്ല. FULL BIRIYANI ആണ്. 🍗🔥",

        "Chef നിന്നെ കണ്ടിട്ട് apron അഴിച്ചു. 'ഇത് എന്റെ department അല്ല' എന്ന് പറഞ്ഞു. 💀",

        "Syllabus, assignments, deadlines എല്ലാം കൂടി ഒരു family function പോലെ നിന്നെ surround ചെയ്തിട്ടുണ്ട്. 😭",

        "ഇവിടെ ഇനി rescue plan അല്ല വേണ്ടത്. Emergency meeting ആണ് വേണ്ടത്. 🚨",

        "നിന്റെ academic situation കണ്ടിട്ട് calculator പോലും 'എന്നെ involve ചെയ്യരുത്' എന്ന് പറഞ്ഞു. 💀",

        "നീ പഠിക്കാത്തതിന്റെ confidence കണ്ടിട്ട് പഠിച്ചവർക്ക് തന്നെ insecurity വരും. 😂",

        "ഇത്രയും pending work കണ്ടിട്ട് Google Drive പോലും storage upgrade ചോദിക്കും. 😭",

        "Exam hall-ൽ question paper കണ്ടിട്ട് 'ഇത് എന്റെ batch-നുള്ളതാണോ?' എന്ന് ചോദിക്കാൻ സാധ്യതയുണ്ട്. 💀",

        "നിന്റെ syllabus ഇപ്പോൾ syllabus അല്ല. ഒരു revenge plot ആണ്. 🔥",

        "Chef verdict: പുറത്തു crispy. അകത്ത് full panic. 🍗💀",
    
        "🚨 ALERT: Student successfully converted into charcoal. ☠️🔥",

        "Chef gas ഓഫ് ചെയ്തു. Pan മാറ്റി. എല്ലാവരും വീട്ടിലേക്ക് പോവുക. 💀",

        "ഇത് cooked അല്ല. Academic archaeology ആണ്. 😭",

        "നിന്റെ situation കണ്ടിട്ട് syllabus തന്നെ നിന്നോട് 'sorry bro' പറഞ്ഞു. 💀",

        "Exam hall-ൽ question paper കിട്ടിയാൽ ആദ്യം question paper തന്നെയായിരിക്കും നിന്നെ ചോദ്യം ചെയ്യുക. 😭",

        "ഇത്രയും deep ആയി cook ആകാൻ talent വേണം. അതും നീ തെളിയിച്ചു. 👏💀",

        "നിന്റെ preparation-നും exam-നും ഇടയിൽ ഉള്ള distance കണ്ടിട്ട് Google Maps പോലും route കാണിക്കില്ല. 😂",

        "Academic status: 💀💀💀\nChef status: Resigned.\nHope status: Under maintenance.",

        "ഇനി 'എങ്ങനെ രക്ഷപ്പെടും?' എന്നല്ല ചോദിക്കേണ്ടത്.\n'എങ്ങനെ ഇത്രയും cook ആയി?' എന്നാണ് research ചെയ്യേണ്ടത്. 😭",

        "Final verdict: പുസ്തകം നിന്നെ തോൽപ്പിച്ചിട്ടില്ല. നീ പുസ്തകം തുറന്നിട്ടില്ല. 💀"
    ];

    /* =====================================================
       USELESS ADVICE
    ===================================================== */

    const uselessAdvice = [

        "Open your textbook and stare at it for 7 seconds. That's basically studying.",

        "Rename your study folder FINAL_FINAL_REAL_THIS_TIME.",

        "Put your phone face down. Congratulations, you are now 2% productive.",

        "Drink water. You are still cooked, but at least hydrated.",

        "Make a study timetable. Ignore it professionally.",

        "Clean your entire desk before studying. Somehow this will take 2 hours.",

        "Watch one motivational video. Then accidentally watch 47 more.",

        "Highlight everything. Now everything is important.",

        "Write 'I WILL STUDY' on a sticky note. Academic comeback initiated.",

        "Open your notes and immediately feel sleepy. Classic student behaviour."
    ];

    /* =====================================================
       HELPER FUNCTIONS
    ===================================================== */

    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    function getTemperature(score) {
        return Math.round(180 + score * 4.2);
    }

    function getCookingLevel(score) {

        if (score <= 10) {
            return {
                stage: "RAW",
                emoji: "🥶",
                message: "You haven't even entered the kitchen."
            };
        }

        if (score <= 25) {
            return {
                stage: "PREHEATING",
                emoji: "🌡️",
                message: "The pan is warming up."
            };
        }

        if (score <= 40) {
            return {
                stage: "HEATING UP",
                emoji: "😐",
                message: "Things are starting to get interesting."
            };
        }

        if (score <= 55) {
            return {
                stage: "SLIGHTLY CRISPY",
                emoji: "😬",
                message: "Okay... we have a situation."
            };
        }

        if (score <= 70) {
            return {
                stage: "COOKING",
                emoji: "🥵",
                message: "You're officially on the stove."
            };
        }

        if (score <= 85) {
            return {
                stage: "WELL DONE",
                emoji: "🔥",
                message: "Things are getting serious."
            };
        }

        if (score <= 95) {
            return {
                stage: "DEEP FRIED",
                emoji: "💀🔥",
                message: "Academic damage detected."
            };
        }

        return {
            stage: "BURNT",
            emoji: "💀🔥🔥",
            message: "THE KITCHEN IS ON FIRE."
        };
    }

    function getAvatar(score) {

        if (score <= 25) return "🧑‍🎓";

        if (score <= 50) return "🧑‍🎓💦";

        if (score <= 70) return "🧑‍🎓🥵";

        if (score <= 85) return "🧑‍🎓🔥";

        if (score <= 95) return "🧑‍🎓🔥📚🔥";

        return "🧑‍🎓💀🔥🔥📚";
    }

    function getFlames(score) {

        if (score <= 10) return "🍃";

        if (score <= 25) return "🔥";

        if (score <= 40) return "🔥🔥";

        if (score <= 55) return "🔥🔥🔥";

        if (score <= 70) return "🔥🔥🔥🔥";

        if (score <= 85) return "🔥🔥🔥🔥🔥";

        return "🔥🔥🔥🔥🔥🔥";
    }

    function getCookingMessage(score) {

        if (score <= 10)
            return "You're barely warm. Raw mode activated.";

        if (score <= 25)
            return "The pan is warming up.";

        if (score <= 40)
            return "Things are starting to sizzle.";

        if (score <= 55)
            return "Okay... we have a situation.";

        if (score <= 70)
            return "You're officially on the stove.";

        if (score <= 85)
            return "The kitchen is getting VERY serious.";

        if (score <= 95)
            return "🚨 DEEP FRYING IN PROGRESS.";

        return "💀 THE KITCHEN IS ON FIRE.";
    }

    /* =====================================================
       SCORE CALCULATION
    ===================================================== */

    function calculateScore() {

        let score = 0;

        // Time pressure
        if (answers.daysLeft <= 1) score += 25;
        else if (answers.daysLeft <= 3) score += 20;
        else if (answers.daysLeft <= 7) score += 15;
        else if (answers.daysLeft <= 14) score += 8;
        else score += 3;

        // Remaining tasks
        score += clamp(answers.tasksLeft * 2, 0, 20);

        // Preparation
        score += Math.round((100 - answers.completed) * 0.25);

        // Study hours
        if (answers.studyHours < 1) score += 10;
        else if (answers.studyHours < 2) score += 7;
        else if (answers.studyHours < 4) score += 4;

        // Confidence
        score += (10 - answers.confidence) * 1.5;

        // Assignments
        score += clamp(answers.assignments * 2, 0, 10);

        // Deadlines
        score += clamp(answers.deadlines * 2, 0, 10);

        // Phone
        if (answers.phoneHours >= 8) score += 15;
        else if (answers.phoneHours >= 5) score += 10;
        else if (answers.phoneHours >= 3) score += 6;
        else score += 2;

        // Sleep
        if (answers.sleep < 5) score += 12;
        else if (answers.sleep < 7) score += 7;
        else score += 2;

        // Procrastination
        score += answers.procrastination;

        // Wasted days
        score += clamp(answers.wastedDays * 2, 0, 10);

        return Math.round(clamp(score, 0, 100));
    }

    /* =====================================================
       CHEF VERDICT
    ===================================================== */

    function getChefVerdict(score) {

        if (score <= 20) {

            return "👨‍🍳 Chef says: You're chilling. You actually have your life together. Suspicious.";

        }

        if (score <= 40) {

            return "👨‍🍳 Chef says: You're slightly warm. There is still plenty of time to save this meal.";

        }

        if (score <= 60) {

            return "👨‍🍳 Chef says: Things are getting crispy. Stop pretending everything is fine.";

        }

        if (score <= 80) {

            return "👨‍🍳 Chef says: You're officially cooking. Emergency academic intervention recommended.";

        }

        return "👨‍🍳 Chef says: This is no longer cooking. This is a full kitchen emergency. 💀";
    }

    /* =====================================================
       PROBLEM DETECTION
    ===================================================== */

    function getProblems() {

        const problems = [];

        if (answers.daysLeft <= 3)
            problems.push("⏰ Very little time remaining");

        if (answers.completed < 40)
            problems.push("📚 Low preparation level");

        if (answers.tasksLeft >= 8)
            problems.push("📝 Too many unfinished topics/tasks");

        if (answers.phoneHours >= 5)
            problems.push("📱 Excessive phone/social media usage");

        if (answers.sleep < 6)
            problems.push("😴 Not enough sleep");

        if (answers.procrastination >= 7)
            problems.push("🐌 Serious procrastination");

        if (answers.assignments >= 5)
            problems.push("📋 Too many pending assignments");

        if (answers.deadlines >= 4)
            problems.push("🚨 Multiple upcoming deadlines");

        if (answers.confidence <= 3)
            problems.push("😰 Low confidence");

        if (answers.wastedDays >= 5)
            problems.push("🗓️ Too many wasted days");

        if (problems.length === 0)
            problems.push("🎉 Surprisingly, nothing is terribly wrong.");

        return problems;
    }

    /* =====================================================
       INGREDIENT BAR
    ===================================================== */

    function ingredientBar(name, value) {

        value = clamp(Math.round(value), 0, 100);

        return `
            <div class="ingredient">

                <div class="ingredient-top">
                    <span>${name}</span>
                    <strong>${value}%</strong>
                </div>

                <div class="ingredient-bar">

                    <div
                        class="ingredient-fill"
                        style="width:${value}%">
                    </div>

                </div>

            </div>
        `;
    }

    /* =====================================================
       ROAST
    ===================================================== */

    function getRoast() {

        return malayalamRoasts[
            Math.floor(
                Math.random() * malayalamRoasts.length
            )
        ];

    }

    /* =====================================================
       START ASSESSMENT
    ===================================================== */

    function startAssessment() {

        currentStep = 0;

        showAssessment();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    /* =====================================================
       ASSESSMENT PAGE
    ===================================================== */

    function showAssessment() {

        const hero = document.querySelector(".hero");

        if (!hero) return;

        if (currentStep === 0) {

            hero.innerHTML = `

                <div class="assessment">

                    <div class="step-number">
                        STEP 1 / 4
                    </div>

                    <h1>
                        What's cooking? 🍳
                    </h1>

                    <p class="assessment-subtitle">
                        What is currently destroying your peace?
                    </p>

                    <div class="options">

                        <button class="option-btn"
                            data-concern="Exam">
                            📚 Exam
                        </button>

                        <button class="option-btn"
                            data-concern="Assignment">
                            📝 Assignment
                        </button>

                        <button class="option-btn"
                            data-concern="Project">
                            💻 Project
                        </button>

                        <button class="option-btn"
                            data-concern="Attendance">
                            📊 Attendance
                        </button>

                        <button class="option-btn"
                            data-concern="Everything">
                            💀 Everything at once
                        </button>

                    </div>

                </div>
            `;

            document
                .querySelectorAll(".option-btn")
                .forEach(button => {

                    button.addEventListener("click", () => {

                        answers.concern =
                            button.dataset.concern;

                        currentStep = 1;

                        showAssessment();

                    });

                });

            return;
        }

        if (currentStep === 1) {

            hero.innerHTML = `

                <div class="assessment">

                    <div class="step-number">
                        STEP 2 / 4
                    </div>

                    <h1>
                        Academic ingredients 📚
                    </h1>

                    <p class="assessment-subtitle">
                        Tell the chef how much academic chaos we're dealing with.
                    </p>

                    <div class="form-container">

                        <label>
                            Days left
                            <input
                                id="daysLeft"
                                type="range"
                                min="0"
                                max="30"
                                value="${answers.daysLeft}">
                            <span id="daysValue">
                                ${answers.daysLeft}
                            </span> days
                        </label>

                        <label>
                            Topics / tasks remaining
                            <input
                                id="tasksLeft"
                                type="range"
                                min="0"
                                max="20"
                                value="${answers.tasksLeft}">
                            <span id="tasksValue">
                                ${answers.tasksLeft}
                            </span>
                        </label>

                        <label>
                            Preparation completed
                            <input
                                id="completed"
                                type="range"
                                min="0"
                                max="100"
                                value="${answers.completed}">
                            <span id="completedValue">
                                ${answers.completed}
                            </span>%
                        </label>

                        <label>
                            Realistic study hours/day
                            <input
                                id="studyHours"
                                type="range"
                                min="0"
                                max="12"
                                value="${answers.studyHours}">
                            <span id="studyHoursValue">
                                ${answers.studyHours}
                            </span> hrs
                        </label>

                        <label>
                            Confidence
                            <input
                                id="confidence"
                                type="range"
                                min="1"
                                max="10"
                                value="${answers.confidence}">
                            <span id="confidenceValue">
                                ${answers.confidence}
                            </span>/10
                        </label>

                        <label>
                            Pending assignments
                            <input
                                id="assignments"
                                type="range"
                                min="0"
                                max="10"
                                value="${answers.assignments}">
                            <span id="assignmentsValue">
                                ${answers.assignments}
                            </span>
                        </label>

                        <label>
                            Upcoming deadlines
                            <input
                                id="deadlines"
                                type="range"
                                min="0"
                                max="10"
                                value="${answers.deadlines}">
                            <span id="deadlinesValue">
                                ${answers.deadlines}
                            </span>
                        </label>

                    </div>

                    <button
                        id="nextAcademic"
                        class="primary-btn">
                        Continue 🔥
                    </button>

                </div>
            `;

            setupSlider(
                "daysLeft",
                "daysValue",
                value => answers.daysLeft = Number(value)
            );

            setupSlider(
                "tasksLeft",
                "tasksValue",
                value => answers.tasksLeft = Number(value)
            );

            setupSlider(
                "completed",
                "completedValue",
                value => answers.completed = Number(value)
            );

            setupSlider(
                "studyHours",
                "studyHoursValue",
                value => answers.studyHours = Number(value)
            );

            setupSlider(
                "confidence",
                "confidenceValue",
                value => answers.confidence = Number(value)
            );

            setupSlider(
                "assignments",
                "assignmentsValue",
                value => answers.assignments = Number(value)
            );

            setupSlider(
                "deadlines",
                "deadlinesValue",
                value => answers.deadlines = Number(value)
            );

            document
                .getElementById("nextAcademic")
                .addEventListener("click", () => {

                    currentStep = 2;

                    showAssessment();

                });

            return;
        }

        if (currentStep === 2) {

            hero.innerHTML = `

                <div class="assessment">

                    <div class="step-number">
                        STEP 3 / 4
                    </div>

                    <h1>
                        Lifestyle ingredients 📱
                    </h1>

                    <p class="assessment-subtitle">
                        Time to confess the things you definitely weren't going to tell the chef.
                    </p>

                    <div class="form-container">

                        <label>
                            Phone / social media hours
                            <input
                                id="phoneHours"
                                type="range"
                                min="0"
                                max="12"
                                value="${answers.phoneHours}">
                            <span id="phoneValue">
                                ${answers.phoneHours}
                            </span> hrs
                        </label>

                        <label>
                            Sleep per night
                            <input
                                id="sleep"
                                type="range"
                                min="2"
                                max="12"
                                value="${answers.sleep}">
                            <span id="sleepValue">
                                ${answers.sleep}
                            </span> hrs
                        </label>

                        <label>
                            Procrastination level
                            <input
                                id="procrastination"
                                type="range"
                                min="0"
                                max="10"
                                value="${answers.procrastination}">
                            <span id="procrastinationValue">
                                ${answers.procrastination}
                            </span>/10
                        </label>

                        <label>
                            Days already wasted
                            <input
                                id="wastedDays"
                                type="range"
                                min="0"
                                max="15"
                                value="${answers.wastedDays}">
                            <span id="wastedValue">
                                ${answers.wastedDays}
                            </span>
                        </label>

                    </div>

                    <button
                        id="nextLifestyle"
                        class="primary-btn">
                        Continue 🔥
                    </button>

                </div>
            `;

            setupSlider(
                "phoneHours",
                "phoneValue",
                value => answers.phoneHours = Number(value)
            );

            setupSlider(
                "sleep",
                "sleepValue",
                value => answers.sleep = Number(value)
            );

            setupSlider(
                "procrastination",
                "procrastinationValue",
                value => answers.procrastination = Number(value)
            );

            setupSlider(
                "wastedDays",
                "wastedValue",
                value => answers.wastedDays = Number(value)
            );

            document
                .getElementById("nextLifestyle")
                .addEventListener("click", () => {

                    currentStep = 3;

                    showAssessment();

                });

            return;
        }

        if (currentStep === 3) {

            hero.innerHTML = `

                <div class="assessment">

                    <div class="step-number">
                        STEP 4 / 4
                    </div>

                    <h1>
                        Final confession 😭
                    </h1>

                    <p class="assessment-subtitle">
                        Tell the chef what is actually going on.
                    </p>

                    <textarea
                        id="situation"
                        class="situation-box"
                        placeholder="Example: I have an exam tomorrow, haven't studied, watched reels for 5 hours and somehow I'm still confident..."
                    ></textarea>

                    <button
                        id="cookBtn"
                        class="primary-btn">
                        🔥 COOK MY RESULTS
                    </button>

                </div>
            `;

            document
                .getElementById("cookBtn")
                .addEventListener("click", () => {

                    answers.situation =
                        document
                            .getElementById("situation")
                            .value
                            .trim();

                    const score =
                        calculateScore();

                    saveHistory(score);

                    showResult(score);

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                });

        }

    }

    /* =====================================================
       SLIDER SETUP
    ===================================================== */

    function setupSlider(id, outputId, callback) {

        const slider =
            document.getElementById(id);

        const output =
            document.getElementById(outputId);

        if (!slider) return;

        slider.addEventListener("input", () => {

            output.textContent =
                slider.value;

            callback(slider.value);

        });

    }

    /* =====================================================
       RESULT PAGE
    ===================================================== */

    function showResult(score) {

        const hero =
            document.querySelector(".hero");

        if (!hero) return;

        const level =
            getCookingLevel(score);

        const temperature =
            getTemperature(score);

        const avatar =
            getAvatar(score);

        const flames =
            getFlames(score);

        const problems =
            getProblems();

        hero.innerHTML = `

            <div class="result">

                <div class="step-number">
                    YOUR ACADEMIC DIAGNOSIS
                </div>

                <h1>
                    🔥 YOU ARE
                    <span>BEING COOKED</span>
                </h1>

                <div class="score">
                    ${score}
                </div>

                <div class="status">
                    ${level.stage}
                </div>

                <p class="result-message">
                    ${level.message}
                </p>

                <!-- COOKING VISUAL -->

                <div class="cooking-box">

                    <div class="cooking-avatar">
                        ${avatar}
                    </div>

                    <div class="flames">
                        ${flames}
                    </div>

                    <div class="cooking-text">

                        <h2>
                            ${getCookingMessage(score)}
                        </h2>

                        <p>
                            Temperature:
                            <strong>
                                ${temperature}°F
                            </strong>
                        </p>

                    </div>

                    <div class="heat-bar">

                        <div
                            class="heat-fill"
                            style="width:${score}%">
                        </div>

                    </div>

                </div>

                <!-- RESULT GRID -->

                <div class="result-grid">

                    <div class="ingredient-card">

                        <h2>
                            🥘 What's In The Pan?
                        </h2>

                        ${ingredientBar(
                            "⏰ Time Pressure",
                            getTimePressure()
                        )}

                        ${ingredientBar(
                            "📚 Lack of Preparation",
                            100 - answers.completed
                        )}

                        ${ingredientBar(
                            "📝 Pending Work",
                            clamp(
                                answers.tasksLeft * 5 +
                                answers.assignments * 5,
                                0,
                                100
                            )
                        )}

                        ${ingredientBar(
                            "📱 Phone Distraction",
                            answers.phoneHours * 8
                        )}

                        ${ingredientBar(
                            "😴 Sleep Problem",
                            getSleepProblem()
                        )}

                        ${ingredientBar(
                            "🐌 Procrastination",
                            answers.procrastination * 10
                        )}

                    </div>

                    <div class="chef-verdict">

                        <h2>
                            👨‍🍳 Chef's Verdict
                        </h2>

                        <p>
                            ${getChefVerdict(score)}
                        </p>

                        <h3>
                            Biggest Problems
                        </h3>

                        <ul class="problem-list">

                            ${problems
                                .map(
                                    problem =>
                                        `<li>${problem}</li>`
                                )
                                .join("")}

                        </ul>

                    </div>

                </div>

                <!-- ROAST -->

                <div class="roast">

                    <h2>
                        🇮🇳 Malayalam Roast 🔥
                    </h2>

                    <p id="roastText">
                        ${getRoast()}
                    </p>

                    <button
                        id="roastAgain"
                        class="advice-btn">
                        🔥 Roast Me Again
                    </button>

                </div>

                <!-- RESCUE PLAN -->

                <div class="rescue-plan">

                    <h2>
                        🧯 Rescue Recipe
                    </h2>

                    <p>
                        Your first move:
                        <strong>
                            ${getRescueAction(score)}
                        </strong>
                    </p>

                    <span class="plan-time">
                        ⏱️ Emergency plan generated
                    </span>

                </div>

                <!-- USELESS ADVICE -->

                <div class="useless-advice">

                    <h2>
                        🧠 Extremely Useless Advice
                    </h2>

                    <p id="adviceText">
                        ${getRandomAdvice()}
                    </p>

                    <button
                        id="adviceBtn"
                        class="advice-btn">
                        Give Me Worse Advice
                    </button>

                </div>

                <!-- COOL DOWN -->

                <div class="cool-card">

                    <h2>
                        🧊 Cool Me Down
                    </h2>

                    <p>
                        Every time you complete one useful task,
                        pretend your cookedness dropped by 10%.
                    </p>

                    <button
                        id="coolBtn"
                        class="cool-btn">
                        🧊 I DID SOMETHING PRODUCTIVE
                    </button>

                    <p id="coolMessage">
                        Cooling progress: 0%
                    </p>

                </div>

                <!-- ACHIEVEMENTS -->

                <div class="achievement-card">

                    <h2>
                        🏆 Academic Survival Achievements
                    </h2>

                    <div class="achievement-grid">

                        <div class="achievement unlocked">
                            <div class="achievement-icon">
                                🔥
                            </div>
                            <strong>
                                Entered The Kitchen
                            </strong>
                            <small>
                                You actually checked your score.
                            </small>
                        </div>

                        <div class="achievement ${
                            score >= 50
                                ? "unlocked"
                                : ""
                        }">

                            <div class="achievement-icon">
                                🌶️
                            </div>

                            <strong>
                                Getting Spicy
                            </strong>

                            <small>
                                Score 50+
                            </small>

                        </div>

                        <div class="achievement ${
                            score >= 80
                                ? "unlocked"
                                : ""
                        }">

                            <div class="achievement-icon">
                                💀
                            </div>

                            <strong>
                                Deep Fried
                            </strong>

                            <small>
                                Score 80+
                            </small>

                        </div>

                        <div class="achievement ${
                            score >= 95
                                ? "unlocked"
                                : ""
                        }">

                            <div class="achievement-icon">
                                🚨
                            </div>

                            <strong>
                                Kitchen Fire
                            </strong>

                            <small>
                                Score 95+
                            </small>

                        </div>

                    </div>

                </div>

                <!-- SHARE -->

                <div class="share-card">

                    <h2>
                        📤 Share Your Damage
                    </h2>

                    <div class="share-result">

                        <div>
                            AmICooked? 🔥
                        </div>

                        <div class="share-score">
                            ${score}/100
                        </div>

                        <strong>
                            ${level.stage}
                        </strong>

                    </div>

                    <button
                        id="shareBtn"
                        class="primary-btn">
                        📤 Share Result
                    </button>

                </div>

                <button
                    id="backKitchen"
                    class="secondary-btn">
                    🍳 Back To Kitchen
                </button>

            </div>
        `;

        /* ROAST AGAIN */

        document
            .getElementById("roastAgain")
            .addEventListener("click", () => {

                document
                    .getElementById("roastText")
                    .textContent =
                    getRoast();

            });

        /* ADVICE */

        document
            .getElementById("adviceBtn")
            .addEventListener("click", () => {

                document
                    .getElementById("adviceText")
                    .textContent =
                    getRandomAdvice();

            });

        /* COOL */

        let cooling = 0;

        document
            .getElementById("coolBtn")
            .addEventListener("click", () => {

                cooling =
                    clamp(cooling + 10, 0, 100);

                document
                    .getElementById("coolMessage")
                    .textContent =
                    `Cooling progress: ${cooling}% ${
                        cooling === 100
                            ? "🧊 YOU ARE COOL AGAIN!"
                            : ""
                    }`;

            });

        /* SHARE */

        document
            .getElementById("shareBtn")
            .addEventListener("click", shareResult);

        /* BACK */

        document
            .getElementById("backKitchen")
            .addEventListener("click", () => {

                location.reload();

            });

    }

    /* =====================================================
       TIME PRESSURE
    ===================================================== */

    function getTimePressure() {

        if (answers.daysLeft <= 1)
            return 100;

        if (answers.daysLeft <= 3)
            return 85;

        if (answers.daysLeft <= 7)
            return 65;

        if (answers.daysLeft <= 14)
            return 35;

        return 15;

    }

    /* =====================================================
       SLEEP PROBLEM
    ===================================================== */

    function getSleepProblem() {

        if (answers.sleep < 5)
            return 100;

        if (answers.sleep < 7)
            return 60;

        return 20;

    }

    /* =====================================================
       RESCUE ACTION
    ===================================================== */

    function getRescueAction(score) {

        if (score <= 20)
            return "Keep doing what you're doing.";

        if (score <= 40)
            return "Study one important topic right now.";

        if (score <= 60)
            return "Put the phone away and finish your most urgent task.";

        if (score <= 80)
            return "Stop planning and start studying immediately.";

        return "Emergency mode: choose ONE important topic and attack it.";

    }

    /* =====================================================
       RANDOM ADVICE
    ===================================================== */

    function getRandomAdvice() {

        return uselessAdvice[
            Math.floor(
                Math.random() *
                uselessAdvice.length
            )
        ];

    }

    /* =====================================================
       HISTORY
    ===================================================== */

    function saveHistory(score) {

        const history =
            JSON.parse(
                localStorage.getItem(
                    "amICookedHistory"
                ) || "[]"
            );

        const level =
            getCookingLevel(score);

        history.unshift({

            date:
                new Date().toLocaleString(),

            concern:
                answers.concern,

            score:
                score,

            stage:
                level.stage,

            temperature:
                getTemperature(score),

            situation:
                answers.situation

        });

        localStorage.setItem(

            "amICookedHistory",

            JSON.stringify(
                history.slice(0, 10)
            )

        );

    }

    /* =====================================================
       SHOW HISTORY
    ===================================================== */

    function showHistory() {

        const hero =
            document.querySelector(".hero");

        const history =
            JSON.parse(
                localStorage.getItem(
                    "amICookedHistory"
                ) || "[]"
            );

        hero.innerHTML = `

            <div class="history-page">

                <div class="step-number">
                    YOUR COOKING HISTORY
                </div>

                <h1>
                    📜 Past Disasters
                </h1>

                ${
                    history.length === 0

                    ? `
                        <div class="result-card">

                            <h2>
                                No disasters recorded yet.
                            </h2>

                            <p>
                                Go get cooked first. 😂
                            </p>

                        </div>
                    `

                    :

                    history.map(item => `

                        <div class="history-item">

                            <div>

                                <strong>
                                    ${item.concern}
                                </strong>

                                <span>
                                    ${item.date}
                                </span>

                            </div>

                            <strong>
                                ${item.score}/100
                            </strong>

                            <span>
                                ${item.stage}
                            </span>

                            <span>
                                ${item.temperature}°F
                            </span>

                        </div>

                    `).join("")
                }

                <button
                    id="historyBack"
                    class="secondary-btn">
                    🍳 Back To Kitchen
                </button>

            </div>
        `;

        document
            .getElementById("historyBack")
            .addEventListener("click", () => {

                location.reload();

            });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    /* =====================================================
       PROFILE
    ===================================================== */

    function showProfile() {

        const hero =
            document.querySelector(".hero");

        const history =
            JSON.parse(
                localStorage.getItem(
                    "amICookedHistory"
                ) || "[]"
            );

        const total =
            history.length;

        const average =
            total
                ? Math.round(
                    history.reduce(
                        (sum, item) =>
                            sum + item.score,
                        0
                    ) / total
                )
                : 0;

        const highest =
            total
                ? Math.max(
                    ...history.map(
                        item => item.score
                    )
                )
                : 0;

        hero.innerHTML = `

            <div class="profile-page">

                <div class="step-number">
                    STUDENT PROFILE
                </div>

                <h1>
                    👤 The Cook
                </h1>

                <div class="profile-card">

                    <div class="profile-row">

                        <span>
                            Assessments
                        </span>

                        <strong>
                            ${total}
                        </strong>

                    </div>

                    <div class="profile-row">

                        <span>
                            Average Cookedness
                        </span>

                        <strong>
                            ${average}/100
                        </strong>

                    </div>

                    <div class="profile-row">

                        <span>
                            Highest Score
                        </span>

                        <strong>
                            ${highest}/100
                        </strong>

                    </div>

                    <div class="profile-row">

                        <span>
                            Status
                        </span>

                        <strong>
                            ${
                                highest >= 80
                                    ? "🔥 Deep Fried"
                                    : "😌 Still Surviving"
                            }
                        </strong>

                    </div>

                </div>

                <button
                    id="profileBack"
                    class="secondary-btn">
                    🍳 Back To Kitchen
                </button>

            </div>

        `;

        document
            .getElementById("profileBack")
            .addEventListener("click", () => {

                location.reload();

            });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    /* =====================================================
       SHARE RESULT
    ===================================================== */

    function shareResult() {

        const history =
            JSON.parse(
                localStorage.getItem(
                    "amICookedHistory"
                ) || "[]"
            );

        if (!history.length) return;

        const latest =
            history[0];

        const text =
            `🔥 AmICooked?\n\n` +
            `I scored ${latest.score}/100.\n` +
            `Status: ${latest.stage}\n` +
            `Temperature: ${latest.temperature}°F\n\n` +
            `Apparently I am academically cooked. 💀🔥`;

        if (
            navigator.share
        ) {

            navigator.share({

                title: "AmICooked? 🔥",

                text: text

            }).catch(() => {});

        } else {

            navigator.clipboard
                .writeText(text)
                .then(() => {

                    alert(
                        "🔥 Result copied! Send it to your friends."
                    );

                })
                .catch(() => {

                    alert(text);

                });

        }

    }

    /* =====================================================
       BUTTONS FROM ORIGINAL HTML
    ===================================================== */

    const startBtn =
        document.getElementById("startBtn");

    const chefBtn =
        document.getElementById("chefBtn");

    const navCheckBtn =
        document.getElementById("navCheckBtn");

    const mobileCheck =
        document.getElementById("mobileCheck");

    const mobileHistory =
        document.getElementById("mobileHistory");

    const mobileProfile =
        document.getElementById("mobileProfile");

    const howBtn =
        document.getElementById("howBtn");

    /* START BUTTON */

    if (startBtn) {

        startBtn.addEventListener(
            "click",
            startAssessment
        );

    }

    /* CHEF BUTTON */

    if (chefBtn) {

        chefBtn.addEventListener(
            "click",
            startAssessment
        );

    }

    /* NAV CHECK */

    if (navCheckBtn) {

        navCheckBtn.addEventListener(
            "click",
            startAssessment
        );

    }

    /* MOBILE CHECK */

    if (mobileCheck) {

        mobileCheck.addEventListener(
            "click",
            startAssessment
        );

    }

    /* MOBILE HISTORY */

    if (mobileHistory) {

        mobileHistory.addEventListener(
            "click",
            showHistory
        );

    }

    /* MOBILE PROFILE */

    if (mobileProfile) {

        mobileProfile.addEventListener(
            "click",
            showProfile
        );

    }

    /* HOW IT WORKS */

    if (howBtn) {

        howBtn.addEventListener(
            "click",
            () => {

                const section =
                    document.getElementById(
                        "howSection"
                    );

                if (section) {

                    section.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }

    /* =====================================================
       HOME TEMPERATURE PREVIEW
    ===================================================== */

    const homeTemp =
        document.getElementById("homeTemp");

    const homeStatus =
        document.getElementById("homeStatus");

    if (homeTemp && homeStatus) {

        homeTemp.textContent =
            "???°F";

        homeStatus.textContent =
            "Unknown";

    }

    console.log(
        "🔥 AmICooked? Malayalam Roast Edition loaded successfully!"
    );

});