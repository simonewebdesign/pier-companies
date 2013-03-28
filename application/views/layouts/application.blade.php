<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Laravel-REST</title>
  {{ HTML::style("css/scaffolds.css") }}
</head>
<body>

@if ( Session::get('notice') )
<p id="notice">{{ Session::get('notice') }}</p>
@endif

@yield('content')

{{ HTML::script(URL::to_asset('js/script.js')) }}
{{ HTML::script(url("../vendor/tinymce_3.5.8/jscripts/tiny_mce/tiny_mce.js")) }}

</body>
</html>
