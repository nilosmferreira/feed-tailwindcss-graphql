import { Dialog } from '@headlessui/react';
type DialogDeleteCommentProps = {
  isOpen: boolean;
  onClose: () => void;
};
export function DialogDeleteCommet({
  isOpen,
  onClose,
}: DialogDeleteCommentProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className='relative z-50'>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className='fixed inset-0 bg-black/80' aria-hidden='true' />

      {/* Full-screen container to center the panel */}
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        {/* The actual dialog panel  */}
        <Dialog.Panel className='mx-auto w-[432px] h-[238px] px-8 pt-6 pb-8  bg-gray-800 rounded-[8px]'>
          <Dialog.Title className='text-center text-gray-100 text-2xl '>
            Excluir comentário
          </Dialog.Title>

          <Dialog.Description className='my-6 text-gray-300 text-base leading-6 text-center'>
            Você tem certeza que gostaria de excluir este comentário?
          </Dialog.Description>
          <footer className='flex items-center justify-center gap-2'>
            <button className='bg-gray-800 rounded-[8px] px-8 py-3'>
              Cancelar
            </button>
            <button className='bg-gray-700 text-red-400 rounded-[8px] px-8 py-3'>
              Sim, Excluir
            </button>
          </footer>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
