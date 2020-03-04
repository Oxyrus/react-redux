import React from 'react'
import { Producto } from './Producto';
import { EliminarProducto } from "./EliminarProducto"

export interface Props {
  productos: Array<Producto>,
  onClickEliminarProducto: (productos: Producto) => void
}

export const ListaProductos = (props: Props) => {
  const { productos, onClickEliminarProducto } = props;
  return (
    <table>
      <thead>
        <tr>
          <td>
            <b>Título</b>
          </td>
          <td>
            <b>
              Fecha creación
            </b>
          </td>
          <td>
            <b>Eliminar</b>
          </td>
        </tr>
      </thead>
      <tbody>
        {productos.map(producto => (
          <tr key={producto.slug}>
            <td>
              {producto.title}
            </td>
            <td>
              {producto.createdAt.toString()}
            </td>
            <td>
              <EliminarProducto
                producto={producto}
                onClickEliminarProducto={onClickEliminarProducto} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
