import React, { useState } from 'react';
import "./card.css";
import IMG1MH from "../../img/michael-ham-back.jpeg";
import IMG2HC from "../../img/buzo-holy-cross-back.jpg";
import IMG3 from "../../img/buzo-inventado-back.jpg";



function Cards() {

    const [state, setState] = useState(1);

    const onChangeStateSuma = () => {

        if (state === 5) {
            return
        } else {

            let number = state + 1;
            setState(number);

        }

    };

    const onChangeStateResta = () => {

        if (state === 1) {
            return
        } else {

            let number = state - 1;
            setState(number);

        }

    };

    console.log(state);

    return (

        <div>

            {state === 1 ?

                <div className="body-card">

                    <div className="u-center-text u-margin-bottom-80">

                        <h2 className="heading-secondary">
                            Algunos de nuestros trabajos
                        </h2>

                    </div>

                    <div className='card-container'>

                        <div className="card-Card">

                            <div className="card-side front">

                                <div className='card-picture card-picture-1'>
                                    &nbsp;
                                </div>

                                <div className='card-detail'>
                                    <ul>
                                        <li>Holy Cross</li>
                                        <li>Año 2023</li>
                                        <li>Friza invisble</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="card-side back">
                                <img src={IMG2HC} alt='Buzos' className='img-back' />
                            </div>

                        </div>

                        <div className="card-Card">

                            <div className="card-side front">

                                <div className='card-picture card-picture-2'>
                                    &nbsp;
                                </div>

                                <div className='card-detail'>
                                    <ul>
                                        <li>Michael Ham</li>
                                        <li>Año 2023</li>
                                        <li>Friza invisble</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="card-side back">
                                <img src={IMG1MH} alt='Buzos' className='img-back' />
                            </div>

                        </div>

                        <div className="card-Card">

                            <div className="card-side front">

                                <div className='card-picture card-picture-3'>
                                    &nbsp;
                                </div>

                                <div className='card-detail'>
                                    <ul>
                                        <li>BDMS</li>
                                        <li>Año 2023</li>
                                        <li>Friza invisble</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="card-side back">
                                <img src={IMG3} alt='Buzos' className='img-back' />
                            </div>

                        </div>

                    </div>

                    <div className='button-container'>
                        <button to="/contact" className="button-card" onClick={onChangeStateResta}> &larr; Prev</button>
                        <p className='page'>{state}</p>
                        <button to="/contact" className="button-card" onClick={onChangeStateSuma}>Next &rarr;</button>
                    </div>

                </div>

                :

                null
            }

            {state === 2 ?

                <div className="body-card">

                    <div className="u-center-text u-margin-bottom-80">

                        <h2 className="heading-secondary">
                            Algunos de nuestros trabajos
                        </h2>

                    </div>

                    <div className='card-container'>

                        <div className="card-Card">

                            <div className="card-side front">

                                <div className='card-picture card-picture-1'>
                                    &nbsp;
                                </div>

                                <div className='card-detail'>
                                    <ul>
                                        <li>Holy Cross</li>
                                        <li>Año 2023</li>
                                        <li>Friza invisble</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="card-side back">
                                <img src={IMG2HC} alt='Buzos' className='img-back' />
                            </div>

                        </div>

                        <div className="card-Card">

                            <div className="card-side front">

                                <div className='card-picture card-picture-2'>
                                    &nbsp;
                                </div>

                                <div className='card-detail'>
                                    <ul>
                                        <li>Michael Ham</li>
                                        <li>Año 2023</li>
                                        <li>Friza invisble</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="card-side back">
                                <img src={IMG1MH} alt='Buzos' className='img-back' />
                            </div>

                        </div>

                        <div className="card-Card">

                            <div className="card-side front">

                                <div className='card-picture card-picture-3'>
                                    &nbsp;
                                </div>

                                <div className='card-detail'>
                                    <ul>
                                        <li>BDMS</li>
                                        <li>Año 2023</li>
                                        <li>Friza invisble</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="card-side back">
                                <img src={IMG3} alt='Buzos' className='img-back' />
                            </div>

                        </div>

                    </div>

                    <div className='button-container'>
                        <button to="/contact" className="button-card" onClick={onChangeStateResta}> &larr; Prev</button>
                        <p className='page'>{state}</p>
                        <button to="/contact" className="button-card" onClick={onChangeStateSuma}>Next &rarr;</button>
                    </div>

                </div>

                :

                null
            }

            {state === 3 ?

                <div className="body-card">

                    <div className="u-center-text u-margin-bottom-80">

                        <h2 className="heading-secondary">
                            Algunos de nuestros trabajos
                        </h2>

                    </div>

                    <div className='card-container'>

                        <div className="card-Card">

                            <div className="card-side front">

                                <div className='card-picture card-picture-1'>
                                    &nbsp;
                                </div>

                                <div className='card-detail'>
                                    <ul>
                                        <li>Holy Cross</li>
                                        <li>Año 2023</li>
                                        <li>Friza invisble</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="card-side back">
                                <img src={IMG2HC} alt='Buzos' className='img-back' />
                            </div>

                        </div>

                        <div className="card-Card">

                            <div className="card-side front">

                                <div className='card-picture card-picture-2'>
                                    &nbsp;
                                </div>

                                <div className='card-detail'>
                                    <ul>
                                        <li>Michael Ham</li>
                                        <li>Año 2023</li>
                                        <li>Friza invisble</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="card-side back">
                                <img src={IMG1MH} alt='Buzos' className='img-back' />
                            </div>

                        </div>

                        <div className="card-Card">

                            <div className="card-side front">

                                <div className='card-picture card-picture-3'>
                                    &nbsp;
                                </div>

                                <div className='card-detail'>
                                    <ul>
                                        <li>BDMS</li>
                                        <li>Año 2023</li>
                                        <li>Friza invisble</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="card-side back">
                                <img src={IMG3} alt='Buzos' className='img-back' />
                            </div>

                        </div>

                    </div>

                    <div className='button-container'>
                        <button to="/contact" className="button-card" onClick={onChangeStateResta}> &larr; Prev</button>
                        <p className='page'>{state}</p>
                        <button to="/contact" className="button-card" onClick={onChangeStateSuma}>Next &rarr;</button>
                    </div>

                </div>

                :

                null
            }

            {state === 4 ?

                <div className="body-card">

                    <div className="u-center-text u-margin-bottom-80">

                        <h2 className="heading-secondary">
                            Algunos de nuestros trabajos
                        </h2>

                    </div>

                    <div className='card-container'>

                        <div className="card-Card">

                            <div className="card-side front">

                                <div className='card-picture card-picture-1'>
                                    &nbsp;
                                </div>

                                <div className='card-detail'>
                                    <ul>
                                        <li>Holy Cross</li>
                                        <li>Año 2023</li>
                                        <li>Friza invisble</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="card-side back">
                                <img src={IMG2HC} alt='Buzos' className='img-back' />
                            </div>

                        </div>

                        <div className="card-Card">

                            <div className="card-side front">

                                <div className='card-picture card-picture-2'>
                                    &nbsp;
                                </div>

                                <div className='card-detail'>
                                    <ul>
                                        <li>Michael Ham</li>
                                        <li>Año 2023</li>
                                        <li>Friza invisble</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="card-side back">
                                <img src={IMG1MH} alt='Buzos' className='img-back' />
                            </div>

                        </div>

                        <div className="card-Card">

                            <div className="card-side front">

                                <div className='card-picture card-picture-3'>
                                    &nbsp;
                                </div>

                                <div className='card-detail'>
                                    <ul>
                                        <li>BDMS</li>
                                        <li>Año 2023</li>
                                        <li>Friza invisble</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="card-side back">
                                <img src={IMG3} alt='Buzos' className='img-back' />
                            </div>

                        </div>

                    </div>

                    <div className='button-container'>
                        <button to="/contact" className="button-card" onClick={onChangeStateResta}> &larr; Prev</button>
                        <p className='page'>{state}</p>
                        <button to="/contact" className="button-card" onClick={onChangeStateSuma}>Next &rarr;</button>
                    </div>

                </div>

                :

                null
            }

            {state === 5 ?

                <div className="body-card">

                    <div className="u-center-text u-margin-bottom-80">

                        <h2 className="heading-secondary">
                            Algunos de nuestros trabajos
                        </h2>

                    </div>

                    <div className='card-container'>

                        <div className="card-Card">

                            <div className="card-side front">

                                <div className='card-picture card-picture-1'>
                                    &nbsp;
                                </div>

                                <div className='card-detail'>
                                    <ul>
                                        <li>Holy Cross</li>
                                        <li>Año 2023</li>
                                        <li>Friza invisble</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="card-side back">
                                <img src={IMG2HC} alt='Buzos' className='img-back' />
                            </div>

                        </div>

                        <div className="card-Card">

                            <div className="card-side front">

                                <div className='card-picture card-picture-2'>
                                    &nbsp;
                                </div>

                                <div className='card-detail'>
                                    <ul>
                                        <li>Michael Ham</li>
                                        <li>Año 2023</li>
                                        <li>Friza invisble</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="card-side back">
                                <img src={IMG1MH} alt='Buzos' className='img-back' />
                            </div>

                        </div>

                        <div className="card-Card">

                            <div className="card-side front">

                                <div className='card-picture card-picture-3'>
                                    &nbsp;
                                </div>

                                <div className='card-detail'>
                                    <ul>
                                        <li>BDMS</li>
                                        <li>Año 2023</li>
                                        <li>Friza invisble</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="card-side back">
                                <img src={IMG3} alt='Buzos' className='img-back' />
                            </div>

                        </div>

                    </div>

                    <div className='button-container'>
                        <button to="/contact" className="button-card" onClick={onChangeStateResta}> &larr; Prev</button>
                        <p className='page'>{state}</p>
                        <button to="/contact" className="button-card" onClick={onChangeStateSuma}>Next &rarr;</button>
                    </div>

                </div>

                :

                null
            }

        </div>

    );

};

export default Cards;