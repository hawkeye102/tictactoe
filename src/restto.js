const createresttohomepage = () => {
    const content = document.querySelector('#content');
    const pagecontent = document.createElement('div');
    pagecontent.classList.add('page-content');

    // Create and append image
    const image = document.createElement('img');
    image.src = "https://images.unsplash.com/photo-1528712306091-ed0763094c98";
    image.height = '300';
    pagecontent.appendChild(image);

    // Create and append headline
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant';
    pagecontent.appendChild(headline);

    // Create and append copy elements
    const copy = document.createElement('p');
    copy.textContent = 'We serve the best food in town';
    pagecontent.appendChild(copy);

    content.appendChild(pagecontent);
}

export default createresttohomepage;
