import React, { useState, useEffect, useRef } from "react";
import "./diseño.css";
import { Form, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import html2canvas from "html2canvas";



function Diseño() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [text1, setText1] = useState("Text 1");
    const [text2, setText2] = useState("Text 2");
    const [text1FontSize, setText1FontSixe] = useState("18px");
    const [text2FontSize, setText2FontSixe] = useState("18px");
    const [colorText1, setColorText1] = useState("grey");
    const [colorText2, setColorText2] = useState("grey");
    const [positionText1, setPositionText1] = useState("horizontal");
    const [positionText2, setPositionText2] = useState("horizontal");
    const [image, setImage] = useState("http://via.placeholder.com/400x300");
    const [fileList, setFileList] = useState([]);
    const [input, setInput] = useState({
        img: [],
    });

    const arrayFontSize = ["Selecciona el tamaño", "16px", "18px", "20px", "22px", "24px", "26px", "28px", "30px",
        "32px", "34px", "36px", "38px", "40px", "42px", "44px", "46px", "48px", "50px", "52px", "54px", "56px"];
    const arrayColorText = ["white", "black", "grey", "blue", "red"];

    const texto1Agregar = () => {

        const texto1 = document.getElementById("texto-1");

        texto1.style.display = "flex";

    };

    const texto2Agregar = () => {

        const texto2 = document.getElementById("texto-2");

        texto2.style.display = "flex";

    };

    const texto1Girar = () => {

        const text1 = document.getElementById("texto-1");

        if (positionText1 === "vertical") {

            text1.style.writingMode = "horizontal-tb";

            setPositionText1("horizontal")

        } else {

            text1.style.writingMode = "vertical-rl";
            text1.style.textOrientation = "mixed";
            text1.style.whiteSpace = "nowrap";

            setPositionText1("vertical")

        }

    };

    const texto2Girar = () => {

        const text2 = document.getElementById("texto-2");

        if (positionText2 === "vertical") {

            text2.style.writingMode = "horizontal-tb";

            setPositionText2("horizontal")

        } else {

            text2.style.writingMode = "vertical-rl";
            text2.style.textOrientation = "mixed";
            text2.style.whiteSpace = "nowrap";

            setPositionText2("vertical")

        }

    };

    const onChangeText1 = (e) => {

        setText1(e.target.value)

    };

    const onChangeText2 = (e) => {
        setText2(e.target.value)
    };

    const onChangeSizeText1 = (e) => {
        setText1FontSixe(e.target.value)
    };

    const onChangeSizeText2 = (e) => {
        setText2FontSixe(e.target.value)
    };

    const onChangeColor1 = (e) => {
        setColorText1(e.target.value)
    };

    const onChangeColor2 = (e) => {
        setColorText2(e.target.value)
    };

    const onChangeStyleText1 = () => {

        const selectP1 = document.getElementById("select-family-p-1");
        const parrafo1 = document.getElementById("family-p-1");

        if (selectP1.value === "Georgia") {

            parrafo1.style.fontFamily = "Georgia";

        } else if (selectP1.value === "Gill Sans") {

            parrafo1.style.fontFamily = "Gill Sans";

        } else if (selectP1.value === "sans-serif") {

            parrafo1.style.fontFamily = "sans-serif";

        } else if (selectP1.value === "serif") {

            parrafo1.style.fontFamily = "serif";

        } else if (selectP1.value === "cursive") {

            parrafo1.style.fontFamily = "cursive";

        } else if (selectP1.value === "system-ui") {

            parrafo1.style.fontFamily = "system-ui";

        } else {

            parrafo1.style.fontFamily = "Georgia";

        }


    };

    const onChangeStyleText2 = () => {

        const selectP2 = document.getElementById("select-family-p-2");
        const parrafo2 = document.getElementById("family-p-2");

        parrafo2.style.fontFamily = "Georgia";

        if (selectP2.value === "Georgia") {

            parrafo2.style.fontFamily = "Georgia";

        } else if (selectP2.value === "Gill Sans") {

            parrafo2.style.fontFamily = "Gill Sans";

        } else if (selectP2.value === "sans-serif") {

            parrafo2.style.fontFamily = "sans-serif";

        } else if (selectP2.value === "serif") {

            parrafo2.style.fontFamily = "serif";

        } else if (selectP2.value === "cursive") {

            parrafo2.style.fontFamily = "cursive";

        } else if (selectP2.value === "system-ui") {

            parrafo2.style.fontFamily = "system-ui";

        } else {

            parrafo2.style.fontFamily = "Georgia";

        }

    };

    //-------------------------------------------------------------

    const boxRef = useRef(null);
    const constcontainerRef = useRef(null);
    const isClicked = useRef(false);
    const coords = useRef({
        starX: 0,
        starY: 0,
        lastX: 0,
        lastY: 0
    });

    useEffect(() => {
        if (!boxRef.current || !constcontainerRef.current) return;

        const box = boxRef.current;
        const container = constcontainerRef.current;

        const onMouseDown = (e = MouseEvent) => {
            isClicked.current = true;
            coords.current.starX = e.clientX;
            coords.current.starY = e.clientY;
        };

        const onMouseUp = (e = MouseEvent) => {
            isClicked.current = false;
            coords.current.lastX = box.offsetLeft;
            coords.current.lastY = box.offsetTop;
        };

        const onMouseMove = (e = MouseEvent) => {
            if (!isClicked.current) return;

            const nextX = e.clientX - coords.current.starX + coords.current.lastX;
            const nextY = e.clientY - coords.current.starY + coords.current.lastY;

            box.style.top = `${nextY}px`;
            box.style.left = `${nextX}px`;
        };

        box.addEventListener("mousedown", onMouseDown);
        box.addEventListener("mouseup", onMouseUp);
        container.addEventListener("mousemove", onMouseMove);
        container.addEventListener("mouseleave", onMouseUp);

        const cleanUp = () => {
            box.removeEventListener("mousedown", onMouseDown);
            box.removeEventListener("mouseup", onMouseUp);
            container.removeEventListener("mousemove", onMouseMove);
            container.removeEventListener("mouseleave", onMouseUp);
        };

        return cleanUp;

    }, []);

    //--------------------------------------------

    const boxRef2 = useRef(null);
    const constcontainerRef2 = useRef(null);
    const isClicked2 = useRef(false);
    const coords2 = useRef({
        starX: 0,
        starY: 0,
        lastX: 0,
        lastY: 0
    });

    useEffect(() => {
        if (!boxRef2.current || !constcontainerRef2.current) return;

        const box2 = boxRef2.current;
        const container2 = constcontainerRef2.current;

        const onMouseDown2 = (e = MouseEvent) => {
            isClicked2.current = true;
            coords2.current.starX = e.clientX;
            coords2.current.starY = e.clientY;
        };

        const onMouseUp2 = (e = MouseEvent) => {
            isClicked2.current = false;
            coords2.current.lastX = box2.offsetLeft;
            coords2.current.lastY = box2.offsetTop;
        };

        const onMouseMove2 = (e = MouseEvent) => {
            if (!isClicked2.current) return;

            const nextX2 = e.clientX - coords2.current.starX + coords2.current.lastX;
            const nextY2 = e.clientY - coords2.current.starY + coords2.current.lastY;

            box2.style.top = `${nextY2}px`;
            box2.style.left = `${nextX2}px`;
        };

        box2.addEventListener("mousedown", onMouseDown2);
        box2.addEventListener("mouseup", onMouseUp2);
        container2.addEventListener("mousemove", onMouseMove2);
        container2.addEventListener("mouseleave", onMouseUp2);

        const cleanUp2 = () => {
            box2.removeEventListener("mousedown", onMouseDown2);
            box2.removeEventListener("mouseup", onMouseUp2);
            container2.removeEventListener("mousemove", onMouseMove2);
            container2.removeEventListener("mouseleave", onMouseUp2);
        };

        return cleanUp2;

    }, []);

    // ---------------------------------------------------------------------------

    const boxRef3 = useRef(null);
    const constcontainerRef3 = useRef(null);
    const isClicked3 = useRef(false);
    const coords3 = useRef({
        starX: 0,
        starY: 0,
        lastX: 0,
        lastY: 0
    });

    useEffect(() => {
        if (!boxRef3.current || !constcontainerRef3.current) return;

        const box3 = boxRef3.current;
        const container3 = constcontainerRef3.current;

        const onMouseDown3 = (e = MouseEvent) => {
            isClicked3.current = true;
            coords3.current.starX = e.clientX;
            coords3.current.starY = e.clientY;
        };

        const onMouseUp3 = (e = MouseEvent) => {
            isClicked3.current = false;
            coords3.current.lastX = box3.offsetLeft;
            coords3.current.lastY = box3.offsetTop;
        };

        const onMouseMove3 = (e = MouseEvent) => {
            if (!isClicked3.current) return;

            const nextX3 = e.clientX - coords3.current.starX + coords3.current.lastX;
            const nextY3 = e.clientY - coords3.current.starY + coords3.current.lastY;

            box3.style.top = `${nextY3}px`;
            box3.style.left = `${nextX3}px`;
        };

        box3.addEventListener("mousedown", onMouseDown3);
        box3.addEventListener("mouseup", onMouseUp3);
        container3.addEventListener("mousemove", onMouseMove3);
        container3.addEventListener("mouseleave", onMouseUp3);

        const cleanUp3 = () => {
            box3.removeEventListener("mousedown", onMouseDown3);
            box3.removeEventListener("mouseup", onMouseUp3);
            container3.removeEventListener("mousemove", onMouseMove3);
            container3.removeEventListener("mouseleave", onMouseUp3);
        };

        return cleanUp3;

    }, []);

    // ------------------------------------------------------------------

    const onChangeInputImage = (e) => {
        setFileList(e.fileList);
    };

    const handleFileListChange = ({ fileList }) => {
        setFileList(fileList);
        setInput(
            {
                ...input,
                img: [...fileList]
            }
        );
    };

    const handleSubmitImage = (e) => {

        if (input.img.length === 0) {

            Swal.fire({
                title: "Error!",
                text: 'Debes cargar la imagen',
                icon: "error",
                confirmButtonText: 'Ok',
                customClass: {
                    confirmButton: "swalButton"
                }
            })

        } else if (!input.img[0].thumbUrl) {

            Swal.fire({
                title: "Error!",
                text: 'La imagen ya existe, cargar otra',
                icon: "error",
                confirmButtonText: 'Ok',
                customClass: {
                    confirmButton: "swalButton"
                }
            })

        } else if (input.img.length > 1) {

            const length = input.img.length - 1;

            setInput(
                {
                    ...input,
                    img: [input.img[length].thumbUrl]
                }
            );
            setImage(input.img[length].thumbUrl)

        } else {

            setInput(
                {
                    ...input,
                    img: [input.img[0].thumbUrl]
                }
            );
            setImage(input.img[0].thumbUrl)

        }

    };

    const imgCheck = () => {

        const imgDiv = document.getElementById("img-check");

        imgDiv.style.display = "flex";

    };

    const imgCheck2 = () => {

        const imgDiv = document.getElementById("img-check");

        imgDiv.style.display = "none";

    };

    const onChangeSizeImg = () => {

        const selectSize = document.getElementById("selcet-img-size");
        const imgSize = document.getElementById("img-size");

        console.log(imgSize);

        if (selectSize.value === "50 x 50") {

            imgSize.style.width = "50px";

        } else if (selectSize.value === "100 x 100") {

            imgSize.style.width = "100px";

        } else if (selectSize.value === "150 x 150") {

            imgSize.style.width = "150px";

        } else if (selectSize.value === "200 x 200") {

            imgSize.style.width = "200px";

        } else if (selectSize.value === "250 x 250") {

            imgSize.style.width = "250px";

        } else if (selectSize.value === "300 x 300") {

            imgSize.style.width = "300px";

        } else if (selectSize.value === "400 x 400") {

            imgSize.style.width = "400px";

        }

    };

    const redondearImg = () => {

        const imgSize = document.getElementById("img-size");

        imgSize.style.borderRadius = "100px"

    };

    const goBack = () => {

        window.location.reload();
    };


    // -------------------------- color t-shirt ------------------------------

    const colorWhite = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "white";

    };

    const colorBlue = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "blue";

    };

    const colorBlack = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "black";

    };

    const colorRed = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "red";

    };

    const colorYellow = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "yellow";

    };

    const colorGreen = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "green";

    };

    const colorGray = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "gray";

    };

    const colorPurpule = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "purpule";

    };

    const colorOrange = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "orange";

    };

    const colorViolet = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "violet";

    };


    // ----------------------------------- Canvas -------------------------------------------------------

    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {

        const canvas = canvasRef.current;
        canvas.width = 1400;
        canvas.height = 1400;

        const context = canvas.getContext("2d");
        context.scale(2, 2);
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        contextRef.current = context;


    }, []);

    const startDrawing = ({ nativeEvent }) => {

        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);

    };

    const finishDrawing = () => {

        contextRef.current.closePath();
        setIsDrawing(false);

    };

    const draw = ({ nativeEvent }) => {

        if (!isDrawing) {
            return
        }

        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();

    };

    const onChangeSizePincel = (e) => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        console.log(e.target.value)

        if (e.target.value === "5") {
            context.lineWidth = 5;
        }

        if (e.target.value === "7") {
            context.lineWidth = 7;
        }

        if (e.target.value === "9") {
            context.lineWidth = 9;
        }

        if (e.target.value === "11") {
            context.lineWidth = 11;
        }

        if (e.target.value === "13") {
            context.lineWidth = 13;
        }

        if (e.target.value === "15") {
            context.lineWidth = 15;
        }

        if (e.target.value === "17") {
            context.lineWidth = 17;
        }

        if (e.target.value === "19") {
            context.lineWidth = 19;
        }

        if (e.target.value === "21") {
            context.lineWidth = 21;
        }

        if (e.target.value === "23") {
            context.lineWidth = 23;
        }

        if (e.target.value === "25") {
            context.lineWidth = 25;
        }

    };

    const comoMoverImg = () => {

        Swal.fire({
            title: 'Informacion',
            text: 'Para mover la imagen preciona la imagen y mueve levemente, luego suelta el click y continua moviendo suavemente',
            icon: "info",
            confirmButtonText: 'Ok',
            customClass: {
                confirmButton: "swalButton"
            }
        })

    };

    function guardarContenido() {

        html2canvas(document.getElementById("myDiv")).then(function (canvas) {
            // Crea un elemento de enlace para descargar la imagen
            var link = document.createElement("a");
            document.body.appendChild(link);
            link.download = "diseñoMeyBlaks.png";
            link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            link.click();
            document.body.removeChild(link);
        });

    };

    return (

        <div className="body-diseños">

            <div className="container py-5">

                <div className="row-diseño">

                    <div className="col-lg-8 display">

                        <h1>Primero pintar luego agregar texto y imagen</h1>
                        <h4>El diseño solo en PC</h4>

                        <div id="myDiv">

                            <div className="card card-content" ref={constcontainerRef2}>

                                <div className="memeText" id="img-check" ref={constcontainerRef}>

                                    <div className="box" ref={boxRef}>
                                        <img
                                            id="img-size"
                                            src={image}
                                            alt="meme-text"
                                        />
                                    </div>

                                </div>

                                <div className="memeText1" id="texto-1" ref={constcontainerRef3}>

                                    <div className="box" ref={boxRef3}>
                                        <p id="family-p-1" style={{ fontSize: text1FontSize, color: colorText1 }}>{text1}</p>
                                    </div>

                                </div>

                                <div className="memeText2" id="texto-2" ref={constcontainerRef2}>

                                    <div className="box" ref={boxRef2}>
                                        <p id="family-p-2" style={{ fontSize: text2FontSize, color: colorText2 }} >{text2}</p>
                                    </div>

                                </div>

                                <canvas
                                    className="canvas-draw-6"
                                    onMouseDown={startDrawing}
                                    onMouseUp={finishDrawing}
                                    onMouseMove={draw}
                                    ref={canvasRef}
                                >

                                </canvas>

                            </div>

                        </div>

                        <div className="color-body">

                            <div className="color-container">

                                <button className="color-tshirt-white" style={{ background: "white" }} onClick={colorWhite}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "black" }} onClick={colorBlack}></button>
                                <button className="color-tshirt" style={{ background: "red" }} onClick={colorRed}></button>
                                <button className="color-tshirt" style={{ background: "yellow" }} onClick={colorYellow}></button>
                                <button className="color-tshirt" style={{ background: "green" }} onClick={colorGreen}></button>
                                <button className="color-tshirt" style={{ background: "gray" }} onClick={colorGray}></button>
                                <button className="color-tshirt" style={{ background: "purpule" }} onClick={colorPurpule}></button>
                                <button className="color-tshirt" style={{ background: "orange" }} onClick={colorOrange}></button>
                                <button className="color-tshirt" style={{ background: "violet" }} onClick={colorViolet}></button>

                            </div>

                            <div className="color-container">

                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>

                            </div>

                            <div className="color-container">

                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>
                                <button className="color-tshirt" style={{ background: "blue" }} onClick={colorBlue}></button>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-4 settings">
                        <div className="card bg-ligth container">

                            <h3 className="text-center">Settings</h3>

                            <h4>Tamaño del pincel</h4>

                            <select className="form-select form-control-sm mb-2" onChange={(e) => onChangeSizePincel(e)}>
                                <option>Selecciona el tamaño</option>
                                <option>5</option>
                                <option>7</option>
                                <option>9</option>
                                <option>11</option>
                                <option>13</option>
                                <option>15</option>
                                <option>17</option>
                                <option>19</option>
                                <option>21</option>
                                <option>23</option>
                                <option>25</option>
                            </select>

                            <hr />

                            <h4>Escribi el texto</h4>

                            <input type="text" className="form-control form-control-sm mb-2" placeholder="Text 1" onChange={onChangeText1} />
                            <button className="btn btn-primary btn-sm mb-2" onClick={texto1Agregar}>Agregar Texto 1</button>
                            <button className="btn btn-primary btn-sm mb-2" onClick={texto1Girar}>Girar Texto 1</button>

                            <input type="text" className="form-control form-control-sm mb-2" placeholder="Text 2" onChange={onChangeText2} />
                            <button className="btn btn-primary btn-sm mb-2" onClick={texto2Agregar}>Agregar Texto 2</button>
                            <button className="btn btn-primary btn-sm mb-2" onClick={texto2Girar}>Girar Texto 2</button>

                            <hr />

                            <h4>Selecciona la Img</h4>
                            <div className="fomr-group">

                                <Form >

                                    <Form.Item label="Cargar" valuePropName="fileList"
                                        initialValue={fileList[0]}
                                        name="upload"
                                        getValueFromEvent={handleFileListChange}
                                        size={10}
                                    >
                                        <Upload
                                            action="/upload.do"
                                            listType="picture-card"
                                            onChange={(e) => { onChangeInputImage(e) }}
                                        >

                                            <div>
                                                <PlusOutlined />
                                                <div
                                                    style={{
                                                        marginTop: 8,
                                                    }}
                                                >
                                                    Imagen
                                                </div>
                                            </div>
                                        </Upload>

                                        {/* <input type='file' onChange={agregarFoto} /> */}

                                    </Form.Item>

                                    <button className="btn btn-primary btn-sm mb-2" onClick={handleSubmitImage}>Subir Imagen</button>

                                </Form >

                                <div>
                                    <button className="btn btn-primary btn-sm mb-2" onClick={imgCheck}>Agregar Imagen</button>
                                </div>

                                <div>
                                    <button className="btn btn-primary btn-sm mb-2" onClick={imgCheck2}>Borrar Imagen</button>
                                </div>

                                <div>
                                    <button className="btn btn-primary btn-sm mb-2" onClick={redondearImg}>Redondear Imagen</button>
                                </div>

                                <div>
                                    <button className="btn btn-primary btn-sm mb-2" onClick={comoMoverImg}>Como mover la Imagen?</button>
                                </div>

                            </div>

                            <hr />

                            <h4>Tamaño de la Img</h4>
                            <select id="selcet-img-size" className="form-select form-control-sm mb-2" onChange={onChangeSizeImg}>
                                <option>Selecciona el tamaño</option>
                                <option>50 x 50</option>
                                <option>100 x 100</option>
                                <option>150 x 150</option>
                                <option>200 x 200</option>
                                <option>250 x 250</option>
                                <option>300 x 300</option>
                                <option>400 x 400</option>
                            </select>

                            <hr />

                            <h4>Tamaño del texto 1</h4>
                            <select className="form-select form-control-sm mb-2" onChange={onChangeSizeText1}>
                                {arrayFontSize && arrayFontSize.map((size) => {
                                    return (
                                        <option>
                                            {size}
                                        </option>
                                    );
                                })}
                            </select>
                            <h4>Tamaño del texto 2</h4>
                            <select className="form-select form-control-sm mb-2" onChange={onChangeSizeText2}>
                                {arrayFontSize && arrayFontSize.map((size) => {
                                    return (
                                        <option>
                                            {size}
                                        </option>
                                    );
                                })}
                            </select>

                            <hr />

                            <h4>Color del texto 1</h4>
                            <select className="form-select form-control-sm mb-2" onChange={onChangeColor1}>
                                <option>Selecciona el color</option>
                                {arrayColorText && arrayColorText.map((color) => {
                                    return (
                                        <option>
                                            {color}
                                        </option>
                                    );
                                })}
                            </select>
                            <h4>Color del texto 2</h4>
                            <select className="form-select form-control-sm mb-2" onChange={onChangeColor2}>
                                <option>Selecciona el color</option>
                                {arrayColorText && arrayColorText.map((color) => {
                                    return (
                                        <option>
                                            {color}
                                        </option>
                                    );
                                })}
                            </select>

                            <hr />
                            <h4>Estilo del texto 1</h4>
                            <select id="select-family-p-1" className="form-select form-control-sm mb-2" onChange={onChangeStyleText1}>
                                <option>Selecciona el estilo</option>
                                <option>Georgia</option>
                                <option>Gill Sans</option>
                                <option>sans-serif</option>
                                <option>serif</option>
                                <option>cursive</option>
                                <option>system-ui</option>

                            </select>
                            <h4>Estilo del texto 2</h4>
                            <select id="select-family-p-2" className="form-select form-control-sm mb-2" onChange={onChangeStyleText2}>
                                <option>Selecciona el estilo</option>
                                <option>Georgia</option>
                                <option>Gill Sans</option>
                                <option>sans-serif</option>
                                <option>serif</option>
                                <option>cursive</option>
                                <option>system-ui</option>
                            </select>

                            <hr />

                            <button onClick={guardarContenido} className="btn btn-primary btn-sm mb-2">Save</button>

                            <button className="btn btn-primary btn-sm mb-2" onClick={goBack}> &larr; Atras</button>

                        </div>
                    </div>

                </div>

            </div >

        </div >

    );

};

export default Diseño;