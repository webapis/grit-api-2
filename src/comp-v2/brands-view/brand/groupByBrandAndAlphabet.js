export default function groupByBrandAndAlphabet(array) {
    // Sort the array alphabetically by the "brand" field
    array.sort((a, b) => a.brand.localeCompare(b.brand));
    
    // Create an object to store the grouped data
    const groupedData = {};

    // Iterate through the sorted array and group by brand
    for (const item of array) {
        const brand = item.brand.charAt(0).toUpperCase(); // Get the first character as the alphabet
        if (!groupedData[brand]) {
            groupedData[brand] = [];
        }
        groupedData[brand].push(item);
    }

    return groupedData;
}