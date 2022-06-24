import { ArrowLeft } from 'phosphor-react';

export function WidgetAddPostForm() {
  return (
    <div className='p-4 rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] min-w-[250px]  md:w-auto'>
      <header>
        <button>
          <ArrowLeft />
        </button>
      </header>
      <form>
        <textarea name='feed' />
        <footer>
          <button>Enviar Feed</button>
        </footer>
      </form>
    </div>
  );
}
