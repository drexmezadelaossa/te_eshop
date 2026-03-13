/**
 * Utilidad para animar la imagen del postre volando hacia el icono de favoritos.
 * @param {string} imgSrc - Ruta de la imagen del producto seleccionado.
 */
export const animarFavorito = (imgSrc) => {
  // 1. Buscamos el destino (el icono en el Header)
  const icon = document.getElementById("iconFavoritos");
  if (!icon) {
    console.warn("No se encontró el elemento con ID 'iconFavoritos'");
    return;
  }

  const rect = icon.getBoundingClientRect();
  const img = document.createElement("img");

  // 2. Configuración inicial de la imagen animada
  img.src = imgSrc;
  img.style.position = "fixed";
  img.style.width = "100px";
  img.style.height = "100px";
  img.style.objectFit = "cover";
  img.style.zIndex = "10000";
  img.style.borderRadius = "50%"; // Forma circular para que parezca un "proyectil"
  img.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
  img.style.pointerEvents = "none"; // Evita que interfiera con clics del usuario
  
  // Posición inicial: Centro de la pantalla
  img.style.left = "50%";
  img.style.top = "50%";
  img.style.transform = "translate(-50%, -50%) scale(1)";
  img.style.opacity = "1";

  document.body.appendChild(img);

  // 3. Ejecución de la animación
  setTimeout(() => {
    img.style.transition = "all 0.85s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    
    // Coordenadas del icono de favoritos
    img.style.left = `${rect.left}px`;
    img.style.top = `${rect.top}px`;
    
    // Transformación final: se encoge y desaparece al llegar
    img.style.width = "20px";
    img.style.height = "20px";
    img.style.opacity = "0.2";
    img.style.transform = "translate(0, 0) scale(0.1)";
  }, 20);

  // 4. Limpieza del DOM
  setTimeout(() => {
    img.remove();
  }, 900);
};