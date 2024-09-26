const Helper = () => {
  const LoadingData = async (url, obtions) => {
    obtions.method = obtions.method || "GET";

    const defauldHelper = {
      accept: "application/json",
    };

    obtions.Helper = obtions.Helper
      ? { ...defauldHelper, ...obtions.Helper }
      : defauldHelper;

    const controller = new AbortController();
    obtions.signal = controller.signal;
    setTimeout(() => {
      controller.abort;
    }, 5000);

    obtions.body = JSON.stringify(obtions.body) || false;
    if (!obtions.body) delete obtions.body;

    try {
      const data = await fetch(url, obtions);
      if (!data.ok)
        throw {
          err: true,
          status: data.status,
          stattusText: data.statusText
            ? data.statusText
            : "Ocurrio un error al cargar los datos",
        };
      const json = await data.json();

      return json;
    } catch (error) {
      return error;
    }
  };

  const get = (url, obtions = {}) => LoadingData(url, obtions);
  const pos = (url, obtions = {}) => {
    obtions.method = "POST";
    LoadingData(url, obtions);
  };
  const put = (url, obtions = {}) => {
    obtions.method = "PUT";
    LoadingData(url, obtions);
  };
  const del = (url, obtions = {}) => {
    obtions.method = "DELETE";
    LoadingData(url, obtions);
  };

  return { get, pos, put, del };
};
export default Helper;
