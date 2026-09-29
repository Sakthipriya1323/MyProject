import React from "react";
function Child({message}) {
    return <p>Message from Parent: {message}</p>;
}
function Parent() {
    return <Child message="Hello from Parent!"/>;
}
export default Parent;