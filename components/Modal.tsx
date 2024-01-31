"use client";
import React, { useState } from "react";

const Modal = ({ showModal, setShowModal, result }: any) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  {/* <h3 className="text-3xl font-semibold">Modal Title</h3> */}
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white opacity-100 h-6 w-6 text-3xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="">
                  <div className="h-[300px] w-full m-auto">
                    <img
                      src={result?.images[0].url}
                      className="w-full h-full"
                      alt=""
                    />
                  </div>
                  <h1 className="mt-3 text-xl text-center font-semibold">
                    {result?.name}
                  </h1>
                  <div className="flex items-center flex-wrap mt-3 gap-2">
                    {result?.genres?.map((val: any, index: number) => (
                      <button
                        className="bg-spotify text-white text-[14px] py-1 px-2 rounded"
                        key={index}
                      >
                        {val}
                      </button>
                    ))}
                  </div>

                  <div className="flex mt-2 gap-x-2 text-lg items-center">
                    <span className="font-semibold">Followers:</span>
                    {result?.followers?.total?.toLocaleString()}
                  </div>
                  <div className="bg-spotify rounded w-full text-white text-center px-2 py-1 mt-10">
                    <a href={result?.external_urls?.spotify} target="_blank">
                      <button>Follow</button>
                    </a>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
