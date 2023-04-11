const testimonial = new Promise((resolve, rejected)=> {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.npoint.io/2b4b8446c0975b2db2a0', true);

    xhr.onload = ()=> {
        if(xhr.status == 200) {
            resolve(JSON.parse(xhr.response))
        } else {
            rejected('Error loading data')
        }
    }

    xhr.onerror = ()=> {
        rejected('Networking Error')
    }

    xhr.send()
})

async function asyncFunction() {
    const response = await testimonial;

    let addTestimonial = '';
    response.forEach((item)=> {
        addTestimonial += `<div class="card">
                            <img src="${item.image}" alt="">
                            <em>"${item.comment}"</em>
                            <div class="name">
                                <b>- ${item.name}</b>
                                <b>
                                    ${item.rating}
                                    <i class="fa-sharp fa-solid fa-star"></i>
                                </b>
                            </div>        
                        </div>`
    })

    document.getElementById('card-wrapping').innerHTML = addTestimonial;
}
asyncFunction()

// function for filter display based on what user click
async function filterTestimonial(rating) {
    const response = await testimonial

    let addTestimonial = '';
    const dataFiltered = response.filter((data) => { 
        return data.rating === rating;
    }) // filter list client to throw card testimony based on rating click

    console.log(dataFiltered);

    if(dataFiltered.length === 0) {
        addTestimonial = `<h3>Data not found ! </h3>` // when nothing content to show
    } else  {
        dataFiltered.forEach((data) => {
            addTestimonial += `<div class="card">
                                <img src="${data.image}" alt="">
                                <em>"${data.comment}"</em>
                                <div class="name">
                                    <b>- ${data.name}</b>
                                    <b>
                                        ${data.rating}
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                    </b>
                                </div>        
                            </div>`
        })
    } // show filter results

    document.getElementById('card-wrapping').innerHTML = addTestimonial;
}
