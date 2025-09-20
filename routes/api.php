<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductoController;

// Ruta pública: cualquiera puede ver los productos
Route::get('/productos', [ProductoController::class, 'index']);
