// Adding 100 paragraphs to UI

// CODE 1 - Appending each <p> directly to <body>

const t1 = performance.now(); // timestamp - t1

for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = 'Code 1: This is paragraph ' + i;
    document.body.appendChild(para);
    // Each append triggers REFLOW + REPAINT
}

const t2 = performance.now(); // timestamp - t2

console.log("Total time by code 1 : " + (t2 -t1));  // 0.7 sec
// 100 REFLOWS and 100 REPAINTS



// CODE 2 - Build inside a <div>, then append once

const t3 = performance.now();

let myDiv = document.createElement('div');

for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = 'Code 2: This is paragraph: ' + i;
    myDiv.appendChild(para)
    // No REFLOW and REPAINT triggered yet
} 

document.body.appendChild(myDiv);


const t4 = performance.now();

console.log("Total time by code 2 : " + (t4-t3)); // 0.09 sec
// 1 REFLOW and 1 REPAINT


// CODE 3 - Using DocumentFragement (no extra <div>)

const t5 = performance.now();

let frag = document.createDocumentFragment();

for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = 'Code 3: This is paragraph: ' + i;
    frag.appendChild(para);
    // No REFLOW and REPAINT triggered yet
}

document.body.appendChild(frag); 
// 1 REFLOW and 1 REPAINT with no extra <div>

const t6 = performance.now();

console.log("Total time with DocumentFragment: " + (t6-t5));    // 0.09 sec