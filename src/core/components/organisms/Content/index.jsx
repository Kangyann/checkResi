import { useState, useEffect } from "react";

const ContentComponent = () => {
  return (
    <>
      <div className="text-center flex justify-center items-center min-h-96 px-6">
        <div className="container max-w-screen-md mx-auto">
          <div className="flex flex-col">
            <h2 className="font-bold text-4xl mb-6">Tracks All Packet Here</h2>
            <p className="mb-6">
              Belanja Serba Gampang, Cek Resi Hanya Di Kangyann. Penyedia
              Berbagai Macam Jenis Paket Bisa Di Cek Di Sini Dengan Mudah Dan
              Akurat.
            </p>
            <input
              type="text"
              placeholder="Masukan resi anda disini"
              className="mb-4 py-1.5 px-3 rounded placeholder:text-center"
            />
            <button className="bg-base-200 py-1.5 px-3 rounded">
              Tracking Sekarang
              <span class="loading loading-ring loading-xs"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentComponent;
