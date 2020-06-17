function addBorder(array) {
    const result = [];
    array.forEach(element => result.push(`*${element}*`));
    
    const starsLength = result[0].length;
    result.unshift('*'.repeat(starsLength));
    result.push('*'.repeat(starsLength));

    return result;
}
