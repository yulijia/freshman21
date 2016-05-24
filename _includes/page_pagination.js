<script src="{{ "/js/jquery-1.9.1.min.js" | prepend: site.baseurl }}"></script>
<script type="text/javascript">
$(function(){
  $(document).keydown(function(e) {
    if (e.target.nodeName.toUpperCase() != 'BODY') return;
    var url = false;
        if (e.which == 37 || e.which == 74) {  // Left arrow and J
            {% if page.previous %}
        url = '{{ site.url }}{{ page.previous.url }}';
        {% endif %}
        }
        else if (e.which == 39 || e.which == 75) {  // Right arrow and K
            {% if page.next %}
        url = '{{ site.url }}{{ page.next.url }}';
        {% endif %}
        }
        if (url) {
            window.location = url;
        }
  });
})
</script>

