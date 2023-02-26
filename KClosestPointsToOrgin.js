function kClosest(points, k) {

    //sorts the array in place
    points.sort((point1, point2) => {
        const distanceFromOrigin1 = getDistanceFromOrigin(point1);
        const distanceFromOrigin2 = getDistanceFromOrigin(point2);

        //sort by distance from origin, lowest first
        return distanceFromOrigin1 - distanceFromOrigin2;
    });

    //returns first k elements
    return points.slice(0, k);
}

function getDistanceFromOrigin(point) {
    const [x, y] = point; //array destructuring
    return (x * x) + (y * y);
}