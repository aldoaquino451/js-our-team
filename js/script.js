/*

  Wayne Barnett  	Founder & CEO	        wayne-barnett-founder-ceo.jpg   
  Angela Caroll	  Chief Editor	        angela-caroll-chief-editor.jpg    
  Walter Gordon  	Office Manager	      walter-gordon-office-manager.jpg    
  Angela Lopez	  Social Media Manager	angela-lopez-social-media-manager.jpg    
  Scott Estrada	  Developer	            scott-estrada-developer.jpg    
  Barbara Ramos	  Graphic Designer	    barbara-ramos-graphic-designer.jpg 
  
*/


// 1. Dobbiamo creare un array che rappresenta l'intero team [array]
// 2. Il team sarà composto da diversi oggetti che rappresentano i membri {object}
// 3. Ogni membro sarà un oggetto con determinate proprietà come nome ruolo e foto { key : value, }

const team = [

  {
    firstname : 'Wayne',
    lastname : 'Barnett',
    role : 'Founder & CEO', 
    profilePic : 'wayne-barnett-founder-ceo.jpg'
  },
  {
    firstname : 'Angela',
    lastname : 'Caroll',
    role : 'Chief Editor',
    profilePic : 'angela-caroll-chief-editor.jpg'
  },
  {
    firstname : 'Walter',
    lastname : 'Gordon',
    role : 'Office Manager',
    profilePic : 'walter-gordon-office-manager.jpg'
  },
  {
    firstname : 'Angela',
    lastname : 'Lopez',
    role : 'Social Media Manager',
    profilePic : 'angela-lopez-social-media-manager.jpg'
  },
  {
    firstname : 'Scott',
    lastname : 'Estrada',
    role : 'Developer',
    profilePic : 'scott-estrada-developer.jpg'
  },
  {
    firstname : 'Barbara',
    lastname : 'Ramos',
    role : 'Designer',
    profilePic : 'barbara-ramos-graphic-designer.jpg'
  }

]


// 6. BONUS: Invece della lista inserisci i valori di tutte le proprietà all'interno di una card bootstrap

for ( let member of team ) {

  const firstname = member.firstname;
  const lastname = member.lastname;
  const role = member.role;
  const profilePic = member.profilePic;

  const container = document.getElementById('a-container');
  
  container.innerHTML += `
  <div class="card a-card">
    <img class="card-img-top" src="./img/${profilePic}" alt="${firstname} ${lastname}">
    <div class="card-body">
      <h3>${lastname} ${firstname}</h3>
      <p class="card-text">${role}</p>
    </div>
  </div>
  `;
  
};






// 4. con un ciclo for in stampiamo in console tutte le proprietà coi relativi valori per ogni membro del team
/*
for ( let member of team ) {

  const memberID = parseInt(member) + 1;

  console.log('----- MEMBER NUMBER ' + memberID + ' -----');
  console.log(member.firstname);
  console.log(member.lastname);
  console.log(member.role);
  console.log(member.profilePic);

};

console.log('-------------***---------------')
console.log(team)
console.log(team[0])
*/

// 5. Lo stesso di sopra ma nell'html creiamo una lista dove stampare e visualizzare i dati
/*
for ( let i in team ) {
  
  const member = team[i];

  const container = document.getElementById('a-container');
  const ul = document.createElement('ul');
  container.append(ul);

  ul.innerHTML += `<li>${member.firstname} ${member.firstname}</li>`;
  ul.innerHTML += `<li>${member.role}</li>`;
  ul.innerHTML += `
  <li>
    <img class="card-img-top" src="./img/${member.profilePic}" alt="">
  </li>`;

};
*/
