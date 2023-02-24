// There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms.However, you cannot enter a locked room without having its key.
// When you visit a room, you may find a set of distinct keys in it.Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.
// Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

var canVisitAllRooms = function (rooms) {
    const visited = new Set(); // we create a set to hold the visited rooms
    const stack = [0]; // we create a stack to hold the rooms to visit
    while (stack.length) { // while the stack is not empty
        const room = stack.pop(); // we pop the room off the stack
        if (!visited.has(room)) { // if the room has not been visited
            visited.add(room); // we add the room to the set of visited rooms
            stack.push(...rooms[room]); // we push the rooms that can be unlocked by the keys in the current room to the stack
        }
    }
    return visited.size === rooms.length; // we return true if the number of visited rooms is equal to the number of rooms

};
