const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: './assets/img/img1_venta.jpg',
        descripcion: 'Este apartamento está en una zona exclusiva con todas las comodidades necesarias.',
        ubicacion: '123 Luxury Lane, Prestigious Suburb, CA 67890',
        habitaciones: 3,
        costo: 540000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: './assets/img/img2_venta.jpg',
        descripcion: 'Un lugar perfecto para relajarse con vistas increíbles a la montaña.',
        ubicacion: '456 Scenic Road, Mountain Peaks, CA 12345',
        habitaciones: 2,
        costo: 320000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: './assets/img/img3_venta.jpg',
        descripcion: 'Un penthouse con todas las comodidades y una vista espectacular de la ciudad.',
        ubicacion: '789 Skyline Drive, Fancy City, CA 98765',
        habitaciones: 4,
        costo: 860000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento moderno en zona urbana',
        src: './assets/img/img4_venta.jpg',
        descripcion: 'Moderno y espacioso, ideal para aquellos que buscan vivir en la ciudad.',
        ubicacion: '321 City Street, Urban Area, CA 54321',
        habitaciones: 3,
        costo: 450000,
        smoke: true,
        pets: false
    }
];

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: './assets/img/img1_alquiler.jpg',
        descripcion: 'Perfecto para quienes desean estar cerca de todo, con acceso fácil a transporte público.',
        ubicacion: '111 Downtown St, City Center, CA 54321',
        habitaciones: 2,
        costo: 1500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: './assets/img/img2_alquiler.jpg',
        descripcion: 'Un lugar encantador con una vista espectacular al océano.',
        ubicacion: '222 Seaside Ave, Beach Town, CA 67890',
        habitaciones: 3,
        costo: 2000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: './assets/img/img3_alquiler.jpg',
        descripcion: 'Espacioso y con todas las comodidades modernas, ideal para familias.',
        ubicacion: '333 Family St, Suburbia, CA 12345',
        habitaciones: 3,
        costo: 1800,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento en zona tranquila',
        src: './assets/img/img4_alquiler.jpg',
        descripcion: 'Ideal para aquellos que buscan tranquilidad y seguridad.',
        ubicacion: '444 Quiet Rd, Peaceful Area, CA 98765',
        habitaciones: 2,
        costo: 1600,
        smoke: true,
        pets: true
    }
];

function renderProperties(properties, containerId, limit = null) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const limitProperties = limit ? properties.slice(0, limit) : properties;
    
    limitProperties.forEach(prop => {
        const card = document.createElement('div');
        card.className = 'card-prop col-md-4 col-sm-1 card-max-width';
        card.innerHTML = `
            <img src="${prop.src}" alt="${prop.nombre}">
            <div class="card-details text-start px-2">
                <div class="title">${prop.nombre}</div>
                <div class="description">${prop.descripcion}</div>
                <div class="location"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> ${prop.ubicacion}</div>
                <div class="rooms"><i class="fas fa-bed" aria-hidden="true"></i> Habitaciones: ${prop.habitaciones}</div>
                <div class="price"><i class="fas fa-dollar-sign" aria-hidden="true"></i>${prop.costo.toLocaleString()}</div>
                <div class="status ${prop.smoke ? 'allowed' : 'not-allowed'}">
                    <i class="fas ${prop.smoke ? 'fa-smoking' : 'fa-smoking-ban'}" aria-hidden="true"></i>
                    ${prop.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                </div>
                <div class="status ${prop.pets ? 'allowed' : 'not-allowed'}">
                    <i class="fas ${prop.pets ? 'fa-paw' : 'fa-ban'}"></i>
                    ${prop.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                </div>
            </div>
        `;
        fragment.appendChild(card);
    });

    container.appendChild(fragment);
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('venta-container')) {
        renderProperties(propiedades_venta, 'venta-container', 3);
    }
    if (document.getElementById('alquiler-container')) {
        renderProperties(propiedades_alquiler, 'alquiler-container', 3);
    }
    if (document.getElementById('venta-container-inner')) {
        renderProperties(propiedades_venta, 'venta-container-inner', null);}
    
    if (document.getElementById('alquiler-container-inner')) {
            renderProperties(propiedades_alquiler, 'alquiler-container-inner', null);}    
});
