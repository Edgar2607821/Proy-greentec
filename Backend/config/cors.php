<?php
return [

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => ['http://localhost:4200'], // Cambia al dominio de tu frontend si es diferente

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['Content-Type', 'X-CSRF-TOKEN', 'Authorization', 'X-Requested-With'],

    'exposed_headers' => ['*'],

    'max_age' => 0,

    'supports_credentials' => true, // Habilitar cookies
];
