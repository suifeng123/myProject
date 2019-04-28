/**
 * 进行创建Person的函数
 */
function createPerson(name,age,job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		console.log(this.name);
	};
	return o;
}

var person1 = createPerson('Jhonha',22,'dancer');
var person2 = createPerson('Ciris',22,'software engineer');
console.log(person1.name);
console.log(person2.name);


function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	
	this.sayName = function(){
		console.log(this.name);
	}
	
}

var person1 = new Person("Jim",22,'dancer');
var person2 = new Person('Crisis',22,'Software engineer');
console.log(person1.name);
console.log(persopn2.name);

var validator = {
	validate: function(value,type){
		switch(type){
			case 'isNonEmpty': {
				return true;
			}    
		    case 'isNumber': {
				return true;
				break;
			} 
		    case 'isAlphaNum':{
				return true;
			}
		    default:{
				return true;
			}
		}
	}
}

function getAudioDuration(url){
	const audio = document.createElement('audio');
	audio.src = url;
	audio.addEventListener('canplay',function(){
		console.log(audio.duration);
	});
}

const file = document.getElementById('file');
file.addEventListener('change',(e) => {
	const file = e.target.files[0];
	console.log(file.size);
	getAudioDuration(URL.createObjectURL(file));
})

function playAudio(file){
	const fileReader = new FileReader();
	const audioContext = new AudioContext();
	fileReader.readAsArrayBuffer(file);
	fileReader.onload = () => {
		audioContext.decodeAudioData(fileReader.result,
		(result) => {
			//创建播放源
			const source = audioContext.createBufferSource();
			source.buffer = result;
			//连接输出终端
			source.connect(audioContext.destination);
			//开始播放
			source.start();
		})
	}
};

const file = document.getElementById('file');
file.addEventListener('change',(e) => {
	playAudio(e.target.files[0]);
});

function(modules){
	var installedModules = {};
	
	function __webpack_require__(moduleId){
		if(installedModules[moduleId]){
			return installedModules[mudoleId].exports
		}
		
		var module = installedModuled[moduleId] = {
			i: moduleId,
			l: false,
			exports: {}
		}
		
		modules[moduleId].call()
	}
}

var root = document.documentElement;//<html>

if('textShadow' in  root.style){
	root.classList.add('textshadow');
}else{
	root.classList.add('no-textshadow');
}

function testProperty(property){
	var root = document.documentElement;
	
	if(property in root.style){
		root.classList.add(property.toLowerCase());
		return true;
	}
	
	root.classList.add('no-' + property.toLowerCase());
	return false;
}

var dummy = document.createElement('p');
dummy.style.backgroundImage = 'linear-gradient(red,tan)';
if(dummy.style.backgroundImage){
	root.classList.add('lineargradients');
}else{
	root.classList.add('no-lineargradients');
}

function testValue(id,value,property){
	var dummy = document.createElement('p');
	dummy.style[property] = value;
	
	if(dummy.style[property]){
		root.classList.add(id);
		return true;
	}
	
	root.classList.add('no-' + id);
	return false;
}

