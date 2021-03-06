// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headerDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    headerDiv.append(dateSpan);
    headerDiv.append(title);
    headerDiv.append(temp);

    headerDiv.classList.add('header');
    dateSpan.classList.add('date');
    temp.classList.add('temp');

    dateSpan.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';

    return headerDiv;
}

const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())
