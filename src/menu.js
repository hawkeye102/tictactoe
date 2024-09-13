// create the  menu 

  const createmenu=()=>{
    const content=document.querySelector('#content');
    const pagecontent=document.createElement('div');
    pagecontent.classList.add('page-content');

    const heading =document.createElement('h1');
    heading.textContent='Our Menu';

    const Menulist =document.createElement('ul');
    const menuitem= document.createElement('li');
    menuitem.textContent='pomodoro';
    const menuitem2= document.createElement('li');
    menuitem2.textContent='bolognesa';
    const menuitem3= document.createElement('li');
    menuitem3.textContent='alfredo';

    Menulist.appendChild(menuitem);
    Menulist.appendChild(menuitem2);
    Menulist.appendChild(menuitem3);

    pagecontent.appendChild(heading);
    pagecontent.appendChild(Menulist);
    content.appendChild(pagecontent);
};
export default createmenu;

