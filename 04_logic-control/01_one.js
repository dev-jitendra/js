//Operators
/*
=   -> equal                    ->   { =   }  -> for assign
==  -> Double Equal             ->   { ==  }  -> Check Equal
=== -> Triple Equal             ->   { === }  -> Check Equal with DataTypes
<   -> Less than                ->   { <   }  -> Check Less Than
<=  -> Less than Equal to       ->   { <=  }  -> Check Less Than Equal to
>   -> Greater than             ->   { >   }  -> Check Greate than
>=  -> Greater than Equal to    ->   { >=  }  -> Check Greate than Equal to
!=  -> Not Equal to             ->   { !=  }  -> Check Not Equal
!== -> Not Equal to             ->   { !=  }  -> Check Not Equal with datatype
*/


// if

// if(condition===true){}

const isUserloggedIn = true;
const temperature = 41;

// ==  -> Double Equal ->   { ==  }  -> Check Equal
if(2==2){
    console.log("2==2: executed", 2==2);
};

// === -> Triple Equal             ->   { === }  -> Check Equal with DataTypes
if(2==='2'){
    console.log("2==='2' executed", 2==='2');
};

// <   -> Less than                ->   { <   }  -> Check Less Than
if(2<2){
    console.log("2<2 executed", 2<2);
};

// <=  -> Less than Equal to       ->   { <=  }  -> Check Less Than Equal to
if(2<=2){
    console.log("2<=2 executed", 2<=2);
};

// >   -> Greater than             ->   { >   }  -> Check Greate than
if(2>2){
    console.log("2>2 executed", 2>2);
};

// >=  -> Greater than Equal to    ->   { >=  }  -> Check Greate than Equal to
if(2>=2){
    console.log("2>=2 executed", 2>=2);
};

// !=  -> Not Equal to             ->   { !=  }  -> Check Not Equal
if(2!=2){
    console.log("2!=2 executed", 2!=2);
};

// !== -> Not Equal to             ->   { !==  }  -> Check Not Equal with datatype
if(2!==2){
    console.log("2!==2) executed", 2!==2);
};

console.table([
 (2=='2'),"2 =='2' executed",
 (2==='2'),"2 ==='2' executed",
 (2<2),"2 < 2 executed",
 (2<=2),"2 <= 2 executed",
 (2>2),"2 > 2 executed",
 (2>=2),"2 >= 2 executed",
 (2!=2),"2 != 2 executed",
 (2!==2),"2 !== 2 executed"
]);

const balance = 1000;
if(balance){
    console.log(`less than 500`);
}else if(balance < 750){
    console.log(`less than 750`);
}else if(balance < 900){
    console.log(`less than 900`);
}
else{
    console.log(`less than 1200`);
}

//interesting
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log(`Allow to buy course`);
};

if(loggedInFromGoogle || loggedInFromEmail){
    console.log(`user LogedIn`);
};