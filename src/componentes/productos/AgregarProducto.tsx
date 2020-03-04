import React from 'react';
import { agregarNuevoProducto as agregarNuevoProductoAction } from '../../redux/productos/productos.acciones';
import { useDispatch } from 'react-redux';

export const AgregarProducto = () => {
  const dispatch = useDispatch();

  const agregarProducto = (): void => {
    dispatch(agregarNuevoProductoAction({
      title: "nuevo",
      slug: "Juan Pablo Botero",
      body: "posting the article accessing using constant",
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  };

  return (
    <button onClick={() => agregarProducto()}>Agregar</button>
  );
}
