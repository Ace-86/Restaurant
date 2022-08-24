// import "./style.css";

// import pic1 from './shaggy.png';

const tabs = (() => {    

    const $home = document.querySelector('.home');
    const $menu = document.querySelector('.menu');
    const $contact = document.querySelector('.contact');
    const $info = document.querySelector('#information');
    
    const homeTab = $home.addEventListener('click', () => {
        $info.removeChild($info.firstChild);
        const homeinfo = `<div id="title" class="border2"> 
        <h1> Sushi Bar Deluxe </h1>
        </div>
        
        <div id="section1" class="border3"> Sushi Bar Deluxe has the best sushi in town. 
        From the best chefs, to the freshest ingredeants. 
        No one has better service! We hope to see you th11am-9pmere 
        <h1> The Chef </h1>
        </div>
        
        <div id="section2" class="border3"> 
        <h1>Hours</h1>
        <p>Monday: Closed </p>
        <p>Tuesday: 11am-9pm </p>
        <p>Wednesday: 11am-9pm </p>
        <p>Thursday: 11am-9pm </p>
        <p>Friday:11am-9pm </p>
        <p>Saturday: 11am-9pm </p>
        <p>Sunday: 11am-7pm </p>
        </div>
        
        <div id="section3" class="border3"> 
        <h1> Location </h1>
        <p> 45613 S. Wabash</p>
        <p> Chicago, IL </p>
        </div>`
        
        const elementdiv = document.createElement('div');
        elementdiv.setAttribute('class', 'active');
        elementdiv.innerHTML= homeinfo;
        $info.appendChild(elementdiv);

    });
    
    const menuTab = $menu.addEventListener('click', () => {
        $info.removeChild($info.firstChild);
        const menuInfo = `<div id="title" class="border2">
        <h1> MENU </h1>
        </div>

        <div id="section1" class="border3"> 
        <h1>California Roll</h1>
        <img src="../assets/images/caliroll.jpg">
        </div>

        <div id="section2" class="border3"> 
                <h1>Crunchy 2-1</h1>
                <img src="../assets/images/shaggyroll.jpg" alt="shaggy">
        </div>

        <div id="section3" class="border3"> 
            <h1>Spicy Tuna Roll</h1>
            <img src="../assets/images/spicycrabroll.jpg" alt="Spicy">
        </div>`

        const elementdiv = document.createElement('div');
        elementdiv.setAttribute('class', 'active');
        elementdiv.innerHTML= menuInfo;
        $info.appendChild(elementdiv);

    });

    const contactTab = $contact.addEventListener('click', () => {
        $info.removeChild($info.firstChild);
        const contactInfo = `<div id="title" class="border2">
        <h1> Sushi Bar </h1>
        </div>

        <div id="section1" class="border3"> 
        <h1> CONTACT</h1>
        <p> Phone: (773) 674-2976</p>
        <p> Address: 4567 S Wabash</p>
        <p> Chicago, Il </p>

        </div> `

        const elementdiv = document.createElement('div');
        elementdiv.setAttribute('class', 'active');
        elementdiv.innerHTML= contactInfo;
        $info.appendChild(elementdiv);

    });

        const removeNode = () => {
            $info.removeChild(firstChild);
        }

    return {homeTab, menuTab, contactTab, removeNode};
    })
();
