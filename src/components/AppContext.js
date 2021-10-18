import * as React from "react";
import "./App.css";
import { useState, useEffect, createContext } from "react";

export const AppContext = createContext(null);

function AppProvider({children}) {

    const [contacts, setContacts] = useState([]);
    const [isContact, setIsContact] = useState([]);
    
    function addContact(profileObj){
        if (!contacts.includes(profileObj)) {
            console.log(`does not exist`)
            setContacts(contacts.concat(profileObj));
            setIsContact(isContact.concat(profileObj.id));
        }
        let index = contacts.indexOf(profileObj) 
        console.log(`exists at index: `, index)
    }


    function removeContact(profileObj){
        let index = contacts.indexOf(profileObj);
        console.log(`exists at index: `, index)
        let temp = [...contacts.slice(0, index), ...contacts.slice(index + 1)];
        setContacts(temp);
        let index2 = isContact.indexOf(profileObj.id);
        let temp2 = [...isContact.slice(0, index2), ...isContact.slice(index2 + 1)];
        setIsContact(temp2);
        let index3 = contacts.indexOf(profileObj);
        console.log(`exists at index: `, index3)
    }

    const userObj =     {
        newsArticles: [
            { 
                title: "Winning at Life!",
                article: "There are many ways to do so...but the best is just try, try, try again!"
            },
            { 
                title: "Woh He Died Way Too Early!",
                article: "He was only 107 years old! How can this be? It was on a Saturday afternoon...!"
            },
            { 
                title: "Take Your Time! Eating Slowly Boosts Bone Growth!",
                article: "Scientists say there is a chance that bones will grow faster if you eat slower, probably!"
            },
            { 
                title: "Train Almost Hits Man!",
                article: "A runwaway train last Thursday almost landed on a man's house while speeding through the mountainside, cops say!"
            },
            { 
                title: "Avoid these Seven Pitfalls!",
                article: "If you want to beat the game of life, E-gamers suggest hitting ctrl+alt+F7+....!"
            }
        ],
        userProfiles: [
            {
                id: 1,
                firstName: "Willie",
                lastName: "Dustice",
                birthday: "01/01/1978 00:00:00",
                profileImage: "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-For-Youtube.jpg"
            },
            {
                id: 2,
                firstName: "Coolio",
                lastName: "Cool-Jay",
                birthday: "11/16/1986 00:00:00",
                profileImage: "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Picture-HD.jpg"
            },
            {
                id: 3,
                firstName: "Scoobie",
                lastName: "Doobie",
                birthday: "09/21/1945 00:00:00",
                profileImage: "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg"
            },
            {
                id: 4,
                firstName: "Spellbee",
                lastName: "Spellman",
                birthday: "04/04/1994 00:00:00",
                profileImage: "https://bestprofilepictures.com/wp-content/uploads/2021/04/Awesome-Profile-Pic.jpg"
            }]
    };

    // useEffect(() => {
    //     let isMounted = true
    //     setProfilesList(userObj.userProfiles);
    //     setArticlesList(userObj.newsArticles);
    // }, []);

    let profilesList = userObj.userProfiles;
    const articlesList = userObj.newsArticles;

    const valueObj = {
        userObj,
        profilesList, 
        // setProfilesList, 
        articlesList, 
        // setArticlesList,
        contacts, 
        setContacts,
        isContact, 
        setIsContact,
        addContact, 
        removeContact
    };

    return (
        <div className="App-provider">
            <AppContext.Provider value={valueObj}>
                {children}
            </AppContext.Provider>
        </div>
    );
}

export default AppProvider;
