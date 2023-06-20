export const range = (end) => {
    
    const results = Array.from({length: end}, (_, i) => i + 1)
    

    console.log(end);
    console.log(results.length)
    return results;
}