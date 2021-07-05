//main
const container = document.createElement('div');
container.style.position = 'relative';

//jumbotron

const img = document.createElement('img');
img.setAttribute('src', './dp.jpg');
img.style.height = '200px';
img.style.width = '200px';
img.style.zIndex = '10';
img.style.margin = '0px auto';
img.style.borderRadius = '50%';
img.style.border = '5px dotted yellow';


const jumbo = document.createElement('div');
jumbo.style.display = 'flex';
jumbo.style.flexDirection = 'column';
jumbo.style.justifyContent = 'flex-end';
jumbo.style.height = '400px';
jumbo.style.backgroundColor = 'grey';
jumbo.style.margin = '20px';



const stripw = document.createElement('div');
stripw.style.backgroundColor = 'white';
stripw.style.height = '50px';
stripw.style.width = '100%';


const stripg = document.createElement('div');
stripg.style.height = '50px';
stripg.style.backgroundColor = 'grey';
stripg.style.width = '100%';

const bott = document.createElement('div');
bott.style.borderBottom = '4px solid black';
bott.style.backgroundColor = 'white';

const bottp = document.createElement('p');
bottp.style.textAlign = 'center';
bottp.innerText = 'Khalilabad India | +917985101853 | pandeyabhishek11999@gmail.com |';

bott.appendChild(bottp);


jumbo.appendChild(img);
jumbo.appendChild(stripw);
jumbo.appendChild(stripg);
jumbo.appendChild(bott);






//content
const content = document.createElement('div');
content.style.padding = '20px';

const left = document.createElement('div');
const right = document.createElement('div');


//profile
const profile = document.createElement('div');

const prodiv = document.createElement('div');
prodiv.style.display = 'flex';
//prodiv.style.alignItems = 'center';
prodiv.style.paddingLeft = '100px'

const proimg = document.createElement('img');
proimg.setAttribute('src', './pro.png');
proimg.style.height = '50px';

const proh = document.createElement('h2');
proh.innerText = 'Profile';
proh.style.marginLeft = '10px';


prodiv.appendChild(proimg);
prodiv.appendChild(proh);


const prop = document.createElement('p');
prop.innerText = 'I am a full stack developer with strong fundamentals of Python \
and JS with hands on experience on Django, Bootstrap and MERN.';

profile.appendChild(prodiv);
profile.appendChild(prop);

//skills
const skill = document.createElement('div');

const skilldiv = document.createElement('div');
skilldiv.style.display = 'flex';
//skilldiv.style.alignItems = 'center';
skilldiv.style.paddingLeft = '100px'

const skillimg = document.createElement('img');
skillimg.setAttribute('src', './skill.png');
skillimg.style.height = '50px';

const sh = document.createElement('h2');
sh.innerText = 'Skill';
sh.style.marginLeft = '10px';


const sh2 = document.createElement('h4');
sh2.innerText = 'Technical Skills';
sh2.style.marginLeft = '240px';

skilldiv.appendChild(skillimg);
skilldiv.appendChild(sh);


const sp = document.createElement('p');
sp.innerText = 'Javascript';
sp.style.textAlign = 'center';



const range = document.createElement('input');
range.setAttribute('type', 'range');

const skillDiv = document.createElement('div');
skillDiv.appendChild(sp);
skillDiv.appendChild(range);

skillDiv.style.display = 'flex';
skillDiv.style.justifyContent = 'space-between';

skill.appendChild(skilldiv);
skill.appendChild(sh2);
skill.appendChild(skillDiv);

//work
const work = document.createElement('div');

const workdiv = document.createElement('div');
workdiv.style.display = 'flex';
//workdiv.style.alignItems = 'center';
workdiv.style.paddingLeft = '100px'

const workimg = document.createElement('img');
workimg.setAttribute('src', './work.png');
workimg.style.height = '50px';

const wh = document.createElement('h2');
wh.innerText = 'Work Experience';
wh.style.marginLeft = '10px';


workdiv.appendChild(workimg);
workdiv.appendChild(wh);


const wp = document.createElement('p');
wp.innerText = 'I have 3 years of experience as a freelance on codementor where\
i have worked on python assignments on a regular basis. I have 5\
 star rating from clients all across the globe.I have worked as a \
\
full time role for Company 1 and Company 2';
wp.style.textAlign = 'center';


work.appendChild(workdiv);
work.appendChild(wp);

//Company 1
const c1 = document.createElement('div');

const ch1 = document.createElement('h4');
ch1.innerText = 'Company 1';
ch1.style.marginLeft = '240px';

const cp1 = document.createElement('p');
cp1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque\
in tempor lacus, non placerat urna. Maecenas erat nisl, euismod\
eu urna at, vulputate volutpat mi. Morbi ullamcorper augue quis\
ullamcorper maximus. Donec eu euismod diam, at tristique dolor.\
Aliquam est nunc, bibendum ut sodales eget, feugiat et nunc.\
Nullam eu odio cursus, iaculis tellus non, ultrices nibh.\
Aliquam velit eros, pharetra non purus vel, fermentum\
condimentum lectus. Donec nec ornare libero, ac lacinia tellus.';

cp1.style.textAlign = 'center';


c1.appendChild(ch1);
c1.appendChild(cp1);

const vertLine = document.createElement('div');
vertLine.style.borderLeft = '2px solid black';
vertLine.style.height = '800px';
vertLine.style.marginRight = '10px';
vertLine.style.marginLeft = '10px';


//Company 2
const c2 = document.createElement('div');

const ch2 = document.createElement('h4');
ch2.innerText = 'Company 2';
ch2.style.marginLeft = '240px';


const cp2 = document.createElement('p');
cp2.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque\
in tempor lacus, non placerat urna. Maecenas erat nisl, euismod\
eu urna at, vulputate volutpat mi. Morbi ullamcorper augue quis\
ullamcorper maximus. Donec eu euismod diam, at tristique dolor.\
Aliquam est nunc, bibendum ut sodales eget, feugiat et nunc.\
Nullam eu odio cursus, iaculis tellus non, ultrices nibh.\
Aliquam velit eros, pharetra non purus vel, fermentum\
condimentum lectus. Donec nec ornare libero, ac lacinia tellus.';

cp2.style.textAlign = 'center';


c2.appendChild(ch2);
c2.appendChild(cp2);

//Company 3
const c3 = document.createElement('div');

const ch3 = document.createElement('h4');
ch3.innerText = 'Company 3';
ch3.style.marginLeft = '240px';


const cp3 = document.createElement('p');
cp3.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque\
in tempor lacus, non placerat urna. Maecenas erat nisl, euismod\
eu urna at, vulputate volutpat mi. Morbi ullamcorper augue quis\
ullamcorper maximus. Donec eu euismod diam, at tristique dolor.\
Aliquam est nunc, bibendum ut sodales eget, feugiat et nunc.\
Nullam eu odio cursus, iaculis tellus non, ultrices nibh.\
Aliquam velit eros, pharetra non purus vel, fermentum\
condimentum lectus. Donec nec ornare libero, ac lacinia tellus.';

cp3.style.textAlign = 'center';


c3.appendChild(ch3);
c3.appendChild(cp3);


work.appendChild(c1);
//work.appendChild(c2);
//work.appendChild(c3);

left.appendChild(profile);
left.appendChild(skill);
left.appendChild(work);

//education
const edu = document.createElement('div');

const eduh = document.createElement('h2');
eduh.innerText = 'Education';
eduh.style.marginLeft = '240px';


const eduh2 = document.createElement('h3');
eduh2.innerText = 'IIT-BHU';
eduh2.style.marginLeft = '240px';


const edup = document.createElement('p');
edup.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque\
in tempor lacus, non placerat urna. Maecenas erat nisl, euismod\
eu urna at, vulputate volutpat mi. Morbi ullamcorper augue quis\
ullamcorper maximus. Donec eu euismod diam, at tristique dolor.\
Aliquam est nunc, bibendum ut sodales eget, feugiat et nunc.\
Nullam eu odio cursus, iaculis tellus non, ultrices nibh.\
Aliquam velit eros, pharetra non purus vel, fermentum\
condimentum lectus. Donec nec ornare libero, ac lacinia tellus.';

edup.style.textAlign = 'center';


edu.appendChild(eduh);
edu.appendChild(eduh2);
edu.appendChild(edup);

right.appendChild(c2);
right.appendChild(c3);
right.appendChild(edu);


//append
content.appendChild(left);
content.appendChild(vertLine);
content.appendChild(right);


container.appendChild(jumbo);
container.appendChild(content);

const nameDiv = document.createElement('div');
nameDiv.style.backgroundColor = 'yellow';
nameDiv.style.padding = '0px 45px';
nameDiv.style.position = 'absolute';
nameDiv.style.zIndex = '10';
nameDiv.style.top = '200px';
nameDiv.style.left = '480px';


const namep = document.createElement('p');
namep.innerText = 'ABHISHEK PANDEY';
namep.style.fontSize = '40px';

nameDiv.appendChild(namep);

container.appendChild(nameDiv);

document.body.appendChild(container);



//css
content.style.display = 'flex';

