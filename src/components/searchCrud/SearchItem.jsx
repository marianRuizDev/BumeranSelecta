import React from "react";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
export default function SearchItem({ itemBusqueda, index }) {
  console.log(itemBusqueda);

  return (
    <tr>
      <td>{index}</td>
      <td>{itemBusqueda.title}</td>
      <td>{itemBusqueda.country}</td>
      <td>{itemBusqueda.area_search}</td>

      <td>
        <Link to={`/admin/searchs/update/${itemBusqueda.id}`} class="btn btn-outline-warning m-2">
        <AiFillEdit/>
        </Link>

        <a href="/delete/<%= cliente.id %>" class="btn btn-outline-danger m-1">
         <RiDeleteBin5Fill/>
        </a>
      </td>
    </tr>
  );
}
