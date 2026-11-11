// ========================================== */
//         DYNAMIC RENDER & INTERACTION       //
// ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    renderCoursework();
    renderSkills();
    renderExperience();
    renderProjects();
    renderCertifications();
});

// Render coursework badges
function renderCoursework() {
    const container = document.getElementById("coursework-container");
    if (!container || !window.PORTFOLIO_DATA) return;
    
    container.innerHTML = PORTFOLIO_DATA.coursework.map(course => `
        <span class="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700">${course}</span>
    `).join('');
}

// Render technical skills cards
function renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container || !window.PORTFOLIO_DATA) return;

    container.innerHTML = PORTFOLIO_DATA.skills.map(skill => `
        <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 rounded-lg bg-blue-100 text-pro-600 flex items-center justify-center text-xl mb-4">
                <i class="${skill.icon}"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">${skill.category}</h3>
            <p class="text-sm text-slate-600 mb-4">${skill.description}</p>
            <div class="flex flex-wrap gap-2">
                ${skill.items.map(item => `
                    <span class="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-700">${item}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Render experience entries
function renderExperience() {
    const container = document.getElementById("experience-container");
    if (!container || !window.PORTFOLIO_DATA) return;

    container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-slate-300 transition-all">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                    <h3 class="text-xl font-bold text-slate-900">${exp.role}</h3>
                    <p class="text-pro-600 font-semibold">${exp.organization}</p>
                </div>
                <span class="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium w-fit">${exp.period}</span>
            </div>
            <ul class="list-disc list-inside space-y-2 text-slate-600 text-sm leading-relaxed">
                ${exp.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Render project cards
function renderProjects() {
    const container = document.getElementById("projects-container");
    if (!container || !window.PORTFOLIO_DATA) return;

    const projectKeys = Object.keys(PORTFOLIO_DATA.projects);

    container.innerHTML = projectKeys.map(key => {
        const proj = PORTFOLIO_DATA.projects[key];
        return `
            <div class="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all">
                <div>
                    <div class="h-48 bg-gradient-to-br from-slate-800 to-slate-900 p-6 flex items-end relative overflow-hidden">
                        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        <span class="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-semibold backdrop-blur-sm">${proj.badge}</span>
                        <h3 class="text-xl font-bold text-white ml-auto">${proj.title}</h3>
                    </div>
                    <div class="p-6">
                        <p class="text-sm text-slate-600 mb-4 line-clamp-3">${proj.description}</p>
                        <div class="flex flex-wrap gap-1.5 mb-4">
                            ${proj.tags.slice(0, 3).map(tag => `
                                <span class="px-2 py-0.5 bg-white border border-slate-200 rounded text-xs text-slate-600">${tag}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
                <div class="px-6 pb-6 pt-0">
                    <button onclick="openProjectModal('${key}')" class="w-full py-2.5 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-pro-600 transition-colors flex items-center justify-center gap-2">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> View Project Details
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Render certifications & honors
function renderCertifications() {
    const container = document.getElementById("certifications-container");
    if (!container || !window.PORTFOLIO_DATA) return;

    container.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-blue-50 text-pro-600 flex items-center justify-center text-xl shrink-0">
                <i class="${cert.icon}"></i>
            </div>
            <div>
                <h3 class="font-bold text-slate-900 text-base mb-1">${cert.title}</h3>
                <p class="text-xs text-slate-500 mb-2">${cert.date}</p>
                <p class="text-sm text-slate-600">${cert.description}</p>
            </div>
        </div>
    `).join('');
}

// ========================================== */
//             MODAL MANAGEMENT               //
// ========================================== */

function openProjectModal(projectId) {
    const project = PORTFOLIO_DATA.projects[projectId];
    if (!project) return;

    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="space-y-6">
            <div>
                <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">${project.badge}</span>
                <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">${project.title}</h2>
                <p class="text-pro-600 font-medium text-sm">${project.subtitle}</p>
            </div>
            
            <p class="text-slate-600 text-base leading-relaxed">${project.description}</p>
            
            <div>
                <h4 class="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Key Engineering Contributions</h4>
                <ul class="space-y-2">
                    ${project.highlights.map(h => `<li class="flex items-start gap-2 text-sm text-slate-600"><i class="fa-solid fa-check text-pro-500 mt-1"></i><span>${h}</span></li>`).join('')}
                </ul>
            </div>

            <div>
                <h4 class="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wider">Technologies Used</h4>
                <div class="flex flex-wrap gap-2">
                    ${project.tags.map(t => `<span class="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">${t}</span>`).join('')}
                </div>
            </div>

            <div class="pt-4 border-t border-slate-200 flex justify-end">
                <button onclick="closeProjectModal()" class="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-pro-600 transition-colors">
                    Close
                </button>
            </div>
        </div>
    `;

    document.getElementById('projectModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeProjectModal();
    }
});
