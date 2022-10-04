const bodyContainer = document.getElementById('bodyContainer')

const dataCardObjs = [];

class DataCard {
    constructor(name, example, linkTitles, linkURLs, syntaxTitles, syntaxDescriptions) {
        this.name = name;
        this.example = example;

        const linksArray = [];
        const syntaxIndexArray = [];   
    
        linkTitles.forEach((title, index) => {
            linksArray.push([title, linkURLs[index]]);
        });
        this.linksArray = linksArray
    
        syntaxTitles.forEach((title, index) => {
            syntaxIndexArray.push([title, syntaxDescriptions[index]]);
        });  
        this.syntaxIndexArray = syntaxIndexArray
    }
}

function propogateDataArray() {
    const dataArray = [];

    //Template
    // dataArray.push({
    //     name: 'Name',
    //     example: `Example`,
    //     linkTitles: [
    //         'Title',
    //     ],
    //     linkURLs: [
    //         'URL',
    //     ],
    //     syntaxTitles: [
    //         'Title',
    //     ],
    //     syntaxDescriptions: [
    //         `Description`,
    //     ],
    // });


    //Box Shadow
    dataArray.push({
        name: 'Box Shadow',
        example: `box-shadow: 0 0 5px 5px rgb(0, 0, 0, 0.3)`,
    
        linkTitles: [
            'CSS Tricks',
        ],
        
        linkURLs: [
            'https://css-tricks.com/almanac/properties/b/box-shadow/',
        ],
        
        syntaxTitles: [
            'Horizontal Offset',
            'Vertical Offset',
            'Blur Radius',
            'Spread Radius',
            'Color',
        ],

        syntaxDescriptions: [
            `Negative value means left of the box; positive value means right of the box; 0 is both directions`,
            `Negative value means above the box; positive value means below the box; 0 is both diretions`,
            `Higher the number, the more blurred it will be and the further out the shadow will extend. A shadow with 5px offset that also has a 5px blur radius will be 10px of total shadow.`,
            `(optional) Positive values increase the size of the shadow, negative values decrease the size. Default is 0 (the shadow is same size as blur).`,
            `Any color. If the color value is omitted, box shadows are drawn in the foreground color (text color)`,
        ],
    });


    //Border
    dataArray.push({
        name: 'Border',
        example: `border: 3px solid red`,
        linkTitles: [
            'CSS Tricks',
            'MDN',
        ],
        linkURLs: [
            'https://css-tricks.com/almanac/properties/b/border/',
            'https://developer.mozilla.org/en-US/docs/Web/CSS/border#syntax',
        ],
        syntaxTitles: [
            'Width',
            'Style',
            'Color',
        ],
        syntaxDescriptions: [
            `Thickness of border`,
            'Solid, dashed, dotted, groove, etc.',
            'Color of the border',
        ],
    });

    dataArray.forEach(obj => {
        let newCard = new DataCard(obj.name, obj.example, obj.linkTitles, obj.linkURLs, obj.syntaxTitles, obj.syntaxDescriptions);
        dataCardObjs.push(newCard);
    })
    

};

propogateDataArray();
console.log(dataCardObjs)

dataCardObjs.forEach(cardObj => {

    let htmlTxt = '';
    
    htmlTxt = `<div class="${cardObj.name}">` + `<div class="cardHeader">` + `<div class="cardTitle"><h2 class="cardTitle">${cardObj.name}</h2></div>`;

    //Add links
    htmlTxt += `<div class="links">`
    cardObj.linksArray.forEach(linkArray => {
        htmlTxt += `<div class="referenceLink"><a href="${linkArray[1]}" class="cardLink">${linkArray[0]}</a></div>`;
    });
    htmlTxt += `</div>`

    //End header
    htmlTxt += `</div>`


    //Add syntax table
    htmlTxt += `<table class="syntaxTable">`;
    htmlTxt += `<tr><td>Example</td><td>${cardObj.example}</td></tr>`;

    //Add each description row in syntax table
    cardObj.syntaxIndexArray.forEach(syntaxArray => {
        htmlTxt += `<tr><td class="syntaxTitle">${syntaxArray[0]}</td><td class="syntaxDescription">${syntaxArray[1]}</td></tr>`;
    });

    htmlTxt += `</table></div>`;

    //Create new card div and append to bodyContainer
    let newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerHTML = htmlTxt;
    bodyContainer.appendChild(newCard);
});