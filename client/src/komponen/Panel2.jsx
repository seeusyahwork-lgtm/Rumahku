import React from "react";

function Panel2() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Perancangan dan Perencaan</h1>
          <p className="py-6">
            Konsultasikan rumah impian anda agar kami bisa membantu dalam perancangan dan Perencaan
            rumah yang indah adalah rumah yang rancangan dengan perencaan yang matang
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    
  );
}

export default Panel2;
