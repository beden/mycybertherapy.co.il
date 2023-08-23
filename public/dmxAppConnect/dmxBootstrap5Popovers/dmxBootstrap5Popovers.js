// Bootstrap 5 Popovers
dmx.Attribute('bs-popover', 'mounted', function(node, attr) {
  this.$addBinding(attr.value, function(value) {
    new bootstrap.Popover(node, {
      placement: function(node) {
        var pexpression = node.getAttribute('dmx-bs-placement') || '';
        return dmx.parse(pexpression) || node.getAttribute('data-bs-placement') || 'auto';
      },
      title: function() {
        return this.getAttribute('popover-title') || this.getAttribute('title') || '';
      },
      content: function() {
        var expression = this.getAttribute('dmx-bs-popover') || '';
        return dmx.parse(expression) || this.getAttribute('data-bs-content') || '';
      }
    });

  	if (value) {
      node.setAttribute('data-bs-content', value);
		}
  });
});

document.addEventListener('DOMContentLoaded', function(event) {
  return new bootstrap.Popover(document.body, {
    selector: '[popover-title]:not([data-bs-trigger]), [data-bs-content]:not([data-bs-trigger])',
    placement: function(node) {
      var pexpression = node.getAttribute('dmx-bs-placement') || '';
      return dmx.parse(pexpression) || node.getAttribute('data-bs-placement') || 'auto';
    },
    title: function() {
      return this.getAttribute('popover-title') || this.getAttribute('title') || '';
    },
    content: function() {
      var expression = this.getAttribute('dmx-bs-popover') || '';
      return dmx.parse(expression) || this.getAttribute('data-bs-content') || '';
    }
  });
});
