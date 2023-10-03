import {
  Stack,
  ImageList,
  ImageListItem,
  Box,
  ImageListItemBar,
} from "@mui/material";

export const MuiImagelist = () => {
  return (
    <Stack spacing={2}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>

      <ImageList
        variant="woven"
        sx={{ width: 500, height: 450 }}
        cols={3}
        rowHeight={164}
        gap={8}
      >
        {itemData2.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData3.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

const itemData = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661320832191-8e9866f34bc9",
    title: "code 1",
  },
  {
    img: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71",
    title: "code 2",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "code 3",
  },
  {
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "code 4",
  },
  {
    img: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a",
    title: "code 5",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed",
    title: "code 6",
  },
  {
    img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
    title: "code 7",
  },
  {
    img: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9",
    title: "code 8",
  },
  {
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    title: "code 9",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661320832191-8e9866f34bc9",
    title: "code 1",
  },
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "code 2",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "code 3",
  },
  {
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "code 4",
  },
  {
    img: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a",
    title: "code 5",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed",
    title: "code 6",
  },
  {
    img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
    title: "code 7",
  },
  {
    img: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9",
    title: "code 8",
  },
  {
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    title: "code 9",
  },
];
const itemData2 = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661320832191-8e9866f34bc9",
    title: "code 1",
  },
  {
    img: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71",
    title: "code 2",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "code 3",
  },
  {
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "code 4",
  },
  {
    img: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a",
    title: "code 5",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed",
    title: "code 6",
  },
  {
    img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
    title: "code 7",
  },
  {
    img: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9",
    title: "code 8",
  },
  {
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    title: "code 9",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661320832191-8e9866f34bc9",
    title: "code 1",
  },
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "code 2",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "code 3",
  },
  {
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "code 4",
  },
  {
    img: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a",
    title: "code 5",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed",
    title: "code 6",
  },
  {
    img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
    title: "code 7",
  },
  {
    img: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9",
    title: "code 8",
  },
  {
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    title: "code 9",
  },
];
const itemData3 = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661320832191-8e9866f34bc9",
    title: "code 1",
  },
  {
    img: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71",
    title: "code 2",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "code 3",
  },
  {
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "code 4",
  },
  {
    img: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a",
    title: "code 5",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed",
    title: "code 6",
  },
  {
    img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
    title: "code 7",
  },
  {
    img: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9",
    title: "code 8",
  },
  {
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    title: "code 9",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661320832191-8e9866f34bc9",
    title: "code 1",
  },
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "code 2",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "code 3",
  },
  {
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "code 4",
  },
  {
    img: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a",
    title: "code 5",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed",
    title: "code 6",
  },
  {
    img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
    title: "code 7",
  },
  {
    img: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9",
    title: "code 8",
  },
  {
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    title: "code 9",
  },
];
