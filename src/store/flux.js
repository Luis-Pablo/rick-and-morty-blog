const getState = ({ setStore, getStore }) => {
    return {
        store: {
            favorites: [],
        },
        actions: {
            addFavorites: (favorite) => {
                console.log(favorite)
                const { favorites } = getStore();
                if (!favorites.includes(favorite)) {
                    const addFavorite = [...favorites, favorite]
                    setStore({ favorites: addFavorite })
                    console.log(addFavorite)
                }
            },
            rFavorite: (favorite) => {
                const { favorites } = getStore();
                const addFavorite = favorites.filter(del => del !== favorite)
                setStore({ favorites: addFavorite })
            },
                        
        }
    }
}

export default getState;