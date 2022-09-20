/**
 * Возвращает объект, если данные по ключу были в локал сторедж.
 *
 * @param {string} LSKey нужный Ключ в локал сторедж
 * @return {any | undefined} , либо undefined, если такого ключа не существует, либо обект, который находился по данном ключу
 */
const getDataFromLocalStorage = (LSKey: string): any | undefined => {
	try {
		const objFromLS = localStorage.getItem(LSKey);

		return objFromLS ? JSON.parse(objFromLS) : undefined;
	} catch (error) {
		return undefined;
	}
};

export default getDataFromLocalStorage;
