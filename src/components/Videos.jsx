import React from 'react';
import { Stack, Box } from '@mui/material';
import {VideoCard, ChannelCard} from './index';

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return 'Loading...';

  if(videos){
  return (
    // <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2} >
    //     {videos.map((item, idx) => (
    //         <Box key={idx}>
    //             {item.id.videoId && <VideoCard video={ item } /> }
    //             {item.id.channelId && <ChannelCard ChannelDetail={ item } /> }
    //         </Box>
    //     ))}
    // </Stack>
    // <div>
    //   videos
    // </div>

      // <Stack  flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
    
      // {videos & videos.map(({item, idx}) => (
      //   <Box key={idx}>
      //     {item.id.videoId && <VideoCard video={item} /> }
      //     {item.id.channelId && <ChannelCard channelDetail={item} />}
      //   </Box>
      // ))}
    
      // </Stack>

      <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>

  )
      }
      }

export default Videos;
