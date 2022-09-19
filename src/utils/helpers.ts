const calcClientSliderItemsCount = (width) => {
    if (width < 768) {
        return 1;
    }

    if (width >= 768 && width < 1230) {
        return 2;
    }

    return 4;
};

export { calcClientSliderItemsCount };
