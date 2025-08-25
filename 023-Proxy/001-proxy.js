/*

    The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

    Syntax:

        const proxy1 = new Proxy(targetObject, {})

        OR

        const handler = {}
        const proxy1 = new Proxy(targetObject, handler)


        - targetObject: the original object which you want to proxy
        - handler: an object that defines which opeartaions will pe intercepted and how to redifine intercepted operations

        - get(target, prop){
        
          }

        - set(target, prop, value){
          
          }
*/

const user = {
    username: "Tony Stark",
    age: 50,
    password: "123"
};

// console.log(user.passowrd);

const proxyUser = new Proxy(user,{

    get(target, prop){
        // console.log(target);
        // console.log(target[prop]);

        if(prop === "password"){
            throw new Error("Access denied");
        }

        return target[prop];
    }
});

console.log(proxyUser.password);