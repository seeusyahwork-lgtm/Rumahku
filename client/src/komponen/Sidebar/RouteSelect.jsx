import React from 'react'
import { FaUserTie } from "react-icons/fa6";
import { FaClipboardUser } from "react-icons/fa6";
import { MdConstruction } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdDataset } from "react-icons/md";
import { FaBarsProgress } from "react-icons/fa6";import { Link } from 'react-router-dom'




function RouteSelect() {
  return (
    <div>
      <ul className="menu bg-base-200 rounded-box w-56">
        <li>
          <details open>
            <summary> <MdConstruction />Proyek</summary>
            <ul>
              <li>
                <Link to={'/PAdmin'} className="font-medium text-teal-600 hover:underline dark:text-teal-500">
                  <MdDataset />Data Proyek
                </Link>

              </li>
              <li>
                <Link to={'/DListProyek'} className="font-medium text-teal-600 hover:underline dark:text-teal-500">
                  <FaBarsProgress />Progres Proyek
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link to={'/DPengawas'} className="font-medium text-teal-600 hover:underline dark:text-teal-500">
            <FaClipboardUser />Petugas
          </Link>

        </li>
        <li>
          <Link to={'/DMandor'} className="font-medium text-teal-600 hover:underline dark:text-teal-500">
            <FaUserTie /> Mandor
          </Link>
        </li>
        <li>
          <Link to={'/DKonsumen'} className="font-medium text-teal-600 hover:underline dark:text-teal-500">
            <FaRegUser />Konsumen
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default RouteSelect