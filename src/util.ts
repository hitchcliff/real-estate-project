export const getAccordionActiveItem = (items: NodeListOf<Element>) => {
    let result = [];
    let activeItem: number = 0;
    for(let i=0; i<items.length; i++) {
       result[i] = items[i].getAttribute('aria-expanded') === "true" // get attributes
       items[i].classList.remove('active') // remove active 
    }

    for(let i=0; i<result.length; i++) {
        if(result[i] === true) {
            activeItem = i // set current index of the active item
        }
    }

    return activeItem; // return the index
}

export const setClassActive = (index: number, item: NodeListOf<Element>) => {
    if(!item.length) return; // if its undefined, simply return
    item[index].classList.add('active') // add class to the button

}