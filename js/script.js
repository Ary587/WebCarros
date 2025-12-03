// INICIALIZACIÓN Y CONFIGURACIÓN
document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('usuarios')) {
        localStorage.setItem('usuarios', JSON.stringify([]));
    }
    if (!localStorage.getItem('catalogo')) {
        inicializarCatalogo();
    }
    
    verificarAutenticacion();
    actualizarContadores();
    inicializarEventos();
    
    if (document.getElementById('catalogo')) cargarCatalogo();
    if (document.getElementById('listaFav')) cargarFavoritos();
    if (document.getElementById('listaCarrito')) cargarCarrito();
    if (document.getElementById('bienvenida')) cargarDashboard();
});

// DATOS INICIALES - CATÁLOGO 
function inicializarCatalogo() {
    const catalogo = [
        { 
            id: 1, 
            nombre: "Chevrolet Camaro 2023", 
            precio: 850000, 
            descripcion: "Deportivo | V8 6.2L | Automático | 8,000 km",
            imagen: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
            marca: "chevrolet",
            tipo: "deportivo"
        },
        { 
            id: 2, 
            nombre: "Honda CR-V 2022", 
            precio: 520000, 
            descripcion: "SUV | Híbrido | 4x2 | 22,000 km",
            imagen: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
            marca: "honda",
            tipo: "suv"
        },
        { 
            id: 3, 
            nombre: "VW Golf GTI 2021", 
            precio: 450000, 
            descripcion: "Hatchback | Turbo 2.0L | Manual | 35,000 km",
            imagen: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
            marca: "volkswagen",
            tipo: "hatchback"
        },
        { 
            id: 4, 
            nombre: "Toyota Corolla 2023", 
            precio: 380000, 
            descripcion: "Sedán | Híbrido | Automático | 15,000 km",
            imagen: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
            marca: "toyota",
            tipo: "sedan"
        },
        { 
            id: 5, 
            nombre: "Ford F-150 2022", 
            precio: 680000, 
            descripcion: "Pickup | V6 EcoBoost | 4x4 | 18,000 km",
            imagen: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
            marca: "ford",
            tipo: "pickup"
        },
        { 
            id: 6, 
            nombre: "BMW M4 Competition 2023", 
            precio: 1250000, 
            descripcion: "Coupe | 3.0L Twin-Turbo | Automático | 5,000 km",
            imagen: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
            marca: "bmw",
            tipo: "deportivo"
        },
        { 
            id: 7, 
            nombre: "Mercedes-Benz GLC 300 2022", 
            precio: 890000, 
            descripcion: "SUV | 4Matic | Automático | 25,000 km",
            imagen: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
            marca: "mercedes",
            tipo: "suv"
        },
        { 
            id: 8, 
            nombre: "Audi A4 2023", 
            precio: 750000, 
            descripcion: "Sedán | Quattro | Automático | 12,000 km",
            imagen: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
            marca: "audi",
            tipo: "sedan"
        },
        { 
            id: 9, 
            nombre: "Tesla Model 3 2023", 
            precio: 950000, 
            descripcion: "Eléctrico | Autonomía 500km | 8,000 km",
            imagen: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
            marca: "tesla",
            tipo: "electrico"
        },
        { 
            id: 10, 
            nombre: "Nissan Versa 2022", 
            precio: 280000, 
            descripcion: "Sedán | CVT | 4 Cilindros | 30,000 km",
            imagen: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
            marca: "nissan",
            tipo: "sedan"
        },
        { 
            id: 11, 
            nombre: "Mazda CX-5 2022", 
            precio: 520000, 
            descripcion: "SUV | SkyActiv-G | Automático | 20,000 km",
            imagen: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
            marca: "mazda",
            tipo: "suv"
        },
        { 
            id: 12, 
            nombre: "Hyundai Tucson 2023", 
            precio: 480000, 
            descripcion: "SUV | Híbrido | Automático | 15,000 km",
            imagen: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
            marca: "hyundai",
            tipo: "suv"
        },
        { 
            id: 13, 
            nombre: "Kia Sportage 2023", 
            precio: 460000, 
            descripcion: "SUV | Turbo | Automático | 18,000 km",
            imagen: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
            marca: "kia",
            tipo: "suv"
        },
        { 
            id: 14, 
            nombre: "Jeep Wrangler 2022", 
            precio: 720000, 
            descripcion: "SUV 4x4 | V6 | Manual | 25,000 km",
            imagen: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
            marca: "jeep",
            tipo: "suv"
        },
        { 
            id: 15, 
            nombre: "Subaru Outback 2022", 
            precio: 540000, 
            descripcion: "Wagon | Symmetrical AWD | Automático | 22,000 km",
            imagen: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
            marca: "subaru",
            tipo: "wagon"
        },
        { 
            id: 16, 
            nombre: "Porsche 911 Carrera 2023", 
            precio: 1850000, 
            descripcion: "Deportivo | 3.0L Turbo | PDK | 3,000 km",
            imagen: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
            marca: "porsche",
            tipo: "deportivo"
        },
        { 
            id: 17, 
            nombre: "Lexus RX 350 2022", 
            precio: 820000, 
            descripcion: "SUV | V6 | Automático | 28,000 km",
            imagen: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
            marca: "lexus",
            tipo: "suv"
        },
        { 
            id: 18, 
            nombre: "Volkswagen Tiguan 2022", 
            precio: 440000, 
            descripcion: "SUV | 2.0L TSI | Automático | 32,000 km",
            imagen: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
            marca: "volkswagen",
            tipo: "suv"
        },
        { 
            id: 19, 
            nombre: "Chevrolet Equinox 2023", 
            precio: 420000, 
            descripcion: "SUV | 1.5L Turbo | Automático | 12,000 km",
            imagen: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
            marca: "chevrolet",
            tipo: "suv"
        },
        { 
            id: 20, 
            nombre: "Ford Mustang GT 2023", 
            precio: 920000, 
            descripcion: "Deportivo | V8 5.0L | Manual | 8,000 km",
            imagen: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
            marca: "ford",
            tipo: "deportivo"
        },
        { 
            id: 21, 
            nombre: "Toyota RAV4 2023", 
            precio: 510000, 
            descripcion: "SUV | Híbrido | AWD | 16,000 km",
            imagen: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
            marca: "toyota",
            tipo: "suv"
        }
    ];
    localStorage.setItem('catalogo', JSON.stringify(catalogo));
}

// AUTENTICACIÓN - VERIFICACIÓN
function verificarAutenticacion() {
    const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
    const navDashboard = document.getElementById('nav-dashboard');
    const navLogin = document.getElementById('nav-login');
    
    if (usuarioActual && navDashboard) {
        navDashboard.style.display = 'block';
        if (navLogin) navLogin.style.display = 'none';
    }
    
    if (window.location.pathname.includes('dashboard.html') && !usuarioActual) {
        window.location.href = 'login.html';
    }
}

// AUTENTICACIÓN - REGISTRO
function registrarUsuario(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    
    if (usuarios.some(u => u.email === email)) {
        mostrarAlerta('registerAlert', 'Este correo ya está registrado', 'danger');
        return;
    }
    
    const nuevoUsuario = {
        id: Date.now(),
        nombre,
        email,
        password
    };
    
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('usuarioActual', JSON.stringify(nuevoUsuario));
    
    mostrarAlerta('registerAlert', 'Registro exitoso. Redirigiendo...', 'success');
    setTimeout(() => window.location.href = 'login.html', 1500);
}

// AUTENTICACIÓN - LOGIN
function iniciarSesion(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    const usuario = usuarios.find(u => u.email === email && u.password === password);
    
    if (usuario) {
        localStorage.setItem('usuarioActual', JSON.stringify(usuario));
        mostrarAlerta('loginAlert', 'Inicio de sesión exitoso', 'success');
        setTimeout(() => window.location.href = 'dashboard.html', 1000);
    } else {
        mostrarAlerta('loginAlert', 'Credenciales incorrectas', 'danger');
    }
}

// AUTENTICACIÓN - LOGOUT
function cerrarSesion() {
    localStorage.removeItem('usuarioActual');
    window.location.href = 'index.html';
}

// CATÁLOGO - CARGAR
function cargarCatalogo() {
    const catalogo = JSON.parse(localStorage.getItem('catalogo')) || [];
    const container = document.getElementById('catalogo');
    
    if (container) {
        container.innerHTML = catalogo.map(auto => `
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${auto.imagen}" class="img-fluid rounded-start" style="height:250px;object-fit:cover" alt="${auto.nombre}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${auto.nombre}</h5>
                            <p class="card-text">${auto.descripcion}</p>
                            <h4 class="text-danger">$${auto.precio.toLocaleString()} MXN</h4>
                            <button onclick="agregarAFavoritos(${auto.id})" class="btn btn-outline-danger">
                                <i class="bi bi-heart"></i> Favorito
                            </button>
                            <button onclick="agregarAlCarrito(${auto.id})" class="btn btn-outline-warning ms-2">
                                <i class="bi bi-cart-plus"></i> Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// FAVORITOS - AGREGAR
function agregarAFavoritos(autoId) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    if (!favoritos.includes(autoId)) {
        favoritos.push(autoId);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        
        const movimientos = JSON.parse(localStorage.getItem('movimientos')) || [];
        movimientos.unshift({
            tipo: 'Favorito',
            autoId: autoId,
            fecha: new Date().toLocaleDateString()
        });
        localStorage.setItem('movimientos', JSON.stringify(movimientos.slice(0, 10)));
        
        actualizarContadores();
        alert('Agregado a favoritos');
    }
}

// FAVORITOS - CARGAR
function cargarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const catalogo = JSON.parse(localStorage.getItem('catalogo')) || [];
    const container = document.getElementById('listaFav');
    
    if (container) {
        if (favoritos.length === 0) {
            container.innerHTML = '<p class="text-muted">No tienes autos favoritos aún.</p>';
            return;
        }
        
        const autosFav = catalogo.filter(auto => favoritos.includes(auto.id));
        container.innerHTML = autosFav.map(auto => `
            <div class="fav-item">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${auto.imagen}" class="img-fluid rounded" style="height:150px;object-fit:cover">
                    </div>
                    <div class="col-md-6">
                        <h5>${auto.nombre}</h5>
                        <p>${auto.descripcion}</p>
                        <h4 class="text-danger">$${auto.precio.toLocaleString()} MXN</h4>
                    </div>
                    <div class="col-md-3 d-flex align-items-center">
                        <button onclick="removerDeFavoritos(${auto.id})" class="btn btn-outline-danger w-100">
                            <i class="bi bi-trash"></i> Eliminar
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// FAVORITOS - ELIMINAR
function removerDeFavoritos(autoId) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    favoritos = favoritos.filter(id => id !== autoId);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    cargarFavoritos();
    actualizarContadores();
}

// CARRITO - AGREGAR
function agregarAlCarrito(autoId) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (!carrito.includes(autoId)) {
        carrito.push(autoId);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        
        const movimientos = JSON.parse(localStorage.getItem('movimientos')) || [];
        movimientos.unshift({
            tipo: 'Carrito',
            autoId: autoId,
            fecha: new Date().toLocaleDateString()
        });
        localStorage.setItem('movimientos', JSON.stringify(movimientos.slice(0, 10)));
        
        actualizarContadores();
        alert('Agregado al carrito');
    }
}

// CARRITO - CARGAR
function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const catalogo = JSON.parse(localStorage.getItem('catalogo')) || [];
    const container = document.getElementById('listaCarrito');
    
    if (container) {
        if (carrito.length === 0) {
            container.innerHTML = '<p class="text-muted">Tu carrito está vacío.</p>';
            return;
        }
        
        const autosCarrito = catalogo.filter(auto => carrito.includes(auto.id));
        const total = autosCarrito.reduce((sum, auto) => sum + auto.precio, 0);
        
        container.innerHTML = autosCarrito.map(auto => `
            <div class="carrito-item">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${auto.imagen}" class="img-fluid rounded" style="height:150px;object-fit:cover">
                    </div>
                    <div class="col-md-6">
                        <h5>${auto.nombre}</h5>
                        <p>${auto.descripcion}</p>
                        <h4 class="text-danger">$${auto.precio.toLocaleString()} MXN</h4>
                    </div>
                    <div class="col-md-3 d-flex align-items-center">
                        <button onclick="removerDelCarrito(${auto.id})" class="btn btn-outline-warning w-100">
                            <i class="bi bi-trash"></i> Eliminar
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        container.innerHTML += `
            <div class="mt-4 p-3 bg-light rounded">
                <h4 class="text-end">Total: <span class="text-danger">$${total.toLocaleString()} MXN</span></h4>
                <button class="btn btn-success w-100 mt-2" onclick="comprarCarrito()">
                    <i class="bi bi-bag-check"></i> Proceder al pago
                </button>
            </div>
        `;
    }
}

// CARRITO - ELIMINAR
function removerDelCarrito(autoId) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(id => id !== autoId);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
    actualizarContadores();
}

// CARRITO - COMPRAR
function comprarCarrito() {
    localStorage.setItem('carrito', JSON.stringify([]));
    alert('¡Compra realizada con éxito!');
    cargarCarrito();
    actualizarContadores();
}

// DASHBOARD - CARGAR
function cargarDashboard() {
    const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
    if (usuarioActual) {
        document.getElementById('bienvenida').textContent = `Bienvenido, ${usuarioActual.nombre}`;
    }
    
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const catalogo = JSON.parse(localStorage.getItem('catalogo')) || [];
    const movimientos = JSON.parse(localStorage.getItem('movimientos')) || [];
    
    document.getElementById('statFav').textContent = favoritos.length;
    document.getElementById('statCarrito').textContent = carrito.length;
    document.getElementById('statCatalogo').textContent = catalogo.length;
    
    if (movimientos.length > 0) {
        document.getElementById('statUltimo').textContent = movimientos[0].fecha;
    }
    
    const tabla = document.getElementById('tablaMovimientos');
    if (tabla) {
        const movimientosMostrar = movimientos.slice(0, 5);
        const catalogoMap = {};
        catalogo.forEach(auto => catalogoMap[auto.id] = auto);
        
        tabla.innerHTML = movimientosMostrar.map(mov => {
            const auto = catalogoMap[mov.autoId];
            return `
                <tr>
                    <td>${mov.tipo}</td>
                    <td>${auto ? auto.nombre : 'Auto no encontrado'}</td>
                    <td>${auto ? `$${auto.precio.toLocaleString()}` : 'N/A'}</td>
                    <td>${mov.fecha}</td>
                </tr>
            `;
        }).join('');
    }
}

// UTILIDADES - ACTUALIZAR CONTADORES
function actualizarContadores() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    document.querySelectorAll('#numFav').forEach(el => el.textContent = favoritos.length);
    document.querySelectorAll('#numCarrito').forEach(el => el.textContent = carrito.length);
}

// UTILIDADES - MOSTRAR ALERTA
function mostrarAlerta(elementId, mensaje, tipo) {
    const alertDiv = document.getElementById(elementId);
    if (alertDiv) {
        alertDiv.innerHTML = `
            <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
                ${mensaje}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
    }
}

// EVENTOS - INICIALIZAR
function inicializarEventos() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) loginForm.addEventListener('submit', iniciarSesion);
    if (registerForm) registerForm.addEventListener('submit', registrarUsuario);
    
    window.cerrarSesion = cerrarSesion;
    window.agregarAFavoritos = agregarAFavoritos;
    window.agregarAlCarrito = agregarAlCarrito;
    window.removerDeFavoritos = removerDeFavoritos;
    window.removerDelCarrito = removerDelCarrito;
    window.comprarCarrito = comprarCarrito;
}
