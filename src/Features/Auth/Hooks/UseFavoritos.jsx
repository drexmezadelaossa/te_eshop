import { useState, useEffect } from "react";

// Quitamos el 'default'
export function UseFavoritos(key = "mis_favoritos") {
  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem(key);
    try {
      return guardados ? JSON.parse(guardados) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(favoritos));
  }, [favoritos, key]);

  const toggleFavorito = (producto) => {
    if (!producto || !producto.id) return;

    const productoSeguro = {
      ...producto,
      precio: producto.precio ?? 0
    };

    setFavoritos((prev) => {
      const nuevoEstado = { ...prev };
      if (nuevoEstado[productoSeguro.id]) {
        delete nuevoEstado[productoSeguro.id];
      } else {
        nuevoEstado[productoSeguro.id] = productoSeguro;
      }
      return nuevoEstado;
    });
  };

  return { favoritos, toggleFavorito };
}