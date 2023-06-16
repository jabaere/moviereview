export const getData = async (api) => {
  const data = await fetch(api);
  const response = await data.json();
  console.log(response);
  return response;
};
