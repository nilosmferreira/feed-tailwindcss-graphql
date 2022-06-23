import { Avatar } from './Avatar';
import { Comment } from './Comment';

export function Post() {
  return (
    <article className='bg-gray-800 rounded-lg p-10 mb-8'>
      <header className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Avatar />
          <div className='flex flex-col'>
            <strong className='text-gray-100 leading-relaxed'>
              Nilo Ferreira
            </strong>
            <span className='text-gray-400 text-sm leading-relaxed'>
              Desenvolvedor
            </span>
          </div>
        </div>
        <time
          className='text-sm text-gray-400'
          title='22 de Junho de 2022 às 22:46'
          dateTime='2022-06-22 22:46'
        >
          Publicado à 1h
        </time>
      </header>
      <div className='leading-relaxed text-gray-300 mt-6'>
        <p className='mt-4'>Fala galeraa 👋</p>
        <p className='mt-4'>
          Acabei de subir mais um projeto no meu portifa. É um projeto{' '}
        </p>
        que fiz no NLW Return, evento da Rocketseat. O nome do projeto é
        DoctorCare 🚀
        <p className='mt-4'>
          👉{' '}
          <a
            href='#'
            className='text-bold no-underline text-green-500 hover:text-green-300 transition-colors duration-200 '
          >
            {' '}
            jane.design/doctorcare
          </a>
        </p>
        <p className='mt-4'>
          <a
            href='#'
            className='text-bold no-underline text-green-500 hover:text-green-300 transition-colors duration-200 '
          >
            {' #nlw '}
          </a>
          <a
            href='#'
            className='text-bold no-underline text-green-500 hover:text-green-300 transition-colors duration-200 '
          >
            {' #rocketseat '}
          </a>
          <a
            href='#'
            className='text-bold no-underline text-green-500 hover:text-green-300 transition-colors duration-200 '
          >
            #novoprojeto
          </a>
        </p>
      </div>
      <form className='group mt-4 pt-6 border-t border-t-gray-600 focus-within:visible'>
        <label htmlFor='comment'>Deixe seu feedback</label>
        <textarea
          placeholder='Deixe um comentário'
          id='comment'
          className='w-full bg-gray-900 p-4 h-24 border-0 resize-none rounded-lg text-gray-100 leading-normal mt-4 focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-offset-1 focus:ring-offset-green-500'
        />
        <footer className='invisible max-h-0 group-focus-within:max-h-screen group-focus-within:visible'>
          <button
            className='bg-green-800 text-white rounded-lg font-bold border-0 mt-4 px-6 py-4 hover:bg-green-700 transition-colors'
            type='submit'
          >
            Publicar
          </button>
        </footer>
      </form>
      <div className='mt-8'>
        <Comment />
      </div>
    </article>
  );
}
