import { useState } from 'react';
import style from './Questions.module.css';
import plus from './q.img/plus.png';
import x from './q.img/x.png';


export function Questions(props) {
    const [show0, setShow0] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);


    function hide0() {
        if(show0===false) {
            setShow0(true)
        }
        if(show0===true) {
            setShow0(false)
        }}
        function hide1() {
        if(show1===false) {
            setShow1(true)
        }
        if(show1===true) {
            setShow1(false)
        }}
        function hide2() {
        if(show2===false) {
            setShow2(true)
        }
        if(show2===true) {
            setShow2(false)
        }}
        function hide3() {
        if(show3===false) {
            setShow3(true)
        }
        if(show3===true) {
            setShow3(false)
        }}
        function hide4() {
        if(show4===false) {
            setShow4(true)
        }
        if(show4===true) {
            setShow4(false)
        }}
        function hide5() {
        if(show5===false) {
            setShow5(true)
        }
        if(show5===true) {
            setShow5(false)
        }}
        function hide6() {
        if(show6===false) {
            setShow6(true)
        }
        if(show6===true) {
            setShow6(false)
        }}


    
    return <>
    <h2>Frequently Asked Questions</h2>

   <section className={style.container}>
    <div  className={style.questionContainer}>
        <button onClick={() => hide0()} className={style.question}>What is Netflix?
            <img style={show0===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
            <img style={show0===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
        </button>
        <p style={show0===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br /><br />You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
    </div>

    <div className={style.questionContainer}>
        <button onClick={() => hide1()} className={style.question}>How much does Netflix cost?
            <img style={show1===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
            <img style={show1===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
        </button>
        <p style={show1===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month. No extra costs, no contracts.</p>
    </div>

    <div className={style.questionContainer}>
        <button onClick={() => hide2()} className={style.question}>Where can I watch?
            <img style={show2===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
            <img style={show2===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
        </button>
        <p style={show2===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br /><br />You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
    </div>

    <div className={style.questionContainer}>
        <button onClick={() => hide3()} className={style.question}>How do I cancel?
            <img style={show3===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
            <img style={show3===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
        </button>
        <p style={show3===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
    </div>

    <div className={style.questionContainer}>
        <button onClick={() => hide4()} className={style.question}>What can I watch on Netflix?
            <img style={show4===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
            <img style={show4===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
        </button>
        <p style={show4===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
    </div>

    <div className={style.questionContainer}>
        <button onClick={() => hide5()} className={style.question}>Is Netflix good for kids?
            <img style={show5===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
            <img style={show5===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
        </button>
        <p style={show5===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. <br /> <br /> Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
    </div>

    <div className={style.questionContainer}>
        <button onClick={() => hide6()} className={style.question}>
           Why am I seeing this language?
            <img style={show6===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
            <img style={show6===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
        </button>
        <p style={show6===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Your browser preferences determine the language shown here.</p>
    </div>



   </section>


    
    </>
}