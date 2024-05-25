import { Input } from '@material-tailwind/react';
import { Search02Icon } from 'hugeicons-react';

export default function SearchBox() {
  return (
    <div className="flex flex-row w-full">
      <Input
        crossOrigin=""
        className="bg-white text-sm p-1"
        label="Search"
        icon={<Search02Icon size="18" />}
      />
    </div>
  );
}
