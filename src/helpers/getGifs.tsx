import { IGif } from "../interfaces/IGif";

export const getGif = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=PGZo6UEbxHOkOBpMl0wgTwUdg5m8irFN`;

  const res: Response = await fetch(url);
  const { data } = await res.json();

  const gifs: IGif[] = data.map((item: any) => {
    return {
      id: item.id,
      title: item.title,
      url: item.images?.downsized.url,
    };
  });
  return gifs;
};
