import { useEffect, useState, useMemo } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
    const [username, setUsername] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [stop, setStop] = useState(false);
    const [total, setTotal] = useState("0 point");

    const data = [
        {
            id:1,
            question: "Sắp xếp các số 0, 5, 2, 10 theo thứ tự từ bé đến lớn",
            answer: [
                {
                    text: "A. 2, 0, 10, 5",
                    correct: false
                },
                {
                    text: "B. 2, 5, 0, 10",
                    correct: false
                },
                {
                    text: "C. 0, 2, 5, 10",
                    correct: true
                },
                {
                    text: "D. 10, 5, 2, 0",
                    correct: false
                },
            ],
        },
        {
            id:2,
            question: "Phép tính nào sai?",
            answer: [
                {
                    text: "A. 7 - 5 = 2",
                    correct: false
                },
                {
                    text: "B. 4 + 4 = 9",
                    correct: true
                },
                {
                    text: "C. 10 - 9 = 1",
                    correct: false
                },
                {
                    text: "D. 0 + 0 = 0",
                    correct: false
                },
            ],
        },
        {
            id:3,
            question: "Có mấy số có 1 chữ số",
            answer: [
                {
                    text: "A. 10",
                    correct: true
                },
                {
                    text: "B. 11",
                    correct: false
                },
                {
                    text: "C. 9",
                    correct: false
                },
                {
                    text: "D. 8",
                    correct: false
                },
            ],
        },
        {
            id:4,
            question: "Kết quả của phép tính: 10 - 8 + 3 - 2 = ?",
            answer: [
                {
                    text: "A. 1",
                    correct: false
                },
                {
                    text: "B. 2",
                    correct: false
                },
                {
                    text: "C. 3",
                    correct: true
                },
                {
                    text: "D. 5",
                    correct: false
                },
            ],
        },
        {
            id:5,
            question: "Hiệu của hai số 73 và 37",
            answer: [
                {
                    text: "A. 46",
                    correct: false
                },
                {
                    text: "B. 35",
                    correct: false
                },
                {
                    text: "C. 47",
                    correct: false
                },
                {
                    text: "D. 36",
                    correct: true
                },
            ],
        },
        {
            id:6,
            question: "Hồng có 22 quyển truyện tranh. Lan lấy bớt của Hồng 5 quyển. Số truyện còn lại của Hồng là: ",
            answer: [
                {
                    text: "A. 27",
                    correct: false
                },
                {
                    text: "B. 17",
                    correct: true
                },
                {
                    text: "C. 22",
                    correct: false
                },
                {
                    text: "D. 15",
                    correct: false
                },
            ],
        },
        {
            id:7,
            question: "Điền số thích hợp vào chỗ trống: 60 cm = ......dm",
            answer: [
                {
                    text: "A. 6 dm",
                    correct: false
                },
                {
                    text: "B. 6",
                    correct: true
                },
                {
                    text: "C. 60",
                    correct: false
                },
                {
                    text: "D. 6 cm",
                    correct: false
                },
            ],
        },
        {
            id:8,
            question: "Trong một ngày, cửa hàng bán được 56 kg đường, trong đó buổi sáng bán được 27kg. Hỏi buổi chiều bán được bao nhiêu kg đường?",
            answer: [
                {
                    text: "A. 83",
                    correct: false
                },
                {
                    text: "B. 39",
                    correct: false
                },
                {
                    text: "C. 29",
                    correct: true
                },
                {
                    text: "D. 43",
                    correct: false
                },
            ],
        },
        {
            id:9,
            question: "Trong các số dưới đây, số nào không thuộc dãy số: 1, 4, 7, 10, 13,...",
            answer: [
                {
                    text: "A. 1000",
                    correct: false
                },
                {
                    text: "B. 1234",
                    correct: false
                },
                {
                    text: "C. 2007",
                    correct: true
                },
                {
                    text: "D. 100",
                    correct: false
                },
            ],
        },
        {
            id:10,
            question: "Dùng 4 chữ số lẻ: 1, 3, 5, 7 để viết tất cả các số có 4 chữ số khác nhau thì viết được bao nhiêu số",
            answer: [
                {
                    text: "A. 24",
                    correct: true
                },
                {
                    text: "B. 30",
                    correct: false
                },
                {
                    text: "C. 18",
                    correct: false
                },
                {
                    text: "D. 12",
                    correct: false
                },
            ],
        },
        {
            id:11,
            question: "Một cửa hàng trong hai ngày bán được 620 kg gạo. Hỏi trong 7 ngày cửa hàng bán được bao nhiêu kg gạo? (Biết rằng số gạo mỗi ngày bán được là như nhau).",
            answer: [
                {
                    text: "A. 4340 kg",
                    correct: false
                },
                {
                    text: "B. 434 kg",
                    correct: false
                },
                {
                    text: "C. 217 kg",
                    correct: false
                },
                {
                    text: "D. 2170 kg",
                    correct: true
                },
            ],
        },
        {
            id:12,
            question: "Mỗi bao gạo nặng 3 tạ, một ô tô chở 9 tấn gạo. Hỏi chở được bao nhiêu bao gạo?",
            answer: [
                {
                    text: "A. 90 bao",
                    correct: false
                },
                {
                    text: "B. 900 bao",
                    correct: false
                },
                {
                    text: "C. 30 bao",
                    correct: true
                },
                {
                    text: "D. 270 bao",
                    correct: false
                },
            ],
        },
        {
            id:13,
            question: "Một người đi xe máy trong 1/5 phút được 324 mét. Hỏi trong 1 giây, người ấy đi được bao nhiêu mét",
            answer: [
                {
                    text: "A. 27",
                    correct: true
                },
                {
                    text: "B. 12",
                    correct: false
                },
                {
                    text: "C. 38",
                    correct: false
                },
                {
                    text: "D. 270",
                    correct: false
                },
            ],
        },
        {
            id:14,
            question: "Phát biểu nào sau đây là đúng?",
            answer: [
                {
                    text: "A. Góc nhọn lớn hơn góc vuông",
                    correct: false
                },
                {
                    text: "B. Góc bẹt nhỏ hơn góc tù",
                    correct: false
                },
                {
                    text: "C. Góc tù lớn hơn góc vuông",
                    correct: true
                },
                {
                    text: "D. Góc nhọn lớn hơn góc tù",
                    correct: false
                },
            ],
        },
        {
            id:15,
            question: "Tính nhanh: (2003 – 123 x 8 : 4) x (36 : 6 – 6)",
            answer: [
                {
                    text: "A. 0",
                    correct: true
                },
                {
                    text: "B. 1",
                    correct: false
                },
                {
                    text: "C. 2",
                    correct: false
                },
                {
                    text: "D. 3",
                    correct: false
                },
            ],
        },

    ];
    
    const pointPyramid = useMemo(
        () =>
          [
            { id: 1, amount: "5 point" },
            { id: 2, amount: "10 point" },
            { id: 3, amount: "15 point" },
            { id: 4, amount: "20 point" },
            { id: 5, amount: "30 point" },
            { id: 6, amount: "40 point" },
            { id: 7, amount: "50 point" },
            { id: 8, amount: "60 point" },
            { id: 9, amount: "75 point" },
            { id: 10, amount: "90 point" },
            { id: 11, amount: "110 point" },
            { id: 12, amount: "130 point" },
            { id: 13, amount: "150 point" },
            { id: 14, amount: "170 point" },
            { id: 15, amount: "200 point" },
          ].reverse(),
        []
      );
        

    useEffect(()=>{
        questionNumber > 1 && 
            setTotal(pointPyramid.find(m=> m.id === questionNumber-1).amount);
    },[pointPyramid, questionNumber])

    return (
        <div className="app">
            {username ? (
                <>
                    <div className="main">
                        {stop ? <h1 className="endText">Your Total Score: {total}</h1> : (
                    <>  
                        <div className="top">
                            <div className="timer">
                                <Timer setStop={setStop} questionNumber={questionNumber}/>
                            </div>
                        </div>
                        <div className="bottom">
                            <Trivia 
                                data={data} 
                                setStop={setStop}
                                questionNumber = {questionNumber}
                                setQuestionNumber={setQuestionNumber}
                            />
                        </div>
                    </>
                    )}
                    </div>
                    <div className="pyramid">
                        <ul className="pointList">
                            {pointPyramid.map(m=>(
                                <li className={questionNumber === m.id ? "pointListItem active" : "pointListItem"}>
                                    <span className="pointListItemNumber">{m.id}</span>
                                    <span className="pointListItemAmount">{m.amount}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
            <Start setUsername={setUsername}/> 
            )}
        </div>
    );
}

export default App;
