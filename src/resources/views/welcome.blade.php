
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel Vite Vue</title>
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body>
        <div>
            <h1>バックエンド</h1>
            <a href="{{ route('backend.test') }}">テスト</a>
            <h2>アルゴリズム</h2>
            <a href="{{ route('algorithm.bubblesort') }}">バブルソート</a>
            <h1>フロントエンドVue3</h1>

            <a href="{{ route('frontend.test') }}">テスト</a>
        </div>
        <div id="signup"></div>

        {{-- <div id="vuetifyMain"></div> --}}


    </body>
</html>
