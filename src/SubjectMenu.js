import "./SubjectMenu.css"
import {useEffect, useState} from "react";
import Slide from "react-reveal/Slide";
import AddSubjectModal from "./AddSubjectModal";

function SubjectMenu(props) {

    const [modalVisible, setModalVisible] = useState(false)
    let subjects = JSON.parse(localStorage['subjects'])
    let renderedSubjects

    function switchModal() {
        setModalVisible(true)
    }

    function selectSubject(s){
        props.editSelectedSubject(s)
    }

    renderedSubjects = subjects.map((s, i) => {
        return (
            <Slide right key={s.toString()}>
                <div className="card grey lighten-5 blue-text hoverable valign-wrapper" onClick={()=>{selectSubject(i)}}>
                    <div className={`card-content center-align truncate ${props.selectedSubject == i ? 'active' : ''}`}>
                        {s}
                    </div>
                </div>
            </Slide>
        )
    })

    return (
        <div>
            <AddSubjectModal visible={modalVisible} changeVisibility={setModalVisible}/>
            <div className="row left-align subjects-band">
                <Slide right>
                    <div className="card blue white-text hoverable valign-wrapper" onClick={switchModal}>
                        <div className="card-content center-align">
                            <i className="material-icons medium white-text">add</i>
                        </div>
                    </div>
                </Slide>
                {renderedSubjects}
            </div>
        </div>
    )
}

export default SubjectMenu