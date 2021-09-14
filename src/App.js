import Header from "./Header";
import SubjectMenu from "./SubjectMenu";
import {useState} from "react";

function App() {

    let currentDate = new Date()
    let lastAppUpdate = localStorage['lastAppUpdate'] == null ? JSON.parse('[]') : JSON.parse(localStorage['lastAppUpdate'])
    if (lastAppUpdate.length == 0 || lastAppUpdate[2] != currentDate.getFullYear() || lastAppUpdate[1] != currentDate.getMonth() || lastAppUpdate[0] != currentDate.getDate()){
        let newDate = []
        newDate.push(currentDate.getDate())
        newDate.push(currentDate.getMonth())
        newDate.push(currentDate.getFullYear())
        localStorage['lastAppUpdate'] = JSON.stringify(newDate)
        window.location.reload(true)
    }

    if (localStorage['subjects'] == null) {
        localStorage['subjects'] = JSON.stringify([])
        localStorage['posts'] = JSON.stringify([])
    }

    const [selectedSubject, editSelectedSubject] = useState(-1)

    return (
        <div className="container">
            <Header/>
            <SubjectMenu selectedSubject={selectedSubject} editSelectedSubject={editSelectedSubject} />
        </div>
    );
}

export default App;
