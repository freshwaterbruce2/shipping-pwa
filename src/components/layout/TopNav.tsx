
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import cn from '@/utils/cn'; // Assuming a utility for className conditional joining

const modules = [
  { name: 'Scheduler', path: '/' },
  { name: 'Pallet Counter', path: '/pallet-counter' },
  { name: 'Notes', path: '/notes' },
  { name: 'Settings', path: '/settings' },
];

const TopNav = () => {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <nav className="bg-wal-blue-500 p-2 mb-4 shadow-md">
      <div className="container mx-auto flex justify-center space-x-2">
        {modules.map((module) => {
          const isActive = activePath === module.path;
          return (
            <Button
              key={module.name}
              variant={isActive ? 'secondary' : 'ghost'}
              className={cn(
                'text-white hover:bg-wal-blue-400',
                isActive && 'bg-wal-blue-600 font-semibold'
              )}
              asChild // Important: Allows Button to wrap Link
            >
              <Link to={module.path}>{module.name}</Link>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default TopNav;