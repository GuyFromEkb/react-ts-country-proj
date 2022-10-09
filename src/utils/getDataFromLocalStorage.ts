/**
 * Возвращает объект, если данные по ключу были в локал сторедж? то объект с данными.
 *
 * @param {string} LSKey нужный Ключ в локал сторедж
 * @return {any} , либо пустой обект, если такого ключа не существует, либо сущьность, которыая находилась по данном ключу
 */
const getDataFromLocalStorage = (LSKey: string): any => {
  const objFromLS = localStorage.getItem(LSKey);
  try {
    return JSON.parse(objFromLS ?? "{}");
  } catch (e) {
    return {};
  }
};

export default getDataFromLocalStorage;
