import React from 'react'
import { Producto } from './Producto';

interface Props {
  producto: Producto,
  onClickEliminarProducto: (productos: Producto) => void
}

export const EliminarProducto = (props: Props) => {
  const { onClickEliminarProducto, producto } = props;
  return (
    <button onClick={() => onClickEliminarProducto(producto)}>X</button>
  );
}
