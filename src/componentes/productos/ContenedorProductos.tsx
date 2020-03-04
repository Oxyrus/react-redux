import React, { useEffect } from "react";
import { ListaProductos } from "./ListaProductos";
import { AgregarProducto } from "./AgregarProducto";
import { Producto } from "./Producto";
import { useSelector, useDispatch } from "react-redux";
import {
  agregarNuevoProducto,
  eliminarProducto as eliminarProductoAction,
  listarProductosAsync
} from "../../redux/productos/productos.acciones";
import { PaginadorProductos } from "./PaginadorProductos";

interface EstadoProducto {
  productos: Producto[];
  cantidadTotalProducto: number;
}

const ContenedorProductos = () => {
  const state = useSelector(
    ({ productosReducer }: { productosReducer: EstadoProducto }) =>
      productosReducer
  );
  const dispatch = useDispatch();

  const agregarProducto = (producto: Producto) => {
    dispatch(agregarNuevoProducto(producto));
  };

  const cambiarPagina = (numeroPagina: number) => {
    dispatch(listarProductosAsync(numeroPagina));
  };

  const eliminarProducto = (producto: Producto) => {
    dispatch(eliminarProductoAction(producto));
  };

  useEffect(() => {
    dispatch(listarProductosAsync(1));
  }, []);

  return (
    <>
      <ListaProductos
        productos={state.productos}
        onClickEliminarProducto={eliminarProducto}
      />

      <AgregarProducto onClickAgregarProducto={agregarProducto} />
      <PaginadorProductos
        cantidadTotalProductos={state.cantidadTotalProducto}
        onClickCambiarPagina={cambiarPagina}
      />
    </>
  );
};

export default ContenedorProductos;
