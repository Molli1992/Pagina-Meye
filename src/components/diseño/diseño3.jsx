import React, { useState, useEffect, createContext, useMemo, useRef } from "react";
import "./diseño.css";
import { Input } from 'antd';
import { useLocation } from 'react-router-dom';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

import '../prueba/prueba.css';
import { Button, Modal } from 'antd'

import chombaFrenteBotonera from '../diseño/Assets/ChombaFrente/chombaFrenteBotonera.png';
import chombaFrenteContorno from '../diseño/Assets/ChombaFrente/chombaFrenteContorno.png';
import chombaFrenteCuello from '../diseño/Assets/ChombaFrente/chombaFrenteCuello.png';
import chombaFrenteInterior from '../diseño/Assets/ChombaFrente/chombaFrenteInterior.png';
import chombaFrenteMangas from '../diseño/Assets/ChombaFrente/chombaFrenteMangas.png';
import chombaFrentePuños from "../diseño/Assets/ChombaFrente/chombaFrentePuños.png"
import chombaFrenteTorso from '../diseño/Assets/ChombaFrente/chombaFrenteTorso.png';

import chombaDorsoContorno from "../diseño/Assets/ChombaDorso/chombaDorsoContorno.png"
import chombaDorsoCuello from "../diseño/Assets/ChombaDorso/chombaDorsoCuello.png"
import chombaDorsoMangas from "../diseño/Assets/ChombaDorso/chombaDorsoMangas.png"
import chombaDorsoPuños from "../diseño/Assets/ChombaDorso/chombaDorsoPuños.png"
import chombaDorsoTorso from "../diseño/Assets/ChombaDorso/chombaDorsoTorso.png"

const ReachableContext = createContext(null);
const UnreachableContext = createContext(null);

function Diseño() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [disabledButtons, setdisabledButtons] = useState(true);
    const [activeButtons, setActiveButtons] = useState([]);
    const [modal, contextHolder] = Modal.useModal();
    const [frente, setFrente] = useState(true);

    const [text1, setText1] = useState("Text 1");
    const [text2, setText2] = useState("Text 2");
    const [text3, setText3] = useState("Text 3");
    const [text4, setText4] = useState("Text 4");
    const [text1FontSize, setText1FontSixe] = useState("18px");
    const [text2FontSize, setText2FontSixe] = useState("18px");
    const [text3FontSize, setText3FontSixe] = useState("18px");
    const [text4FontSize, setText4FontSixe] = useState("18px");
    const [colorText1, setColorText1] = useState("black");
    const [colorText2, setColorText2] = useState("black");
    const [colorText3, setColorText3] = useState("black");
    const [colorText4, setColorText4] = useState("black");
    const [positionText1, setPositionText1] = useState("horizontal");
    const [positionText2, setPositionText2] = useState("horizontal");
    const [positionText3, setPositionText3] = useState("vertical");
    const [positionText4, setPositionText4] = useState("vertical");

    const arrayFontSize = ["Selecciona el tamaño", "6px", "8px", "10px", "12px", "14px", "16px", "18px", "20px", "22px", "24px", "26px", "28px", "30px",
        "32px", "34px", "36px", "38px", "40px", "42px", "44px", "46px", "48px", "50px", "52px", "54px", "56px"];
    const arrayColorText = ["white", "black", "grey", "blue", "red", "yellow", "green", "pink", "brown"];

    const texto1Agregar = () => {

        const texto1 = document.getElementById("texto-1");

        texto1.style.display = "flex";

    };

    const texto2Agregar = () => {

        const texto2 = document.getElementById("texto-2");

        texto2.style.display = "flex";

    };

    const texto3Agregar = () => {

        const texto1 = document.getElementById("texto-3");

        texto1.style.display = "flex";

    };

    const texto4Agregar = () => {

        const texto2 = document.getElementById("texto-4");

        texto2.style.display = "flex";

    };

    const onChangeText1 = (e) => {

        setText1(e.target.value)

    };

    const onChangeText2 = (e) => {
        setText2(e.target.value)
    };

    const onChangeText3 = (e) => {

        setText3(e.target.value)

    };

    const onChangeText4 = (e) => {
        setText4(e.target.value)
    };

    const onChangeSizeText1 = (e) => {
        setText1FontSixe(e.target.value)
    };

    const onChangeSizeText2 = (e) => {
        setText2FontSixe(e.target.value)
    };

    const onChangeSizeText3 = (e) => {
        setText3FontSixe(e.target.value)
    };

    const onChangeSizeText4 = (e) => {
        setText4FontSixe(e.target.value)
    };

    const onChangeColor1 = (e) => {
        setColorText1(e.target.value)
    };

    const onChangeColor2 = (e) => {
        setColorText2(e.target.value)
    };

    const onChangeColor3 = (e) => {
        setColorText3(e.target.value)
    };

    const onChangeColor4 = (e) => {
        setColorText4(e.target.value)
    };

    /*
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
    */

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

        const text1 = document.getElementById("texto-2");

        if (positionText2 === "vertical") {

            text1.style.writingMode = "horizontal-tb";

            setPositionText2("horizontal")

        } else {

            text1.style.writingMode = "vertical-rl";
            text1.style.textOrientation = "mixed";
            text1.style.whiteSpace = "nowrap";

            setPositionText2("vertical")

        }

    };

    const texto3Girar = () => {

        const text1 = document.getElementById("texto-3");

        if (positionText3 === "vertical") {

            text1.style.writingMode = "horizontal-tb";

            setPositionText3("horizontal")

        } else {

            text1.style.writingMode = "vertical-rl";
            text1.style.textOrientation = "mixed";
            text1.style.whiteSpace = "nowrap";

            setPositionText3("vertical")

        }

    };

    const texto4Girar = () => {

        const text1 = document.getElementById("texto-4");

        if (positionText4 === "vertical") {

            text1.style.writingMode = "horizontal-tb";

            setPositionText4("horizontal")

        } else {

            text1.style.writingMode = "vertical-rl";
            text1.style.textOrientation = "mixed";
            text1.style.whiteSpace = "nowrap";

            setPositionText4("vertical")

        }

    };

    function guardarContenido() {

        var myDiv = document.getElementById("myDiv");

        domtoimage.toBlob(myDiv)
            .then(function (blob) {
                saveAs(blob, "diseñoMeyBlaks.png");
            })
            .catch(function (error) {
                console.error("Error al guardar la imagen:", error);
            });

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

    // ---------------------------------------------------------------------------

    const boxRef4 = useRef(null);
    const constcontainerRef4 = useRef(null);
    const isClicked4 = useRef(false);
    const coords4 = useRef({
        starX: 0,
        starY: 0,
        lastX: 0,
        lastY: 0
    });

    useEffect(() => {
        if (!boxRef4.current || !constcontainerRef4.current) return;

        const box4 = boxRef4.current;
        const container4 = constcontainerRef4.current;

        const onMouseDown4 = (e = MouseEvent) => {
            isClicked4.current = true;
            coords4.current.starX = e.clientX;
            coords4.current.starY = e.clientY;
        };

        const onMouseUp4 = (e = MouseEvent) => {
            isClicked4.current = false;
            coords4.current.lastX = box4.offsetLeft;
            coords4.current.lastY = box4.offsetTop;
        };

        const onMouseMove4 = (e = MouseEvent) => {
            if (!isClicked4.current) return;

            const nextX4 = e.clientX - coords4.current.starX + coords4.current.lastX;
            const nextY4 = e.clientY - coords4.current.starY + coords4.current.lastY;

            box4.style.top = `${nextY4}px`;
            box4.style.left = `${nextX4}px`;
        };

        box4.addEventListener("mousedown", onMouseDown4);
        box4.addEventListener("mouseup", onMouseUp4);
        container4.addEventListener("mousemove", onMouseMove4);
        container4.addEventListener("mouseleave", onMouseUp4);

        const cleanUp4 = () => {
            box4.removeEventListener("mousedown", onMouseDown4);
            box4.removeEventListener("mouseup", onMouseUp4);
            container4.removeEventListener("mousemove", onMouseMove4);
            container4.removeEventListener("mouseleave", onMouseUp4);
        };

        return cleanUp4;

    }, []);

    // ------------------------------------------------------------------

    //----------------- CODIGO DYLAN ------------------//


    const images = useMemo(() => [
        chombaFrenteBotonera,
        chombaFrenteCuello,
        chombaFrenteInterior,
        chombaFrenteMangas,
        chombaFrentePuños,
        chombaFrenteTorso
    ], []);


    const imageNames = [
        'Botonera',
        'Cuello',
        'interior',
        'Mangas',
        'Puños',
        "Torso"
    ];



    const [selectedItem, setSelectedItem] = useState(chombaFrenteBotonera);
    const [imageColors, setImageColors] = useState({
        [chombaFrenteBotonera]: '#FFFFFF', // Color inicial para cada imagen: rojo
        [chombaFrenteCuello]: '#FFFFFF',
        [chombaFrenteInterior]: '#FFFFFF',
        [chombaFrenteMangas]: '#FFFFFF',
        [chombaFrentePuños]: '#FFFFFF',
        [chombaFrenteTorso]: '#FFFFFF',

    });


    const canvasRefs = useMemo(() => {
        const refs = {};
        images.forEach((image) => (refs[image] = React.createRef()));
        return refs;
    }, [images]);

    const handleImageChange = (image) => {
        setSelectedItem(image);
        setActiveButtons((prevActiveButtons) =>
            prevActiveButtons.includes(image)
                ? prevActiveButtons.filter((item) => item !== image)
                : [image]
        );
    };
    const handleColorChange = (event) => {
        setImageColors({
            ...imageColors,
            [selectedItem]: event.target.value,
        });
    };

    const images2 = useMemo(() => [
        chombaDorsoCuello,
        chombaDorsoMangas,
        chombaDorsoPuños,
        chombaDorsoTorso
    ], []);

    const imageNames2 = [
        'Cuello',
        'Mangas',
        'Puños',
        "Torso",
    ];



    const [selectedItem2, setSelectedItem2] = useState(chombaDorsoCuello);
    const [imageColors2, setImageColors2] = useState({
        [chombaDorsoCuello]: '#FFFFFF',
        [chombaDorsoMangas]: '#FFFFFF',
        [chombaDorsoPuños]: '#FFFFFF',
        [chombaDorsoTorso]: '#FFFFFF',

    });


    const canvasRefs2 = useMemo(() => {
        const refs = {};
        images2.forEach((image) => (refs[image] = React.createRef()));
        return refs;
    }, [images2]);

    const handleImageChange2 = (image) => {
        setSelectedItem2(image);
        setActiveButtons((prevActiveButtons) =>
            prevActiveButtons.includes(image)
                ? prevActiveButtons.filter((item) => item !== image)
                : [image]
        );
    };

    const handleColorChange2 = (event) => {
        setImageColors2({
            ...imageColors2,
            [selectedItem2]: event.target.value,
        });
    };

    const handleFront = () => {
        setFrente(true);
        setdisabledButtons(true)

    };

    const handleBack = () => {
        setFrente(false);
        setdisabledButtons(false)
    };

    const config = {
        title: '¡Guarda esta parte antes de continuar!',
        content: (

            <div>¿Seguro que quieres avanzar?</div>

        ),
        onOk: handleBack,
    };

    const config2 = {
        title: '¡Guarda esta parte antes de continuar!',
        content: (

            <div>¿Seguro que quieres avanzar?</div>

        ),
        onOk: handleFront,
    };

    useEffect(() => {

        const updateImageColor = (imageName, color) => {
            const canvas = canvasRefs[imageName].current;
            const ctx = canvas.getContext('2d');
            const img = new Image();

            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;

                const red = parseInt(color.substr(1, 2), 16);
                const green = parseInt(color.substr(3, 2), 16);
                const blue = parseInt(color.substr(5, 2), 16);

                for (let i = 0; i < data.length; i += 4) {
                    if (data[i + 3] > 0) {
                        data[i] = red;
                        data[i + 1] = green;
                        data[i + 2] = blue;
                    }
                }

                ctx.putImageData(imageData, 0, 0);
            };

            img.src = imageName;
        };

        Object.entries(imageColors).forEach(([imageName, color]) => {
            updateImageColor(imageName, color);
        });

    }, [imageColors, canvasRefs]);

    useEffect(() => {

        const updateImageColor2 = (imageName, color) => {
            const canvas2 = canvasRefs2[imageName].current;
            if (!canvas2) return; // Ensure canvas2 is not null

            const ctx2 = canvas2.getContext('2d');
            const img2 = new Image();

            img2.onload = function () {
                canvas2.width = img2.width;
                canvas2.height = img2.height;
                ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
                ctx2.drawImage(img2, 0, 0);

                const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
                const data = imageData2.data;

                const red = parseInt(color.substr(1, 2), 16);
                const green = parseInt(color.substr(3, 2), 16);
                const blue = parseInt(color.substr(5, 2), 16);

                for (let i = 0; i < data.length; i += 4) {
                    if (data[i + 3] > 0) {
                        data[i] = red;
                        data[i + 1] = green;
                        data[i + 2] = blue;
                    }
                }

                ctx2.putImageData(imageData2, 0, 0);
            };

            img2.src = imageName;
        };

        Object.entries(imageColors2).forEach(([imageNames2, color]) => {
            updateImageColor2(imageNames2, color);
        });

    }, [imageColors2, canvasRefs2]);

    return (

        <div className="body-diseños">

            <div className="container py-5">

                <div className="row-diseño">

                    <div className="col-lg-8 display">

                        <h1>Diseña tu ropa</h1>

                        <div id="myDiv">

                            <div className="card card-content">

                                <div className="memeText1-2" id="texto-1" ref={constcontainerRef}>

                                    <div className="box" ref={boxRef}>
                                        <p id="family-p-1" style={{ fontSize: text1FontSize, color: colorText1 }}>{text1}</p>
                                    </div>

                                </div>

                                <div className="memeText2-2" id="texto-2" ref={constcontainerRef2}>

                                    <div className="box" ref={boxRef2}>
                                        <p id="family-p-2" style={{ fontSize: text2FontSize, color: colorText2 }} >{text2}</p>
                                    </div>

                                </div>

                                <div className="memeText3-2" id="texto-3" ref={constcontainerRef3}>

                                    <div className="box" ref={boxRef3}>
                                        <p id="family-p-1" style={{ fontSize: text3FontSize, color: colorText3 }}>{text3}</p>
                                    </div>

                                </div>

                                <div className="memeText4-2" id="texto-4" ref={constcontainerRef4}>

                                    <div className="box" ref={boxRef4}>
                                        <p id="family-p-2" style={{ fontSize: text4FontSize, color: colorText4 }} >{text4}</p>
                                    </div>

                                </div>

                                {frente ? <div className="container-buzoFrente-backbutton">
                                    <div className="buzo-container">
                                        {images.map((image) => (

                                            <canvas key={image} ref={canvasRefs[image]} className="position-images"></canvas>


                                        ))}

                                        <img
                                            src={chombaFrenteContorno}
                                            className='buzoContorno'
                                            alt="Chomba"
                                        />
                                    </div>
                                </div> :

                                    <div className="container-buzoFrente-backbutton">
                                        <div className="buzo-container">
                                            {images2.map((image) => (

                                                <canvas key={image} ref={canvasRefs2[image]} className="position-images"></canvas>


                                            ))}

                                            <img
                                                src={chombaDorsoContorno}
                                                className='buzoContorno'
                                                alt="Chomba"
                                            />
                                        </div>
                                    </div>
                                }


                            </div>

                        </div>



                    </div>

                    <div className="col-lg-4 settings">

                        <div className="card bg-ligth container">

                            <h3 className="text-center">Settings</h3>

                            <button onClick={guardarContenido} className="btn btn-primary btn-sm mb-2">Guarda tu chomba</button>

                            <hr />

                            <h4>Colorea</h4>

                            <div className="button-frente-imagenesContainer">
                                <ReachableContext.Provider value="Light">
                                    <div className="container">
                                        <Button
                                            onClick={() => {
                                                modal.confirm(config2);
                                            }}

                                            className="botonesResponsive"

                                        >
                                            Frente
                                        </Button>

                                    </div>
                                    {/* `contextHolder` should always be placed under the context you want to access */}
                                    {contextHolder}

                                    {/* Can not access this context since `contextHolder` is not in it */}
                                    <UnreachableContext.Provider value="Bamboo" />
                                </ReachableContext.Provider>



                                <div className="image-buttons">
                                    {images.map((image, index) =>
                                        disabledButtons ? (
                                            <Button
                                                key={image}
                                                onClick={() => handleImageChange(image)}
                                                type={activeButtons.includes(image) ? 'primary' : 'default'}
                                                style={{ margin: "0.5rem" }}
                                            >
                                                {imageNames[index]}
                                            </Button>
                                        )
                                            :
                                            <Button
                                                disabled={true}
                                                style={{ margin: "0.5rem" }}
                                                key={image}
                                                onClick={() => handleImageChange(image)}>
                                                {imageNames[index]}
                                            </Button>
                                    )}
                                </div>
                                <div className="eligeColor">ELIGE TU COLOR</div>
                                {disabledButtons ?
                                    <Input
                                        style={{ width: "70px", marginBottom: "1rem" }}
                                        type="color"
                                        value={imageColors[selectedItem]}
                                        onChange={handleColorChange}
                                    />
                                    :
                                    <Input
                                        style={{ width: "70px", marginBottom: "1rem" }}
                                        disabled
                                        type="color"
                                        value={imageColors[selectedItem]}
                                        onChange={handleColorChange}
                                    />
                                }

                            </div>

                            <div className="button-dorso-imagenesContainer">


                                <ReachableContext.Provider value="Light">
                                    <div className="container">
                                        <Button
                                            onClick={() => {
                                                modal.confirm(config);
                                            }}

                                            className="botonesResponsive"


                                        >
                                            Dorso
                                        </Button>

                                    </div>
                                    {/* `contextHolder` should always be placed under the context you want to access */}
                                    {contextHolder}

                                    {/* Can not access this context since `contextHolder` is not in it */}
                                    <UnreachableContext.Provider value="Bamboo" />
                                </ReachableContext.Provider>

                                <div className="image-buttons">
                                    {images2.map((image2, index) => (
                                        disabledButtons ? (
                                            <Button
                                                disabled={true}
                                                key={image2}
                                                onClick={() => handleImageChange2(image2)}
                                                style={{ margin: "0.5rem" }}
                                                type={activeButtons.includes(image2) ? 'primary' : 'default'}
                                            >
                                                {imageNames2[index]}
                                            </Button>
                                        )
                                            :
                                            <Button
                                                key={image2}
                                                style={{ margin: "0.5rem" }}
                                                onClick={() => handleImageChange2(image2)}
                                                type={activeButtons.includes(image2) ? 'primary' : 'default'}
                                            >
                                                {imageNames2[index]}
                                            </Button>
                                    ))}
                                </div>
                                <div className="eligeColor">ELIGE TU COLOR</div>

                                {disabledButtons ?
                                    <Input
                                        style={{ width: "70px", marginBottom: "1rem" }}
                                        disabled
                                        type="color"
                                        value={imageColors2[selectedItem2]}
                                        onChange={handleColorChange2}
                                    />
                                    :
                                    <Input
                                        style={{ width: "70px", marginBottom: "1rem" }}
                                        type="color"
                                        value={imageColors2[selectedItem2]}
                                        onChange={handleColorChange2}
                                    />
                                }
                            </div>

                            <h4>Escribi el texto</h4>

                            <input type="text" className="form-control form-control-sm mb-2" placeholder="Text 1" onChange={onChangeText1} />
                            <button className="btn btn-primary btn-sm mb-2" onClick={texto1Agregar}>Agregar Texto 1</button>
                            <button className="btn btn-primary btn-sm mb-2" onClick={texto1Girar}>Girar Texto 1</button>

                            <input type="text" className="form-control form-control-sm mb-2" placeholder="Text 2" onChange={onChangeText2} />
                            <button className="btn btn-primary btn-sm mb-2" onClick={texto2Agregar}>Agregar Texto 2</button>
                            <button className="btn btn-primary btn-sm mb-2" onClick={texto2Girar}>Girar Texto 2</button>

                            <input type="text" className="form-control form-control-sm mb-2" placeholder="Text 3" onChange={onChangeText3} />
                            <button className="btn btn-primary btn-sm mb-2" onClick={texto3Agregar}>Agregar Texto 3</button>
                            <button className="btn btn-primary btn-sm mb-2" onClick={texto3Girar}>Girar Texto 3</button>

                            <input type="text" className="form-control form-control-sm mb-2" placeholder="Text 4" onChange={onChangeText4} />
                            <button className="btn btn-primary btn-sm mb-2" onClick={texto4Agregar}>Agregar Texto 4</button>
                            <button className="btn btn-primary btn-sm mb-2" onClick={texto4Girar}>Girar Texto 4</button>


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

                            <h4>Tamaño del texto 3</h4>
                            <select className="form-select form-control-sm mb-2" onChange={onChangeSizeText3}>
                                {arrayFontSize && arrayFontSize.map((size) => {
                                    return (
                                        <option>
                                            {size}
                                        </option>
                                    );
                                })}
                            </select>

                            <h4>Tamaño del texto 4</h4>
                            <select className="form-select form-control-sm mb-2" onChange={onChangeSizeText4}>
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

                            <h4>Color del texto 3</h4>
                            <select className="form-select form-control-sm mb-2" onChange={onChangeColor3}>
                                <option>Selecciona el color</option>
                                {arrayColorText && arrayColorText.map((color) => {
                                    return (
                                        <option>
                                            {color}
                                        </option>
                                    );
                                })}
                            </select>

                            <h4>Color del texto 4</h4>
                            <select className="form-select form-control-sm mb-2" onChange={onChangeColor4}>
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

                        </div>

                    </div>

                </div>

            </div >

        </div >

    );

};

export default Diseño;