import React from "react";
import { useRouter } from "next/router";

// layout for page

import Auth from "layouts/Auth.js";

export default function Register() {
  const router = useRouter()
  const handleSubmit = ()=>{
    router.push("/auth/login");
  }
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-8/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Inscription
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Remplissez tout les champs obligatoirs (*)</small>
                </div>
                <form>
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <div style={{padding: "0 5px"}}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="fullName"
                        >
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Bakenga Ilunga Prince"
                          id="fullName"
                          required
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="email"
                        >
                          E-mail
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="E-mail"
                          id="email"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="sex1"
                        >
                          Genre *
                        </label>
                        <label>
                          <input
                            type="radio" name ="sex" value="H" id="sex1"
                          /> H
                        </label>
                        <label style={{marginLeft: "10px"}}>
                          <input
                            type="radio" name ="sex" value="F"
                          /> F
                        </label>
                        
                      </div>
                    </div>

                    <div style={{padding: "0 5px"}}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="dob"
                        >
                          Date de naissance
                        </label>
                        <input
                          type="date"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          id="dob"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="civil-status"
                        >
                          Etat civil
                        </label>
                        <select
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          id="civil-status"
                        >
                          <option value="celibataire">Celibataire</option>
                          <option value="Marié">Marié</option>
                          <option value="Divorcé">Divorcé</option>
                        </select>
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="federation"
                        >
                          Federation
                        </label>
                        <select
                          type="password"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          id="federation"
                        >
                          <option value="fédération 1">Fédération 1</option>
                          <option value="fédération 2">Fédération 2</option>
                          <option value="fédération 3">Fédération 3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="address"
                        >
                          Adresse
                        </label>
                        <textarea
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Votre adresse"
                          id="address"
                        ></textarea>
                  </div>
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <div style={{padding: "0 5px"}}>
                    <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="password"
                          >
                            Mot de passe
                          </label>
                          <input
                            type="password"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Mot de passe"
                            id="password"
                          />
                    </div>
                    </div>
                    
                    <div style={{padding: "0 5px"}}>
                    <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="confirm-password"
                          >
                            Confirmer le Mot de passe
                          </label>
                          <input
                            type="password"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Confirmer le Mot de passe"
                            id="confirm-password"
                          />
                    </div>
                    </div>
                    
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleSubmit()}
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Register.layout = Auth;
