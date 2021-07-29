function choice(items) {
    const ind = Math.floor(Math.random() * items.length);
    console.log(items[ind]);
    return items[ind];
}

function remove(items, item) {
    const ind = items.indexOf(item);
    if (ind === -1) return undefined;
    return items.splice(ind, 1);

}

export { choice, remove }