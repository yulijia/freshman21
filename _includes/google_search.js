<script language="Javascript" type="text/javascript">
function search_google()
{
  var query = document.getElementById("google-search").value;
  window.open("http://google.com/search?q=" + query
      + "%20site:" + "{{site.url}}");
}
</script>
