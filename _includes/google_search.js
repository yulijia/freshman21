<script language="Javascript" type="text/javascript">
function my_search_google()
{
  var query = document.getElementById("my-google-search").value;
  window.open("https://www.google.com/search?q=" + query
      + "%20site:" + "{{site.url}}");
}
</script>
