const resultsContainer = document.querySelector('.results-container')

async function getScoreData () {
    const response = await fetch('./data.json')
    const data = await response.json()
    console.log(data);
    
    return data
    
}

async function showResults () {
    const resultsList = await getScoreData()    

    resultsList.map((e) => {
        resultsContainer.innerHTML +=
        `<li class='flex justify-between bg-${e.background} rounded-[7px] p-[14px] mb-[17px]'>
            <div class='flex gap-[13px] pl-[3px] text-[15px] md:text-[18px]'>
                <img src="${e.icon}" alt="${e.category} icon">
                <span class='text-${e.color}'>${e.category}</span>
            </div>
            <div class='flex gap-[8px] text-[15px] md:text-[18px]'>
                <strong class='text-(--quaternary-font-color) font-black'>${e.score}</strong>
                <span class='text-(--quinary-font-color) font-bold'>/ 100</span>
            </div>
         </li>`
    })
}

showResults()