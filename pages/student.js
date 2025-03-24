let dashBoard = document.querySelector('.student__ul');

async function students() {
    const link = 'https://hp-api.onrender.com/api/characters/students';
    const result = await fetch(link, {
        method: 'GET'
    })

    const resultJSON = await result.json()
    
    

    if(resultJSON){
        createCrad(resultJSON)
        
    } else{
        dashBoard.innerHTML = 'Error'
    }


    function createCrad(data){
        console.log(data)

        for(key of data){
            let img = key.image;
            let name = key.name;
            let alternate = key.alternate_names;
            let species = key.species;
            let gender = key.gender;
            let house = key.house;
            let dateOfBirt = key.dateOfBirth;
            let yearOfBirth = key.yearOfBirth;
            let wizard = key.wizard;
            let ancestry = key.ancestry;
            let eye = key.eyeColour;
            let hair = key.hairColour;
            let wand = key.wand;
            let patronus = key.patronus;
            let hogwartsStudent = key.hogwartsStudent;
            let hogwartsStaff = key.hogwartsStaff;
            let actor = key.actor;
            let alive = key.alive

            
            const htmlItem = `<li class="student__li" style="
            background-image: url('${img}'); background-position: center;
            background-size: cover;
            background-repeat: no-repeat;">
                                <div class="student__li__start" >
                                    <h2>${name}</h2>
                                    <p>${alternate}</p>
                                    <button class="student__li__start_btn">Більше інформації</button>
                                </div>
                                <div class="student__li__end">
                                    <p>Name: <span class="student__li__end__span">${name}</span></p>
                                    <p>Alternate names: <span class="student__li__end__span">${alternate}</span></p>
                                    <p>Species: <span class="student__li__end__span">${species}</span></p>
                                    <p>Gend: <span class="student__li__end__span">${gender}</span></p>
                                    <p>House: <span class="student__li__end__span">${house}</span></p>
                                    <p>Date of birth: <span class="student__li__end__span">${dateOfBirt}</span></p>
                                    <p>Year of birth: <span class="student__li__end__span">${yearOfBirth}</span></p>
                                    <p>Wizard: <span class="student__li__end__span">${wizard}</span></p>
                                    <p>Ancestry: <span class="student__li__end__span">${ancestry}</span></p>
                                    <p>Eye colour: <span class="student__li__end__span">${eye}</span></p>
                                    <p>Hair colour: <span class="student__li__end__span">${hair}</span></p>
                                    <p>Wand:<span class="sstudent__li__end__span">${wand.core}</span></p>
                                    <p>Patronus: <span class="student__li__end__span">${patronus}</span></p>
                                    <p>Hogwarts student: <span class="student__li__end__span">${hogwartsStudent}</span></p>
                                    <p>Hogwarts staff: <span class="student__li__end__span">${hogwartsStaff}</span></p>
                                    <p>Actor: <span class="student__li__end__span">${actor}</span></p>
                                    <p>Alive: <span class="student__li__end__span">${alive}</span></p>
                                </div>
                            </li>`


            dashBoard.innerHTML += htmlItem;


        }
        document.querySelectorAll('.student__li__start_btn').forEach((btn, index) => {
            btn.addEventListener('click', function () {
                let studentCardAll = document.querySelectorAll('.student__li__end')[index];
                studentCardAll.classList.toggle('activy');
            });
        });


    }
}

if(dashBoard){
    students()

}



