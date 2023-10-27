import ""

function Average(avg) {
    let mean = 0;
    for (let i = 0; i < avg.length; i++) {
        mean += avg[i];
    };

    return (mean / avg.length);
};

const avg = [1, 3, 5, 6, 7, 8, 9, 10];

console.log(Average(avg));

gangilgenap(5, 10)