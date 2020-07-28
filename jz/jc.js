
/* Searh field */
let	srchBtn = document.querySelector(".srchBtn");
let hderSearcher = document.querySelector(".hderSearcher");
let search = document.querySelector("#search");
srchBtn.onclick = ()=>{
	hderSearcher.classList.add("show");
	search.focus();
}
srchBtn.addEventListener("focus", () => {
	hderSearcher.classList.add('show');
	search.focus();
});
search.onblur = function(){
	if(hderSearcher.classList.contains("show")){
		hderSearcher.classList.remove("show");
	}
};

window.addEventListener("keydown", function (){
	if(event.code=="Escape" && hderSearcher.classList.contains("show")){
	hderSearcher.classList.remove("show");}
})



/* Login form */
let vhod = document.querySelector(".vhod");
let login = document.querySelector(".login");
let LgnEmail = document.querySelector("[name=LgnEmail]");

let popy = false;

vhod.onclick = ()=>{
	login.classList.add("showBl");
	LgnEmail.focus();
};
vhod.onfocus = ()=>{
	login.classList.add("showBl");
	LgnEmail.focus();
};
window.addEventListener("keydown", function (){
	if(event.code=="Escape" && login.classList.contains("showBl")){
		login.classList.remove("showBl");
	}
});
window.addEventListener("mousedown", function (e){
	if(login.classList.contains("showBl") && !e.target.closest('.login')){
		login.classList.remove("showBl");
	};
});
window.addEventListener("keyup", function (e){
	if(login.classList.contains("showBl") && !e.target.closest('.login')){
		login.classList.remove("showBl");}
});

/* recovery password */
let rcvrPas = document.querySelector(".rcvrPas");
let frgt = document.querySelector(".frgt"); 
let rcvrEmail = document.querySelector("#rcvrEmail"); 
let rcvrLgin = document.querySelector(".rcvrLgin"); 

frgt.onclick = ()=>{
	login.classList.remove("showBl");
	rcvrPas.classList.add("showBl");
	rcvrEmail.focus(); 
}
rcvrLgin.onclick = ()=>{
	rcvrPas.classList.remove("showBl");
		login.classList.add('showBl');
		LgnEmail.focus();
}
window.addEventListener("keydown", function (){
	if(event.code=="Escape" && rcvrPas.classList.contains("showBl")){
		rcvrPas.classList.remove("showBl");}
});
window.addEventListener("keyup", function (e){
	if(rcvrPas.classList.contains("showBl") && !e.target.closest('.rcvrPas')){
		rcvrPas.classList.remove("showBl");}
});
window.addEventListener("mousedown", function (e){
	if(rcvrPas.classList.contains("showBl") && !e.target.closest('.rcvrPas')){
		rcvrPas.classList.remove("showBl");
	};
});



/* to register Form */
let register = document.querySelector(".register"),
	toReg = document.querySelector(".toReg"),
	userName = document.querySelector("#userName"),
	regToLogin = document.querySelector(".regToLogin");

toReg.onclick = ()=>{
	login.classList.remove("showBl");
	register.classList.add("showBl");
	userName.focus(); 
}
regToLogin.onclick = ()=>{
	register.classList.remove("showBl");
	login.classList.add('showBl');
	LgnEmail.focus();
}
window.addEventListener("keydown", function (){
	if(event.code=="Escape" && register.classList.contains("showBl")){
		register.classList.remove("showBl");}
});
window.addEventListener("keyup", function (e){
	if(register.classList.contains("showBl") && !e.target.closest('.register')){
		register.classList.remove("showBl");}
});
window.addEventListener("mousedown", function (e){
	if(register.classList.contains("showBl") && !e.target.closest('.register')){
		register.classList.remove("showBl");
	};
});





/* Menu at header (third line) */

let mainChoiseWrap = document.querySelectorAll(".mainChoiseWrap");
let menu = document.querySelector(".menu");
let choiseWrap = document.querySelectorAll(".choiseWrap");

menu.onclick = ()=>{
	if (menu.classList.contains("icon-menu")) {openMenu();}
	else if (menu.classList.contains("clseMnu")) {closeMenu();};
}
function openMenu() {
	menu.innerHTML = "Close";
	menu.classList.remove("icon-menu");
	menu.classList.add("clseMnu");
	for (let i = 0; i < mainChoiseWrap.length; i++) {
		// choiseWrap[i].style.visibility = "visible";
		mainChoiseWrap[i].classList.add("showM");
	}
}
function closeMenu() {
	menu.innerHTML = "Menu";
	menu.classList.add("icon-menu");
	menu.classList.remove("clseMnu");
	for (let i = 0; i < mainChoiseWrap.length; i++) {
			mainChoiseWrap[i].classList.remove("showM");
	}
}
// menu.onclick = ()=>{
// 	if (menu.classList.contains("icon-menu")) {openMenu();}
// 	else if (menu.classList.contains("clseMnu")) {closeMenu();};
// }
// function openMenu() {
// 	menu.innerHTML = "Close";
// 	menu.classList.remove("icon-menu");
// 	menu.classList.add("clseMnu");
// 	for (let i = 0; i < mainChoiseWrap.length; i++) {
// 		mainChoiseWrap[i].classList.add("showM");
// 	}
// }
// function closeMenu() {
// 	menu.innerHTML = "Menu";
// 	menu.classList.add("icon-menu");
// 	menu.classList.remove("clseMnu");
// 	for (let i = 0; i < mainChoiseWrap.length; i++) {
// 			mainChoiseWrap[i].classList.remove("showM");
// 	}
// }




/* choose activity at 5th line header with icon */
let tpActv = document.querySelectorAll(".tpActv");
let tpActLen = tpActv.length;
let atvFrm = document.querySelectorAll(".atvFrm");
	// gstAmnt = document.querySelector(".crntFrm .gstAmnt");
let crntActv = 0;
for (let i = 0; i < tpActLen; i++) {
	tpActv[i].addEventListener("click", function () {
		tpActv[crntActv].classList.remove("crntActv");
		atvFrm[crntActv].classList.remove("crntFrm");
		tpActv[i].classList.add("crntActv");
		atvFrm[i].classList.add("crntFrm");
		crntActv=i;
		GuestClick(i);
		destClick(i);
		sightChoose(i);
		guestSize(i);
	})	
};



/* pop-up of place to visit in fvLnHder form (before 1st Block with countries) */

let dest = document.querySelectorAll(".dest"),
	actvLst = document.querySelectorAll(".actvLst"),
	sihtSrch = document.querySelectorAll(".sihtSrch");

function destClick(n){
dest[n].onclick = ()=>{
	actvLst[n].classList.add("showBl");
	sihtSrch[n].focus();
}
dest[n].addEventListener("focus", ()=>{
	actvLst[n].classList.add("showBl");
	sihtSrch[n].focus();
});
// sihtSrch.onblur = function(){
// 	if(actvLst.classList.contains("showBl")){
// 		actvLst.classList.remove("showBl");
// 	}
// };
window.addEventListener("keydown", function (){
	if(event.code=="Escape" && actvLst[n].classList.contains("showBl")){
		actvLst[n].classList.remove("showBl");}
});
window.addEventListener("keyup", function (e){
	if(actvLst[n].classList.contains("showBl") && !e.target.closest('.actvLst')){
		actvLst[n].classList.remove("showBl");}
});
window.addEventListener("mousedown", function (e){
	if(actvLst[n].classList.contains("showBl") && !e.target.closest('.actvLst')){
		actvLst[n].classList.remove("showBl");
	};
});

}
destClick(crntActv);



/* Chenge title from country list */

	

function sightChoose(n) {
let sight = actvLst[n].querySelectorAll("span"),
	sightLnt = sight.length;

for (let i = 0; i < sightLnt; i++) {
	sight[i].addEventListener("click", function () {
		dest[n].innerHTML = sight[i].innerHTML;
		actvLst[n].classList.remove("showBl");
	})
}
}
sightChoose(crntActv);


/* pop-up of number of people in fvLnHder form (before 1st Block with countries) */


let	gstAmnt = document.querySelectorAll(".gstAmnt");
let	prsnWrp = document.querySelectorAll(".prsnWrp");
let	clsPrsn = document.querySelectorAll(".clsPrsn");

function GuestClick(n){
gstAmnt[n].onclick = ()=>{
	prsnWrp[n].classList.add("showBl");
}
gstAmnt[n].addEventListener("focus", ()=>{
	prsnWrp[n].classList.add("showBl");
});
clsPrsn[n].onclick = ()=>{
	prsnWrp[n].classList.remove("showBl");
}
window.addEventListener("keydown", function (){
	if(event.code=="Escape" && prsnWrp[n].classList.contains("showBl")){
		prsnWrp[n].classList.remove("showBl");}
});
window.addEventListener("keydown", function (e){
	if(prsnWrp[n].classList.contains("showBl") && !e.target.closest('.prsnWrp')){
		prsnWrp[n].classList.remove("showBl");}
});
window.addEventListener("mousedown", function (e){
	if(prsnWrp[n].classList.contains("showBl") && !e.target.closest('.prsnWrp')){
		prsnWrp[n].classList.remove("showBl");
	};
});
}
GuestClick(crntActv);




/* change number of persons in 5line header */
let adultAmountVal = document.querySelector(".adultAmount").value,
	adultAmount = document.querySelectorAll(".adultAmount"),
	adultAmountLes = document.querySelectorAll(".adultAmountLes"),
	adultAmountMor = document.querySelectorAll(".adultAmountMor"),
	kidAmount = document.querySelectorAll(".kidAmount"),
	kidAmountLes = document.querySelectorAll(".kidAmountLes"),
	kidAmountMor = document.querySelectorAll(".kidAmountMor");


function guestSize(n) {
let	adultSum = "", 
	childSum = "",
	and = "";

adultAmountLes[n].onclick = ()=>{
	if (adultAmount[n].value == 0) {
		return;
	} else {
		adultAmount[n].value -= 1;
		if (adultAmount[n].value == 0) {
			adultSum = "";
			and = "";
		} else if (adultAmount[n].value == 1) {
			adultSum = adultAmount[n].value + " adult "
		} else {
		adultSum = adultAmount[n].value + " adults ";
		}
	};
	gstAmnt[n].value = adultSum + and + childSum;
};
adultAmountMor[n].onclick = ()=>{
	adultAmount[n].value = parseInt(adultAmount[n].value) + 1;
	if (kidAmount[n].value > 0) and = "whith ";
	if (adultAmount[n].value == 1) {
		adultSum = adultAmount[n].value + " adult "
	} else {
		adultSum = adultAmount[n].value + " adults ";
	};
	gstAmnt[n].value = adultSum + and + childSum;
};
kidAmountLes[n].onclick = ()=>{

	if (kidAmount[n].value == 0) {
		return;
	} else {
		kidAmount[n].value -= 1;
		if (adultAmount[n].value == 0) {
			and = "";
		} else {
			and = "whith "
		};
		if (kidAmount[n].value == 0) {
			childSum = "";
			and = "";
		} else if (kidAmount[n].value == 1) {
			childSum = "1 child";
		} else {
			childSum = kidAmount[n].value + " children";
		}
	};
	gstAmnt[n].value = adultSum + and + childSum;
};
kidAmountMor[n].onclick = ()=>{
	kidAmount[n].value = parseInt(kidAmount[n].value) + 1;
	if (adultAmount[n].value == 0) {
		and = "";
	} else {
		and = "whith "
	};
	if (kidAmount[n].value == 1) {
		childSum =  "1 child";
	} else {
		childSum = kidAmount[n].value + " children";
	}
	gstAmnt[n].value = adultSum + and + childSum;
};
};
guestSize(crntActv);




/* scdBlck-trnd toggle */

let chs = document.querySelectorAll(".chs");
let currentChoise = 0;

for (let i = 0; i < chs.length; i++) {
	chs[i].addEventListener("click", function(){
		chs[currentChoise].classList.remove("crntChs");
		chs[i].classList.add("crntChs");
		currentChoise = i;
	})
}


