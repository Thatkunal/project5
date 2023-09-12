var cardcontainer = document.getElementById("cardcontainer")
var cardname = document.getElementById("cardname")
var addtaskpop = document.getElementById("addtaskpop")
var parent = document.getElementById("parent")
var additempopup = document.getElementById("additempopup")
var notask = document.getElementById("notask")
var singlecard = document.getElementById("singlecard")
var mainheading = document.getElementById("mainheading")
var navbar = document.getElementById("navbar")

var issinglecard = false
//add task button
function showaddtask() {
    addtaskpop.classList.remove('hide')
    parent.classList.add('blur')
}

function hideaddtask() {
    addtaskpop.classList.add('hide')
    parent.classList.remove('blur')

}

function addcard() {
    if (issinglecard) {
        back()
        issinglecard = false
    }
    if (issinglecard) {
        back2()
        issinglecard = false
    }
    notask.classList.add('hide')
    hideaddtask()
    // create card Element
    let card = document.createElement("div")
    let cardheading = document.createElement("h3")
    let line = document.createElement("hr")
    let itemlist = document.createElement("div")
    let additem = document.createElement("button")
    let deletebutton = document.createElement("button")

    //append item 
    cardcontainer.appendChild(card)
    card.appendChild(cardheading)
    card.appendChild(line)
    card.appendChild(itemlist)
    card.appendChild(additem)
    card.appendChild(deletebutton)

    //give value to element
    cardheading.innerText = cardname.value
    cardname.value = ""
    card.classList.add('card')
    additem.innerText = "+"
    deletebutton.innerText = "x"


    // craete the class 
    cardheading.classList.add('cardheading')
    line.classList.add('line')
    itemlist.classList.add('itemlist')
    additem.classList.add('additem')
    deletebutton.classList.add('deletebutton')


    //delete button
    deletebutton.addEventListener('click', () => {
        card.remove()
        if (cardcontainer.innerText == "")
            notask.classList.remove('hide')
    })

    //add item

    additem.addEventListener('click', () => {
        additempopup.classList.remove('hide')
        parent.classList.add('blur')
        //create item
        let itempopheading = document.createElement("h3")
        let itemname = document.createElement("input")
        let addbutton = document.createElement("button")
        let closebutton = document.createElement("button")

        //append element
        additempopup.appendChild(itempopheading)
        additempopup.appendChild(itemname)
        additempopup.appendChild(addbutton)
        additempopup.appendChild(closebutton)

        //give the value 
        itempopheading.innerText = "Add task"
        addbutton.innerText = "Add"
        closebutton.innerText = "close"

        // create a item class 
        itempopheading.classList.add('itempopheading')
        itemname.classList.add('itemname')
        addbutton.classList.add('addbutton')
        closebutton.classList.add('closebutton')



        addbutton.addEventListener('click', () => {
            parent.classList.remove('blur')
            additempopup.classList.add('hide')
            let item = document.createElement('div')
            let itemtext = document.createElement('span')
            let markdone = document.createElement('button')


            // appened child 
            item.appendChild(itemtext)
            item.appendChild(markdone)

            //value
            itemtext.innerText = itemname.value
            markdone.innerText = "Mark Done"

            //  appened  to item to item text
            itemlist.appendChild(item)

            additempopup.innerText = ""
            // given the cklass
            itemtext.classList.add('itemtext')
            markdone.classList.add('markdone')
            //  markdone button
            markdone.addEventListener('click', () => {
                itemtext.classList.add('itemtextline')
                markdone.classList.add('hide')
                //itemtext button
                itemtext.addEventListener('click', () => {
                    itemtext.classList.remove('itemtextline')
                    markdone.classList.remove('hide')
                })
            })
        })

        closebutton.addEventListener('click', () => {
            parent.classList.remove('blur')
            additempopup.classList.add('hide')
            addbutton.remove()
        })

    })


    cardheading.addEventListener('click', () => {
        issinglecard = true
        navbar.classList.add('hide')
        mainheading.classList.add('hide')
        singlecard.classList.remove('hide')
        cardcontainer.classList.add('hide')
        let copycardheading = cardheading.cloneNode(true)
        singlecard.appendChild(copycardheading)
        copycardheading.classList.add('copycardheading')
        let copycard = card.cloneNode(true)
        singlecard.appendChild(copycard)
        copycard.classList.add('copycard')
        copycard.lastElementChild.addEventListener('click', () => {
            card.remove()
            copycard.remove()
            back().remove
            copycardheading.remove()
            if (cardcontainer.innerText == "")
                notask.classList.remove('hide')

        })
        copycard.lastElementChild.previousElementSibling.addEventListener('click', () => {

            additempopup.classList.remove('hide')
            parent.classList.add('blur')
            //create item
            let itempopheading = document.createElement("h3")
            let itemname = document.createElement("input")
            let addbutton = document.createElement("button")
            let closebutton = document.createElement("button")

            //append element
            additempopup.appendChild(itempopheading)
            additempopup.appendChild(itemname)
            additempopup.appendChild(addbutton)
            additempopup.appendChild(closebutton)

            //give the value 
            itempopheading.innerText = "Add task"
            addbutton.innerText = "Add"
            closebutton.innerText = "close"

            // create a item class 
            itempopheading.classList.add('itempopheading')
            itemname.classList.add('itemname')
            addbutton.classList.add('addbutton')
            closebutton.classList.add('closebutton')



            addbutton.addEventListener('click', () => {
                parent.classList.remove('blur')
                additempopup.classList.add('hide')
                let item = document.createElement('div')
                let itemtext = document.createElement('span')
                let markdone = document.createElement('button')


                // appened child 
                item.appendChild(itemtext)
                item.appendChild(markdone)

                //value
                itemtext.innerText = itemname.value
                markdone.innerText = "Mark Done"

                //  appened  to item to item text
                itemlist.appendChild(item)

                additempopup.innerText = ""

                // given the cklass
                itemtext.classList.add('itemtext')
                markdone.classList.add('markdone')
                //  markdone button
                markdone.addEventListener('click', () => {
                    itemtext.classList.add('itemtextline')
                    markdone.classList.add('hide')
                    //itemtext button
                    itemtext.addEventListener('click', () => {
                        itemtext.classList.remove('itemtextline')
                        markdone.classList.remove('hide')
                    })
                })

                if (issinglecard) {
                    let copyitem = itemlist.cloneNode(true);
                    copycard.appendChild(copyitem);

                    let copyitemtext = copyitem.querySelector('.itemtext');
                    let copymarkdone = copyitem.querySelector('.markdone');


                    copymarkdone.addEventListener('click', () => {
                        copyitemtext.classList.add('itemtextline');
                        copymarkdone.classList.add('hide');
                        copyitemtext.addEventListener('click', () => {
                            copyitemtext.classList.remove('itemtextline');
                            copymarkdone.classList.remove('hide');
                        });
                    });

                }
            })

            closebutton.addEventListener('click', () => {
                parent.classList.remove('blur')
                additempopup.classList.add('hide')
                addbutton.remove()
                copycardheading.classList.remove('copycardheading')
            })
        })

        parent.firstElementChild.classList.remove('hide')

    })
}

function back() {
    parent.firstElementChild.classList.add('hide')
    singlecard.classList.add('hide')
    mainheading.classList.remove('hide')
    navbar.classList.remove('hide')
    cardcontainer.classList.remove('hide')
    singlecard.innerText = ""
}
function back2() {
    parent.firstElementChild.classList.add('hide')
    singlecard.classList.add('hide')
    mainheading.classList.remove('hide')
    navbar.classList.remove('hide')
    cardcontainer.classList.remove('hide')
    singlecard.innerText = ""
}
