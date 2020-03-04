import React from 'react'
import { Producto } from './Producto';
import { useDispatch } from 'react-redux';
import { eliminarProducto as eliminarProductoAction } from '../../redux/productos/productos.acciones';

interface Props {
  producto: Producto,
}

export const EliminarProducto = (props: Props) => {
  const { producto } = props;

  const dispatch = useDispatch();

  const eliminarProducto = () => {
    dispatch(eliminarProductoAction(producto));
  };

  return (
    <button onClick={() => eliminarProducto()}>X</button>
  );
}
