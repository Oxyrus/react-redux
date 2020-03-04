import React from 'react';
import { Producto } from './Producto';

export interface Props {
  onClickAgregarProducto: (producto: Producto) => void;
}

export const AgregarProducto = (props: Props) => {
  const { onClickAgregarProducto } = props;

  const agregarProducto = (): void => {
    onClickAgregarProducto({
      title: "nuevo",
      slug: "Juan Pablo Botero",
      body: "posting the article accessing using constant",
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  return (
    <button onClick={() => agregarProducto()}>Agregar</button>
  );
}
