document.getElementById('registerBtn').addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create registration modal
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div class="bg-white p-8 rounded-xl max-w-md w-full mx-4 animate-slide-up">
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Get Started</h3>
                <form id="registrationForm" class="space-y-4">
                    <input type="email" placeholder="Work Email" 
                           class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    <input type="password" placeholder="Password" 
                           class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    <select class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                        <option value="">Select Role</option>
                        <option>Admin</option>
                        <option>Engineer</option>
                        <option>Supervisor</option>
                    </select>
                    <div class="flex justify-end space-x-4">
                        <button type="button" id="closeModal" 
                                class="px-4 py-2 text-gray-600 hover:text-gray-800">
                            Cancel
                        </button>
                        <button type="submit" 
                                class="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;

    // Add to DOM
    document.body.appendChild(modal);

    // Form submission handler
    document.getElementById('registrationForm').addEventListener('submit', (e) => {
        e.preventDefault();
        // Add actual registration logic here
        alert('Registration successful! Redirecting...');
        modal.remove();
    });

    // Close modal handler
    document.getElementById('closeModal').addEventListener('click', () => {
        modal.remove();
    });
});

// Enhanced Learn More Button Handler
document.getElementById('learnMoreBtn').addEventListener('click', (e) => {
    e.preventDefault();
    
    // Smooth scroll to features section
    const featuresSection = document.getElementById('features');
    const offset = 120; // Adjust for header height
    
    window.scrollTo({
        top: featuresSection.offsetTop - offset,
        behavior: 'smooth'
    });

    // Add visual feedback
    e.target.classList.add('scale-95');
    setTimeout(() => {
        e.target.classList.remove('scale-95');
    }, 200);

    // Pulse animation for first feature card
    const firstFeature = document.querySelector('.feature-card');
    if(firstFeature) {
        firstFeature.classList.add('animate-pulse');
        setTimeout(() => {
            firstFeature.classList.remove('animate-pulse');
        }, 1000);
    }
});
const style = document.createElement('style');
style.textContent = `
    @keyframes slide-up {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    .animate-slide-up {
        animation: slide-up 0.3s ease-out;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
    .animate-pulse {
        animation: pulse 1s ease-in-out;
    }
`;
document.head.appendChild(style);