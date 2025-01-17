document.addEventListener('DOMContentLoaded', function() {
    // Select all elements initially
    var allElements = document.querySelectorAll('div.col');
    
    // Find the filter links by their IDs
    var frascoFilter = document.getElementById('filtro-frasco');
    var bombonaFilter = document.getElementById('filtro-bombona');
    var poteFilter = document.getElementById('filtro-pote');

    // Function to show all elements (reset filter)
    function resetFilters() {
        allElements.forEach(function(element) {
            element.style.display = ''; // Show all elements
        });
    }

    // Function to filter elements
    function filterElements(type) {
        resetFilters(); // First reset all
        if (type) {
            var elementsToHide = document.querySelectorAll('div.col:not([data-tipo="' + type + '"])');
            elementsToHide.forEach(function(element) {
                element.style.display = 'none';
            });
        }
    }

    // Helper function to check if a filter is currently active
    function isFilterActive(filter) {
        return filter.classList.contains('active');
    }

    // Helper function to toggle active class on a filter
    function toggleFilterClass(filter) {
        filter.classList.toggle('active');
    }

    // Event listener for frascos
    frascoFilter.addEventListener('click', function(event) {
        event.preventDefault();
        if (isFilterActive(this)) {
            resetFilters();
        } else {
            filterElements('frasco');
        }
        toggleFilterClass(this);
    });

    // Event listener for bombonas
    bombonaFilter.addEventListener('click', function(event) {
        event.preventDefault();
        if (isFilterActive(this)) {
            resetFilters();
        } else {
            filterElements('bombona');
        }
        toggleFilterClass(this);
    });

    // Event listener for potes
    poteFilter.addEventListener('click', function(event) {
        event.preventDefault();
        if (isFilterActive(this)) {
            resetFilters();
        } else {
            filterElements('pote');
        }
        toggleFilterClass(this);
    });
});