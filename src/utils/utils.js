const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    "X-RapidAPI-Key": "fade3d5bcdmshfa49f194275932cp19bcdbjsnd0bad74a7e48",
  },
};

export const fetchApi = async () => {
  await fetch(
    "https://asos2.p.rapidapi.com/v2/auto-complete?q=bikini%20top&store=US&country=US&currency=USD&sizeSchema=US&lang=en-US",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
