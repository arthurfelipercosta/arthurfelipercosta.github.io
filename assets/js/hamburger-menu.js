// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const body = document.body;
    const navItems = document.querySelectorAll('.nav-item');

    // Toggle sidebar function
    function toggleSidebar() {
        const isActive = sidebar.classList.contains('active');
        
        if (isActive) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    // Open sidebar function
    function openSidebar() {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        hamburgerBtn.classList.add('active');
        body.classList.add('sidebar-open');
        
        // Prevent body scroll when sidebar is open
        body.style.overflow = 'hidden';
    }

    // Close sidebar function
    function closeSidebar() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        body.classList.remove('sidebar-open');
        
        // Restore body scroll
        body.style.overflow = 'auto';
    }

    // Event listeners
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleSidebar);
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // Close sidebar when clicking on nav items (for mobile)
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    });

    // Close sidebar on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
            // On desktop, keep sidebar open but restore scroll
            body.style.overflow = 'auto';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to current page nav item
    function setActiveNavItem() {
        const currentPath = window.location.pathname;
        const currentHash = window.location.hash;
        
        navItems.forEach(item => {
            item.classList.remove('active');
            
            // Check if this is the current page or section
            const href = item.getAttribute('href');
            if (href === currentPath || href === currentHash || 
                (currentHash && href === currentHash)) {
                item.classList.add('active');
            }
        });
    }

    // Set active nav item on page load
    setActiveNavItem();

    // Update active nav item when hash changes
    window.addEventListener('hashchange', setActiveNavItem);

    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const searchableItems = document.querySelectorAll('.nav-item, h1, h2, h3, h4, h5, h6');
            
            searchableItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm) || searchTerm === '') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Add loading animation
    function showLoading() {
        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'loading';
        loadingDiv.innerHTML = '<div class="loading-spinner"></div>';
        loadingDiv.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        `;
        
        document.body.appendChild(loadingDiv);
        
        // Remove loading after page is fully loaded
        window.addEventListener('load', function() {
            setTimeout(() => {
                if (loadingDiv.parentNode) {
                    loadingDiv.parentNode.removeChild(loadingDiv);
                }
            }, 500);
        });
    }

    // Initialize loading animation
    if (document.readyState === 'loading') {
        showLoading();
    }

    // Add touch support for mobile
    let startX = 0;
    let startY = 0;

    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', function(e) {
        if (!startX || !startY) return;

        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;

        const diffX = startX - endX;
        const diffY = startY - endY;

        // Swipe right to open sidebar (if starting from left edge)
        if (startX < 50 && diffX < -50 && Math.abs(diffY) < 100) {
            openSidebar();
        }
        
        // Swipe left to close sidebar
        if (diffX > 50 && Math.abs(diffY) < 100 && sidebar.classList.contains('active')) {
            closeSidebar();
        }

        startX = 0;
        startY = 0;
    });

    // Add animation classes for better UX
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('h1, h2, h3, .nav-item').forEach(el => {
        observer.observe(el);
    });
});

// Add CSS for animations
const animationStyles = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .loading-spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #4CAF50;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);
