import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import { DialogDeleteCommet } from './DialogExcluir';

export function Comment() {
  const [isOpenExcluir, setIsOpenExcluir] = useState(false);
  return (
    <div className='flex mt-6 gap-4'>
      <Avatar hasBorder={false} src='https://github.com/nilosmferreira.png' />
      <div className='flex-1'>
        <div className='rounded-[8px] bg-gray-700 p-4'>
          <header className='flex justify-between items-start'>
            <div>
              <strong className='block text-sm'>Nilo Ferreira</strong>
              <time
                className='block text-xs text-gray-400'
                dateTime='2022-06-23 17:24'
              >
                Cerca de 2h
              </time>
            </div>
            <button
              className='border-0 rounded text-gray-400 leading-[0] hover:text-red-400'
              title='Deletar comentário'
              onClick={() => setIsOpenExcluir(true)}
            >
              <Trash size={20} />
            </button>
          </header>
          <p className='mt-4 text-gray-400'>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer className='mt-4'>
          <button className='flex rounded text-gray-400'>
            <ThumbsUp size={20} className='mr-2' />
            Aplaudir
            <span className="px-1 py-0 before:content-['\2022']">{' 20'}</span>
          </button>
        </footer>
      </div>
      <DialogDeleteCommet
        isOpen={isOpenExcluir}
        onClose={() => setIsOpenExcluir(false)}
      />
    </div>
  );
}
