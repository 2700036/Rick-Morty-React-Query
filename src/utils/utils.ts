export const getPartsFromUrl: GetPartsFromUrl = (url) => {
  const splittedUrl = url.split('/');
  return {
    item: splittedUrl[splittedUrl.length - 2],
    id: splittedUrl[splittedUrl.length - 1],
  };
};

type GetPartsFromUrl = (url: string) => { item: string; id: string };
