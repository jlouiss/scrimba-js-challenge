function firstDuplicate(numbers) {
    const buffer = [];

    for (number of numbers) {
        if (buffer.indexOf(number) > -1) {
            return number;
        }

        buffer.push(number);
    }

    return -1;
}
