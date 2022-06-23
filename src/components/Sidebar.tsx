/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Pencil } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className='bg-gray-800 rounded-lg overflow-hidden'>
      <img src='https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=30' />
      <div className='flex flex-col items-center mt-[-2rem]'>
        <Avatar src='https://github.com/nilosmferreira.png' />
        <strong className='mt-4 text-gray-100 leading-relaxed'>
          Nilo Ferreira
        </strong>
        <span className='text-sm text-gray-400'>Desenvolvedor</span>
      </div>
      <footer className='border-t border-t-gray-600 mt-6 px-6'>
        <a
          href='#'
          className='bg-transparent w-full text-green-500 border border-green-500 rounded-lg flex items-center justify-center gap-2 my-6 p-4 hover:bg-green-500 hover:text-white font-bold transition-colors'
        >
          <Pencil size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
