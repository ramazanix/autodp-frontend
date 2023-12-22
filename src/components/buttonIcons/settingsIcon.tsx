import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { IconButton } from './iconButton'

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const SettingsIcon: React.FC<Props> = ({ onClick }) => {
  return (
    <IconButton className="absolute right-1 top-1" onClick={onClick}>
      <Cog6ToothIcon
        width={25}
        height={25}
        title="Settings"
        className="transition-transform duration-700 hover:rotate-90"
      />
    </IconButton>
  )
}
