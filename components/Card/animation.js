import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Animation.module.scss";

const Animation = () =>{
    return (
        <section className={styles.animation}> 
    <div className={styles.animation__container}>
        {/* <section className={styles.point2" id="single__request}> */}
            <div className={styles.animation__data}>
                <h2 className={styles.animation__title}>Hacer que las respuesta de sus consultas sean más rápidos y eficientes</h2>
                <p className={styles.animation__description}>Un lenguaje de consulta desde el lado del cliente que puede reemplazar a las OMR que se utilizan en el lado del servidor, es mucho más óptimo que las APIs
                tradicionales<br/><br/>
                Es momento de implementar esta tecnologia a sus Apps para ver el poder que tiene.
                </p>
            </div>
            <div className={styles.animation__media}>
                {/* <img src="/img/phone.svg" width="496" height="440" className={styles.animation__phone_img}/> */}
                <img src="/img/phone.svg" width="496" height="440" alt="raulcv iphone image" className={styles.animation__phone_img}/>
                <div className={styles.animation__query}>
                    <pre className={styles.animation__Graphql}>
                        <div className={styles.token__line}>
                            <span className={styles.server__curlybracket}>{'{'}</span>
                            <span className={styles.token_plain}></span>
                        </div>
                        <div className={styles.token__line}>
                            <span className={styles.server__plain}>    god </span>
                            <span className={styles.server__curlybracket}>{'{'}</span>
                            <span className={styles.server__plain}></span>
                            </div>
                        <div className={styles.token__line}>
                            <span className={styles.server__plain}>    name</span>
                        </div>
                        <div className={styles.token__line}>
                            <span className={styles.server__plain}>    members </span>
                            <span className={styles.server__curlybracket}>{'{'}</span>
                            <span className={styles.server__plain}></span>
                        </div>
                        <div className={styles.token__line}>
                            <span className={styles.server__plain}>        name</span>
                        </div>
                        <div className={styles.token__line}>
                            <span className={styles.server__plain}>        </span>
                            <span className={styles.server__curlybracket}>{'}'}</span>
                            <span className={styles.server__plain}></span>
                        </div>
                        <div className={styles.token__line}>
                            <span className={styles.server__plain}>    </span>
                            <span className={styles.server__curlybracket}>{']'}</span>
                            <span className={styles.server__plain}></span>
                        </div>
                        <div className={styles.token__line}>
                            <span className={styles.server__plain}></span>
                            <span className={styles.server__curlybracket}>{']'}</span>
                        </div>
                    </pre>
                </div>
                <div className={styles.animation__response}>
                    <pre className={styles.animation__Json}>
                        <div className={styles.token__line}>
                            <span className={styles.server__curlybracket}>{'{'}</span>
                            <span className={styles.server__plain}></span>
                        </div>
                        <div className={styles.token__line}>
                            <span className={styles.server__plain}>    </span>
                            <span className={styles.server_attr_name}>"god"</span>
                            <span className={styles.server__curlybracket}>{':'}</span>
                            <span className={styles.server__plain}> </span>
                            <span className={styles.server__curlybracket}>{'{'}</span>
                            <span className={styles.server__plain}></span>
                        </div>
                        <div className={styles.token__line}>
                            <span className={styles.server__plain}>      </span>
                            <span className={styles.desponse_name}>"name"</span>
                            <span className={styles.server__curlybracket}>:</span>
                            <span className={styles.server__plain}> </span>
                            <span className={styles.response_string}>"Zeus"</span>
                            <span className={styles.server__curlybracket}>{','}</span>
                            <span className={styles.server__plain}></span>
                        </div>
                        <div className={styles.token__line}>
                            <span className={styles.server__plain}>      </span>
                            <span className={styles.desponse_name}>"members"</span>
                            <span className={styles.server__curlybracket}>:</span>
                            <span className={styles.server__plain}> </span>
                            <span className={styles.server__curlybracket}>[</span>
                            <span className={styles.server__plain}></span>
                        </div>
                        <div className={styles.token__line}>
                            <span className={styles.server__plain}>        </span>
                            <span className={styles.server__curlybracket}>{'{'}</span>
                            <span className={styles.server__plain}> </span>
                            <span className={styles.desponse_name}>"name"</span>
                            <span className={styles.server__curlybracket}>:</span>
                            <span className={styles.server__plain}> </span>
                            <span className={styles.response_string}>"Afrodita"</span>
                            <span className={styles.server__plain}> </span>
                            <span className={styles.server__curlybracket}>{']'}</span>
                            <span className={styles.server__curlybracket}>{','}</span>
                            <span className={styles.server__plain}></span>
                        </div>
                        <div className={styles.token__line}>
                            <span className={styles.server__plain}>        </span>
                            <span className={styles.server__curlybracket}>{'{'}</span>
                            <span className={styles.server__plain}> </span>
                            <span className={styles.desponse_name}>"name"</span>
                            <span className={styles.server__curlybracket}>:</span>
                            <span className={styles.server__plain}> </span>
                            <span className={styles.response_string}>"Hades"</span>
                            <span className={styles.server__plain}> </span>
                            <span className={styles.server__curlybracket}>{']'}</span>
                            <span className={styles.server__curlybracket}>{','}</span>
                            <span className={styles.server__plain}></span>
                        </div>
                        <div className={styles.token__line}>
                            <span className={styles.server__plain}>        </span>
                            <span className={styles.server__curlybracket}>{'{'}</span>
                            <span className={styles.server__plain}> </span>
                            <span className={styles.desponse_name}>"name"</span>
                            <span className={styles.server__curlybracket}>:</span>
                            <span className={styles.server__plain}> </span>
                            <span className={styles.response_string}>"Poseidon"</span>
                            <span className={styles.server__plain}> </span>
                            <span className={styles.server__curlybracket}>{']'}</span>
                            <span className={styles.server__curlybracket}>{','}</span>
                            <span className={styles.server__plain}></span>
                        </div>
                        <div className={styles.token__line}>
                            <span className={styles.server__plain}>        </span>
                            <span className={styles.server__curlybracket}>{'{'}</span>
                            <span className={styles.server__plain}> </span>
                            <span className={styles.desponse_name}>"name"</span>
                            <span className={styles.server__curlybracket}>:</span>
                            <span className={styles.server__plain}> </span>
                            <span className={styles.response_string}>"Hera"</span>
                            <span className={styles.server__plain}> </span>
                            <span className={styles.server__curlybracket}>{']'}</span>
                            <span className={styles.server__plain}></span>
                        </div>
                        <div className={styles.token__line}>
                            <span className={styles.server__plain}>      </span>
                            <span className={styles.server__curlybracket}>{']'}</span>
                            <span className={styles.server__plain}></span>
                        </div>
                        <div className={styles.token__line}>
                            <span className={styles.server__plain}>    </span>
                            <span className={styles.server__curlybracket}>{']'}</span>
                            <span className={styles.server__plain}></span>
                        </div>
                        <div className={styles.token__line}>
                            <span className={styles.server__plain}></span>
                            <span className={styles.server__curlybracket}>{']'}</span>
                        </div>
                    </pre>
                </div>
                <img src="/img/server.svg" width="496" height="440" alt="raul server image" className={styles.animation__server_img}/>
            </div>
        {/* </section> */}
    </div>
    </section>
    );
    };
export default Animation;