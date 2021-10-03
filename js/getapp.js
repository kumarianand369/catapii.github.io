//get and search the data

let generate_btn = document.querySelector(".generate_btn");
generate_btn.addEventListener("click", fetchPics);

function fetchPics(){
	
	fetch('https://api.thecatapi.com/v1/images/search')
	 .then(response => response.json())
	 .then((data) => {
		let catsImgUrl = data[0].url
		
		let catsImgE1 = document.createElement("img")
		catsImgE1.setAttribute('src', `${catsImgUrl}`)
		catsImgE1.classList.add("showcase")
		
		let catsImgDiv = document.querySelector(".catsImgDiv")
		catsImgDiv.appendChild(catsImgE1)	
	})
	.catch(err => console.log(err))
	
}