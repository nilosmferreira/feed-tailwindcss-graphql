import { Popover } from '@headlessui/react';
import { NotePencil, PlusCircle } from 'phosphor-react';
import { WidgetAddPostForm } from './WidgetAddPostForm';

export function WidgetAddPost() {
  return (
    <Popover className='absolute top-[40rem] right-px  md:top-24 md:right-96  flex flex-col items-start'>
      <Popover.Panel>
        <WidgetAddPostForm />
      </Popover.Panel>
      <Popover.Button className='flex items-center bg-transparent border-2 border-green-500 rounded-full px-3 h-12 text-green-500 group  hover:bg-green-500 hover:text-white transition-colors'>
        <NotePencil className='w-6 h-6 ' />
        {/* <span className='max-w-0 overflow-hidden group-hover:max-w-xs  transition-all duration-700 ease-linear'>
          <span className='pl-2'></span>
          Post
        </span> */}
      </Popover.Button>
    </Popover>
  );
}
