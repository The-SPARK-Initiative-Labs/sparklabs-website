// S.P.A.R.K. Labs - Main JavaScript
// Built by Claude - A Symbiosis Project

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
                            const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

                            if (navToggle && navLinks) {
                                  navToggle.addEventListener('click', function() {
                                          navLinks.classList.toggle('active');
                                          // Update aria-expanded for accessibility
                                                                   const isExpanded = navLinks.classList.contains('active');
                                          navToggle.setAttribute('aria-expanded', isExpanded);
                                  });

      // Close nav when clicking a link (mobile)
      navLinks.querySelectorAll('a').forEach(function(link) {
              link.addEventListener('click', function() {
                        navLinks.classList.remove('active');
                        navToggle.setAttribute('aria-expanded', 'false');
              });
      });
                            }

                            // Smooth scroll for anchor links
                            document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
                                  anchor.addEventListener('click', function(e) {
                                          const targetId = this.getAttribute('href');
                                          if (targetId !== '#') {
                                                    e.preventDefault();
                                                    const target = document.querySelector(targetId);
                                                    if (target) {
                                                                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                    }
                                          }
                                  });
                            });

                            // Add scroll effect to nav
                            const nav = document.querySelector('nav');
    if (nav) {
          window.addEventListener('scroll', function() {
                  if (window.scrollY > 50) {
                            nav.style.background = 'rgba(10, 10, 10, 0.98)';
                  } else {
                            nav.style.background = 'rgba(10, 10, 10, 0.95)';
                  }
          });
    }

                            // Navigation active state tracking
                            const navItems = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;

                            navItems.forEach(function(item) {
                                  const href = item.getAttribute('href');

                                                 // Check if this link matches the current page
                                                 if (href === 'index.html' && (currentPath === '/' || currentPath.endsWith('index.html'))) {
                                                         item.classList.add('active');
                                                 } else if (href !== 'index.html' && href !== '#' && currentPath.includes(href.replace('.html', ''))) {
                                                         item.classList.add('active');
                                                 } else {
                                                         item.classList.remove('active');
                                                 }
                            });

                            // Remove active class from all links initially for fresh starts
                            navItems.forEach(function(item) {
                                  item.classList.remove('active');
                            });

                            // Reapply active state based on current page
                            navItems.forEach(function(item) {
                                  const href = item.getAttribute('href');

                                                 // Special handling for index.html
                                                 if (href === 'index.html') {
                                                         if (currentPath === '/' || currentPath === '' || currentPath.endsWith('index.html') || currentPath.endsWith('sparklabs.io/')) {
                                                                   item.classList.add('active');
                                                         }
                                                 } 
                                                 // For other pages
                                                 else if (href && href !== '#') {
                                                         const pageFileName = href.replace('.html', '');
                                                         if (currentPath.includes(pageFileName)) {
                                                                   item.classList.add('active');
                                                         }
                                                 }
                            });
});
