// import "../../../CssFile/Admin.css"
// export default function AdminCards() {
//     return (
//         <div>
//             <div class="container vh-100 justify-content-center d-flex flex-column">
                
//                 <div class="row justify-content-around">
//                     <div class="col-3 block border-left-danger shadow d-flex align-items-center">
//                         <i class="text-gray-300 fas fa-shopping-cart icon text-center"></i>
//                         <div class="h-100 w-100 p-3">
//                             <div class="block-title lg-text text-danger mb-2">ORDER</div>
//                             <div class="d-flex align-items-baseline justify-content-around w-100">
//                                 <div class="xxl-text text-gray-800">18</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="signature w-100 text-center text-dark">@NK-TW</div>
//         </div>
//     )
// }

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function AdminCards() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}