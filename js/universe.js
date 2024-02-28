console.log('hello from universe');

// load data
const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    displayData(data);
}
// loadData();

const displayData = (data) => {
    console.log(data);
    // get features
    const features = data.data.tools[0].features;
    const image = data.data.tools[0].image;
    const name = data.data.tools[0].name;
    const publish = data.data.tools[0].published_in;
    // console.log(features);
    // get container
    const getDataContainer = document.getElementById('data-container');

    // set innerHtml
    getDataContainer.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src="${image}" alt="Shoes"
                    class="rounded-xl" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">Features</h2>
                <p>1. ${features[0]}</p>
                <p>2. ${features[1]}</p>
                <p>3. ${features[2]}</p>
                <hr>
            </div>
            <div class="flex justify-between px-10 pb-5">
                <div class=" space-y-2">
                    <h2 class="text-xl font-semibold">${name}</h2>
                  <div class="flex gap-1">  
                   <img src="images/date.png" alt="">
                   <p>${publish}</p>
                   </div>
                </div>
                <button><img src="images/arrow.png" alt=""></button>
            </div>
        </div>
    `


}