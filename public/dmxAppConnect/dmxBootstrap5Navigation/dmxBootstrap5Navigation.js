(function() {

  // Call init when DOM is ready
  if (document.readyState === 'loading') { // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', _init, { once: true });
  } else { // DOMContentLoaded has already fired
    _init();
  }

  function _init() {
    // Listen to url changes
    window.addEventListener('popstate', _update);
    window.addEventListener('pushstate', _update);

    // Listen to DOM changes and call update when nodes are added
    new MutationObserver(_update).observe(document.body, { subtree: true, childList: true });

    // Initial update
    _update();
  }

  function _update() {
  	var url = window.location.href;

  	document.querySelectorAll('a.nav-link:not([data-bs-toggle]), a.dropdown-item').forEach(function(elem) {
   		elem.classList.toggle('active', elem.href == url || elem.href == url.split("?")[0].split("#")[0]);
  	});

    document.querySelectorAll('a.dropdown-item.active').forEach(function(elem) {
      var theItem = elem.closest('.nav-item.dropdown');
      if (theItem) {
        var theToggle = theItem.querySelector('.dropdown-toggle');
        if (theToggle) {
          theToggle.classList.toggle('active');
        }
      }
  	});
  }

})()