{
    console.log(x); // undefined (variable hoisted, but not initialized)
    console.log(y); // throws ReferenceError: Cannot access 'y' before initialization
    console.log(z); // throws ReferenceError: Cannot access 'z' before initialization

    var x = "I am "; 
    let y = "Learning in"; 
    const z = "PW SKILLS";

    console.log(x); // "I am "
    console.log(y); // "Learning in"
    console.log(z); // "PW SKILLS"
}
