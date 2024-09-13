import createcontactpage from "./contact";
import createmenu from "./menu";
import createresttohomepage from "./restto";

const createtabs = () => {
   
    document.addEventListener('DOMContentLoaded', () => {
        const nav = document.querySelector('nav'); // Ensure you're selecting the correct element

        if (!nav) {
            console.error('Nav element not found');
            return;
    }
    if (nav.querySelectorAll('.tab').length > 0) {
        return; // Exit if tabs already exist
    }

   
    const content = document.querySelector('#content');

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    div1.addEventListener('click', () => {
        clearContent();
        createresttohomepage();
    });

    div2.addEventListener('click', () => {
        clearContent();
        createmenu();
    });

    div3.addEventListener('click', () => {
        clearContent();
        createcontactpage();
    });

    nav.appendChild(div1);
    nav.appendChild(div2);
    nav.appendChild(div3);
});
};

function clearContent() {
    const content = document.querySelector("#content");
    if (!content) {
        console.error('#content not found');
        return;
    }

    // Use querySelectorAll to select all elements with the class 'page-content'
    const pageContents = document.querySelectorAll(".page-content");
    pageContents.forEach(pageContent => {
        console.log('Removing:', pageContent);
        content.removeChild(pageContent);
    });
}

export default createtabs;
