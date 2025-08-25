import React from 'react'

function Panel() {
  return (
   <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hai Semua..</h1>
      <p className="mb-5">
        mulailah membuat impian rumah anda menjadi nyata dengan diawali perencanaan yang terstrukture dan tercatat bersama kami yang akan membimbingnya
      </p>
      <button className="btn btn-primary">Mulai Sekarang</button>
    </div>
  </div>
</div>


  )
}

export default Panel