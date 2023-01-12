import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setlike] = useState(0);
  return (
    <div>
      <IconButton className='bt-sz-lg'
      color='primary'
      onClick={() => {
        setlike(like + 1);
      }}
      aria-label="like-btn" >
      <Badge badgeContent={like} color="primary">
      👍
      </Badge>
      </IconButton>
    </div>
  );
}
