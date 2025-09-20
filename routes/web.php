<?php

use Illuminate\Support\Facades\Route;

// Ruta principal que carga la aplicación React
Route::get('/', function () {
    return view('welcome');
});

// Catch-all route para React Router - debe ir al final
// ⚠️ OJO: esto solo debe atrapar rutas de frontend, NO las del prefijo /api
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '^(?!api).*$'); // ← excluye /api