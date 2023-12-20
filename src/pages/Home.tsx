import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export function Home() {
  return (
    <div className="w-screen h-screen p-5 bg-zinc-800 flex justify-center gap-5 items-center flex-col">
      <h1 className='font-bold text-xl text-white absolute top-6'>
          Bem-vindo ao meu universo digital em 3D! 🚀
        </h1>
      <Suspense fallback={
          <div className='w-[80%] h-[80%]'>
            Loading...
          </div>
        }>
        <div className='w-[80%] h-[80%]'>
          <Spline scene="https://prod.spline.design/QTx4tecVaGWmBWnT/scene.splinecode" />
        </div>
      </Suspense>
      <div className=''>
        
       
        <div className='text-white mt-3 flex flex-col gap-1 text-sm w-full text-center -mt-10'>
          <p className='font-bold text-base text-white text-center'>
            Aqui estão os destaques do meu setup:
          </p>
          <p className=''>
            💻 Computador Principal: Mostrando desempenho com Xeon E5 2640 V3 e GTX1060 5GB, garantindo uma boa performace.
          </p>
          <p>
            🖥️ Monitor: Monitor LG Ultrawide 29" para uma experiência visual imersiva.
          </p>
          <p>
            ⌨️ Periféricos: Teclado Redragon Fizz K617 e mouse Shopee - sem garantia.
          </p>
          <p>
            🎧 Áudio Imersivo: Headset Raiz HZ K2 para uma experiência sonora envolvente.
          </p>
          <p>
            🪑 Ergonomia Premium: Cadeira FOX Racer para conforto durante longas sessões.
          </p>
        </div>
      </div>
    </div>
  );
}
