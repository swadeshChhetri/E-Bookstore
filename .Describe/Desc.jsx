/*

!QuickCart E-Commerce Project :-

!1. Functanalities :
      1. Item Rendering Dynamically
      2. Add to Cart + Button(Remove/Add to cart)
      3. Loder
      4. API

!2. Future Functanalities :
      1. Short-cut menu while hovering the cart;
      2. Adding mySQL as a data-base for storing the datas;

!2. Technical Skill :
     1. Html, Css & JavaScript

!3. Tools :
     1. Google fonts for fonts, 2. Font-awesome for icons



*/

/*
!How did you render the items on Website ?

![Fetchitems.jsx]
step1: Use useEffect hook(with return) to handle the Operation & set the logic;
step2: Use async-await function to handle achronious operation as well as get datas;
step3: Set the Error-handling try{}, catch(){}, finally{} with dispatchHook;
![slice]
*Note: After the dispatched the data will be appear to the slicepage reducers;
step1: Create a slice to catch the data -> name, initialState, reducers;
![store]
step2: Import the slice and store in reducer's property using '.' reducer;
![provide]
step4: Provide the data whole component using Provider -> import and share by store in a variable.
![take out]
step5: Select the datas using useSelector(from redux) hook & store them in a variable and later pass them to the component as a prope .
![Rendering]
step6: Destructure the datas and pass you html code;

*/

/*
!How did you "Add the items into the cart"?
step1: Use dispatchHook & create two functions for "addToBag" & "removeFromBag"& set the dispatch inside functions[it will execute when it will call];
step2: set the "onClick={}" attrabute to call functions & After calling functions it will dispatch the items id to the slice method and it will push into an slice;
*/

/*
!How did you fetched the data from the server?
Step1: Use the useEffect hook with cleanUp function & dependencies;
Step2: set the logic if fetchStatus is done return from the function;
Step3: Use async-await to handle asynchronouse task - 
          1. dispatch and action to render loader;
          2. use Exception-handlings - try{}, catch(){}, finally{};
          3. try{} : use await to fetch the data & set logic: if res is not okey - Error;
                     otherwise, await for response in json format(response.json(););
                     then, dispatch them into different slices;
          4. catch(err){} : If we get any error , it will be catched by catch keyword;
          5. finally{}: fetching process is done;
          6. It will only be re-upload when called [fetchStatus & dispatch]



*/

/*
! How did you add the Load spinner ?;
step1: creat a container set the style = width:"5rem", height: "5rem" & role="status";
*Note: use bootstrap;









*/