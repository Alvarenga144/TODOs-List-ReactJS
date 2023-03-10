import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);


    // Interpretación de estado de carga
    const [loading, setLoading] = React.useState(true);

    // Estado inicial de TODOS
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                // Inicio con LocalStorage
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                // Verificar si existe, o crear otro nuevo vacio
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = [];
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                }

                setItem(parsedItem);
                setLoading(false);

            } catch (error) {
                setError(error);
            }
        }, 2000);
    });

    // Save Tods
    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    }

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage }