// page for creating for contact

const createcontactpage=()=>{
    const content=document.querySelector('#content');
    const pagecontent=document.createElement('div');
    pagecontent.classList.add('page-content');

    const form=document.createElement('form');
    form.classList.add('contact-form');

    const headinginput=document.createElement('input');
    headinginput.type='text';
    headinginput.placeholder="entry heading";
    form.appendChild(headinginput);

    const addressinput=document.createElement('input');
    addressinput.type='text';
    addressinput.placeholder='enter address';
    form.appendChild(addressinput);

    const phoneinput=document.createElement('input');
    phoneinput.type='number';
    phoneinput.placeholder='enter your number';
    form.appendChild(phoneinput);

    const submitbutton=document.createElement('button');
    submitbutton.type='submit';
    submitbutton.value='Submit';
    form.appendChild(submitbutton);

    pagecontent.appendChild(form);
    content.appendChild(pagecontent);

};

export default  createcontactpage;