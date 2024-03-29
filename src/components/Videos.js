import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={2}
      justifyContent="start"
      alignItems="start"
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
