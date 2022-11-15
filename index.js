
idDictionary = {
    "1" : "X@ZETe0:",
    "2" : "&m-N;e^d",
    "3" : "~17^BQc8",
    "4" : "r;F(f$Q'",
    "5" : "FE.3$HPw",
    "6" : "kLwu;PZv",
    "7" : "jFack?Jw",
    "8" : "o'M=!O^D",
    "9" : "DiEQ(!S:"
}

let globalvar;

var count = 0;
for (var i in idDictionary) {
   if (idDictionary.hasOwnProperty(i)) count++;
}


const myform = document.getElementById("signup");

myform.addEventListener("submit", (e)=> {
  e.preventDefault();
  console.log('Form has been submitted');
  var email = document.getElementById("signup").elements[0].value;
  var password = document.getElementById("signup").elements[1].value;
  const password_split = password.split("");
  console.log(email)
  console.log(password_split)

  let ustring;
  for(let i=0; i<password_split.length; i++)
  {
    console.log(count);
    for(let j=0; j<count; j++)
    {
      if(parseInt(password_split[i]) == (j+1))
      {
        ustring += idDictionary[j];
      }
    }
  }
  globalvar = ustring;
});
export {globalvar};

