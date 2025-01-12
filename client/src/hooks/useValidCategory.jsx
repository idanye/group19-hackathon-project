

const useValidCategory = (category) => {

    const validCategories = ["Sexual-Harassment", "Eating-Disorders", "Cyber-Bullying"];
    return validCategories.includes(category);
};

export default useValidCategory;