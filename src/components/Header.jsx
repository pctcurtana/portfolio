import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { BriefcaseIcon } from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
import { FireIcon } from '@heroicons/react/24/outline'
import { Link, useLocation} from 'react-router-dom';

export default function Header () {
  const location = useLocation();
  const active = (path) => location.pathname === path;
  const linkId = (path) =>
     ` ${active(path) ? 'border-t-2 border-b-2 flex items-center font-semibold' : 'flex items-center hover-underline-dual'}`;
  return(
    <header className="py-6 shadow-md">
      <div className="max-w-6xl mx-auto px-2 flex justify-between items-center">
        <div className='flex items-center'>
          <FireIcon className="h-10 w-10 mr-1"/>
          <h1 className="text-xl font-bold cursor-pointer invisible sm:visible">thatx2</h1>
        </div>
        <nav className="flex space-x-4">
          <Link to = "/" className={linkId('/')}>About
          <InformationCircleIcon className="h-5 w-5 ml-1"/>
          </Link>
          <Link to = "projects" className={linkId('/projects')}>Projects
          <BriefcaseIcon className="h-5 w-5 ml-1"/>
          </Link>
          <Link to = "/contact" className={linkId('/contact')}>Contact
          <ChatBubbleOvalLeftIcon className="h-5 w-5 ml-1"/>
          </Link>
        </nav>
      </div>
    </header>
  )
}