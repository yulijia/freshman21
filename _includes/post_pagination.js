<script src="{{ "/js/jquery-1.9.1.min.js" | prepend: site.baseurl }}"></script>
<script type="text/javascript">
$(function(){
  $(document).keydown(function(e) {
    if (e.target.nodeName.toUpperCase() != 'BODY') return;
    var url = false;
        if (e.which == 37 || e.which == 74) {  // Left arrow and J
        {% if paginator.previous_page %}
        {% if paginator.previous_page == 1 %}
        url = '{{site.baseurl}}/';
        {% else %}
        url = '{{site.baseurl}}/page{{ paginator.previous_page }}/';
        {% endif %}
        {% endif %}
        }
        else if (e.which == 39 || e.which == 75) {  // Right arrow and K
            {% if paginator.next_page %}
        url = '{{site.baseurl}}/page{{ paginator.next_page }}/';
        {% endif %}
        }
        if (url) {
            window.location = url;
        }
  });
})
</script>

