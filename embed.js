;(function () {
	var sarshsim = document.createElement("script");
	var earshsim = document.createElement("button");
	var larshsim = document.createElement("a");
	var carshsim = document.getElementById("arshsim");
	sarshsim.type = "text/javascript";
	sarshsim.src = "https://355over113.github.io/arsh-sim/scripts/main.js";
	earshsim.onclick = function(){arshsim();};
	earshsim.innerHTML = "Play Arshneet Simulator";
	larshsim.href = "https://github.com/355over113/arsh-sim/";
	earshsim.style = "cursor:hand;cursor:pointer";
	larshsim.target = "_blank";
	larshsim.innerHTML = "Source";
	carshsim.appendChild(sarshsim);
	carshsim.appendChild(earshsim);
	carshsim.appendChild(document.createElement("br"));
	carshsim.appendChild(larshsim);
})();