<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config("app.name") }}</title>
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" />
    @viteReactRefresh
    @vite('resources/js/main.jsx')
    @vite('resources/css/app.css')
</head>
<body>
    <div id="app"></div>
</body>
</html>
