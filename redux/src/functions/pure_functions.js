// 5
// pure function: same argument always return same results
// reducers MUST be pure

const myFunction = a => a*2;

// no random values
// no current date/time
// no global state (DOM, files, db, etc)
// no mutation of parmeters 

// to be pure, eveything that the function needs should be in the parameters

// benetfits
// self-documentaing: everything that the function needs are already specified in the parameters
// easilty testables
// concurrency
// cacheable