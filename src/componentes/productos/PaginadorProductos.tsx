import React from 'react'
import { useDispatch } from 'react-redux';
import { listarProductosAsync } from '../../redux/productos/productos.acciones';

interface Props {
    cantidadTotalProductos: number,
}

export const PaginadorProductos = (props: Props) => {
  const { cantidadTotalProductos } = props;
  const dispatch = useDispatch();

  if (cantidadTotalProductos <= 10) {
    return null;
  }

  const rango = [];
  for (let i = 0; i < Math.ceil(cantidadTotalProductos / 10); ++i) {
    rango.push(i);
  }

  return (
    <nav>
      {
        rango.map(index => {
          return (
            <button
              onClick={() => dispatch(listarProductosAsync(index))}
              key={index.toString()}>
                  {index + 1}
            </button>
          );
        })
      }
    </nav>
  );
}
