import React from 'react'
import { FaUserTie } from "react-icons/fa6";
import { FaClipboardUser } from "react-icons/fa6";
import { MdConstruction } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdDataset } from "react-icons/md";

function RouteSelect() {
  return (
    <div>
      <ul className="menu bg-base-200 rounded-box w-56">
        <li>
          <details open>
            <summary> <MdConstruction />Proyek</summary>
            <ul>
              <li>
                <a> <MdDataset />Data Proyek</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>  <FaClipboardUser />Petugas</a>
        </li>
        <li>
          <a><FaUserTie /> Mandor</a>
        </li>
        <li>
          <a><FaRegUser />Konsumen</a>
        </li>
      </ul>
    </div>
  )
}

export default RouteSelect