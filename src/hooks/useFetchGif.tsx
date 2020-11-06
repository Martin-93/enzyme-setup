import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";
import { IGif } from "../interfaces/IGif";

interface IState {
  data: IGif[];
  loanding: boolean;
}

export const useFetchGif = (category: string) => {
  const [state, setState] = useState<IState>({
    data: [],
    loanding: true,
  });

  useEffect(() => {
    getGif(category).then((img: any) =>
      setState({
        data: img,
        loanding: false,
      })
    );
  }, [category]);

  return state;
};
