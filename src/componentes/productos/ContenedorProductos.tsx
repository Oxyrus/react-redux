import React, { useEffect } from "react";
import { ListaProductos } from "./ListaProductos";
import { AgregarProducto } from "./AgregarProducto";
import { Producto } from "./Producto";
import { useSelector, useDispatch } from "react-redux";
import { listarProductosAsync } from "../../redux/productos/productos.acciones";
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

  useEffect(() => {
    dispatch(listarProductosAsync(1));
  }, [dispatch]);

  return (
    <>
      <ListaProductos productos={state.productos} />
      <AgregarProducto />
      <PaginadorProductos cantidadTotalProductos={state.cantidadTotalProducto} />
    </>
  );
};

export default ContenedorProductos;
