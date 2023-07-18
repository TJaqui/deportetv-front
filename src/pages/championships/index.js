import React from 'react';
import ListaLigas from '../../components/lista-ligas';

function Championships() {
  return (
    <div className="flex flex-col w-full h-full items-center">
        <div className="flex items-center justify-center w-full h-[100px] bg-[black]">
            <h1 className="text-white text-[30px] text-center tracking-widest font-[600] uppercase"></h1>
        </div>

        <div className='flex items-center justify-center w-full h-[380px] bg-leagues-pattern bg-center bg-no-repeat bg-cover bg-opacity-25'>
          <h1 className='text-white text-[50px] my-[50px] uppercase font-[800] mt-[10px] text-center'>Competiciones más famosas</h1>
        </div>
        

        <div className="flex flex-col w-[90%] h-full bg-slate-200 mt-[50px] mb-[50px]">
            <ListaLigas></ListaLigas>
        </div>
    </div>
  );
}

export default Championships;