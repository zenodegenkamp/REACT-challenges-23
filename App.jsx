import React, { useEffect } from "react";
import emailList from "./data/emailList";
import TopText from "./components/TopText";

// . You should test the form with the following three email addresses: 
		
// 				  		 Email		 			  Expected Result 				  
// 			╷-----------------------------╷-----------------------------╷					
// 		  	|     noDuplicate@gmail.com   |	    non-duplicate message   |
// 			|-----------------------------|-----------------------------|
// 			|  TestyMcTesterson@gmail.com |	      duplicate message 	|
// 			|-----------------------------|-----------------------------|
// 			|  testymctesterson@gmail.com |		  duplicate message     |	


export default function App() {
    const [userInput, setUserInput] = React.useState("");
    const [userEmail, setUserEmail] = React.useState("");
    const [duplicate, setDuplicate] = React.useState(null);

    function handleChange(e) {
        setUserInput(e.target.value);
    }
    
    function handleClick(e) {
        e.preventDefault();  // Prevent the default form submission behavior
        setUserEmail(userInput);
        setUserInput("");  // Clear the userInput after setting userEmail
    }

    useEffect(() => {
        if (userEmail) {
            const isDuplicate = emailList.some(email => 
                email.toLowerCase() === userEmail.toLowerCase()
            );
            setDuplicate(isDuplicate);
        }
    }, [userEmail]);

    return (
        <form className="form" onSubmit={handleClick}>
            <TopText userEmail={userEmail} duplicate={duplicate} />
            <div>
                <input
                    required
                    placeholder={!userEmail ? "Enter your email" : "Subscribe a friend!"}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={userInput}
                />
                <button type="submit">
                    Subscribe
                </button>   
            </div>
        </form>
    );
}
