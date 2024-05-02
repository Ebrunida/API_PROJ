function calculateAverage(grades) {
    const sum = grades.reduce((acc, grade) => acc + grade.value, 0);
    return sum / grades.length;
}

module.exports = calculateAverage;

