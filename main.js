class Company{
    constructor(name, link, joiner = "by" ){
        this.name = name;
        this.link = link;
        this.joiner = joiner;
    }
    toString()
    {
        if (this.name == undefined || this.link == '')
        {
            return '';
        }
        else
        {
            return `<a href="${this.link}" target="_blank" rel="noopener noreferrer">${this.name}</a>`
        }
    }
}

class Project{

    constructor( name, link, timespan, desc, company ){
        this.name = name;
        this.link = link;
        this.timespan = timespan;
        this.desc = desc;
        this.company = company;
    }


    companyHtml(){
        if(this.company == undefined)
            return ``;

        let c0 = Array.isArray(this.company) ? this.company[0] : this.company;

        let s = `<div class="company">${c0.joiner} `;
        s += c0;
        if( Array.isArray(this.company) ){
            s += ` in cooperation with `;
            s += this.company[1];
        }
        s += `</div>`;
        return s;
    }

    descHtml(){
        if( this.desc == `` || this.desc == undefined )
            return ``;

        let str = `<div class="proj-desc">${this.desc}</div>`;
        if(this.company != undefined)
            return `${str}`;
        return str;
    }

    hasImageCard(){
        return this.card != undefined;
    }


    descTimespan(){
        if( this.hasImageCard() )
            return ``; // no timestamp for image cards
        return `<div class="timespan">${this.timespan == undefined ? `` : this.timespan}</div>`;
    }
    imgCardHtml(){
        if(this.card == undefined)
            return ``;

        if (this.card.endsWith(".mp4"))
        {
            return `<div class="proj-card"><a href="${this.link}" target="_blank" rel="noopener noreferrer"><video autoplay playsinline loop><source src="./images/projectcards/${this.card}"></video></a></div>`;
        }
        else
        {
            return `<div class="proj-card"><a href="${this.link}" target="_blank" rel="noopener noreferrer"><img src="./images/projectcards/${this.card}"></a></div>`;
        }

    }
    containerClass(){
        if(this.card == undefined)
            return `proj-container`;
        return `proj-container-vertical`;
    }

    containerTitleClass(){
        if(this.card == undefined)
            return `proj-title"`;
        return `proj-title-centered`;
    }

    nameAndLinkHtml()
    {
        if (this.link == undefined || this.link == '')
        {
            return `${this.name}</div>`
        }
        else
        {
            return `<a href="${this.link}" target="_blank" rel="noopener noreferrer">${this.name}</a></div>`;
        }
    }

    toString(){

        return `<div class="${this.containerClass()}">
                    ${this.imgCardHtml()}
                    ${this.descTimespan()}
                    <div class="proj-right">
                        <div class="${this.containerTitleClass()}">${this.nameAndLinkHtml()}
                        ${this.companyHtml()}
                        ${this.descHtml()}
                    </div>
                </div>`;
            }
}

window.onload = function(){

    let container = document.getElementById(`container`);

    function socialIcon( site, url, hover = `` ){
        return `<div class="tooltip">
                    <a href="${url}" target="_blank" rel="noopener noreferrer">
                        <img class="social_icon" src="images/logo_${site.toLowerCase()}.png" alt="${site}">
                        <div class="tooltiptext">${hover}</div>
                    </a>
                </div>`;
    }
    
    document.getElementById("social_icons").innerHTML =
    socialIcon( 'GitHub', 'https://github.com/Lucius47', 'my coding') + 
    socialIcon( 'Twitter', 'https://twitter.com/MuneebShaw', `easiest way to follow what I do`) +
    socialIcon( 'LinkedIn', 'https://www.linkedin.com/in/MuneebShaw', `for conformity`) + 
    socialIcon( 'Instagram', 'https://www.instagram.com/Muneeb.Shaw/', `food and travel pics`) +
    socialIcon( 'tumblr', 'https://MuneebShaw.tumblr.com/', `mostly art and writing`) +
    socialIcon( 'Mastodon', 'https://mastodon.social/@Muneeb.Shaw', `just in case twitter burns to the ground`) +
    socialIcon( 'Twitch', 'https://www.twitch.tv/Muneeb.Shaw', `game dev, D&D & DDR streams`) +
    socialIcon( 'Discord', 'https://discord.gg/v5VWugaX', `my community`) +
    socialIcon( 'ArtStation', 'https://www.artstation.com/MuneebShaw', `my art & illustrations`) +
    socialIcon( 'YouTube', 'https://www.youtube.com/Muneeb.Shaw', `unity tutorials & other videos`) +
    socialIcon( 'Patreon', 'https://www.patreon.com/Muneeb.Shaw', `best way to support me ❤`);

    // document.getElementById("email_address").innerHTML = 'email' + '@server' + '.com';

    // companies
    let teotl = new Company( `Teotl Studios`, `https://teotlstudios.com/` );
    let valve = new Company( `Valve`, `https://www.valvesoftware.com/` );
    let uetp = new Company( `UET Peshawar`, `https://www.uetpeshawar.edu.pk/`, "from");
    let mobify = new Company( `Mobify`, `https://mobify.tech/`, "at");
    let nbi = new Company( `NoBorderz Innovations`, `https://www.noborderz.com/`, "at");

    // let shapes = new Project( `Project with card`,
    // 	`https://acegikmo.com/shapes/`,
    // 	undefined, `an award-winning GPU based vector graphics library for Unity<br>
    // 	<a href="https://acegikmo.com/shapes/docs/">Documentation</a> • <a href="https://assetstore.unity.com/packages/tools/particles-effects/shapes-173167">Asset Store</a>
    // 	` );
    // 	shapes.card = `shapes.png`;
        
    // name, link, timespan, desc, company
    let university = new Project( `Bachelor of Science in Mechanical Engineerng`,
        undefined,
        `2017-2021`, 
        `machine design, control systems, robotics and automation, 3D modelling and analyis, microcontrollers, programming`, 
        uetp);

    let mobifyJob = new Project( `Unity Developer`,
        undefined,
        `2021-2023`, 
        `level design, new features, and optimization of existing games. Developed new projects, implemented ads, analytics, IAP, and other third party plugins`, 
        mobify);
    
    let nbiJob = new Project( 'Software Engineer',
        undefined,
        '2023-now',
        'multiverse platform for desktop, web, and mobile devices',
        nbi);

    let uniFyp = new Project( `Design, Simulation, and Testing of UAV based packages delivery system`, 
        `https://www.researchgate.net/publication/355023499_Design_and_Fabrication_of_a_Quadcopter_Delivery_Drone`,
        `2021`, `as a final year project, designed, moddeled, and fabricated a quadcopter. Designed a system for GPS based packages delivery.`, [new Company('', '', ''), uetp] );

    document.getElementById("projects-side").innerHTML =
    nbiJob +
    mobifyJob + 
    university;

    document.getElementById("projects-past").innerHTML =
    uniFyp;
}