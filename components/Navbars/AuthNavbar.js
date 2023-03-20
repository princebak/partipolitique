import React from "react";
import Link from "next/link";
// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";
import { useRouter } from "next/router";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const router = useRouter();
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="#pablo" className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
              <img src="/img/brand/drc1.jpeg" style={{height: 40, border: "solid 1px #ffffff"}} />
            </Link>            
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
              <label className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                RDC PartiPolitique
              </label>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link href={router.pathname == "/auth/login" ? "/auth/register#pablo" : "/auth/login#pablo"} className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                  {router.pathname == "/auth/login" ? "S'inscrire": "Se connecter"}
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <p style={{textAlign: "center", color: "#33ccff", width: "70%", padding:"2px 1px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "15px"}}>
              Notre PartiPolitique est basé sur la bonne gouvernance, l'état de droit, le progrès social, l'amour de la patrie, du patriote et du travail pour assurer un avenir radieux pour notre progeniture.
            </p>
          </div>
          
        </div>
      </nav>
    </>
  );
}
