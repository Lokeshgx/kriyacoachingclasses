// ===== CONTACT PAGE JAVASCRIPT =====
// sendToWhatsapp, resetEnquiryForm, enquiryDropdownData, and
// initializeEnquiryDropdowns are all defined in common.js (loaded via loadCommonScripts).

document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    // Wait for common scripts before wiring up the cascading form dropdowns
    if (typeof loadCommonScripts === 'function') {
        loadCommonScripts().then(function() {
            if (typeof initializeEnquiryDropdowns === 'function') initializeEnquiryDropdowns();
        }).catch(function() {
            if (typeof initializeEnquiryDropdowns === 'function') initializeEnquiryDropdowns();
        });
    } else if (typeof initializeEnquiryDropdowns === 'function') {
        initializeEnquiryDropdowns();
    }
});